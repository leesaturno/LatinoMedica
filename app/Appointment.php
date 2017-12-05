<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class State
 * @package App
 */
class Appointment extends Model {

    /**
     * @var string
     */
    protected $table = "appointments";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'doctor_user_id', 'appointment_date', 'appointment_time', 'phone', 'patient_note', 'doctor_note', 'first_name', 'last_name', 'postal_code', 'dob', 'gender_id',
        'is_guest_appointment', 'guest_first_name', 'guest_last_name', 'guest_email', 'guest_postal_code', 'guest_dob', 'guest_gender_id', 'specialty_disease_id',
        'is_seen_before', 'appointment_status_id', 'is_offline_booking', 'preference_type_id','is_widget_booking', 'widget_id', 'is_ical_booking', 'ical_link_id',
        'is_ical_booking', 'work_place_id','family_friend_id'
    ];

	/**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        //$query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'asc'));
        if ($request->input('sort', 'id') == 'User.user_profile.first_name') {
              $query->orderBy('user_id', $request->input('sortby', 'desc'));
        } elseif ($request->input('sort', 'id') == 'doctor_user.user_profile.first_name') {
              $query->orderBy('doctor_user_id', $request->input('sortby', 'desc'));
        } elseif ($request->input('sort', 'id') == 'SpecialtyDiseas.name') {
              $query->orderBy('specialty_disease_id', $request->input('sortby', 'desc'));
        } elseif ($request->input('sort', 'id') == 'appointment_status.name') {
              $query->orderBy('appointment_status_id', $request->input('sortby', 'desc'));
        } else {
            $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        }
        if ($request->has('filter')) {
            if ($request->input('filter') == 'active') {
                $filter = true;
            } else if ($request->input('filter') == 'inactive') {
                $filter = false;
            }
            $query->where('is_active', '=', $filter);
        }
        if ($request->has('q')) {
            $query->where('first_name', 'LIKE', '%' . $request->input('q') . '%');
        }
        return $query;


    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function User() {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function SpecialtyDiseas() {
        return $this->belongsTo(SpecialtyDiseas::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function Gender() {
        return $this->belongsTo(Gender::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function appointment_status() {
        return $this->belongsTo(AppointmentStatus::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function doctor_user(){
        return $this->belongsTo(User::class);
    }

    public function workplace() {
        return $this->belongsTo(Workplace::class, 'work_place_id', 'id');
    }

    public function family_friend() {
        return $this->belongsTo(FamilyFriend::class, 'family_friend_id', 'id');
    }
    public function foreigns(){
        return $this->morphMany(Activity::class, 'foreign');
    }
    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
   /* public function scopeFilterByRequest($query, Request $request)
    {
        //$query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        return $query;
    }*/
}
