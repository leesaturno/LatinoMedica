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

//Subscriptions admin side
    $api->group(['prefix' => 'admin', 'namespace' => 'Plugins\Subscriptions\Controllers\Admin'], function () use ($api) {
        $api->get('subscriptions', 'AdminSubscriptionsController@index');
        $api->get('subscriptions/{id}/edit', 'AdminSubscriptionsController@edit');
        $api->get('subscriptions/{id}', 'AdminSubscriptionsController@edit');
        $api->post('subscriptions', 'AdminSubscriptionsController@store');
        $api->put('subscriptions/{id}', 'AdminSubscriptionsController@update');
        $api->delete('subscriptions/{id}', 'AdminSubscriptionsController@destroy');
    });

//Subscriptions educations user side    
    $api->get('/subscriptions', 'Plugins\Subscriptions\Controllers\SubscriptionsController@index');
    $api->get('/subscriptions/{id}', 'Plugins\Subscriptions\Controllers\SubscriptionsController@show');
    $api->put('/subscriptions/{id}', 'Plugins\Subscriptions\Controllers\SubscriptionsController@update');
    $api->delete('/subscriptions/{id}', 'Plugins\Subscriptions\Controllers\SubscriptionsController@destroy');

    $api->get('/subscribe/list', 'Plugins\Subscriptions\Controllers\SubscriptionsController@subscribe');
});
