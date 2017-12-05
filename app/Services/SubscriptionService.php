<?php
namespace App\Services;

use App\User;
use App\AppointmentSettings;
use App\Services\MailService;
use Plugins\Subscriptions\Model\Subscription;
use Validator;
use Carbon;

class SubscriptionService
{
    /**
     * updates daily currency rates in currency_conversion & currency_conversion_history table through cron
     */
    public function check_is_expiry(){
        /* For get the all doctor's if the expiry date is completed without expiry */
        $date = Carbon::parse(Carbon::now()->subDays(1))->format('Y-m-d');
        $conditions = [
            'role_id' => config('constants.ConstUserTypes.Doctor'),
            'subscription_end' => $date,
            'is_expiry' => 0
        ];
        $users = User::select(['id','email','role_id','subscription_end','is_expiry','subscription_id'])->with('user_profile')->where($conditions)->get()->toArray();
        /* For update the is_expiry = 1 and deactivate the Profile view in appointment_setting */
        foreach($users as $user){
            /* Update the user table here */
            User::where('id', '=', $user->id)->update(['is_expiry'=>true]);
            /* Update appointment_setting table here */
            AppointmentSettings::where('user_id', '=', $user->id)->update(['is_active'=>false, 'is_suspend'=>true]);
            /* Send a mail for account is expiry */
            $subscription = Subscription::where('id','=',$user['subscription_id'])->first();
            if($subscription){
                $subscriptionName = $subscription['name']. ' Plan';
            }else{
                $subscriptionName = 'Free Plan';
            }
            $userName = $user['user_profile']['first_name'].' '.$user['user_profile']['last_name'];
            $template = $this->getTemplate('Membership Plan Expiried alert mail');
            $emailFindReplace = array(
                '##USERNAME##' => $userName,
                '##SUBSCRIPTION##' => $subscriptionName,
                '##EXPIRY_DATE##' => $user['subscription_end'],
                '##PLAN_URL##' => "#/subscribe/plans"
            );
            $this->sendMail($template, $emailFindReplace, $user['email'],$userName);
        }
        echo 'done'; exit;
    }
	
