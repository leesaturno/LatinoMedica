<?php

/**
 * Doctoury - Lumen framework
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

namespace Plugins\Photos\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Validator;
use App\User;
use App\Attachment;
use Plugins\Photos\Model\Photo;
use Image;
use File;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\Photos\Transformers\PhotoTransformer;
use League\Fractal\Manager;

/**
 * Photos resource representation.
 *
 * @Resource("Photos")
 */
class PhotosController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        // Check the logged user authentication.
        //$this->middleware('jwt.auth');
    }

    /**
     * Show all Photos
     *
     * Get a JSON representation of all the Photos.
     *
     * @Get("/photos?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the user educations list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the user educations list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user educations by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display user educations By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search user educations.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    /* public function index(Request $request) {
      $fractal = new Manager();
      //$user = $this->auth->user();
      $photos = Attachment::where(['attachmentable_id' => 1])->get();
      //echo '<pre>'; print_r($photos); die;
      $my_photos = new \League\Fractal\Resource\Collection($photos, (new PhotoTransformer)->setDefaultIncludes(['attachmentable']));
      $doctorDetailValue = $fractal->createData($my_photos)->toArray();
      echo '<pre>';print_r($doctorDetailValue);die;
      } */
    public function index($username = null) {
        if($username != null) {
            $doctorDetail = User::where('username','=',$username)->first();
            $doctorId = $doctorDetail->id;
        } else {
            $user = $this->auth->user();
            $doctorId = $user->id;
        }
        $photos = Photo::where('user_id', '=', $doctorId)->get();
        $fractal = new Manager();
        $doctorDetailwithIncludes =  new \League\Fractal\Resource\Collection($photos, (new PhotoTransformer)->setDefaultIncludes(['attachmentable']));
        $doctorDetailValue = $fractal->createData($doctorDetailwithIncludes)->toArray();
        return response()->json($doctorDetailValue);
        //echo '<pre>';print_r($doctorDetailwithIncludes);die;
        //return $this->response->collection($photos, (new PhotoTransformer)->setDefaultIncludes(['attachmentable']));
    }

    /**
     * Store a new user education.
     *
     * Store a new user education with a `user_id`, `education`, `location`, `organization`, `date`, `is_active`.
     *
     * @Post("/")
     * @Transaction({
     *      @Request({"user_id": 1, "education": "MBBS", "location":"USA", "organization":"Aureus University","date":"2008","is_active":1}),
     *      @Response(200, body={"success": {"name": {"Photo added successfully."}}}),
     *      @Response(422, body={"error": {"name": {"Photo already exist."}}})
     * })
     */
    public function store(Request $request) {
        $photo_data = $request->only('files');
        $user = $this->auth->user();
        $photo_data['user_id'] = $user->id;
        $photo_data['is_active'] = 1;
        $validator = Validator::make($photo_data, Photo::GetValidationRule());
        if ($validator->passes()) {
            if ($request->hasFile('files')) {
                foreach ($photo_data['files'] as $key => $photo_file) {
                    $img = Image::make($_FILES['files']['tmp_name'][$key]);
                    $photo = Photo::create($photo_data);
                    $path = storage_path('app/ClinicPhotos/' . $user->id . '/' . $photo->id . '/');
                    if (!File::isDirectory($path)) {
                       File::makeDirectory($path, 0775, true);
                    }
                    if ($img->save($path.$_FILES['files']['name'][$key])) {
                        $attachment = array();
                        $attachment['filename'] = $_FILES['files']['name'][$key];
                        $attachment['dir'] = 'app/ClinicPhotos/'. $user->id . '/' . $photo->id . '/';
                        $attachment['mimetype'] = $photo_file->getClientMimeType();
                        $attachment['filesize'] = $photo_file->getClientSize();
                        $att = Attachment::create($attachment);
                        $curuser = Photo::with(['attachments'])->where('id', '=', $photo->id)->first();
                        $curuser->attachments()->save($att);
                    }
                }
            }
            if ($att) {
                return response()->json(['Success' => 'Photo has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Photo could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Photo could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Show the specified Photo.
     *
     * @Get("/photos?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified user education details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id) {
        $photo = Photo::find($id);
        if (!$photo) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($photo, (new PhotoTransformer));
    }

    /**
     * Update Photos
     *
     * Update Photos with a `id`.
     *
     * @Put("/photos?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id) {
        $photo_data = $request->only('education', 'location', 'organization', 'certification_date');
        $validator = Validator::make($photo_data, Photo::GetValidationRule());
        $photo = false;
        if ($request->has('id')) {
            $photo = Photo::find($id);
            $photo = ($request->id != $id) ? false : $photo;
        }
        if ($validator->passes() && $photo) {
            try {
                $photo->update($photo_data);
                return response()->json(['Success' => 'Photo has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Photo could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Photo could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete Photo
     *
     * Delete Photo with a `id`.
     *
     * @Delete("/photos?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id) {
        $photo = Photo::find($id);
        if (!$photo) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $photo->delete();
        }
        return response()->json(['Success' => 'Photo deleted'], 200);
    }

}
