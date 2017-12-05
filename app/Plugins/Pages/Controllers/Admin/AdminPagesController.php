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

namespace Plugins\Pages\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Plugins\Pages\Model\Page;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\Pages\Transformers\PageTransformer;


/**
 * Pages resource representation.
 * @Resource("Admin/AdminPages")
 */
class AdminPagesController extends Controller
{
    /**
     * AdminPagesController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all pages
     * Get a JSON representation of all the pages.
     *
     * @Get("/pages?sort={sort}&sortby={sortby}&page={page}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the pages list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort pages by Ascending / Descending Order.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $pages = Page::filterByRequest($request)->paginate(20);
        return $this->response->paginator($pages, (new PageTransformer)->setDefaultIncludes(['Language']));
    }

    /**
     * Store a new page.
     * Store a new page with a `language_id`, `title`, `slug`, `page_content` and `is_active`.
     * @Post("/pages")
     * @Transaction({
     *      @Request({"language_id": 1, "title": "FAQ", "slug": "faq", "page_content": "Coming Soon", "is_avtive": 1}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"title": {}}, "status_code": 422})
     * })
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), Page::GetBulkAddValidationRule());
        $pages = $request->all();
        if ($validator->passes()) {
            foreach ($pages as $key => $data) {
                if ($key == 'slug') {
                    continue;
                }
                $pages = Page::create(is_array($data) ? $data : array($data));
                if (!$pages) {
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Page could not be updated. Please, try again.');
                }
            }
            return response()->json(['Success' => 'Page has been added'], 200);
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Page could not be updated. Please, try again.', $validator->errors());
        }

    }

    /**
     * Edit the specified page.
     * Edit the page with a `id`.
     * @Get("/pages/{id}/edit")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "title": "FAQ", "slug": "faq", "page_content": "Coming Soon", "is_avtive": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function edit($id)
    {
        $page = Page::find($id);
        if (!$page) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($page, (new PageTransformer)->setDefaultIncludes(['Language']));
    }

    /**
     * Show the specified page.
     * Show the page with a `id`.     *
     * @Get("/pages/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "language_id": 42, "title": "Term and conditions", "slug": "term-and-conditions", "page_content": "XXX", "is_active": 0, "Language": {"id": 42, "name": "English", "iso2": "en", "iso3": "eng", "is_active": 1}}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show($id)
    {
        $page = Page::find($id);
        if (!$page) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($page, (new PageTransformer)->setDefaultIncludes(['Language']));
    }

    /**
     * Update the specified page.
     * Update the page with a `id`.
     * @Put("/pages/{id}")
     * @Transaction({
     *      @Request({"id": 1, "title": "FAQ", "slug": "faq", "page_content": "Coming Soon", "is_avtive": 1}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"title": {}}, "status_code": 422})
     * })
     */
    public function update(Request $request, $id)
    {
        $page_data = $request->only('id', 'title', 'language_id', 'page_content', 'is_active');
        $validator = Validator::make($page_data, Page::GetValidationRule());
        $page = false;
        if ($request->has('id')) {
            $page = Page::find($id);
            $page = ($request->id != $id) ? false : $page;
        }
        if ($validator->passes() && $page) {
            try {
                $page->update($page_data);
                return response()->json(['Success' => 'Page has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Page could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Page could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete the specified page.
     * Delete the page with a `id`.
     * @Delete("/pages/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function destroy($id)
    {
        $page = Page::find($id);
        if (!$page) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $page->delete();
        }
        return response()->json(['Success' => 'Page deleted'], 200);
    }
}
