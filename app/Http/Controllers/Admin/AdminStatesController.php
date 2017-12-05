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

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\State;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\StateTransformer;


/**
 * States resource representation.
 ** @Resource("Admin/AdminStates")
 */
class AdminStatesController extends Controller
{
    /**
     * AdminStatesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all states
     * Get a JSON representation of all the states.
     *
     * @Get("/states?filter={filter}&sort={sort}&sortby={sortby}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the states list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the states list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort states by Ascending / Descending Order.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search states.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $states = State::filterByRequest($request)->paginate(20);
        return $this->response->paginator($states, (new StateTransformer)->setDefaultIncludes(['Country']));
    }

    /**
     * Store a new state.
     * Store a new state with a `name`, `country_id`.
     * @Post("/states")
     * @Transaction({
     *      @Request({"name": "Tamilnadu", "country_id": 1}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {"validation.required"}}, "status_code": 422})
     * })
     */
    public function store(Request $request)
    {
        $state_data = $request->only('name', 'country_id');
        $validator = Validator::make($state_data, State::GetValidationRule());
        if ($validator->passes()) {
            $state_data['is_active'] = true;
            $state = State::create($state_data);
            if ($state) {
                return response()->json(['Success' => 'State has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('State could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('State could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Edit the specified state.
     * Edit the state with a `id`.
     * @Get("/states/{id}/edit")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "name": "Tamilnadu", "country_id": 1, "is_active": 1, "Country": {"id": 1, "name": "India", "iso2": "IN", "iso3": "IND", "is_active": 1}}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function edit($id)
    {
        $state = State::find($id);
        if (!$state) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($state, (new StateTransformer)->setDefaultIncludes(['Country']));
    }

    /**
     * Update the specified state
     * Update the state with a `id`.
     * @Put("/states/{id}")
     * @Transaction({
     *      @Request({"id": 1, "name": "Tamilnadu", "country_id": 1}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {}, "status_code": 422})
     * })
     */
    public function update(Request $request, $id)
    {
        $state_data = $request->only('id', 'name', 'country_id', 'is_active');
        $validator = Validator::make($state_data, State::GetValidationRule());
        $state = false;
        if ($request->has('id')) {
            $state = State::find($id);
            $state = ($request->id != $id) ? false : $state;
        }
        if ($validator->passes() && $state) {
            try {
                $state->update($state_data);
                return response()->json(['Success' => 'State has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('State could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('State could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete the specified state
     * Delete the state with a `id`.
     * @Delete("/states/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function destroy($id)
    {
        $state = State::find($id);
        if (!$state) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $state->delete();
        }
        return response()->json(['Success' => 'State deleted'], 200);
    }
}
