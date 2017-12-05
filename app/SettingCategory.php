<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-03-31
 * Time: 04:50 PM
 */

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class SettingCategory extends Model
{
    protected $table = "setting_categories";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'display_order'
    ];


    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request, $plugin = true)
    {
        $query->orderBy($request->input('sort', 'name'), $request->input('sortby', 'ASC'));
        if(!$plugin){
            $query->where('name', '!=', 'Plugins');
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
            'description' => 'required',
            'display_order' => 'required'
        ];
    }


}
