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
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Appointment;
/**
 * AppointmentStatuses resource representation.
 *
 * @Resource("AppointmentStatuses")
 */
class AdminAppointmentStatusesController extends Controller {

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
     * Show all userviews
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
        $pending = Appointment::where('appointment_status_id','=',config('constants.ConstAppointmentStatus.PendingApproval'))->count();
        $approved = Appointment::where('appointment_status_id','=',config('constants.ConstAppointmentStatus.Approved'))->count();
        $closed = Appointment::where('appointment_status_id','=',config('constants.ConstAppointmentStatus.Closed'))->count();
        $cancelled = Appointment::where('appointment_status_id','=',config('constants.ConstAppointmentStatus.Cancelled'))->count();
        $reject = Appointment::where('appointment_status_id','=',config('constants.ConstAppointmentStatus.Rejected'))->count();
        $expired = Appointment::where('appointment_status_id','=',config('constants.ConstAppointmentStatus.Expired'))->count();
        $present = Appointment::where('appointment_status_id','=',config('constants.ConstAppointmentStatus.Present'))->count();
        $response = [
            ['id'=> 1, 'name'=> 'Pending Approval', 'appointment_count'=>$pending],
            ['id'=> 2, 'name'=> 'Approved', 'appointment_count'=>$approved],
            ['id'=> 3, 'name'=> 'Closed', 'appointment_count'=>$closed],
            ['id'=> 4, 'name'=> 'Cancelled', 'appointment_count'=>$cancelled],
            ['id'=> 5, 'name'=> 'Rejected', 'appointment_count'=>$reject],
            ['id'=> 6, 'name'=> 'Expired', 'appointment_count'=>$expired],
            ['id'=> 7, 'name'=> 'Present', 'appointment_count'=>$present]
        ];
      return response()->json(['data'=>$response, "meta"=>["pagination"=>""]]);
    }
}
