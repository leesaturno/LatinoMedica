<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Plugins\Subscriptions\Model\Subscription;

/**
 * Class Subscribe
 * @package App
 */
class Subscribe extends Model
{
    /**
     * @var string
     */
    protected $table = "subscribe";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'subscription_id', 'profile_id', 'subscription_start', 'subscription_end', 'mode', 'status'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subscription() {
        return $this->belongsTo(Subscription::class, 'subscription_id');
    }
}