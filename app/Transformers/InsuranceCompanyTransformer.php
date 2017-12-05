<?php
/**
 * User: mugundhan_352at15
 * Date: 2016-04-05
 * Time: 01:23 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\InsuranceCompany;

/**
 * Class InsuranceCompanyTransformer
 * @package app\Transformers
 */
class InsuranceCompanyTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param InsuranceCompany $insurance_company
     * @return array
     */
    public function transform(InsuranceCompany $insurance_company)
    {
        $output = array_only($insurance_company->toArray(), ['id', 'created_at','name', 'is_active']);
        return $output;
    }
}