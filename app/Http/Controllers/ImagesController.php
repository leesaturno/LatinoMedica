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
use App\Attachment;
use Image;
use File;

class ImagesController extends Controller
{

    /**
     * Thumb size based image create
     * @Get("/img/{size}/{model}/{file}")
     * @Transaction({
     *      @Request({"size": "small", "model": "user", "filename": "11.6512bd43d9caa6e02c990b0a82652dca.jpg"}),
     *      @Response(301),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function create($size, $model, $filename)
    {
        $file_extract = explode('.', $filename);
        if(!empty($file_extract[0])){
            $attachment = Attachment::where('id', '=', $file_extract[0])->first();
            if ($attachment) {
                if (md5($file_extract[0] . config('constants.Security.salt') . $attachment->filename) == $file_extract[1]) {
                    $source_path = storage_path($attachment->dir . $attachment->filename);
                    $dest_path = base_path('public/api/img/' . $size . '/' . $model . '/');
                    if (!File::isDirectory($dest_path)) {
                        File::makeDirectory($dest_path, 0775, true);
                    }
                    $img = Image::make($source_path);
                    $img->resize(config('constants.thumb.'.$model.'.' . $size . '.width'), config('constants.thumb.'.$model.'.' . $size . '.height'));
                    $img->save($dest_path . $filename);
                    return redirect(asset('api/img/' . $size . '/' . $model . '/' . $filename));
                }else {
                    return $this->response->errorNotFound("Invalid Request");
                }
            }else {
                return $this->response->errorNotFound("Invalid Request");
            }
        }else {
            return $this->response->errorNotFound("Invalid Request");
        }
    }
}
