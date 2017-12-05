<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Ethnicity extends Model
{
    /**
     * @var string
     */
    protected $table = "ethnicities";

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
