<?php

namespace Plugins\Photos\Providers;

use Illuminate\Support\ServiceProvider;

class PhotoServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__ . '/../routes.php';
        $this->app->make('Plugins\Photos\Controllers\PhotosController');
        $this->app->make('Plugins\Photos\Controllers\Admin\AdminPhotosController');
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