<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\AppointmentSettings;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\AppointmentSettingsTransformer;
use App\Services\AppointmentSettingsService;
use Carbon;
use Validator;
/**
 * Appointments resource representation.
 *
 * @Resource("Appointments")
 */
class AppointmentSettingsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AppointmentSettingsService $appointment_settings_service) {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        $this->AppointmentSettingsService = $appointment_settings_service;
    }

    /**
     * Show all appointments
     *
     * Get a JSON representation of all the user views.
     *
     * @Get("/appointments/settings?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the user views list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the user views list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user views by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display user views By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search user views.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $user = $this->auth->user();
        $appointmentSettings = AppointmentSettings::where('user_id', '=', $user->id);
        if ($request->has('work_place_id')) {
            $appointmentSettings = $appointmentSettings->where('work_place_id', $request->work_place_id);
        }
        $appointmentSettings = $appointmentSettings->first();
        $appointmentResponse = ''; 
		$browser = $this->getBrowser();
		$browserTimeZone = $_GET['zone']; 
        $zoneSplit = explode(':', $browserTimeZone);
        if ($appointmentSettings) {
            foreach ($appointmentSettings->toArray() as $fieldName => $fieldValue) {
                if (strpos($fieldName, 'practice_open') !== false || strpos($fieldName, 'lunch_at') !== false || strpos($fieldName, 'resume_at') !== false || strpos($fieldName, 'practice_close') !== false) {
                    if ($fieldValue != '00:00:00') {
                        if ($browser['name'] == 'Mozilla Firefox') {
                            $appointmentResponse[$fieldName] = "1970-01-01T".date("H:i:s",strtotime($fieldValue));
                        } else {
                            if ($zoneSplit[0] > 0) {
                                $dateU = Carbon::parse(Carbon::parse($fieldValue)->subHours($zoneSplit[0])->subMinutes($zoneSplit[1]))->format('H:i:s');
                                $appointmentResponse[$fieldName] = "1970-01-01T".$dateU;
                            }
                        }
                    } else {
                        //$appointmentResponse[$fieldName] = '00:00:00';
                    }
                } else {
                    $appointmentResponse[$fieldName] = $fieldValue;
                } 
            }
            return response()->json(['appointmentResponse' => $appointmentResponse]);
        } else {
            return response()->json(['appointmentResponse' => '']);
        }
     }

    public function update(Request $request) {
        $acceptFields = $request->only('is_today_first_day', 'calendar_slot_id', 'is_two_session', 'practice_open', 'lunch_at', 'resume_at', 'practice_close', 'type', 'is_sunday_open', 'sunday_two_session', 'sunday_practice_open', 'sunday_lunch_at', 'sunday_resume_at', 'sunday_practice_close', 'is_monday_open', 'monday_two_session', 'monday_practice_open', 'monday_lunch_at', 'monday_resume_at', 'monday_practice_close', 'is_tuesday_open', 'tuesday_two_session', 'tuesday_practice_open', 'tuesday_lunch_at', 'tuesday_resume_at', 'tuesday_practice_close', 'is_wednesday_open', 'wednesday_two_session', 'wednesday_practice_open', 'wednesday_lunch_at', 'wednesday_resume_at', 'wednesday_practice_close', 'is_thrusday_open', 'thrusday_two_session', 'thrusday_practice_open', 'thrusday_lunch_at', 'thrusday_resume_at', 'thrusday_practice_close', 'is_friday_open', 'friday_two_session', 'friday_practice_open', 'friday_lunch_at', 'friday_resume_at', 'friday_practice_close', 'is_saturday_open', 'saturday_two_session', 'saturday_practice_open', 'saturday_lunch_at', 'saturday_resume_at', 'saturday_practice_close', 'is_active', 'work_place_id');
        $browserTimeZone = $request['nowtimezone']; 
        $zoneSplit = explode(':', $browserTimeZone);
        $serverTimeZone = $this->get_server_time_zone(); 
       $browser = $this->getBrowser();
        
        foreach ($acceptFields as $fieldName => $fieldValue) {
            if (strpos($fieldName, 'practice_open') !== false || strpos($fieldName, 'lunch_at') !== false || strpos($fieldName, 'resume_at') !== false || strpos($fieldName, 'practice_close') !== false) {
                if (!empty($fieldValue)) {
                    if ((strpos($fieldValue, 'Z') !== false) &&  ($browserTimeZone != $serverTimeZone)) {
						if ($zoneSplit[0] < 0) {
							$storedTime = Carbon::parse(Carbon::parse($fieldValue)->subHours($zoneSplit[0])->subMinutes($zoneSplit[1]))->format('H:i');
							$storedValue[$fieldName] = $storedTime;
						} else {
							$storedTime = Carbon::parse(Carbon::parse($fieldValue)->addHours($zoneSplit[0])->addMinutes($zoneSplit[1]))->format('H:i');
							$storedValue[$fieldName] = $storedTime;
						}
                    } else {
						if ($browser['name'] != 'Mozilla Firefox') {
							$storedTime = Carbon::parse(Carbon::parse($fieldValue)->addHours($zoneSplit[0])->addMinutes($zoneSplit[1]))->format('H:i');
							$storedValue[$fieldName] = $storedTime;
						} else {
							$storedValue[$fieldName] = !empty($fieldValue) ? date('H:i', strtotime($fieldValue)) : '';
						}
                    }
                } else {
                    $storedValue[$fieldName] = "";
                }
            } else {
                $storedValue[$fieldName] = $fieldValue;
            }
        }
         $errorMessage = array();
        /* Here for time validation */
        if ($storedValue['type'] == true) {
            /* Sunday */
            if ($storedValue['is_sunday_open'] == true) {
                if ($storedValue['sunday_two_session'] == true) {
                    if ($storedValue['sunday_practice_open'] >= $storedValue['sunday_lunch_at']) {
                        $errorMessage['sunday_open_lunch'] = "Invalid Time";
                    }
                    if ($storedValue['sunday_lunch_at'] >= $storedValue['sunday_resume_at']) {
                        $errorMessage['sunday_lunch_resume'] = "Invalid Time";
                    }
                    if ($storedValue['sunday_resume_at'] >= $storedValue['sunday_practice_close']) {
                        $errorMessage['sunday_resume_close'] = "Invalid Time";
                    }
                } else {
                    if ($storedValue['sunday_practice_open'] >= $storedValue['sunday_practice_close']) {
                        $errorMessage['sunday_open_close'] = "Invalid Time";
                    }
                }
            }

            /* Monday */
            if ($storedValue['is_monday_open'] == true) {
                if ($storedValue['monday_two_session'] == true) {
                    if ($storedValue['monday_practice_open'] >= $storedValue['monday_lunch_at']) {
                        $errorMessage['monday_open_lunch'] = "Invalid Time";
                    }
                    if ($storedValue['monday_lunch_at'] >= $storedValue['monday_resume_at']) {
                        $errorMessage['monday_lunch_resume'] = "Invalid Time";
                    }
                    if ($storedValue['monday_resume_at'] >= $storedValue['monday_practice_close']) {
                        $errorMessage['monday_resume_close'] = "Invalid Time";
                    }
                } else {
                    if ($storedValue['monday_practice_open'] >= $storedValue['monday_practice_close']) {
                        $errorMessage['monday_open_close'] = "Invalid Time";
                    }
                }
            }

            /* Tuesday */
            if ($storedValue['is_tuesday_open'] == true) {
                if ($storedValue['tuesday_two_session'] == true) {
                    if ($storedValue['tuesday_practice_open'] >= $storedValue['tuesday_lunch_at']) {
                        $errorMessage['tuesday_open_lunch'] = "Invalid Time";
                    }
                    if ($storedValue['tuesday_lunch_at'] >= $storedValue['tuesday_resume_at']) {
                        $errorMessage['tuesday_lunch_resume'] = "Invalid Time";
                    }
                    if ($storedValue['tuesday_resume_at'] >= $storedValue['tuesday_practice_close']) {
                        $errorMessage['tuesday_resume_close'] = "Invalid Time";
                    }
                } else {
                    if ($storedValue['tuesday_practice_open'] >= $storedValue['tuesday_practice_close']) {
                        $errorMessage['tuesday_open_close'] = "Invalid Time";
                    }
                }
            }

            /* Wednesday */
            if ($storedValue['is_wednesday_open'] == true) {
                if ($storedValue['wednesday_two_session'] == true) {
                    if ($storedValue['wednesday_practice_open'] >= $storedValue['wednesday_lunch_at']) {
                        $errorMessage['wednesday_open_lunch'] = "Invalid Time";
                    }
                    if ($storedValue['wednesday_lunch_at'] >= $storedValue['wednesday_resume_at']) {
                        $errorMessage['wednesday_lunch_resume'] = "Invalid Time";
                    }
                    if ($storedValue['wednesday_resume_at'] >= $storedValue['wednesday_practice_close']) {
                        $errorMessage['wednesday_resume_close'] = "Invalid Time";
                    }
                } else {
                    if ($storedValue['wednesday_practice_open'] >= $storedValue['wednesday_practice_close']) {
                        $errorMessage['wednesday_open_close'] = "Invalid Time";
                    }
                }
            }

            /* Thrusday */
            if ($storedValue['is_thrusday_open'] == true) {
                if ($storedValue['thrusday_two_session'] == true) {
                    if ($storedValue['thrusday_practice_open'] >= $storedValue['thrusday_lunch_at']) {
                        $errorMessage['thrusday_open_lunch'] = "Invalid Time";
                    }
                    if ($storedValue['thrusday_lunch_at'] >= $storedValue['thrusday_resume_at']) {
                        $errorMessage['thrusday_lunch_resume'] = "Invalid Time";
                    }
                    if ($storedValue['thrusday_resume_at'] >= $storedValue['thrusday_practice_close']) {
                        $errorMessage['thrusday_resume_close'] = "Invalid Time";
                    }
                } else {
                    if ($storedValue['thrusday_practice_open'] >= $storedValue['thrusday_practice_close']) {
                        $errorMessage['thrusday_open_close'] = "Invalid Time";
                    }
                }
            }

            /* Friday */
            if ($storedValue['is_friday_open'] == true) {
                if ($storedValue['friday_two_session'] == true) {
                    if ($storedValue['friday_practice_open'] >= $storedValue['friday_lunch_at']) {
                        $errorMessage['friday_open_lunch'] = "Invalid Time";
                    }
                    if ($storedValue['friday_lunch_at'] >= $storedValue['friday_resume_at']) {
                        $errorMessage['friday_lunch_resume'] = "Invalid Time";
                    }
                    if ($storedValue['friday_resume_at'] >= $storedValue['friday_practice_close']) {
                        $errorMessage['friday_resume_close'] = "Invalid Time";
                    }
                } else {
                    if ($storedValue['friday_practice_open'] >= $storedValue['friday_practice_close']) {
                        $errorMessage['friday_open_close'] = "Invalid Time";
                    }
                }
            }
            
            /* Saturday */
            if ($storedValue['is_saturday_open'] == true) {
                if ($storedValue['saturday_two_session'] == true) {
                    if ($storedValue['saturday_practice_open'] >= $storedValue['saturday_lunch_at']) {
                        $errorMessage['saturday_open_lunch'] = "Invalid Time";
                    }
                    if ($storedValue['saturday_lunch_at'] >= $storedValue['saturday_resume_at']) {
                        $errorMessage['saturday_lunch_resume'] = "Invalid Time";
                    }
                    if ($storedValue['saturday_resume_at'] >= $storedValue['saturday_practice_close']) {
                        $errorMessage['saturday_resume_close'] = "Invalid Time";
                    }
                } else {
                    if ($storedValue['saturday_practice_open'] >= $storedValue['saturday_practice_close']) {
                        $errorMessage['saturday_open_close'] = "Invalid Time";
                    }
                }
            }
        } else {
            if ($storedValue['is_two_session'] == true) {
                if ($storedValue['practice_open'] >= $storedValue['lunch_at']) {
                    $errorMessage['open_lunch'] = "Invalid Time";
                }
                if ($storedValue['lunch_at'] >= $storedValue['resume_at']) {
                    $errorMessage['lunch_resume'] = "Invalid Time";
                }
                if ($storedValue['resume_at'] >= $storedValue['practice_close']) {
                    $errorMessage['resume_close'] = "Invalid Time";
                }
            } else {
                if ($storedValue['practice_open'] >= $storedValue['practice_close']) {
                    $errorMessage['open_close'] = "Invalid Time";
                }
            }
        }
        if (empty($errorMessage)) {
            $validator = Validator::make($storedValue, AppointmentSettings::GetValidationRule(), AppointmentSettings::GetValidationMessage());
		    if($validator->passes()){
                $user = $this->auth->user();
                $updateValue = AppointmentSettings::where('user_id', '=', $user->id)->where('work_place_id', '=', $request['work_place_id'])->update($storedValue);
                if ($updateValue) {
                    return response()->json(['Success' => 'Settings has been updated'], 200);
                } else {
                    return response()->json(['Failed' => 'Settings has not been updated']);
                }
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Settings has not been updated. Please, try again.', $validator->errors());
            }
        } else {
            return response()->json(['Failed' => 'Settings has not been updated', 'error'=> $errorMessage]);
        }
    }

    public function get_server_time_zone() {
        //date_default_timezone_set('Asia/Kolkata');
        $offset = Carbon::now()->format('Z') / 3600;
        if (is_float($offset)) {
            $offsetExp = explode('.', $offset);
            if ($offsetExp[0] < 0) {
                $serverTimeZone = (strlen($offsetExp[0]) != 2)? str_ireplace('-','-0',$offsetExp[0]).':30':'-'.$offsetExp[0].':30';   
            } else {
                $serverTimeZone = (strlen($offsetExp[0]) != 2)?'+0'.$offsetExp[0].':30':'+'.$offsetExp[0].':30';
            }
        } else {
            if ($offset < 0) {
                $serverTimeZone = (strlen($offset) != 2)? str_ireplace('-','-0',$offset).':00':'-'.$offset.':00';
            } else {
                $serverTimeZone = (strlen($offset) != 2)?'+0'.$offset.':30':'+'.$offset.':30';
            }
        }
        return $serverTimeZone;
    }
	
	public function getBrowser() { 
		$u_agent = $_SERVER['HTTP_USER_AGENT']; 
		$bname = 'Unknown';
		$platform = 'Unknown';
		$version= "";

		//First get the platform?
		if (preg_match('/linux/i', $u_agent)) {
			$platform = 'linux';
		}
		elseif (preg_match('/macintosh|mac os x/i', $u_agent)) {
			$platform = 'mac';
		}
		elseif (preg_match('/windows|win32/i', $u_agent)) {
			$platform = 'windows';
		}

		// Next get the name of the useragent yes seperately and for good reason
		if (preg_match('/MSIE/i',$u_agent) && !preg_match('/Opera/i',$u_agent)) 
		{ 
			$bname = 'Internet Explorer'; 
			$ub = "MSIE"; 
		} 
		elseif (preg_match('/Trident/i',$u_agent)) 
		{ // this condition is for IE11
			$bname = 'Internet Explorer'; 
			$ub = "rv"; 
		} 
		elseif (preg_match('/Firefox/i',$u_agent)) 
		{ 
			$bname = 'Mozilla Firefox'; 
			$ub = "Firefox"; 
		} 
		elseif (preg_match('/Chrome/i',$u_agent)) 
		{ 
			$bname = 'Google Chrome'; 
			$ub = "Chrome"; 
		} 
		elseif (preg_match('/Safari/i',$u_agent)) 
		{ 
			$bname = 'Apple Safari'; 
			$ub = "Safari"; 
		} 
		elseif (preg_match('/Opera/i',$u_agent)) 
		{ 
			$bname = 'Opera'; 
			$ub = "Opera"; 
		} 
		elseif (preg_match('/Netscape/i',$u_agent)) 
		{ 
			$bname = 'Netscape'; 
			$ub = "Netscape"; 
		} 
		
		// finally get the correct version number
		// Added "|:"
		$known = array('Version', $ub, 'other');
		$pattern = '#(?<browser>' . join('|', $known) .
		 ')[/|: ]+(?<version>[0-9.|a-zA-Z.]*)#';
		if (!preg_match_all($pattern, $u_agent, $matches)) {
			// we have no matching number just continue
		}

		// see how many we have
		$i = count($matches['browser']);
		if ($i != 1) {
			//we will have two since we are not using 'other' argument yet
			//see if version is before or after the name
			if (strripos($u_agent,"Version") < strripos($u_agent,$ub)) {
				$version= $matches['version'][0];
			}
			else {
				$version= $matches['version'][1];
			}
		}
		else {
			$version= $matches['version'][0];
		}

		// check if we have a number
		if ($version==null || $version=="") {$version="?";}

		return array(
			'userAgent' => $u_agent,
			'name'      => $bname,
			'version'   => $version,
			'platform'  => $platform,
			'pattern'    => $pattern
		);
	}
}
