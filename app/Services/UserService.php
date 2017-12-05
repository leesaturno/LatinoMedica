<?php
namespace App\Services;

use App\Services\MailService;
use App\Services\IpService;
use App\EmailTemplate;
use App\User;
use Plugins\UserReviews\Model\UserReview;
use App\Appointment;
use App\Country;
use App\City;
use App\Language;
use App\Specialty;
use App\UserLogin;
use App\UserProfile;
use JWTAuth;
use Tymon\JWTAuth\Providers\JWT\JWTInterface;
use Carbon;
use ReCaptcha\ReCaptcha;
use DB;
class UserService extends MailService
{
    /**
     * @var IpService
     */
    protected $ip_service;

    /**
     * UserService constructor.
     */
    public function __construct(JWTInterface $jwt, IpService $ip_service)
    {
        $this->jwt = $jwt;
        $this->IpService = $ip_service;
    }

    /**
     * To send email based on the settings
     * @param $user
     * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function emailConditions($user, $type)
    {
        if (config('user.is_admin_mail_after_register') && $type != 'activate') {
            $this->sendUserJoinAdminMail($user);
        }
        if (config('user.is_email_verification_for_register') && ($user->is_email_confirmed == 0)) {
            $this->sendActivationMail($user->id, $user->email, $user->username, $this->getActivateHash($user->id, $user->activate_hash));
            return response()->json(['Success' => 'You have successfully registered with our site and your activation mail has been sent to your mail inbox.'], 200);
        } elseif (config('user.is_otp_verify') && ($user->is_otp_verify == 0)) {
            $this->sendOTP($user->id, $user->mobile, $user->otp);
            return response()->json(['Success' => 'You have successfully registered with our site and your OTP is send your mobile number.','id'=>$user->id, 'otp_screen'=>true], 200);
        }elseif (config('user.is_otp_verify') && config('user.is_email_verification_for_register')){
            $this->sendOTP($user->id, $user->mobile, $user->otp);
            $this->sendActivationMail($user->id, $user->email, $user->username, $this->getActivateHash($user->id, $user->activate_hash));
            return response()->json(['Success' => 'Register Successfull Verify your Mobile OTP and Email. Activation mail is send your Mail Id', 'id'=>$user->id, 'otp_screen'=>true], 200);
        }else if (config('user.is_admin_activate_after_register') && ($user->is_active == 0)) {
            return response()->json(['Success' => 'You have successfully registered with our site. After administrator approval you can login to site.'], 200);
        } else if (!config('user.is_email_verification_for_register') && !config('user.is_admin_activate_after_register') && config('user.is_welcome_mail_after_register') && !config('user.is_auto_login_after_register')) {
            $this->sendWelcomeMail($user->id, $user->email, $user->username);
            return response()->json(['Success' => 'You have successfully registered with our site.'], 200);
        } else if (!config('user.is_email_verification_for_register') && !config('user.is_admin_activate_after_register') && config('user.is_auto_login_after_register') && config('user.is_welcome_mail_after_register')) {
            $this->sendWelcomeMail($user->id, $user->email, $user->username);
            return response()->json(['Success' => 'You have successfully registered with our site.', 'token' => $this->createToken($user)], 200);
        } else if (config('user.is_auto_login_after_register') && config('user.is_welcome_mail_after_register')) {
            $this->sendWelcomeMail($user->id, $user->email, $user->username);
            return response()->json(['Success' => 'You have successfully registered with our site.', 'token' => $this->createToken($user)], 200);
        } else{
            return response()->json(['Success' => 'You have successfully registered with our site.', 'token' => $this->createToken($user)], 200);
        }
    }

    /**
     * Send welcome mail to users
     * @param $user_id
     * @param $to_email
     * @param $to_username
     */
    public function sendWelcomeMail($user_id, $to_email, $to_username)
    {
        $template = $this->getTemplate('Welcome Email');
        $emailFindReplace = array(
            '##USERNAME##' => $to_username,
            '##CONTACT_MAIL##' => config('site.contact_email'),
            '##FROM_EMAIL##' => ($template['from'] == '##FROM_EMAIL##') ? config('site.from_email') : $template['from'],
        );
        $this->sendMail($template, $emailFindReplace, $to_email, $to_username);
    }

    /**
     * Send Activation mail to users
     * @param $user_id
     * @param $to_email
     * @param $to_username
     * @param $hash
     */

    public function sendActivationMail($user_id, $to_email, $to_username, $hash)
    {
        $template = $this->getTemplate('Activation Request');
        $activation_link = '/#/users/' . $user_id . '/activate/' . $hash;
        $emailFindReplace = array(
            '##USERNAME##' => $to_username,
            '##ACTIVATION_URL##' => url($activation_link),
            '##FROM_EMAIL##' => ($template['from'] == '##FROM_EMAIL##') ? config('site.from_email') : $template['from'],
        );
        $this->sendMail($template, $emailFindReplace, $to_email, $to_username);
    }

