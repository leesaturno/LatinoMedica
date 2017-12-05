<?php
namespace App\Services;

use App\Transaction;
use Illuminate\Support\Facades\Auth;
use Carbon;
use App\TransactionType;

class TransactionService
{

    /**
     * TransactionService constructor.
     */
    public function __construct()
    {
    }

    /**
     * @param $booker_id
     * @param $host_id
     * @param $transaction_type_id
     * @param $amount
     * @param $foreign_id
     * @param $plugin_name
     * @param null $payment_gateway_id
     * @param float $gateway_fees
     * @param null $description
     */
    public function log($booker_id, $host_id, $transaction_type_id, $amount, $foreign_id, $plugin_name, $payment_gateway_id = null, $gateway_fees = 0.00, $description = null)
    {

        $transaction_arr['user_id'] = (!is_null($booker_id)) ? $booker_id : '';
        $transaction_arr['receiver_user_id'] = (!is_null($host_id)) ? $host_id : '';
        $transaction_type = TransactionType::find($transaction_type_id);
        if (!empty($transaction_type_id)) {
            $transaction_arr['transaction_type_id'] = $transaction_type_id;
        }
        if (!empty($amount)) {
            $transaction_arr['amount'] = $amount;
        }
        if (!empty($payment_gateway_id)) {
            $transaction_arr['payment_gateway_id'] = $payment_gateway_id;
        }
        if (!empty($gateway_fees)) {
            $transaction_arr['gateway_fees'] = $gateway_fees;
        }
        $transaction_arr['description'] = $transaction_type->name;
        $transaction = Transaction::create($transaction_arr);
        if ($plugin_name == 'Bookings' && isPluginEnabled('Bookings')) {
            $booking_transaction = \Plugins\Bookings\Model\Booking::with(['transactions'])->where('id', '=', $foreign_id)->first();
            $booking_transaction->transactions()->save($transaction);
        }
        if ($plugin_name == 'Wallets' && isPluginEnabled('Wallets')) {
            $wallet_transaction = \Plugins\Wallets\Model\Wallet::with(['transactions'])->where('id', '=', $foreign_id)->first();
            $wallet_transaction->transactions()->save($transaction);
        }
        if ($plugin_name == 'Withdrawals' && isPluginEnabled('Withdrawals')) {
            $Withdrawal_transaction = \Plugins\Withdrawals\Model\UserCashWithdrawal::with(['transactions'])->where('id', '=', $foreign_id)->first();
            $Withdrawal_transaction->transactions()->save($transaction);
        }
        if ($plugin_name == 'BookingDisputes' && isPluginEnabled('BookingDisputes')) {
            $dispute_transaction = \Plugins\BookingDisputes\Model\BookingDispute::with(['transactions'])->where('id', '=', $foreign_id)->first();
            $dispute_transaction->transactions()->save($transaction);
        }
    }

    /**
     * @param $transactions
     * @return string
     */
    function transactionDescription($transactions)
    {
        if (!empty($transactions)) {
            try {
                foreach ($transactions as $transaction) {
                    if (in_array($transaction->transaction_type_id, array(config('constants.ConstTransactionTypes.AddedToWallet'), config('constants.ConstTransactionTypes.AdminDeductFundFromWallet')))) {

                        $user_link = (!is_null($transaction->FromUser->username)) ? $transaction->FromUser->username : '';
                    } else {
                        $user_link = (!is_null($transaction->ToUser->username)) ? $transaction->ToUser->username : '';
                    }
                    $item_link = $host_link = $booker_link = $item_amount = $order_link = '';
                    if ($transaction->transactionable_type == 'MorphBooking' && isPluginEnabled('Bookings')) {
                        if (!is_null($transaction->transactionable->item_userable)) {
                            $item_link = '<a href="#/item/' . $transaction->transactionable->id . '/' . $transaction->transactionable->item_userable->slug . '">' . $transaction->transactionable->item_userable->name . '</a>';
                            $host_link = '<a href="' . url('/#/user/' . $transaction->transactionable->item_userable->user->username) . '">' . $transaction->transactionable->item_userable->user->username . '</a>';
                            $booker_link = '<a href="' . url('/#/user/' . $transaction->transactionable->user->username) . '">' . $transaction->transactionable->user->username . '</a>';
                            $order_link = '<a href="' . url('/#/activity/' . $transaction->transactionable->id . '/all') . '">' . $transaction->transactionable->id . '</a>';
                        }
                        if (in_array($transaction->transaction_type_id, array(config('constants.ConstTransactionTypes.RefundForCanceledBooking'), config('constants.ConstTransactionTypes.RefundForBookingCanceledByAdmin')))) {
                            $item_amount = $transaction->transactionable->total_amount + $transaction->transactionable->additional_fee;
                        } else {
                            $item_amount = $transaction->transactionable->total_amount + $transaction->transactionable->additional_fee - $transaction->transactionable->coupon_discount_amount;
                        }
                    } elseif ($transaction->transactionable_type == 'MorphItem' && isPluginEnabled('Items')) {
                        $item_link = $transaction->transactionable->name;
                        if (!empty($transaction->Fromuser)) {
                            $host_link = $transaction->FromUser->username;
                        }
                    }
                    $transactionReplace = array(
                        '##USER##' => $user_link,
                        '##BOOKER##' => $booker_link,
                        '##HOST##' => $host_link,
                        '##ITEM##' => $item_link,
                        '##ORDER_NO##' => $order_link
                    );
                    $user = Auth::user();
                    if (!empty($transaction->transaction_type->message_for_receiver) && $transaction->receiver_user_id == $user->id) {
                        $transaction->description = strtr($transaction->transaction_type->message_for_receiver, $transactionReplace);
                    } elseif ($user->id == config('constants.ConstUserTypes.Admin')) {
                        $transaction->description = strtr($transaction->transaction_type->message_for_admin, $transactionReplace);
                    } else {
                        $transaction->description = strtr($transaction->transaction_type->message, $transactionReplace);
                    }
                }
                return $transactions;
            } catch (Exception $e) {
                return array('error' => 1, 'error_message' => $e->getMessage());
            }
        }
    }

    /**
     * @param        $request
     * @param string $type
     * @return mixed
     */
    public function getTranactionCount($request, $type = 'filter')
    {
        $check_date = $this->getDateFilter($request);
        $check_date = Carbon::parse($check_date)->format('Y-m-d');
        $tranaction_count = Transaction::where('created_at', '>=', $check_date)->count();
        return $tranaction_count;
    }

    /**
     * get the date filter
     * @return $check_date
     */
    public function getDateFilter($request)
    {
        $check_date = Carbon::now()->subDays(7);
        if ($request->has('filter')) {
            if ($request->filter == 'lastDays') {
                $check_date = Carbon::now()->subDays(7);
            } else if ($request->filter == 'lastWeeks') {
                $check_date = Carbon::now()->subWeeks(4);
            } else if ($request->filter == 'lastMonths') {
                $check_date = Carbon::now()->subMonths(3);
            } else if ($request->filter == 'lastYears') {
                $check_date = Carbon::now()->subYears(3);
            }
        }
        return $check_date;
    }

}
