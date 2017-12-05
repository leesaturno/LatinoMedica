<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-03-31
 * Time: 04:50 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\SettingCategory;

/**
 * Class SettingCategoryTransformer
 * @package app\Transformers
 */
class SettingCategoryTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param SettingCategory $setting_category
     * @return array
     */
    public function transform(SettingCategory $setting_category)
    {
        $output = array_only($setting_category->toArray(), ['id', 'name', 'description', 'display_order']);
        return $output;
    }
}