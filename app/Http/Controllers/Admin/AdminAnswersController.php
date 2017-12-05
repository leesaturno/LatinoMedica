<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Answer;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\AnswerTransformer;

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
        return $this->response->paginator($result, (new AnswerTransformer)->setDefaultIncludes(['User', 'Question']));
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
        $requestData = $request->only('answer', 'user_id', 'question_id', 'is_active');
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
        $response = Question::find($id);
        if(!$response){
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($response, (new QuestionTransformer)->setDefaultIncludes(['User', 'Specialty']));
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
        $responseData = $request->only('question', 'user_id', 'specialty_id', 'description', 'is_active');
        $validator = Validator::make($responseData, Question::GetValidationRule());
        $question = false;
        if ($request->has('id')) {
            $question = Question::find($id);
            $question = ($request->id != $id)? false : $question;
        }
        if($validator->passes() && $question){
            try {
                $responseData['slug'] = str_slug($request->question, '-');
                $question->update($responseData);
                return response()->json(['Success' => 'Question has been updated'], 200);
            }
            catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Question could not be updated. Please, try again.');
            }
        }else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Question could not be updated. Please, try again.', $validator->errors());
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
        $question = Question::find($id);
        if(!$question){
            return $this->response->errorNotFound("Invalid Request");
        }else{
            $question->delete();
        }
        return response()->json(['Success' => 'Question deleted'], 200);
    }
}
