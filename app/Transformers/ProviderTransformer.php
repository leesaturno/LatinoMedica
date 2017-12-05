<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-03-31
 * Time: 04:50 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\Provider;

/**
 * Class ProviderTransformer
 * @package app\Transformers
 */
class ProviderTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Provider $provider
     * @return array
     */
    public function transform(Provider $provider)
    {
        $output = array_only($provider->toArray(), ['id', 'name', 'secret_key', 'api_key', 'icon_class', 'button_class', 'display_order', 'is_active']);
        return $output;
    }
}