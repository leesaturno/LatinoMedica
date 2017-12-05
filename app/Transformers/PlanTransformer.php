<?php
/**
 * User: mugundhan_352at15
 * Date: 2016-04-04
 * Time: 10:40 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\Plan;

/**
 * Class PlanTransformer
 * @package app\Transformers
 */
class PlanTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Plan $plan
     * @return array
     */
    public function transform(Plan $plan)
    {
        $output = array_only($plan->toArray(),[
                        'id', 
                        'name', 
                        'description', 
                        'features', 
                        'slug', 
                        'plan_user_count', 
                        'user_count', 
                        'amount', 
                        'duration', 
                        'is_active'
                    ]
                );
        return $output;
    }
}