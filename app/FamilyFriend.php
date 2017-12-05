<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class FamilyFriend extends Model
{
    protected $table = "family_friends";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'user_id', 'first_name', 'last_name', 'relationship', 'age','email', 'gender_id', 'mobile', 'home_phone', 'work_phone', 'address', 'address1', 'city_id', 'state_id', 'country_id', 'zipcode', 'dob', 'timestamps'
    ];

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

    public function user() {
        return $this->belongsTo(User::class);
    }

     public function gender() {
        return $this->belongsTo(Gender::class);
    }
    
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
        }
        if ($request->has('q')) {
            $query->where('first_name', 'ilike', '%' . $request->input('q') . '%')
            ->$query->orWhere('last_name', 'ilike', '%' . $request->input('q') . '%')
            ->$query->orWhere('email', 'ilike', '%' . $request->input('q') . '%');            
        }
        if ($request->has('user_id')) {
            $query->where('user_id', $request->input('user_id'));
        }
        return $query;


    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'first_name' => 'sometimes|required',
            'gender_id' => 'sometimes|required',
            'mobile_id' => 'sometimes|required'
        ];
    }

    /**
     * @return array
     */
    public function scopeGetValidationMessage() {
        return [
            'first_name.required' => 'Enter First name',
            'gender_id.required' => 'Enter Gender',
            'mobile.required' => 'Enter mobile',
        ];
    }
}
