<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointment_settings', function (Blueprint $table) {
			$table->bigIncrements('id')->unsigned();
			$table->bigInteger('user_id')->unsigned()->nullable();
			$table->tinyInteger('is_today_first_day');
			$table->integer('calendar_slot_id')->unsigned()->nullable();
			$table->tinyInteger('is_two_session');
			$table->time('practice_open');
			$table->time('lunch_at');
			$table->time('resume_at');
			$table->time('practice_close');
			$table->tinyInteger('type')->comment('0: Same for All, 1: Individual Days');
			$table->tinyInteger('is_sunday_open');
			$table->tinyInteger('sunday_two_session');
			$table->time('sunday_practice_open');
			$table->time('sunday_lunch_at');
			$table->time('sunday_resume_at');
			$table->time('sunday_practice_close');
			$table->tinyInteger('is_monday_open');
			$table->tinyInteger('monday_two_session');
			$table->time('monday_practice_open');
			$table->time('monday_lunch_at');
			$table->time('monday_resume_at');
			$table->time('monday_practice_close');
			$table->tinyInteger('is_tuesday_open');
			$table->tinyInteger('tuesday_two_session');
			$table->time('tuesday_practice_open');
			$table->time('tuesday_lunch_at');
			$table->time('tuesday_resume_at');
			$table->time('tuesday_practice_close');
			$table->tinyInteger('is_wednesday_open');
			$table->tinyInteger('wednesday_two_session');
			$table->time('wednesday_practice_open');
			$table->time('wednesday_lunch_at');
			$table->time('wednesday_resume_at');
			$table->time('wednesday_practice_close');
			$table->tinyInteger('is_thrusday_open');
			$table->tinyInteger('thrusday_two_session');
			$table->time('thrusday_practice_open');
			$table->time('thrusday_lunch_at');
			$table->time('thrusday_resume_at');
			$table->time('thrusday_practice_close');
			$table->tinyInteger('is_friday_open');
			$table->tinyInteger('friday_two_session');
			$table->time('friday_practice_open');
			$table->time('friday_lunch_at');
			$table->time('friday_resume_at');
			$table->time('friday_practice_close');
			$table->tinyInteger('is_saturday_open');
			$table->tinyInteger('saturday_two_session');
			$table->time('saturday_practice_open');
			$table->time('saturday_lunch_at');
			$table->time('saturday_resume_at');
			$table->time('saturday_practice_close');
			$table->tinyInteger('is_active');
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
        Schema::drop('appointment_settings');
    }
}
