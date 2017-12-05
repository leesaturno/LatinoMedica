<?php

namespace App\Transformers;

use League\Fractal;
use App\SpecialtyDiseas;

/**
 * Class SpecialtyDiseasTransformer
 * @package App\Transformers
 */
class SpecialtyDiseasTransformer extends Fractal\TransformerAbstract {

    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'specialty'
    ];

    /**
     * @param SpecialtyDiseas $specialtyDiseas
     * @return array
     */
    public function transform(SpecialtyDiseas $specialtyDiseas) {
        $output = array_only($specialtyDiseas->toArray(), ['id', 'name', 'specialty_id','created_at','is_active']);
        return $output;
    }

    /**
     * @param SpecialtyDiseas $specialtyDiseas
     * @return Fractal\Resource\Item
     */
    public function includeSpecialty(SpecialtyDiseas $specialtyDiseas) {
        if ($specialtyDiseas->specialty) {
            return $this->item($specialtyDiseas->specialty, new SpecialtyTransformer());
        } else {
            return null;
        }
    }

}

?>