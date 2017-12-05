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

use App\UserLogin;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\UserLoginTransformer;
use App\Services\UserLoginService;

/**
 * UserLogins resource representation.
 * @Resource("Admin/AdminUserLogins")
 */
class AdminUserLoginsController extends Controller
{
	protected $UserLoginService;
    /**
     * AdminUserLoginsController constructor.
     */
    public function __construct(UserLoginService $user_login_service)
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
        $this->UserLoginService = $user_login_service;
    }

    /**
     * Show all user logins.
     * Get a JSON representation of all the user logins.
     *
     * @Get("/user_logins?sort={sort}&sortby={sortby}")
     * @Parameters({
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1),
     *      @Parameter("sort", type="string", required=false, description="Sort the user logins list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user logins by Ascending / Descending Order.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $user_logins = UserLogin::with('UserLoginIp', 'User', 'Role')->filterByRequest($request)->paginate(20);
        return $this->response->paginator($user_logins, (new UserLoginTransformer)->setDefaultIncludes(['UserLoginIp', 'User', 'Role']));
    }

    /**
     * Show the specified user login.
     * Show the user login with a `id`.
     * @Get("/user_login/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "created_at": "2016-04-15 11:07:42", "user_id": 1, "user_login_ip_id": 4, "role_id": 1, "user_agent": "XXX", "User": {}, "Role": {}}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show($id)
    {
        $user_login = UserLogin::find($id);
        if (!$user_login) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($user_login, (new UserLoginTransformer)->setDefaultIncludes(['UserLoginIp', 'User', 'Role']));
    }

    /**
     * Delete the specified user logins.
     * Delete the user login with a `id`.
     * @Delete("/user_login/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function destroy($id)
    {
        $user_login = UserLogin::find($id);
        if (!$user_login) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $user_login->delete();
            // decrement user login count by 1 in users
            $this->UserLoginService->decreaseUserLoginCount($user_login->user_id);
        }
        return response()->json(['Success' => 'UserLogin deleted'], 200);
    }
}