<?php
/**
 * Created by Arul Manickam S.
 * User: arulmanickam_423at16
 * Date: 2017-01-21
 * Time: 05:11 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\Reminder;

/**
 * Class ReminderTransformer
 * @package app\Transformers
 */
class ReminderTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources default to include
     *
     * @var array
     */
    protected $defaultIncludes = [
        
    ];
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        
    ];
    /**
     * @param Reminder $workplace
     * @return array
     */
    public function transform(Reminder $workplace)
    {
        $output = array_only($workplace->toArray(), ['id', 'doctor_id', 'patient_id', 'reminder_text', 'remind_on']);
        return $output;
    }

}