	public function paypalPaymentConfirmation() {
		
		/**
		*Step 1 : Fecth Records Of Subscribers Who Profile Is Active Or Waiting Approval
		**/

	    $userSubribes = Subscribe::where('profile_id', '!=', "")
															->with('user', 'subscription')
															->where('is_cancel', '!=', 1)
															->orWhere('paypal_lastpaymentdate', '<=', date('Y-m-d'))
															->orWhere('paypal_lastpaymentdate', '=', '')
															->Where('status', '=', config('constants.ConstPaypalStatus.WaitingApproval'))
															->orWhere('status', '=', config('constants.ConstPaypalStatus.Active'))
															->orderBy('id','desc')
															->get()
															->toArray();
		if (!empty($userSubribes)) {
			foreach($userSubribes as $userSubribe) {
				$postData   = array();
				$postData[] = 'PROFILEID='.$userSubribe['profile_id'];

				/**
				* Step 2                     : Get Details For Active Profile Details From Paypal
				* @Paypal Reference Document : https://developer.paypal.com/docs/classic/api/merchant/GetRecurringPaymentsProfileDetails_API_Operation_NVP/
				**/

				$payPalResultSet = $this->payPalExecuteCurl($postData,'GetRecurringPaymentsProfileDetails');
				/**Break the code if any paypal response empty**/
				if ($payPalResultSet !== NULL) {
				
					/**
					* Step 3                     : To Make Sure Confirm Atleast One Payment as been Completed With Paramater LASTPAYMENTDATE From PayPal Response
					**/

					$paypalStatus    = $payPalResultSet['ACK'];
					if ($paypalStatus != '' && strtolower($paypalStatus) == strtolower(config('constants.ConstPaypalTransStatus.Success')) && strtolower($payPalResultSet['STATUS']) == strtolower(config('constants.ConstPaypalTransStatus.Active')) && isset($payPalResultSet['LASTPAYMENTDATE']) && isset($payPalResultSet['NUMCYCLESCOMPLETED']) && $payPalResultSet['NUMCYCLESCOMPLETED'] > $userSubribe['user']['paypal_num_cycles_completed']) {

						$paypal_num_cycles_completed = $payPalResultSet['NUMCYCLESCOMPLETED'];
					
						/**
						* Step 4                     : Get Transaction Details For Succeed Transcation For Transaction Log
						* @Paypal Reference Document : https://developer.paypal.com/docs/classic/api/merchant/TransactionSearch_API_Operation_NVP/
						**/
					
						$lastPaymentDate            = $payPalResultSet['LASTPAYMENTDATE'];
						$postData[]                 = 'STARTDATE='.$lastPaymentDate;
						
						$payPalTransactionResultSet = $this->payPalExecuteCurl($postData,'TransactionSearch');
						
						if ($payPalTransactionResultSet != "" && $payPalTransactionResultSet['ACK'] != "" && strtolower($payPalTransactionResultSet['ACK']) == strtolower(config('constants.ConstPaypalTransStatus.Success')) && isset($payPalTransactionResultSet['L_TRANSACTIONID0'])) {
							
							$transcationStatus       = $payPalTransactionResultSet['ACK'];
							$transcationId           = $payPalTransactionResultSet['L_TRANSACTIONID0'];
							$postTranscationData     = array();
							$postTranscationData[]   = 'TRANSACTIONID='.$transcationId;
							$payPalTransactionStatus = $this->payPalExecuteCurl($postTranscationData,'GetTransactionDetails');
							
							/**
							* We Will Update As Successfull Transaction If PayPal Return Either Success Or Pending Or Completed
							* Note : If Status Pending Return By Paypal Then Admin Should Manual Go Paypal Account And Then Should Click Accept Or Unclaimed Button To Accept The Payment.
							* The Above Scenario Can Happen, When Due Multicurrency Not Support In PayPal Account. So If Admin Make Accept All Currency Payment accept then this issues will not happen.
							**/
							if ($payPalTransactionStatus != "" && isset($payPalTransactionStatus['ACK']) && (strtolower($payPalTransactionStatus['PAYMENTSTATUS']) == strtolower(config('constants.ConstPaypalTransStatus.Success')) || strtolower($payPalTransactionStatus['PAYMENTSTATUS']) == strtolower(config('constants.ConstPaypalTransStatus.Pending')) || strtolower($payPalTransactionStatus['PAYMENTSTATUS']) == strtolower(config('constants.ConstPaypalTransStatus.Completed')))) {
								$pendingreason = "";
								if (isset($payPalTransactionResultSet['L_PENDINGREASON0'])) {
									$pendingreason = $payPalTransactionResultSet['L_PENDINGREASON0'];
								}
								/**
								* Step 5                     : Creating Transaction Log
								**/
								$transcationStore = [
									'user_id'                     => $userSubribe['user_id'],
									'receiver_user_id'            => config('constants.ConstUserTypes.Admin'),
									'paypal_timestamp'            => Carbon::parse($payPalTransactionResultSet['L_TIMESTAMP0'])->format('Y-m-d H:i:s'),
									'paypal_timezone'             => $payPalTransactionResultSet['L_TIMEZONE0'],
									'paypal_type'                 => $payPalTransactionResultSet['L_TYPE0'],
									'paypal_email'                => $payPalTransactionResultSet['L_EMAIL0'],
									'paypal_name'                 => $payPalTransactionResultSet['L_NAME0'],
									'paypal_transactionid'        => $transcationId,
									'paypal_status'               => $payPalTransactionResultSet['L_STATUS0'],
									'paypal_amt'                  => $payPalTransactionResultSet['L_AMT0'],
									'amount'                      => $payPalTransactionResultSet['L_AMT0'],
									'paypal_currencycode'         => $payPalTransactionResultSet['L_CURRENCYCODE0'],
									'paypal_feeamt'               => $payPalTransactionResultSet['L_FEEAMT0'],
									'paypal_netamt'               => $payPalTransactionResultSet['L_NETAMT0'],
									'paypal_response'             => json_encode($payPalTransactionStatus),
									'pendingreason'               => $pendingreason
								];
								
								$this->transaction_log($transcationStore);

								/**
								* Step 6                     : Formatting Array For Update Subscribe Table
								**/
							
								$payPalResultSet = [
													'status'                               => config('constants.ConstPaypalStatus.Active'),
													'paypal_subscriber_name'               => $payPalResultSet['SUBSCRIBERNAME'],
													'paypal_profile_startdate'             => Carbon::parse($payPalResultSet['PROFILESTARTDATE'])->format('Y-m-d H:i:s'),
													'paypal_nextbillingdate'               => Carbon::parse($payPalResultSet['NEXTBILLINGDATE'])->format('Y-m-d H:i:s'),
													'paypal_numcyclescompleted'            => $payPalResultSet['NUMCYCLESCOMPLETED'],
													'paypal_numcyclesremaining'            => $payPalResultSet['NUMCYCLESREMAINING'],
													'paypal_failedpaymentcount'            => $payPalResultSet['FAILEDPAYMENTCOUNT'],
													'paypal_lastpaymentdate'               => Carbon::parse($payPalResultSet['LASTPAYMENTDATE'])->format('Y-m-d H:i:s'),
													'paypal_lastpaymentamt'                => $payPalResultSet['LASTPAYMENTAMT'],
													'paypal_amt'                           => $payPalResultSet['AMT'],
													'paypal_taxamt'                        => $payPalResultSet['TAXAMT']
												];
							
								Subscribe::where('profile_id','=',$userSubribe['profile_id'])->update($payPalResultSet);

								/**
								* Step 7                     : Updating User Subscription Details 
								**/
								$subscription_end = date('Y-m-d', strtotime("+".$userSubribe['subscription']['period_days']." days"));
								$updateUserDetails = [
									'subscription_id'             => $userSubribe['subscription_id'],
									'subscription_end'            => $subscription_end,
									'paypal_num_cycles_completed' => $paypal_num_cycles_completed,
									'is_trial'                    => 0,
									'is_expiry'                   => 0,
									'plan_status'                 => 2
								];
								User::where('id','=',$userSubribe['user_id'])->update($updateUserDetails);

								//Email Code Sucessfully Update
							}
						}
					} else if ($paypalStatus != '' && strtolower($paypalStatus) == strtolower(config('constants.ConstPaypalTransStatus.Success')) && (strtolower($payPalResultSet['STATUS']) == strtolower(config('constants.ConstPaypalTransStatus.Cancelled')) || $payPalResultSet['FAILEDPAYMENTCOUNT'] >= 3)) {
						
						if (strtolower($payPalResultSet['STATUS']) != strtolower(config('constants.ConstPaypalTransStatus.Cancelled'))) {
							/**
							* Cancel Profile If Failure More than Three Times
							**/
							$postTranscationData   = array();
							$postTranscationData[] = 'PROFILEID='.$userSubribe['profile_id'];
							$postTranscationData[] = 'LOCALECODE=en';
							$postTranscationData[] = 'ACTION=Cancel';
							$payPalResultSet = $this->payPalExecuteCurl($postTranscationData,'ManageRecurringPaymentsProfileStatus');
								if ($payPalResultSet != '' && strtolower($payPalResultSet['ACK']) == strtolower(config('constants.ConstPaypalTransStatus.Success'))) {
									$updateUserDetails = [
											'is_paypal_cancel'  => 1,
											'is_paypal_suspend' => 0
									];
									User::where('id','=',$userSubribe['user_id'])->update($updateUserDetails);
									$updateDetails = [
											'is_cancel'  => 1,
											'is_suspend' => 0
									];
									Subscribe::where('profile_id','=',$userSubribe['profile_id'])->update($updateDetails);
									// Cancel Email here
								}
							} /*else {
									$updateUserDetails = [
											'is_paypal_cancel'  => 1,
											'is_paypal_suspend' => 0
									];
									User::where('id','=',$userSubribe['user_id'])->update($updateUserDetails);
									$updateUserDetails = [
											'is_cancel'  => 1,
											'is_suspend' => 0
									];
									Subscribe::where('profile_id','=',$userSubribe['profile_id'])->update($updateUserDetails);
							}*/
					}
				}	
			}
		}
		 echo 'done';
		exit;
	}
	
