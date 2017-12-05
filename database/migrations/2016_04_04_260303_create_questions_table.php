<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('questions', function(Blueprint $table)
		{
			$table->bigInteger('id', true)->unsigned();
			$table->bigInteger('user_id')->unsigned()->nullable();
			$table->bigInteger('specialty_id')->unsigned();
			$table->text('question');
			$table->string('slug');
			$table->text('description')->nullable();
			$table->bigInteger('answer_count')->unsigned()->nullable()->default(0);
			$table->integer('is_answered')->unsigned()->nullable()->default(0);
			$table->boolean('is_active')->nullable()->default(0);
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
		Schema::drop('questions');
	}

}
