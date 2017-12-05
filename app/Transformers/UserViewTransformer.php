<?php

namespace App\Transformers;

use League\Fractal;
use App\UserView;

/**
 * Class UserViewTransformer
 * @package App\Transformers
 */
class UserViewTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'user'
    ];

    /**
     * @param UserView $user_view
     * @return array
     */
    public function transform(UserView $user_view) {
        $output = array_only($user_view->toArray(), ['id', 'created_at','user_id', 'viewing_user_id', 'ip_id']);
        return $output;
    }

    /**
     * @param UserView $user_view
     * @return Fractal\Resource\Item
     */
    public function includeUser(UserView $user_view) {
        if ($user_view->user) {
            return $this->item($user_view->user, new UserTransformer());
        } else {
            return null;
        }
    }

}

?>