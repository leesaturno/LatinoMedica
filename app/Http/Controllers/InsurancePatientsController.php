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
use App\InsurancePatient;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\InsurancePatientsTransformer;

/**
 * Countries resource representation.
 * @Resource("InsurancePatients")
 */
class InsurancePatientsController extends Controller
{

    /**
     * InsurancePatientsController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
    }

	/**
	 * Show all insurancePatients
	 * Get a JSON representation of all the insurancePatients.
	 *
	 * @Get("/insurancePatients?filter={filter}&sort={sort}&sortby={sortby}&q={q}")
	 * @Parameters({
	 *      @Parameter("filter", type="integer", required=false, description="Filter the insurancePatients list by type.", default=null),
	 *      @Parameter("sort", type="string", required=false, description="Sort the insurancePatients list by sort ley.", default=null),
	 *      @Parameter("sortby", type="string", required=false, description="Sort insurancePatients by Ascending / Descending Order.", default=null),
	 *      @Parameter("q", type="string", required=false, description="Search insurancePatients.", default=null),
	 *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
	 * })
	 */
    public function index(Request $request)
    {
		$user = $this->auth->user();
		if ($request->has('limit') && $request->limit == 'all') {
            $limit = InsurancePatient::where('doctor_id', $user->id)->count();
        } else {
			$limit = 20;
		}
        $insurancePatients = InsurancePatient::filterByRequest($request)->where('doctor_id', $user->id)->paginate($limit);
        return $this->response->paginator($insurancePatients, (new InsurancePatientsTransformer)->setDefaultIncludes(['doctor_profile','insurance']));
    }

	/**
	 * Store a new InsurancePatient.
	 * Store a new InsurancePatient with a 'doctor_id', 'insurance_id', 'allowed_patients'
	 * @Post("/insurancePatients")
	 * @Transaction({
	 *      @Request({"name": "india", "iso2": "IN", "iso3": "IND"}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function store(Request $request)
    {
		$user = $this->auth->user();
		$InsurancePatient_data = $request->only('insurance_id', 'allowed_patients');
		$InsurancePatient_data['doctor_id'] = $user->id;
		$validator = Validator::make($InsurancePatient_data, InsurancePatient::GetValidationRule(), InsurancePatient::GetValidationMessage());
		if($validator->passes()){
			$InsurancePatient = InsurancePatient::create($InsurancePatient_data);
			if ($InsurancePatient) {
				return response()->json(['Success' => 'InsurancePatient has been added'], 200);
			}else {
				throw new \Dingo\Api\Exception\StoreResourceFailedException('InsurancePatient could not be updated. Please, try again.');
			}
		}else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('InsurancePatient could not be updated. Please, try again.', $validator->errors());
		}
    }

	/**
	 * Edit the specified InsurancePatient.
     * Edit the InsurancePatient with a `id`.
	 * @Get("/insurancePatients/{id}/edit")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "name": "india", "iso2": "IN", "iso3": "IND", "is_active": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function edit($id)
    {
		$InsurancePatient = InsurancePatient::find($id);
		if(!$InsurancePatient){
			return $this->response->errorNotFound("Invalid Request");
		}
		return $this->response->item($InsurancePatient, (new InsurancePatientsTransformer)->setDefaultIncludes(['doctor_profile']));
    }

	/**
     * Update the specified InsurancePatient
     * Update the InsurancePatient with a `id`.
     * @Put("/insurancePatients/{id}")
	 * @Transaction({
	 *      @Request({"id": 1, "name": "india", "iso2": "IN", "iso3": "IND", "is_active": 1}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function update(Request $request, $id)
    {
		$InsurancePatient_data = $request->only('doctor_id', 'insurance_id', 'allowed_patients');
		$validator = Validator::make($InsurancePatient_data, InsurancePatient::GetValidationRule(), InsurancePatient::GetValidationMessage());
		if($validator->passes()){
			try {
				if (InsurancePatient::where('id', $id)->update($InsurancePatient_data)) {
                    return response()->json(['Success' => 'InsurancePatient has been updated'], 200);
                } else {
				    return response()->json(['Success' => 'InsurancePatient could not be updated. Please, try again.'], 200);
                }
			}
			catch (\Exception $e) { // I don't remember what exception it is specifically
				throw new \Dingo\Api\Exception\StoreResourceFailedException('InsurancePatient could not be updated. Please, try again.');
			}
		}else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('InsurancePatient could not be updated. Please, try again.', $validator->errors());
		}
    }

	/**
     * Delete the specified InsurancePatient
     * Delete the InsurancePatient with a `id`.
     * @Delete("/insurancePatients/{id}")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function destroy($id)
    {
		$InsurancePatient = InsurancePatient::find($id);
		if(!$InsurancePatient){
			return $this->response->errorNotFound("Invalid Request");
		}else{
			$InsurancePatient->delete();
		}
		return response()->json(['Success' => 'InsurancePatient deleted'], 200);
    }
}
