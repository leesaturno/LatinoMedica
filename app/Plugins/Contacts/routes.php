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
    $api->group(['prefix' => 'admin', 'namespace' => 'Plugins\Contacts\Controllers\Admin'], function () use ($api) {
        // contacts admin side
        $api->delete('contacts/{id}', 'AdminContactsController@destroy');
        $api->get('contacts', 'AdminContactsController@index');
        $api->get('contacts/{id}', 'AdminContactsController@edit');
    });
    //contacts user side
    $api->post('/contacts', 'Plugins\Contacts\Controllers\ContactsController@store');
});
