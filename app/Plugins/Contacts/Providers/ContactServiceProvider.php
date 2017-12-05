<?php

namespace Plugins\Contacts\Providers;

use Illuminate\Support\ServiceProvider;

class ContactServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__ . '/../routes.php';
        $this->app->make('Plugins\Contacts\Controllers\ContactsController');
        $this->app->make('Plugins\Contacts\Controllers\Admin\AdminContactsController');
    }

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
