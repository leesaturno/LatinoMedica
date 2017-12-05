<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserProfilesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->bigInteger('user_id')->unsigned()
                    ->nullable()
                    ->index()
                    ->references('id')->on('users')
                    ->onDelete('cascade');
            $table->string('first_name', 100)
                    ->nullable();
            $table->string('last_name', 100)
                    ->nullable();
            $table->string('dr_title', 20)
                    ->nullable();
            $table->string('practice_name', 200)
                    ->nullable();
            $table->text('specialty_id')
                    ->nullable();
            $table->text('language_id')
                    ->nullable();
            $table->text('specialty_disease_id')
                    ->nullable();
            $table->integer('gender_id')->unsigned();
            $table->date('dob');
            $table->string('phone', 15)
                    ->nullable();
            $table->string('work_phone_number', 20)
                    ->nullable();
            $table->text('booking_instructions')
                    ->nullable();
            $table->text('about_me')
                    ->nullable();
            $table->text('board_certifications')
                    ->nullable();
            $table->text('address')
                    ->nullable();
            $table->text('memberships')
                    ->nullable();
            $table->integer('city_id');
            $table->integer('country_id');
            $table->string('postal_code', 10)
                    ->nullable();
            $table->integer('notification_type_id');
            $table->tinyInteger('is_newpatient_accepted');
            $table->integer('is_online_booking')->default(1);
            $table->text('awards')
                    ->nullable();
            $table->double('latitude');
            $table->double('longitude');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('user_profiles');
    }

}
