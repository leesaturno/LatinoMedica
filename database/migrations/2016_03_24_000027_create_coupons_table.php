<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coupons', function (Blueprint $table) {
            $table->bigIncrements('id')->index();;
            $table->timestamps();
            $table->string('name', 100);
            $table->string('slug', 100)->unique();
            $table->text('description');
            $table->double('discount',10,2)->default(0.00);;
            $table->string('discount_type');
            $table->bigInteger('no_of_quantity')
                ->default(0);
            $table->bigInteger('no_of_quantity_used')
                ->default(0);
            $table->dateTime('validity_start_date');
            $table->dateTime('validity_end_date');
            $table->double('maximum_discount_amount',10,2)
                ->default(0.00);
            $table->boolean('is_active');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('coupons');
    }
}
