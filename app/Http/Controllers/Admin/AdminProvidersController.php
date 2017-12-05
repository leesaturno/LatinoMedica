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
use App\Provider;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\ProviderTransformer;

/**
 * Providers resource representation.
 * @Resource("Admin/AdminProviders")
 */
class AdminProvidersController extends Controller
{
    /**
     * AdminProvidersController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all providers
     * Get a JSON representation of all the providers.
     *
     * @Get("/providers?filter={filter}&sort={sort}&sortby={sortby}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the providers list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the providers list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort providers by Ascending / Descending Order.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search providers.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $providers = Provider::filterByRequest($request)->paginate(20);
        return $this->response->paginator($providers, new ProviderTransformer);
    }

    /**
     * Store a new provider.
     * Store a new provider with a `name`, `secret_key`, `api_key`, `icon_class`, `btn_class`, `is_active` and `display_order`.
     * @Post("/providers")
     * @Transaction({
     *      @Request({"name": "Facebook", "secret_key": "XXXXXX", "api_key": "XXXXXX", "icon_class": "fa-facebook", "button_class": "btn-facebook", "display_order": "2"}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
     * })
     */
    public function store(Request $request)
    {
        $provider_data = $request->only('name', 'secret_key', 'api_key', 'icon_class', 'button_class', 'display_order');
        $validator = Validator::make($provider_data, Provider::GetValidationRule());
        if ($validator->passes()) {
            $provider_data['is_active'] = true;
            $provider = Provider::create($provider_data);
            if ($provider) {
                return response()->json(['Success' => 'Provider has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Provider could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Provider could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Edit the specified provider.
     * Edit the provider with a `id`.
     * @Get("/providers/{id}/edit")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "name": "Facebook", "secret_key": "XXXXXX", "api_key": "XXXXXX", "icon_class": "fa-facebook", "button_class": "btn-facebook", "display_order": "2"}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function edit($id)
    {
        $provider = Provider::find($id);
        if (!$provider) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($provider, new ProviderTransformer);
    }

    /**
     * Update the specified provider.
     * Update the provider with a `id`.
     * @Put("/providers/{id}")
     * @Transaction({
     *      @Request({"id": 1, "name": "Facebook", "secret_key": "XXXXXX", "api_key": "XXXXXX", "icon_class": "fa-facebook", "button_class": "btn-facebook", "display_order": "2"}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
     * })
     */
    public function update(Request $request, $id)
    {
        $provider_data = $request->only('name', 'secret_key', 'api_key', 'icon_class', 'button_class', 'display_order', 'is_active');
        $validator = Validator::make($provider_data, Provider::GetValidationRule());
        $provider = false;
        if ($request->has('id')) {
            $provider = Provider::find($id);
            $provider = ($request->id != $id) ? false : $provider;
        }
        if ($validator->passes() && $provider) {
            try {
                $provider->update($provider_data);
                return response()->json(['Success' => 'Provider has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Provider could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Provider could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete the specified provider.
     * Delete the provider with a `id`.
     * @Delete("/providers/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function destroy($id)
    {
        $provider = Provider::find($id);
        if (!$provider) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $provider->delete();
        }
        return response()->json(['Success' => 'Provider deleted'], 200);
    }
}
