<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaypalTransactionLogsTable extends Migration
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        Schema::create('paypal_transaction_logs', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->timestamps();
            $table->double('amount', 10, 2)->default(0.00);
            $table->string('payment_id');
            $table->string('paypal_transaction_logable_type');
            $table->bigInteger('paypal_transaction_logable_id')->unsigned();
            $table->text('paypal_pay_key');
            $table->string('payer_id')->nullable();
            $table->string('authorization_id')->nullable();
            $table->string('status');
            $table->string('payment_type');
            $table->string('buyer_id');
            $table->string('buyer_email');
            $table->string('buyer_address');
        });
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        Schema::drop('paypal_transaction_logs');
    }
}
