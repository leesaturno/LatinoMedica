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
use App\Attachment;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

/**
 * Attachments resource representation.
 * @Resource("Attachments")
 */
class AttachmentsController extends Controller
{
    /**
     * AttachmentsController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
    }
    /**
     * Show all attachments
     * Get a JSON representation of all the attachments.
	 *
     * @Get("/attachments?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the attachments list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $attachments = Attachment::filterByRequest($request)->paginate($request->input('page', 10));
        return $attachments;
    }
}
