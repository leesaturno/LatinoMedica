<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Http\Request;
use Plugins\Widget\Model\Widget;
use Plugins\UserFavorites\Model\UserFavorite;
use App\Attachment;
class User extends Model implements AuthenticatableContract {

    use Authenticatable,
        Authorizable;

    /**
     * The attributes that are mass assignable.
     * @var array
     */
    protected $fillable = [
        'role_id', 'username', 'email', 'password', 'available_wallet_amount', 'blocked_amount', 'item_count', 'item_user_count', 'user_login_count', 'user_view_count', 'is_agree_terms_conditions', 'is_active', 'is_email_confirmed', 'is_verified', 'register_ip_id', 'last_login_ip_id', 'user_avatar_source_id','overall_rating_count','user_review_count', 'bedside_rating_count', 'bedside_avg_rating', 'timing_rating_count', 'timing_avg_rating', 'overall_rating_count', 'overall_avg_rating', 'user_rating_count', 'is_trial', 'subscription_id', 'subscription_end','device_type','device_token','is_paypal_suspend', 'is_paypal_cancel', 'is_expiry', 'otp', 'is_otp_verify', 'mobile', 'points', 'is_verified', 'is_featured'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request) {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        if ($request->has('filter')) {
            $filter = false;
            if ($request->input('filter') == 'active') {
                $filter = true;
            }
            $query->where('is_active', '=', $filter);
        }
        if ($request->has('is_email_confirmed')) {
            $filter = false;
            if ($request->input('is_email_confirmed') == 'yes') {
                $filter = true;
            }
            $query->where('is_email_confirmed', '=', $filter);
        }
        if ($request->has('role_id')) {
            if ($request->input('role_id') == 'admin') {
                $query->where('role_id', '=', config('constants.ConstUserTypes.Admin'));
            } else if ($request->input('role_id') == 'patient') {
                $query->where('role_id', '=', config('constants.ConstUserTypes.User'));
            } else if ($request->input('role_id') == 'doctor') {
                $query->where('role_id', '=', config('constants.ConstUserTypes.Doctor'));
            }
        }
        if ($request->has('subscription_id')) {
            $query->where('subscription_id', '=', $request->input('subscription_id'));
        }
        if ($request->has('q')) {
            $query->where('username', 'LIKE', '%' . $request->input('q') . '%');
        }
        return $query;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function user_login() {
        return $this->hasMany(UserLogin::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function LastLoginIp() {
        return $this->belongsTo(Ip::class, 'last_login_ip_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function RegisterIp() {
        return $this->belongsTo(Ip::class, 'register_ip_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user_profile() {
        return $this->hasOne(UserProfile::class);
    }

    public function dotor_user() {
        return $this->hasOne(User::class,'doctor_user_id');
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function UserEducations() {
        return $this->hasMany(\Plugins\UserEducations\Model\UserEducation::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function user_cash_withdrawal() {
        return $this->hasMany(UserCashWithdrawal::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function money_transfer_account() {
        return $this->hasMany(MoneyTransferAccount::class);
    }

    public function appointment() {
        return $this->hasMany(Appointment::class,'user_id');
    }

    public function upcomming_appointment() {
        $datetime =  date('Y-m-d H:i A');
		return $this->hasMany(Appointment::class,'user_id')->whereRaw("CONCAT(appointment_date,' ',appointment_time) >= '".$datetime."'")->orderBy('id', 'DESC')->take(5);
    }
    public function subscribe() {
        return $this->hasMany(Subscribe::class, 'user_id');
    }
    public function subscription() {
        return $this->hasOne(Subscription::class, 'id', 'subscription_id');
    }
    public function UserFavorite() {
        return $this->hasMany(UserFavorite::class,'user_id');
    }
    /**
     * Get all of the users attachment.
     */
    public function attachments() {
        return $this->morphOne(Attachment::class, 'attachmentable')->where('dir', 'like', 'app/User/%');
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\morphMany
     */
    public function message()
    {
        return $this->morphMany(\App\Message::class, 'messageable');
    }

    public function workplace() {
        return $this->hasMany(Workplace::class, 'doctor_id')->orderBy('is_preferred_location', 'desc');
    }
    /**
     * Get all of the users attachment.
     */
    public function badge() {
        return $this->morphMany(Attachment::class, 'attachmentable')->where('dir', 'like', 'app/Badge/%');
    }
    public function insured_patients()
    {
       return $this->hasMany(InsurancePatient::class, 'doctor_id');
    }
    /**
     * @return array
     */
    public function scopeGetValidationRule() {
        return [
            'username' => 'sometimes|required|min:3|unique:users',
            'email' => 'sometimes|required|email|unique:users',
            'password' => 'sometimes|required|min:6|max:20',
            'confirm_password' => 'sometimes|required|min:6|max:20|same:password',
            'is_agree_terms_conditions' => 'sometimes|required',
            'is_active' => 'sometimes|integer',
            'is_email_confirmed' => 'sometimes|integer',
            'role_id' => 'sometimes|required|integer'
        ];
    }

    /**
     * @return array
     */
    public function scopeGetEditValidationRule() {
        return [
            'username' => 'sometimes|required|min:3',
            'email' => 'required|email',
        ];
    }

    /**
     * @return array
     */
    public function scopeGetValidationMessage() {
        return [
            'email.required' => 'Enter your e-mail address!',
            'email.email' => 'Enter valid e-mail address!',
            'email.unique' => 'E-mail address already exists!',
            'username.required' => 'Enter your username!',
            'username.min' => 'Minimum length is 3!',
            'username.unique' => 'Username already exists!',
            'password.required' => 'Enter Password',
            'password.min' => 'Minimum length is 6',
            'password.max' => 'Maximum length is 20',
            'confirm_password.required' => 'Enter Confirm Password',
            'confirm_password.min' => 'Minimum length is 6',
            'confirm_password.max' => 'Maximum length is 20',
            'confirm_password.same' => 'Password Mismatch',
            'is_agree_terms_conditions.required' => 'Accept Terms and conditions',
            'is_active.integer' => 'Enter 1 for activate or 0 for inacivate',
            'is_email_confirmed.integer' => 'Enter 1 for email verified or 0 for not verified',
        ];
    }

    /**
     * @return array
     */
    public function scopeGetForgetPasswordValidationRule() {
        return [
            'email' => 'required|email'
        ];
    }

    /**
     *  @return start count value
     */
    static function scopeStarRating($doctorUserId){
        $userData = User::select(['overall_avg_rating'])->where(['id' => $doctorUserId])->first();
        return $userData['overall_avg_rating'];
    }
}
