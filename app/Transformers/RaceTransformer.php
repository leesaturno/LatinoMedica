<?php
/**
 * Created by PhpStorm.
 * User: soundar_378at15
 * Date: 2017-02-21
 * Time: 11:23 AM
 */

namespace app\Transformers;

use League\Fractal;
use App\Race;

/**
 * Class RaceTransformer
 * @package app\Transformers
 */
class RaceTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Race $race
     * @return array
     */
    public function transform(Race $race)
    {
        $output = array_only($race->toArray(), ['id', 'name', 'created_at']);
        return $output;
    }
}
