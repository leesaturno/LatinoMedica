<?php

/**
 * User: vijayanand_04ac09
 * Date: 2016-04-07
 * Time: 06:15 PM
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Appointment;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\AppointmentTransformer;

/**
 * Appointments resource representation.
 *
 * @Resource("Appointments")
 */
class AdminAppointmentsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all appointments
     *
     * Get a JSON representation of all the user views.
     *
     * @Get("/user_views?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
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
       // $appointments = Appointment::orderBy('created_at', 'desc')->paginate(20);
		$appointments = Appointment::filterByRequest($request)->paginate(20);
        //$appointments = Appointment::/*with('User','AppointmentStatus','SpecialtyDiseas')->*/filterByRequest($request)->paginate(20);
        return $this->response->paginator($appointments, (new AppointmentTransformer)->setDefaultIncludes(['User','SpecialtyDiseas','appointment_status','doctor_user']));
    }

    /**
     * Delete Appointments
     *
     * Delete Appointments with a `id`.
     *
     * @Delete("/user_views?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id) {
        $appointment = Appointment::find($id);
        if (!$appointment) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $appointment->delete();
        }
        return response()->json(['Success' => 'Appointment deleted'], 200);
    }

}
