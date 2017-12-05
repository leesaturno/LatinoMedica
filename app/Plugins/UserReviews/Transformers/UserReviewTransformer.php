<?php
namespace Plugins\UserReviews\Transformers;

use League\Fractal;
use Plugins\UserReviews\Model\UserReview;
use App\Transformers\UserTransformer;
 

/**
 * Class UserReviewTransformer
 * @package App\Transformers
 */
class UserReviewTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'user','ip','doctor_user'
    ];

    /**
     * @param UserReview $user_review
     * @return array
     */
    public function transform(UserReview $user_review) {
        $output = array_only($user_review->toArray(), ['id', 'user_review_type_id', 'user_id', 'doctor_user_id', 'pet_name', 'review', 'bedside_rate', 'waittime_rate', 'is_active', 'created_at']);
        return $output;
    }

    /**
     * @param UserReview $user_review
     * @return Fractal\Resource\Item
     */
    public function includeUser(UserReview $user_review) {
        if ($user_review->user) {
            return $this->item($user_review->user, (new UserTransformer())->setDefaultIncludes(['user_profile']));
        } else {
            return null;
        }
    }

     /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeDoctorUser(UserReview $user_review) {
        if ($user_review->doctor_user) {
            return $this->item($user_review->doctor_user, (new UserTransformer())->setDefaultIncludes(['user_profile']));
        } else {
            return null;
        }
    }

}

?>