<?php
/**
 * Created by Soundararajan M.
 * Date: 2017-04-10
 * Time: 05:11 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\FindDoctor;
use App\Transformers\SpecialtyTransformer;
use App\Transformers\CityTransformer;
use App\Transformers\UserTransformer;

/**
 * Class FindDoctorTransformer
 * @package app\Transformers
 */
class FindDoctorTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources default to include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'city','specialty','user'
    ];
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'city','specialty', 'user'
    ];
    /**
     * @param FamilyFriend $FindDoctor
     * @return array
     */
    public function transform(FindDoctor $finddoctor)
    {
        $output = array_only($finddoctor->toArray(), [ 'id', 'user_id', 'city_id', 'specialty_id','created_at']);
        return $output;
    }

    /**
     * @param FamilyFriend $FindDoctor
     * @return Fractal\Resource\Item
     */
    public function includeCity(FindDoctor $finddoctor) {
        if ($finddoctor->city) {
            return $this->item($finddoctor->city, new CityTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param FamilyFriend $FindDoctor
     * @return Fractal\Resource\Item
     */
    public function includeSpecialty(FindDoctor $finddoctor) {
        if ($finddoctor->specialty) {
            return $this->item($finddoctor->specialty, new SpecialtyTransformer());
        } else {
            return null;
        }
    }

   
     /**
     * @param Patient $patient
     * @return Fractal\Resource\Item
     */
    public function includeUser(FindDoctor $finddoctor) {        
        if ($finddoctor->user) {
            return $this->item($finddoctor->user, new UserTransformer());
        } else {
            return null;
        }
    }
}
