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
use App\Currency;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\CurrencyTransformer;

/**
 * Currencies resource representation.
 * @Resource("Currencies")
 */
class CurrenciesController extends Controller
{
    /**
     * Show all currencies.
     * Get a JSON representation of all the currencies.
     *
     * @Get("/currencies?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the currencies list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the currencies list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort currencies by Ascending / Descending Order.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search currencies.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $currencies = Currency::filterByRequest($request)->get();
        return $this->response->collection($currencies, new CurrencyTransformer);
    }
}
