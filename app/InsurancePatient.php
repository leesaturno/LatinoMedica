<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class InsurancePatient extends Model
{
    protected $table = "insurance_patients_limit";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'doctor_id', 'insurance_id', 'allowed_patients'
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
            'doctor_id' => 'required|exists:users,id',
            'insurance_id' => 'required|exists:insurance_companies,id',
            'allowed_patients' => 'sometimes|required'
        ];
    }

    /**
     * @return array
     */
    public function scopeGetValidationMessage() {
        return [
            'doctor_id.required' => 'Doctor Id Must',
            'doctor_id.exists' => 'Doctor Id Not Exists in User Table',
            'insurance_id.required' => 'Enter your location!',
            'insurance_id.exists' => 'Insurance Id Not Exists in Insurance Table',
            'allowed_patients.required' => 'Enter City',
            'allowed_patients.numeric' => 'Enter Price as numeric Value'
        ];
    }

    public function doctor_profile(){
        return $this->belongsTo(UserProfile::class, 'doctor_id');
    }
    public function insurance(){
        return $this->belongsTo(InsuranceCompany::class, 'insurance_id');
    }
}
