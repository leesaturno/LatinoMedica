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

class UserTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'RegisterIp', 'LastLoginIp', 'user_profile', 'attachmentable', 'UserFavorite','attachments', 'Workplace', 'insured_patients', 'Subscription'
    ];

    /**
     * @param User $user
     * @return array
     */
    public function transform(User $user)
    {
        $output = array_only($user->toArray(), ['id', 'created_at', 'username', 'email', 'is_active', 'is_email_confirmed', 'role_id', 'password', 'register_ip_id', 'last_login_ip_id', 'user_login_count', 'user_avatar_source_id','user_review_count', 'bedside_rating_count', 'bedside_avg_rating', 'timing_rating_count', 'timing_avg_rating', 'overall_rating_count', 'overall_avg_rating', 'user_rating_count', 'points', 'subscription_id', 'redirect_url', 'user_code', 'hospital_affiliation', 'doctor_view_count', 'is_verified', 'is_featured']);
        return $output;
    }

    /**
     * @param User $user
     * @return Fractal\Resource\Item
     */
    public function includeRegisterIp(User $user)
    {
        if ($user->RegisterIp) {
            return $this->item($user->RegisterIp, new IpTransformer());
        } else {
            return null;
        }

    }

    /**
     * @param User $user
     * @return Fractal\Resource\Item|null
     */
    public function includeLastLoginIp(User $user)
    {
        if ($user->LastLoginIp) {
            return $this->item($user->LastLoginIp, new IpTransformer());
        } else {
            return null;
        }

    }

    /**
     * @param User $user
     * @return Fractal\Resource\Item|null
     */
    public function includeUserProfile(User $user)
    {
        if ($user->user_profile) {
            $user->user_profile->specialties = Specialty::select('id','name')->whereIn('id', explode(',',$user->user_profile->specialty_id))->get()->toArray();
            $user->user_profile->languages = Language::select('id','name')->whereIn('id', explode(',',$user->user_profile->language_id))->get()->toArray();
            $user->user_profile->educations = UserEducation::where('user_id', '=',$user->user_profile->user_id)->get()->toArray();
            $user->user_profile->gender = Gender::where('id', '=',$user->user_profile->gender_id)->first();
            return $this->item($user->user_profile, (new UserProfileTransformer())->setDefaultIncludes(['city','state','country','gender']));
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
            if($user->role_id == config('constants.ConstUserTypes.Doctor')){
                if($user['user_profile']['gender_id'] == config('constants.ConstGenders.Male')){
                    $user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserAvatar'))->first();
                }else if($user['user_profile']['gender_id'] == config('constants.ConstGenders.Female')){
                    $user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.Photo'))->first();
                }else{
                    $user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserAvatar'))->first();
                }
                $user->attachments->attachmentable_id = $user->id;
            }else{
                $user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserPhoto'))->first();
                $user->attachments->attachmentable_id = $user->id;
            }

            /*$user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserAvatar'))->first();
            $user->attachments->attachmentable_id = $user->id;*/
            return $this->item($user->attachments, new AttachmentTransformer());
        }
    }
    /**
     * @param User $user
     * @return mixed
     */
    public function includeAttachments(User $user)
    {
        if ($user->attachments) {
            return $this->item($user->attachments, new AttachmentTransformer());
        } else {
            if($user->role_id == config('constants.ConstUserTypes.Doctor')){
                if($user['user_profile']['gender_id'] == config('constants.ConstGenders.Male')){
                    $user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserAvatar'))->first();
                }else if($user['user_profile']['gender_id'] == config('constants.ConstGenders.Female')){
                    $user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.Photo'))->first();
                }else{
                    $user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserAvatar'))->first();
                }
                $user->attachments->attachmentable_id = $user->id;
            }else{
                $user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserPhoto'))->first();
                $user->attachments->attachmentable_id = $user->id;
            }

            /*$user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserAvatar'))->first();
            $user->attachments->attachmentable_id = $user->id;*/
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

    public function includeUserFavorite(User $user){
        if ($user->UserFavorite) {
            $authUser = Auth::user();
            $favoriteData = UserFavorite::where(['user_id'=>$authUser->id,'doctor_user_id'=>$user['id']])->first();
            if($favoriteData){
                return $this->item($favoriteData, new \Plugins\UserFavorites\Transformers\UserFavoriteTransformer);
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    /**
     * @param User $user
     * @return Fractal\Resource\Item|null
     */
    public function includeWorkplace(User $user)
    {
        if ($user->workplace) {
            return $this->collection($user->workplace, new WorkplaceTransformer());
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
     * @return Fractal\Resource\Item|null
     */
    public function includeInsuredPatients(User $user)
    {
        if ($user->insured_patients) {
            return $this->collection($user->insured_patients, (new InsurancePatientsTransformer())->setDefaultIncludes(['insurance']));           
        } else {
            return null;
        }
    }
    /**
    * @param User $user
    * @return mixed
    */
    public function includeSubscription(User $user)
    {
        if ($user->subscription) {
            return $this->item($user->subscription, new SubscriptionTransformer());
        } else {
            return null;
        }
    }
}
