<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class AuthorizedDoctor extends Model
{
    protected $table = "authorized_doctors";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'patient_id', 'doctor_id'
    ];

    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        if ($request->has('patient_id')) {
            $query->where('patient_id', $request->input('patient_id'));
        }
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'patient_id' => 'required|exists:users,id',
            'doctor_id' => 'required|exists:users,id',            
        ];
    }

    /**
     * @return array
     */
    public function scopeGetValidationMessage() {
        return [
            'patient_id.required' => 'Patient Id Must',
            'patient_id.exists' => 'Patient Id Not Exists in User Table'
        ];
    }

    public function patient(){
        return $this->belongsTo(User::class, 'patient_id');
    }
    public function doctor(){
        return $this->belongsTo(User::class, 'doctor_id');
    }
}
