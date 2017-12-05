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
use App\FindDoctor;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\FindDoctorTransformer;

/**
 * Countries resource representation.
 * @Resource("Admin/AdminCountries")
 */
class FindDoctorsController extends Controller
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
            $limit = FindDoctor::where('user_id', $user->id)->count();
        } else {
			$limit = 20;
		}
		$avaialble_includes = array('city', 'specialty','user');
        $find_doctors = FindDoctor::with($avaialble_includes)->where('user_id', '=', $user->id)->filterByRequest($request)->paginate($limit);
        return $this->response->paginator($find_doctors,  (new FindDoctorTransformer)->setDefaultIncludes(
			$avaialble_includes
		));
		}catch (\Exception $e) { // I don't remember what exception it is specifically
				throw new \Dingo\Api\Exception\StoreResourceFailedException('FindDoctor could not be updated. Please, try again.'.$e->getMessage());
		}
    }

	/**
	 * Store a new FindDoctor.
	 * Store a new FindDoctor with a  'city_id', 'specialty_id'.
	 * @Post("/workplaces")
	 * @Transaction({
	 *      @Request({"name": "india", "iso2": "IN", "iso3": "IND"}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function store(Request $request)
    {
		$user = $this->auth->user();
		if (!empty($user)) {
			$FindDoctor_data = $request->only('city_id', 'specialty_id');		
			$FindDoctor_data['user_id'] = $user->id;
			$validator = Validator::make($FindDoctor_data, FindDoctor::GetValidationRule(), FindDoctor::GetValidationMessage());
			if($validator->passes()){
				$FindDoctor = FindDoctor::create($FindDoctor_data);
				if ($FindDoctor) {
					return response()->json(['Success' => 'FindDoctor has been added','id' => $FindDoctor->id], 200);
				}else {
					throw new \Dingo\Api\Exception\StoreResourceFailedException('FindDoctor could not be updated. Please, try again.');
				}
			}else {
				throw new \Dingo\Api\Exception\StoreResourceFailedException('FindDoctor could not be updated. Please, try again.', $validator->errors());
			}
		} else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('Invalid user');
		}		
    }

	/**
	 * Edit the specified FindDoctor.
     * Edit the FindDoctor with a `id`.
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
		$FindDoctor = FindDoctor::where('user_id', '=', $user->id)->where('id', '=', $id)->first();
		if(!$FindDoctor){
			return $this->response->errorNotFound("Invalid Request");
		}
		return $this->response->item($FindDoctor, new FindDoctorTransformer);
    }

	/**
     * Update the specified FindDoctor
     * Update the FindDoctor with a `id`.
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
		$FindDoctor_data = $request->only('city_id', 'specialty_id');	
		$validator = Validator::make($FindDoctor_data, FindDoctor::GetValidationRule(), FindDoctor::GetValidationMessage());
		if($validator->passes()){
			try {				
				if (FindDoctor::where('user_id', '=', $user->id)->where('id', $id)->update($FindDoctor_data)) {
                    return response()->json(['Success' => 'FindDoctor has been updated'], 200);
                } else {
				    return response()->json(['Success' => 'FindDoctor could not be updated. Please, try again.'], 200);
                }
			}
			catch (\Exception $e) { // I don't remember what exception it is specifically
				throw new \Dingo\Api\Exception\StoreResourceFailedException('FindDoctor could not be updated. Please, try again.');
			}
		}else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('FindDoctor could not be updated. Please, try again.', $validator->errors());
		}
    }

	/**
     * Delete the specified FindDoctor
     * Delete the FindDoctor with a `id`.
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
		$FindDoctor = FindDoctor::where('user_id', '=', $user->id)->where('id', '=', $id)->first();
		if(!$FindDoctor){
			return $this->response->errorNotFound("Invalid Request");
		}else{
			$FindDoctor->delete();
		}
		return response()->json(['Success' => 'FindDoctor deleted'], 200);
    }
}
