<?php

namespace Plugins\Subscriptions\Providers;

use Illuminate\Support\ServiceProvider;

class SubscriptionServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__ . '/../routes.php';
        $this->app->make('Plugins\Subscriptions\Controllers\SubscriptionsController');
        $this->app->make('Plugins\Subscriptions\Controllers\Admin\AdminSubscriptionsController');
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