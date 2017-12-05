<?php

namespace Plugins\QuestionAnswer\Providers;

use Illuminate\Support\ServiceProvider;

class QuestionAnswerServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__ . '/../routes.php';
        $this->app->make('Plugins\QuestionAnswer\Controllers\QuestionsController');
        $this->app->make('Plugins\QuestionAnswer\Controllers\AnswersController');
        $this->app->make('Plugins\QuestionAnswer\Controllers\Admin\AdminQuestionsController');
        $this->app->make('Plugins\QuestionAnswer\Controllers\Admin\AdminAnswersController');
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