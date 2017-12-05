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
namespace Plugins\Subscriptions\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Plugins\Subscriptions\Transformers\SubscribeTransformer;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\Subscriptions\Model\Subscription;
use Plugins\Subscriptions\Transformers\SubscriptionTransformer;
use App\Subscribe;
use App\User;

/**
 * Subscriptions resource representation.
 *
 * @Resource("UserEudcations")
 */
class SubscriptionsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        // Check the logged user authentication.
        $this->middleware('jwt.auth');
    }

    /**
     * Show all Subscriptions
     *
     * Get a JSON representation of all the Subscriptions.
     *
     * @Get("/subscriptions?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the user educations list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the user educations list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user educations by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display user educations By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search user educations.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $user = $this->auth->user();
        $userDetails = User::where('id','=',$user->id)->first()->toArray();
        $subscriptions = Subscription::where('is_active','=', 1)->get();
        return $this->response->item($subscriptions, (new SubscriptionTransformer));
    }

    public function checkPlanExist($id) {       
        $user = $this->auth->user();
        $userDetails = User::where('id','=',$user->id)->first()->toArray();
        $linkFailed = url('/');
        $linkSuccess = url('/#/subscribe/payment/'.$id);
        if (($userDetails['is_trial'] != 1) && ($userDetails['plan_status'] == 4) && ($userDetails['is_paypal_suspend'] == 1)) {  //suspended
           
            return response()->json(['status'=>'failed', 'message'=>'Already you suspended your plan.Please cancel and try again.','urlgo'=>$linkFailed], 200);
        } else if (($userDetails['is_trial'] != 1) && ($userDetails['plan_status'] == 1)) {  // pending
            
            return response()->json(['status'=>'failed', 'message'=>'Your plan payment status still pending.Please cancel and try again.','urlgo'=>$linkFailed, 200]);
        } else if (($userDetails['is_trial'] != 1) && ($userDetails['plan_status'] == 2)) {  // active
            
            return response()->json(['status'=>'failed', 'message'=>'Already you activated your plan.Please cancel and try again.','urlgo'=>$linkFailed, 200]);
        } else if (($userDetails['is_trial'] != 1) && ($userDetails['subscription_method'] == 1) && ($userDetails['plan_status'] == 2 || $userDetails['plan_status'] == 1)) {
            return response()->json(['status'=>'failed', 'message'=>'Already you paid/activated your plan by manual .Please cancel and try again.','urlgo'=>$linkFailed, 200]);
        }  else {
            return response()->json(['status'=>'success', 'message'=>'Redirecting to payment page...','urlgo'=> $linkSuccess, 200]);
        }
    }
    
    /**
     * Show the specified appointment details.
     * Show the page with a `id`.     *
     * @Get("/subscriptions/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "language_id": 42, "title": "Term and conditions", "slug": "term-and-conditions", "page_content": "XXX", "is_active": 0, "Language": {"id": 42, "name": "English", "iso2": "en", "iso3": "eng", "is_active": 1}}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show($id) {
        $subscription = Subscription::find($id);
        if (!$subscription) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return response()->json($subscription);
    }
    /**
     * Store a new user education.
     *
     * Store a new user education with a `user_id`, `education`, `location`, `organization`, `date`, `is_active`.
     *
     * @Post("/")
     * @Transaction({
     *      @Request({"user_id": 1, "education": "MBBS", "location":"USA", "organization":"Aureus University","date":"2008","is_active":1}),
     *      @Response(200, body={"success": {"name": {"Subscription added successfully."}}}),
     *      @Response(422, body={"error": {"name": {"Subscription already exist."}}})
     * })
     */
    public function store(Request $request) {
        $subscription_data = $request->only('user_id', 'education', 'location', 'organization', 'certification_date', 'vat', 'is_active');
        $user = $this->auth->user();
        $subscription_data['user_id'] = $user->id;
        $validator = Validator::make($subscription_data, Subscription::GetValidationRule());
        if ($validator->passes()) {
            $subscription_data['is_active'] = true;
            $subscription = Subscription::create($subscription_data);
            if ($subscription) {
                return response()->json(['Success' => 'Subscription has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Subscription could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Subscription could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Show the specified Subscription.
     *
     * @Get("/subscriptions?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified user education details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id) {
        $subscription = Subscription::find($id);
        if (!$subscription) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($subscription, (new SubscriptionTransformer));
    }

    /**
     * Update Subscriptions
     *
     * Update Subscriptions with a `id`.
     *
     * @Put("/uyser_educations?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id) {
        $subscription_data = $request->only('education', 'location', 'organization', 'certification_date', 'vat');
        $validator = Validator::make($subscription_data, Subscription::GetValidationRule());
        $subscription = false;
        if ($request->has('id')) {
            $subscription = Subscription::find($id);
            $subscription = ($request->id != $id) ? false : $subscription;
        }
        if ($validator->passes() && $subscription) {
            try {
                $subscription->update($subscription_data);
                return response()->json(['Success' => 'Subscription has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Subscription could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Subscription could not be updated. Please, try again.', $validator->errors());
        }
    }

    public function subscribe() {
        $user = $this->auth->user();
        $subscribe = Subscribe::where(['user_id'=>$user->id])->with(['subscription'])->get();
        return $this->response->item($subscribe, (new SubscribeTransformer)->setDefaultIncludes(['subscriptions']));
    }
}