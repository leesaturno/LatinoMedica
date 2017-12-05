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
use App\InsurancePlan;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\InsurancePlanTransformer;

/**
 * Countries resource representation.
 * @Resource("Admin/AdminCountries")
 */
class InsurancePlansController extends Controller
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
            $limit = InsurancePlan::count();
        } else {
			$limit = 20;
		}
		$avaialble_includes = array('patient');
        $family_friends = InsurancePlan::filterByRequest($request)->paginate($limit);
        return $this->response->paginator($family_friends,  (new InsurancePlanTransformer));
		}catch (\Exception $e) { // I don't remember what exception it is specifically
				throw new \Dingo\Api\Exception\StoreResourceFailedException('InsurancePlan could not be updated. Please, try again.'.$e->getMessage());
		}
    }

	/**
	 * Store a new InsurancePlan.
	 * Store a new InsurancePlan with a 'doctor_id', 'location', 'city_id', 'state_id', 'country_id', 'work_phone_number', 'price', 'is_preferred_location', 'is_active'.
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
		$InsurancePlan_data = $request->only('medical_insurance_id','dental_insurance_id','eye_insurance_id', 'timestamps');		
		$InsurancePlan_data['patient_id'] = $user->id;
		$validator = Validator::make($InsurancePlan_data, InsurancePlan::GetValidationRule(), InsurancePlan::GetValidationMessage());
		if($validator->passes()){
			$InsurancePlan = InsurancePlan::create($InsurancePlan_data);
			if ($InsurancePlan) {
				return response()->json(['Success' => 'InsurancePlan has been added'], 200);
			}else {
				throw new \Dingo\Api\Exception\StoreResourceFailedException('InsurancePlan could not be updated. Please, try again.');
			}
		}else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('InsurancePlan could not be updated. Please, try again.', $validator->errors());
		}
    }

	/**
	 * Edit the specified InsurancePlan.
     * Edit the InsurancePlan with a `id`.
	 * @Get("/workplaces/{id}/edit")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "name": "india", "iso2": "IN", "iso3": "IND", "is_active": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function edit($id)
    {
		$InsurancePlan = InsurancePlan::find($id);
		if(!$InsurancePlan){
			return $this->response->errorNotFound("Invalid Request");
		}
		return $this->response->item($InsurancePlan, new InsurancePlanTransformer);
    }

	/**
     * Update the specified InsurancePlan
     * Update the InsurancePlan with a `id`.
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
		$InsurancePlan_data = $request->only('medical_insurance_id', 'medical_insurance_id','dental_insurance_id','eye_insurance_id', 'timestamps');
		$InsurancePlan_data['patient_id'] = $user->id;
		$validator = Validator::make($InsurancePlan_data, InsurancePlan::GetValidationRule(), InsurancePlan::GetValidationMessage());
		if($validator->passes()){
			try {
				if (InsurancePlan::where('id', $id)->update($InsurancePlan_data)) {
                    return response()->json(['Success' => 'InsurancePlan has been updated'], 200);
                } else {
				    return response()->json(['Success' => 'InsurancePlan could not be updated. Please, try again.'], 200);
                }
			}
			catch (\Exception $e) { // I don't remember what exception it is specifically
				throw new \Dingo\Api\Exception\StoreResourceFailedException('InsurancePlan could not be updated. Please, try again.');
			}
		}else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('InsurancePlan could not be updated. Please, try again.', $validator->errors());
		}
    }

	/**
     * Delete the specified InsurancePlan
     * Delete the InsurancePlan with a `id`.
     * @Delete("/workplaces/{id}")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function destroy($id)
    {
		$InsurancePlan = InsurancePlan::find($id);
		if(!$InsurancePlan){
			return $this->response->errorNotFound("Invalid Request");
		}else{
			$InsurancePlan->delete();
		}
		return response()->json(['Success' => 'InsurancePlan deleted'], 200);
    }
}
