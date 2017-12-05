<?php
/**
 * Doctoury - Lumen framework
 *
 * PHP version 5.5.9
 *
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Mugundhan. A (mugundhan_352at15)
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */
 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\InsuranceCompany;
use App\InsurancePlan;
use App\InsurancePatient;
use App\Appointment;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

/**
 * Contacts resource representation.
 * @Resource("InsuranceCompanies")
 */
 
class InsuranceCompaniesController extends Controller
{
	/**
     * Show all insurance companies
     * Get a JSON representation of all the insurance companies.
     * @Get("/insurance_companies?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the insurance companies list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $insurance_companies = $expired_insurance = $active_insurance = array();
        $user = $this->auth->user();
        if ($user && ($request->has('doctor_id'))) {
            $doctor_user_id = $request->get('doctor_id');
            $insurancePlan = InsurancePlan::where('patient_id', $user->id)->first();
            if($insurancePlan){
                $insurance = array(
                    $insurancePlan->medical_insurance_id,
                    $insurancePlan->dental_insurance_id,
                    $insurancePlan->eye_insurance_id
                );
                $insurancePatientes = InsurancePatient::where('doctor_id', $doctor_user_id)->whereIn('insurance_id', $insurance)->get();
                foreach($insurancePatientes as $insurancePatient){
                    if (!$request->has('date')) {
                        $appointment_date = date('Y-m-d');
                    } else {
                        $appointment_date = $request->input('date');
                    }
                    $insurancePatientCount = Appointment::where([ 'appointment_date'=> $appointment_date, 'doctor_user_id'=> $doctor_user_id, 'insurance_id'=> $insurancePatient->insurance_id])->whereNotIn('appointment_status_id',[config('constants.ConstAppointmentStatus.Cancelled'),config('constants.ConstAppointmentStatus.Rejected')])->count();
                    if($insurancePatient->allowed_patients <= $insurancePatientCount) {
                        $expired_insurance[] = $insurancePatient->insurance_id;
                    } else {
                        $active_insurance[] = $insurancePatient->insurance_id;
                    }
                }
            }
            if($active_insurance) {
                $insurance_companies['active'] = InsuranceCompany::whereIn('id', $active_insurance)->filterByRequest($request)->get();
            }
            if ($expired_insurance) {
                $insurance_companies['expired'] = InsuranceCompany::whereIn('id', $expired_insurance)->filterByRequest($request)->get();
            }
            if(empty($insurance_companies)){
               $insurance_companies = array('code' => 0, 'message' => "No insurance avaible for this day kindly choose another slot or select Will you use your health insurance? to \"No\" ");
            } else {
                $insurance_companies = array('code' => 1, 'data' => $insurance_companies);
            }
        } else {
            $insurance_companies = InsuranceCompany::filterByRequest($request)->get();
        }
        return $insurance_companies;
    }
}