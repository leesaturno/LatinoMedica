<?php
/**
 * Created by Arul Manickam S.
 * User: arulmanickam_423at16
 * Date: 2017-02-09
 * Time: 05:11 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\Notification;

/**
 * Class NotificationTransformer
 * @package app\Transformers
 */
class NotificationTransformer extends Fractal\TransformerAbstract
{

    /**
     * @param Notification $Notification
     * @return array
     */
    public function transform(Notification $Notification)
    {
        $output = array_only($Notification->toArray(), ['id', 'user_id', 'is_remind_email_wellness', 'is_remind_app_appointments', 'is_remind_app_appointment_changed', 'is_remind_app_wellness', 'created_at']);
        return $output;
    }

}