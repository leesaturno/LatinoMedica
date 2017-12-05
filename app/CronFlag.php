<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class CronFlag extends Model
{
    /**
     * @var string
     */
    protected $table = "cron_flags";

    protected $fillable = [
        'cron_name', 'status'
    ];
}
