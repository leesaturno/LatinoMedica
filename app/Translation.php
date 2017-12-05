<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Translation
 * @package App
 */
class Translation extends Model
{
    /**
     * @var string
     */
    protected $table = "translations";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'language_id', 'key', 'lang_text', 'is_translated', 'is_google_translate', 'is_verified'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function Page()
    {
        return $this->hasMany(Page::class);
    }

    public function language() {
        return $this->belongsTo(Language::class);
    }
    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'key'), $request->input('sortby', 'asc'));
        if ($request->has('filter')) {
            $filter = false;
            if ($request->input('filter') == 'active') {
                $filter = true;
            }
            $query->where('is_verified', '=', $filter);
        }
        if ($request->has('q')) {
            $query->where('key', 'LIKE', '%' . $request->input('q') . '%');
        }
        return $query;


    }

    

    public function scopeGetValidationRule()
    {
        return [
            'key' => 'required|min:1'
        ];
    }
}
