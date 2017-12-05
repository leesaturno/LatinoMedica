<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Plugins\Subscriptions\Model\Subscription;
use App\Subscribe;
/**
 * Class Subscribe
 * @package App
 */
class Suspend extends Model
{
    /**
     * @var string
     */
    protected $table = "paypal_suspend_log";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'profile_id', 'subscription_id', 'status', 'description', 'subscribe_id'
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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subscribe() {
        return $this->belongsTo(Subscribe::class, 'subscribe_id');
    }
}