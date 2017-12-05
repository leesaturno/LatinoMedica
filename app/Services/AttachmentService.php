<?php
/**
 * Created by PhpStorm.
 * User: anandam_023ac09
 * Date: 2016-04-25
 * Time: 01:58 PM
 */

namespace app\Services;

use App\User;
use App\Attachment;
use File;

class AttachmentService
{

    /**
     * Attachment thumb url create
     * @param Attachment $attachment
     * @return array
     */
    public static function getThumbUrl(Attachment $attachment, $user_id)
    {
        $thumb = array();
        $thumb_size_array = array();
        $model = '';
        $provider_user = array();
        $file_name = $attachment->id . '.' . md5($attachment->id . config('constants.Security.salt') . $attachment->filename) . '.' . File::extension($attachment->filename);
        switch ($attachment['attachmentable_type']) {
             case 'App\User':
                if (strpos($attachment->dir, 'app/Badge/') !== false) {
                    $thumb_size_array = config('constants.thumb.badge');
                    $model = 'badge';
                    break;
                } else if (strpos($attachment->dir, 'app/User/') !== false) {
                    $thumb_size_array = config('constants.thumb.user');
                    $model = 'user';
                    break;
                }
            case 'Plugins\Photos\Model\Photo':
                $thumb_size_array = config('constants.thumb.photo');
                $model = 'photo';
                break;    
            default:
                break;
        }
        foreach ($thumb_size_array as $size_name => $size) {
                $thumb[$size_name] = asset('api/img/' . $size_name . '/' . $model . '/' . $file_name);
         }
        return $thumb;
    }

    /**
     * User upload avatar OR default avatar return
     * @param Attachment $attachment
     * @param            $user_id
     * @return array
     */
    public static function getUserUploadThumb(Attachment $attachment, $user_id)
    {
        $thumb = array();
        $thumb_size_array = config('constants.thumb.user');
        $model = 'user';
        $provider_user = array();
        $file_name = $attachment->id . '.' . md5($attachment->id . config('constants.Security.salt') . $attachment->filename) . '.' . File::extension($attachment->filename);
        foreach ($thumb_size_array as $size_name => $size) {
            $thumb[$size_name] = asset('api/img/' . $size_name . '/' . $model . '/' . $file_name);
        }
        return $thumb;
    }

}