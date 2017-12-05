<?php
/**
 * User: mugundhan_352at15
 * Date: 2016-04-05
 * Time: 01:23 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\Insurance;

/**
 * Class InsuranceTransformer
 * @package app\Transformers
 */
class InsuranceTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Insurance $insurance
     * @return array
     */
    public function transform(Insurance $insurance)
    {
        $output = array_only($insurance->toArray(), ['id', 'created_at','name', 'is_active']);
        return $output;
    }
}