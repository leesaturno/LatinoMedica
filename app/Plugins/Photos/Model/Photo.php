<?php

namespace Plugins\Photos\Model;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use App\Attachment;

/**
 * Class Photo
 * @package App
 */
class Photo extends Model
{
    /**
     * @var string
     */
    protected $table = "photos";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'user_id', 'is_active'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    /**
     * Get all of the users attachment.
     */
    public function attachments() {
        return $this->morphOne(Attachment::class, 'attachmentable');
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
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'is_active' => 'required'
         ];
        
    }

}
