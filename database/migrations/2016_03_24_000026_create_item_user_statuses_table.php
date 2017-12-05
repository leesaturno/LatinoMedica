<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemUserStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_user_statuses', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->timestamps();
            $table->string('name');
            $table->bigInteger('item_user_count')->default(0);
            $table->string('slug')->unique();
            $table->text('description');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('item_user_statuses');
    }
}
