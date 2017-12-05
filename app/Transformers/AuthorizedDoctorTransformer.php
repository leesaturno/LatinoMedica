<?php
/**
 * User: mugundhan_352at15
 * Date: 2016-04-05
 * Time: 01:23 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\AuthorizedDoctor;
use App\Transformers\UserTransformer;


/**
 * Class InsuranceCompanyTransformer
 * @package app\Transformers
 */
class AuthorizedDoctorTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param AuthorizedDoctor $insurance_company
     * @return array
     */
    public function transform(AuthorizedDoctor $authorized_doctor)
    {
        $output = array_only($authorized_doctor->toArray(), ['id', 'patient_id','doctor_id']);
        return $output;
    }

     /**
     * @param Patient $patient
     * @return Fractal\Resource\Item
     */
    public function includePatient(AuthorizedDoctor $authorized_doctor) {        
        if ($authorized_doctor->patient) {
            return $this->item($authorized_doctor->patient, new UserTransformer);
        } else {
            return null;
        }
    }
	
	 /**
     * @param Patient $patient
     * @return Fractal\Resource\Item
     */
    public function includeDoctor(AuthorizedDoctor $authorized_doctor) {  
        if ($authorized_doctor->doctor) {
            return $this->item($authorized_doctor->doctor, (new UserTransformer)->setDefaultIncludes(['user_profile']));
        } else {
            return null;
        }
    }
}