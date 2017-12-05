<?php
/**
 * Created by PhpStorm.
 * User: soundar_378at15
 * Date: 2017-02-21
 * Time: 11:23 AM
 */

namespace app\Transformers;

use League\Fractal;
use App\Ethnicity;

/**
 * Class EthnicityTransformer
 * @package app\Transformers
 */
class EthnicityTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Ethnicity $race
     * @return array
     */
    public function transform(Ethnicity $Ethnicity)
    {
        $output = array_only($Ethnicity->toArray(), ['id', 'name', 'created_at']);
        return $output;
    }
}
