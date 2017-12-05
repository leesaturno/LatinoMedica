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

use App\Ip;

use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\IpTransformer;

/**
 * Ips resource representation.
 * @Resource("Admin/AdminIps")
 */
class AdminIpsController extends Controller
{
    /**
     * AdminIpsController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all Ips
     * Get a JSON representation of all the Ips.
     *
     * @Get("/ips?sort={sort}&sortby={sortby}&page={page}&q={q}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the states list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort states by Ascending / Descending Order.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search Ips.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $ips = Ip::with('City', 'State', 'Country')->filterByRequest($request)->paginate(20);
        return $this->response->paginator($ips, (new IpTransformer)->setDefaultIncludes(['City', 'State', 'Country']));
    }

    /**
     * Show the specified ip.
     * Show the ip with a `id`.
     * @Get("/ips/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body= {"id": 1, "city_id": 1, "state_id": 1, "country_id": 1, "ip": "::1", "latitude": 0, "longitude": 0, "City": {}, "State": {}, "Country": {}}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show($id)
    {
        $ips = Ip::find($id);
        if(!$ips){
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($ips, (new IpTransformer));
    }

    /**
     * Delete the specified ip.
     * Delete the ip with a `id`.
     * @Delete("/ips/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function destroy($id)
    {
        $ips = Ip::find($id);
        if(!$ips){
            return $this->response->errorNotFound("Invalid Request");
        }else{
            $ips->delete();
        }
        return response()->json(['Success' => 'Ip deleted'], 200);
    }
}