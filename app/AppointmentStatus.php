<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class AppointmentStatus
 * @package App
 */
class AppointmentStatus extends Model {

    /**
     * @var string
     */
    protected $table = "appointment_statuses";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'appointment_count'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function appointment() {
         return $this->hasMany(Appointment::class);
    }

}
