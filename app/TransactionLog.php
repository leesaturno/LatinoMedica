<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class TransactionLog
 * @package App
 */
class TransactionLog extends Model
{
    /**
     * @var string
     */
    protected $table = "transactions";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'receiver_user_id', 'transactionable_id', 'transactionable_type', 'transaction_type_id', 'amount', 'description', 'payment_gateway_id', 'gateway_fees', 'mode'
    ];
}