<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Workplace;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\WorkplaceTransformer;
use App\Services\UserProfileService;
use App\Services\AppointmentSettingsService;

/**
 * Countries resource representation.
 * @Resource("Admin/AdminCountries")
 */
class AdminWorkplacesController extends Controller
{
	
	/**
     * @var AppointmentSettings
     */
    protected $AppointmentSettingsService;

    /**
     * AdminCountriesController constructor.
     */
    public function __construct(AppointmentSettingsService $appointment_settings_service)
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
		$this->UserProfileService = new UserProfileService;
		$this->AppointmentSettingsService = $appointment_settings_service;
    }

    public function index(Request $request, $doctor_id)
    {
		$limit = 20;
        $workplaces = Workplace::where('doctor_id', '=', $doctor_id)->filterByRequest($request)->paginate($limit);
        return $this->response->paginator($workplaces, new WorkplaceTransformer);
    }

	

	
}
