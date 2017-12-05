<?php

/**
 * User: mugundhan_352at15
 * Date: 2016-06-29
 * Time: 03:20 PM
 */

namespace Plugins\QuestionAnswer\Transformers;

use League\Fractal;
use Plugins\QuestionAnswer\Model\Question;
use App\Specialty;
use App\Transformers\SpecialtyTransformer;
use App\Transformers\UserTransformer;

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
        'user', 'specialty', 'answer'
    ];

    /**
     * @param Question $question
     * @return array
     */
    public function transform(Question $question) {
        $output = array_only($question->toArray(), ['id', 'question', 'user_id', 'specialty_id', 'answer_count', 'is_active', 'slug', 'doctor_id','created_at']);
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
    public function includeAnswer(Question $question) { 
        if ($question->answer) { 
            return $this->collection($question->answer, (new AnswerTransformer)->setDefaultIncludes(['user']));
        } else {
            return null;
        }
    }

}
