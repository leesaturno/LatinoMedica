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

namespace Plugins\UserReviews\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Plugins\UserReviews\Model\UserReview;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\UserReviews\Transformers\UserReviewTransformer;

/**
 * UserReviews resource representation.
 *
 * @Resource("UserEudcations")
 */
class AdminUserReviewsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        
    }

    /**
     * Show all UserReviews
     *
     * Get a JSON representation of all the UserReviews.
     *
     * @Get("/user_reviews?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the user_reviews list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the user_reviews list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user_reviews by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display user_reviews By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search user_reviews.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $user_review = UserReview::filterByRequest($request)->paginate(20);
        return $this->response->paginator($user_review, (new UserReviewTransformer)->setDefaultIncludes(['User','doctor_user']));
    }

    /**
     * Store a new user review.
     *
     * Store a new user review with a `user_id`, `education`, `location`, `organization`, `date`, `is_active`.
     *
     * @Post("/")
     * @Transaction({
     *      @Request({"user_id": 1, "education": "MBBS", "location":"USA", "organization":"Aureus University","date":"2008","is_active":1}),
     *      @Response(200, body={"success": {"name": {"User Review added successfully."}}}),
     *      @Response(422, body={"error": {"name": {"User Review already exist."}}})
     * })
     */
    public function store(Request $request) {
        $user_review_data = $request->only('user_id', 'education', 'location', 'organization', 'date', 'is_active');
        $validator = Validator::make($user_review_data, UserReview::GetValidationRule());
        if ($validator->passes()) {
            $user_review_data['is_active'] = true;
            $user_review = UserReview::create($user_review_data);
            if ($user_review) {
                return response()->json(['Success' => 'User Review has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('User Review could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('User Review could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Show the specified User Review.
     *
     * @Get("/user_reviews?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified user review details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id) {
        $user_review = UserReview::find($id);
        if (!$user_review) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($user_review, (new UserReviewTransformer)->setDefaultIncludes(['User']));
    }

    /**
     * Update User Reviews
     *
     * Update User Reviews with a `id`.
     *
     * @Put("/user_reviews?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id) {
        $user_review_data = $request->only('id', 'user_id', 'education', 'location', 'organization', 'date', 'is_active');
        $validator = Validator::make($user_review_data, UserReview::GetValidationRule());
        $user_review = false;
        if ($request->has('id')) {
            $user_review = UserReview::find($id);
            $user_review = ($request->id != $id) ? false : $user_review;
        }
        if ($validator->passes() && $user_review) {
            try {
                $user_review->update($user_review_data);
                return response()->json(['Success' => 'User Review has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('User Review could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('User Review could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete User Review
     *
     * Delete User Review with a `id`.
     *
     * @Delete("/user_reviews?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id) {
        $user_review = UserReview::find($id);
        if (!$user_review) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $user_review->delete();
        }
        return response()->json(['Success' => 'User Review deleted'], 200);
    }

}
