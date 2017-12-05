<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\AppointmentStatus;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use App\Transformers\AppointmentStatusTransformer;
/**
 * Appointments resource representation.
 *
 * @Resource("Appointments")
 */
class AppointmentsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        // Apply the jwt.auth middleware to all methods in this controller
        // except for the authenticate method. We don't want to prevent
        // the user from retrieving their token if they don't already have it
        //  $this->middleware('jwt.auth');
    }

    /**
     * Show all appointments
     *
     * Get a JSON representation of all the user views.
     *
     * @Get("/appointments?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the user views list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the user views list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user views by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display user views By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search user views.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $appointment_statuses = AppointmentStatus::paginate(20);
        return $this->response->paginator($appointment_statuses, (new AppointmentStatusTransformer));
    }
}
