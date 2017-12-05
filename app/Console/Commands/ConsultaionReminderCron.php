<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\ReminderService;

class ConsultaionReminderCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'consultaion:reminder';

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
     * @param ReminderService $reminder_service
     */
    public function __construct(ReminderService $reminder_service)
    {
        parent::__construct();
        $this->ReminderService = $reminder_service;
    }

    /**
     *  Execute the console command.
     */
    public function handle()
    {
        $this->ReminderService->reminderAlert();
    }
}