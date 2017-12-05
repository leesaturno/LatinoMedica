<?php

/**
 * User: vijayanand_04ac09
 * Date: 2016-04-06
 * Time: 06:15 PM
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\UserFavorite;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\UserFavoriteTransformer;

/**
 * UserFavorites resource representation.
 *
 * @Resource("States")
 */
class AdminUserFavoritesController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all states
     *
     * Get a JSON representation of all the states.
     *
     * @Get("/states?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the states list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the states list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort states by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display states By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search states.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $favorites = UserFavorite::paginate(20);
        return $this->response->paginator($favorites, (new UserFavoriteTransformer)->setDefaultIncludes(['User']));
    }

}
