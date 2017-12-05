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

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Notification;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\NotificationTransformer;

/**
 * Countries resource representation.
 * @Resource("Notification")
 */
class NotificationController extends Controller
{

    /**
     * NotificationController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
    }

	/**
	 * Show auth user Notifications
	 * Get a JSON representation of auth user the Notifications.
	 *
	 * @Get("/Notifications")
	 */
    public function index(Request $request)
    {
		$user = $this->auth->user();
		$Notification = Notification::where('user_id', $user->id)->first();
		return $this->response->item($Notification, new NotificationTransformer);
    }

	/**
	 * Store a new Notification.
	 * Store a new Notification with a 'is_remind_email_wellness', 'is_remind_app_appointments', 'is_remind_app_appointment_changed', 'is_remind_app_wellness'.
	 * @Post("/Notifications")
	 * @Transaction({
	 *      @Request({ "is_remind_email_wellness": "boolean",  "is_remind_app_appointments": "boolean",  "is_remind_app_appointment_changed": "boolean",  "is_remind_app_wellness": "boolean"}),
     *      @Response(200, body={"success": "Notification has been added."}),
     *      @Response(422, body={"message": "Notification could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
	 * })
	 */
    public function store(Request $request)
    {
        $user = $this->auth->user();
		$Notification_data = $request->only('is_remind_email_wellness', 'is_remind_app_appointments', 'is_remind_app_appointment_changed', 'is_remind_app_wellness');
		try {
			$notification = Notification::where('user_id', $user->id)->first();
			if ($notification) {
				$validator = Validator::make($Notification_data, Notification::GetValidationRule());
				if ($validator->passes()){
					if (Notification::where('user_id', $user->id)->update($Notification_data)) {
						return response()->json(['Success' => 'Notification has been updated'], 200);
					} else {
						return response()->json(['Success' => 'Notification could not be updated. Please, try again.'], 200);
					}
				} else {
					throw new \Dingo\Api\Exception\StoreResourceFailedException('Notification could not be updated. Please, try again.', $validator->errors());
				}
			} else {
				$Notification_data['user_id'] = $user->id;
				$validator = Validator::make($Notification_data, Notification::GetValidationRule());
				if($validator->passes()) {
					$Notification = Notification::create($Notification_data);
					if ($Notification) {
						return response()->json(['Success' => 'Notification has been added'], 200);
					}else {
						throw new \Dingo\Api\Exception\StoreResourceFailedException('Notification could not be added. Please, try again.');
					}
				} else {
					throw new \Dingo\Api\Exception\StoreResourceFailedException('Notification could not be added. Please, try again.', $validator->errors());
				}
			}
		} catch (\Exception $e) { 
			throw new \Dingo\Api\Exception\StoreResourceFailedException('Notification could not be updated. Please, try again.');
		}
    }
}
