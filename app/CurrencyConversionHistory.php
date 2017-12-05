<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class CurrencyConversionHistory extends Model
{
    /**
     * @var string
     */
    protected $table = "currency_conversion_histories";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'currency_conversion_id', 'rate_before_change', 'rate'
    ];

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'currency_conversion_id' => 'required|numeric',
            'rate_before_change' => 'required|numeric',
            'rate' => 'required|numeric'
        ];
    }
}
