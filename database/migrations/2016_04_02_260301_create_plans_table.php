<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
	 * @author Mugundhan_352at15
     */
    public function up()
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name',100);
            $table->text('description');
            $table->text('features');
            $table->string('slug', 150);
            $table->integer('plan_user_count')->unsigned()->default(0);
            $table->integer('user_count')->unsigned()->default(0);
            $table->decimal('amount', 10,2);
            $table->integer('duration')->unsigned()->default(0);
            $table->boolean('is_active');
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
        Schema::drop('plans');
    }
}
