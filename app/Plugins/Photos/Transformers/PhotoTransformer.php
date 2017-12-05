<?php
namespace Plugins\Photos\Transformers;

use League\Fractal;
use Plugins\Photos\Model\Photo;
//use App\Transformers\UserTransformer;
use App\Attachment;
use App\Transformers\AttachmentTransformer;
use App\Services\AttachmentService;
 

/**
 * Class PhotoTransformer
 * @package App\Transformers
 */
class PhotoTransformer extends Fractal\TransformerAbstract
{
    
    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'attachmentable'
    ];

    /**
     * @param Photo $photo
     * @return array
     */
    public function transform(Photo $photo)
    {
        $output = array_only($photo->toArray(), ['id','user_id']);
        return $output;
    }
    /**
     * @param Attachment $photo
     * @return mixed
     */
   
    public function includeAttachmentable(Photo $photos){
         if ($photos->attachments) {
            return $this->item($photos->attachments, new AttachmentTransformer());
        }else{
            $photos->attachments = Attachment::where(['attachmentable_id' => 1])->get();
        }
    }
}

?>
