<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->timestamps();
            $table->bigInteger('role_id')->unsigned()->nullable()->index();
            $table->foreign('role_id')
                    ->references('id')->on('roles')
                    ->onDelete('set null');
            $table->string('username');
            $table->string('email')->unique();
            $table->string('password');
            $table->double('available_wallet_amount', 10, 2)->default(0.00);
            $table->double('blocked_amount', 10, 2)->default(0.00);
            $table->bigInteger('user_login_count')->default(0);
            $table->boolean('is_agree_terms_conditions');
            $table->boolean('is_active');
            $table->boolean('is_email_confirmed');
            $table->bigInteger('register_ip_id')->unsigned()->nullable()->index();
            $table->foreign('register_ip_id')
                    ->references('id')->on('ips')
                    ->onDelete('set null');
            $table->bigInteger('last_login_ip_id')->unsigned()->nullable()->index();
            $table->foreign('last_login_ip_id')
                    ->references('id')->on('ips')
                    ->onDelete('set null');
            $table->bigInteger('user_avatar_source_id')->nullable();
            $table->rememberToken();
            $table->string('pwd_reset_token');
            $table->bigInteger('user_review_count')->default(0);
            $table->double('bedside_rating_count', 10, 2)->default(0.00);
            $table->bigInteger('bedside_avg_rating')->default(0);
            $table->double('timing_rating_count', 10, 2)->default(0.00);
            $table->bigInteger('timing_avg_rating')->default(0);
            $table->double('overall_rating_count', 10, 2)->default(0.00);
            $table->bigInteger('overall_avg_rating')->default(0);
            $table->bigInteger('user_rating_count')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('users');
    }

}
