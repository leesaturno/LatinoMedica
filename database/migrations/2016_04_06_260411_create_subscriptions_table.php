<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubscriptionsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('subscriptions', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('name'); 
            $table->double('price', 10, 2)->default(0.00);
            $table->string('description'); 
            $table->bigInteger('period_days')->nullable()->default(0);
            $table->bigInteger('user_count')->nullable()->default(0);
            $table->boolean('is_active')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('subscriptions');
    }
}