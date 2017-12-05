<?php
namespace App\Transformers;

use League\Fractal;
use App\User;
use App\UserProfile;
use App\Transformers\AttachmentTransformer;
use App\Services\AttachmentService;
use App\Attachment;

class UserAuthTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'user_profile', 'attachmentable', 'UserEducations', 'Badge', 'upcomming_appointment'
    ];

    /**
     * @param User $user
     * @return array
     */
    public function transform(User $user)
    {
        $output = array_only($user->toArray(), ['id', 'username', 'email', 'is_active', 'is_email_confirmed', 'role_id', 'subscription_id', 'register_ip_id', 'last_login_ip_id', 'available_wallet_amount', 'user_avatar_source_id','is_trial','is_paypal_suspend','is_paypal_cancel','subscription_end']);
        return $output;
    }

    /**
     * @param User $user
     * @return Fractal\Resource\Item
     */
    public function includeUserProfile(User $user)
    {
        if ($user->user_profile) {
            return $this->item($user->user_profile, new UserProfileTransformer());
        } else {
            return null;
        }

    }

    /**
 * @param User $user
 * @return mixed
 */
    public function includeAttachmentable(User $user)
    {
        if ($user->attachments) {
            return $this->item($user->attachments, new AttachmentTransformer());
        } else {
            $user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserAvatar'))->first();
            $user->attachments->attachmentable_id = $user->id;
            return $this->item($user->attachments, new AttachmentTransformer());
        }
    }
    /**
     * @param User $user
     * @return Fractal\Resource\Item|null
     */
    public function includeUserEducations(User $user)
    {
        if ($user->UserEducations) {
            return $this->item($user->UserEducations, new \Plugins\UserEducations\Transformers\UserEducationTransformer);
        } else {
            return null;
        }

    }
    /**
    * @param User $user
    * @return mixed
    */
    public function includeBadge(User $user)
    {
        if ($user->badge) {
            return $this->collection($user->badge, new AttachmentTransformer());
        } else {
            return null;
        }
    }
    /**
    * @param User $user
    * @return mixed
    */
    public function includeUpcommingAppointment(User $user)
    {
        if ($user->upcomming_appointment) {
            return $this->collection($user->upcomming_appointment, new AppointmentTransformer());
        } else {
            return null;
        }
    }
}
