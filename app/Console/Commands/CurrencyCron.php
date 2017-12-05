<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\CurrencyService;

class CurrencyCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'currency:cron';

    /**
     * @var
     */
    protected $CurrencyService;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cron command to update daily currency rates';

    /**
     * CurrencyCron constructor.
     * @param CurrencyService $currency_service
     */
    public function __construct(CurrencyService $currency_service)
    {
        parent::__construct();
        $this->CurrencyService = $currency_service;
    }

    /**
     *  Execute the console command.
     */
    public function handle()
    {
        $this->CurrencyService->currencyconversion();
    }
}