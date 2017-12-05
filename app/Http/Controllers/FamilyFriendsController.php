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
use App\FamilyFriend;

use JWTAuth;
use Validator,DateTime;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\FamilyFriendTransformer;

/**
 * Countries resource representation.
 * @Resource("Admin/AdminCountries")
 */
class FamilyFriendsController extends Controller
{

    /**
     * AdminCountriesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
    }

	/**
	 * Show all workplaces
	 * Get a JSON representation of all the workplaces.
	 *
	 * @Get("/workplaces?filter={filter}&sort={sort}&sortby={sortby}&q={q}")
	 * @Parameters({
	 *      @Parameter("filter", type="integer", required=false, description="Filter the workplaces list by type.", default=null),
	 *      @Parameter("sort", type="string", required=false, description="Sort the workplaces list by sort ley.", default=null),
	 *      @Parameter("sortby", type="string", required=false, description="Sort workplaces by Ascending / Descending Order.", default=null),
	 *      @Parameter("q", type="string", required=false, description="Search workplaces.", default=null),
	 *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
	 * })
	 */
    public function index(Request $request)
    {		
		try{
		$user = $this->auth->user();
		if ($request->has('limit') && $request->limit == 'all') {
            $limit = FamilyFriend::where('user_id', $user->id)->count();
        } else {
			$limit = 20;
		}
		$avaialble_includes = array('city', 'state','user','gender');
        $family_friends = FamilyFriend::with($avaialble_includes)->where('user_id', '=', $user->id)->where('is_active', '=', true)->filterByRequest($request)->paginate($limit);
        return $this->response->paginator($family_friends,  (new FamilyFriendTransformer)->setDefaultIncludes(
			$avaialble_includes
		));
		}catch (\Exception $e) { // I don't remember what exception it is specifically
				throw new \Dingo\Api\Exception\StoreResourceFailedException('FamilyFriend could not be updated. Please, try again.'.$e->getMessage());
		}
    }

	/**
	 * Store a new FamilyFriend.
	 * Store a new FamilyFriend with a 'doctor_id', 'location', 'city_id', 'state_id', 'country_id', 'work_phone_number', 'price', 'is_preferred_location', 'is_active'.
	 * @Post("/workplaces")
	 * @Transaction({
	 *      @Request({"name": "india", "iso2": "IN", "iso3": "IND"}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function store(Request $request)
    {
		$user = $this->auth->user();
		if (!empty($user)) {
			$FamilyFriend_data = $request->only('first_name', 'last_name', 'relationship','email', 'gender_id', 'mobile', 'home_phone', 'work_phone', 'address', 'address1', 'city_id', 'state_id', 'country_id', 'zipcode', 'dob');		
			$FamilyFriend_data['user_id'] = $user->id;
			$validator = Validator::make($FamilyFriend_data, FamilyFriend::GetValidationRule(), FamilyFriend::GetValidationMessage());
			if($validator->passes()){
				if ($request->has('dob')) {
					$from = new DateTime($request->dob);
					$to   = new DateTime('today');
					$FamilyFriend_data['age'] = $from->diff($to)->y;
				}
				$FamilyFriend = FamilyFriend::create($FamilyFriend_data);
				if ($FamilyFriend) {
					return response()->json(['Success' => 'FamilyFriend has been added','id' => $FamilyFriend->id], 200);
				}else {
					throw new \Dingo\Api\Exception\StoreResourceFailedException('FamilyFriend could not be updated. Please, try again.');
				}
			}else {
				throw new \Dingo\Api\Exception\StoreResourceFailedException('FamilyFriend could not be updated. Please, try again.', $validator->errors());
			}
		} else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('Invalid user');
		}		
    }

	/**
	 * Edit the specified FamilyFriend.
     * Edit the FamilyFriend with a `id`.
	 * @Get("/workplaces/{id}/edit")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "name": "india", "iso2": "IN", "iso3": "IND", "is_active": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function edit($id)
    {
		$user = $this->auth->user();
		$FamilyFriend = FamilyFriend::where('user_id', '=', $user->id)->where('id', '=', $id)->first();
		if(!$FamilyFriend){
			return $this->response->errorNotFound("Invalid Request");
		}
		return $this->response->item($FamilyFriend, new FamilyFriendTransformer);
    }

	/**
     * Update the specified FamilyFriend
     * Update the FamilyFriend with a `id`.
     * @Put("/workplaces/{id}")
	 * @Transaction({
	 *      @Request({"id": 1, "name": "india", "iso2": "IN", "iso3": "IND", "is_active": 1}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function update(Request $request, $id)
    {
		$user = $this->auth->user();
		$FamilyFriend_data = $request->only('first_name', 'last_name', 'relationship','email', 'gender_id', 'mobile', 'home_phone', 'work_phone', 'address', 'address1', 'city_id', 'state_id', 'country_id', 'zipcode', 'dob');		
		$validator = Validator::make($FamilyFriend_data, FamilyFriend::GetValidationRule(), FamilyFriend::GetValidationMessage());
		if($validator->passes()){
			try {
				if ($request->has('dob')) {
					$from = new DateTime($request->dob);
					$to   = new DateTime('today');
					$FamilyFriend_data['age'] = $from->diff($to)->y;
				}
				if (FamilyFriend::where('user_id', '=', $user->id)->where('id', $id)->update($FamilyFriend_data)) {
                    return response()->json(['Success' => 'FamilyFriend has been updated'], 200);
                } else {
				    return response()->json(['Success' => 'FamilyFriend could not be updated. Please, try again.'], 200);
                }
			}
			catch (\Exception $e) { // I don't remember what exception it is specifically
				throw new \Dingo\Api\Exception\StoreResourceFailedException('FamilyFriend could not be updated. Please, try again.');
			}
		}else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('FamilyFriend could not be updated. Please, try again.', $validator->errors());
		}
    }

	/**
     * Delete the specified FamilyFriend
     * Delete the FamilyFriend with a `id`.
     * @Delete("/workplaces/{id}")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function destroy($id)
    {
		$user = $this->auth->user();
		$FamilyFriend = FamilyFriend::where('user_id', '=', $user->id)->where('id', '=', $id)->first();
		if(!$FamilyFriend){
			return $this->response->errorNotFound("Invalid Request");
		}else{
			$FamilyFriend->is_active = 0;
			$FamilyFriend->update();
		}
		return response()->json(['Success' => 'FamilyFriend deleted'], 200);
    }
}
