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
 * @since      2016-06-28
 */

namespace Plugins\QuestionAnswer\Controllers;


use App\UserProfile;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\QuestionAnswer\Model\Question;
use Plugins\QuestionAnswer\Model\Answer;
use Plugins\QuestionAnswer\Transformers\QuestionTransformer;
use Plugins\QuestionAnswer\Transformers\AnswerTransformer;
use League\Fractal\Manager;
use Validator;

class QuestionsController extends Controller {
    
    public function __construct(){
        /*$this->middleware('jwt.auth');*/
        $this->middleware('jwt.auth', ['only' => ['add','modify','destroy', 'generateIcalUrl']]);
    }
    
    public function index() {
        $user = $this->auth->user(); 
        $questions = Question::where('user_id', '=', $user->id)->orderBy('id','desc')->paginate(20);
        return $this->response->paginator($questions, (new QuestionTransformer)->setDefaultIncludes(['specialty', 'answer']));
    }
    
    public function show_question_with_answer($doctor_id) {
        $questions = Question::where('doctor_id', '=', $doctor_id)->where('is_active', '=', 1)->orderBy('id','desc')->paginate(20);
        return $this->response->paginator($questions, (new QuestionTransformer)->setDefaultIncludes(['specialty', 'answer']));
    }
	
	public function show_question_answer_user($user_id) {
        $questions = Question::where('user_id', '=', $user_id)->where('is_active', '=', 1)->orderBy('id','desc')->paginate(20);
        return $this->response->paginator($questions, (new QuestionTransformer)->setDefaultIncludes(['specialty', 'answer']));
    }

    public function show($questionId) {
        $question = Question::where('id', '=', $questionId)->first();
        return $this->response->item($question, (new QuestionTransformer));
    }

    public function show_with_answer($slug){
        $question = Question::where('slug', '=', $slug)->first();
        $answers = Answer::where('question_id','=',$question->id)->paginate(20);
        return $this->response->paginator($answers, (new AnswerTransformer)/*->setDefaultIncludes(['question'])*/);
    }

