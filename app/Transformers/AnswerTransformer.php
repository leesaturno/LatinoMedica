<?php

/**
 * User: mugundhan_352at15
 * Date: 2016-04-07
 * Time: 03:20 PM
 */

namespace App\Transformers;

use League\Fractal;
use App\Answer;

/**
 * Class QuestionTransformer
 * @package App\Transformers
 */
class AnswerTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'user', 'querstion'
    ];

    /**
     * @param Answer $answer
     * @return array
     */
    public function transform(Answer $answer) {
        $output = array_only($answer->toArray(), ['id', 'question_id', 'user_id', 'answer', 'is_active', 'created_at']);
        return $output;
    }

    /**
     * @param Answer $answer
     * @return Fractal\Resource\Item
     */
    public function includeUser(Answer $answer) {
        if ($answer->user) {
            return $this->item($answer->user, new UserTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param Answer $answer
     * @return Fractal\Resource\Item
     */
    public function includeQuestion(Answer $answer) {
        if ($answer->question) {
            return $this->item($answer->question, new QuestionTransformer());
        } else {
            return null;
        }
    }
}
