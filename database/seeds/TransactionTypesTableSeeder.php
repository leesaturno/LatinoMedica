<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Plugins\App\TransactionType;
use Illuminate\Support\Facades\Hash;

class TransactionTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TransactionType::create([
            'name' => 'Amount added to wallet',
            'is_credit' => 1,
            'is_credit_to_receiver' => 0,
            'is_credit_to_admin' => 1,
            'message' => 'Amount added to wallet',
            'message_for_receiver' => '',
            'message_for_admin' => '##USER## added amount to his wallet',
            'transaction_variables' => 'USER'
        ]);
        TransactionType::create([
            'name' => 'Item item fee',
            'is_credit' => 0,
            'is_credit_to_receiver' => 0,
            'is_credit_to_admin' => 1,
            'message' => 'Item fee paid for item ##ITEM##',
            'message_for_receiver' => '',
            'message_for_admin' => '##HOST## paid item fee for item ##ITEM##',
            'transaction_variables' => 'ITEM, HOST'
        ]);
        TransactionType::create([
            'name' => 'Booked a item',
            'is_credit' => 1,
            'is_credit_to_receiver' => 0,
            'is_credit_to_admin' => 0,
            'message' => 'Booked# ##ORDER_NO## a item ##ITEM## for ##ITEM_AMOUNT##',
            'message_for_receiver' => '##BOOKER## booked# ##ORDER_NO## item ##ITEM## for ##ITEM_AMOUNT##',
            'message_for_admin' => '##BOOKER## booked# ##ORDER_NO## a item ##ITEM## for ##ITEM_AMOUNT##',
            'transaction_variables' => 'BOOKER, ITEM, ITEM_AMOUNT, ORDER_NO'
        ]);
        TransactionType::create([
            'name' => 'Refund for expired booking',
            'is_credit' => 1,
            'is_credit_to_receiver' => 0,
            'is_credit_to_admin' => 1,
            'message' => 'Booking# ##ORDER_NO## expired for item ##ITEM##',
            'message_for_receiver' => 'Booking# ##ORDER_NO## expired for item ##ITEM##',
            'message_for_admin' => 'Booking# ##ORDER_NO## expired for item ##ITEM##',
            'transaction_variables' => 'ITEM, ORDER_NO'
        ]);
        TransactionType::create([
            'name' => 'Refund for rejected booking',
            'is_credit' => 1,
            'is_credit_to_receiver' => 0,
            'is_credit_to_admin' => 1,
            'message' => '##HOST## rejected booking# ##ORDER_NO## for item ##ITEM##',
            'message_for_receiver' => 'You have rejected booking# ##ORDER_NO## for item ##ITEM##',
            'message_for_admin' => '##HOST## rejected booking# ##ORDER_NO## for item ##ITEM##',
            'transaction_variables' => 'ITEM, ORDER_NO, HOST'
        ]);
        TransactionType::create([
            'name' => 'Refund for cancelled booking',
            'is_credit' => 1,
            'is_credit_to_receiver' => 0,
            'is_credit_to_admin' => 1,
            'message' => 'Cancelled booking# ##ORDER_NO## for item ##ITEM##',
            'message_for_receiver' => 'Cancelled booking# ##ORDER_NO## for item ##ITEM##',
            'message_for_admin' => 'Cancelled booking# ##ORDER_NO## for item ##ITEM##',
            'transaction_variables' => 'ITEM, ORDER_NO'
        ]);
        TransactionType::create([
            'name' => 'Refund for admin cancelled booking',
            'is_credit' => 1,
            'is_credit_to_receiver' => 0,
            'is_credit_to_admin' => 1,
            'message' => 'Administrator cancelled booking# ##ORDER_NO## for item ##ITEM##',
            'message_for_receiver' => 'Administrator cancelled booking# ##ORDER_NO## for item ##ITEM##',
            'message_for_admin' => 'Cancelled booking# ##ORDER_NO## for item ##ITEM##',
            'transaction_variables' => 'ITEM, ORDER_NO'
        ]);
        TransactionType::create([
            'name' => 'Host amount cleared',
            'is_credit' => 1,
            'is_credit_to_receiver' => 0,
            'is_credit_to_admin' => 1,
            'message' => 'Booking# ##ORDER_NO## amount cleared to ##HOST## for item ##ITEM##',
            'message_for_receiver' => 'Booking# ##ORDER_NO## amount cleared for item ##ITEM##',
            'message_for_admin' => 'Booking# ##ORDER_NO## amount cleared to ##HOST## for item ##ITEM##',
            'transaction_variables' => 'ITEM, ORDER_NO, HOST'
        ]);
        TransactionType::create([
            'name' => 'Cash withdrawal request',
            'is_credit' => 1,
            'is_credit_to_receiver' => 1,
            'is_credit_to_admin' => 1,
            'message' => 'Cash withdrawal request made by you',
            'message_for_receiver' => '',
            'message_for_admin' => 'Cash withdrawal request made by',
            'transaction_variables' => ''
        ]);
        TransactionType::create([
            'name' => 'Cash withdrawal request approved',
            'is_credit' => 1,
            'is_credit_to_receiver' => 1,
            'is_credit_to_admin' => 1,
            'message' => 'Your cash withdrawal request approved by Administrator',
            'message_for_receiver' => '',
            'message_for_admin' => 'You (Administrator) have approved ##HOST## cash withdrawal request',
            'transaction_variables' => 'HOST'
        ]);
        TransactionType::create([
            'name' => 'Cash withdrawal request rejected',
            'is_credit' => 0,
            'is_credit_to_receiver' => 1,
            'is_credit_to_admin' => 1,
            'message' => 'Amount refunded for rejected cash withdrawal request',
            'message_for_receiver' => '',
            'message_for_admin' => 'Amount refunded to ##USER## for rejected cash withdrawal request',
            'transaction_variables' => 'USER'
        ]);
        TransactionType::create([
            'name' => 'Cash withdrawal request paid',
            'is_credit' => 1,
            'is_credit_to_receiver' => 1,
            'is_credit_to_admin' => 1,
            'message' => 'Cash withdraw request amount paid to you',
            'message_for_receiver' => '',
            'message_for_admin' => 'Cash withdraw request amount paid to ##USER##',
            'transaction_variables' => 'USER'
        ]);
        TransactionType::create([
            'name' => 'Cash withdrawal request failed',
            'is_credit' => 0,
            'is_credit_to_receiver' => 1,
            'is_credit_to_admin' => 0,
            'message' => 'Amount refunded for failed cash withdrawal request',
            'message_for_receiver' => '',
            'message_for_admin' => 'Amount refunded to ##USER## for failed cash withdrawal request',
            'transaction_variables' => 'USER'
        ]);
        TransactionType::create([
            'name' => 'Admin add fund to wallet',
            'is_credit' => 0,
            'is_credit_to_receiver' => 0,
            'is_credit_to_admin' => 1,
            'message' => 'Administrator added fund to your wallet',
            'message_for_receiver' => 'Administrator added fund to your wallet',
            'message_for_admin' => 'Added fund to ##USER## wallet',
            'transaction_variables' => 'USER'
        ]);
        TransactionType::create([
            'name' => 'Admin deduct fund from wallet',
            'is_credit' => 1,
            'is_credit_to_receiver' => 1,
            'is_credit_to_admin' => 0,
            'message' => 'Administrator deducted fund from your wallet',
            'message_for_receiver' => 'Administrator deducted fund from your wallet',
            'message_for_admin' => 'Deducted fund from ##USER## wallet',
            'transaction_variables' => 'USER'
        ]);
    }
}