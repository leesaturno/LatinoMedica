<?php

namespace App\Http\Controllers;

use Faker\Provider\DateTime;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\AppointmentModifications;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use App\Transformers\AppointmentModificationsTransformer;
/**
 * Appointments resource representation.
 *
 * @Resource("Appointments")
 */
class AppointmentModificationsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
       
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
        $appointmentModifications = AppointmentModifications::where(['user_id'=>$user->id])->paginate(20);
        return $this->response->paginator($appointmentModifications, (new AppointmentModificationsTransformer));
    }
    public function update(Request $request, $modifiedId){
        //date_default_timezone_set("Asia/Kolkata");
        /*
        $acceptFields = $request->only('user_id', 'appoint_date', 'is_two_session', 'practice_open', 'lunch_at', 'resume_at', 'practice_close', 'type', 'is_active');
        foreach($acceptFields as $fieldName => $fieldValue){
            if(strpos($fieldName, 'practice_open') !== false || strpos($fieldName, 'lunch_at') !== false || strpos($fieldName, 'resume_at') !== false || strpos($fieldName, 'practice_close') !== false) { 
                $storedValue[$fieldName]= !empty($fieldValue)?date('H:i',strtotime($fieldValue)):'';
            }else if(strpos($fieldName, 'appoint_date') !== false){
                $storedValue[$fieldName]= !empty($fieldValue)?date('y-m-d',strtotime($fieldValue)):'';
            }else{
                $storedValue[$fieldName]= $fieldValue;
            }
        }
        $user = $this->auth->user();
        $condition = ['user_id'=>$user->id,'id'=>$modifiedId];
        $updateValue = AppointmentModifications::where($condition)->update($storedValue);
        if($updateValue){
            return response()->json(['Success' => 'Setting date has been updated'], 200);
        }else{
            return response()->json(['failed' => 'Setting date has not been updated']);
        }
        */
        $acceptFields = $request->only('appt_time', 'type', 'is_active', 'work_place_id');
        /* For get the Auth */
        $user = $this->auth->user();
        if(!empty($acceptFields['appt_time'])){
            $acceptFields['practice_open'] = implode(',',$acceptFields['appt_time']);
            $acceptFields['type'] = !empty($acceptFields['type'])?$acceptFields['type']:0;
        }
        unset($acceptFields['appt_time']);
        if($acceptFields['type'] == 1){
            $acceptFields['practice_open'] = '';
        } 
        $condition = ['user_id'=>$user->id,'id'=>$modifiedId];
        $update = AppointmentModifications::where($condition)->update($acceptFields);
        if($update){
            return response()->json(['Success' => 'Setting Date Updated Successfully'], 200);
        }else{
            return response()->json(['Failed' => 'Setting Date has not been Updated']);
        }
    }
    public function add(Request $request){
        $acceptFields = $request->only('appoint_date', 'appt_time', 'type', 'is_active', 'work_place_id');
        /* For get the Auth */
        $user = $this->auth->user();
        $acceptFields['appoint_date']= !empty($acceptFields['appoint_date'])?date('Y-m-d',strtotime($acceptFields['appoint_date'])):'';
        $acceptFields['practice_open'] = !empty($acceptFields['appt_time'])?implode(',',$acceptFields['appt_time']):'';
        $acceptFields['type'] = !empty($acceptFields['type'])?$acceptFields['type']:0;
        unset($acceptFields['appt_time']);
        if($acceptFields['type'] == 1){
            $acceptFields['practice_open'] = '';
        }
        $acceptFields['user_id'] = $user->id;
        if(!empty($acceptFields['appoint_date'])){
            /* For check already the date is added */
            $isDateAlreadyAdded = AppointmentModifications::where(['user_id'=>$user->id,'appoint_date'=>$acceptFields['appoint_date'], 'work_place_id'=>$acceptFields['work_place_id']])->first();
            if(empty($isDateAlreadyAdded)){
                $created = AppointmentModifications::create($acceptFields);
                if($created){
                    return response()->json(['Success' => 'Setting Date Added Successfully'], 200);
                }else{
                    return response()->json(['Failed' => 'Setting Date has not been Added']);
                }
            }else{
               return response()->json(['Failed' => 'Setting Date Already Added']); 
            }
        }else{
            return response()->json(['Failed' => 'Appointment Date Required']); 
        }
    }
    public function show($id){
        $user = $this->auth->user();
        $appointmentModificationsFields = AppointmentModifications::where(['user_id'=>$user->id,'id'=>$id])->first()->toArray();
        $appointmentModifications = '';
        if($appointmentModificationsFields){
            /* foreach ($appointmentModificationsFields as $fieldName => $fieldValue) {
                if (strpos($fieldName, 'practice_open') !== false || strpos($fieldName, 'lunch_at') !== false || strpos($fieldName, 'resume_at') !== false || strpos($fieldName, 'practice_close') !== false) {
                    if ($fieldValue != '00:00:00') {
                        $appointmentModifications[$fieldName] = date("Y-m-d\TH:i:sO",strtotime($fieldValue));
                    } else {
                        //$appointmentResponse[$fieldName] = '00:00:00';
                    }
                } else {
                    $appointmentModifications[$fieldName] = $fieldValue;
                }
            } */
            return response()->json($appointmentModificationsFields);
            //return $this->response->item($appointmentModifications, (new AppointmentModificationsTransformer));
        }else{
            return $this->response->errorNotFound("Invalid Request");
        }
    }
    public function show_work_place($id){
        if (!$id) {
            return $this->response->errorNotFound("Invalid Request");
        }
        $user = $this->auth->user();
        $appointmentModifications = AppointmentModifications::where(['user_id'=>$user->id,'work_place_id'=>$id])->paginate(20);
        return $this->response->paginator($appointmentModifications, (new AppointmentModificationsTransformer));
    }
    public function destroy($id) {
        $row = AppointmentModifications::find($id);
        if (!$row) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $row->delete();
        }
        return response()->json(['Success' => 'Setting Date deleted Successfully'], 200);
    }
}
