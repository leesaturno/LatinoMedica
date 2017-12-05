<?php

namespace app\Transformers;

use League\Fractal;
use App\Translation;
use App\Transformers\LanguageTransformer;
/**
 * Class TranslationTransformer
 * @package app\Transformers
 */
class TranslationTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Translation $Translation
     * @return array
     */

     protected $availableIncludes = [
        'language'
    ];

    public function transform(Translation $translation)
    {
        $output = array_only($translation->toArray(), ['id', 'language_id', 'key', 'lang_text', 'is_translated', 'is_google_translate', 'is_verified']);
        return $output;
    }

    public function includeLanguage(Translation $translation)
    {
        if ($translation->language) {
            return $this->item($translation->language, new LanguageTransformer());
        } else {
            return null;
        }

    }
}