<?php

namespace Plugins\Pages\Model;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Language;

/**
 * Class Page
 * @package App
 */
class Page extends Model
{
    /**
     * @var string
     */
    protected $table = "pages";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'language_id', 'slug', 'page_content'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function language()
    {
        return $this->belongsTo(Language::class);
    }


    /**
     * @param         $query
     * @param Request $request
     * @return mixed
     */
    public function scopeFilterByRequest($query, Request $request)
    {
        $query->orderBy($request->input('sort', 'id'), $request->input('sortby', 'desc'));
        if ($request->has('q')) {
            $query->where('title', 'LIKE', '%' . $request->input('q') . '%');
        }
        return $query;
    }

    /**
     * @return array
     */
    public function scopeGetValidationRule()
    {
        return [
            'title' => 'required|min:2',
            'language_id' => 'required|numeric',
            'page_content' => 'required|min:10'
        ];
    }

    /**
     * @return array
     */
    public function scopeGetBulkAddValidationRule()
    {
        return [
            'pages.*.title' => 'required|min:2',
            'pages.*.language_id' => 'required|numeric',
            'pages.*.page_content' => 'required|min:10'
        ];
    }

}
