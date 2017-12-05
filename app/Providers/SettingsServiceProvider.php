<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Schema;
class SettingsServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        if(Schema::hasTable('settings')) {
              $setting = \App\Setting::lists('value', 'name')->all();
              foreach($setting as $key=>$value) {
                  config()->set( $key, $value);
              }
        }
    }
}
