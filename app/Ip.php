<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Ip extends Model
{
    /**
     * @var string
     */
    protected $table = "ips";

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
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function userloginUserLoginIp()
    {
        return $this->hasOne(UserLogin::class, 'user_login_ip_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userLastLoginIp()
    {
        return $this->hasOne(User::class, 'last_login_ip_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userRegiserIp()
    {
        return $this->hasOne(User::class, 'register_ip_id');
    }

    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {

        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        if ($request->has('q')) {
            $query->where('ip', 'like', '%' . $request->input('q') . '%');
        }

        return $query;
    }

}
