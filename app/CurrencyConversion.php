<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class CurrencyConversion extends Model
{
    /**
     * @var string
     */
    protected $table = "currency_conversions";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'currency_id', 'converted_currency_id', 'rate'
    ];

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'currency_id' => 'required|numeric',
            'converted_currency_id' => 'required|numeric',
            'rate' => 'required|numeric'
        ];
    }
}
