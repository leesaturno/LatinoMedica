<?php
/**
 * Created by Arul Manickam S.
 * User: arulmanickam_423at16
 * Date: 2017-01-21
 * Time: 05:11 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\Workplace;
use App\Transformers\StateTransformer;
use App\Transformers\CityTransformer;
use App\Transformers\CountryTransformer;

/**
 * Class WorkplaceTransformer
 * @package app\Transformers
 */
class WorkplaceTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources default to include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'city','state', 'country'
    ];
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'city','state', 'country'
    ];
    /**
     * @param Workplace $workplace
     * @return array
     */
    public function transform(Workplace $workplace)
    {
        $output = array_only($workplace->toArray(), ['id', 'doctor_id', 'location', 'city_id', 'state_id', 'country_id', 'work_phone_number', 'price', 'is_preferred_location', 'is_active', 'latitude', 'longitude','address1']);
        return $output;
    }

    /**
     * @param Workplace $workplace
     * @return Fractal\Resource\Item
     */
    public function includeCity(Workplace $workplace) {
        if ($workplace->city) {
            return $this->item($workplace->city, new CityTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param Workplace $workplace
     * @return Fractal\Resource\Item
     */
    public function includeState(Workplace $workplace) {
        if ($workplace->state) {
            return $this->item($workplace->state, new StateTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param City $city
     * @return Fractal\Resource\Item
     */
    public function includeCountry(Workplace $workplace) {
        if ($workplace->country) {
            return $this->item($workplace->country, new CountryTransformer());
        } else {
            return null;
        }
    }
}