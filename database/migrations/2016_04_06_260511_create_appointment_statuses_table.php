<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentStatusesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('appointment_statuses', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('name'); 
            $table->bigInteger('appointment_count')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('appointment_statuses');
    }
}