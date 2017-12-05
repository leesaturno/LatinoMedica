<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSpecialtyDiseasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('specialty_diseases', function(Blueprint $table)
		{
			$table->bigIncrements('id', true)->unsigned();
			$table->bigInteger('user_id')->unsigned();
			$table->bigInteger('specialty_id')->unsigned();
			$table->string('name', 250)->nullable();
			$table->string('slug', 280)->nullable();
			$table->bigInteger('user_count')->unsigned()->nullable()->default(0);
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
		Schema::drop('specialty_diseases');
	}

}
