<?php

namespace App\Services;

use App\Services\MailService;
use App\Appointment;
use App\User;
use App\UserProfile;
use Carbon;
use App\CronFlag;

class AppointmentService extends MailService {

    /**
     * To send email based on the settings
     * @param $user
     * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function appointmentStatusMail($appointmentId, $status){
        $appoinmentDetails = Appointment::where(['id'=> $appointmentId])->first();
        $patientDetails = UserProfile::where('user_id','=',$appoinmentDetails['user_id'])->with(['user'])->first();
        $doctorDetails = UserProfile::where('user_id','=',$appoinmentDetails['doctor_user_id'])->with(['user'])->first();
        $replaceFields = [
            'username' =>$patientDetails['first_name'].' '.$patientDetails['last_name'],
            'doctorusername' => $doctorDetails['dr_title'].' '.$doctorDetails['first_name'].' '.$doctorDetails['last_name'],
            'appointment' => $appoinmentDetails['appointment_date']. ' at '.$appoinmentDetails['appointment_time'],
            'address' => $patientDetails['address'] . ',' . $patientDetails['city']['name'] . ',' . $patientDetails['country']['name'] . ' ' . $patientDetails['postal_code']
        ];
        if($status == config('constants.ConstAppointmentStatus.Approved')){
            /* For Patient Details */
            $replaceFields['url'] = '#/appointments/all';
            $replaceFields['email'] = $patientDetails['user']['email'];
            $this->sendStatusMail($replaceFields,'Appointment Approved Alert To Patient');
            $doctorMessage = "Your Appointment with ".$replaceFields['username']. '-'. $replaceFields['appointment'].' is Approved';
            $patientMessage = $replaceFields['doctorusername'].' is Approved your Appointment - '.$replaceFields['appointment'];
            
            /* For Sending Push Notification Doctor*/
            if(!empty($doctorDetails['user']['device_token'])){
                $this->sendPushMessage($doctorDetails['user']['device_type'], $doctorDetails['user']['device_token'], $doctorMessage);
            }

