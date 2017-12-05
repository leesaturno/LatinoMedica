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
use App\Country;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\CountryTransformer;

/**
 * Countries resource representation.
 * @Resource("Countries")
 */
class CountriesController extends Controller
{
    /**
     * CountriesController constructor.
     */
    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        // except for the authenticate method. We don't want to prevent
        // the user from retrieving their token if they don't already have it
        //  $this->middleware('jwt.auth');
    }

    /**
     * Show all countries
     * Get a JSON representation of all the countries.
     * @Get("/countries?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the countries list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $countries = Country::orderBy('name', 'asc')->get();
        return $this->response->collection($countries, new CountryTransformer);
    }

}
