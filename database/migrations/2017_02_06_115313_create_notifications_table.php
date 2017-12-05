<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id')->unsigned()
                    ->index()
                    ->references('id')->on('users')
                    ->onDelete('cascade');
            $table->boolean('is_remind_email_wellness');
            $table->boolean('is_remind_app_appointments');
            $table->boolean('is_remind_app_appointment_changed');
            $table->boolean('is_remind_app_wellness');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('notifications');
    }
}
