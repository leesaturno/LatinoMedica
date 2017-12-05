<?php

/**
 * User: soundar_378at15
 * Date: 2017-04-11
 * Time: 11:42 AM
 */

namespace App\Transformers;

use League\Fractal;
use App\Activity;

/**
 * Class ActivityTransformer
 * @package App\Transformers
 */
class ActivityTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'user', 'other_user'
    ];

    /**
     * @param Answer $answer
     * @return array
     */
    public function transform(Activity $activity) {
        $output = array_only($activity->toArray(), ['id', 'user_id', 'other_user_id', 'foreign_id', 'class', 'from_status_id', 'to_status_id', 'activity_type', 'created_at', 'is_read']);
        return $output;
    }

    /**
     * @param Answer $Activity
     * @return Fractal\Resource\Item
     */
    public function includeUser(Activity $activity) {
        if ($activity->user) {
            return $this->item($activity->user, (new UserTransformer())->setDefaultIncludes(['user_profile','attachmentable']));
        } else {
            return null;
        }
    }
    public function includeForeign(Activity $activity) {
        if ($activity->foreign) {
            if ($activity->class == 'Appointment') {
                return $this->item($activity->foreign, new AppointmentTransformer());
            }
        } else {
            return null;
        }
    }
    /**
     * @param Answer $Activity
     * @return Fractal\Resource\Item
     */
    public function includeOtherUser(Activity $activity) {
        if ($activity->other_user) {
            return $this->item($activity->other_user, (new UserTransformer())->setDefaultIncludes(['user_profile','attachmentable']));            
        } else {
            return null;
        }
    }
}
