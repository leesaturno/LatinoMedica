<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-03-31
 * Time: 04:50 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\EmailTemplate;

/**
 * Class EmailTemplateTransformer
 * @package app\Transformers
 */
class EmailTemplateTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param EmailTemplate $email_template
     * @return array
     */
    public function transform(EmailTemplate $email_template)
    {
        $output = array_only($email_template->toArray(), ['id', 'name', 'subject', 'body_content', 'from_name', 'reply_to', 'info']);
        return $output;
    }
}