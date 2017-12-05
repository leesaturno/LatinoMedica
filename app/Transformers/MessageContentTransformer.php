<?php

namespace App\Transformers;

use League\Fractal;
use App\MessageContent;

/**
 * Class MessageContentTransformer
 * @package MessageContent\Transformers
 */
class MessageContentTransformer extends Fractal\TransformerAbstract
{
     /**
     * @param MessageContent $message_content
     * @return array
     */
    public function transform(MessageContent $message_content)
    {
        $output = array_only($message_content->toArray(), ['subject', 'message', 'admin_suspend', 'is_system_flagged', 'detected_suspicious_words']);
        return $output;
    }
}