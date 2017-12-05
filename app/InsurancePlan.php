<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class InsurancePlan extends Model
{
    protected $table = "insurance_plans";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'patient_id', 'medical_insurance_id', 'medical_insurance_id','dental_insurance_id','eye_insurance_id'
    ];

    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'asc'));
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'patient_id' => 'required|exists:users,id'
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
        return $this->belongsTo(UserProfile::class, 'patient_id');
    }
}
