<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Gender
 * @package App
 */
class Gender extends Model
{
    /**
     * @var string
     */
    protected $table = "genders";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id','name' 
    ];
    
    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'asc'));
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
            'name' => 'required|min:2',
        ];
    }
}
