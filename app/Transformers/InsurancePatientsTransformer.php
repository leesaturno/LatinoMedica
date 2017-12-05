<?php
/**
 * Created by Arul Manickam S.
 * User: arulmanickam_423at16
 * Date: 2017-01-21
 * Time: 05:11 PM
 */

namespace app\Transformers;

use League\Fractal;
use App\InsurancePatient;
use App\Specialty;
use App\Language;
use Plugins\UserEducations\Model\UserEducation;
use App\Gender;
use App\Transformers\UserProfileTransformer;
use App\Transformers\InsuranceCompanyTransformer;

/**
 * Class InsurancePatientsTransformer
 * @package app\Transformers
 */
class InsurancePatientsTransformer extends Fractal\TransformerAbstract
{

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'DoctorProfile'
    ];
    /**
     * @param InsurancePatient $insurancePatient
     * @return array
     */
    public function transform(InsurancePatient $insurancePatient)
    {
        $output = array_only($insurancePatient->toArray(), ['id', 'doctor_id', 'insurance_id', 'allowed_patients', 'created_at']);
        return $output;
    }

    /**
     * @param User $insurancePatient
     * @return Fractal\Resource\Item|null
     */
    public function includeDoctorProfile(InsurancePatient $insurancePatient)
    {
        if ($insurancePatient->doctor_profile) {
            $insurancePatient->doctor_profile->specialties = Specialty::select('id','name')->whereIn('id', explode(',',$insurancePatient->doctor_profile->specialty_id))->get()->toArray();
            $insurancePatient->doctor_profile->languages = Language::select('id','name')->whereIn('id', explode(',',$insurancePatient->doctor_profile->language_id))->get()->toArray();
            $insurancePatient->doctor_profile->educations = UserEducation::where('user_id', '=',$insurancePatient->doctor_profile->user_id)->get()->toArray();
            $insurancePatient->doctor_profile->gender = Gender::where('id', '=',$insurancePatient->doctor_profile->gender_id)->first();
            return $this->item($insurancePatient->doctor_profile, (new UserProfileTransformer())->setDefaultIncludes(['city','state','country','gender']));
        } else {
            return null;
        }

    }

    public function includeInsurance(InsurancePatient $insurancePatient)
    {
        if ($insurancePatient->insurance) {
            return $this->item($insurancePatient->insurance, new InsuranceCompanyTransformer());
        } else {
            return null;
        }
    }
}