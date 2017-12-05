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

    $api->group(['prefix' => 'admin', 'namespace' => 'Plugins\DoctorReviews\Controllers\Admin'], function () use ($api) {
        $api->get('ratting_options', 'AdminRattingOptionController@index');
        $api->get('ratting_options/{id}/edit', 'AdminRattingOptionController@edit');
        $api->get('ratting_options/{id}', 'AdminRattingOptionController@edit');
        $api->post('ratting_options', 'AdminRattingOptionController@store');
        $api->put('ratting_options/{id}', 'AdminRattingOptionController@update');
        $api->delete('ratting_options/{id}', 'AdminRattingOptionController@destroy');
    });

    //doctor reviews user side    
    $api->post('/patient_reviews/add', 'Plugins\DoctorReviews\Controllers\DoctorReviewsController@add');
    $api->get('/patient_reviews/{userId}', 'Plugins\DoctorReviews\Controllers\DoctorReviewsController@show');
    $api->put('/patient_reviews/{id}', 'Plugins\DoctorReviews\Controllers\DoctorReviewsController@update');
    
});