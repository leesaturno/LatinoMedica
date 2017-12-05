<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\Translation\MessageCatalogue;

class Message extends Model
{
    /**
     * @var string
     */
    protected $table = "messages";

    protected $fillable = [
        'message_id', 'item_id', 'user_id', 'to_user_id', 'parent_id', 'message_content_id', 'message_folder_id', 'messageable_id', 'messageable_type', 'is_sender', 'is_starred', 'is_read', 'is_deleted', 'is_archived', 'is_review', 'is_communication', 'hash', 'size', 'item_user_status_id', 'dispute_status_id'
    ];
     /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function child()
    {
        return $this->hasMany(Message::class, 'parent_id', 'id')->where('message_folder_id', config('constants.ConstMessageFolder.Inbox'))->with('message_content', 'to_user');     
    }
    public function children()
    {
        return $this->child()->with('children');
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function from_user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function to_user()
    {
        return $this->belongsTo(User::class, 'to_user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function message_content()
    {
        return $this->belongsTo(MessageContent::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function messageable()
    {
        return $this->morphTo();
    }


    /**
     * @param $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        if ($request->has('q')) {
            $query->whereHas('from_user', function ($q) use ($request) {
                $q->where('username', 'like', '%' . $request->input('q') . '%');
            });
            $query->orWhereHas('to_user', function ($q) use ($request) {
                $q->Where('username', 'like', '%' . $request->input('q') . '%');
            });
            $query->orWhereHas('message_content', function ($q) use ($request) {
                $q->Where('subject', 'like', '%' . $request->input('q') . '%');
            });
        }
        if ($request->input('filter') === 'vehicle_rental_messages') {
            $query->where('messageable_type', '=', 'MorphVehicleRental');
        } else if ($request->input('filter') === 'user_messages') {
            $query->where('messageable_type', '=', 'MorphUser');
        }
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'message' => 'required',
            'subject' => 'sometimes|required'
        ];
    }

    public function scopeGetValidationMessage()
    {
        return [
            'message.required' => 'Required',
            'subject.required' => 'Required',
        ];
    }
}
