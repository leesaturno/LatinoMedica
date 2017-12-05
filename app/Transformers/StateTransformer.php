<?php
namespace App\Transformers;

use League\Fractal;
use App\State;

/**
 * Class StateTransformer
 * @package App\Transformers
 */
class StateTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'country'
    ];

    /**
     * @param State $state
     * @return array
     */
    public function transform(State $state)
    {
        $output = array_only($state->toArray(), ['id', 'name', 'country_id', 'is_active']);
        return $output;
    }

    /**
     * @param State $state
     * @return Fractal\Resource\Item
     */
    public function includeCountry(State $state)
    {
        if ($state->country) {
            return $this->item($state->country, new CountryTransformer());
        } else {
            return null;
        }

    }
}
