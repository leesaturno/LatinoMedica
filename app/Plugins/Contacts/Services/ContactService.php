<?php
namespace Plugins\Contacts\Services;

use App\Services\MailService;
use Plugins\Contacts\Model\Contact;

class ContactService
{

    /**
     * @var MailService
     */
    protected $mail_service;

    /**
     * ContactService constructor.
     * @param MailService $mail_service
     */

    public function __construct(MailService $mail_service)
    {
        $this->MailService = $mail_service;
    }

    /**
     * Send Contact Mail
     * @param $request
     */
    public function sendContactMail($request)
    {
        // send mail to admin
        $template = $this->MailService->getTemplate('Contact Us');
        $emailFindReplace = array(
            '##FIRST_NAME##' => $request->first_name,
            '##LAST_NAME##' => $request->last_name,
            '##FROM_URL##' => $request->url(),
            '##IP##' => $request->ip(),
            '##MESSAGE##' => $request->message,
            '##SUBJECT##' => $request->subject,
            '##TELEPHONE##' => $request->telephone,
        );
        $this->MailService->sendMail($template, $emailFindReplace, config('site.reply_to_email'), 'Admin');

        // send auto reply to user
        $template = $this->MailService->getTemplate('Contact Us Auto Reply');
        $emailFindReplace = array(
            '##USERNAME##' => $request->first_name . ' ' . $request->last_name,
            '##SUBJECT##' => $request->subject,
            '##MESSAGE##' => $request->message,
            '##CONTACT_URL##' => $request->url()
        );
        $this->MailService->sendMail($template, $emailFindReplace, $request->email, $request->first_name);
    }
}
