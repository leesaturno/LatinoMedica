<?php

/**
 * AgriyaBase - Lumen framework
 * PHP version 5.5.9
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Mugundhan Asokan
 * @email      a.mugundhan@gmail.com
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-04-13
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\UserProfileTransformer;
use App\Transformers\UserAuthTransformer;
use App\Transformers\UserTransformer;
use App\Transformers\WorkplaceTransformer;
use App\User;
use App\UserProfile;
use App\Appointment;
use App\AppointmentSettings;
use App\Workplace;
use App\Specialty, App\Subscription;
use App\Transformers\AppointmentSettingsTransformer;
use App\AppointmentModifications;
use App\AppointmentModificationsTransformer;
use DateTime;
use League\Fractal\Manager;
use DB, Carbon;

class SearchController extends Controller {

    public function search(Request $request) {
        //$requestFields = $request->input();
        $searchFields = $request->only('review','gender_id','city_id','specialty_disease_id','specialty_id','insurance_id','page', 'doctor', 'appointment');
        $viewSlot = 1;
        $conditions = '';
        $wherRawCondition = '';
        $appointmentModificationsUserIds = $workplace_coord = array();
        $isWeb = !empty($request['is_web'])?true:null;
        if(!empty($request['review']) && ($request['review'] == true)){
            $reivew = true;    
        } else {
            $reivew = null;
        }
        
        foreach ($searchFields as $fields => $value) {
            if ($fields != 'page') {
                if(!empty($value)) {
                    if ($fields == 'doctor') {
                        $conditions[] = ['display_name','LIKE','%'.$value.'%'];
                    } else if ($fields == 'specialty_disease_id') {
                        $wherRawCondition[] = "FIND_IN_SET($value,$fields)";
                    } else if($fields == 'specialty_id'){
                        if (is_int((int)$value)) {
                            $wherRawCondition[] = "FIND_IN_SET($value,$fields)";
                        } else {
                            $search = '%' . $value . '%';
                            $specialty = Specialty::select('id')->where('name', 'like', $search)->first();
                            if($specialty) {
                                $wherRawCondition[] = "FIND_IN_SET($specialty->id,$fields)";
                            }
                        }
                    } else if($fields == 'review'){
                        
                    } else if($fields == 'insurance_id'){
                        
                    } else if($fields == 'appointment'){
                        
                    } else if($fields == 'city_id'){

                    } else {
                        $conditions[$fields] = $value;
                    }
                }
            }
        }
        $conditions['is_doctor'] = 1; /* For get only docotor */
        if (!empty($searchFields['appointment']) && ($searchFields['appointment'] != 'anyday')) {
            $dt = Carbon::today();
            $appointmentModifications = AppointmentModifications::where('type', '=', 1);
            if ($searchFields['appointment'] == 'today') {
                $appointmentModifications = $appointmentModifications->where('appoint_date','=',$dt->format('Y-m-d'));
            } else if ($searchFields['appointment'] == 'threeday') {
                $appointmentModifications = $appointmentModifications->where('appoint_date','>=',$dt->format('Y-m-d'))
                    ->where('appoint_date', '<=', $dt->addDays(3)->format('Y-m-d'));
            }
            $appointmentModifications = $appointmentModifications->select(['appointment_modifications.user_id', 'appointment_modifications.work_place_id'])->get()->toArray();
            $user_id = array_column($appointmentModifications, 'user_id');
            $work_place_id_app = array_column($appointmentModifications, 'work_place_id');
            $workplace = Workplace::whereIn('doctor_id', $user_id)
                ->where('is_active', '=', 1)
                ->whereNotIn('id', $work_place_id_app)
                ->select(['id', 'doctor_id'])->groupBy('doctor_id')->get()->toArray();
            $workplace_user_id = array_column($workplace, 'doctor_id');
            $appointmentModificationsUserIds = array_diff( $user_id, $workplace_user_id );
        }
        /* for search doctor by first & last name */
        if(!empty($searchFields['doctor'])){
             if(!empty($wherRawCondition)){
                $query = UserProfile::join('appointment_settings', function ($join) {
                        $join->on('appointment_settings.user_id', '=', 'user_profiles.user_id')
                        ->where('appointment_settings.is_active', '=', 1)
                        ->where('appointment_settings.is_suspend', '=', 0);
                    })
                    ->whereRaw(implode(' AND ',$wherRawCondition))
                    ->where($conditions);
            } else {
                $query = UserProfile::join('appointment_settings', function ($join) {
                        $join->on('appointment_settings.user_id', '=', 'user_profiles.user_id')
                        ->where('appointment_settings.is_active', '=', 1)
                        ->where('appointment_settings.is_suspend', '=', 0);
                    })
                    ->where($conditions);
            }
        } else {
           if(!empty($wherRawCondition)){
                $query = UserProfile::join('appointment_settings', function ($join) {
                        $join->on('appointment_settings.user_id', '=', 'user_profiles.user_id')
                        ->where('appointment_settings.is_active', '=', 1)
                        ->where('appointment_settings.is_suspend', '=', 0);
                    })
                    ->whereRaw(implode(' AND ',$wherRawCondition))
                    ->where($conditions);
            } else {
                $query = UserProfile::join('appointment_settings', function ($join) {
                        $join->on('appointment_settings.user_id', '=', 'user_profiles.user_id')
                        ->where('appointment_settings.is_active', '=', 1)
                        ->where('appointment_settings.is_suspend', '=', 0);
                    })
                    ->where($conditions);
            }
        }
        $query = $query->join('work_places', function ($join) {
                $join->on('work_places.doctor_id', '=', 'user_profiles.user_id');
            })
            ->join('users', function ($join) {
                $join->on('users.id', '=', 'user_profiles.user_id')
                     ->where('users.is_active', '=', '1');
            });
        if (!empty($searchFields['insurance_id'])) {
            $query = $query->join('insurance_patients_limit', function ($join) use ($searchFields) {
                $join->on('insurance_patients_limit.doctor_id', '=', 'user_profiles.user_id')
                    ->where('insurance_patients_limit.insurance_id', '=', $searchFields['insurance_id']);
            });
        }
        if (!empty($appointmentModificationsUserIds)) {
            $query = $query->whereNotIn('user_profiles.user_id', $appointmentModificationsUserIds);
        }
        if (!empty($searchFields['city_id'])) {
                $query = $query->where('work_places.city_id', $searchFields['city_id']);
        }
         if(!empty($searchFields['review'])){
            $docotorsListPaginate = $query->select(['user_profiles.user_id', 'users.overall_avg_rating', 'appointment_settings.work_place_id'])
                                        ->groupBy('user_profiles.user_id')
                                        ->orderBy('users.overall_avg_rating', 'desc')
                                        ->paginate(config('listing.per_page'))->toArray();
        } else {
            $docotorsListPaginate = $query->select(['user_profiles.user_id', 'appointment_settings.work_place_id'])->groupBy('user_profiles.user_id')->paginate(config('listing.per_page'))->toArray();
        }
        $userIds = array_column($docotorsListPaginate['data'], 'user_id');
        $work_place_id = array_column($docotorsListPaginate['data'], 'work_place_id');
        $workplace_coord = Workplace::whereIn('id', $work_place_id)
            ->where('is_active', '=', 1)
            ->select(['latitude', 'longitude'])->groupBy('doctor_id')->get()->toArray();
        unset($docotorsListPaginate['data']);
       if (!empty($searchFields['city_id'])) {
        	$appointmentDetails = $this->get_doctors_appointment_details($userIds, $viewSlot, 1, $isWeb, $reivew, $work_place_id);
       } else {
        	$appointmentDetails = $this->get_doctors_appointment_details($userIds, $viewSlot, 1, $isWeb, $reivew);
       }
        if(!empty($appointmentDetails)){
            $jsonUserIds = base64_encode(implode('-',$userIds));
            return response()->json(['paginate_values' => $docotorsListPaginate, 'user_profiles' => [$appointmentDetails],'weekids'=>$jsonUserIds,'userLoadMore'=>5, 'viewslot'=>$viewSlot, 'coordinates' => $workplace_coord]);
        } else {
            return response()->json(['paginate_values' => [], 'user_profiles' => [],'weekids'=>'','userLoadMore'=>5, 'viewslot'=>$viewSlot, 'coordinates' => $workplace_coord]);
        }
    }

    public function get_doctors_appointment_details($userIds, $viewSlot = 1, $isUserProfileNeeded = 1, $isWeb, $reivew, $workPlaceId = '') {
        if (!empty($userIds)) {
            foreach ($userIds as $key => $userId) {
                $userIds[$key] = preg_replace("/[^0-9]/", "", $userId);
            }
            /* For get the appointment setting details */ 
            $appoinmentSettings = AppointmentSettings::whereIn('appointment_settings.user_id', $userIds)->where('is_active', '=', 1);
	        if (!empty($workPlaceId)) {
                if(is_array($workPlaceId)) {
                    $appoinmentSettings = $appoinmentSettings->whereIn('work_place_id', $workPlaceId);
                } else {
                    $appoinmentSettings = $appoinmentSettings->where('work_place_id', $workPlaceId);
                }
            } else {
                $workplace = Workplace::whereIn('doctor_id', $userIds)
                    ->where('is_preferred_location', '=', 1)
                    ->where('is_active', '=', 1)
                    ->select(['id', 'doctor_id'])->groupBy('doctor_id')->get()->toArray();
                $workplace_id = array_column($workplace, 'doctor_id');
                $work_place_id = array_column($workplace, 'id');
                $workplaceUserIds = array();
                $workplaceUserIds = array_diff( $workplace_id, $userIds );
                if(!empty($workplaceUserIds)) {
                    $workplace_pref = Workplace::whereIn('doctor_id', $workplaceUserIds)->where('is_active', '=', 1)
                        ->select(['id', 'doctor_id'])->groupBy('doctor_id')->get()->toArray();
                    $workplace_pref_id = array_column($workplace_pref, 'id');
                    $work_place_id = array_merge($work_place_id, $workplace_pref_id);
                }
                $appoinmentSettings = $appoinmentSettings->whereIn('work_place_id', $work_place_id);
            }
            $appoinmentSettings = $appoinmentSettings->get()->toArray();
            $daysArray = array();
            if (!empty($appoinmentSettings)) {
                /* addDate() is based on today date process if we need current date and day just pass empty function */
                for ($i = 0; $i < config('constants.slot_day'); $i++) {
                    $daysArray[] = $this->addDate($i, $viewSlot);
                }
                $settingFrom = $daysArray[0]['date'];
                $settingTo = $daysArray[config('constants.slot_day')-1]['date'];
                foreach ($appoinmentSettings as $appointmentSetting) {
                    $modifiedAppointmentDetails = $this->get_doctor_appointment_modificaiton_details($appointmentSetting['user_id'], $settingFrom, $settingTo);
                    /* For build the modified setting process */
                    if (!empty($modifiedAppointmentDetails)) {
                        $buildWeek = '';
                        foreach ($modifiedAppointmentDetails as $modifiedAppointmentDetail) {
                            $calenderBuildDay[] = $this->getDatebyDay($modifiedAppointmentDetail['appoint_date']);
                            if (in_array($modifiedAppointmentDetail['appoint_date'], array_column($daysArray, 'date'))) {
                                $day['day'] = $this->getDatebyDay($modifiedAppointmentDetail['appoint_date']);
                                if ($modifiedAppointmentDetail['type'] == 1) {
                                    $buildWeek[$day['day']] = [0 => '--'];
                                } else {
                                    $buildWeek[$day['day']] = '';
                                    if (!empty($modifiedAppointmentDetail['practice_open'])) {
                                        foreach (explode(',', $modifiedAppointmentDetail['practice_open']) as $timeValue) {
                                            $buildWeek[$day['day']][] = $timeValue;
                                        }
                                    } else {
                                        $buildWeek[$day['day']] = ['0' => '--'];
                                    }
                                }
                            }
                        }
                        if (count($buildWeek) != config('constants.slot.day')) {
                            $otherBuildDays = array_diff(array_column($daysArray, 'day'), $calenderBuildDay);
                            $otherDaysbuildWeek = $this->appointmentsettings_calender_build($otherBuildDays, $appointmentSetting);
                            $buildWeek = array_merge($buildWeek, $otherDaysbuildWeek);
                        }
                    } else {
                        $buildWeek = $this->appointmentsettings_calender_build(array_column($daysArray, 'day'), $appointmentSetting);
                    }
                    if (is_array($buildWeek) && !empty($buildWeek)) {
                        foreach ($buildWeek as $weeks) {
                            if (count($weeks) > 5) {
                                $buildWeek['show_button'] = 1;
                                break;
                            } else {
                                $buildWeek['show_button'] = 0;
                            }
                        }
                    } else {
                        $buildWeek['show_button'] = 0;
                    }      
                    if ($isUserProfileNeeded) {
                        $fractal = new Manager();
                        /* For get the Doctor Profile Details */
                        $doctorDetail = UserProfile::where('user_id', $appointmentSetting['user_id'])->first();
                        $doctorDetailwithIncludes = new \League\Fractal\Resource\Item($doctorDetail, (new UserProfileTransformer)->setDefaultIncludes(['User', 'city', 'state', 'country', 'gender']));
                        $doctorDetailValue = $fractal->createData($doctorDetailwithIncludes)->toArray();
                        $doctorDetailValue['starRating'] = User::scopeStarRating($appointmentSetting['user_id']); /* here need to add the start rating calculation */
                        $calenderDetails[$appointmentSetting['user_id']] = array_merge($doctorDetailValue, $buildWeek);
                    } else {
                        $calenderDetails = $buildWeek;
                    }
                    /* For Removed Booked Appointment Details Here */
                    $appointmentDetails = $this->get_doctor_booking_appointments($appointmentSetting['user_id'], $settingFrom, $settingTo);
                    if (!empty($appointmentDetails)) {
                        foreach ($appointmentDetails as $appointmentDetail) {
                            $checkDay = date('D', strtotime($appointmentDetail['appointment_date']));
                            if ($isUserProfileNeeded) {
                                if (!empty($calenderDetails[$appointmentSetting['user_id']][$checkDay])) {
                                    if (($key = array_search($appointmentDetail['appointment_time'], $calenderDetails[$appointmentSetting['user_id']][$checkDay])) !== false) {
                                        unset($calenderDetails[$appointmentSetting['user_id']][$checkDay][$key]);
                                        if(!empty($calenderDetails[$appointmentSetting['user_id']][$checkDay])){    
                                            $calenderDetails[$appointmentSetting['user_id']][$checkDay] = array_values($calenderDetails[$appointmentSetting['user_id']][$checkDay]);
                                        } else {
                                            $calenderDetails[$appointmentSetting['user_id']][$checkDay] = [0 => '--'];
                                        }
                                    }
                                }
                            } else {
                                if (!empty($calenderDetails[$checkDay])) {
                                    if (($key = array_search($appointmentDetail['appointment_time'], $calenderDetails[$checkDay])) !== false) {
                                        unset($calenderDetails[$checkDay][$key]);
                                        if(!empty($calenderDetails[$checkDay])){
                                            $calenderDetails[$checkDay] = array_values($calenderDetails[$checkDay]);
                                        } else {
                                            $calenderDetails[$checkDay] = [0 => '--'];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    /* Here Removed For Current Date & Time Before Appointment Time */
                    if ($viewSlot == 1) {
                        $todayDay = $daysArray[0]['day'];
                        $format = config('site.timeformat');
                        if($format == 12){
                            $currentTime = date('h:i A');
                        } else {
                            $currentTime = date('H:i');
                        }
                        if ($isUserProfileNeeded) {
                            $todayCond = $calenderDetails[$appointmentSetting['user_id']][$todayDay];
                        } else {
                            $todayCond = $calenderDetails[$todayDay];
                        }
                        //echo '<pre>'; print_r($todayCond); die;
                        if (!empty($todayCond)) {
                            if($format == 12){
                                $filterValue = array_filter($todayCond, function ($timeValue) use ($currentTime) {
                                    return date('H:i', strtotime($timeValue)) > date('H:i', strtotime($currentTime));
                                });
                            } else {
                                $filterValue = array_filter($todayCond, function ($timeValue) use ($currentTime) {
                                    return $timeValue > $currentTime;
                                });
                            }
                            if ($isUserProfileNeeded) {
                                unset($calenderDetails[$appointmentSetting['user_id']][$todayDay]);
                                if(!empty($filterValue)){
                                    $calenderDetails[$appointmentSetting['user_id']][$todayDay] = array_values($filterValue);
                                     
                                } else {
                                    $calenderDetails[$appointmentSetting['user_id']][$todayDay] = [0 => '--'];
                                }
                            } else {
                                unset($calenderDetails[$todayDay]);
                                if(empty(!$filterValue)){
                                    $calenderDetails[$todayDay] = array_values($filterValue);
                                } else {
                                    $calenderDetails[$todayDay] = [0 => '--'];
                                }
                            }
                        }
                    }
                    if($isWeb == null){
                        /* for find and fill the empty block */
                        $maxCountDay = '';
                        foreach($daysArray as $day){
                            if ($isUserProfileNeeded) {
                                $maxCountDay[] = count($calenderDetails[$appointmentSetting['user_id']][$day['day']]);
                            } else {
                                $maxCountDay[] = count($calenderDetails[$day['day']]);
                            }
                        }
                        $maxCount = max($maxCountDay);
                        foreach($daysArray as $day){
                            if ($isUserProfileNeeded) {
                                $objCountVal = count($calenderDetails[$appointmentSetting['user_id']][$day['day']]);
                                if($maxCount != $objCountVal){
                                    $fillVal = $maxCount - $objCountVal;
                                    $calenderDetails[$appointmentSetting['user_id']][$day['day']] = array_merge($calenderDetails[$appointmentSetting['user_id']][$day['day']], array_fill($objCountVal, $fillVal, '--'));
                                }
                            } else {
                                $objCountVal =  count($calenderDetails[$day['day']]);
                                if($maxCount != $objCountVal){
                                    $fillVal = $maxCount - $objCountVal;
                                    $calenderDetails[$day['day']] = array_merge($calenderDetails[$day['day']], array_fill($objCountVal, $fillVal, '--'));
                                }
                            }
                        }
                    }
                    $calenderDetails[$appointmentSetting['user_id']]['work_place_id'] = $appointmentSetting['work_place_id'];
                    $fractal = new Manager();
                    /* For get the Doctor Profile Details */
                    $appointmentWorkplace = Workplace::where('id', $appointmentSetting['work_place_id'])->where('is_active', '=', 1)->first();
                    $appointmentWorkplacewithIncludes = new \League\Fractal\Resource\Item($appointmentWorkplace, new WorkplaceTransformer);
                    $WorkplaceDetailValue = $fractal->createData($appointmentWorkplacewithIncludes)->toArray();
                    $calenderDetails[$appointmentSetting['user_id']]['work_place'] = $WorkplaceDetailValue;
                }
                return $calenderDetails;
            } else {
                return $calenderDetails = '';
            }
        } else {
            return $calenderDetails = '';
        }
    }

    public function appointmentsettings_calender_build($daysArray = array(), $appointmentSetting) {
        if (!empty($daysArray)) {
            foreach ($daysArray as $otherDay) {
                if ($appointmentSetting['type'] == 0) {
                    if ($appointmentSetting['is_two_session'] == 1) {
                        /* Before Break Here */
                        $beforeBreak = $this->getTimeSlot($appointmentSetting['practice_open'], $appointmentSetting['lunch_at'], $appointmentSetting['calendar_slot_id']);
                        
                        /* After the Break Here */
                        $afterBreak = $this->getTimeSlot($appointmentSetting['resume_at'], $appointmentSetting['practice_close'], $appointmentSetting['calendar_slot_id']);
                        $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                    } else {
                        $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['practice_open'], $appointmentSetting['practice_close'], $appointmentSetting['calendar_slot_id']);
                    }
                } else {
                    /* For Check individual and set the time for all days */
                    if ($otherDay == 'Mon') {
                        if ($appointmentSetting['is_monday_open'] == 1) {
                            if ($appointmentSetting['monday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['monday_practice_open'], $appointmentSetting['monday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['monday_resume_at'], $appointmentSetting['monday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['monday_practice_open'], $appointmentSetting['monday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Tue') {
                        if ($appointmentSetting['is_tuesday_open'] == 1) {
                            if ($appointmentSetting['tuesday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['tuesday_practice_open'], $appointmentSetting['tuesday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['tuesday_resume_at'], $appointmentSetting['tuesday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['tuesday_practice_open'], $appointmentSetting['tuesday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Wed') {
                        if ($appointmentSetting['is_wednesday_open'] == 1) {
                            if ($appointmentSetting['wednesday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['wednesday_practice_open'], $appointmentSetting['wednesday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['wednesday_resume_at'], $appointmentSetting['wednesday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['wednesday_practice_open'], $appointmentSetting['wednesday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Thu') {
                        if ($appointmentSetting['is_thrusday_open'] == 1) {
                            if ($appointmentSetting['thrusday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['thrusday_practice_open'], $appointmentSetting['thrusday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['thrusday_resume_at'], $appointmentSetting['thrusday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['thrusday_practice_open'], $appointmentSetting['thrusday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Fri') {
                        if ($appointmentSetting['is_friday_open'] == 1) {
                            if ($appointmentSetting['friday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['friday_practice_open'], $appointmentSetting['friday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['friday_resume_at'], $appointmentSetting['friday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['friday_practice_open'], $appointmentSetting['friday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Sat') {
                        if ($appointmentSetting['is_saturday_open'] == 1) {
                            if ($appointmentSetting['saturday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['saturday_practice_open'], $appointmentSetting['saturday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['saturday_resume_at'], $appointmentSetting['saturday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['saturday_practice_open'], $appointmentSetting['saturday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Sun') {
                        if ($appointmentSetting['is_sunday_open'] == 1) {
                            if ($appointmentSetting['sunday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['sunday_practice_open'], $appointmentSetting['sunday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['sunday_resume_at'], $appointmentSetting['sunday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['sunday_practice_open'], $appointmentSetting['sunday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    }
                }
            }
        } else {
            $buildWeek = '';
        }
        return $buildWeek;
    }

    public function get_doctor_appointment_modificaiton_details($doctorId, $startDate = null, $endDate = null) {
        if ($startDate == null && $endDate == null) {
            $modifiedAppointmentSettings = AppointmentModifications::where('appoint_date', '>=', date('Y-m-d'))->where(['user_id' => $doctorId, 'is_active'=>1])->get();
        } else {
            $modifiedAppointmentSettings = AppointmentModifications::whereBetween('appoint_date', [$startDate, $endDate])->where(['user_id'=>$doctorId , 'is_active'=>1])->get();
        }
        return $modifiedAppointmentSettings->toArray();
    }

    public function get_doctor_booking_appointments($doctorId,$startDate = null, $endDate = null){
        $whereInIds = [config('constants.ConstAppointmentStatus.Cancelled'), config('constants.ConstAppointmentStatus.Rejected')];
        if ($startDate == null && $endDate == null) {
            $appointmentBookings =  Appointment::where('appointment_date', '>=', date('Y-m-d'))
                    ->where(['doctor_user_id' => $doctorId])
                    ->whereNotIn('appointment_status_id', $whereInIds)
                    ->select(['appointment_date','appointment_time','doctor_user_id'])
                    ->get();
        } else {
            $appointmentBookings =  Appointment::whereBetween('appointment_date', [$startDate, $endDate])
                ->where('doctor_user_id', $doctorId)
                ->whereNotIn('appointment_status_id', $whereInIds)
                ->select(['appointment_date','appointment_time','doctor_user_id'])
                ->get();
        }
        return $appointmentBookings->toArray();
    }
    public function getDatebyDay($date) {
        return date('D', strtotime($date));
    }

    public function addDate($days = 0, $multipleCount = 1) {
        /* Here calculate the added day or days */
        if ($multipleCount > 1) {
            $addDays = ($multipleCount - 1) * config('constants.slot_day') + $days;
        } else {
            $addDays = $days;
        }
        /* Here start date added process */
        if (($days == 0) && ($multipleCount == 1)) {
            return ['day' => date('D'), 'date' => date('Y-m-d')];
        } else if (($days == 0) && ($multipleCount > 1)) {
            $days = ($multipleCount - 1) * config('constants.slot_day');
            $todayDate = date('Y-m-d');
            $date = [
                'day' => date('D', strtotime($todayDate . "+" . $days . " days")),
                'date' => date('Y-m-d', strtotime($todayDate . "+" . $days . " days")),
            ];
            return $date;
        } else {
            $todayDate = date('Y-m-d');
            $date = [
                'day' => date('D', strtotime($todayDate . "+" . $addDays . " days")),
                'date' => date('Y-m-d', strtotime($todayDate . "+" . $addDays . " days")),
            ];
            return $date;
        }
    }

    public function getTimeSlot($startTime, $endTime, $interval) {
        /* For Split the time slot here */
        $format = config('site.timeformat');
        $start = new DateTime(date('Y-m-d') . $startTime);
        $end = new DateTime(date('Y-m-d') . $endTime);
        if($format == 12){
            $timeSlotList[] = $start->modify('+0 minutes')->format('h:i A'); /* For add the start time has current time */
        } else {
            $timeSlotList[] = $start->modify('+0 minutes')->format('H:i'); /* For add the start time has current time */
        }
        while ($start < $end) {
            if($format == 12){
                $timeSlotList[] = $start->modify('+' . $interval . 'minutes')->format('h:i A');
            } else {
                $timeSlotList[] = $start->modify('+' . $interval . 'minutes')->format('H:i');
            }

        }
        return $timeSlotList;
    }
    public function weeklist($userIds, $viewSlot){
        $isWeb = !empty($_GET['is_web'])?true:null;
		$reivew = true;
        $userIDS = explode('-',base64_decode($userIds));
        $appointmentDetails = $this->get_doctors_appointment_details($userIDS, $viewSlot, 1 , $isWeb, $reivew);
        return response()->json(['user_profiles' => [$appointmentDetails],'viewslot'=>$viewSlot,'userLoadMore'=>5]);
    }
    public function workPlaceWeeklist($userIds, $viewSlot, $workPlaceId){
        $isWeb = !empty($_GET['is_web'])?true:null;
		$reivew = true;
        $userIDS = explode('-',base64_decode($userIds));
        $appointmentDetails = $this->get_doctors_appointment_details($userIDS, $viewSlot, 1 , $isWeb, $reivew, $workPlaceId);
        return response()->json(['user_profiles' => [$appointmentDetails],'viewslot'=>$viewSlot,'userLoadMore'=>5]);
    }
    public function getdoctorweeklist($userId, $viewSlot){
        $isWeb = !empty($_GET['is_web'])?true:null;
        $reivew = null;
        $workplaces = Workplace::where('doctor_id', $userId)
                        ->where('is_active', '=', 1)->get();
        $appointmentDetails = array();
        $fractal = new Manager();
        foreach($workplaces as $workplace) {
            $workplaceDetailwithIncludes = new \League\Fractal\Resource\Item($workplace, new WorkplaceTransformer);
            $workplaceDetail = $fractal->createData($workplaceDetailwithIncludes)->toArray();
            $appointmentDetails[$workplace->id] = $this->get_doctors_appointment_details([$userId], $viewSlot,0, $isWeb, $reivew, $workplace->id);
            $appointmentDetails[$workplace->id]['workplace'] = $workplaceDetail;
        }
        return response()->json(['user_profiles' => [$appointmentDetails],'viewslot'=>$viewSlot,'userLoadMore'=>5]);
    }
   public function getdoctorWorkPlaceWeeklist($userId, $viewSlot, $workPlaceId){
        $isWeb = !empty($_GET['is_web'])?true:null;
        $reivew = null;
        $appointmentDetails = $this->get_doctors_appointment_details([$userId], $viewSlot,0, $isWeb, $reivew, $workPlaceId);
        return response()->json(['user_profiles' => [$appointmentDetails],'viewslot'=>$viewSlot,'userLoadMore'=>5]);
    }
    public function timesplitslot(Request $request){
        $user = $this->auth->user();
        $appointmentSettings = AppointmentSettings::filterByRequest($request)->where('user_id','=',$user->id)->first();
        if ($appointmentSettings) {
            $splitedTime = $this->getTimeSlot('00:00','23:59',$appointmentSettings['calendar_slot_id']);
            array_pop($splitedTime);
            return response()->json(['data'=>$splitedTime]);   
        } else {
            return response()->json(['data'=>[]]);
        }

    }
    public function searchAll(Request $request) {
        $searchFields = $request->only('page', 'q');
        $conditions = '';
        $user = $doctor_speciality = array();
        foreach ($searchFields as $fields => $value) {
            if ($fields != 'page') {
                if(!empty($value)) {
                    if ($fields == 'q') {
                        $conditions[] = ['user_profiles.display_name','LIKE','%'.$value.'%'];
                    }
                }
            }
        }
        if(!empty($searchFields['q'])) {
            $search = '%' . $searchFields['q'] . '%';
            $user['specialty'] = Specialty::select('id', 'name')->where('name', 'like', $search)->limit(7)->get()->toArray();
        }
        if (!empty($searchFields['page'])) {
            $skip = $searchFields['page'] * config('listing.per_page');
        } else {
            $skip = 0;
        }
        $subscriptions = Subscription::select('id')->where('price', '>=', '0.00')->get();
        $membership = User::with('user_profile')
                ->where('users.role_id', config('constants.ConstUserTypes.Doctor'))
                /*->join('user_profiles', function ($join) {
                    $join->on('user_profiles.user_id', '=', 'users.id');
                })*/             
                ->where('users.subscription_end', '>=', date('Y-m-d'))
                ->orderBy('users.overall_avg_rating', 'desc'); 
        if (config('site.subscription_premium_doctor')) {
            $membership = $membership->whereIn('users.subscription_id', $subscriptions);
        }
        if($conditions){
            $membership = $membership->where($conditions);
        }
        $membership = $membership->get();
        $fractal = new Manager();
        $membershipDetailwithIncludes = new \League\Fractal\Resource\Collection($membership, (new UserTransformer)->setDefaultIncludes(['user_profile','attachments']));
        $memberships = $fractal->createData($membershipDetailwithIncludes)->toArray();

        $allspa = Specialty::select('id', 'name')->get()->toArray();
        $all_speciality =array();
        if (!empty($allspa)) {
            foreach ($allspa as $key => $sd){
                $all_speciality[$key]['id'] = $sd['id'];
                $all_speciality[$key]['caption'] = $sd['name'];
				$all_speciality[$key]['specialty'] = $sd['id'];
            }
        }
        foreach($memberships['data'] as $key => $membership) {
            if (isset($membership['user_profile'])) {
                $user_profile = $membership['user_profile']['data'];
                $doctor[$key]['id'] = $membership['id'];
                if(!empty(trim($user_profile['display_name']))) {
                    $doctor[$key]['name'] = $user_profile['display_name'];
					$doctor[$key]['username'] = $membership['username'];
                } else {
                    $doctor[$key]['name'] = $user_profile['first_name'] .' '.$user_profile['last_name'];
					$doctor[$key]['username'] = $membership['username'];
                }
                $doctor[$key]['points'] = $membership['points'];
                /*if(!empty($user_profile['specialties'])) {
                    $caption = $user_profile['specialties'][0]['name'] .' - ';
					$specialty = $user_profile['specialties'][0]['id'];
                }*/
                if(!empty($user_profile['city'])) {
                    //$caption .= $user_profile['city']['data']['name'] .' , ';
                }
                if(!empty($user_profile['country'])) {
                    //$caption .= $user_profile['country']['data']['iso2'];
                }
                if (isset($membership['attachments'])) {
                    $doctor[$key]['image'] = $membership['attachments']['data']['thumb']['small'] ;
                }
            }            
            /*if (isset($caption)) {               
                $doctor_speciality[$key]['id'] = $membership['id'];
                $doctor_speciality[$key]['caption'] = $caption;
				$doctor_speciality[$key]['specialty'] = $specialty;
            }*/
        }
        $doctor = array_merge($doctor, $all_speciality);
        if (!empty($doctor_speciality)) {
            for ($caption_count = 0; $caption_count < count($doctor_speciality); $caption_count++) {     
                $duplicate = null;
                for ($sub_caption_count = $caption_count+1; $sub_caption_count < count($doctor_speciality); $sub_caption_count++) {
                    if (strcmp($doctor_speciality[$sub_caption_count]['caption'], $doctor_speciality[$caption_count]['caption']) === 0) {
                        $duplicate = $sub_caption_count;
                        break;
                    }
                }
                if (!is_null($duplicate))
                    array_splice($doctor_speciality, $duplicate,1);
            }
        }
        $user['doctor'] = array_merge($doctor_speciality, $doctor);
        return response()->json($user); 
    }
}
