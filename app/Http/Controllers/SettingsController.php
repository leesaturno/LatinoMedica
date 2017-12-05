<?php
/**
 * AgriyaBase - Lumen framework
 * PHP version 5.5.9
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
use App\Setting;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\SettingTransformer;


/**
 * Settings resource representation.
 * @Resource("/Settings")
 */
class SettingsController extends Controller
{


    /**
     * Show all settings
     * Get a JSON representation of all the settings.
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
        if ($request->input('type') == 'public_settings') {
            $settings = Setting::filterByRequest($request)->get();
            return $this->response->Collection($settings, new SettingTransformer);
        }
    }
    public function pluginslist(){
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
                $pluginArray[] = $data['name'];
            } else if (!in_array($data['name'], $pluginArray)) {
                if (empty($pluginArray[$data['name']])) {
                    $pluginArray[] = $data['name'];
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
        $response['all_plugins'] = $otherlugins;
        $response['enabled_plugins'] = $enabled_plugin;
        return response()->json($response, 200);
    }

}
