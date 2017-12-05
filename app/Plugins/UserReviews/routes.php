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

//user reviews admin side
    $api->group(['prefix' => 'admin', 'namespace' => 'Plugins\UserReviews\Controllers\Admin'], function () use ($api) {
        $api->get('user_reviews', 'AdminUserReviewsController@index');
        $api->get('user_reviews/{id}/edit', 'AdminUserReviewsController@edit');
        $api->get('user_reviews/{id}', 'AdminUserReviewsController@edit');
        $api->post('user_reviews', 'AdminUserReviewsController@store');
        $api->put('user_reviews/{id}', 'AdminUserReviewsController@update');
        $api->delete('user_reviews/{id}', 'AdminUserReviewsController@destroy');
    });

//user reviews user side    
    $api->post('/reviews/add', 'Plugins\UserReviews\Controllers\UserReviewsController@add');
    $api->get('/reviews/{doctorid}', 'Plugins\UserReviews\Controllers\UserReviewsController@doctorreview');
    $api->get('/reviews/{doctorid}/{userid}', 'Plugins\UserReviews\Controllers\UserReviewsController@show');
    
});