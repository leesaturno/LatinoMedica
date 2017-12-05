<?php

namespace App\Transformers;

use League\Fractal;
use App\AppointmentModifications;

/**
 * Class AppointmentTransformer
 * @package App\Transformers
 */
class AppointmentModificationsTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'user'
    ];

    /**
     * @param AppointmentModifications $appointmentModifications
     * @return array
     */
    public function transform(AppointmentModifications $appointmentModifications) {
        $output = array_only($appointmentModifications->toArray(), ['id','user_id', 'appoint_date', 'is_two_session', 'practice_open', 'lunch_at', 'resume_at', 'practice_close', 'type', 'is_active', 'work_place_id']);
        return $output;
    }

    /**
     * @param AppointmentModifications $appointmentModifications
     * @return Fractal\Resource\Item
     */
    public function includeUser(AppointmentModifications $appointmentModifications) {
        if ($appointmentModifications->user) {
            return $this->item($appointmentModifications->user, new UserTransformer());
        } else {
            return null;
        }
    }
}

?>