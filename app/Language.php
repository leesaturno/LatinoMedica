<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Language
 * @package App
 */
class Language extends Model
{
    /**
     * @var string
     */
    protected $table = "languages";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'name', 'iso2', 'iso3', 'is_active','usage_count', 'translation_active'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function Page()
    {
        return $this->hasMany(Page::class);
    }
	
	public function translation() {
        return $this->hasMany(Translation::class);
    }

    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'name'), $request->input('sortby', 'asc'));
        if ($request->has('filter')) {
            $filter = false;
            if ($request->input('filter') == 'active') {
                $filter = true;
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
            'name' => 'required|min:2',
            'iso2' => 'required|min:2|max:2',
            'iso3' => 'required|min:3|max:3'
        ];
    }
}
