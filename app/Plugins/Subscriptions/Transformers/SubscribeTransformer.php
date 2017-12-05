<?php
/**
 * Created by PhpStorm.
 * User: mugundhan_352at15
 * Date: 6/28/2016
 * Time: 12:17 PM
 */

namespace Plugins\Subscriptions\Transformers;

use League\Fractal;
use App\Subscribe;

class SubscribeTransformer  extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'user','subscriptions'
    ];

    public function transform(Subscribe $subscribe)
    {
        $output = array_only($subscribe->toArray(), ['id', 'user_id', 'subscription_id', 'profile_id', 'subscription_start', 'subscription_end', 'mode', 'status']);
        return $output;
    }

    /**
     * @param Subscribe $subscribe
     * @return Fractal\Resource\Item
     */
    public function includeUser(Subscribe $subscribe)
    {
        if ($subscribe->user) {
            return $this->item($subscribe->user, new UserTransformer());
        } else {
            return null;
        }

    }
    public function includeSubscriptions(Subscribe $subscribe)
    {
        if ($subscribe->subscription) {
            return $this->item($subscribe->subscription, new SubscribeTransformer());
        } else {
            return null;
        }
    }
}
?>