<?php

/**
 * User: mugundhan_352at15
 * Date: 2016-04-05
 * Time: 06:20 PM
 */

namespace App\Transformers;

use League\Fractal;
use App\Question;

/**
 * Class QuestionTransformer
 * @package App\Transformers
 */
class QuestionTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'user', 'specialty'
    ];

    /**
     * @param Question $question
     * @return array
     */
    public function transform(Question $question) {
        $output = array_only($question->toArray(), ['id', 'question', 'user_id', 'specialty_id', 'description', 'is_active', 'created_at']);
        return $output;
    }

    /**
     * @param Question $question
     * @return Fractal\Resource\Item
     */
    public function includeUser(Question $question) {
        if ($question->user) {
            return $this->item($question->user, new UserTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param Question $question
     * @return Fractal\Resource\Item
     */
    public function includeSpecialty(Question $question) {
        if ($question->specialty) {
            return $this->item($question->specialty, new SpecialtyTransformer());
        } else {
            return null;
        }
    }

}
