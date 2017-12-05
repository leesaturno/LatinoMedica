<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    /**
     * @var string
     */
    protected $table = "cities";

    protected $fillable = [
        'name', 'state_id', 'country_id', 'latitude', 'longitude'
    ];


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
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function ip()
    {
        return $this->hasMany(Ip::class);
    }

    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        if ($request->input('sort', 'id') == 'State.name') {
            $query->orderBy('state_id', $request->input('sortby', 'asc'));
        } elseif ($request->input('sort', 'id') == 'Country.name') {
            $query->orderBy('country_id', $request->input('sortby', 'asc'));
        } else {
            $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'asc'));
        }
        if ($request->has('filter')) {
            $filter = false;
            if ($request->input('filter') == 'active') {
                $filter = true;
            }
            $query->where('is_active', '=', $filter);
        }
        if ($request->has('q')) {
            $query->where('name', 'LIKE', '%' . $request->input('q') . '%');
            $query->orWhereHas('State', function ($q) use ($request) {
                $q->Where('name', 'like', '%' . $request->input('q') . '%');
            });
            $query->orWhereHas('Country', function ($q) use ($request) {
                $q->Where('name', 'like', '%' . $request->input('q') . '%');
            });
        }
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'name' => 'required|min:2',
            'state_id' => 'required|numeric',
            'country_id' => 'required|numeric'
        ];
    }

}
