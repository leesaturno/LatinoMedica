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
use File;
use JShrink\Minifier;

class AssetsController extends Controller
{
    /** Minify all js files and copy plugin template files to public folder
     * @get("assets/js/plugins.js")
     * @Transaction({
     *      @Response(200, body={}),
     *      @Response(401, body={"message": "Error writing to file", "status_code": 401})
     * })
     */
    public function createJsTplFiles()
    {
        $dest_path = base_path('public/api/assets/js/');
        if (!File::isDirectory($dest_path)) {
            File::makeDirectory($dest_path, 0777, true);
        }
        $enabled_plugins = enabled_plugins();
        $minifiedCode = '';
        foreach($enabled_plugins as $plugins){
            $plugins = trim($plugins);
            if(empty($plugins))
                continue;
            //Load js files to public/api/js/plugins.js as minified code
            $moduleFileList = glob(base_path("client/src/app/Plugins/$plugins/*.module.js"));
            $jsFileList = glob(base_path("client/src/app/Plugins/$plugins/*.js"));
            foreach($moduleFileList as $file){
                if(array_search($file, $jsFileList)){
                    unset($jsFileList[array_search($file, $jsFileList)]);
                }
            }
            $jsFileList = array_merge($moduleFileList, $jsFileList);
            foreach($jsFileList as $jsfiles) {
                $contents = File::get($jsfiles);
                if(env('APP_DEBUG') == false) {
                    $contents = \JShrink\Minifier::minify($contents);
                }
                $minifiedCode .= $contents;
            }
            if(env('APP_DEBUG') == false) {
                $minifiedCode .= \JShrink\Minifier::minify("angular.module('Abs').requires.push('Abs.".$plugins."');");
            }else{
                $minifiedCode .= "angular.module('Abs').requires.push('Abs.".$plugins."');";
            }
            //Copy Template files from client/src/app/plugins to public/client/src/app/plugins
            foreach(glob(base_path("client/src/app/Plugins/$plugins/*.tpl.html")) as $tpl_file) {
                $destination = base_path("public/Plugins/$plugins/");
                if (!File::isDirectory($destination)) {
                    File::makeDirectory($destination, 0775, true);
                }
                $tpl_name = File::basename($tpl_file);
                $dest_file = $destination.$tpl_name;
                if(File::exists($dest_file)) {
                    @chmod($dest_file, 0775);
                    File::delete($dest_file);
                }
                File::copy($tpl_file, $dest_file);
                @chmod($dest_file, 0775);
            }
        }
        $bytes_written = File::put($dest_path.'plugins.js', $minifiedCode);
        @chmod($dest_path.'plugins.js', 0775);
        if ($bytes_written === false)
        {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Error writing to file.');
        }else {
            return redirect(asset('api/assets/js/plugins.js'));
        }
    }
}
