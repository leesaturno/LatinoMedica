<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model {

    /**
     * @var string
     */
    protected $table = "answers";
    protected $fillable = [
        'user_id', 'question_id', 'pet_name', 'answer', 'is_active', 'created_at'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user() {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function question() {
        return $this->belongsTo(Question::class);
    }

    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request) {
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
            $query->where('answer', 'LIKE', '%' . $request->input('q') . '%');
        }
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule() {
        return [
            'question_id' => 'required|numeric',
            'user_id' => 'required|numeric',
            'answer' => 'required'
        ];
    }

}