    public function sendOTP($userId, $mobileNumber, $otp){
        /* Her for get the country code */
        $userDetails = UserProfile::where('user_id','=',$userId)->with('country')->first();
        if($userDetails){
            $mobile = $userDetails->country->phone_code.''.$mobileNumber;
            $message = 'Your '. config('site.name'). 'Activation OTP is '.$otp;
            $this->sendSMS($mobile, $message);
        }
    }
    
    public function expiryToken($user){
       return JWTAuth::invalidate();
    }
    /**
     * Generate OTP for Verification.
     * @return otp
     */
    public function generateOTP(){
        $chars = "0123456789";
        $str = substr(str_shuffle( $chars ), 0, config('constants.ConstOTP.size'));
        return $str;
    }
    
    /**
     * Generate JSON Web Token.
     * @param $user
     * @return token
     */
    protected function createToken($user)
    {
        $payload = [
            'sub' => $user->id,
            'iat' => time(),
            //'exp' => time() + (2 * 7 * 24 * 60 * 60)
            'exp' => time() + (60 * 60)
        ];
        return $this->jwt->encode($payload, config('constants.token_secret'));
    }

    /**
     * get last registered record for admin dashboard
     * @param $request
     * @return User created_at
     */
    public function getLastRegistered()
    {
        $user_details = User::select('created_at')->orderBy('created_at', 'desc')->first();
        return $user_details->created_at->diffForHumans();
    }

    /**
     * get registered in count for admin dashboard
     * @param $request
     * @return User count
     */
    public function getRegisterCount($request)
    {
        $check_date = $this->getDateFilter($request);
        $check_date = Carbon::parse($check_date)->format('Y-m-d');
        $user_count = User::where('created_at', '>=', $check_date)
            ->where('role_id', '>', config('constants.ConstUserTypes.Admin'))
            ->count();
        return $user_count;
    }

    /**
     * get last logged in count for admin dashboard
     * @param $request
     * @return UserLogin count
     */
    public function getLoginRegisterCount($request)
    {
        if ($request->filter == 'lastDays') {
            return $this->getLast7Days();
        } else if ($request->filter == 'lastWeeks') {
            $userLoginCount = 0;
            $userRegisertCount = 0;
            for($i = 0; $i < 4; $i++){
                $check_date = Carbon::parse(Carbon::now()->subWeeks($i))->format('Y-m-d');
                /* For Login Count */
                $user_login_details = UserLogin::where('created_at', '>=', $check_date)->count();
                $userLoginCount = $user_login_details - $userLoginCount; 
                /* For Register Count */
                $user_register_count = User::where('created_at', '>=', $check_date)
                                ->where('role_id', '>', config('constants.ConstUserTypes.Admin'))
                                ->count();
                $userRegisertCount = $user_register_count - $userRegisertCount;
                $data[] = [
                    'y'=> $check_date, 
                    'a'=> $userLoginCount, 
                    'b'=> $userRegisertCount,
                    'label' => $check_date .' to '. Carbon::parse(Carbon::now()->subWeeks($i+1))->format('Y-m-d')
                ];
            }
            return $data;
        } else if (($request->filter == 'lastMonths') || ($request->filter == 'lastYears')) {
            if($request->filter == 'lastYears'){
                $loopCondition = 12;
            }else{
                $loopCondition = 3;
            }
            $userLoginCount = 0;
            $userRegisertCount = 0;
            for($i = 0; $i < $loopCondition; $i++){
                $check_date = Carbon::parse(Carbon::now()->subMonths($i))->format('Y-m-d');
                /* For Login Count */
                $user_login_details = UserLogin::where('created_at', '>=', $check_date)->count();
                $userLoginCount = $user_login_details - $userLoginCount; 
                /* For Register Count */
                $user_register_count = User::where('created_at', '>=', $check_date)
                                ->where('role_id', '>', config('constants.ConstUserTypes.Admin'))
                                ->count();
                $userRegisertCount = $user_register_count - $userRegisertCount;
                $data[] = [
                    'y'=> $check_date, 
                    'a'=> $userLoginCount, 
                    'b'=> $userRegisertCount,
                    'label' => $check_date .' to '. Carbon::parse(Carbon::now()->subMonths($i+1))->format('Y-m-d')
                ];
            }
            return $data;
        } else {
            return $this->getLast7Days();
        }
    }

    /**
     * get the total active users count
     * @return active user count.
     */
    public function getTotalUsers()
    {
        $active_user_count = User::where('is_active', '=', true)
            ->where('role_id', '>', config('constants.ConstUserTypes.Admin'))
            ->count();
        return $active_user_count;
    }

    /**
     * Verify captcha
     */