	public function payPalExecuteCurl($postData,$method)
	{
		
		$this->_paypal_conf  = config('paypal');
		$this->_paypal_mode  = $this->_paypal_conf['is_live_mode'] == 1?'live':'sandbox';
		if ($this->_paypal_conf['is_live_mode'] == 1) {
			if ($this->_paypal_conf['api_username_live'] != "" && $this->_paypal_conf['api_password_live'] != "" && $this->_paypal_conf['api_signature_live'] != "") {
				$paypalApiusername   = urlencode($this->_paypal_conf['api_username_live']);
				$paypalApipassword   = urlencode($this->_paypal_conf['api_password_live']);
				$paypalApisignature  = urlencode($this->_paypal_conf['api_signature_live']);
			} else {
                return null;
            }
		} else {
			if ($this->_paypal_conf['api_username_sanbox'] != "" && $this->_paypal_conf['api_password_sanbox'] != "" && $this->_paypal_conf['api_signature_sanbox'] != "") {
				$paypalApiusername   = urlencode($this->_paypal_conf['api_username_sanbox']);
				$paypalApipassword   = urlencode($this->_paypal_conf['api_password_sanbox']);
				$paypalApisignature  = urlencode($this->_paypal_conf['api_signature_sanbox']);
			} else {
                return null;
            }
		}
		$paypalPostUrl       = $this->getNVPBasePaypalUrl($this->_paypal_mode);

		/**
		* PayPal Credentials
		**/
		$post['method'] = "METHOD=".$method;
		$post[]         = "USER=$paypalApiusername";
		$post[]         = "PWD=$paypalApipassword";
		$post[]         = "SIGNATURE=$paypalApisignature";
		$post[]         = "VERSION=94";
		
		/**
		* PayPal Merge Data
		**/
		$postFinalData = array_merge($post,$postData);
		$post_str      = implode('&',$postFinalData);

		/**
		* Curl Execute
		**/
		$paypalResponse = urldecode($this->httpCURLExecute($paypalPostUrl,$post_str));
		/**
		* Parsing String To Array
		**/
		parse_str($paypalResponse,$paypalResponseArray);
		return $paypalResponseArray;
	}
	public function httpCURLExecute($url,$post)
	{
		// 		$post is a URL encoded string of variable-value pairs separated by &
		$ch = curl_init();
		curl_setopt ($ch, CURLOPT_URL, $url);
		curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt ($ch, CURLOPT_POST, 1);
		curl_setopt ($ch, CURLOPT_POSTFIELDS, $post);
		curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 3);
		// 		3 seconds to connect
		curl_setopt ($ch, CURLOPT_TIMEOUT, 10);
		// 		10 seconds to complete
		$output = curl_exec($ch);
		curl_close($ch);
		return $output;
	}
	public function getparseString($data)
	{
		$dataArray = explode('&',$data);
		return $dataArray;
	}
	public function getNVPBasePaypalUrl($mode)
	{
		/**			Check paypal mode live or sandbox		**/
		
		if ($mode == '1') {
			return "https://api-3t.paypal.com/nvp";
		} else {
			return "https://api-3t.sandbox.paypal.com/nvp";
		}
	}
	/**
	* Create New Transcation
	**/
	public function transaction_log($storedValue) {
        $created = TransactionLog::create($storedValue);
        if ($created) {
           return 'success';
        } else {
            return null;
        }
    }
	public function printArray($data)
	{
		echo "<pre>";
		print_r($data);
		echo "</pre>";
		exit;
	}
	public function printJson($data)
	{
		echo "<pre>";
		print_r(json_encode(json_encode($data),true));
		echo "</pre>";
		exit;
	}
}