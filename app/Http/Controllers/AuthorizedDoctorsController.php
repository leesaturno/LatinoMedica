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
use App\AuthorizedDoctor;
use App\User;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\AuthorizedDoctorTransformer;

/**
 * Countries resource representation.
 * @Resource("Admin/AdminCountries")
 */
class AuthorizedDoctorsController extends Controller
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
				$limit = AuthorizedDoctor::count();
			} else {
				$limit = 20;
			}
			$avaialble_includes = array('patient');
			$family_friends = AuthorizedDoctor::with($avaialble_includes)->where('patient_id', $user->id)->filterByRequest($request)->paginate($limit);
			return $this->response->paginator($family_friends, (new AuthorizedDoctorTransformer)->setDefaultIncludes(['doctor']));
		}catch (\Exception $e) { // I don't remember what exception it is specifically
				throw new \Dingo\Api\Exception\StoreResourceFailedException('Authorized Doctors could not be updated. Please, try again.'.$e->getMessage());
		}
    }

	/**
	 * Store a new AuthorizedDoctor.
	 * Store a new AuthorizedDoctor with a 'doctor_id', 'location', 'city_id', 'state_id', 'country_id', 'work_phone_number', 'price', 'is_preferred_location', 'is_active'.
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
		$authorizedDoctor_data = $request->only('doctor_id');
		if(isset($request['doctor_id']) && ($request['doctor_id']!='')){
				$search = '%' . $request['doctor_id'] . '%';
				$doctor_data = User::select('id')->where('user_code', 'like', $search)->get()->toArray();
				if(!empty($doctor_data)){
					$AuthorizedDoctor_data['doctor_id'] = $doctor_data[0]['id'];
					$AuthorizedDoctor_data['patient_id'] = $user->id;
					$doctor_exists = AuthorizedDoctor::select('id')->where('patient_id', $AuthorizedDoctor_data['patient_id'])->where('doctor_id', 				$AuthorizedDoctor_data['doctor_id'])->get()->toArray();
					if(empty($doctor_exists)){
						$AuthorizedDoctor = AuthorizedDoctor::create($AuthorizedDoctor_data);
						if ($AuthorizedDoctor) {
							return response()->json(['Success' => 'Authorized Doctors has been added'], 200);
						} else {
							return response()->json(['Failure' => 'Authorized Doctors already added. Please, try again.'], 200);
						}
					} else {
						return response()->json(['Failure' => 'Authorized Doctors could not be added. Please, try again.'], 200);
					}
				} else {
					return response()->json(['Failure' => 'Authorized Doctors could not be added. Please, try again.'], 200);
				}
		} else {
			return response()->json(['Failure' => 'Authorized Doctors could not be added. Please, try again.'], 200);
		}
    }

	/**
     * Delete the specified AuthorizedDoctor
     * Delete the AuthorizedDoctor with a `id`.
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
		$AuthorizedDoctor = AuthorizedDoctor::where('patient_id', $user->id)->where('id', $id)->first();
		if(!$AuthorizedDoctor){
			return $this->response->errorNotFound("Invalid Request");
		}else{
			$AuthorizedDoctor->delete();
		}
		return response()->json(['Success' => 'Authorized Doctors deleted'], 200);
    }
}
