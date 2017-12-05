<?php
/**
 * Created by NetBeans.
 * User: vijayanand_014ac09
 * Date: 2016-04-07
 * Time: 04:50 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\SmsTemplate;

/**
 * Class SmsTemplateTransformer
 * @package app\Transformers
 */
class SmsTemplateTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param SmsTemplate $sms_template
     * @return array
     */
    public function transform(SmsTemplate $sms_template)
    {
        $output = array_only($sms_template->toArray(), ['id', 'name', 'description', 'sms_content']);
        return $output;
    }
}