<?php
/**
 * Created by PhpStorm.
 * User: anandam_023ac09
 * Date: 2016-03-30
 * Time: 08:18 PM
 */

namespace App\Transformers;

use League\Fractal;
use App\City;

/**
 * Class CityTransformer
 * @package App\Transformers
 */
class CityTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'state', 'country'
    ];

    /**
     * @param City $city
     * @return array
     */
    public function transform(City $city)
    {
        $output = array_only($city->toArray(), ['id', 'name', 'state_id', 'country_id', 'is_active', 'latitude', 'longitude']);
        return $output;
    }

    /**
     * @param City $city
     * @return Fractal\Resource\Item
     */
    public function includeState(City $city)
    {
        if ($city->state) {
            return $this->item($city->state, new StateTransformer());
        } else {
            return null;
        }

    }

    /**
     * @param City $city
     * @return Fractal\Resource\Item
     */
    public function includeCountry(City $city)
    {
        if ($city->country) {
            return $this->item($city->country, new CountryTransformer());
        } else {
            return null;
        }

    }
}