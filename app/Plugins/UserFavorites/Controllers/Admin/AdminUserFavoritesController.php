<?php
/**
 * AgriyaBase - Lumen framework
 * PHP version 5.5.9
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Mugundhan Asokan
 * @email      a.mugundhan@gmail.com
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */

namespace Plugins\UserFavorites\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Plugins\UserFavorites\Model\UserFavorite;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\UserFavorites\Transformers\UserFavoriteTransformer;


class AdminUserFavoritesController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
        $this->middleware('role');
    }
    /**
     * Show all UserReviews
     *
     * Get a JSON representation of all the UserReviews.
     *
     * @Get("/user_reviews?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the user_reviews list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the user_reviews list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user_reviews by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display user_reviews By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search user_reviews.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $mydoctors = UserFavorite::paginate(20);
        return $this->response->paginator($mydoctors, (new UserFavoriteTransformer)->setDefaultIncludes(['user','doctor_user']));
    }
}
