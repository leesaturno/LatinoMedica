<?php
/**
 * Created by PhpStorm.
 * User: anandam_023ac09
 * Date: 2016-03-30
 * Time: 09:23 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\Country;

/**
 * Class CountryTransformer
 * @package app\Transformers
 */
class CountryTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Country $country
     * @return array
     */
    public function transform(Country $country)
    {
        $output = array_only($country->toArray(), ['id', 'name', 'iso2', 'iso3', 'phone_code', 'is_active']);
        return $output;
    }
}