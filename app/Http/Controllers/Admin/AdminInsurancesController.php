<?php
/**
 * Abs - Lumen framework
 *
 * PHP version 5.5.9
 *
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Mugundhan. A (mugundhan_352at15)
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Insurance;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\InsuranceTransformer;

/**
 * Contacts resource representation.
 * @Resource("InsuranceCompanies")
 */
 
class AdminInsurancesController extends Controller
{
     
    /**
     * AdminCitiesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
    }
    /**
     * Show all insurance companies
     * Get a JSON representation of all the insurance companies.
     * @Get("/insurance_companies?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the insurance companies list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $insurances = Insurance::filterByRequest($request)->paginate(20);
        return $this->response->paginator($insurances, (new InsuranceTransformer));
    }
    /**
     * Store a new insurance.
     * Store a new insurance with a `name`, `state_id`, `country_id`, `latitude` and `longitude`.
     * @Post("/cities")
     * @Transaction({
     *      @Request({"name": "chennai", "state_id": 1, "country_id": 1, "latitude": 10.10, "longitude": 12.12}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
     * })
     */
    public function store(Request $request)
    {
        $insurance_data = $request->only('name', 'is_active');
        $validator = Validator::make($insurance_data, Insurance::GetValidationRule());
        if ($validator->passes()) {
            $insurance_data['is_active'] = true;
            $insurance = Insurance::create($insurance_data);
            if ($insurance) {
                return response()->json(['Success' => 'Insurance has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Insurance could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Insurance could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Edit the specified insurance.
     * Edit the insurance with a `id`.
     * @Get("/cities/{id}/edit")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "name": "chennai", "state_id": 1, "country_id": 1, "latitude": 10.10, "longitude": 12.12, "is_active": 1, "State": {}, "Country": {} }),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function edit($id)
    {
        $insurance = Insurance::find($id);
        if (!$insurance) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($insurance, (new InsuranceTransformer));
    }

    /**
     * Update the specified insurance.
     * Update the insurance with a `id`.
     * @Put("/cities/{id}")
     * @Transaction({
     *      @Request({"id": 1, "name": "chennai", "state_id": 1, "country_id": 1, "latitude": 10.10, "longitude": 12.12, "is_active": 1}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
     * })
     */
    public function update(Request $request, $id)
    {
        $insurance_data = $request->only('name', 'is_active');
        $validator = Validator::make($insurance_data, Insurance::GetValidationRule());
        $insurance = false;
        if ($request->has('id')) {
            $insurance = Insurance::find($id);
            $insurance = ($request->id != $id) ? false : $insurance;
        }
        if ($validator->passes() && $insurance) {
            try {
                $insurance->update($insurance_data);
                return response()->json(['Success' => 'Insurance has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Insurance could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Insurance could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete the specified insurance.
     * Delete the insurance with a `id`.
     * @Delete("/cities/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function destroy($id)
    {
        $insurance = Insurance::find($id);
        if (!$insurance) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $insurance->delete();
        }
        return response()->json(['Success' => 'Insurance deleted'], 200);
    }
}