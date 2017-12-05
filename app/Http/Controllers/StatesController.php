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
use App\State;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\StateTransformer;

/**
 * States resource representation.
 * @Resource("States")
 */
class StatesController extends Controller
{
    /**
     * Show all states.
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
        $states = State::filterByRequest($request)->get();
        return $this->response->collection($states, new StateTransformer);
    }
}
