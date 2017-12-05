<?php

namespace Plugins\UserReviews\Providers;

use Illuminate\Support\ServiceProvider;

class UserReviewServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__ . '/../routes.php';
        $this->app->make('Plugins\UserReviews\Controllers\UserReviewsController');
        $this->app->make('Plugins\UserReviews\Controllers\Admin\AdminUserReviewsController');
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