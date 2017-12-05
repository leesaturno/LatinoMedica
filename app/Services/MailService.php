<?php
namespace App\Services;

use Illuminate\Support\Facades\Mail;
use App\EmailTemplate;
use App\SmsTemplate;
use Plugins\SMSMailContent\Model\UserMailTemplate;
use Plugins\SMSMailContent\Model\UserSmsTemplate;

class MailService
{
    public function __construct(){

    }

    /**
     * Send Mail to users
     * @param $template
     * @param $replaceContent
     * @param $to_email
     * @param $to_username
     */
    public function sendMail($template, $replaceContent, $to_email, $to_username){
        $default_content = array(
            '##SITE_NAME##' => config('site.name'),
            '##SITE_URL##' => url('/'),
            '##FROM_EMAIL##' => config('site.from_email'),
            '##CONTACT_MAIL##' => config('site.contact_email'),
            '##CONTACT_URL##' => url('/#/contactus')
        );
        $emailFindReplace = array_merge($default_content, $replaceContent);
        $content = strtr($template['body_content'], $emailFindReplace);
        $subject = strtr($template['subject'], $emailFindReplace);
        Mail::send('emails.mailContent', ['body' => $content], function ($m) use ($to_email, $to_username, $subject) {
            $m->from(config('site.from_email'), config('site.name'));
            $m->to($to_email, $to_username)->subject($subject);
        });
    }

    /**
     * get Template content for sending mail
     * @param $name
     * @return array
     */
    public function getTemplate($name){
        $email_template = EmailTemplate::where('name', $name)->get();
        $template_array = [];
        foreach ($email_template as $template) {
            $template_array['from'] = $template['from_name'];
            $template_array['body_content'] = $template['body_content'];
            $template_array['subject'] = $template['subject'];
        }
        return $template_array;
    }
    /**
     * get Template content for sending gold plan doctor mail
     * @param $name
     * @return array
     */
    public function getGoldPlanUserTemplate($name, $userId){
        $email_template = UserMailTemplate::where(['name'=> $name, 'user_id'=> $userId])->first();
        if($email_template){
            $template_array = [];
            foreach ($email_template as $template) {
                $template_array['from'] = $template['from_name'];
                $template_array['body_content'] = $template['body_content'];
                $template_array['subject'] = $template['subject'];
            }
        }else{
            $template_array = $this->getTemplate($name);
        }
        return $template_array;
    }
    /**
     * get Template content for sending mail
     * @param $name
     * @return array
     */
    public function getSMSTemplate($name){
        $smsTemplate = SmsTemplate::where('name', $name)->first();
        return $smsTemplate->sms_content;
    }

    /**
     * get Template content for sending gold plan doctor sms
     * @param $name
     * @return array
     */
    public function getSmsGoldUserTemplate($name, $userId){
        $smsTemplate = UserSmsTemplate::where(['name'=>$name, 'user_id'=>$userId])->first();
        return $smsTemplate->sms_content;
    }

    public function sendSMS($number, $content){
        $to="[\"$number\"]";
        $authToken = config('clickatell.authtoken');
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,            "https://api.clickatell.com/rest/message");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST,           1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,     "{\"text\":\"$content\",\"to\":$to}");
        curl_setopt($ch, CURLOPT_HTTPHEADER,     array(
            "X-Version: 1",
            "Content-Type: application/json",
            "Accept: application/json",
            "Authorization: Bearer $authToken"
        ));
        curl_exec ($ch);
    }

    public function sendPushMessage($deviceType, $deviceToken, $message){
        if($deviceType == 1){
            $path = storage_path('app/IphonePush/').config('iphone.pem_file_name');
            $pass = config('iphone.pem_password');
            $ctx = stream_context_create();
            stream_context_set_option($ctx, 'ssl', 'local_cert', $path);
            stream_context_set_option($ctx, 'ssl', 'passphrase', $pass);
            $fp = stream_socket_client('ssl://gateway.push.apple.com:2195', $err, $errstr, 60, STREAM_CLIENT_CONNECT, $ctx);
            $body['aps'] = array(
                'alert' => $message,
                'sound' => 'default'
            );
            $payload = json_encode($body);
            $msg = chr(0) . pack('n', 32) . pack('H*', $deviceToken) . pack('n', strlen($payload)) . $payload;
            $result = fwrite($fp, $msg, strlen($msg));
            fclose($fp);
        }else{
            $fields = [
                'registration_ids'  => [$deviceToken],
                'notification'              => ['message'=>$message]
            ];
            $pushApiKey = config('android.api_access_key');
            $headers = [
                'Authorization: key=' . $pushApiKey,
                'Content-Type: application/json'
            ];
            $ch = curl_init();
            curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
            curl_setopt( $ch,CURLOPT_POST, true );
            curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
            curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
            curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
            curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
            $result = curl_exec($ch );
            curl_close( $ch );
        }
    }
}