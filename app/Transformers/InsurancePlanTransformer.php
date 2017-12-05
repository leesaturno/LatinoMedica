<?php
/**
 * User: mugundhan_352at15
 * Date: 2016-04-05
 * Time: 01:23 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\InsurancePlan;
use App\Transformers\UserTransformer;

/**
 * Class InsuranceCompanyTransformer
 * @package app\Transformers
 */
class InsurancePlanTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param InsurancePlan $insurance_company
     * @return array
     */
    public function transform(InsurancePlan $insurance_plan)
    {
        $output = array_only($insurance_plan->toArray(), ['id', 'paitent_id','medical_insurance_id','dental_insurance_id','eye_insurance_id','timestamps']);
        return $output;
    }

     /**
     * @param Patient $patient
     * @return Fractal\Resource\Item
     */
    public function includePatient(FamilyFriend $familyfriend) {        
        if ($familyfriend->patient) {
            return $this->item($familyfriend->patient, new UserTransformer());
        } else {
            return null;
        }
    }
}