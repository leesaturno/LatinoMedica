<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Workplace extends Model
{
    protected $table = "work_places";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'doctor_id', 'location', 'city_id', 'state_id', 'country_id', 'work_phone_number', 'price', 'is_preferred_location', 'is_active', 'latitude', 'longitude','address1'
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
            $query->where('is_active', '=', $filter);
        }
        if ($request->has('q')) {
            $query->where('name', 'LIKE', '%' . $request->input('q') . '%');
        }
        return $query;


    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'doctor_id' => 'required|exists:users,id',
            'location' => 'sometimes|required',
            'city_id' => 'sometimes|required',
            'state_id' => 'sometimes|required',
            'country_id' => 'sometimes|required',
            'price' => 'sometimes|numeric',
            'is_active' => 'sometimes|required|boolean',
            'address1' => 'sometimes|required',
        ];
    }

    /**
     * @return array
     */
    public function scopeGetValidationMessage() {
        return [
            'doctor_id.required' => 'Doctor Id Must',
            'doctor_id.exists' => 'Doctor Id Not Exists in User Table',
            'location.required' => 'Enter your location!',
            'city_id.required' => 'Enter City',
            'state_id.required' => 'Enter State',
            'country_id.required' => 'Enter Country',
            'price.required' => 'Enter Price',
            'price.numeric' => 'Enter Price as numeric Value',
            'is_active.required' => 'Enter 1 for activate or 0 for inacivate',
            'address1.required' => 'Enter your GeoLocation',
        ];
    }
}
