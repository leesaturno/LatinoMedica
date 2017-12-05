<?php
/**
 * AgriyaBase - Lumen framework
 *
 * PHP version 5.5.9
 *
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Agriya <info@agriya.com>
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use App\UserProfile;
use Plugins\Subscriptions\Model\Subscription;
use App\Subscribe;
use App\TransactionLog;
use App\Workplace;
use App\Services\AppointmentSettingsService;
use App\Services\UserProfileService;
use App\Country;
use App\City;
use App\Language;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\UserTransformer;
use Illuminate\Support\Facades\Hash;
use App\Services\UserService;
use Carbon;
use DB;
/**
 * Users resource representation.
 * @Resource("Admin/AdminUsers")
 */
class AdminUsersController extends Controller
{
     /**
     * @var UserService
     */
    protected $user_service;
    /**
     * @var UserProfileService
     */
    protected $UserProfileService;
    /**
     * @var AppointmentSettings
     */
    protected $AppointmentSettingsService;

    /**
     * AdminUsersController constructor.
     */
    public function __construct(UserService $user_Service, UserProfileService $user_profile_service, AppointmentSettingsService $appointment_settings_service)
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
        $this->UserService = $user_Service;
        $this->_paypal_conf = config('paypal');
        $this->_paypal_mode = $this->_paypal_conf['is_live_mode'] == 1?'live':'sandbox';
        $this->UserProfileService = $user_profile_service;
        $this->AppointmentSettingsService = $appointment_settings_service;
    }

    /**
     * Show all users
     * Get a JSON representation of all the users.
     *
     * @Get("/users?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the users list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the users list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort users by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display users By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search users.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $users = User::with('LastLoginIp', 'RegisterIp', 'subscription')->filterByRequest($request)->paginate(20);
        return $this->response->paginator($users, (new UserTransformer)->setDefaultIncludes(['LastLoginIp', 'RegisterIp', 'Subscription']));
    }

    /**
     * Store a new user.
     * Store a new city with a `role_id`, `username`, `email`, `password`, `is_active` and `is_email_confirmed`.
     * @Post("/users")
     * @Transaction({
     *      @Request({"role_id": 1, "name": "AHSAN", "email": "guest@gmail.com", "password": "XXXXXX", "is_active": 1, "is_email_confirmed": 1 }),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
     * })
     */
    public function store(Request $request)
    {
        $user_data = $request->only('role_id','username', 'email', 'password','is_email_confirmed','mobile','first_name','last_name','phone','postal_code','gender_id','country_id', 'city_id','country_name', 'city_name', 'state_id', 'address', 'language_id', 'latitude', 'longitude', 'subscription_id');
        $userEmailCheck = $this->getEmailCheck($user_data['email'], 0);
        if ($userEmailCheck === true) {
             throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Email already exists.');
        }
        $user_data['country_id'] = "";
        if (isset($user_data['country_name']) && $user_data['country_name'] != "") {
          $countryDetails = Country::where('name', '=', $request['country_name'])
				                                    ->first();
          if (!empty($countryDetails)) {
              $user_data['country_id'] = $countryDetails->id;
          }
        }
        $user_data['city_id'] = "";
        if (isset($user_data['city_name']) && $user_data['city_name'] != "") {
             $cityDetails = City::where('name', '=', $request['city_name'])
				                                    ->first();
            if (!empty($cityDetails)) {
                $user_data['city_id'] = $cityDetails->id;
            } else {
                $city_details = [
                    'name'       => $request['city_name'],
                    'country_id' => $user_data['country_id'],
                    'latitude'   => $request['latitude'],
                    'longitude'  => $request['longitude'],
                    'is_active'  => 1,
                ];
                $city = City::create($city_details);
                $user_data['city_id'] = $city->id;
            }
        }
        if ($user_data['role_id'] == config('constants.ConstUserTypes.Doctor')) {
            if ($user_data['subscription_id'] != '' && $user_data['subscription_id'] != 9) {
               $subscriptionDetails = Subscription::where('id', '=', $user_data['subscription_id'])
				                                    ->first()->toArray();
               $subscription_end = date('Y-m-d', strtotime("+".$subscriptionDetails['period_days']." days"));
               $user_data['subscription_id'] = $user_data['subscription_id'];
               $user_data['subscription_end'] = date('Y-m-d', strtotime("+".$subscriptionDetails['period_days']." days"));
               $user_data['is_trial'] = false;               
           } else {
                $user_data['is_trial'] = true;
                $user_data['subscription_id'] = 9;
                $user_data['subscription_end'] = Carbon::parse(Carbon::now()->addDays(config('site.free.subscription_days')))->format('Y-m-d');
           }
        } else {
            $user_data['subscription_id'] = false;
            $user_data['role_id'] = config('constants.ConstUserTypes.User');
        }
        $validator = Validator::make($user_data, User::GetValidationRule());
        if ($validator->passes()) {
            if ($request->has('password')) {
                $user_data['password'] = Hash::make($request->password);
            }
            $user_data['is_active'] = true;
            $user = User::create($user_data);
            if ($user) {
                /* For Appintment Settings Table */
                if ($user_data['role_id'] == config('constants.ConstUserTypes.Doctor')) {
                    $appointment_settings_data['user_id'] = $user->id;
					$appointment_settings_data['calendar_slot_id'] = 30;
					$appointment_settings_data['practice_open']= '10:00:00';
					$appointment_settings_data['practice_close'] = '20:00:00';
					$appointment_settings_data['is_active'] = 1;
                    
                    $work_location['doctor_id'] = $user->id;
                    $work_location['location'] = isset($user_data['address']) ? $user_data['address'] : 'venezuela';
                    $work_location['city_id'] = isset($user_data['city_id']) ? $user_data['city_id'] : 1;
                    $work_location['state_id'] = isset($user_data['state_id']) ? $user_data['state_id'] : 1;
                    $work_location['country_id'] = isset($user_data['country_id']) ? $user_data['country_id'] : 1;
                    $work_location['work_phone_number'] = isset($user_data['phone']) ? $user_data['phone'] : '9999999999';
                    $work_location['price'] = 0;
                    $work_location['is_active'] = 0;
                    $work_location['is_preferred_location'] = 0;
                    $work_location['latitude'] = isset($user_data['latitude']) ? $user_data['latitude'] : '';
                    $work_location['longitude'] = isset($user_data['longitude']) ? $user_data['longitude'] : '';
                    $workplaces = Workplace::create($work_location);
                    $appointment_settings_data['work_place_id'] = $workplaces->id;
                    $appointment_settings = $this->AppointmentSettingsService->save_appointment_settings($appointment_settings_data);
                    $appointment_settings->save();
                }
                /* For User Profile Table */
                $user_profile_data['user_id']                    = $user->id;
                $user_profile_data['first_name']                 = $user_data['first_name'];
                $user_profile_data['last_name']                  = $user_data['last_name'];
                $user_profile_data['display_name']               = $user_data['first_name'].' '.$user_data['last_name'];
                $user_profile_data['gender_id']                  = $user_data['gender_id'];
                $user_profile_data['postal_code']                = $user_data['postal_code'];
                $user_profile_data['phone']                      = $user_data['phone'];
                $user_profile_data['country_id']                 = $user_data['country_id'];
                $user_profile_data['city_id']                    = $user_data['city_id'];
                $user_profile_data['state_id']                   = $user_data['state_id'];
                $user_profile_data['address']                    = $user_data['address'];
                $user_profile_data['latitude']                   = $user_data['latitude'];
                $user_profile_data['longitude']                  = $user_data['longitude'];
                $user_profile = $this->UserProfileService->save_user_profile_details($user_profile_data);
                $user_profile->save();
                return response()->json(['Success' => 'User has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Edit the specified user.
     * Edit the user with a `id`.
     * @Get("/users/{id}/edit")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "role_id": 1, "name": "AHSAN", "email": "guest@gmail.com", "password": "XXXXXX", "is_active": 1, "is_email_confirmed": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function edit($id)
    {
        $user = User::find($id);
        if (!$user) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($user, new UserTransformer);
    }

    /**
     * Show the specified user.
     * Show the user with a `id`.
     * @Get("/users/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "role_id": 1, "name": "AHSAN", "email": "guest@gmail.com", "password": "XXXXXX", "is_active": 1, "is_email_confirmed": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($user, (new UserTransformer)->setDefaultIncludes(['LastLoginIp', 'RegisterIp', 'user_profile']));
    }

    /**
     * Update User
     * Update user with a `id`.
     * @Put("/users?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {}, "status_code": 422})
     * })
     */
    public function update(Request $request, $id)
    {
        $user_data = $request->only('role_id','is_email_confirmed', 'username','mobile','first_name','last_name','phone','postal_code','gender_id','country_id', 'city_id','country_name', 'city_name', 'state_id', 'address','language_id', 'latitude', 'longitude', 'is_active', 'is_verified', 'email', 'dob', 'is_featured', 'subscription_id');
        unset($user_data['country_name']);
        unset($user_data['city_name']);
        $dob = $user_data['dob'];
        unset($user_data['dob']);
        $validator = Validator::make($user_data, array_merge(User::GetValidationRule(), User::GetEditValidationRule()));
        $user = false;
        if ($request->has('id')) {
            $user = User::find($id);
            $user = ($request->id != $id) ? false : $user;
            $user_is_active = $user->is_active;
            $subscriptionCheck = false;
            if ($user_data['subscription_id'] != $user->subscription_id) {               
               $subscribeList = Subscribe::where('user_id', '=', $id)
                                          ->where('status', '!=', 1)
                                          ->first(); 
               if (!isset($subscribeList->profile_id) || $subscribeList->subscribed_by == 1) {
                $storedValue = [
                        'user_id' => $id,
                        'receiver_user_id' => 1,
                        'transactionable_type' => 1,
                        'transaction_type_id' => config('constants.ConstPaymentMethod.Admin'),
                        'amount' => '',
                        'description' => 'Admin Upgrade Plan',
                        'payment_gateway_id' => config('constants.ConstPaymentMethod.Admin'),
                        'mode' => $this->_paypal_conf['is_live_mode']
                    ];
                    $subscriptionDetails = Subscription::where('id', '=', $user_data['subscription_id'])
                                            ->first()->toArray();     
                    $subscription_end = date('Y-m-d', strtotime("+".$subscriptionDetails['period_days']." days"));
                    $subscriptionStoredValues = [
                        'user_id' => $id,
                        'subscription_id'=> $user_data['subscription_id'],
                        'profile_id'=> "",
                        'subscription_start'=> date('Y-m-d H:i:s'),
                        'subscription_end'=> $subscription_end,
                        'mode' => $this->_paypal_conf['is_live_mode'],
                        'subscribed_by'  => 1,
                        'status' => config('constants.ConstPaypalStatus.Active')
                    ];
                    //$transaction_status = $this->transaction_log($storedValue,$subscriptionStoredValues);
                    $user_data['subscription_end'] = date('Y-m-d', strtotime("+".$subscriptionDetails['period_days']." days"));
                    //AppointmentSettings::where('user_id', '=', $id)->update(['future_close_date' => $subscription_end]);
                    $user_data['is_trial'] = 0;
               } else {
                   $subscriptionCheck = true;
                   $user_data['subscription_id'] = $user->subscription_id;
                   $subscribeFailMsg = "User have already recurring payment, so we can't upgrade the plan now until the user cancel recurring payment";
                  return response()->json(['Success' => $subscribeFailMsg], 200);
               }
            }
        }
        
        $check_user = User::where('email', $request->email)
            ->where('id', '!=', $id)
            ->first();
        if ($check_user) {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Email already exists.');
        }
        if ($validator->passes() && $user && $subscriptionCheck === false) {
            try {
                $user->update($user_data);
                if ($user_is_active !== $request->is_active && $request->is_active === 1) {
                    // send mail for active
                    $this->UserService->sendStatusMail($user->username, $user->email, 'Admin User Active');
                } else if ($user_is_active !== $request->is_active && $request->is_active === 0) {
                    // send mail for deactive
                    $this->UserService->sendStatusMail($user->username, $user->email, 'Admin User Deactivate');
                }
                return response()->json(['Success' => 'User has been updated'], 200);
            } catch (\Exception $e) {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete the specified user.
     * Delete the user with a `id`.
     * @Delete("/users/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            if ($user->delete()) {
                $this->UserService->sendStatusMail($user->username, $user->email, 'Admin User Delete');
                return response()->json(['Success' => 'User deleted'], 200);
            }
        }
    }
    public function getUsername($first_name,$last_name) {        
        $user = UserProfile::where('first_name', '=', $first_name)->where('last_name', '=', $last_name)->get()->toArray();
        if ($user) {
            return str_slug($first_name.$last_name, '-').'-'.(count($user)+1);
        } else {
            return str_slug($first_name.$last_name, '-');
        }
    }
    /*Check Email*/
    public function getEmailCheck($email, $user_id) {
        if ($user_id == 0) {
            $user = User::where('email', '=', $email)->get()->toArray();
        } else {
            $user = User::where('email', '=', $email)->where('id', '!=', $user_id)->get()->toArray();
        }
        if ($user) {
            return true;
        } else {
            return false;
        }
    }
    public function transaction_log($storedValue,$subscriptionStoredValues) {
        $created = TransactionLog::create($storedValue);
        Subscribe::create($subscriptionStoredValues);
        if ($created) {
           return 'success';
        } else {
            return null;
        }
    }
}