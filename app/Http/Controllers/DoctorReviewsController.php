<?php

/**
 * AgriyaBase - Lumen framework
 *
 * PHP version 5.5.9
 *
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Agriya <info@agriya.com>
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Rating;
use App\User;
use App\Transformers\RatingTransformer;
use App\UserProfile;
use DB;

/**
 * DoctorReviews resource representation.
 *
 * @Resource("UserEudcations")
 */
class DoctorReviewsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        /* $this->middleware('jwt.auth'); */
        $this->middleware('jwt.auth', ['only' => ['add', 'update']]);
    }

    public function add(Request $request) {
        $isAdminAutoAcitve = config('site.review_auto_active'); /* Change here Admin  Backend Setting Constant Value */
        $user = $this->auth->user();
        $acceptValues = $request->only(['patient_id','appointment_id', 'rating_option_id', 'rate']);
        $rating = Rating::where('appointment_id', $acceptValues['appointment_id'])->where('patient_id', $acceptValues['patient_id'])->first();
        if ($rating){
            return response()->json(['Failed' => 'Your Review Already Added']);
        }
        $acceptValues['doctor_id'] = $user->id;
        $validator = Validator::make($acceptValues, Rating::GetValidationRule(), Rating::GetValidationMessage());
        if ($validator->passes()) {
            $created = Rating::create($acceptValues);
            if ($created) {				
				$rateTotalValues = Rating::select(DB::raw('SUM(rate) AS user_rate'))->where('patient_id', $acceptValues['patient_id'])->lists('user_rate')->toArray();
                $rateTotalValue = $rateTotalValues[0];
				$ratingCount = Rating::where('patient_id','=', $acceptValues['patient_id'])->count();
				$overall_avg_rating = round($rateTotalValue / $ratingCount);
				User::where('id','=', $acceptValues['patient_id'])->update(['overall_avg_rating' => $overall_avg_rating]);
                return response()->json(['Success' => 'Your Review Added Successfully'], 200);
            } else {
                return response()->json(['Failed' => 'Your Review Added Failed']);
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Rating could not be Added. Please, try again.', $validator->errors());
        }
    }

    public function show($userId = null,$appointmentId = null) {
        $user = $this->auth()->user();
        $condition = [
            'patient_id' => $userId,
            'doctor_id' => $user->id,
            'appointment_id' => $appointmentId
        ];
        $reviewDetails = Rating::where($condition)->get();
        if (!empty($reviewDetails)) {
            return $this->response->collection($reviewDetails, (new RatingTransformer())->setDefaultIncludes(['user', 'doctor_user']));
        } else {
            return response()->json(['data' => [], 'status' => false]);
        }
    }

    public function update(Request $request, $id)
    {
        $user = $this->auth()->user();
        $acceptValues = $request->only(['rating_option_id', 'rate']);
        $acceptValues['doctor_id'] = $user->id;
        $validator = Validator::make($acceptValues, Rating::GetValidationRule(), Rating::GetValidationMessage());
        $rating = false;
        if ($request->has('id')) {
            $rating = Rating::find($id);
            $rating = ($request->id != $id) ? false : $rating;
        }
        if ($validator->passes() && $rating) {
            try {
                $rating->update($acceptValues);
                return response()->json(['Success' => 'Rating has been updated'], 200);
            } catch (\Exception $e) { 
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Rating could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Rating could not be updated. Please, try again.', $validator->errors());
        }
    }

}
