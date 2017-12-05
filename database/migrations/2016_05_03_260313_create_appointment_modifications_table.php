<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentModificationsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('appointment_modifications', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->date('appoint_date');
            $table->tinyInteger('is_two_session')->default(0);
            $table->time('practice_open');
            $table->time('lunch_at');
            $table->time('resume_at');
            $table->time('practice_close');
            $table->tinyInteger('type')->default(0)->comment('1:Make day off, 0:Schedule Change');
            $table->tinyInteger('is_active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('appointment_modifications');
    }

}