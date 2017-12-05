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
use App\Workplace;
use App\User;
use App\Attachment;

use JWTAuth;
use Validator, File, Image;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\WorkplaceTransformer;
use App\Transformers\BadgesTransformer;

/**
 * Countries resource representation.
 * @Resource("Badges")
 */
class BadgesController extends Controller
{

    /**
     * BadgesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
    }

	/**
	 * Show all Badges
	 * Get a JSON representation of all the Badges.
	 *
	 * @Get("/Badges?filter={filter}&sort={sort}&sortby={sortby}&q={q}")
	 * @Parameters({
	 *      @Parameter("filter", type="integer", required=false, description="Filter the Badges list by type.", default=null),
	 *      @Parameter("sort", type="string", required=false, description="Sort the Badges list by sort ley.", default=null),
	 *      @Parameter("sortby", type="string", required=false, description="Sort Badges by Ascending / Descending Order.", default=null),
	 *      @Parameter("q", type="string", required=false, description="Search Badges.", default=null),
	 *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
	 * })
	 */
    public function index(Request $request)
    {
        $user = $this->auth->user();
        $dir = 'app/Badge/'. $user->id . '/';
        $curuser = Attachment::where('dir', $dir)->get();
        return $this->response->collection($curuser, new BadgesTransformer);
    }
}
