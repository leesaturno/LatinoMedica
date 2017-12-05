<?php

namespace App\Services;

use App\Services\MailService;
use App\Reminder;
use App\User;
use App\UserProfile;
use Carbon;
use App\CronFlag;

class ReminderService extends MailService {

    public function reminderAlert() {
        $now = date('Y-m-d');
        $reminderDetails = Reminder::where('is_reminded', false)->where('remind_on', $now)->orderBy('remind_on')->get();
        foreach($reminderDetails as $reminderDetail) {
            // @TODO sms remainder
        }
    }
}

?>