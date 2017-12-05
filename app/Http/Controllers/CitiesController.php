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
use App\City;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\CityTransformer;

/**
 * Cities resource representation.
 * @Resource("Cities")
 */
class CitiesController extends Controller
{
    /**
     * Show all cities
     * Get a JSON representation of all the cities.
	 *
     * @Get("/cities?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the cities list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $cities = City::filterByRequest($request)->get();
        return $this->response->collection($cities, new CityTransformer);
    }
}