    public function captchaCheck($captcha)
    {
        $remoteip = $_SERVER['REMOTE_ADDR'];
        $secret = config('captcha.secret_key');
        $recaptcha = new ReCaptcha($secret);
        $response = $recaptcha->verify($captcha, $remoteip);
        if ($response->isSuccess()) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * get the date filter
     * @return $check_date
     */
    public function getDateFilter($request)
    {
        $check_date = Carbon::now()->subDays(7);
        if ($request->has('filter')) {
            if ($request->filter == 'lastDays') {
                $check_date = Carbon::now()->subDays(7);
            } else if ($request->filter == 'lastWeeks') {
                $check_date = Carbon::now()->subWeeks(4);
            } else if ($request->filter == 'lastMonths') {
                $check_date = Carbon::now()->subMonths(3);
            } else if ($request->filter == 'lastYear') {
                $check_date = Carbon::now()->subYears(1);
            }
        }
        return $check_date;
    }

    /**
     * Check facebook username
     * @param $name
     * @return bool
     */
    public function CheckUsernameAvailable($name)
    {
        $user = User::where('username', '=', $name)->get();
        if ($user) {
            return false;
        }
        return $name;
    }

    /**
     * Send Forgot Password Mail
     * @param $new_password
     * @param $to_email
     * @param $to_username
     */
    public function sendForgotPasswordMail($new_password, $to_email, $to_username)
    {
        $template = $this->getTemplate('Forgot Password');
        $emailFindReplace = array(
            '##USERNAME##' => $to_username,
            '##PASSWORD##' => $new_password
        );
        $this->sendMail($template, $emailFindReplace, $to_email, $to_username);
    }

    /**
     * Send mail to admin reg user join
     * @param $user
     */
    public function sendUserJoinAdminMail($user)
    {
        $ip = $this->IpService->getIp($user->register_ip_id);
        $template = $this->getTemplate('New User Join');
        $emailFindReplace = array(
            '##USERNAME##' => $user->username,
            '##EMAIL##' => $user->email,
            '##SIGNUP_IP##' => $ip
        );
        $this->sendMail($template, $emailFindReplace, config('site.from_email'), 'Admin');
    }

    /**
     * Send mail to user reg active / deactive status change
     * @param $username
     * @param $email
     * @param $status
     */
    public function sendStatusMail($username, $email, $status)
    {
        $template = $this->getTemplate($status);
        $emailFindReplace = array(
            '##USERNAME##' => $username
        );
        $this->sendMail($template, $emailFindReplace, $email, $username);
    }

    /**
     * get Activate hash
     * @param $user_id
     * @return string
     */
    public function getActivateHash($user_id)
    {
        return md5($user_id . '-' . config('Security.salt'));
    }

    /**
     * Validate Activate Hash
     * @param $user_id
     * @param $hash
     * @return bool
     */
    public function validateHash($user_id, $hash)
    {
        return (md5($user_id . '-' . config('Security.salt')) === $hash);
    }

    /**
     * get the total patients count
     * @return patients count.
     */
    public function getTotalPatients()
    {
        $patient_count = User::where('role_id', '=', config('constants.ConstUserTypes.User'))
            ->count();
        return $patient_count;
    }

    /**
     * get the total doctor count
     * @return active doctor count.
     */
    public function getTotalDoctors()
    {
        $doctor_count = User::where('role_id', '=', config('constants.ConstUserTypes.Doctor'))
            ->count();
        return $doctor_count;
    }

    /**
     * get the total reviews count
     * @return patient reiview count.
     */
    public function getTotalReviews(){
        $review_count = UserReview::count();
        return $review_count;
    }

    /**
     * get the total appointments count
     * @return appointments count.
     */
    public function getTotalAppointments(){
        $appointment_count = Appointment::count();
        return $appointment_count;
    }

    /**
     * get the total languages count
     * @return languages count.
     */
    public function getTotalLanguages(){
        $languages_count = Language::count();
        return $languages_count;
    }

    /**
     * get the total specialties count
     * @return specialties count.
     */
    public function getTotalSpecialties(){
        $specialties_count = Specialty::count();
        return $specialties_count;
    }

    /**
     * get the total cities count
     * @return cities count.
     */
    public function getTotalCities(){
        $cities_count = City::count();
        return $cities_count;
    }

    /**
     * get the total countiries count
     * @return countiries count.
     */
    public function getTotalCountries(){
        $countiries_count = Country::count();
        return $countiries_count;
    }

    public function getLast7Days(){
        for($i = 0; $i < 7; $i++){
            $check_date = [ 
                'day' => Carbon::parse(Carbon::now()->subDays($i))->format('D'),
                'date'=> Carbon::parse(Carbon::now()->subDays($i))->format('Y-m-d')
            ];
            $user_login_count = UserLogin::where('created_at', '>=', $check_date['date'])->where('created_at', '>', $check_date['date'])->count();
            $user_register_count = User::where('created_at', '=', $check_date['date'])
                                    ->where('created_at', '>', $check_date['date'])
                                    ->where('role_id', '>', config('constants.ConstUserTypes.Admin'))
                                    ->count();
            $data[] = [
                        'y'=>$check_date['date'], 
                        'a'=>$user_login_count, 
                        'b'=>$user_register_count,
                        'label' => $check_date['date'],
                    ];
        }
        return $data;
    }
}
