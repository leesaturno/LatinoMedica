<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\AppointmentService;

class AppointmentAlertCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'appointmentalert:cron';

    /**
     * @var
     */
    protected $MailService;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cron command to alert appointment day before only for gold user doctors';

    /**
     * AppointmentAlertCron constructor.
     * @param AppointmentService $appointment_service
     */
    public function __construct(AppointmentService $appointment_service)
    {
        parent::__construct();
        $this->AppointmentService = $appointment_service;
    }

    /**
     *  Execute the console command.
     */
    public function handle()
    {
        $this->AppointmentService->appointmentalert();
        $this->AppointmentService->changeappointmentexpiry();
    }
}