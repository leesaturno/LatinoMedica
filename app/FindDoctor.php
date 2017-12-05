<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class FindDoctor extends Model
{
    protected $table = "find_doctors";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'id', 'user_id', 'city_id', 'specialty_id','created_at'
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
    public function specialty()
    {
        return $this->belongsTo(Specialty::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
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
        if ($request->has('user_id')) {
            $query->where('user_id', $request->input('user_id'));
        }
		if ($request->has('city_id')) {
            $query->where('city_id', $request->input('city_id'));
        }
		if ($request->has('specialty_id')) {
            $query->where('specialty_id', $request->input('specialty_id'));
        }
        return $query;


    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'city_id' => 'sometimes|required',
            'specialty_id' => 'sometimes|required'
        ];
    }

    /**
     * @return array
     */
    public function scopeGetValidationMessage() {
        return [
            'city_id.required' => 'Enter city',
            'specialty.required' => 'Enter specialty',
        ];
    }
}
