<?php

namespace App\Transformers;

use League\Fractal;
use App\PaymentGateway;

/**
 * Class PaymentGatewayTransformer
 * @package App\Transformers
 */
class PaymentGatewayTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'user', 'ip'
    ];

    /**
     * @param PaymentGateway $payment_gateway
     * @return array
     */
    public function transform(PaymentGateway $payment_gateway) {
        $output = array_only($payment_gateway->toArray(), ['id', 'name', 'description','display_name', 'is_test_mode', 'is_active']);
        return $output;
    }

}

?>