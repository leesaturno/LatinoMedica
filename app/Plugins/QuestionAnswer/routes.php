<?php

/*
  |--------------------------------------------------------------------------
  | Application Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register all of the routes for an application.
  | It is a breeze. Simply tell Lumen the URIs it should respond to
  | and give it the Closure to call when that URI is requested.
  |
 */
$api = $this->app->make('Dingo\Api\Routing\Router');
$api->version(['v1'], function ($api) {

    $api->group(['prefix' => 'admin', 'namespace' => 'Plugins\QuestionAnswer\Controllers\Admin'], function () use ($api) {
        $api->delete('questions/{id}', 'AdminQuestionsController@destroy');
        $api->get('questions', 'AdminQuestionsController@index');
        $api->get('questions/{id}/edit', 'AdminQuestionsController@edit');
        $api->get('questions/{id}', 'AdminQuestionsController@edit');
        $api->post('questions', 'AdminQuestionsController@store');
        $api->put('questions/{id}', 'AdminQuestionsController@update');

        //Answer
        $api->delete('answers/{id}', 'AdminAnswersController@destroy');
        $api->get('answers', 'AdminAnswersController@index');
        $api->get('answers/{id}/edit', 'AdminAnswersController@edit');
        $api->get('answers/{id}', 'AdminAnswersController@edit');
        $api->post('answers', 'AdminAnswersController@store');
        $api->put('answers/{id}', 'AdminAnswersController@update');
    });
	/* For Answers Router */
    $api->get('/questions', 'Plugins\QuestionAnswer\Controllers\QuestionsController@index');
    $api->post('/questions/add', 'Plugins\QuestionAnswer\Controllers\QuestionsController@add');
    $api->get('/questions/{id}', 'Plugins\QuestionAnswer\Controllers\QuestionsController@show');
    $api->get('/questions/edit/{id}', 'Plugins\QuestionAnswer\Controllers\QuestionsController@show');
    $api->put('/questions/edit/{id}', 'Plugins\QuestionAnswer\Controllers\QuestionsController@update');
    $api->get('/questions/view/{slug}', 'Plugins\QuestionAnswer\Controllers\QuestionsController@show_with_answer');
    $api->get('/question/{slug}', 'Plugins\QuestionAnswer\Controllers\QuestionsController@show_question');
    $api->delete('/questions/{id}', 'Plugins\QuestionAnswer\Controllers\QuestionsController@destroy');
    $api->get('/questions/answer/{doctorId}', 'Plugins\QuestionAnswer\Controllers\QuestionsController@show_question_with_answer');
	$api->get('/questions/user/{userId}', 'Plugins\QuestionAnswer\Controllers\QuestionsController@show_question_answer_user');


	/* For Answers Router */
    $api->get('/answers', 'Plugins\QuestionAnswer\Controllers\AnswersController@index');
    $api->get('/answers/add/{question_id}', 'Plugins\QuestionAnswer\Controllers\QuestionsController@show');
    $api->post('/answers/add/{question_id}', 'Plugins\QuestionAnswer\Controllers\AnswersController@add');
    $api->get('/answers/edit/{id}', 'Plugins\QuestionAnswer\Controllers\AnswersController@edit');
    $api->put('/answers/edit/{id}', 'Plugins\QuestionAnswer\Controllers\AnswersController@update');
    $api->put('/answers/update/{id}', 'Plugins\QuestionAnswer\Controllers\AnswersController@updatestatus');
    $api->get('/answers/question', 'Plugins\QuestionAnswer\Controllers\AnswersController@questionlist');
    $api->delete('/answers/{id}', 'Plugins\QuestionAnswer\Controllers\AnswersController@destroy');

});
