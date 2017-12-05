<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttachmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attachments', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->timestamps();
            $table->bigInteger('attachmentable_id');
            $table->string('attachmentable_type', 100);
            $table->string('filename', 100);
            $table->string('dir', 100);
            $table->string('mimetype', 100);
            $table->bigInteger('filesize');
            $table->bigInteger('height');
            $table->bigInteger('width');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('attachments');
    }
}
