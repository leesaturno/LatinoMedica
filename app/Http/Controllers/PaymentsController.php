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
 * @Paypal Reference Document : https://developer.paypal.com/docs/classic/express-checkout/ht_ec-recurringPaymentProfile-curl-etc/ 
 * @Reference Document        : https://developer.paypal.com/docs/classic/api/merchant/TransactionSearch_API_Operation_NVP/
 * @Integration Document      : https://www.paypal-brasil.com.br/desenvolvedores/code-sample/recurring-payments-php/
 */

namespace App\Http\Controllers;

use App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Faker\Provider\DateTime;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Setting;
use App\User;
use App\UserProfile;
use App\Http\Controllers\Controller;
use Plugins\Subscriptions\Model\Subscription;
use App\Subscribe;
use App\TransactionLog;
use App\PaypalLog;
use App\AppointmentSettings;
use App\Suspend;
use App\Services\SubscriptionService;
use App\Attachment;
use Log;
class PaymentsController extends Controller
{
    private $_api_context;
    protected $SubscriptionService;
    public function __construct(SubscriptionService $subscription_service) {
        $this->_paypal_conf = config('paypal');
        $this->_paypal_mode =  $this->_paypal_conf['is_live_mode'] == 1?'live':'sandbox';
        $this->SubscriptionService = $subscription_service;
        /*$this->_api_context = new ApiContext(new OAuthTokenCredential($paypal_conf['api_id'], $paypal_conf['secret']));*/
    }

