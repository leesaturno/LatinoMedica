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
use App\Reminder;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\ReminderTransformer;

/**
 * Countries resource representation.
 * @Resource("Admin/AdminCountries")
 */
class RemindersController extends Controller
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
        //$workplaces = Reminder::filterByRequest($request)->paginate(20);
		//return $this->response->paginator($workplaces, new ReminderTransformer);
		if ($request->has('limit') && $request->limit == 'all') {
            $limit = Reminder::count();
        } else {
			$limit = 20;
		}
        $workplaces = Reminder::filterByRequest($request)->paginate($limit);
        return $this->response->paginator($workplaces, new ReminderTransformer);
    }

	/**
	 * Store a new Reminder.
	 * Store a new Reminder with a 'doctor_id', 'location', 'city_id', 'state_id', 'country_id', 'work_phone_number', 'price', 'is_preferred_location', 'is_active'.
	 * @Post("/workplaces")
	 * @Transaction({
	 *      @Request({"name": "india", "iso2": "IN", "iso3": "IND"}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function store(Request $request)
    {
		$Reminder_data = $request->only('doctor_id', 'patient_id', 'reminder_text', 'remind_on');
		$validator = Validator::make($Reminder_data, Reminder::GetValidationRule(), Reminder::GetValidationMessage());
		if($validator->passes()){
			$Reminder_data['is_active'] = true;
			$Reminder = Reminder::create($Reminder_data);
			if ($Reminder) {
				return response()->json(['Success' => 'Reminder has been added'], 200);
			}else {
				throw new \Dingo\Api\Exception\StoreResourceFailedException('Reminder could not be updated. Please, try again.');
			}
		}else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('Reminder could not be updated. Please, try again.', $validator->errors());
		}
    }

	/**
	 * Edit the specified Reminder.
     * Edit the Reminder with a `id`.
	 * @Get("/workplaces/{id}/edit")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "name": "india", "iso2": "IN", "iso3": "IND", "is_active": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function edit($id)
    {
		$Reminder = Reminder::find($id);
		if(!$Reminder){
			return $this->response->errorNotFound("Invalid Request");
		}
		return $this->response->item($Reminder, new ReminderTransformer);
    }

	/**
     * Update the specified Reminder
     * Update the Reminder with a `id`.
     * @Put("/workplaces/{id}")
	 * @Transaction({
	 *      @Request({"id": 1, "name": "india", "iso2": "IN", "iso3": "IND", "is_active": 1}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function update(Request $request, $id)
    {
		$Reminder_data = $request->only('doctor_id', 'patient_id', 'reminder_text', 'remind_on');
		$validator = Validator::make($Reminder_data, Reminder::GetValidationRule(), Reminder::GetValidationMessage());
		if($validator->passes()){
			try {
				if (Reminder::where('id', $id)->update($Reminder_data)) {
                    return response()->json(['Success' => 'Reminder has been updated'], 200);
                } else {
				    return response()->json(['Success' => 'Reminder could not be updated. Please, try again.'], 200);
                }
			}
			catch (\Exception $e) { // I don't remember what exception it is specifically
                echo $e->getMessage();die;
				throw new \Dingo\Api\Exception\StoreResourceFailedException('Reminder could not be updated. Please, try again.');
			}
		}else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('Reminder could not be updated. Please, try again.', $validator->errors());
		}
    }

	/**
     * Delete the specified Reminder
     * Delete the Reminder with a `id`.
     * @Delete("/workplaces/{id}")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function destroy($id)
    {
		$Reminder = Reminder::find($id);
		if(!$Reminder){
			return $this->response->errorNotFound("Invalid Request");
		}else{
			$Reminder->delete();
		}
		return response()->json(['Success' => 'Reminder deleted'], 200);
    }
}
