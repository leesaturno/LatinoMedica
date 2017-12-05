<?php
namespace Plugins\Subscriptions\Transformers;

use League\Fractal;
use Plugins\Subscriptions\Model\Subscription;

/**
 * Class SubscriptionTransformer
 * @package App\Transformers
 */
class SubscriptionTransformer extends Fractal\TransformerAbstract
{

    /**
     * @param Subscription $subscription
     * @return array
     */
    public function transform(Subscription $subscription)
    {
        $output = array_only($subscription->toArray(), ['id', 'name', 'price', 'description', 'period_days', 'user_count', 'is_active']);
        return $output;
    }
}

?>