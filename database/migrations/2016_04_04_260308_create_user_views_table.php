<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserViewsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_views', function(Blueprint $table)
		{
			$table->bigIncrements('id', true)->unsigned();
			$table->bigInteger('user_id')->unsigned()->index('user_id');
			$table->bigInteger('viewing_user_id')->unsigned()->nullable()->index('viewing_user_id');
			$table->bigInteger('ip_id')->unsigned()->default(0)->index('ip_id');
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
		Schema::drop('user_views');
	}

}
