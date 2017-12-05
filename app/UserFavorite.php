<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class State
 * @package App
 */
class UserFavorite extends Model {

    /**
     * @var string
     */
    protected $table = "user_favorites";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'doctor_user_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user() {
        return $this->belongsTo(User::class);
    }
    
    public function doctor_user(){
        return $this->belongsTo(User::class);
    }
}
