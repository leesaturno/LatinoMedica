<?php

namespace Plugins\UserFavorites\Providers;

use Illuminate\Support\ServiceProvider;

class UserFavoriteServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__ . '/../routes.php';
        $this->app->make('Plugins\UserFavorites\Controllers\UserFavoritesController');
        $this->app->make('Plugins\UserFavorites\Controllers\Admin\AdminUserFavoritesController');
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