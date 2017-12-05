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

use App\SettingCategory;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\SettingCategoryTransformer;

/**
 * SettingCategories resource representation.
 * @Resource("Admin/AdminSettingCategories")
 */
class AdminSettingCategoriesController extends Controller
{
    /**
     * AdminSettingCategoriesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all setting categories.
     * Get a JSON representation of all the setting categories.
     *
     * @Get("/setting_categories?sort={sort}&sortby={sortby}&page={page}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the states list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort states by Ascending / Descending Order.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $setting_categories = SettingCategory::filterByRequest($request, false)->where('is_active','=',1)->paginate(20);
        return $this->response->paginator($setting_categories, new SettingCategoryTransformer);
    }
    /**
     * Show the specified setting category.
     * Show the setting category with a `id`.
     * @Get("/setting_categories/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"name": "System", "description": "XXX", "parent_id": 1, "display_order": 1, "Setting": {"setting_category_id": 1, "name": "XXX", "value": 1, "label": "XXX", "description": 1, "display_order": 1} }),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show($id)
    {
        $setting_category = SettingCategory::find($id);
        if(!$setting_category){
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($setting_category, new SettingCategoryTransformer);
    }

}