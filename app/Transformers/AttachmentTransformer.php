<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-04-01
 * Time: 12:30 PM
 */

namespace App\Transformers;

use League\Fractal;
use App\Attachment;
use App\Services\AttachmentService;
use Illuminate\Support\Facades\Hash;
use File;
use App\User;

/**
 * Class AttachmentTransformer
 * @package App\Transformers
 */
class AttachmentTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Attachment $attachment
     * @return array
     */
    public function transform(Attachment $attachment)
    {
        $output = array();
        $output['thumb'] = AttachmentService::getThumbUrl($attachment, $attachment->attachmentable_id);
        return $output;
    }

}

