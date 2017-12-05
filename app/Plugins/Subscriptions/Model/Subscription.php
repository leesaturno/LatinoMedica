<?php

namespace Plugins\Subscriptions\Model;

use App\Subscribe;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;

/**
 * Class Subscription
 * @package App
 */
class Subscription extends Model
{
    /**
     * @var string
     */
    protected $table = "subscriptions";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'name', 'price', 'description', 'period_days', 'user_count', 'is_active'
    ];

    
    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        if ($request->has('filter')) {
            if ($request->input('filter') == 'active') {
                $filter = true;
            } else if ($request->input('filter') == 'inactive') {
                $filter = false;
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
            'name.required' => 'Enter amount',
            'price.numeric' => 'Enter valid amount',
            'description.min' => 'Enter greater or equal minimum description',
            'period_days.max' => 'Enter less or equal maximum days'
        ];
    }

    public function subscribe() {
        return $this->hasMany(Subscribe::class,'subscription_id');
    }
}
