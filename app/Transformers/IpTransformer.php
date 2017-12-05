<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-03-30
 * Time: 08:18 PM
 */

namespace App\Transformers;

use League\Fractal;
use App\Ip;

/**
 * Class IpTransformer
 * @package App\Transformers
 */
class IpTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'city', 'state', 'country'
    ];

    /**
     * @param Ip $ip
     * @return array
     */
    public function transform(Ip $ip)
    {
        $output = array_only($ip->toArray(), ['id', 'ip', 'city_id', 'state_id', 'country_id', 'latitude', 'longitude']);
        return $output;
    }

    /**
     * @param Ip $ip
     * @return Fractal\Resource\Item
     */
    public function includeCity(Ip $ip)
    {
        if ($ip->city) {
            return $this->item($ip->city, new CityTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param Ip $ip
     * @return Fractal\Resource\Item
     */
    public function includeState(Ip $ip)
    {
        if ($ip->state) {
            return $this->item($ip->state, new StateTransformer());
        } else {
            return null;
        }

    }

    /**
     * @param Ip $ip
     * @return Fractal\Resource\Item
     */
    public function includeCountry(Ip $ip)
    {
        if ($ip->country) {
            return $this->item($ip->country, new CountryTransformer());
        } else {
            return null;
        }

    }
}