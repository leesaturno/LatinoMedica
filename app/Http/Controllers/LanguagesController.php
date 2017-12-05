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

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Language;
use App\Translation;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\LanguageTransformer;

/**
 * Contacts resource representation.
 * @Resource("Languages")
 */
class LanguagesController extends Controller
{
    /**
     * Show all languages
     * Get a JSON representation of all the languages.
     * @Get("/languages?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the language list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $languages = Language::where('is_active', 1)->filterByRequest($request)->get();
        return $this->response->collection($languages, new LanguageTransformer);
    }
	public function language_translation(Request $request)
    {        
        $translations = Translation::get()->groupBy('language_id');
        if (!empty($translations)) {
            $translations->toArray();
            $translation_ids = array();
            foreach ($translations as $id => $value) {
                $translation_ids[] = $id;
            }
            $languages = Language::whereIn('id',$translation_ids)->get()->toArray();
            foreach ($languages as $language) {
                $saved_datas = Translation::where('language_id','=', $language['id'])->get()->toArray();            
                $t = array();
                foreach ($saved_datas as $saved_data) {
                    $t[$saved_data['key']] = ($saved_data['lang_text'] != "") ? $saved_data['lang_text'] :$saved_data['key'];
                }
                $t = json_encode($t, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
                $file_path = base_path().'/public/assets/js/l10n/'.$language['iso2'].'.json';
                file_put_contents($file_path, $t);
            }
        }
    }
    public function active()
    {
        $languages = Language::where('translation_active','=', 1)->orderBy('name', 'ASC')->get();
        return $this->response->collection($languages, new LanguageTransformer);
    }
}