    public function show_question($slug){
        $question = Question::where('slug', '=', $slug)->first();
        return $this->response->item($question, (new QuestionTransformer));
    }
    public function add(Request $request){
        $requestData = $request->only('question', 'specialty_id', 'is_active', 'doctor_id');
        $user = $this->auth->user();
        $requestData['user_id'] = $user->id;
        $validator = Validator::make($requestData, Question::GetValidationRule());
        if($validator->passes()){
            $requestData['slug'] = str_slug($request->question, '-');
            $result = Question::create($requestData);
            if ($result) {
                return response()->json(['Success' => 'Question has been added'], 200);
            }else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Question could not be updated. Please, try again.');
            }
        }else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Question could not be updated. Please, try again.', $validator->errors());
        }
    }
    public function update(Request $request, $id){
        $responseData = $request->only('question', 'specialty_id', 'is_active', 'doctor_id');
        $user = $this->auth->user();
        $responseData['user_id'] = $user->id;
        $validator = Validator::make($responseData, Question::GetValidationRule());
        $question = false;
        if ($request->has('id')) {
            $question = Question::find($id);
            $question = ($request->id != $id)? false : $question;
        }
        if($validator->passes() && $question){
            try {
                $responseData['slug'] = str_slug($request['question'], '-');
                $question->update($responseData);
                return response()->json(['Success' => 'Question has been updated'], 200);
            }
            catch (\Exception $e) {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Question could not be updated. Please, try again.');
            }
        }else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Question could not be updated. Please, try again.', $validator->errors());
        }
    }
    /**
     * Delete User Ical
     *
     * Delete User Ical with a `id`.
     *
     * @Delete("/ical?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id){
        if(!empty($id)){
            $user = $this->auth->user();
            /* Check the deleted value is added by auth user */
            $isAddedAuthUser = Ical::find($id);
            if($isAddedAuthUser){
                if($isAddedAuthUser['user_id'] == $user->id){
                    $isAddedAuthUser->delete();
                    return response()->json(['Success' => 'Ical Removed Successfully'], 200);
                }else{
                    return $this->response->errorNotFound("Invalid Request");
                }
            }else{
                return response()->json(['Failed' => 'Trying Invalid Id']);
            }
        }
    }

    public function makeIcal($userId, $hashKey){
        /*echo md5('2280@'.config('constants.Security.salt')); die;*/
        //echo config('constants.ConstAppointmentStatus.Cancelled'); die;
        $hashCheck = md5($userId.'@'.config('constants.Security.salt'));
        $hashKey = strstr($hashKey, '.', true);
        if($hashCheck == $hashKey){
            $header = 'BEGIN:VCALENDAR' . "\r\n";
            $header.= 'VERSION:2.0' . "\r\n";
            $header.= 'PRODID:-//' . config('site.name') . '//EN' . "\r\n";
            $header.= 'X-PUBLISHED-TTL:PT1H' . "\r\n";
            $header.= 'X-ORIGINAL-URL:http://' . $_SERVER['HTTP_HOST'] . "\r\n";
            $header.= 'CALSCALE:GREGORIAN' . "\r\n";
            $header.= 'METHOD:PUBLISH' . "\r\n";
            /* For getting the user appointment here */
            $timeSlot = AppointmentSettings::select(['id','user_id', 'calendar_slot_id'])->where('user_id','=', $userId)->first();
            $userProfile = UserProfile::select(['id','user_id','first_name', 'last_name'])->where('user_id', '=', $userId)->first();
            $appointments = Appointment::where('appointment_date','>=',date('Y-m-d'))
                            //->where('appointment_time','>=', date('H:i'))
                            ->where('doctor_user_id','=',$userId)
                            ->where('appointment_status_id','!=',config('constants.ConstAppointmentStatus.Cancelled'))
                            ->get()->toArray();
            if (!empty($appointments)) {
                $booking = '';
                foreach($appointments as $appointment){
                    $endDateTime = strtotime($appointment['appointment_date'].' '.$appointment['appointment_time'].':00' .'+ '.$timeSlot['calendar_slot_id'].' minutes');
                    $endTime = date('Ymd\THis\Z', $endDateTime) . "\r\n";
                    $icalname = $userProfile['first_name'].'_Booking';
                    $booking.= 'BEGIN:VEVENT' . "\r\n";
                    $booking.= 'UID:' . $appointment['id'] . "\r\n";
                    $booking.= 'DTSTART:' . date('Ymd\THis\Z', strtotime($appointment['appointment_date'].' '.$appointment['appointment_time'])) . "\r\n";
                    $booking.= 'DTEND:' . $endTime . "\r\n";
                    $booking.= 'SUMMARY:' . 'Appointment Booking' . "\r\n";
                    //$booking.= 'URL:http://' . $_SERVER['HTTP_HOST'] . '/client/#/board/' . $_GET['id'] . "\r\n";
                    $booking.= 'END:VEVENT' . "\r\n";
                }
                $header.= 'X-WR-CALNAME:' . $icalname . ' (via ' . config('site.name') . ')' . "\r\n";
                $header.= $booking;
            }
            $header.= 'END:VCALENDAR';
            header('Content-type: text/calendar; charset=utf-8');
            header('Content-Disposition: inline; filename=calendar.ics');
            echo $header;
        }else{
            echo 'false';
        }
    }

    public function generateIcalUrl(){
        $user = $this->auth->user();
        $link = Request::HEADER_CLIENT_HOST.'/api/ical/generate/'.$user->id.'/'.md5($user->id.'@'.config('constants.Security.salt')).'.ics';
        return response()->json(['link'=>$link]);
    }

    public function icalread(){
        /* for check the cron flag */
        $flag = CronFlag::where('cron_name','=','ical')->first();
        if($flag['status'] == 1) {
            exit;
        }
        /* for cron flag status update cron is running */
        CronFlag::where('cron_name','=','ical')->update(['status'=>1]);
        $icalsList = Ical::where(['is_active'=>true])->get();
        if(!empty($icalsList)){
            foreach($icalsList as $ical){
                $readerObject = new ICalReader($ical['link']);
                /*$readerObject = new ICalReader('http://localhost/abs/abs/public/api/ical/download/2280/e9bae9523cc052d8c3b423c884192542.ics');*/
                $bookings = $readerObject->events();
                if(!empty($bookings)){
                    foreach($bookings as $booking){
                        /* Here for insert the appointment in table */
                        $storedValue = [
                            'doctor_user_id' => $ical['user_id'],
                            'appointment_date'=> date('Y-m-d',$readerObject->iCalDateToUnixTimestamp($booking['DTSTART'])),
                            'appointment_time'=>date('H:i',$readerObject->iCalDateToUnixTimestamp($booking['DTSTART'])),
                            'ical_link_id' => $ical['id'],
                            'is_ical_booking'=> true
                        ];
                        /* here for check is already added */
                        $condition = [
                            'doctor_user_id'=>$ical['user_id'],
                            'appointment_date'=> date('Y-m-d',$readerObject->iCalDateToUnixTimestamp($booking['DTSTART'])),
                            'appointment_time'=>date('H:i',$readerObject->iCalDateToUnixTimestamp($booking['DTSTART'])),
                            //'created_at' => date('Y-m-d H:i:00')
                        ];
                        $isAlreadyAdded = Appointment::where($condition)->get()->toArray();
                        if(empty($isAlreadyAdded)){
                            Appointment::create($storedValue);
                        }
                    }
                }
            }
        }
        /* Here for update the cron flag */
        CronFlag::where('cron_name','=','ical')->update(['status'=>0]);
    }
}
