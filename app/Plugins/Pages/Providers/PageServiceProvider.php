<?php

namespace Plugins\Pages\Providers;

use Illuminate\Support\ServiceProvider;

class PageServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__ . '/../routes.php';
        $this->app->make('Plugins\Pages\Controllers\PagesController');
        $this->app->make('Plugins\Pages\Controllers\Admin\AdminPagesController');
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
