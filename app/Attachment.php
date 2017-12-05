<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    /**
     * @var string
     */
    protected $table = "attachments";

    protected $fillable = [
        'filename', 'dir', 'mimetype', 'filesize', 'height', 'width','class','attachmentable_id','attachmentable_type'
    ];
    
   
	/**
     * Get all of the owning likeable models.
     */
    public function attachmentable()
    {
        return $this->morphTo();
    }
    
    /**
     * Get all of the owning likeable models.
     */
    public function photoattachmentable()
    {
        return $this->morphTo();
    }
    
}
