<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Rating;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\RatingTransformer;

/**
 * Countries resource representation.
 * @Resource("Admin/AdminCountries")
 */
class AdminRatingsController extends Controller
{
	
	

    /**
     * AdminCountriesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
    }

    public function show() {
        $reviewDetails = Rating::paginate(10);
        if (!empty($reviewDetails)) {
            return $this->response->paginator($reviewDetails, (new RatingTransformer())->setDefaultIncludes(['user', 'doctor_user']));
        } else {
            return response()->json(['data' => [], 'status' => false]);
        }
    }

	

	
}
