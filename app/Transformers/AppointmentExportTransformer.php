<?php

namespace App\Transformers;

use League\Fractal;
use App\Appointment;

/**
 * Class AppointmentTransformer
 * @package App\Transformers
 */
class AppointmentExportTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
         
    ];

    /**
     * @param Appointment $appointment
     * @return array
     */
    public function transform(Appointment $appointment) {
        $username = $doctor_username ='';
        if (isset($appointment->user->username)) {
            $username = $appointment->user->username;
        }
        if (isset($appointment->doctor_user->username)) {
            $doctor_username = $appointment->doctor_user->username;
        }
        $output = array_only($appointment->toArray(), ['appointment_date', 'appointment_time', 'phone', 'patient_note', 'doctor_note', 'first_name', 'last_name']);
        $output['username'] = $username;
        $output['doctor_username'] = $doctor_username;
        return $output;
    }

}
?>