<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class MessageContent extends Model
{
    /**
     * @var string
     */
    protected $table = "message_contents";

    protected $fillable = [
        'subject', 'message', 'admin_suspend', 'is_system_flagged', 'detected_suspicious_words'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function message()
    {
        return $this->hasMany(Message::class);
    }
}
