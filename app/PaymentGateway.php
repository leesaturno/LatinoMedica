<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class PaymentGateway
 * @package App
 */
class PaymentGateway extends Model {

    /**
     * @var string
     */
    protected $table = "payment_gateways";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'display_name', 'description', 'gateway_fees', 'is_test_mode', 'is_active'
    ];

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            
            'name' => 'required|min:2',
            'description'=>'required|min:6|max:260' 
        ];
    }

}
