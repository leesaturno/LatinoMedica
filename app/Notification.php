<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Country
 * @package App
 */
class Notification extends Model
{
    /**
     * @var string
     */
    protected $table = "notifications";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'is_remind_email_wellness', 'is_remind_app_appointments', 'is_remind_app_appointment_changed', 'is_remind_app_wellness'
    ];

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'user_id' => 'sometimes|required|exists:users,id|unique:notifications,user_id',
            'is_remind_email_wellness' => 'required|boolean',
            'is_remind_app_appointments' => 'required|boolean',
            'is_remind_app_appointment_changed' => 'required|boolean',
            'is_remind_app_wellness' => 'required|boolean',
        ];
    }
}
