<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentGatewaysTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('payment_gateways', function(Blueprint $table) {
            $table->bigIncrements('id', true)->unsigned();
            $table->timestamps();
            $table->string('name');
            $table->string('display_name');
            $table->text('description');
            $table->double('gateway_fees',10,2);
            $table->boolean('is_test_mode')->default(1);
            $table->boolean('is_active')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('payment_gateways');
    }

}
