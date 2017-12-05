<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Attachment;

class UserProfile extends Model {

    /**
     * @var string
     */
    protected $table = "user_profiles";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                'user_id', 'attachment_id', 'first_name', 'last_name', 'dr_title', 'display_name', 'practice_name', 'gender_id','booking_instructions','about_me', 'board_certifications', 'memberships', 'awards', 'specialty_id', 'phone', 'address', 'city_id', 'country_id', 
                'postal_code', 'notification_type_id', 'is_newpatient_accepted', 'latitude', 'longitude',
                 'no_insurance_patients', 'identification_number', 'is_allow_appointments','linkedin_handle', 'twitter_handle', 'facebook_handle', 'instagram_handle', 'race', 'ethnicity', 'preferred_lang', 'work_phone_number', 'home_phone_number', 'apartment_unit'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user() {
        return $this->belongsTo(User::class);
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function city()
    {
        return $this->belongsTo(City::class);
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function state()
    {
        return $this->belongsTo(State::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
    
    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request) {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        return $query;
    }

    public function scopeGetValidationRule() {
        return [
            'first_name' => 'required|min:3'
        ];
    }

}
