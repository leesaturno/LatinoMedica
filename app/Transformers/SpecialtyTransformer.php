<?php
/**
 * User: mugundhan_352at15
 * Date: 2016-04-05
 * Time: 01:23 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\Specialty;

/**
 * Class SpecialtyTransformer
 * @package app\Transformers
 */
class SpecialtyTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Specialty $specialty
     * @return array
     */
    public function transform(Specialty $specialty)
    {
        $output = array_only($specialty->toArray(), ['id', 'name', 'description', 'is_active','created_at','speciality_disease_count','user_count']);
        return $output;
    }
}