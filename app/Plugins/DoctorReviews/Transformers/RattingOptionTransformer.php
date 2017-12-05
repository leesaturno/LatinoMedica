<?php
namespace Plugins\DoctorReviews\Transformers;

use League\Fractal;
use Plugins\DoctorReviews\Model\RattingOption;
 

/**
 * Class RattingOptionTransformer
 * @package App\Transformers
 */
class RattingOptionTransformer extends Fractal\TransformerAbstract
{

    /**
     * @param Rating $rating
     * @return array
     */
    public function transform(RattingOption $rating) {
        $output = array_only($rating->toArray(), ['id','option', 'created_at']);
        return $output;
    }
}

?>