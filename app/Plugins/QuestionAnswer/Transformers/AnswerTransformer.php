<?php

/**
 * User: mugundhan_352at15
 * Date: 2016-06-29
 * Time: 03:20 PM
 */

namespace Plugins\QuestionAnswer\Transformers;

use League\Fractal;
use Plugins\QuestionAnswer\Model\Answer;
use Plugins\QuestionAnswer\Model\Question;
use Plugins\QuestionAnswer\Transformers\QuestionTransformer;
use App\Transformers\UserTransformer;

/**
 * Class AnswerTransformer
 * @package App\Transformers
 */
class AnswerTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'user', 'question'
    ];

    /**
     * @param Answer $answer
     * @return array
     */
    public function transform(Answer $answer) {
        $output = array_only($answer->toArray(), ['id', 'question_id', 'user_id', 'answer', 'ratings','is_active', 'created_at', 'is_best_answer']);
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
            return $this->item($answer->question, (new QuestionTransformer)->setDefaultIncludes(['specialty']));
        } else {
            return null;
        }
    }
}
