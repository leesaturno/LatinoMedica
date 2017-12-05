<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Race extends Model
{
    /**
     * @var string
     */
    protected $table = "races";

    protected $fillable = [
        'name'
    ];

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'name' => 'required|min:2'
        ];
    }

}
