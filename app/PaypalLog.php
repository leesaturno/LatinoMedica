<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class PaypalLog
 * @package App
 */
class PaypalLog extends Model
{
    /**
     * @var string
     */
    protected $table = "paypal_transaction_logs";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'amount', 'user_id', 'payer_id', 'token', 'transaction_type', 'paypal_response', 'status'
    ];

}
