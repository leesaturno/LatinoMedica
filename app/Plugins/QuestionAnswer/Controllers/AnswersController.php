<?php

/**
 * AgriyaBase - Lumen framework
 * PHP version 5.5.9
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Mugundhan Asokan
 * @email      a.mugundhan@gmail.com
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-06-28
 */

namespace Plugins\QuestionAnswer\Controllers;

use App\User;
use App\UserProfile;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Plugins\QuestionAnswer\Model\Question;
use Plugins\QuestionAnswer\Model\Answer;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;
use Plugins\QuestionAnswer\Transformers\AnswerTransformer;
use Plugins\QuestionAnswer\Transformers\QuestionTransformer;

class AnswersController extends Controller {
    
    public function __construct(){
        /*$this->middleware('jwt.auth');*/
        $this->middleware('jwt.auth', ['only' => ['index', 'add','modify','destroy', 'generateIcalUrl']]);
    }

    /**
     * Show all questions
     * Get a JSON representation of all the questions.
     * @Get("/questions?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the questions list by type.",
     *                           default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the questions list by sort ley.",
     *                         default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort questions by Ascending / Descending
     *                           Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display questions By Listing Type.",
     *                         default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma
     *                          Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search questions.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index()
    {
        $user = $this->auth->user();
        $result = Answer::where('user_id','=',$user->id)->paginate(20);
        return $this->response->paginator($result, (new AnswerTransformer)->setDefaultIncludes(['question']));
    }

    public function edit($id){
        $result = Answer::where('id','=',$id)->first();
        return $this->response->item($result, (new AnswerTransformer)->setDefaultIncludes(['question']));
    }
    /**
     * Store a new question.
     * Store a new question with a `question`, `user_id`, `specialty_id`, `description` and `is_active`.
     * @Post("/")
     * @Transaction({
     *      @Request({"question": "what your question?", "user_id": 1, "specialty_id": 1, "description": "Your own description", "is_active": 1}),
     *      @Response(200, body={"success": {"name": {"Question added successfully."}}}),
     *      @Response(422, body={"error": {"name": {"Question already exist."}}})
     * })
     */
    public function add(Request $request, $id)
    {
        $requestData = $request->only('answer', 'is_active');
        $user = $this->auth->user();
        $requestData['user_id'] = $user->id;
        $requestData['question_id'] = $id;
        $validator = Validator::make($requestData, Answer::GetValidationRule());
        if($validator->passes()){
            $result = Answer::create($requestData);
            if ($result) {
                /* For Update the question table */
                $getQuestion = Question::find($id);

                if(!empty($getQuestion->toArray())){
                    $updateQuestionValue['answer_count'] = $getQuestion->answer_count+1;
                    $getQuestion->update($updateQuestionValue);
                }
                return response()->json(['Success' => 'Answer has been added'], 200);
            }else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Answer could not be updated. Please, try again.');
            }
        }else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Answer could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Update Answer
     * Update answers with a `id`.
     * @Put("/answer?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id)
    {
        $user = $this->auth->user();
        $responseData = $request->only('answer', 'description', 'is_active');
        $responseData['question_id'] = $id;
        $responseData['user_id'] = $user->id;
        $validator = Validator::make($responseData, Answer::GetValidationRule());
        $answer = false;
        if ($request->has('id')) {
            $answer = Answer::find($id);
            $answer = ($request->id != $id)? false : $answer;
        }
        if($validator->passes() && $answer){
            try {
                $answer->update($responseData);
                 return response()->json(['Success' => 'Answer has been updated'], 200);
            }
            catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Answer could not be updated. Please, try again.');
            }
        }else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Answer could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Update Answer
     * Update answers with a `id`.
     * @Put("/answer?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function updatestatus(Request $request, $id)
    {
        $user = $this->auth->user();
        $responseData = $request->only('ratings');
        $answer = false;
        if ($request->has('id')) {
            $answer = Answer::find($id);
            $answer = ($request->id != $id)? false : $answer;
        }
        $credit_points_for_best_answer = 0;
        if($answer){
            try {
                if (!empty($responseData['ratings']) && $user->id != $answer->user_id) {
                    $answer->update($responseData);
                    $credit_points_for_best_answer = config('constants.ConstBestAnswerRatingPoint.'.$responseData['ratings']);
                    $user = User::where('id', $answer->user_id)->where('role_id', config('constants.ConstUserTypes.Doctor'))->first();
                    if ($user) {
                        $user->points = $user->points + $credit_points_for_best_answer;
                        $user->update();
                    }
                    return response()->json(['Success' => 'Rating has been updated'], 200);
                } else {
                    return $this->response->errorNotFound("Invalid Request");
                }
            }
            catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Rating could not be updated. Please, try again.');
            }
        }else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Rating could not be updated. Please, try again.');
        }
    }

    public function questionlist(){
        $user = $this->auth->user();
        $userDetails = UserProfile::where('user_id','=',$user->id)->first();
        $specialties = array_filter(explode(',',$userDetails->specialty_id));
        $questions = Question::whereIn('specialty_id',$specialties)->where('is_active', '=', 1)->paginate(20);
        return $this->response->paginator($questions, (new QuestionTransformer)->setDefaultIncludes(['specialty']));
    }
    /**
     * Delete answers
     * Delete answers with a `id`.
     * @Delete("/answers?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id)
    {
        $question = Question::find($id);
        if(!$question){
            return $this->response->errorNotFound("Invalid Request");
        }else{
            $question->delete();
        }
        return response()->json(['Success' => 'Question deleted'], 200);
    }
}
