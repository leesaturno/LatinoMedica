<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_users', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->timestamps();
            $table->bigInteger('user_id')->unsigned()->nullable()->index();
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('set null');
            $table->bigInteger('item_userable_id');
            $table->string('item_userable_type');
            $table->bigInteger('booking_type_id');
            $table->bigInteger('item_user_status_id')->unsigned()->nullable()->index();
            $table->foreign('item_user_status_id')
                ->references('id')->on('item_user_statuses')
                ->onDelete('set null');
            $table->bigInteger('coupon_id')->unsigned()->nullable()->index();
            $table->foreign('coupon_id')
                ->references('id')->on('coupons')
                ->onDelete('set null');
            $table->bigInteger('cancellation_type_id')->unsigned()->nullable()->index();
            $table->foreign('cancellation_type_id')
                ->references('id')->on('cancellation_types')
                ->onDelete('set null');
            $table->bigInteger('payment_gateway_id');
            $table->bigInteger('sudopay_gateway_id');
            $table->bigInteger('sudopay_payment_id');
            $table->string('sudopay_pay_key');
            $table->bigInteger('quantity');
            $table->dateTime('item_booking_start_date');
            $table->dateTime('item_booking_end_date');
            $table->double('deposit_amount', 10, 2)->default(0.00);
            $table->double('coupon_discount_amount', 10, 2)->default(0.00);
            $table->double('surcharge_amount', 10, 2)->default(0.00);
            $table->double('extra_accessory_amount', 10, 2)->default(0.00);
            $table->double('tax_amount', 10, 2)->default(0.00);
            $table->double('insurance_amount', 10, 2)->default(0.00);
            $table->double('additional_fee', 10, 2)->default(0.00);
            $table->double('admin_commission_amount', 10, 2)->default(0.00);
            $table->double('cancellation_deduct_amount', 10, 2)->default(0.00);
            $table->double('total_amount', 10, 2)->default(0.00);
            $table->string('reason_for_cancellation');
            $table->dateTime('cancellation_date');
            $table->boolean('is_payment_cleared');
            $table->boolean('is_dispute');
            $table->double('claim_request_amount', 10, 2)->default(0.00);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('item_users');
    }
}

