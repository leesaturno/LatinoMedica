<?php

namespace App\Transformers;

use App\SpecialtyDiseas;
use App\UserProfile;
use League\Fractal;
use App\Appointment;
use App\Transformers\FamilyFriendTransformer;

/**
 * Class AppointmentTransformer
 * @package App\Transformers
 */
class AppointmentTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'user','specialty_diseas','appointment_status','doctor_user','user_profile', 'workplace','family_friend'
    ];

    /**
     * @param Appointment $appointment
     * @return array
     */
    public function transform(Appointment $appointment) {
        $output = array_only($appointment->toArray(), ['id', 'created_at', 'user_id', 'doctor_user_id', 'appointment_date', 'appointment_time', 'phone', 'patient_note', 'doctor_note', 'first_name', 'last_name', 'postal_code', 'dob', 'gender_id', 'is_guest_appointment', 'guest_first_name', 'guest_last_name', 'guest_email', 'guest_postal_code', 'guest_dob', 'guest_gender_id', 'specialty_disease_id', 'is_seen_before', 'appointment_status_id', 'is_offline_booking', 'preference_type_id', 'work_place_id','family_friend_id']);
        return $output;
    }

    /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeUser(Appointment $appointment) {
        if ($appointment->user) {
            return $this->item($appointment->user, (new UserTransformer())->setDefaultIncludes(['user_profile','attachmentable']));
        } else {
            return null;
        }
    }
    
    /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeSpecialtyDiseas(Appointment $appointment) {

        if ($appointment->specialty_diseas) {
            return $this->item($appointment->specialty_diseas, new SpecialtyDiseasTransformer());
        } else {
            $appointment->specialty_diseas = SpecialtyDiseas::where('id','=',$appointment->specialty_disease_id)->first();
            return $this->item($appointment->specialty_diseas, new SpecialtyDiseasTransformer());
        }
    }
    
    /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeAppointmentStatus(Appointment $appointment) {
        if ($appointment->appointment_status) {
            return $this->item($appointment->appointment_status, new AppointmentStatusTransformer());
        } else {
            return null;
        }
    }
    /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeDoctorUser(Appointment $appointment) {
        if ($appointment->doctor_user) {
            return $this->item($appointment->doctor_user, (new UserTransformer())->setDefaultIncludes(['user_profile','attachmentable']));
        } else {
            return null;
        }
    }
    /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeUserProfile(Appointment $appointment){
        if ($appointment->user_profile) {
            return $this->item($appointment->user_profile, new UserProfileTransformer());
        }else{
            $appointment->user_profile = UserProfile::where('user_id','=',$appointment->user_id)->first();
            return $this->item($appointment->user_profile, (new UserProfileTransformer())->setDefaultIncludes(['gender']));
        }
    }
    /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeDoctorProfile(Appointment $appointment){
        if ($appointment->user_profile) {
            return $this->item($appointment->user_profile, new UserProfileTransformer());
        }else{
            $appointment->user_profile = UserProfile::where('user_id','=',$appointment->doctor_user_id)->first();
            return $this->item($appointment->user_profile, (new UserProfileTransformer())->setDefaultIncludes(['gender']));
        }
    }

    /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeNextConsulting(Appointment $appointment) {
        if ($appointment['next_consulting']) {
            return $this->item($appointment['next_consulting'], (new AppointmentTransformer)->setDefaultIncludes(['appointment_status','user', 'specialty_diseas']));
        } else {
            return null;
        }
    }
    /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeWorkplace(Appointment $appointment) {
        if ($appointment->workplace) {
            return $this->item($appointment->workplace, new WorkplaceTransformer());
        } else {
            return null;
        }
    }
    /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeFamilyFriend(Appointment $appointment) {
        if ($appointment->family_friend) {
            return $this->item($appointment->family_friend, new FamilyFriendTransformer());
        } else {
            return null;
        }
    }
}
?>
