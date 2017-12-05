<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSudopayPaymentGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sudopay_payment_groups', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->timestamps();
            $table->bigInteger('sudopay_payment_group_id')->unsigned()->nullable()->index();
            $table->foreign('sudopay_payment_group_id')
                ->references('id')->on('sudopay_payment_groups')
                ->onDelete('set null');
            $table->string('name');
            $table->string('thumb_url');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sudopay_payment_groups');
    }
}
