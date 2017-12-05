<?php

namespace App\Transformers;

use League\Fractal;
use App\AppointmentStatus;

/**
 * Class AppointmentStatusTransformer
 * @package App\Transformers
 */
class AppointmentStatusTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'appointment'
    ];

    /**
     * @param AppointmentStatus $appointmentStatus
     * @return array
     */
    public function transform(AppointmentStatus $appointmentStatus) {
        $output = array_only($appointmentStatus->toArray(), ['id', 'name', 'appointment_count']);
        return $output;
    }

}
