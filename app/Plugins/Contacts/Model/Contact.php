<?php

namespace Plugins\Contacts\Model;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Ip;

class Contact extends Model
{
    /**
     * @var string
     */
    protected $table = "contacts";

    protected $fillable = [
        'first_name', 'last_name', 'subject', 'message', 'telephone', 'email', 'user_id', 'ip_id'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ip()
    {
        return $this->belongsTo(Ip::class);
    }

    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        if ($request->input('sort', 'id') == 'Ip.ip') {
              $query->orderBy('ip_id', $request->input('sortby', 'desc'));
        } else {
              $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        }      
        if ($request->has('q')) {
            $query->where('first_name', 'LIKE', '%' . $request->input('q') . '%')
                ->orWhere('last_name', 'LIKE', '%' . $request->input('q') . '%');
        }
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'first_name' => 'required|min:2',
            'last_name' => 'required|min:2',
            'user_id' => 'numeric',
            'email' => 'required|email',
            'subject' => 'required|min:5',
            'message' => 'required|min:10',
            'telephone' => 'required|numeric|min:10'
        ];
    }

    /**
     * @return array
     */
    public function scopeGetValidationMessage()
    {
        return [
            'email.required' => 'Enter your e-mail address!',
            'email.email' => 'Enter valid e-mail address!'
        ];
    }

}
