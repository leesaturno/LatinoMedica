<?php
namespace Plugins\UserEducations\Transformers;

use League\Fractal;
use Plugins\UserEducations\Model\UserEducation;
use App\Transformers\UserTransformer;
 

/**
 * Class UserEducationTransformer
 * @package App\Transformers
 */
class UserEducationTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'user'
    ];

    /**
     * @param UserEducation $user_education
     * @return array
     */
    public function transform(UserEducation $user_education)
    {
        $output = array_only($user_education->toArray(), ['id', 'user_id', 'education', 'location', 'organization', 'certification_date', 'is_active']);
        return $output;
    }

    /**
     * @param  UserEducation $user_education
     * @return Fractal\Resource\Item
     */
    public function includeUser(UserEducation $user_education)
    {
        if ($user_education->user) {
            return $this->item($user_education->user, new UserTransformer());
        } else {
            return null;
        }

    }

}

?>