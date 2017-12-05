<?php

namespace Plugins\QuestionAnswer\Model;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Specialty;
use App\User;
class Question extends Model
{
    /**
     * @var string
     */
    protected $table = "questions";

    protected $fillable = [
        'question', 'user_id', 'specialty_id', 'slug','answer_count', 'is_active', 'doctor_id'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function specialty()
    {
        return $this->belongsTo(Specialty::class);
    }
	public function answer() { 
        return $this->hasMany(Answer::class);
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
            $query->where('question', 'LIKE', '%' . $request->input('q') . '%');
        } 
	    if ($request->has('doctor_id')) {
			$query->where('doctor_id', '=', $request->input('doctor_id'));
        } 
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'question' => 'required|min:2',
            'user_id' => 'required|numeric'
        ];
    }

}