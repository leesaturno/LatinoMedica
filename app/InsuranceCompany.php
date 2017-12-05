<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Country
 * @package App
 */
class InsuranceCompany extends Model
{
    /**
     * @var string
     */
    protected $table = "insurance_companies";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'is_active'
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
        if ($request->has('type') && ($request->input('type') != '0')) {
            $query->where('insurance_type', '=', $request->input('type'));
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
