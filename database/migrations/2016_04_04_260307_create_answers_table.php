<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnswersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('answers', function(Blueprint $table)
		{
			$table->bigIncrements('id', true)->unsigned();
			$table->bigInteger('user_id')->unsigned();
			$table->bigInteger('question_id')->unsigned();
			$table->string('pet_name', 100)->nullable();
			$table->text('answer');
			$table->boolean('is_active')->default(0);
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
		Schema::drop('answers');
	}

}
