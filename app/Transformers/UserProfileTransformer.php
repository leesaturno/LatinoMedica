<?php

/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-04-01
 * Time: 12:30 PM
 */

namespace App\Transformers;

use App\Gender;
use League\Fractal;
use App\UserProfile;
use App\User;
use App\Transformers\AttachmentTransformer;
use App\Services\AttachmentService;
use App\Attachment;
use App\Specialty;

/**
 * Class UserProfileTransformer
 * @package App\Transformers
 */
class UserProfileTransformer extends Fractal\TransformerAbstract {
    /**
     * List of resources default to include
     *
     * @var array
     */
    protected $defaultIncludes = [

    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'User','city','state', 'country', 'gender','attachmentable'
    ];
    /**
     * @param UserProfile $user_profile
     * @return array
     */
    public function transform(UserProfile $user_profile) {
        $output = array_only($user_profile->toArray(), ['user_id', 'attachment_id', 'first_name', 'last_name', 'dr_title', 'practice_name', 'gender_id', 'booking_instructions', 'about_me', 'board_certifications', 'memberships', 'awards', 'specialty_id', 'phone', 'address', 'city_id', 'country_id', 'postal_code', 'notification_type_id', 'is_newpatient_accepted', 'latitude', 'longitude', 'specialties', 'languages', 'educations','specialty','dob', 'identification_number', 'no_insurance_patients', 'hobbies','html_info','linkedin_handle', 'twitter_handle', 'facebook_handle', 'instagram_handle', 'race', 'ethnicity', 'preferred_lang', 'display_name','hospital_affiliation', 'work_phone_number', 'home_phone_number', 'apartment_unit']);
        if (!empty($output['specialty_id'])) {
			$specialty_ids = explode(",", $output['specialty_id']);
			$specialties = Specialty::select('id', 'name')->whereIn('id', $specialty_ids)->get();
		    $output['specialties'] = $specialties;
        }
        return $output;
    }

    /**
     * @param UserProfile $user_profile
     * @return Fractal\Resource\Item
     */
    public function includeUser(UserProfile $user_profile) {
        if ($user_profile->user) {
            return $this->item($user_profile->user, (new UserTransformer())->setDefaultIncludes(['attachmentable']));
        } else {
            return null;
        }
    }

    /**
     * @param UserProfile $user_profile
     * @return Fractal\Resource\Item
     */
    public function includeCity(UserProfile $user_profile) {
        if ($user_profile->city) {
            return $this->item($user_profile->city, new CityTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param UserProfile $user_profile
     * @return Fractal\Resource\Item
     */
    public function includeState(UserProfile $user_profile) {
        if ($user_profile->state) {
            return $this->item($user_profile->state, new StateTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param City $city
     * @return Fractal\Resource\Item
     */
    public function includeCountry(UserProfile $user_profile) {
        if ($user_profile->country) {
            return $this->item($user_profile->country, new CountryTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param UserProfile $user_profile
     * @return Fractal\Resource\Item
     */
    public function includeGender(UserProfile $user_profile) {
        if ($user_profile->gender) {
            return $this->item($user_profile->gender, new GenderTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param UserProfile $user_profile
     * @return Fractal\Resource\Item
     */
    public function includeAttachmentable(UserProfile $user_profile)
    {
        if ($user_profile->attachments) {
            return $this->item($user_profile->attachments, new AttachmentTransformer());
        } else {
            /* for get the default profile image based on the gender */
            if($user_profile['gender_id'] == config('constants.ConstGenders.Male')){
                $user_profile->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserAvatar'))->first();
                $user_profile->attachments->attachmentable_id = $user_profile->id;
            }else if($user_profile['gender_id'] == config('constants.ConstGenders.Female')){
                $user_profile->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.Photo'))->first();
                $user_profile->attachments->attachmentable_id = $user_profile->id;
            }else{
                $user_profile->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserAvatar'))->first();
                $user_profile->attachments->attachmentable_id = $user_profile->id;
            }
            return $this->item($user_profile->attachments, new AttachmentTransformer());
        }
    }

}
