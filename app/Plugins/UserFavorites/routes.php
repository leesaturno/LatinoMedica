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
    $api->group(['prefix' => 'admin', 'namespace' => 'Plugins\UserFavorites\Controllers\Admin'], function () use ($api) {
        $api->get('/user_favorites', 'AdminUserFavoritesController@index');
    });
//user educations user side    
    $api->get('/favorites', 'Plugins\UserFavorites\Controllers\UserFavoritesController@index');
    $api->post('/favorite/add', 'Plugins\UserFavorites\Controllers\UserFavoritesController@add');
    $api->delete('/favorite/delete/{id}', 'Plugins\UserFavorites\Controllers\UserFavoritesController@destroy');
});
