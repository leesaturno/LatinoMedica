<?php

namespace App\Transformers;

use League\Fractal;
use App\AppointmentSettings;

/**
 * Class AppointmentTransformer
 * @package App\Transformers
 */
class AppointmentSettingsTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'user'
    ];

    /**
     * @param AppointmentSettings $appointmentSettings
     * @return array
     */
    public function transform(AppointmentSettings $appointmentSettings) {
        $output = array_only($appointmentSettings->toArray(), ['user_id', 'is_today_first_day', 'calendar_slot_id', 'is_two_session', 'practice_open', 'lunch_at', 'resume_at', 'practice_close', 'type', 'is_sunday_open', 'sunday_two_session', 'sunday_practice_open', 'sunday_lunch_at', 'sunday_resume_at', 'sunday_practice_close', 'is_monday_open', 'monday_two_session', 'monday_practice_open', 'monday_lunch_at', 'monday_resume_at', 'monday_practice_close', 'is_tuesday_open', 'tuesday_two_session', 'tuesday_practice_open', 'tuesday_lunch_at', 'tuesday_resume_at', 'tuesday_practice_close', 'is_wednesday_open', 'wednesday_two_session', 'wednesday_practice_open', 'wednesday_lunch_at', 'wednesday_resume_at', 'wednesday_practice_close', 'is_thrusday_open', 'thrusday_two_session', 'thrusday_practice_open', 'thrusday_lunch_at', 'thrusday_resume_at', 'thrusday_practice_close', 'is_friday_open', 'friday_two_session', 'friday_practice_open', 'friday_lunch_at', 'friday_resume_at', 'friday_practice_close', 'is_saturday_open', 'saturday_two_session', 'saturday_practice_open', 'saturday_lunch_at', 'saturday_resume_at', 'saturday_practice_close', 'is_active', 'work_place_id']);
        return $output;
    }

    /**
     * @param AppointmentSettings $appointmentSettings
     * @return Fractal\Resource\Item
     */
    public function includeUser(AppointmentSettings $appointmentSettings) {
        if ($appointmentSettings->user) {
            return $this->item($appointmentSettings->user, new UserTransformer());
        } else {
            return null;
        }
    }
}

?>