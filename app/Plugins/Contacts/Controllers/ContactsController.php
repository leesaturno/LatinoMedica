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

namespace Plugins\Contacts\Controllers;

use App\Services\IpService;
use App\Services\UserService;
use Plugins\Contacts\Services\ContactService;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Plugins\Contacts\Model\Contact;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\Contacts\Transformers\ContactTransformer;

/**
 * Contacts resource representation.
 * @Resource("Contacts")
 */
class ContactsController extends Controller
{
    /**
     * @var IpService
     */
    protected $IpService;
    /**
     * @var UserService
     */
    protected $user_service;
    /**
     * @var ContactService
     */
    protected $contact_service;

    /**
     * ContactsController constructor.
     */
    public function __construct(IpService $ip_service, UserService $user_service, ContactService $contact_service)
    {
        $this->IpService = $ip_service;
        $this->UserService = $user_service;
        $this->ContactService = $contact_service;
    }

    /**
     * Store a new contact.
     * Store a new contact with a `user_id`, `ip_id`, 'first_name', 'last_name', 'subject', 'message', 'telephone', 'email'.
     * @Post("/contacts")
     * @Transaction({
     *      @Request({"user_id": 1, "first_name": "Ahsan", "last_name": "L", "email": "guest@gmail.com", "subject": "Regarding Booking", "message": "Need to Anke a booking,. Where can i do that?", "telephone": "XXXXXX"}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
     * })
     */
    public function store(Request $request)
    {
        $contact_data = $request->only('first_name', 'last_name', 'subject', 'message', 'telephone', 'email', 'user_id', 'ip_id','is_phone');
        $validator = Validator::make($contact_data, Contact::GetValidationRule(), Contact::GetValidationMessage());
        if ($validator->passes()) {
            $contact_data['ip_id'] = $this->IpService->getIpId($request->ip());
            $user = $this->auth->user();
            if ($user) {
                $contact_data['user_id'] = $user->id;
            }
            //Captcha verification
            if(empty($contact_data['is_phone'])){
                $captcha = $request['recaptcha_response'];
                if ($this->UserService->captchaCheck($captcha) == false) {
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Captcha Verification failed.');
                }
            }
            unset($contact_data['is_phone']);
            $contact = Contact::create($contact_data);
            if ($contact) {
                $this->ContactService->sendContactMail($request);
                return response()->json(['Success' => 'Thank you, we received your message and will get back to you as soon as possible.'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Contact message could not be sent. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Contact message could not be sent. Please, try again.', $validator->errors());
        }
    }
}
