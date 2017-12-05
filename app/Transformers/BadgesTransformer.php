<?php
namespace App\Transformers;

use App\Http\Middleware;
use App\Gender;
use Illuminate\Support\Facades\Auth;
use League\Fractal;
use App\User;
use App\Services\AttachmentService;
use App\Attachment;
use App\Specialty;
use App\Language;
use Plugins\UserEducations\Model\UserEducation;
use Plugins\UserFavorites\Model\UserFavorite;
use App\Transformers\AttachmentTransformer;

class BadgesTransformer extends Fractal\TransformerAbstract
{

    /**
     * @param User $user
     * @return array
     */
    public function transform(Attachment $attachment)
    {
        $output = array();
        $output = array_only($attachment->toArray(), ['id', 'created_at', 'attachmentable_id', 'attachmentable_type', 'filename', 'dir', 'mimetype', 'filesize', 'height', 'width']);
        $output['thumb'] = AttachmentService::getThumbUrl($attachment, $attachment->attachmentable_id);
        return $output;
    }

}
