<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Appointment;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\AppointmentTransformer;
use App\Transformers\AppointmentExportTransformer;
use App\Transformers\UserProfileTransformer;
use App\Transformers\WorkplaceTransformer;
use App\User, App\Subscription;
use App\AppointmentSettings;
use App\UserProfile;
use App\Specialty;
use App\SpecialtyDiseas;
use App\Workplace;
use App\AppointmentModifications;
use App\Services\AppointmentService;
use App\InsurancePatient, App\Activity;
use GuzzleHttp\json_decode;
use League\Fractal\Manager;
use Carbon;
use Excel, PDF;
/**
 * Appointments resource representation.
 *
 * @Resource("Appointments")
 */
class AppointmentsController extends Controller {

    
    /**
     * @var AppointmentSettings
     */
    protected $AppointmentService;    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AppointmentService $appointment_service) {
        /* $this->middleware('jwt.auth'); */
        $this->middleware('jwt.auth', ['only' => ['index', 'show', 'booked','userisbook','changeStatus', 'calenderview', 'calenderViewDoctor', 'export']]);
        $this->AppointmentService = $appointment_service;
    }

    /**
     * Show all appointments
     *
     * Get a JSON representation of all the user views.
     *
     * @Get("/appointments?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
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
    public function index(Request $request, $type = null) {
        $user = $this->auth->user();
        if ($user->role_id == config('constants.ConstUserTypes.User')) {
            $condition = ['user_id' => $user->id];
        } else if ($user->role_id == config('constants.ConstUserTypes.Doctor')) {
            $condition = ['doctor_user_id' => $user->id];
        }
        if ($type == 'all' || $type == null) {
            $appointments = Appointment::where($condition)->orderBy('appointment_date', 'desc')->paginate(20);
        } else if ($type == 'today') {
            $date_condition = ['appointment_date' => date('Y-m-d')];
            $condition = array_merge($condition, $date_condition);
            $appointments = Appointment::where($condition)->orderBy('appointment_date', 'desc')->paginate(20);
        } else if ($type == 'week') {
            $today = Carbon::now();
            $startDate = Carbon::parse(Carbon::parse($today)->subDays($today->dayOfWeek))->format('Y-m-d');            
            $endDate = Carbon::parse(Carbon::parse($startDate)->addDays(7))->format('Y-m-d');    
            $appointments = Appointment::whereBetween('appointment_date', [
                       $startDate,
                        $endDate 
                    ])
                    ->where('doctor_user_id', $user->id)
                    ->orderBy('appointment_date', 'desc')
                    ->paginate(20);
        } else if ($type == 'month') {
            $startDate = date('Y-m-01');
            $endDate = Carbon::parse(Carbon::parse($startDate)->addMonth(1))->format('Y-m-d');
            $appointments = Appointment::whereBetween('appointment_date', [
                        $startDate,
                        $endDate
                    ])
                    ->where($condition)
                    ->orderBy('appointment_date', 'desc')
                    ->paginate(20);
        } else if ($type == 'pending-approval') {
            $appointments = Appointment::where(['appointment_status_id' => config('constants.ConstAppointmentStatus.PendingApproval'),'user_id'=>$user->id])->orderBy('appointment_date', 'desc')->paginate(20);
        } else if ($type == 'approved') {
            $appointments = Appointment::where(['appointment_status_id' => config('constants.ConstAppointmentStatus.Approved'),'user_id'=>$user->id])->orderBy('appointment_date', 'desc')->paginate(20);
        } else if ($type == 'cancelled') {
            $appointments = Appointment::where(['appointment_status_id' => config('constants.ConstAppointmentStatus.Cancelled'),'user_id'=>$user->id])->orderBy('appointment_date', 'desc')->paginate(20);
        } else if ($type == 'rejected') {
            $appointments = Appointment::where(['appointment_status_id' => config('constants.ConstAppointmentStatus.Rejected'),'user_id'=>$user->id])->orderBy('appointment_date', 'desc')->paginate(20);
        } else if ($type == 'upcomming_appointment') {
            $datetime =  date('Y-m-d H:i A');
            $appointments = Appointment::where('user_id', $user->id)->whereRaw("CONCAT(appointment_date,' ',appointment_time) >= '".$datetime."'")->orderBy('appointment_date', 'desc')->paginate(20);
        }
        return $this->response->paginator($appointments, (new AppointmentTransformer)->setDefaultIncludes(['User', 'doctor_user','appointment_status', 'workplace','family_friend']));
    }

    /*public function index_year(Request $request) {
        $user = $this->auth->user();
        if ($user->role_id == config('constants.ConstUserTypes.User')) {
            $condition = ['user_id' => $user->id];
        } else if ($user->role_id == config('constants.ConstUserTypes.Doctor')) {
            $condition = ['doctor_user_id' => $user->id];
        }
        $appointments = Appointment::where($condition)->orderBy('created_at', 'desc')->paginate(20);
        $appointment_datas = $this->response->paginator($appointments, (new AppointmentTransformer)->setDefaultIncludes(['User', 'doctor_user','appointment_status', 'workplace','family_friend']));
        print_r(json_encode())
    }*/

    /**
     * Show the specified appointment details.
     * Show the page with a `id`.     *
     * @Get("/appointments/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "language_id": 42, "title": "Term and conditions", "slug": "term-and-conditions", "page_content": "XXX", "is_active": 0, "Language": {"id": 42, "name": "English", "iso2": "en", "iso3": "eng", "is_active": 1}}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show($id) {
        $user = $this->auth->user();
        $appointmnet = Appointment::find($id);
        if (!$appointmnet) {
            return $this->response->errorNotFound("Invalid Request");
        }
        if ($user->role_id == config('constants.ConstUserTypes.Doctor')) {
            $appointmnet['next_consulting'] = Appointment::where('appointment_date', $appointmnet->appointment_date)
                ->where('appointment_time', '>=', $appointmnet->appointment_time)
                ->where('id', '!=', $appointmnet->id)
                ->where('doctor_user_id', $appointmnet->doctor_user_id)
                ->orderBy('appointment_time')->first();
            return $this->response->item($appointmnet, (new AppointmentTransformer)->setDefaultIncludes(['appointment_status','user', 'specialty_diseas', 'next_consulting', 'workplace','family_friend']));
        } else {
            return $this->response->item($appointmnet, (new AppointmentTransformer)->setDefaultIncludes(['doctor_user', 'appointment_status','specialty_diseas', 'workplace','family_friend']));
        }

    }

    /**
     * Show the specified appointment details.
     * Show the page with a `id`.     *
     * @Get("/appointments/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "language_id": 42, "title": "Term and conditions", "slug": "term-and-conditions", "page_content": "XXX", "is_active": 0, "Language": {"id": 42, "name": "English", "iso2": "en", "iso3": "eng", "is_active": 1}}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function booking($doctorId, $aptDate, $aptTime) {
        $fractal = new Manager();
        /* For get the Doctor Profile Details Here */
        $doctorProfile = UserProfile::where('user_id', '=', $doctorId)->first();
        $doctorProfileWithIncludes = new \League\Fractal\Resource\Item($doctorProfile, (new UserProfileTransformer)->setDefaultIncludes(['User','city', 'country', 'gender']));
        $doctorDetailValue = $fractal->createData($doctorProfileWithIncludes)->toArray();
        /* For get the Doctor Specialty Diseas */
        $doctorSpecialtieDiseas = SpecialtyDiseas::select(['id', 'name', 'slug'])->whereIn('id', explode(',', $doctorProfile['specialty_id']))->get()->toArray();
        /* Here for Star Rating */
        $doctorDetailValue['data']['start_rating'] = User::scopeStarRating($doctorId);
        return response()->json(['doctor_profile' => $doctorDetailValue, 'doctor_specialty_diseas' => $doctorSpecialtieDiseas]);
    }

    public function booked(Request $request) {
        $acceptFields = $request->only('step1value', 'step2value');
        $user = $this->auth->user();
        $storedValue = array_merge(
                json_decode(base64_decode($acceptFields['step1value']), true), json_decode(base64_decode($acceptFields['step2value']), true)
        );
        $storedValue['user_id'] = $user->id;
        $storedValue['patient_note'] = isset($storedValue['notes'])?$storedValue['notes']:' ';
		unset($storedValue['notes']);
        $drProfile = UserProfile::select(['user_id', 'is_newpatient_accepted'])->where('user_id', '=', $storedValue['doctor_user_id'])->first()->toArray();
        $storedValue['appointment_status_id'] = ($drProfile['is_newpatient_accepted'] == 0) ? config('constants.ConstAppointmentStatus.Approved') : config('constants.ConstAppointmentStatus.PendingApproval');
        foreach ($storedValue as $fieldName => $fieldValue) {
            if (strpos($fieldName, 'appointment_date') !== false || strpos($fieldName, 'guest_dob') !== false || strpos($fieldName, 'dob') !== false) {
                $storedFieldValue[$fieldName] = !empty($fieldValue) ? date('Y-m-d', strtotime($fieldValue)) : '';
            } else {
                $storedFieldValue[$fieldName] = $fieldValue;
            }
        }
        if (config('site.subscription_premium_doctor')) {
            $subscriptions = Subscription::select('id')->where('price', '>', '0.00')->get();
            $user_profiles = UserProfile::where('id', $storedValue['doctor_user_id'])
                                 ->whereHas('user', function ($q) use ($subscriptions){
                                    $q->whereIn('subscription_id', $subscriptions)
                                        ->where('subscription_end', '>=', date('Y-m-d'));
                                })->count();
           if ($user_profiles == 0) {
               return response()->json(['Failed' => 'Allow only the premium doctors. Kindly choose anyother doctor']);
           }                                
        } 
        if (!empty($storedValue['insurance_id'])) {
            $insurancePatient = InsurancePatient::where('insurance_id', $storedValue['insurance_id'])->where('doctor_id', $storedValue['doctor_user_id'])->first();
            if ($insurancePatient) {
                $insurancePatientCount = Appointment::where(['appointment_date'=> DATE($storedFieldValue['appointment_date']), 'doctor_user_id'=> $storedValue['doctor_user_id'], 'insurance_id'=> $storedValue['insurance_id']])->whereNotIn('appointment_status_id',[config('constants.ConstAppointmentStatus.Cancelled'),config('constants.ConstAppointmentStatus.Rejected')])->count();
                if ($insurancePatient->allowed_patients <= $insurancePatientCount) {
                    return response()->json(['Failed' => 'Insurance : Appointment Slot is Already Booked']);
                }
            } else {
                return response()->json(['Failed' => 'Insurance Not Found : Appointment Slot is Already Booked']);
            }
        }
        $isAlreadyBooked = Appointment::where(['appointment_date'=> DATE($storedFieldValue['appointment_date']),'appointment_time'=>$storedFieldValue['appointment_time'], 'doctor_user_id'=> $storedValue['doctor_user_id']])->whereNotIn('appointment_status_id',[config('constants.ConstAppointmentStatus.Cancelled'),config('constants.ConstAppointmentStatus.Rejected')])->get();
        if (empty($isAlreadyBooked->toArray())) {
            //To check the doctor is already seen or not from appointment table
            /*$isSeenBefore = Appointment::where(['appointment_status_id'=> config('constants.ConstAppointmentStatus.Present'), 'doctor_user_id'=> $storedValue['doctor_user_id']])->get();
            $storedFieldValue['is_seen_before'] = 0;
            if (!empty($isSeenBefore)) {
                $storedFieldValue['is_seen_before'] = 1;
            }*/
            $created = Appointment::create($storedFieldValue);
            if ($created) {
                $activity_data['user_id'] = $user->id;
                $activity_data['other_user_id'] = $storedValue['doctor_user_id'];
                $activity_data['foreign_id'] = $created->id;
                $activity_data['class'] = 'Appointment'; 
                $activity_data['activity_type'] = config('constants.ConstActivityType.NewEntryPosted');
                Activity::saveActivity($activity_data);
                $doctorProfile = UserProfile::with('user','City','Country')->select(['user_id', 'first_name', 'last_name', 'dr_title', 'phone', 'gender_id', 'address', 'specialty_id','city_id','country_id','postal_code'])->where('user_id', '=', $storedValue['doctor_user_id'])->first();
                $patientProfile = UserProfile::with('user')->select(['user_id', 'first_name', 'last_name', 'phone', 'address'])->where('user_id', '=', $user->id)->first();
	            $workplaceDetail = array();
                if ($storedValue['work_place_id']) {
                    $workplaceDetail = Workplace::with('city', 'country', 'state')->select(['location', 'state_id','city_id','country_id'])->where('id', $storedValue['work_place_id'])->first();
                }
                 $this->AppointmentService->sendAppointmentRequestDoctorMail($doctorProfile, $patientProfile,$storedFieldValue, $workplaceDetail);
                /*$this->AppointmentService->sendAppointmentRequestDoctorMail($doctorProfile, $patientProfile,$storedFieldValue['appointment_date'],$storedFieldValue['appointment_time']);*/
                return response()->json(['Success' => 'Appointment Added Successfully'], 200);
            } else {
                return response()->json(['Failed' => 'Appointment Added Failed']);
            }
        } else {
            return response()->json(['Failed' => 'Appointment Slot is Already Booked']);
        }

    }
    public function calenderview($month = null, $year = null, $workplaceid = null) {
        if ($workplaceid != null) {
            $user = $this->auth->user();
            if ($month == null) {
                $betweenDates = [
                    date('Y-m-').'1',
                    date('Y-m-d', strtotime('+1 month'))
                ];
            } else {
                if ($month == null) {
                    $month = date('m');
                }
                if ($year == null) {
                    $year = date('Y');
                }
                $date = date('Y-m-d',strtotime($year.'-'.$month.'-01'));
                $betweenDates = [
                    $date,
                    date('Y-m-d',strtotime('+1 month',strtotime($date)))
                ];
            }
            if ($user->role_id == config('constants.ConstUserTypes.User')) {
                $condition['user_id'] = $user->id;
            } else if ($user->role_id == config('constants.ConstUserTypes.Doctor')) {
                $condition['doctor_user_id'] = $user->id;
                /* Get Modified Appointment Schedule which is only leave */
                $appointmentsleaveEvent = AppointmentModifications::whereBetween('appoint_date', $betweenDates)->where(['user_id' => $user->id,'type'=>1])->select(['id','appoint_date']);
                if ($workplaceid != null) {
                    $conditions = ['work_place_id' => $workplaceid];
                    $appointmentsleaveEvent = $appointmentsleaveEvent->where($conditions);
                    $condition['work_place_id'] = $workplaceid;
                }
                $appointments['leaveEvent'] = $appointmentsleaveEvent->get()->toArray();
            }
            $appointments['appointmentEvent'] = Appointment::whereBetween('appointment_date',$betweenDates)->where($condition)->select(['appointments.appointment_time','appointments.first_name','appointments.last_name','appointments.id','appointments.appointment_date'])->get()->toArray();
            /* for calender purpose in api*/
            $appointments['prevMonth'] = date('M',strtotime('-1 month',strtotime($betweenDates[0])));
            $appointments['nextMonth'] = date('M',strtotime($betweenDates[1]));
            $appointments['prevYear'] = date('Y',strtotime('-1 year',strtotime($betweenDates[0])));
            $appointments['nextYear'] = date('Y',strtotime('1 year',strtotime($betweenDates[0])));
            $appointments['serverTimeZone'] = $this->get_server_time_zone();
            return response()->json($appointments);
        } else {
            return response()->json(['Failed' => 'Workplace Missing']);
        }
    }
    public function calenderViewDoctor(Request $request) {
        $user = $this->auth->user();
        $requestedDate = date('Y-m-d', strtotime($request['appointment_date']));
        $appointments = Appointment::with('workplace', 'User', 'family_friend')->where(['appointment_date'=> $requestedDate, 'doctor_user_id' => $user->id])->where('appointment_status_id' , '!=' , 4)->orderBy('work_place_id')->get();
        if (!empty($appointments)) {
            return response()->json(['status' => 'success','data'=> $appointments]);
        } else {
            return response()->json(['status' => 'failure','message'=> 'No Appointment on '.date('d-m-Y', $requestedDate)]);
        }
    }
	/*
	-Cancel All appointments datewise.
	-Date as params
	*/
	public function cancelTodayAppointment(Request $request) {
        $user = $this->auth->user();
        $requestedDate = date('Y-m-d', strtotime($request['appointment_date']));
        $appointments = Appointment::where(['appointment_date'=> $requestedDate, 'doctor_user_id' => $user->id])->where('appointment_status_id' , '!=' , 4)->get()->toArray();
		if (!empty($appointments[0])) {
			$updateValue['appointment_status_id'] = config('constants.ConstAppointmentStatus.Cancelled');
			$msg = "Appointment Cancelled Successfully";
			$update = Appointment::where(['appointment_date'=> $requestedDate, 'doctor_user_id' => $user->id])->update($updateValue);
			if ($update) {
				foreach ($appointments as $appointment) {
					$this->AppointmentService->appointmentStatusMail($appointment['id'], $updateValue['appointment_status_id']);
				}
				return response()->json(['Success' => $msg], 200);
			} else {
				return response()->json(['Failed' => 'Appointment Status could not be updated. Please, try again.']);
			}
		} else {
            return response()->json(['status' => 'failure','message'=> 'No Appointment on '.date('d-m-Y', $requestedDate)]);
        }
    }
	/*
	-Patient note function.
	-appointment as params
	*/
	public function patientNote(Request $request) {
        $user = $this->auth->user();
        $appointments = Appointment::where(['id'=> $request['appointment_id'], 'doctor_user_id' => $user->id])->get();
		if (!empty($appointments)) {
			$updateValue['doctor_note'] = $request['doctor_note'];
			$msg = "Appointment note updated successfully";
			$update = Appointment::where(['id'=> $request['appointment_id'], 'doctor_user_id' => $user->id])->update($updateValue);
			if ($update) {
				return response()->json(['Success' => $msg], 200);
			} else {
				return response()->json(['Failed' => 'Appointment note could not be updated. Please, try again.']);
			}
		} else {
            return response()->json(['status' => 'failure','message'=> 'No Appointment on '.date('d-m-Y', $requestedDate)]);
        }
    }
    public  function userisbook($doctorid, $userid) {
        $appointmentDetail = Appointment::where(['doctor_user_id'=>$doctorid,'appointment_status_id'=>$userid,'appointment_status_id'=>config('constants.ConstAppointmentStatus.Closed')])->first();
        if ($appointmentDetail) {
            return response()->json(['data'=>['is_visited'=>true]]);
        } else {
            return response()->json(['data'=>['is_visited'=>false]]);
        }
    }
    public function changeStatus($appointmentId, $appointmentStatus) {
        if ($appointmentStatus == 'confirm') {
            $updateValue['appointment_status_id'] = config('constants.ConstAppointmentStatus.Approved');
            $msg = "Appointment Confirmed Successfully";
        }else if ($appointmentStatus == 'decline') {
            $updateValue['appointment_status_id'] = config('constants.ConstAppointmentStatus.Rejected');
            $msg = "Appointment Decline Successfully";
        }else if ($appointmentStatus == 'cancel') {
            $updateValue['appointment_status_id'] = config('constants.ConstAppointmentStatus.Cancelled');
            $msg = "Appointment Cancelled Successfully";
        }else if ($appointmentStatus == 'close') {
            $updateValue['appointment_status_id'] = config('constants.ConstAppointmentStatus.Closed');
            $msg = "Appointment Closed Successfully";
        }
        $appointment = Appointment::select('id', 'appointment_status_id', 'doctor_user_id', 'user_id')->where('id','=',$appointmentId)->first(); 
        $update = Appointment::where('id','=',$appointmentId)->update($updateValue);
        if ($update) {
            if ($appointment->appointment_status_id != $updateValue['appointment_status_id']) {
                $user = $this->auth->user();
                if ($user->id == $appointment->user_id) {
                    $activity_data['user_id'] = $appointment->doctor_user_id;
                    $activity_data['other_user_id'] = $user->id;
                } else {
                    $activity_data['user_id'] = $user->id;
                    $activity_data['other_user_id'] = $appointment->doctor_user_id;
                }            
                $activity_data['from_status_id'] = $appointment->appointment_status_id;
                $activity_data['to_status_id'] = $updateValue['appointment_status_id'];
                $activity_data['foreign_id'] = $appointmentId;
                $activity_data['class'] = 'Appointment'; 
                $activity_data['activity_type'] = config('constants.ConstActivityType.StatusChanged');
                Activity::saveActivity($activity_data);
            }
            $this->AppointmentService->appointmentStatusMail($appointmentId, $updateValue['appointment_status_id']);
            return response()->json(['Success' => $msg], 200);
        } else {
            return response()->json(['Failed' => 'Appointment Status could not be updated. Please, try again.']);
        }
    }
    public function get_server_time_zone() {
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

    /* For Cron Testing Process */
    public function chagneexpiry() {
        $this->AppointmentService->changeappointmentexpiry();
    }
    /* For Cron Testing Process */
    public function sendalert() {
        $this->AppointmentService->changeappointmentexpiry();
    }

    /**
     * Show the specified appointment details.
     * Show the page with a `id`.     *
     * @Get("/appointments/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "language_id": 42, "title": "Term and conditions", "slug": "term-and-conditions", "page_content": "XXX", "is_active": 0, "Language": {"id": 42, "name": "English", "iso2": "en", "iso3": "eng", "is_active": 1}}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function workplaceBooking($doctorid, $apt_date, $apt_time, $workplaceid) {
        $fractal = new Manager();
        /* For get the Doctor Profile Details Here */
        $doctorProfile = UserProfile::where('user_id', '=', $doctorid)->first();
        $doctorProfileWithIncludes = new \League\Fractal\Resource\Item($doctorProfile, (new UserProfileTransformer)->setDefaultIncludes(['User','city', 'country', 'gender']));
        $doctorDetailValue = $fractal->createData($doctorProfileWithIncludes)->toArray();
        /* For get the Doctor Specialty Diseas */
        $doctorSpecialtieDiseas = SpecialtyDiseas::select(['id', 'name', 'slug'])->whereIn('id', explode(',', $doctorProfile['specialty_id']))->get()->toArray();
        /* Here for Star Rating */
        $doctorDetailValue['data']['start_rating'] = User::scopeStarRating($doctorid);
        /* Here for Workplace Detail */
        $workplace = Workplace::find($workplaceid);
        if ($workplace) {
            $workplaceWithIncludes = new \League\Fractal\Resource\Item($workplace, new WorkplaceTransformer);
            $doctorDetailValue['data']['work_place'] = $fractal->createData($workplaceWithIncludes)->toArray();
        } else {
            $doctorDetailValue['data']['work_place'] = array();
        }
        return response()->json(['doctor_profile' => $doctorDetailValue, 'doctor_specialty_diseas' => $doctorSpecialtieDiseas]);
    }
    /**
     * Export appointments
     *
     * Get a JSON representation of all the user views.
     *
     * @Get("/appointments/{type}/{formet}")
     */
    public function export(Request $request, $type = null, $formet = null) {
        $acceptFields = $request->only('token');
        JWTAuth::setToken($acceptFields['token']);
        $user = JWTAuth::parseToken()->authenticate();

        if ($user->role_id == config('constants.ConstUserTypes.User')) {
            $condition = ['user_id' => $user->id];
        } else if ($user->role_id == config('constants.ConstUserTypes.Doctor')) {
            $condition = ['doctor_user_id' => $user->id];
        }
        if ($type == 'all' || $type == null) {
            $appointments = Appointment::with('user', 'doctor_user')->where($condition)->orderBy('created_at', 'desc')->paginate(20);
        } else if ($type == 'today') {
            $date_condition = ['appointment_date' => date('Y-m-d')];
            $condition = array_merge($condition, $date_condition);
            $appointments = Appointment::with('user', 'doctor_user')->where($condition)->orderBy('created_at', 'desc')->paginate(20);
        } else if ($type == 'week') {
            $today = Carbon::now();
            $startDate = Carbon::parse(Carbon::parse($today)->subDays($today->dayOfWeek))->format('Y-m-d');            
            $endDate = Carbon::parse(Carbon::parse($startDate)->addDays(7))->format('Y-m-d');    
            $appointments = Appointment::with('user', 'doctor_user')->whereBetween('appointment_date', [
                       $startDate,
                        $endDate 
                    ])
                    ->where('doctor_user_id', $user->id)
                    ->orderBy('created_at', 'desc')
                    ->paginate(20);
        } else if ($type == 'month') {
            $startDate = date('Y-m-01');
            $endDate = Carbon::parse(Carbon::parse($startDate)->addMonth(1))->format('Y-m-d');
            $appointments = Appointment::with('user', 'doctor_user')->whereBetween('appointment_date', [
                        $startDate,
                        $endDate
                    ])
                    ->where($condition)
                    ->orderBy('created_at', 'desc')
                    ->paginate(20);
        } else if ($type == 'pending-approval') {
            $appointments = Appointment::with('user', 'doctor_user')->where(['appointment_status_id' => config('constants.ConstAppointmentStatus.PendingApproval'),'user_id'=>$user->id])->orderBy('created_at', 'desc')->paginate(20);
        } else if ($type == 'approved') {
            $appointments = Appointment::with('user', 'doctor_user')->where(['appointment_status_id' => config('constants.ConstAppointmentStatus.Approved'),'user_id'=>$user->id])->orderBy('created_at', 'desc')->paginate(20);
        } else if ($type == 'cancelled') {
            $appointments = Appointment::with('user', 'doctor_user')->where(['appointment_status_id' => config('constants.ConstAppointmentStatus.Cancelled'),'user_id'=>$user->id])->orderBy('created_at', 'desc')->paginate(20);
        } else if ($type == 'rejected') {
            $appointments = Appointment::with('user', 'doctor_user')->where(['appointment_status_id' => config('constants.ConstAppointmentStatus.Rejected'),'user_id'=>$user->id])->orderBy('created_at', 'desc')->paginate(20);
        }
        if ($formet == 'excel') {
            $fractal = new Manager();
            $appointments = new \League\Fractal\Resource\Collection($appointments, new AppointmentExportTransformer);
            $appointmentsArray = $fractal->createData($appointments)->toArray();
            Excel::create('appointments', function($excel) use ($appointmentsArray) {
                $excel->sheet('sheet1', function($sheet) use ($appointmentsArray) {
                    $sheet->fromArray($appointmentsArray['data'], null, 'A1', false, true);
                });
            })->download('xlsx');
        } else if ($formet == 'pdf') {
            $fractal = new Manager();
            $appointments = new \League\Fractal\Resource\Collection($appointments, new AppointmentExportTransformer);
            $appointmentsArray = $fractal->createData($appointments)->toArray();
            if (!collect($appointmentsArray['data'])->isEmpty()) {
                $collection = collect($appointmentsArray['data'][0]);
                $keys = $collection->keys();
                $appointmentKey = $keys->all();
                $html = view('pdf.appointments', ['appointments' => $appointmentsArray['data'], 'appointmentKeys' => $appointmentKey]);
                PDF::load($html, 'A4', 'portrait')->download('appointments');
            } else {
                return response()->json(['Failed' => 'No Appointment']);
            }
        }
    }

}