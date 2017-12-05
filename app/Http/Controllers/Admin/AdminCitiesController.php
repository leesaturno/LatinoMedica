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
use App\City;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\CityTransformer;

/**
 * Cities resource representation.
 * @Resource("Admin/AdminCities")
 */
class AdminCitiesController extends Controller
{
    /**
     * AdminCitiesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all cities.
     * Get a JSON representation of all the cities.
     *
     * @Get("/cities?filter={filter}&sort={sort}&sortby={sortby}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the cities list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the cities list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort cities by Ascending / Descending Order.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search Cities.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $cities = City::with('State', 'Country')->filterByRequest($request)->paginate(20);
        return $this->response->paginator($cities, (new CityTransformer)->setDefaultIncludes(['State', 'Country']));
    }

    /**
     * Store a new city.
     * Store a new city with a `name`, `state_id`, `country_id`, `latitude` and `longitude`.
     * @Post("/cities")
     * @Transaction({
     *      @Request({"name": "chennai", "state_id": 1, "country_id": 1, "latitude": 10.10, "longitude": 12.12}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
     * })
     */
    public function store(Request $request)
    {
        $city_data = $request->only('name', 'state_id', 'country_id', 'latitude', 'longitude');
        $validator = Validator::make($city_data, City::GetValidationRule());
        if ($validator->passes()) {
            $city_data['is_active'] = true;
            $city = City::create($city_data);
            if ($city) {
                return response()->json(['Success' => 'City has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('City could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('City could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Edit the specified city.
     * Edit the city with a `id`.
     * @Get("/cities/{id}/edit")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "name": "chennai", "state_id": 1, "country_id": 1, "latitude": 10.10, "longitude": 12.12, "is_active": 1, "State": {}, "Country": {} }),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function edit($id)
    {
        $city = City::find($id);
        if (!$city) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($city, (new CityTransformer)->setDefaultIncludes(['State', 'Country']));
    }

    /**
     * Update the specified city.
     * Update the city with a `id`.
     * @Put("/cities/{id}")
     * @Transaction({
     *      @Request({"id": 1, "name": "chennai", "state_id": 1, "country_id": 1, "latitude": 10.10, "longitude": 12.12, "is_active": 1}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
     * })
     */
    public function update(Request $request, $id)
    {
        $city_data = $request->only('name', 'state_id', 'country_id', 'latitude', 'longitude', 'is_active');
        $validator = Validator::make($city_data, City::GetValidationRule());
        $city = false;
        if ($request->has('id')) {
            $city = City::find($id);
            $city = ($request->id != $id) ? false : $city;
        }
        if ($validator->passes() && $city) {
            try {
                $city->update($city_data);
                return response()->json(['Success' => 'City has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('City could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('City could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete the specified city.
     * Delete the city with a `id`.
     * @Delete("/cities/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function destroy($id)
    {
        $city = City::find($id);
        if (!$city) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $city->delete();
        }
        return response()->json(['Success' => 'City deleted'], 200);
    }
}
