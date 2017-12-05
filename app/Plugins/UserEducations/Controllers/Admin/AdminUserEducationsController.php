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

namespace Plugins\UserEducations\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Plugins\UserEducations\Model\UserEducation;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\UserEducations\Transformers\UserEducationTransformer;

/**
 * UserEducations resource representation.
 *
 * @Resource("UserEudcations")
 */
class AdminUserEducationsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        
    }

    /**
     * Show all UserEducations
     *
     * Get a JSON representation of all the UserEducations.
     *
     * @Get("/user_educations?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the user educations list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the user educations list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user educations by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display user educations By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search user educations.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $user_education = UserEducation::filterByRequest($request)->paginate(20);
        return $this->response->paginator($user_education, (new UserEducationTransformer)->setDefaultIncludes(['User']));
    }

    /**
     * Store a new user education.
     *
     * Store a new user education with a `user_id`, `education`, `location`, `organization`, `date`, `is_active`.
     *
     * @Post("/")
     * @Transaction({
     *      @Request({"user_id": 1, "education": "MBBS", "location":"USA", "organization":"Aureus University","date":"2008","is_active":1}),
     *      @Response(200, body={"success": {"name": {"User Education added successfully."}}}),
     *      @Response(422, body={"error": {"name": {"User Education already exist."}}})
     * })
     */
    public function store(Request $request) {
        $user_education_data = $request->only('user_id', 'education', 'location', 'organization', 'date', 'is_active');
        $validator = Validator::make($user_education_data, UserEducation::GetValidationRule());
        if ($validator->passes()) {
            $user_education_data['is_active'] = true;
            $user_education = UserEducation::create($user_education_data);
            if ($user_education) {
                return response()->json(['Success' => 'User Education has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('User Education could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('User Education could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Show the specified User Education.
     *
     * @Get("/user_educations?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified user education details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id) {
        $user_education = UserEducation::find($id);
        if (!$user_education) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($user_education, (new UserEducationTransformer)->setDefaultIncludes(['User']));
    }

    /**
     * Update User Educations
     *
     * Update User Educations with a `id`.
     *
     * @Put("/uyser_educations?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id) {
        $user_education_data = $request->only('id', 'user_id', 'education', 'location', 'organization', 'date', 'is_active');
        $validator = Validator::make($user_education_data, UserEducation::GetValidationRule());
        $user_education = false;
        if ($request->has('id')) {
            $user_education = UserEducation::find($id);
            $user_education = ($request->id != $id) ? false : $user_education;
        }
        if ($validator->passes() && $user_education) {
            try {
                $user_education->update($user_education_data);
                return response()->json(['Success' => 'User Education has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('User Education could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('User Education could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete User Education
     *
     * Delete User Education with a `id`.
     *
     * @Delete("/user_educations?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id) {
        $user_education = UserEducation::find($id);
        if (!$user_education) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $user_education->delete();
        }
        return response()->json(['Success' => 'User Education deleted'], 200);
    }

}
