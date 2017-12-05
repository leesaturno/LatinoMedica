<?php
namespace App\Services;

use App\MoneyTransferAccount;

class MoneyTransferAccountService
{
    /**
     * get the active users MoneyTransferAccount
     * @param $user_id
     * @return $money_transfer_account
     */
    public function getUserMoneyTransferAccount($user_id)
    {
        $money_transfer_account = MoneyTransferAccount::where('user_id', '=', $user_id)
            ->where('is_primary', '=', 1)
            ->first();
        return $money_transfer_account;
    }
}

?>