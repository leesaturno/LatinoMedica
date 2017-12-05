<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class EmailTemplate extends Model
{
    protected $table = "email_templates";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'subject', 'body_content', 'from_name', 'reply_to'
    ];


    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        if ($request->has('q')) {
            $query->where('name', 'like', '%' . $request->input('q') . '%');
        }
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'name' => 'required',
            'subject' => 'required',
            'body_content' => 'required',
            'from_name' => 'required'
        ];
    }

}
