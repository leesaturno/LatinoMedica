<?php

namespace Plugins\UserEducations\Providers;

use Illuminate\Support\ServiceProvider;

class UserEducationServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__ . '/../routes.php';
        $this->app->make('Plugins\UserEducations\Controllers\UserEducationsController');
        $this->app->make('Plugins\UserEducations\Controllers\Admin\AdminUserEducationsController');
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