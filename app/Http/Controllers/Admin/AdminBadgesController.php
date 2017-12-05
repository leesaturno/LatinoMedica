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
use App\Badges;
use App\User;
use App\Attachment;

use JWTAuth;
use Validator, File, Image;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\BadgesTransformer;

/**
 * Countries resource representation.
 * @Resource("Badges")
 */
class AdminBadgesController extends Controller
{

    /**
     * AdminBadgesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
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
        $dir = 'app/Badge/%';
        if ($request->has('user_id')) {
            $dir = 'app/Badge/'. $request->input('user_id') . '/';
        }
        $badge = Attachment::where('dir', 'like', $dir)->paginate(20);
        return $this->response->paginator($badge, new BadgesTransformer);
    }

	/**
	 * Store a new Badges.
	 * Store a new Badges with a 'doctor_id', 'location', 'city_id', 'state_id', 'country_id', 'work_phone_number', 'price', 'is_preferred_location', 'is_active'.
	 * @Post("/Badges")
	 * @Transaction({
	 *      @Request({"name": "india", "iso2": "IN", "iso3": "IND"}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function store(Request $request)
    {
		$badge_data = $request->only('badgeimg', 'user_id');
        $user_id = $request->input('user_id');
        if (!empty($user_id)) {
            $badgeimg = $badge_data['badgeimg'];
            if(!empty($badgeimg)){
                $path = storage_path('app/Badge/' . $user_id . '/');
                if (!File::isDirectory($path)) {
                    File::makeDirectory($path, 0777, true);
                }
                $imageName = md5(microtime()).'.jpg';
                $path = storage_path('app/Badge/' . $user_id . '/' .$imageName);
                if (file_put_contents($path, base64_decode(preg_replace('#data:image/[^;]+;base64,#', '', $badgeimg)))) {
                    $curuser = User::with(['attachments'])->where('id', '=', $user_id)->first();
                    $attachment = array();
                    $attachment['filename'] = $imageName;
                    $attachment['dir'] = 'app/Badge/' . $user_id . '/';
                    $attachment['mimetype'] = 'image/jpeg';
                    $attachment['filesize'] = '102114';
                    $att = Attachment::create($attachment);
                    $curuser = User::with(['attachments'])->where('id', '=', $user_id)->first();
                    $curuser->attachments()->save($att);
                } else {
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Badge could not be added. Please, try again.');
                }
            } else if ($_FILES['file']) {           
                if ($_FILES['file']) {                    
                    $path = storage_path('app/Badge/' . $user_id . '/');
                    if (!File::isDirectory($path)) {
                        File::makeDirectory($path, 0777, true);
                    }
                    $img = Image::make($_FILES['file']['tmp_name']);
                    $imageName = md5(microtime()).'.jpg';
                    $path = storage_path('app/Badge/' . $user_id . '/' . $imageName);
                    if ($img->save($path)) {
                        $curuser = User::with(['attachments'])->where('id', '=', $user_id)->first();
                        $attachment = array();
                        $attachment['filename'] = $imageName;
                        $attachment['dir'] = 'app/Badge/' . $user_id . '/';
                        $attachment['mimetype'] = $_FILES['file']['type'];
                        $attachment['filesize'] = $_FILES['file']['size'];
                        $att = Attachment::create($attachment);
                        $curuser = User::with(['attachments'])->where('id', '=', $user_id)->first();
                        $curuser->attachments()->save($att);
                        return response()->json(['Success' => 'Badge has been added'], 200);
                    } else {
                        throw new \Dingo\Api\Exception\StoreResourceFailedException('Badge could not be added. Please, try again.');
                    }
                } else {
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Badge could not be added. Please, try again.');
                }
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Badge could not be added. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Badge could not be added. Please, try again.');
        }
    }

	/**
     * Delete the specified Badges
     * Delete the Badges with a `id`.
     * @Delete("/Badges/{id}")
	 * @Transaction({
	 *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
	 * })
	 */
    public function destroy($id)
    {
		$attachment = Attachment::where('id', $id)->first();
		if(!$attachment){
			return $this->response->errorNotFound("Invalid Request");
		}else{
			$attachment->delete();
            $path = storage_path($attachment->dir . $attachment->filename);
            File::Delete($path);
		}
		return response()->json(['Success' => 'Badges deleted'], 200);
    }
}
