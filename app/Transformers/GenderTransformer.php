<?php
/**
 * User: vijayanand_014ac09 
 * Date: 2016-04-13
 * Time: 01:23 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\Gender;

/**
 * Class GenderTransformer
 * @package app\Transformers
 */
class GenderTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param Gender $gender
     * @return array
     */
    public function transform(Gender $gender)
    {
        $output = array_only($gender->toArray(), ['id', 'name']);
        return $output;
    }
}