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

namespace Plugins\UserReviews\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\UserReviews\Model\UserReview;
use Plugins\UserReviews\Transformers\UserReviewTransformer;
use App\UserProfile;
use App\User;

/**
 * UserReviews resource representation.
 *
 * @Resource("UserEudcations")
 */
class UserReviewsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        /* $this->middleware('jwt.auth'); */
        $this->middleware('jwt.auth', ['only' => ['add']]);
    }

    public function add(Request $request) {
        $isAdminAutoAcitve = config('site.review_auto_active'); /* Change here Admin  Backend Setting Constant Value */
        $user = $this->auth->user();
        $acceptValues = $request->only(['review', 'bedside_rate', 'waittime_rate', 'doctor_user_id']);
        $userProfile = UserProfile::where('user_id', '=', $user->id)->first()->toArray();
        $storedValue = [
            'user_id' => $user->id,
            'is_active' => $isAdminAutoAcitve == 1 ? true : false,
            'pet_name' => ($userProfile['first_name'] . ' ' . $userProfile['last_name'])
        ];
        $storedValue = array_merge($storedValue, $acceptValues);
        $created = UserReview::create($storedValue);
        if ($created) {
            /* If the Admin Active the auto active in user reviews it can update automatically the user review point in here */
            if ($isAdminAutoAcitve == 1) {
                /* Get the doctor profile here */
                $doctorDetails = User::where('id', '=', $acceptValues['doctor_user_id'])->first()->toArray();
                $timingRatingCount = $doctorDetails['timing_rating_count'] + 1;
                $timingRatingAvg = $doctorDetails['timing_avg_rating'] + $acceptValues['waittime_rate'];
                $bedSideRatingCount = $doctorDetails['bedside_rating_count'] + 1;
                $bedSideRatingAvg = $doctorDetails['bedside_avg_rating'] + $acceptValues['bedside_rate'];
                $overallAvgRating = (($bedSideRatingAvg + $timingRatingAvg) / 2) / $timingRatingCount;
                $updateValue = [
                    'timing_rating_count' => $timingRatingCount,
                    'timing_avg_rating' => $timingRatingAvg,
                    'bedside_rating_count' => $bedSideRatingCount,
                    'bedside_avg_rating' => $bedSideRatingAvg,
                    'overall_rating_count' => $timingRatingCount,
                    'overall_avg_rating' => $overallAvgRating
                ];
                /* User Review Update with start rating avg values */
                User::where('id', '=', $acceptValues['doctor_user_id'])->update($updateValue);
                $msg = 'Your Review Added Successfully';
            } else {
                $msg = 'Your Review Added Successfully waiting for admin confirmation';
            }
            return response()->json(['Success' => $msg], 200);
        } else {
            return response()->json(['Failed' => 'Your Review Added Failed']);
        }
    }

    public function show($doctorid, $userid = null) {
        $user = $this->auth()->user();
        if ($userid != null) {
            $condition = [
                'doctor_user_id' => $doctorid,
                'user_id' => $userid,
                'is_active' => true
            ];
        } else {
            $condition = [
                'doctor_user_id' => $doctorid,
                'is_active' => true
            ];
        }
        $reviewDetails = UserReview::where($condition)->get()->toArray();
        if (!empty($reviewDetails)) {
            return response()->json(['data' => $reviewDetails, 'status' => true]);
        } else {
            return response()->json(['data' => [], 'status' => false]);
        }
    }
    public function doctorreview($doctorid){
       $condition = [
            'doctor_user_id' => $doctorid,
            'is_active' => true
        ];
        $reviewDetails = UserReview::where($condition)->paginate(20);
        return $this->response->paginator($reviewDetails, (new UserReviewTransformer));
    }
}
