<?php
/**
 * Created by Arul Manickam S.
 * User: arulmanickam_423at16
 * Date: 2017-01-21
 * Time: 05:11 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\FamilyFriend;
use App\Transformers\StateTransformer;
use App\Transformers\CityTransformer;
use App\Transformers\CountryTransformer;
use App\Transformers\UserTransformer;
use App\Transformers\GenderTransformer;
use DateTime;

/**
 * Class FamilyFriendTransformer
 * @package app\Transformers
 */
class FamilyFriendTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources default to include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'city','state','user','country'
    ];
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'city','state', 'user','gender','country'
    ];
    /**
     * @param FamilyFriend $familyfriend
     * @return array
     */
    public function transform(FamilyFriend $familyfriend)
    {
        $output = array_only($familyfriend->toArray(), ['id', 'user_id','first_name', 'last_name', 'relationship','email', 'age','gender_id', 'mobile', 'home_phone', 'work_phone', 'address', 'address1', 'city_id', 'state_id', 'country_id', 'zipcode', 'dob', 'timestamps']);
        if ($output['dob']) {
            $from = new DateTime($output['dob']);
            $to   = new DateTime('today');
            $output['age'] = $from->diff($to)->y;
        }
        return $output;
    }

    /**
     * @param FamilyFriend $familyfriend
     * @return Fractal\Resource\Item
     */
    public function includeCity(FamilyFriend $familyfriend) {
        if ($familyfriend->city) {
            return $this->item($familyfriend->city, new CityTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param FamilyFriend $familyfriend
     * @return Fractal\Resource\Item
     */
    public function includeState(FamilyFriend $familyfriend) {
        if ($familyfriend->state) {
            return $this->item($familyfriend->state, new StateTransformer());
        } else {
            return null;
        }
    }

   public function includeCountry(FamilyFriend $familyfriend) {
        if ($familyfriend->country) {
            return $this->item($familyfriend->country, new CountryTransformer());
        } else {
            return null;
        }
    }
     /**
     * @param Patient $patient
     * @return Fractal\Resource\Item
     */
    public function includeUser(FamilyFriend $familyfriend) {        
        if ($familyfriend->user) {
            return $this->item($familyfriend->user, new UserTransformer());
        } else {
            return null;
        }
    }
     public function includeGender(FamilyFriend $familyfriend) {        
        if ($familyfriend->gender) {
            return $this->item($familyfriend->gender, new GenderTransformer());
        } else {
            return null;
        }
    }
}
