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
 * @since      2016-06-29
 */


namespace Plugins\QuestionAnswer\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Plugins\QuestionAnswer\Model\Answer;
use Plugins\QuestionAnswer\Model\Question;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\QuestionAnswer\Transformers\AnswerTransformer;
use Plugins\QuestionAnswer\Transformers\QuestionTransformer;

/**
 * Questions resource representation.
 * @Resource("Questions")
 */
class AdminAnswersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
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
    public function index(Request $request)
    {
        $result = Answer::with('User', 'Question')->filterByRequest($request)->paginate(20);
        return $this->response->paginator($result, (new AnswerTransformer)->setDefaultIncludes(['User', 'question']));
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
    public function store(Request $request)
    {
        $requestData = $request->only('answer', 'user_id', 'question_id', 'is_active', 'is_best_answer');
        $validator = Validator::make($requestData, Answer::GetValidationRule());
        if($validator->passes()){
            $result = Answer::create($requestData);
            if ($result) {
                /* For Update the question table */
                $getQuestion = Question::find($request->question_id);
                if(!$getQuestion){
                    $updateQuestionValue['answer_count'] = $getQuestion['answer_count']+1;
                    $updateQuestionValue['is_answered'] = true;
                    $getQuestion->update($updateQuestionValue);
                }
                return response()->json(['Success' => 'Question has been added'], 200);
            }else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Question could not be updated. Please, try again.');
            }
        }else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Question could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Get the specified question.
     * @Get("/questions?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified question details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id)
    {
        $response = Answer::find($id);
        if(!$response){
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($response, (new AnswerTransformer)->setDefaultIncludes(['question', 'User']));
    }

    /**
     * Update question
     * Update question with a `id`.
     * @Put("/questions?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id)
    {
        $requestData = $request->only('answer', 'user_id', 'question_id', 'is_active', 'is_best_answer');
        $validator = Validator::make($requestData, Answer::GetValidationRule());
        $question = false;
        if ($request->has('id')) {
            $answer = Answer::find($id);
            $answer = ($request->id != $id)? false : $answer;
        }
        if($validator->passes() && $answer){
            try {
                $answer->update($requestData);
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
     * Delete question
     * Delete question with a `id`.
     * @Delete("/questions?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id)
    {
        $question = Answer::find($id);
        if(!$question){
            return $this->response->errorNotFound("Invalid Request");
        }else{
            $question->delete();
        }
        return response()->json(['Success' => 'Answer deleted successfully'], 200);
    }
}