            /* For Sending Push Notification Patient*/
            if(!empty($patientDetails['user']['device_token'])){
                $this->sendPushMessage($patientDetails['user']['device_type'], $patientDetails['user']['device_token'], $patientMessage);
            }
        }elseif($status == config('constants.ConstAppointmentStatus.Rejected')){
            /* For Patient Details */
            $replaceFields['url'] = '#/appointments/all';
            $replaceFields['email'] = $patientDetails['user']['email'];
            $replaceFields['address'] = $doctorDetails['address'];
            $replaceFields['DOCTOR_PROFILE_URL'] = url('/#/doctor/').$doctorDetails['user']['username'];
            /*Send Rejected Mail to Patient */
            $this->sendStatusMail($replaceFields,'Appointment Rejected Alert To Patient');
            /*Send Rejected Mail to Doctor */
            /*Change Doctor Mail Id*/
            $replaceFields['email'] = $doctorDetails['user']['email'];
            $this->sendStatusMail($replaceFields,'Appointment Rejected Alert To Doctor');
            if(!empty($patientDetails['phone'])) {
                $userSmsDetail = [
                    'username' => $patientDetails['first_name'] . ' ' . $patientDetails['last_name'],
                    'mobile' => $patientDetails['phone']
                ];
            }
            
            $doctorMessage = "Your Appointment with ".$replaceFields['username']. '-'. $replaceFields['appointment'].' is Rejected';
            $patientMessage = $replaceFields['doctorusername'].' is Rejected your Appointment - '.$replaceFields['appointment'];
            
            /* For Sending Push Notification Doctor*/
            if(!empty($doctorDetails['user']['device_token'])){
                $this->sendPushMessage($doctorDetails['user']['device_type'], $doctorDetails['user']['device_token'], $doctorMessage);
            }

            /* For Sending Push Notification Patient*/
            if(!empty($patientDetails['user']['device_token'])){
                $this->sendPushMessage($patientDetails['user']['device_type'], $patientDetails['user']['device_token'], $patientMessage);
            }
        }elseif($status == config('constants.ConstAppointmentStatus.Cancelled')){
            /* For Doctor Details */
            $replaceFields['url'] = '#/appointments/all';
            $replaceFields['email'] = $patientDetails['user']['email'];
            $replaceFields['address'] = $doctorDetails['address'];
            /*Cancel Mail To Patient*/
            $this->sendStatusMail($replaceFields,'Appointment Canceled Alert To Patient');
            /*Cancel Mail To Doctor*/
            $replaceFields['email'] = $doctorDetails['user']['email'];			
            $this->sendStatusMail($replaceFields,'Appointment Canceled Alert To Doctor');
            if(!empty($doctorDetails['phone'])) {
                $userSmsDetail = [
                    'username' => $doctorDetails['dr_title'] . ' ' . $doctorDetails['first_name'] . ' ' . $doctorDetails['last_name'],
                    'mobile' => $doctorDetails['phone']
                ];
            }
            $doctorMessage = $replaceFields['username'].' is Cancelled your Appointment - '.$replaceFields['appointment'];
            $patientMessage = "Your Appointment with ".$replaceFields['doctorusername']. '-'. $replaceFields['appointment'].' is Cancelled';
            /* For Sending Push Notification Doctor*/
            if(!empty($doctorDetails['user']['device_token'])){
                $this->sendPushMessage($doctorDetails['user']['device_type'], $doctorDetails['user']['device_token'], $doctorMessage);
            }

            /* For Sending Push Notification Patient*/
            if(!empty($patientDetails['user']['device_token'])){
                $this->sendPushMessage($patientDetails['user']['device_type'], $patientDetails['user']['device_token'], $patientMessage);
            }
        }
    }

    /**
     * Send mail to doctor reg patient appointment request
     * @param $user
     */
    public function sendAppointmentRequestDoctorMail($doctor, $patient, $appointment, $workplace = '') {
        if (!empty($workplace)) {
            $ADDRESS = $workplace['location'] . ',' . $workplace['city']['name'] . ',' . $workplace['country']['name'] . ' ' . $workplace['state']['name'];
        } else {
            $ADDRESS = $doctor['address'] . ',' . $doctor['city']['name'] . ',' . $doctor['country']['name'] . ' ' . $doctor['postal_code'];
        }
        $template1 = $this->getTemplate('New Appointment Request');
        $apt_link = '#/appointments/all';
        $emailFindReplace = array(
            '##USERNAME##' => $patient['first_name'].' '.$patient['last_name'],
            '##DOCTOR_USERNAME##' => $doctor['first_name'].' '.$doctor['last_name'],
            '##APPOINTMENT_DATE_TIME##' => $appointment['appointment_date'] . ' at ' . $appointment['appointment_time'],
            '##ADDRESS##' => $ADDRESS,
            '##VIEW_APPOINTMENTS##' => url($apt_link)
        );
        $emailFindReplace1 = array(
            '##USERNAME##' => $doctor['first_name'].' '.$doctor['last_name'],
            '##DOCTOR_USERNAME##' => $patient['first_name'].' '.$patient['last_name'],
            '##APPOINTMENT_DATE_TIME##' => $appointment['appointment_date'] . ' at ' . $appointment['appointment_time'],
            '##ADDRESS##' => $ADDRESS,
            '##VIEW_APPOINTMENTS##' => url($apt_link)
        );
        /*send mail to patient*/
        $this->sendMail($template1, $emailFindReplace, $patient['user']['email'], $doctor['dr_title'] . ' ' . $doctor['first_name'] . ' ' . $doctor['last_name']);
        /*send mail to Doctor*/
        if($appointment['appointment_status_id']== 2){
            $template3 = $this->getTemplate('Appointment Approved Alert To Patient');
            $this->sendMail($template3, $emailFindReplace, $patient['user']['email'], $doctor['dr_title'] . ' ' . $doctor['first_name'] . ' ' . $doctor['last_name']);
        }else{
            $template2 = $this->getTemplate('New Appointment Request to Doctor');
            $this->sendMail($template2, $emailFindReplace1, $doctor['user']['email'], $patient['first_name'] . ' ' . $patient['last_name']);
        }

        $doctorMessage = "You have a new Appointment with ".$patient['first_name'].' '.$patient['last_name'].' on '.$appointment['appointment_date'] . ' at ' . $appointment['appointment_time'];
        $patientMessage = "Appointment successfully booked with ".$doctor['first_name'].' '.$doctor['first_name'].' '.$doctor['last_name'].' on '. $appointment['appointment_date'] . ' at ' . $appointment['appointment_time'];
            
        /* For Sending Push Notification Doctor*/
        if(!empty($doctor['user']['device_token'])){
            $this->sendPushMessage($doctor['user']['device_type'], $doctor['user']['device_token'], $doctorMessage);
        }
        /* For Sending Push Notification Patient*/
        if(!empty($patient['user']['device_token'])){
            $this->sendPushMessage($patient['user']['device_type'], $patient['user']['device_token'], $patientMessage);
        }
		
        if(!empty($doctor['phone'])) {
            $doctorSmsDetail = [
                'username' => $doctor['dr_title'] . ' ' . $doctor['first_name'] . ' ' . $doctor['last_name'],
                'mobile' => $doctor['phone']
            ];
        }
        if(!empty($patient['phone'])) {
            $patientSmsDetail = [
                'username' => $patient['first_name'] . ' ' . $patient['last_name'],
                'mobile' => $patient['phone']
            ];
        }
    }


    public function sendStatusMail($replaceFiedls,$template, $type = null){
        $template = $this->getTemplate($template);
        $emailFindReplace = array(
            '##USERNAME##' => $replaceFiedls['username'],
            '##DOCTOR_USERNAME##' => $replaceFiedls['doctorusername'],
            '##APPOINTMENT_DATE_TIME##' => $replaceFiedls['appointment'],
            '##ADDRESS##' => $replaceFiedls['address'],
            '##VIEW_APPOINTMENTS##' => $replaceFiedls['url']
        );
        if($type != null){
            $mailUserName = $replaceFiedls['username'];
        }else{
            $mailUserName = $replaceFiedls['doctorusername'];
        }
        /*Mail to User*/
        $this->sendMail($template, $emailFindReplace, $replaceFiedls['email'],$mailUserName);
    }
    /**
     * Send SMS to doctor reg patient appointment request
     * @param $user
     */
    public function smsReplace($user, $template){
        $replaceFields = array(
            '##SITE_NAME##' => config('site.name'),
            '##USERNAME##' => $user['username'],
        );
        $content = strtr($template, $replaceFields);
        $this->sendSMS($user['mobile'], $content);
    }

    public function appointmentalert(){
        $flag = CronFlag::where('cron_name','=','appointment_alert')->first();
        if($flag['status'] == 1) {
            exit;
        }
        if(config('alert.gold_plan_doctor') == 1){
            CronFlag::where('cron_name','=','appointment_alert')->update(['status'=>1]);
            $doctors = $this->getGoldPlanDoctros();
            foreach($doctors as $doctor){
                $appointmentsArr[] = $this->getDoctorsAppointments($doctor['id'], 'tomorrow');
            }
            $appointments = call_user_func_array("array_merge", $appointmentsArr);
            foreach($appointments as $appointment){
                if((config('alert.is_mail_on') == 1) && (config('alert.is_sms_on') == 1)){
                    $this->sendAlertMail($appointment);
                    $this->sendAlertSMS($appointment);
                }elseif (config('alert.is_sms_on') == 1) {
                    $this->sendAlertSMS($appointment);
                }else if(config('alert.is_mail_on') == 1){
                    $this->sendAlertMail($appointment);
                }else{
                    exit;
                }
                Appointment::update(['is_alert_sent' => 1])->where('id','=', $appointment['id']);
            }
            CronFlag::where('cron_name','=','appointment_alert')->update(['status'=>0]);
        }
    }

    /**
    * For get the gold plan doctor details
    * @param $requiredParams => array()
    * @return $doctors with requiredParams 
    */
    public function getGoldPlanDoctros($requiredParams = array()){
        if(empty($requiredParams)){
            $requiredParams = ['id'];
        }
        $doctors = User::where('subscription_id','=',config('constants.ConstMembershipPlan.Gold'))->select($requiredParams)->toArray();
        return $doctors;
    }

    /**
    * Get the doctor appointment details
    * @param doctor_id, day
    * @return appointment details 
    */
    public function getDoctorsAppointments($doctorId, $day = null){
        if($day == null){
            $day = 'today';
        }
        $appointmentDate = Carbon::parse(Carbon::$day())->format('Y-m-d');
        $appointments = Appointment::where([
            'doctor_user_id'=>$doctorId, 
            'appointment_date'=> $appointmentDate, 
            'appointment_status_id'=>config('constants.ConstAppointmentStatus.Approved'),
            'is_alert_sent' => 0
        ])->get();
        return $appointments;
    }
    
    /**
     * For send the SMS
     * @param type $details = array()
     */
    public function sendAlertSMS($details) {
        if($details['is_guest_appointment'] == 1){
            $patientName = $details['guest_first_name'].' '.$details['guest_last_name'];
        }else{
            $patientName = $details['first_name'].' '.$details['last_name'];
        }
        $doctorDetails = UserProfile::where('user_id','=',$details['doctor_user_id'])->select(['id','user_id','first_name','last_name', 'dr_title'])->first();
        $doctorName = $doctorDetails['dr_title'].' '.$doctorDetails['first_name'].' '.$doctorDetails['last_name'];
        $replaceFields = array(
            '##SITE_NAME##'             => config('site.name'),
            '##PATIENT##'               => $patientName,
            '##DOCTORNAME##'            => $doctorName,
            '##APOINTMENT_DATETIME##'   => $details['appointment_date'].' '.$details['appointment_time'],
        );
        $template = $this->getSMSTemplate('Patient Appointment Alert Reminder');
        $content = strtr($template, $replaceFields);
        $this->sendSMS($details['phone'], $content);   
    }
    
    public function sendAlertMail($details) {
        if($details['is_guest_appointment'] == 1){
            $patientName = $details['guest_first_name'].' '.$details['guest_last_name'];
        }else{
            $patientName = $details['first_name'].' '.$details['last_name'];
        }
        $doctorDetails = UserProfile::where('user_id','=',$details['doctor_user_id'])->select(['id','user_id','first_name','last_name', 'dr_title'])->first();
        $doctorName = $doctorDetails['dr_title'].' '.$doctorDetails['first_name'].' '.$doctorDetails['last_name'];
        $patientDetails = UserProfile::where('user_id','=',$details['user_id'])->with(['user'])->first();
        $address = $patientDetails['address'] . ',' . $patientDetails['city']['name'] . ',' . $patientDetails['country']['name'] . ' ' . $patientDetails['postal_code'];
        $replaceFields = array(
            'patient_name'  => $patientName,
            'doctor_name'   => $doctorName,
            'appointment'   => $details['appointment_date'].' '.$details['appointment_time'],
            'address'       => $address
        );
        $template = $this->getTemplate('Patient Appointment Alert Reminder');
        $this->sendMail($template, $replaceFields, $patientDetails['user']['email'], $doctorName);
    }
    
    public function changeappointmentexpiry() {
        $this->pendingApprovalExpiry();
        if(config('pending_appt_change_expiry') == 1){
            $days = config('change_expiry_before_day');
            if($days == 0){
                $days = 1;
            }
            $date = Carbon::parse(Carbon::now()->subDays($days))->format('Y-m-d');
            Appointment::where('appointment_date', '<=',$date)->where('appointment_status_id', '=', config('constants.ConstAppointmentStatus.Approved'))->update(['appointment_status_id'=>config('constants.ConstAppointmentStatus.Expired')]);
        }
    }
    
    public function pendingApprovalExpiry() {
        $date = Carbon::parse(Carbon::now()->subDays(1))->format('Y-m-d');       
        Appointment::where('appointment_date', '<=',$date)->where('appointment_status_id', '=' ,config('constants.ConstAppointmentStatus.PendingApproval'))->update(['appointment_status_id'=>config('constants.ConstAppointmentStatus.Expired')]);
    }
}

?>