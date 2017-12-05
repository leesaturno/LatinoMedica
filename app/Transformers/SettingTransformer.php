<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-03-31
 * Time: 04:50 PM
 */

namespace App\Transformers;

use League\Fractal;
use App\Setting;

/**
 * Class SettingTransformer
 * @package App\Transformers
 */
class SettingTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'setting_category'
    ];

    /**
     * @param Setting $setting
     * @return array
     */
    public function transform(Setting $setting)
    {
        $output = array_only($setting->toArray(), ['id', 'name', 'setting_category_id', 'value', 'label', 'description']);
        return $output;
    }

    /**
     * @param Setting $setting
     * @return Fractal\Resource\Item
     */
    public function includeSettingCategory(Setting $setting)
    {
        if ($setting->setting_category) {
            return $this->item($setting->setting_category, new SettingCategoryTransformer());
        } else {
            return null;
        }

    }
}
