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
use App\Workplace;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\WorkplaceTransformer;
use App\Services\UserProfileService;
use App\Services\AppointmentSettingsService;

/**
 * Countries resource representation.
 * @Resource("Admin/AdminCountries")
 */
class WorkplacesController extends Controller
{
	
	/**
     * @var AppointmentSettings
     */
    protected $AppointmentSettingsService;

    /**
     * AdminCountriesController constructor.
     */
    public function __construct(AppointmentSettingsService $appointment_settings_service)
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
		$this->UserProfileService = new UserProfileService;
		$this->AppointmentSettingsService = $appointment_settings_service;
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
		$user = $this->auth->user();
		if ($request->has('limit') && $request->limit == 'all') {
            $limit = Workplace::where('doctor_id', '=', $user->id)->count();
        } else {
			$limit = 20;
		}
        $workplaces = Workplace::where('doctor_id', '=', $user->id)->filterByRequest($request)->paginate($limit);
        return $this->response->paginator($workplaces, new WorkplaceTransformer);
    }

	/**
	 * Store a new Workplace.
	 * Store a new Workplace with a 'doctor_id', 'location', 'city_id', 'state_id', 'country_id', 'work_phone_number', 'price', 'is_preferred_location', 'is_active'.
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
		if($user['role_id'] == config('constants.ConstUserTypes.Doctor')){
			$Workplace_data = $request->only('city_id', 'state_id', 'country_id', 'work_phone_number', 'price', 'is_preferred_location', 'is_active', 'address', 'postal_code','location', 'address1');
			if (!empty($Workplace_data['is_preferred_location'])) {
				Workplace::where('doctor_id', '=', $user->id)->update(['is_preferred_location' => 0]);
			}
			$Workplace_data['doctor_id'] = $user->id;
			$validator = Validator::make($Workplace_data, Workplace::GetValidationRule(), Workplace::GetValidationMessage());
			if($validator->passes()){
				$city_name = $this->UserProfileService->findGetCityId($Workplace_data['city_id']);
				$country_name= $this->UserProfileService->findGetCountryId($Workplace_data['country_id']);
				//$location = $Workplace_data['address']." ".$city_name." ".$country_name." ".$Workplace_data['postal_code'];
				$location = $Workplace_data['address1'];
				$latlon = $this->UserProfileService->getLatitudeLongtitude($location);
				//$Workplace_data['location'] = $location;
				$latlon = explode(',',$latlon);
				$Workplace_data['latitude'] = isset($latlon[0]) ? $latlon[0] : 0;
				$Workplace_data['longitude'] = isset($latlon[1]) ? $latlon[1] : 0;
				unset($Workplace_data['address']);
				unset($Workplace_data['postal_code']);
				$Workplace = Workplace::create($Workplace_data);
				if ($Workplace) {
					$appointment_settings_data['user_id'] = $user->id;
                    $appointment_settings_data['is_active'] = 0;
					$appointment_settings_data['work_place_id'] = $Workplace->id;
					$appointment_settings = $this->AppointmentSettingsService->save_appointment_settings($appointment_settings_data);
                    $appointment_settings->save();
					if ($Workplace->is_preferred_location && $Workplace->is_active) {
						Workplace::where('id', '!=', $Workplace->id)->where('doctor_id', '=', $user->id)->update(['is_preferred_location' => 0]);
					}
					return response()->json(['Success' => 'Workplace has been added'], 200);
				} else {
					throw new \Dingo\Api\Exception\StoreResourceFailedException('Workplace could not be Added. Please, try again.');
				}
			} else {
				throw new \Dingo\Api\Exception\StoreResourceFailedException('Workplace could not be Added. Please, try again.', $validator->errors());
			}
		} else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('Access Denied, Workplace could not be Added. Please, try again.');
		}
    }

	/**
	 * Edit the specified Workplace.
     * Edit the Workplace with a `id`.
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
		$Workplace = Workplace::where('doctor_id', '=', $user->id)->where('id', '=', $id)->first();
		if(!$Workplace){
			return response()->json(['Failed' => 'Invalid Workplace ID']);
		}
		return $this->response->item($Workplace, new WorkplaceTransformer);
    }

	/**
     * Update the specified Workplace
     * Update the Workplace with a `id`.
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
		if($user['role_id'] == config('constants.ConstUserTypes.Doctor')){
			$Workplace_data = $request->only('city_id', 'state_id', 'country_id', 'work_phone_number', 'price', 'is_preferred_location', 'is_active', 'address', 'postal_code','location', 'address1');
			$Workplace_data['doctor_id'] = $user->id;
			$validator = Validator::make($Workplace_data, Workplace::GetValidationRule(), Workplace::GetValidationMessage());
			if($validator->passes()){
				try {
					$city_name = $this->UserProfileService->findGetCityId($Workplace_data['city_id']);
					$country_name= $this->UserProfileService->findGetCountryId($Workplace_data['country_id']);
					//$location = $Workplace_data['address']." ".$city_name." ".$country_name." ".$Workplace_data['postal_code'];
					$location = $Workplace_data['address1'];
					$latlon = $this->UserProfileService->getLatitudeLongtitude($location);
					//$Workplace_data['location'] = $location;
					$latlon = explode(',',$latlon);
					$Workplace_data['latitude'] = isset($latlon[0]) ? $latlon[0] : 0;
					$Workplace_data['longitude'] = isset($latlon[1]) ? $latlon[1] : 0;
					unset($Workplace_data['address']);
					unset($Workplace_data['postal_code']);
					if (Workplace::where('doctor_id', '=', $user->id)->where('id', $id)->update($Workplace_data)) {
						if ($Workplace_data['is_preferred_location']) {
							Workplace::where('id', '!=', $id)->where('doctor_id', '=', $user->id)->update(['is_preferred_location' => 0]);
						}
						return response()->json(['Success' => 'Workplace has been updated'], 200);
					} else {
						return response()->json(['Success' => 'Workplace could not be updated. Please, try again.'], 200);
					}
				}
				catch (\Exception $e) { // I don't remember what exception it is specifically
					throw new \Dingo\Api\Exception\StoreResourceFailedException('Workplace could not be updated. Please, try again.');
				}
			} else {
				throw new \Dingo\Api\Exception\StoreResourceFailedException('Workplace could not be updated. Please, try again.', $validator->errors());
			}
		} else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('Access Denied, Workplace could not be updated. Please, try again.');
		}
    }

	/**
     * Delete the specified Workplace
     * Delete the Workplace with a `id`.
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
		$Workplace = Workplace::where('doctor_id', '=', $user->id)->where('id', '=', $id)->first();
		if(!$Workplace){
			return $this->response->errorNotFound("Invalid Request");
		}else{
			$Workplace->delete();
		}
		return response()->json(['Success' => 'Workplace deleted'], 200);
    }
}
