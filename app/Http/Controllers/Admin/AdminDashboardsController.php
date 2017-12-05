<?php
/**
 * AgriyaBase - Lumen framework
 *
 * PHP version 5.5.9
 *
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Agriya <info@agriya.com>
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Dashboard;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use App\Services\UserService;
use App\Services\UserLoginService;

/**
 * Dashboards resource representation.
 * @Resource("Admin/AdminDashboards")
 */

class AdminDashboardsController extends Controller
{
    /**
     * @var UserService
     */
    protected $UserService;
    /**
     * @var UserLoginService
     */
    protected $UserLoginService;

    /**
     * AdminDashboardsController constructor.
     */
    public function __construct(UserService $user_service, UserLoginService $user_login_service)
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
        $this->UserService = $user_service;
        $this->UserLoginService = $user_login_service;
    }

    /**
     * Show all Dashboards stats
     * Get a JSON representation of all the Dashboards statistics.
     *
     * @Get("/stats")
     * @Parameters({
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function stats(Request $request)
    {
        $data = $this->UserService->getLoginRegisterCount($request);
        return response()->json($data);
    }

    /**
     * Show all user activities
     * Get a JSON representation of all the Dashboards statistics.
     *
     * @Get("/activities")
     */
    public function activities()
    {
        $last_user_login = $this->UserLoginService->getLastLogin();
        $last_register = $this->UserService->getLastRegistered();
        //$total_active_users = $this->UserService->getTotalUsers();
        $total_patient_count = $this->UserService->getTotalPatients();
        $total_doctor_count = $this->UserService->getTotalDoctors();
        $total_appointments_count = $this->UserService->getTotalAppointments();
        $total_reviews_count = $this->UserService->getTotalReviews();
        $total_countries_count = $this->UserService->getTotalCountries();
        $total_cities_count = $this->UserService->getTotalCities();
        $total_specialties_count = $this->UserService->getTotalSpecialties();
        $total_languages_count = $this->UserService->getTotalLanguages();

        return response()->json(compact('last_user_login', 'last_register','total_patient_count','total_doctor_count','total_appointments_count','total_reviews_count','total_languages_count','total_specialties_count','total_cities_count','total_countries_count'));
    }
}