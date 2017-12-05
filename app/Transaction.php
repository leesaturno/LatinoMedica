<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
//use App\TransactionType;
use Carbon;

/**
 * Class Transaction
 * @package App
 */
class Transaction extends Model
{
    /**
     * @var string
     */
    protected $table = "transactions";
    /**
     * @var array
     */
    protected $fillable = [
        'user_id', 'receiver_user_id', 'transactionable_id', 'transactionable_type', 'transaction_type_id', 'amount', 'description', 'payment_gateway_id', 'gateway_fees'
    ];

    /**
     * @param $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        if ($request->has('q')) {
            $query->whereHas('FromUser', function ($q) use ($request) {
                $q->where('username', 'like', '%' . $request->input('q') . '%');
            });
            $query->orWhereHas('ToUser', function ($q) use ($request) {
                $q->Where('username', 'like', '%' . $request->input('q') . '%');
            });
            /*$query->orWhereHas('transaction_type', function ($q) use ($request) {
                $q->Where('message', 'like', '%' . $request->input('q') . '%');
            });*/
        }
        if ($request->has('start_date')) {
            $start_date = date("Y-m-d H:i:s", strtotime($request->input('start_date')));
            $query->where('created_at', '>=', $start_date);
        }
        if ($request->has('end_date')) {
            $end_date = date("Y-m-d H:i:s", strtotime($request->input('end_date')));
            $query->where('created_at', '<=', $end_date);
        }
        if ($request->has('from_user')) {
            $query->where('user_id', '=', $request->input('from_user'));
        }
        if ($request->has('to_user')) {
            $query->where('receiver_user_id', '=', $request->input('to_user'));
        }
        if ($request->has('filter')) {
            if ($request->input('filter') == 'Admin') {
                $query->where('user_id', config('constants.ConstUserTypes.Admin'))->orWhere('receiver_user_id', config('constants.ConstUserTypes.Admin'));
            } else if ($request->input('filter') == 'this_week') {
                $check_date = Carbon::now()->subDays(7);
                $check_date = Carbon::parse($check_date)->format('Y-m-d');
                $query->where('created_at', '>=', $check_date);
            } else if ($request->input('filter') == 'this_month') {
                $check_date = Carbon::now()->subMonth();
                $check_date = Carbon::parse($check_date)->format('Y-m-d');
                $query->where('created_at', '>=', $check_date);
            } else if ($request->input('filter') == 'today') {
                $check_date = Carbon::now();
                $check_date = Carbon::parse($check_date)->format('Y-m-d');
                $query->where('created_at', '>=', $check_date);
            }
        }
        return $query;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function FromUser()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ToUser()
    {
        return $this->belongsTo(User::class, 'receiver_user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
   /* public function transaction_type()
    {
        return $this->belongsTo(TransactionType::class);
    }*/

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function transactionable()
    {
        return $this->morphTo();
    }
}
