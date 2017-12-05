<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSpecialtiesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('specialties', function(Blueprint $table)
		{
			$table->bigIncrements('id', true)->unsigned();
			$table->bigInteger('user_id')->unsigned();
			$table->string('name', 250)->nullable();
			$table->string('slug', 280)->nullable();
			$table->bigInteger('speciality_disease_count')->unsigned()->nullable()->default(0);
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
		Schema::drop('specialties');
	}

}
