<?php

namespace Plugins\DoctorReviews\Providers;

use Illuminate\Support\ServiceProvider;

class DoctorReviewserviceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__ . '/../routes.php';
        $this->app->make('Plugins\DoctorReviews\Controllers\DoctorReviewsController');
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