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

//photos admin side
    $api->group(['prefix' => 'admin', 'namespace' => 'Plugins\Photos\Controllers\Admin'], function () use ($api) {
        $api->get('photos', 'AdminPhotosController@index');
        $api->get('photos/{id}/edit', 'AdminPhotosController@edit');
        $api->get('photos/{id}', 'AdminPhotosController@edit');
        $api->post('photos', 'AdminPhotosController@store');
        $api->put('photos/{id}', 'AdminPhotosController@update');
        $api->delete('photos/{id}', 'AdminPhotosController@destroy');
    });

//photos user side    
    $api->get('/photos/{username}', 'Plugins\Photos\Controllers\PhotosController@index');
    $api->get('/photos', 'Plugins\Photos\Controllers\PhotosController@index');
    $api->post('/photos', 'Plugins\Photos\Controllers\PhotosController@store');
    $api->delete('/photos/{id}', 'Plugins\Photos\Controllers\PhotosController@destroy');
});
