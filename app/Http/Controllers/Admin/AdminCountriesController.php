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
use App\Country;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\CountryTransformer;

/**
 * Countries resource representation.
 * @Resource("Admin/AdminCountries")
 */
class AdminCountriesController extends Controller
{

    /**
     * AdminCountriesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

	/**
	 * Show all countries
	 * Get a JSON representation of all the countries.
	 *
	 * @Get("/countries?filter={filter}&sort={sort}&sortby={sortby}&q={q}")
	 * @Parameters({
	 *      @Parameter("filter", type="integer", required=false, description="Filter the countries list by type.", default=null),
	 *      @Parameter("sort", type="string", required=false, description="Sort the countries list by sort ley.", default=null),
	 *      @Parameter("sortby", type="string", required=false, description="Sort countries by Ascending / Descending Order.", default=null),
	 *      @Parameter("q", type="string", required=false, description="Search countries.", default=null),
	 *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
	 * })
	 */
    public function index(Request $request)
    {
        //$countries = Country::filterByRequest($request)->paginate(20);
		//return $this->response->paginator($countries, new CountryTransformer);
		if ($request->has('limit') && $request->limit == 'all') {
            $limit = Country::count();
        } else {
			$limit = 20;
		}
        $countries = Country::filterByRequest($request)->paginate($limit);
        return $this->response->paginator($countries, new CountryTransformer);
    }

	/**
	 * Store a new country.
	 * Store a new country with a `name`, `iso2`, and `iso3`.
	 * @Post("/countries")
	 * @Transaction({
	 *      @Request({"name": "india", "iso2": "IN", "iso3": "IND"}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function store(Request $request)
    {
		$country_data = $request->only('name', 'iso2', 'iso3');
		$validator = Validator::make($country_data, Country::GetValidationRule());
		if($validator->passes()){
			$country_data['is_active'] = true;
			$country = Country::create($country_data);
			if ($country) {
				return response()->json(['Success' => 'Country has been added'], 200);
			}else {
				throw new \Dingo\Api\Exception\StoreResourceFailedException('Country could not be updated. Please, try again.');
			}
		}else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('Country could not be updated. Please, try again.', $validator->errors());
		}
    }

	/**
	 * Edit the specified country.
     * Edit the country with a `id`.
	 * @Get("/countries/{id}/edit")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "name": "india", "iso2": "IN", "iso3": "IND", "is_active": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function edit($id)
    {
		$country = Country::find($id);
		if(!$country){
			return $this->response->errorNotFound("Invalid Request");
		}
		return $this->response->item($country, new CountryTransformer);
    }

	/**
     * Update the specified country
     * Update the country with a `id`.
     * @Put("/countries/{id}")
	 * @Transaction({
	 *      @Request({"id": 1, "name": "india", "iso2": "IN", "iso3": "IND", "is_active": 1}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function update(Request $request, $id)
    {
		$country_data = $request->only('name', 'iso2', 'iso3', 'is_active');
		$validator = Validator::make($country_data, Country::GetValidationRule());
		$country = false;
		if ($request->has('id')) {
			$country = Country::find($id);
			$country = ($request->id != $id)? false : $country;
		}
		if($validator->passes() && $country){
			try {
				$country->update($country_data);
				return response()->json(['Success' => 'Country has been updated'], 200);
			}
			catch (\Exception $e) { // I don't remember what exception it is specifically
				throw new \Dingo\Api\Exception\StoreResourceFailedException('Country could not be updated. Please, try again.');
			}
		}else {
			throw new \Dingo\Api\Exception\StoreResourceFailedException('Country could not be updated. Please, try again.', $validator->errors());
		}
    }

	/**
     * Delete the specified country
     * Delete the country with a `id`.
     * @Delete("/countries/{id}")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function destroy($id)
    {
		$country = Country::find($id);
		if(!$country){
			return $this->response->errorNotFound("Invalid Request");
		}else{
			$country->delete();
		}
		return response()->json(['Success' => 'Country deleted'], 200);
    }
}
