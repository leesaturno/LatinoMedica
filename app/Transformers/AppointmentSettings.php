<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class State
 * @package App
 */
class AppointmentSettings extends Model {

    /**
     * @var string
     */
    protected $table = "appointment_settings";

    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        if ($request->has('work_place_id')) {
            $query->where('work_place_id', $request->input('work_place_id'));
        }
        return $query;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'user_id','is_today_first_day', 'calendar_slot_id', 'is_two_session', 'practice_open', 'lunch_at', 'resume_at', 'practice_close', 'type', 'is_sunday_open', 'sunday_two_session', 'sunday_practice_open', 'sunday_lunch_at', 'sunday_resume_at', 'sunday_practice_close', 'is_monday_open', 'monday_two_session', 'monday_practice_open', 'monday_lunch_at', 'monday_resume_at', 'monday_practice_close', 'is_tuesday_open', 'tuesday_two_session', 'tuesday_practice_open', 'tuesday_lunch_at', 'tuesday_resume_at', 'tuesday_practice_close', 'is_wednesday_open', 'wednesday_two_session', 'wednesday_practice_open', 'wednesday_lunch_at', 'wednesday_resume_at', 'wednesday_practice_close', 'is_thrusday_open', 'thrusday_two_session', 'thrusday_practice_open', 'thrusday_lunch_at', 'thrusday_resume_at', 'thrusday_practice_close', 'is_friday_open', 'friday_two_session', 'friday_practice_open', 'friday_lunch_at', 'friday_resume_at', 'friday_practice_close', 'is_saturday_open', 'saturday_two_session', 'saturday_practice_open', 'saturday_lunch_at', 'saturday_resume_at', 'saturday_practice_close', 'is_active','is_suspend', 'work_place_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function User() {
        return $this->belongsTo(User::class);
    }
    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'work_place_id' => 'required|unique:work_places|exists:work_places,id'
        ];
    }
	public function scopeGetValidationMessage() {
        return [
            'work_place_id.required' => 'Workplace Id Must',
            'work_place_id.exists' => 'Workplace Id Not Exists',
            'work_place_id.unique' => 'Workplace Id should be unique'
        ];
    }
}
