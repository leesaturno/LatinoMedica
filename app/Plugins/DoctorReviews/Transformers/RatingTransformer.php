<?php
namespace Plugins\DoctorReviews\Transformers;

use League\Fractal;
use Plugins\DoctorReviews\Model\Rating;
use App\Transformers\UserTransformer;
 

/**
 * Class RatingTransformer
 * @package App\Transformers
 */
class RatingTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'user','doctor_user'
    ];

    /**
     * @param Rating $rating
     * @return array
     */
    public function transform(Rating $rating) {
        $output = array_only($rating->toArray(), ['doctor_id','patient_id','appointment_id', 'rating_option_id', 'rate', 'created_at']);
        return $output;
    }

    /**
     * @param Rating $rating
     * @return Fractal\Resource\Item
     */
    public function includeUser(Rating $rating) {
        if ($rating->user) {
            return $this->item($rating->user, (new UserTransformer())->setDefaultIncludes(['user_profile']));
        } else {
            return null;
        }
    }

     /**
     * @param Appointment $appointment
     * @return Fractal\Resource\Item
     */
    public function includeDoctorUser(Rating $rating) {
        if ($rating->doctor_user) {
            return $this->item($rating->doctor_user, (new UserTransformer())->setDefaultIncludes(['user_profile']));
        } else {
            return null;
        }
    }

}

?>