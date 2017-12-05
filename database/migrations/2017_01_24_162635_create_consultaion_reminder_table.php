<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsultaionReminderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultaion_reminder', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('doctor_id')->unsigned()->nullable();
            $table->bigInteger('patient_id')->unsigned()->nullable();
            $table->text('reminder_text');
            $table->date('remind_on');
            $table->boolean('is_reminded');
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
        Schema::drop('consultaion_reminder');
    }
}
