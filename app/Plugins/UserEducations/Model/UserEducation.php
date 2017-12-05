<?php

namespace Plugins\UserEducations\Model;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;

/**
 * Class UserEducation
 * @package App
 */
class UserEducation extends Model
{
    /**
     * @var string
     */
    protected $table = "user_educations";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'user_id', 'education', 'location', 'organization', 'certification_date', 'is_active'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    
    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
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
            $query->where('education', 'LIKE', '%' . $request->input('q') . '%');
        }
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'education' => 'required',
            'location' => 'required',
            'organization' => 'required'
          ];
        
    }

}
