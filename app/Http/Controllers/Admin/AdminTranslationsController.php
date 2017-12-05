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
use Illuminate\Routing\UrlGenerator;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Translation;
use App\Language;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\TranslationTransformer;
use File;

/**
 * Translations resource representation.
 * @Resource("Admin/AdminTranslations")
 */
class AdminTranslationsController extends Controller
{
    /**
     * AdminTranslationsController constructor.
     */
    public function __construct(UrlGenerator $url)
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
        $this->url = $url;
    }

    
    public function index(Request $request)
    {
        $Translations = Translation::filterByRequest($request)->paginate(20);
        return $this->response->paginator($Translations, new TranslationTransformer);
    }
    public function language(Request $request)
    {
        $translations = Translation::where('language_id','!=', 42)->get()->groupBy('language_id')->toArray();        
        if (!empty($translations)) {
            $translation_ids = array();
            foreach ($translations as $id => $value) {
                $translation_ids[] = $id;
            }
        }
        $languages = Language::whereIn('id', $translation_ids)->get()->toArray();
        return json_encode($languages);
    }
    public function remainLanguage(Request $request)
    {
        $translations = Translation::get()->groupBy('language_id');
        if (!empty($translations)) {
            $translations->toArray();
            $translation_ids = array();
            foreach ($translations as $id => $value) {
                $translation_ids[] = $id;
            }                
            $languages = Language::whereNotIn('id',$translation_ids)->get()->toArray();
        } else {
            $languages = Language::get()->toArray();
        }
        return json_encode($languages);
    }
    public function languageCount(Request $request)
    {       
        $translations = Translation::filterByRequest($request)->with('Language')->groupBy('language_id')->orderBy('language_id','ASC')->paginate(10);
        return $this->response->paginator($translations, (new translationTransformer)->setDefaultIncludes(['Language']));
    }
    public function googleTranslate($text,$target_text) {        
        if (!empty($text) && !empty($target_text)) {
            $google_url = "https://www.googleapis.com/language/translate/v2?key=".config('Google.translate_api_key')."&q=".$text."&source=".$target_text."&target=".$target_text;

            $handle = curl_init($google_url);
            curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($handle);
            print_r($response);exit;
            $responseDecoded = json_decode($response, true);
            curl_close($handle);

            $google_res = $responseDecoded['data']['translations'][0]['translatedText'];
            return $google_res;
        } else {
            return "";
        }
        
    }
    
    public function store(Request $request)
    {
        $translation_data = $request->only('language_id', 'key', 'lang_text', 'is_translated', 'is_google_translate');        
        $validator = Validator::make($translation_data, Translation::GetValidationRule());
        $not_verified_count = 0;
        $language_data = Language::where('id','=', $translation_data['language_id'])->get()->toArray();       
        if ($validator->passes()) {
            $translationEnglish = Translation::where('language_id','=', 42)->get()->toArray();
            foreach($translationEnglish as $translation) {
                $translation_data['key'] = $translation['key'];
                if ($translation_data['is_translated'] == 1) {
                    $translation_data['lang_text'] = "";
                } else if ($translation_data['is_google_translate'] == 1) {
                    $translation_data['lang_text'] = "";
                    /*if ($translation_data['lang_text'] == "") {
                        return response()->json(['Failed' => 'Google Api key invalid'], 200);  
                    }*/
                }
                $translation = Translation::create($translation_data);
            }
            $not_verified_count = Translation::where('language_id','=', $translation_data['language_id'])->where('is_verified','=', 0)->count();
            Language::where('id','=', $translation_data['language_id'])->update(['translation_not_verified_count'=>$not_verified_count]);
            // sadam
            $saved_datas = Translation::where('language_id','=', $translation_data['language_id'])->get()->toArray();
            $file_path = base_path().'/public/assets/js/l10n/'.$language_data[0]['iso2'].'.json';
            $t = array();
            foreach ($saved_datas as $saved_data) {        
                $t[$saved_data['key']] = $saved_data['lang_text'];
            }
            $t = json_encode($t, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
            file_put_contents($file_path, $t);
            if ($translation) {
                return response()->json(['Success' => 'Translation has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Translation could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Translation could not be updated. Please, try again.', $validator->errors());
        }
    }

    public function text_add(Request $request)
    {
        $translation_add_datas = $request->toArray();
        $duplicate_data = Translation::where('key','=', $translation_add_datas['message'][0]['key'])->get()->toArray();
        if (!empty($duplicate_data)) {
            return response()->json(['Success' => 'Failed. This text already added'], 200);
        } else {
            foreach ($translation_add_datas['message'] as $translation_add_data) {
                $translation_add_data = json_decode(json_encode($translation_add_data,true),true);            
                $translation_data['language_id'] = $translation_add_data['language_id'];
                $translation_data['key'] = $translation_add_data['key'];
                if (!empty($translation_add_data['lang_text'])) {
                    $translation_data['lang_text'] = $translation_add_data['lang_text'];
                } else {
                    $translation_data['lang_text'] = $translation_add_data['key'];
                }            
                $translation_data['is_translated'] = 1;
                $translation_data['is_google_translate'] = 0;
                $translation_data['is_verified'] = 1;
                $translation = Translation::create($translation_data);
                Language::where('id','=', $translation_add_data['language_id'])->increment('translation_verify_count');
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
            if ($translation) {
                return response()->json(['Success' => 'Translation text has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Translation text could not be updated. Please, try again.');
            }
        }    
        
    }
   
    public function edit(Request $request, $id)
    {
        $filter = $request->only('q', 'is_verified', 'is_pending'); 
        $conditions = array();
        $conditions['language_id'] = $id;
        $keylike = "";
        if (isset($filter['q']) && $filter['q'] != "") {
            $conditions['key'] = $filter['q'];
            $keylike = '%' . $filter['q'] . '%';
        } 
        if (isset($filter['is_verified']) && $filter['is_verified'] != "") {
            $conditions['is_verified'] = $filter['is_verified'];
        }
        if (isset($filter['is_pending']) && $filter['is_pending'] != "") {
            $conditions['is_translated'] = $filter['is_pending'];
        }
        $translation = Translation::where($conditions)->orWhere('key', 'like', $keylike)->orderBy('key','ASC')->paginate(10); 
        if (!$translation) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->paginator($translation, new TranslationTransformer);
    }

    
    public function update(Request $request, $id)
    {       
        $translation_edit_datas = $request->toArray();
        foreach ($translation_edit_datas['message'] as $translation_edit_data) {
            $translation_edit_data = json_decode(json_encode($translation_edit_data,true),true);
            $Translations = Translation::where(['language_id'=>$id,'key'=>$translation_edit_data['key']])->update(['lang_text'=>$translation_edit_data['value'],'is_verified'=>$translation_edit_data['is_verified'],'is_translated'=>$translation_edit_data['is_translated']]);
        }
        $verified_count = Translation::where('language_id','=', $id)->where('is_verified','=', 1)->count();
        $not_verified_count = Translation::where('language_id','=', $id)->where('is_verified','=', 0)->count();
        Language::where('id','=', $id)->update(['translation_verify_count'=>$verified_count,'translation_not_verified_count'=>$not_verified_count]);
        $language_data = Language::where('id','=', $id)->get()->toArray();
        $saved_datas = Translation::where('language_id','=', $id)->get()->toArray();
        $file_path = base_path().'/public/assets/js/l10n/'.$language_data[0]['iso2'].'.json';
        $t = array();
        foreach ($saved_datas as $saved_data) {        
            $t[$saved_data['key']] = $saved_data['lang_text'];
        }
        $t = json_encode($t, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        file_put_contents($file_path, $t);
        if ($Translations) {
            try { 
                $afterEditTranslations = Translation::where('language_id','=', $id)->paginate(10);
                return $this->response->paginator($afterEditTranslations, new TranslationTransformer);
                /*return response()->json(['Success' => 'Translation has been updated','translations' => $afterEditTranslations], 200);*/
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Translation could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Translation could not be updated. Please, try again.', $validator->errors());
        }
    }

   
    public function destroy($id)
    {
        //$Translation = Translation::find($id);
        if (!$id) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            Translation::where('language_id','=', $id)->delete();
            Language::where('id','=', $id)->update(['translation_verify_count'=> 0,'translation_not_verified_count'=> 0,'translation_active'=> 0]);
        }
        return response()->json(['Success' => 'Translation deleted'], 200);
    }
}
