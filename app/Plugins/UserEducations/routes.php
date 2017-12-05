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

//user educations admin side
    $api->group(['prefix' => 'admin', 'namespace' => 'Plugins\UserEducations\Controllers\Admin'], function () use ($api) {
        $api->get('user_educations', 'AdminUserEducationsController@index');
        $api->get('user_educations/{id}/edit', 'AdminUserEducationsController@edit');
        $api->get('user_educations/{id}', 'AdminUserEducationsController@edit');
        $api->post('user_educations', 'AdminUserEducationsController@store');
        $api->put('user_educations/{id}', 'AdminUserEducationsController@update');
        $api->delete('user_educations/{id}', 'AdminUserEducationsController@destroy');
    });

//user educations user side    
    $api->get('/user/education', 'Plugins\UserEducations\Controllers\UserEducationsController@index');
    $api->get('/user/education/{id}/edit', 'Plugins\UserEducations\Controllers\UserEducationsController@edit');
    $api->get('/user/education/{id}', 'Plugins\UserEducations\Controllers\UserEducationsController@edit');
    $api->post('/user/education/add', 'Plugins\UserEducations\Controllers\UserEducationsController@store');
    $api->put('/user/education/{id}', 'Plugins\UserEducations\Controllers\UserEducationsController@update');
    $api->delete('/user/education/{id}', 'Plugins\UserEducations\Controllers\UserEducationsController@destroy');
});
