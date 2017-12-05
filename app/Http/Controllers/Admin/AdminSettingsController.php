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
use App\Setting;

use JWTAuth;
use Validator;
use File;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\SettingTransformer;


/**
 * Settings resource representation.
 * @Resource("Admin/AdminSettings")
 */
class AdminSettingsController extends Controller
{
    /**
     * AdminSettingsController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all settings
     * Get a JSON representation of all the settings.
     *
     * @Get("/settings?sort={sort}&sortby={sortby}&page={page}&setting_category_id={id}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the settings list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort setting by Ascending / Descending Order.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1),
     *      @Parameter("setting_category_id", type="integer", required=false, description="Sort setting by category.", default=null)
     * })
     */
    public function index(Request $request)
    {
        $settings = Setting::filterByRequest($request)->paginate(20);
        return $this->response->paginator($settings, new SettingTransformer);
    }

    /**
     * Show all settings.
     * Show the settings with a `id`.
     * @Get("/setting_categories/{id}/settings")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"name": "System", "value": 1, "label": "XXX", "description": "XXX", "display_order": 1 }),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function settings($id)
    {
        $setting = Setting::where('setting_category_id', '=', $id)->get();
        if (!$setting) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($setting, (new SettingTransformer)->setDefaultIncludes(['SettingCategory']));
    }

    /**
     * Edit the specified setting.
     * Edit the setting with a `id`.
     * @Get("/settings/{id}/edit")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "name": "Site Name", "description": "XXX", "value": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function edit($id)
    {
        $setting = Setting::find($id);
        if (!$setting) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($setting, (new SettingTransformer)->setDefaultIncludes(['SettingCategory']));
    }

    /**
     * Update the specified setting.
     * Update the setting with a `id`.
     * @Put("/settings/{id}")
     * @Transaction({
     *      @Request({"id": 1, "value": 1}),
     *      @Response(200, body={"success": "Record Updated Successfully."}),
     *      @Response(500, body={"error": "Record not found."})
     * })
     */
    public function update(Request $request, $id)
    {
        $setting_data = $request->only('id', 'value');
        $validator = Validator::make($setting_data, Setting::GetValidationRule());
        $setting = false;
        if ($request->has('id')) {
            $setting = Setting::find($id);
            $setting = ($request->id != $id) ? false : $setting;
        }
        if ($validator->passes() && $setting) {
            try {
                $setting->update($setting_data);
                return response()->json(['Success' => 'Setting has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Setting could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Setting could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Show the specified setting details.
     * Show the setting detail with a `name`.
     * @Get("/settings/{name}/show")
     * @Transaction({
     *      @Request({"name": "site.version"}),
     *      @Response(200, body={"id":2, "setting_category_id":1, "name":"site.version", "value":"v1.0a.01", "label":"Site Version","description":"XXXX", "display_order":2}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show($name)
    {
        $setting = Setting::where('name', '=', $name)->get();
        if (!$setting) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($setting, (new SettingTransformer)->setDefaultIncludes(['SettingCategory']));
    }

    /**
     * List out the all plugin and Setting to enable plugin list
     * @Get("/plugins")
     * @Transaction({
     *      @Request({"name": "site.version"}),
     *      @Response(200, body={"other_plugin":{}, "enabled_plugin":{}}),
     * })
     */
    public function getPlugin()
    {
        $path = app()->basePath('app/Plugins/');
        $directories = array();
        $directories = glob($path . '/*', GLOB_ONLYDIR);
        $available_plugin = array();
        $available_plugin_details = array();
        $pluginArray = array();

        foreach ($directories as $key => $val) {
            $json = file_get_contents($val . '/' . 'plugin.json');
            $data = json_decode($json, true);
            if (!empty($data['dependencies'])) {
                $pluginArray[$data['dependencies']][$data['name']] = $data;
            } else if (!in_array($data['name'], $pluginArray)) {
                if (empty($pluginArray[$data['name']])) {
                    $pluginArray[] = $data;
                }
            }
        }
        $otherlugins = array();
        foreach ($pluginArray as $plugin) {
            $otherlugins[] = $plugin;
        }
        $setting_plugin = Setting::where('name', '=', 'site.enabled_plugins')->first();
        $enabled_plugin = explode(",", $setting_plugin['value']);
        $enabled_plugin = array_map('trim', $enabled_plugin);
        $response['other_plugin'] = $otherlugins;
        $response['enabled_plugin'] = $enabled_plugin;
        return response()->json($response, 200);
    }
    /**
     * Update the plugin setting.
     * Plugin setting to update enable or disable.
     * @Put("/plugins")
     * @Transaction({
     *      @Request({"is_enabled": 1, "plugin_name": "Wallets"}),
     *      @Response(200, body={"success": "Record Updated Successfully."}),
     *      @Response(422, body={"error": "Record could not be updated."})
     * })
     */
    public function updatePlugin(Request $request)
    {
        $setting = Setting::where('name', '=', 'site.enabled_plugins')->first();
        $pluginStr = $setting->value;
        $pluginArray = explode(",", $pluginStr);
        $pluginArray = array_map('trim', $pluginArray);
        if ($request->has('is_enabled') && $request->has('plugin_name')) {
            $path = app()->basePath('app/Plugins/' . $request->plugin_name);
            if (File::isDirectory($path)) {
                if ($request->is_enabled === 1) {
                    if (!in_array($request->plugin_name, $pluginArray)) {
                        $pluginArray[] = $request->plugin_name;
                    }
                    $pluginStr = implode(',', $pluginArray);
                } else if ($request->is_enabled === 0) {
                    $key = array_search($request->plugin_name, $pluginArray);
                    if ($key !== false) {
                        unset($pluginArray[$key]);
                    }
                    $pluginStr = implode(',', $pluginArray);
                }
                try {
                    $setting->update(['value' => $pluginStr]);
                    $dest_file = base_path('public/api/assets/js/plugins.js');
                    if (File::exists($dest_file)) {
                        File::delete($dest_file);
                    }
                    return response()->json(['Success' => 'Setting has been updated'], 200);
                } catch (\Exception $e) { // I don't remember what exception it is specifically
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Setting could not be updated. Please, try again.');
                }
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Setting could not be updated. Please, try again.');
            }

        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Setting could not be updated. Please, try again.');
        }
    }

}
