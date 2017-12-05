<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at
 * Date: 2016-04-01
 * Time: 03:45 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\Currency;

/**
 * Class CurrencyTransformer
 * @package app\Transformers
 */
class CurrencyTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Currency $currency
     * @return array
     */
    public function transform(Currency $currency)
    {
        $output = array_only($currency->toArray(), ['id', 'name', 'code', 'symbol', 'prefix', 'suffix', 'decimals', 'is_active']);
        return $output;
    }
}