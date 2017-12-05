<?php

namespace App\Transformers;

use League\Fractal;
use App\Subscription;

/**
 * Class SubscriptionTransformer
 * @package Subscriptions\Transformers
 */
class SubscriptionTransformer extends Fractal\TransformerAbstract
{
    /**
     * @var array
     */
    protected $availableIncludes = [
        
    ];

    /**
     * @param Subscription $subscription
     * @return array
     */
    public function transform(Subscription $subscription)
    {
        $output = array_only($subscription->toArray(), ['id', 'created_at', 'name', 'price', 'description', 'period_days', 'user_count', 'paypal_plan_id', 'is_active']);
        return $output;
    }
}