<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * Class Activity
 * @package App
 */
class Activity extends Model {

    /**
     * @var string
     */
    protected $table = "activities";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'other_user_id', 'foreign_id', 'class', 'from_status_id', 'to_status_id', 'activity_type'
    ];
	
	/**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
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
    public function other_user() {
        return $this->belongsTo(User::class, 'other_user_id', 'id');
    }
    public static function saveActivity($data) {
        $activities = Activity::create($data);
        return $activities->id;
    }
    public function foreign()
    {
        return $this->morphTo(null, 'class', 'foreign_id');
    }
    protected static function boot()
    {
        Relation::morphMap(['Appointment' => Appointment::class]);
    }
}
