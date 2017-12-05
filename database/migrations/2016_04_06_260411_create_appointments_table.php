<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('appointments', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->bigInteger('user_id')->unsigned()->index('user_id');
            $table->bigInteger('doctor_user_id')->index('doctor_user_id');
            $table->date('appointment_date')->nullable();
            $table->string('appointment_time'); 
            $table->string('phone'); 
            $table->text('patient_note');
            $table->text('doctor_note');
            $table->string('first_name'); 
            $table->string('last_name'); 
            $table->string('zip_code'); 
            $table->date('dob')->nullable();
            $table->integer('gender_id')->nullable(); 
            $table->boolean('is_guest_appointment')->default(0);
            $table->string('guest_first_name'); 
            $table->string('guest_last_name'); 
            $table->string('guest_zip_code'); 
            $table->date('guest_dob');
            $table->integer('guest_gender_id')->nullable(); 
            $table->bigInteger('specialty_disease_id')->unsigned()->index('specialty_disease_id');
            $table->boolean('is_seen_before')->default(0);
            $table->bigInteger('appointment_status_id')->unsigned()->index('appointment_status_id');
            $table->boolean('is_offline_booking')->default(0);
            $table->bigInteger('preference_type_id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('appointments');
    }
}