<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserEducationsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void

     */
    public function up() {
        Schema::create('user_educations', function (Blueprint $table) {
            $table->bigIncrements('id', true);
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->string('education');
            $table->string('location');
            $table->string('organization');
            $table->date('certification_date')->nullable();
            $table->boolean('is_active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('user_educations');
    }

}