    public function subscribe(Request $request) {
        $user = $this->auth->user();
        $userDetails = User::where('id','=',$user->id)->first();
        $linkFailed = url('/');
        $linkParamFailed = 'home';
       
        $planDetails = $request->only(['id','name','period_days','price','paypal_plan_id','payment_mode','notes', 'receipt']);
        $planOgDetails = $this->planDetailsByID($planDetails['id']);
		$planDetails['payment_mode'] = 1;
        if ($planDetails['payment_mode'] == 1) {

            $planPrice = $planOgDetails['price'];
             /**
            * Below Code Added Due To Some Currency Doesn't Support Decimal Places So We Will Round The Amount  
            * @Paypal Reference Document : https://developer.paypal.com/docs/classic/api/currency_codes/
            **/
            $currencyNotSupported = array("HUF", "JPY", "TWD");
            if (in_array(config('site.currency.string'), $currencyNotSupported)) {
                $planPrice = ceil($planOgDetails['price']);
            }
            $baseUrl = url('/');
            /**
            * Step 1 : Create SetExpressCheckout In PayPal
            **/
            $paypalFields = [
                        'METHOD'                           => 'SetExpressCheckout',
                        'VERSION'                          => '86',
                        'LOCALECODE'                       => 'en',
                        'PAYMENTREQUEST_0_AMT'             => $planOgDetails['price'],
                        'PAYMENTREQUEST_0_CURRENCYCODE'    => config('site.currency.string'),
                        'PAYMENTREQUEST_0_PAYMENTACTION'   => 'Sale',
                        'PAYMENTREQUEST_0_ITEMAMT'         => $planPrice,
                        'L_PAYMENTREQUEST_0_NAME0'         => $planOgDetails['id'],
                        'L_PAYMENTREQUEST_0_DESC0'         => $planOgDetails['description'],
                        'L_PAYMENTREQUEST_0_QTY0'          => 1,
                        'L_PAYMENTREQUEST_0_AMT0'          => $planPrice,
                        'L_PAYMENTREQUEST_0_ITEMCATEGORY0' => 'Digital',
                        'L_BILLINGTYPE0'                   => 'RecurringPayments',
                        'L_BILLINGAGREEMENTDESCRIPTION0'   => $planOgDetails['name'],
                        'CANCELURL'                        => $baseUrl.'#/payment/cancel',
                        'RETURNURL'                        => $baseUrl.'#/payment/success'
                    ];
            /*if ($planOgDetails['vat'] != "" && $planOgDetails['vat'] != "0") {
                $paypalFields['vat'] = $planOgDetails['vat'];
                if (in_array(config('site.currency.string'), $currencyNotSupported)) {
                    $paypalFields['vat'] = ceil($planOgDetails['vat']);
                }
            }*/
            /**
            * Step 2 : Redirecting To PayPal For Payment Agreement
            **/
            $link = $this->curlProcess($paypalFields, 1);
            $linkParam = 'payapl';
            if ($link !== NULL)
                return response()->json(['status'=>'success', 'linkparam'=> $linkParam, 'urlgo'=> $link]);
            else
                return response()->json(['status'=>'failed', 'linkparam'=> $linkFailed, 'urlgo'=> $linkFailed]);
        } else {
            if (isset($planDetails['receipt']['base64']) && $planDetails['receipt']['base64']!= "") {
                /**
                * Manual Payment Process
                **/
                $subscriptionStoredValues = [
                    'user_id'            => $user->id,
                    'subscription_id'    => $planDetails['id'],
                    'profile_id'         => "",
                    'subscription_start' => "",
                    'subscription_end'   => "",
                    'type_of_payment'    => config('constants.ConstPaymentMethod.Manual'),
                    'notes'              => $planDetails['notes'],
                    'mode'               => $this->_paypal_conf['is_live_mode'],
                    'status'             => config('constants.ConstPaypalStatus.WaitingApproval')
                ];                
                $subcribeId = $this->subscribeManualLog($subscriptionStoredValues);
                if ($subcribeId != null && is_numeric($subcribeId)) {
                    User::where('id', '=', $user->id)->update(['subscription_method'=>config('constants.ConstPaymentMethod.Manual'),'plan_status'=>config('constants.ConstPaypalStatus.WaitingApproval')]);
                    /**
                    * Uploading Receipt
                    **/
                    $path = 'app/Subscribe/'.$subcribeId.'/';
                    $attachmentable_type = 'Subscribe\Model\Subscribe';
                    $this->decodeBase64FileUpload($attachmentable_type, $path, $subcribeId, $planDetails['receipt']['filename'], $planDetails['receipt']['filetype'], $planDetails['receipt']['filesize'], $planDetails['receipt']['base64']);
                    $link = url('/');
                    $linkParam = 'subscribe/list';
                    return response()->json(['status'=>'ManualSuccess','message'=>'Your Request has been submitted to Admin For Verification.','urlgo'=>$link]);
                } else {
                    $link = url('/');
                    return response()->json(['status'=>'ManualSuccess','message'=>'Please Try Again.','urlgo'=>$link]);    
                }

            } else {
                $link = url('/');
                return response()->json(['status'=>'failed','message'=>'Please Try Again.','urlgo'=>$link]);
            }
        }
    }
    public function paysuccess($token, $payerId) {
         /**
        * Step 3 : Creating Recurring Payments Profile Id 
        **/
        $paypalFields = [
                            'METHOD'  => 'GetExpressCheckoutDetails',
                            'VERSION' => '86',
                            'TOKEN'   => $token
                        ];
        $paypalResponse = $this->curlProcess($paypalFields);
        if ($paypalResponse != null) {
            if ($paypalResponse['ACK'] == 'Success') {
                $user        = $this->auth->user();
                $planDetails = $this->planDetailsByID($paypalResponse['L_NAME0']);
                $this->update_paypal_log_status($paypalResponse);
                $userProfile = UserProfile::where('user_id', '=', $user->id)->with(['country'])->first();
                /**
                * Below Code Added Due To Some Currency Doesn't Support Decimal Places So We Will Round The Amount  
                * @Paypal Reference Document : https://developer.paypal.com/docs/classic/api/currency_codes/
                **/
                $currencyNotSupported = array("HUF", "JPY", "TWD");
                $planPrice = $planDetails['price'];
                if (in_array(config('site.currency.string'), $currencyNotSupported)) {
                    $planPrice = ceil($planDetails['price']);
                }

                $profileCreationFields = [
                                            'METHOD'             => 'CreateRecurringPaymentsProfile',
                                            'VERSION'            => '86',
                                            'TOKEN'              => $token,
                                            'PayerID'            => $payerId,
                                            'PROFILESTARTDATE'   => date('Y-m-d') . 'T' . date('H:i:s', strtotime('+15 minutes', time())) . "Z",
                                            'DESC'               => $planDetails['name'],
                                            'BILLINGPERIOD'      => 'Day',
                                            'BILLINGFREQUENCY'   => $planDetails['period_days'],
                                            'AMT'                => $planPrice,
                                            'CURRENCYCODE'       => config('site.currency.string'),
                                            'COUNTRYCODE'        => $userProfile['country']['iso2'],
                                            'MAXFAILEDPAYMENTS'  => 3
                                        ];
               if ($planDetails['vat'] != "" && $planDetails['vat'] != "0") {
                    $profileCreationFields['TAXAMT'] = $planDetails['vat'];
                    if (in_array(config('site.currency.string'), $currencyNotSupported)) {
                        $profileCreationFields['TAXAMT'] = ceil($planDetails['vat']);
                    }
               }
               $profileCreationRespoonse = $this->curlProcess($profileCreationFields);
               if ($profileCreationRespoonse != null) {
                    $updateValue = [
                        'subscription_id'  => $planDetails['id'],
                        'subscription_end' => '',
                        'is_trial'         => 0,
                    ];
                    /* Here for update the status to activate the profile */
                    AppointmentSettings::where('user_id', '=', $user->id)->update(['is_active'=>true]);
                    $this->subscribeLog(array_merge($profileCreationRespoonse, $updateValue));
                }
            }
        }
    }
    public function curlProcess($paypalParams = array(), $step = null) {
        if ($this->_paypal_conf['is_live_mode'] == 1) {
            if ($this->_paypal_conf['api_username_live'] != "" && $this->_paypal_conf['api_password_live'] != "" && $this->_paypal_conf['api_signature_live'] != "") {
                $credientials = [
                    'USER'      => $this->_paypal_conf['api_username_live'],
                    'PWD'       => $this->_paypal_conf['api_password_live'],
                    'SIGNATURE' => $this->_paypal_conf['api_signature_live']
                ];
            } else {
                return null;
            }
        } else {
             if ($this->_paypal_conf['api_username_sanbox'] != "" && $this->_paypal_conf['api_password_sanbox'] != "" && $this->_paypal_conf['api_signature_sanbox'] != "") {
                $credientials = [
                    'USER'      => $this->_paypal_conf['api_username_sanbox'],
                    'PWD'       => $this->_paypal_conf['api_password_sanbox'],
                    'SIGNATURE' => $this->_paypal_conf['api_signature_sanbox']
                ];
              } else {
                  return null;
              }
        }
        $paymentUrl     = $this->_paypal_mode == 'live'?'https://api-3t.paypal.com/nvp':'https://api-3t.sandbox.paypal.com/nvp';
        $curl           = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_URL, $paymentUrl);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query(array_merge($credientials, $paypalParams)));
        $response = curl_exec($curl);
        curl_close($curl);
        $nvp = array();
        if (preg_match_all('/(?<name>[^\=]+)\=(?<value>[^&]+)&?/', $response, $matches)) {
            foreach ($matches['name'] as $offset => $name) {
                $nvp[$name] = urldecode($matches['value'][$offset]);
            }
            if ($step != null) {
                if (isset($nvp['ACK']) && (strtolower($nvp['ACK']) == 'success' || strtolower($nvp['ACK']) == 'successwithwarning')) {
                    $query = array(
                        'cmd'    => '_express-checkout',
                        'token'  => $nvp['TOKEN']
                    );
                    /* Here for Paypal Log Table Entry */
                    $this->store_paypal_log($paypalParams, $nvp['TOKEN']);
                    $redirLink = $this->_paypal_mode == 'live'?'https://www.paypal.com/cgi-bin/webscr?%s':'https://www.sandbox.paypal.com/cgi-bin/webscr?%s';
                    return sprintf($redirLink, http_build_query($query));
                }
            } else {
                return $nvp;
            }
        } else {
            return null;
        }
    }

    public function store_paypal_log($planDetails, $token) {
        $user = $this->auth->user();
        $storedValue = [
            'amount'           => $planDetails['PAYMENTREQUEST_0_AMT'],
            'user_id'          => $user->id,
            'token'            => $token,
            'transaction_type' => 1,
            'status'           => 0
        ];
        $created = PaypalLog::create($storedValue);
        if ($created) {
            return 'success';
        } else {
            return null;
        }
    }
    public function update_paypal_log_status($paypalProfileResponse) {
        $updatedFields = [
            'payer_id' => $paypalProfileResponse['PAYERID'],
            'paypal_response' => implode('|', $paypalProfileResponse),
            'status' => 1
        ];
        $update = PaypalLog::where('token','=',$paypalProfileResponse['TOKEN'])->update($updatedFields);
        if ($update) {
            return 'success';
        } else {
            return null;
        }
    }
    public function plan_details_by_name($planName = null,$filterData = null) {
        if ($planName != null) {
            if ($filterData != null) {
                $subscription = Subscription::where('id','=',$filterData)->first();
            } else {
                $subscription = Subscription::where('name','=',$planName)->first();
            }
            return $subscription;
        }
    }
    public function planDetailsByID($id = null) {
        $subscription = Subscription::where('id','=',$id)->first()->toArray();
        return $subscription;
    }
    public function getUserplanDetails($id = null) {
        $subscription = Subscribe::where('user_id','=',$id)->orderBy('id', 'desc')->first()->toArray();
        return $subscription;
    }
    public function subscribeLog($Log) {
        $user = $this->auth->user();
        $storedValues = [
            'user_id'            => $user->id,
            'subscription_id'    => $Log['subscription_id'],
            'profile_id'         => $Log['PROFILEID'],
            'subscription_start' => date('Y-m-d H:i:s', strtotime($Log['TIMESTAMP'])),
            'subscription_end'   => $Log['subscription_end'],
            'mode'               => $this->_paypal_conf['is_live_mode'],
            'status'             => config('constants.ConstPaypalStatus.WaitingApproval')
        ];
        Subscribe::create($storedValues);
    }
    public function getprofiledetails() {
        $paypalFields = [
            'METHOD' => 'GetRecurringPaymentsProfileDetails',
            //'METHOD' => 'ManageRecurringPaymentsProfileStatus',
            'VERSION' => '86', /* Don't change this one */
            'LOCALECODE' => 'en',
            'PROFILEID' => 'I-LGRFFLGC9ADK'
        ];
        $paypalResponse = $this->curlProcess($paypalFields);
        echo '<pre>'; print_r($paypalResponse); die;
    }
     /**
    * PayPal Suspend Active Recurring Payments Profile Id 
    **/
    public function paypalsuspend() {
        $profileDetails = $this->get_paypal_profile_id();
        if ($profileDetails != null) {
            $paypalFields = [
                'METHOD'     => 'ManageRecurringPaymentsProfileStatus',
                'VERSION'    => '86',
                'LOCALECODE' => 'en',
                'PROFILEID'  => $profileDetails['profile_id'],
                'ACTION'     => 'Suspend'
            ];
            $paypalResponse = $this->curlProcess($paypalFields);
            if ($paypalResponse['ACK'] == 'Success') {
                $this->statusLog($paypalResponse,$profileDetails, 'suspend');
            } else {
                return response()->json(['Failed' => 'Suspend failed try again later']);
            }
        }
    }
    /**
    * PayPal Reactivate Suspended Recurring Payments Profile Id 
    **/
    public function paypalactive() {
        $profileDetails = $this->get_paypal_profile_id();
        if ($profileDetails != null) {
            $paypalFields = [
                'METHOD'     => 'ManageRecurringPaymentsProfileStatus',
                'VERSION'    => '86',
                'LOCALECODE' => 'en',
                'PROFILEID'  => $profileDetails['profile_id'],
                'ACTION'     => 'Reactivate'
            ];
            $paypalResponse = $this->curlProcess($paypalFields);
            if ($paypalResponse['ACK'] == 'Success') {
                $this->statusLog($paypalResponse,$profileDetails, 'active');
            } else {
                return response()->json(['Failed' => 'Activation failed try again later']);
            }
        }
    }
    /**
    * PayPal Cancelling Recurring Payments Profile Id 
    **/
    public function paypalcancel() {
        $profileDetails = $this->get_paypal_profile_id();
        if ($profileDetails->type_of_payment == config('constants.ConstPaymentMethod.Manual')) {
            $this->statusManualLog($profileDetails, 'cancel');

        } else {
            if ($profileDetails != null) {
                $paypalFields = [
                    'METHOD'     => 'ManageRecurringPaymentsProfileStatus',
                    'VERSION'    => '86', /* Don't change this one */
                    'LOCALECODE' => 'en',
                    'PROFILEID'  => $profileDetails['profile_id'],
                    'ACTION'     => 'Cancel'
                ];
                $paypalResponse = $this->curlProcess($paypalFields);
                if ($paypalResponse['ACK'] == 'Success') {
                    $this->statusLog($paypalResponse,$profileDetails, 'cancel');
                } else {
                    return response()->json(['Failed' => 'Activation failed try again later']);
                }
            }
        }
        
    }
    public function get_paypal_profile_id() {
        $user = $this->auth->user();
        $subscription = Subscribe::where(['user_id'=>$user->id, 'subscription_id'=> $user->subscription_id])->where('is_cancel','!=',true)->orderBy('created_at', 'desc')->first();
        if ($subscription) {
            return  $subscription;
        } else {
            return null;
        }
    }
    public function statusManualLog($subscribeDetails, $status) {
        $user = $this->auth->user();
        if ($status == 'cancel') {
            $updateValue = [
                'is_cancel'  => 1,
                'is_suspend' => 0,
                'status' => 0
            ];
            $userUpdateValue = [
                'plan_status' => 3
            ];
            $message = "Manual Subscription Canceled Successfully";
        } else if ($status == 'active') {
            $updateValue['is_suspend'] = 0;
            $userUpdateValue['plan_status'] = 2;
            $message = "Manual Subscription Activated Successfully";
            $appointLimit = -1;
            if ($subscribeDetails['subscription_id'] == 1) {
                $appointLimit = config('appointlimit.pro_plus');
            } else if ($subscribeDetails['subscription_id'] == 2) {
                $appointLimit = config('appointlimit.pro');
            } else if ($subscribeDetails['subscription_id'] == 3) {
                $appointLimit = config('appointlimit.trial');
            } else if ($subscribeDetails['subscription_id'] == 4) {
                $appointLimit = config('appointlimit.advance');
            }
            UserProfile::where('user_id', '=', $user->id)->update(['appointment_limit' => $appointLimit]);
        } else if ($status == 'suspend') {
            $updateValue['is_suspend'] = 1;
            $userUpdateValue['plan_status'] = 4;
            $message = "Manual Subscription Suspend Successfully";
        }
        /* for update the subscribe table */
        Subscribe::where('id','=',$subscribeDetails->id)->update($updateValue);
        User::where('id','=',$user->id)->update($userUpdateValue);
        return response()->json(['Success' => $message]);
    }
    public function statusLog($responseLog, $subscribeDetails, $status) {
        $user = $this->auth->user();
        $storedValues = [
            'user_id'         => $user->id, 
            'profile_id'      => $responseLog['PROFILEID'], 
            'subscription_id' => $subscribeDetails['subscription_id'], 
            'status'          => $status, 
            'description'     => implode('|', $responseLog), 
            'subscribe_id'    => $subscribeDetails['id']
        ];
        Suspend::create($storedValues);
        if ($status == 'cancel') {
            $updateValue = [
                'is_cancel'  => 1,
                'is_suspend' => 0
            ];
            $userUpdateValue = [
                'is_paypal_suspend' => 0,
                'is_paypal_cancel'  => 1,
                'plan_status' => 3
            ];
            $message = "Paypal Subscription Canceled Successfully";
        } else if ($status == 'active') {
            $updateValue['is_suspend'] = 0;
            $userUpdateValue['is_paypal_suspend'] = 0;
            $userUpdateValue['plan_status'] = 2;
            $message = "Paypal Subscription Activated Successfully";
            $appointLimit = -1;
            if ($subscribeDetails['subscription_id'] == 1) {
                $appointLimit = config('appointlimit.pro_plus');
            } else if ($subscribeDetails['subscription_id'] == 2) {
                $appointLimit = config('appointlimit.pro');
            } else if ($subscribeDetails['subscription_id'] == 3) {
                $appointLimit = config('appointlimit.trial');
            } else if ($subscribeDetails['subscription_id'] == 4) {
                $appointLimit = config('appointlimit.advance');
            }
            UserProfile::where('user_id', '=', $user->id)->update(['appointment_limit' => $appointLimit]); 
        } else if ($status == 'suspend') {
            $updateValue['is_suspend'] = 1;
            $userUpdateValue['is_paypal_suspend'] = 1;
            $userUpdateValue['plan_status'] = 4;
            $message = "Paypal Subscription Suspend Successfully";
        }
        /* for update the subscribe table */
        Subscribe::where('id','=',$subscribeDetails->id)->update($updateValue);
        User::where('id','=',$user->id)->update($userUpdateValue);
        return response()->json(['Success' => $message]);
    }
    public function getProfiledata($value='') {
        /**
        *    Get subscribers List for update Start and End Date. 
        **/
        $subscribers = Subscribe::all()->toArray();
        if ($subscribers) {
            foreach($subscribers as $subscriber) {
                $paypalFields = [
                        'METHOD'    => 'GetRecurringPaymentsProfileDetails',
                        'VERSION'   => '94', 
                        'PROFILEID' => $subscriber['profile_id']
                ];
                 /**
                *    PayPal Response to find confirmation status  
                **/
                $paypalResponse = $this->curlProcess($paypalFields);
                if (strtolower($paypalResponse['ACK']) == strtolower(config('constants.ConstPaypalTransStatus.Success'))) {
                     echo "<pre>";print_r($paypalResponse); echo "<pre>";
                    $paypalStatus = strtolower($paypalResponse['STATUS']);
                    if (strtolower($paypalStatus) == strtolower(config('constants.ConstPaypalTransStatus.Active'))) {
                            $updateValue = [
                                'subscription_start' => date('Y-m-d H:i:s',strtotime($paypalResponse['LASTPAYMENTDATE'])),
                                'subscription_end'   => date('Y-m-d H:i:s',strtotime($paypalResponse['NEXTBILLINGDATE']))
                            ];
                            echo "<pre>";print_r($updateValue);exit;
                            User::where('id','=',$user->id)->update($updateValue);
                    }
                    echo "<pre>";print_r($paypalStatus);exit; 
                }
            }
        }
    }
    public function subscribeManualLog($subscriptionStoredValues) {
        $created = Subscribe::create($subscriptionStoredValues);
        if ($created) {
           return $created->id;
        } else {
            return null;
        }
    }
    public function testSub($value='') {
        $this->SubscriptionService->paypalPaymentConfirmation();
    }
}