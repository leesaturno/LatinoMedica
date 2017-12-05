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
class Rating extends Model
{
    /**
     * @var string
     */
    protected $table = "ratings";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'doctor_id','patient_id','appointment_id', 'rating_option_id', 'rate'
    ];


    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'doctor_id' => 'required|exists:users,id',
            'patient_id' => 'required|exists:users,id',
            'appointment_id' => 'required|exists:appointments,id',
            'rating_option_id' => 'required|exists:ratting_options,id'
        ];
    }

    /**
     * @return array
     */
    public function scopeGetValidationMessage() {
        return [
            'doctor_id.required' => 'Doctor Id Must',
            'doctor_id.exists' => 'Doctor Id Not Exists in User Table',
            'patient_id.required' => 'Enter your Patient Detail!',
            'patient_id.exists' => 'Patient Id Not Exists in User Table',
            'appointment_id.required' => 'Enter Appointment Id',
            'appointment_id.exists' => 'Appointment Id Not Exists in User Table',
            'rating_option_id.required' => 'Enter Rating Option',
            'doctor_id.exists' => 'Rating Option Id Not Exists in Rating Option Table',
        ];
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user() {
        return $this->belongsTo(User::class, 'patient_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function doctor_user(){
        return $this->belongsTo(User::class, 'doctor_id');
    }
    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'name'), $request->input('sortby', 'desc'));
        if ($request->has('filter')) {
            $filter = false;
            if ($request->input('filter') == 'active') {
                $filter = true;
            }
            $query->where('is_active', '=', $filter);
        }
        if ($request->has('q')) {
            $query->where('name', 'LIKE', '%' . $request->input('q') . '%');
        }
        return $query;
    }
}
