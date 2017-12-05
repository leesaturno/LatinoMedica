<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUserReviewsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_reviews', function(Blueprint $table)
		{
			$table->bigIncrements('id', true);
			$table->bigInteger('user_review_type_id')->default(1);
			$table->bigInteger('user_id')->unsigned()->nullable();
			$table->bigInteger('doctor_user_id')->unsigned();
			$table->bigInteger('appointment_id')->unsigned()->nullable();
			$table->string('pet_name', 100)->nullable();
			$table->text('review');
			$table->float('bedside_rate', 10)->nullable()->default(0.00);
			$table->float('waittime_rate', 10)->nullable()->default(0.00);
			$table->bigInteger('ip_id')->unsigned()->nullable()->default(0);
			$table->boolean('is_active')->default(1);
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
		Schema::drop('user_reviews');
	}

}
