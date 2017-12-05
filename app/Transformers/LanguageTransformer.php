<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-04-01
 * Time: 11:23 AM
 */

namespace app\Transformers;

use League\Fractal;
use App\Language;

/**
 * Class LanguageTransformer
 * @package app\Transformers
 */
class LanguageTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Language $language
     * @return array
     */
    public function transform(Language $language)
    {
        $output = array_only($language->toArray(), ['id', 'name', 'iso2', 'iso3', 'is_active','translation_verify_count','translation_not_verified_count','translation_active']);
        return $output;
    }
}