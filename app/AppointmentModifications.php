<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class State
 * @package App
 */
class AppointmentModifications extends Model {

    /**
     * @var string
     */
    protected $table = "appointment_modifications";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'appoint_date', 'practice_open', 'type', 'is_active','work_place_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function User() {
        return $this->belongsTo(User::class);
    }

}
