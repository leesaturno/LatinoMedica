<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInsurancePatientsLimitTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insurance_patients_limit', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('doctor_id');
            $table->bigInteger('insurance_id');
            $table->integer('allowed_patients');
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
        Schema::drop('insurance_patients_limit');
    }
}
