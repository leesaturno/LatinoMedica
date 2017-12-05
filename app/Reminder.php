<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    protected $table = "consultaion_reminder";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'doctor_id', 'patient_id', 'reminder_text', 'remind_on'
    ];

    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        if ($request->has('filter')) {
            $filter = false;
            if ($request->input('filter') == 'active') {
                $filter = true;
            }
            $query->where('is_reminded', '=', $filter);
        }
        if ($request->has('q')) {
            $query->where('reminder_text', 'LIKE', '%' . $request->input('q') . '%');
        }
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'doctor_id' => 'sometimes|required|exists:users,id',
            'patient_id' => 'sometimes|required|exists:users,id',
            'reminder_text' => 'sometimes|required',
            'remind_on' => 'sometimes|required|date'
        ];
    }

    /**
     * @return array
     */
    public function scopeGetValidationMessage() {
        return [
            'doctor_id.required' => 'Doctor Id Must',
            'doctor_id.exists' => 'Doctor Id Not Exists in User Table',
            'patient_id.required' => 'Patient Id Must',
            'patient_id.exists' => 'Patient Id Not Exists in User Table',
            'reminder_text.required' => 'sometimes|required',
            'remind_on.required' => 'Remind Date Required',
            'remind_on.date' => 'Remind on must valid Date'
        ];
    }
}
