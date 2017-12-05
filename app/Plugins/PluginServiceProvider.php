<?php

namespace Plugins;

use Illuminate\Support\ServiceProvider;
use File;
use Log;

class PluginServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $enabled_plugins = enabled_plugins();
        foreach ($enabled_plugins as $plugins) {
            foreach (glob(base_path("app/Plugins/$plugins/Providers/*.php")) as $files) {
                $filename = File::name($files);
                $file_path = 'Plugins' . '\\' . $plugins . '\\Providers' . '\\' . $filename;
                $this->app->register($file_path);
            }
        }
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
