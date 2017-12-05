<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Laravel\Lumen\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\CurrencyCron::class,
        Commands\AppointmentAlertCron::class,
        Commands\ConsultaionReminderCron::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule $schedule
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command("currency:cron")->daily();
        $schedule->command("appointmentalert:cron")->daily();
        $schedule->command("consultaion:reminder")->daily();
    }
}
