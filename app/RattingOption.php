<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;

/**
 * Class Rating
 * @package App
 */
class RattingOption extends Model
{
    /**
     * @var string
     */
    protected $table = "ratting_options";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'option'
    ];
    
    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'option' => 'required',
        ];
    }
}
