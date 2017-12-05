<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    protected $table = "currencies";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'code', 'symbol', 'prefix', 'suffix', 'decimals', 'dec_point', 'thousands_sep', 'is_prefix_display_on_left', 'is_use_graphic_symbol', 'is_active'
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
            'code' => 'required|min:2',
            'symbol' => 'required|max:1',
            'prefix' => 'required',
            'suffix' => 'required',
            'decimals' => 'required|numeric',
            'dec_point' => 'required|max:1',
            'thousands_sep' => 'required|max:1',
            'is_prefix_display_on_left' => 'required|numeric|max:1',
            'is_use_graphic_symbol' => 'required|numeric|max:1'
        ];
    }
}
