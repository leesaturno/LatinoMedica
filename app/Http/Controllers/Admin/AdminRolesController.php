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

use App\Role;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\RoleTransformer;

/**
 * Roles resource representation.
 * @Resource("Admin/AdminRoles")
 */
class AdminRolesController extends Controller
{
    /**
     * AdminRolesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all roles
     * Get a JSON representation of all the roles.
     *
     * @Get("/roles?sort={sort}&sortby={sortby}&page={page}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the states list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort states by Ascending / Descending Order.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $roles = Role::filterByRequest($request)->paginate(20);
        return $this->response->paginator($roles, new RoleTransformer);
    }
}