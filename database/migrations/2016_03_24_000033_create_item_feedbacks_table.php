<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemFeedbacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_feedbacks', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->timestamps();
            $table->bigInteger('user_id')->unsigned()->nullable()->index();;
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');
            $table->bigInteger('item_user_id')->unsigned()->nullable()->index();;
            $table->foreign('item_user_id')
                ->references('id')->on('item_users')
                ->onDelete('set null');
            $table->bigInteger('item_id')->unsigned()->nullable()->index();;
            $table->foreign('item_id')
                ->references('id')->on('items')
                ->onDelete('cascade');
            $table->text('feedback');
            $table->bigInteger('ip_id')->unsigned()->nullable()->index();;
            $table->foreign('ip_id')
                ->references('id')->on('ips')
                ->onDelete('set null');
            $table->bigInteger('rating')
                ->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('item_feedbacks');
    }
}
