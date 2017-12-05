<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Country
 * @package App
 */
class Insurance extends Model
{
    /**
     * @var string
     */
    protected $table = "insurances";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'created_at','name', 'is_active'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    
    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'name'), $request->input('sortby', 'asc'));
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
