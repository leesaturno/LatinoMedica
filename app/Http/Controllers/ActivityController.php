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
use App\Activity;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\ActivityTransformer;

/**
 * Cities resource representation.
 * @Resource("Cities")
 */
class ActivityController extends Controller
{
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
    }
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
        try{
            $user = $this->auth->user();
            if ($request->has('is_read') && $request->is_read == '1') {
                $activity_count = Activity::where('other_user_id', '=', $user->id)->where('is_read', 0)->count();
                $result['data']['total_count'] = $activity_count;
                return response()->json($result, 200);
            }
            if ($request->has('limit') && $request->limit == 'all') {
                $limit = FamilyFriend::where('user_id', $user->id)->count();
            } else {
                $limit = 20;
            }
            $avaialble_includes = array('user', 'other_user', 'foreign');
            $activities = Activity::with($avaialble_includes)->where('other_user_id', '=', $user->id)->filterByRequest($request)->paginate($limit);
            return $this->response->paginator($activities,  (new ActivityTransformer)->setDefaultIncludes(
                $avaialble_includes
            ));
		}catch (\Exception $e) { 
			throw new \Dingo\Api\Exception\StoreResourceFailedException('Error: '.$e->getMessage());
		}
    }
    public function update(Request $request)
    {
		$user = $this->auth->user();
		$activity_data['is_read'] = 1;	
		try {				
            if (Activity::where('other_user_id', '=', $user->id)->update($activity_data)) {
                return response()->json(['Success' => 'Activity has been updated'], 200);
            } else {
                return response()->json(['Success' => 'Activity could not be updated. Please, try again.'], 200);
            }
        }
        catch (\Exception $e) {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Activity could not be updated. Please, try again.');
        }
    }
}
