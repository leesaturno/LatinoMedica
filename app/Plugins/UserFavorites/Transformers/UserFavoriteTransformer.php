<?php

namespace Plugins\UserFavorites\Transformers;

use League\Fractal;
use Plugins\UserFavorites\Model\UserFavorite;
use App\Transformers\UserTransformer;

/**
 * Class UserFavoriteTransformer
 * @package App\Transformers
 */
class UserFavoriteTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'user','doctor_user'
    ];

    /**
     * @param UserFavorite $favorite
     * @return array
     */
    public function transform(UserFavorite $favorite) {
        $output = array_only($favorite->toArray(), ['id', 'user_id', 'doctor_user_id','created_at']);
        return $output;
    }

    /**
     * @param UserFavorite $favorite
     * @return Fractal\Resource\Item
     */
    public function includeUser(UserFavorite $favorite) {
        if ($favorite->user) {
            return $this->item($favorite->user, (new UserTransformer())->setDefaultIncludes(['user_profile']));
        } else {
            return null;
        }
    }
    
    /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeDoctorUser(UserFavorite $favorite) {
        if ($favorite->doctor_user) {
            return $this->item($favorite->doctor_user, (new UserTransformer())->setDefaultIncludes(['user_profile','attachmentable']));
        } else {
            return null;
        }
    }

}

?>
