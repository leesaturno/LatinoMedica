<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\EmailTemplate;

class EmailTemplatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EmailTemplate::create([
            'name' => 'Forgot Password',
            'subject' => 'Forgot Password',
            'body_content' => 'Hi ##USERNAME##,

A password request has been made for your user account at ##SITE_NAME##.

New password: ##PASSWORD##

If you did not request this action and feel this is in error, please contact us at ##CONTACT_MAIL##.

Thanks,
##SITE_NAME##
##SITE_URL##',
            'filename' => '',
            'from_name' => '##FROM_EMAIL##',
            'info' => 'we will send this mail, when user submit the forgot password form.',
            'reply_to' => '##REPLY_TO_EMAIL##'
        ]);

        EmailTemplate::create([
            'name' => 'Activation Request',
            'subject' => 'Please activate your ##SITE_NAME## account',
            'body_content' => 'Hi ##USERNAME##,

Your account has been created. Please visit the following URL to activate your account.
##ACTIVATION_URL##

Thanks,
##SITE_NAME##
##SITE_URL##',
            'filename' => '',
            'from_name' => '##FROM_EMAIL##',
            'info' => 'we will send this mail, when user registering an account he/she will get an activation request.',
            'reply_to' => '##REPLY_TO_EMAIL##'
        ]);

        EmailTemplate::create([
            'name' => 'Welcome Email',
            'subject' => 'Welcome to ##SITE_NAME##',
            'body_content' => 'Hi ##USERNAME##,

We wish to say a quick hello and thanks for registering at ##SITE_NAME##.

If you did not request this account and feel this is an error, please contact us at ##CONTACT_MAIL##

Thanks,
##SITE_NAME##
##SITE_URL##',
            'filename' => '',
            'from_name' => '##FROM_EMAIL##',
            'info' => 'we will send this mail, when user register in this site and get activate.',
            'reply_to' => '##REPLY_TO_EMAIL##'
        ]);

        EmailTemplate::create([
            'name' => 'New User Join',
            'subject' => 'New user joined in ##SITE_NAME## account',
            'body_content' => 'Hi,

A new user named "##USERNAME##" has joined in ##SITE_NAME## account.

Username  : ##USERNAME##
Email     : ##EMAIL##
Signup IP : ##SIGNUP_IP##

Thanks,
##SITE_NAME##
##SITE_URL##',
            'filename' => '',
            'from_name' => '##FROM_EMAIL##',
            'info' => 'we will send this mail to admin, when a new user registered in the site. For this you have to enable "admin mail after register" in the settings page.',
            'reply_to' => '##REPLY_TO_EMAIL##'
        ]);

        EmailTemplate::create([
            'name' => 'Admin User Add',
            'subject' => 'Welcome to ##SITE_NAME##',
            'body_content' => 'Hi ##USERNAME##,

##SITE_NAME## team added you as a user in ##SITE_NAME##.

Your account details.
##LOGINLABEL##:##USEDTOLOGIN##
Password:##PASSWORD##

Thanks,
##SITE_NAME##
##SITE_URL##',
            'filename' => '',
            'from_name' => '##FROM_EMAIL##',
            'info' => 'we will send this mail to user, when a admin add a new user.',
            'reply_to' => '##REPLY_TO_EMAIL##'
        ]);

        EmailTemplate::create([
            'name' => 'Admin User Active',
            'subject' => 'Your ##SITE_NAME## account has been activated',
            'body_content' => 'Hi ##USERNAME##,

Your account has been activated.

Thanks,
##SITE_NAME##
##SITE_URL##',
            'filename' => '',
            'from_name' => '##FROM_EMAIL##',
            'info' => 'We will send this mail to user, when user active by administrator.',
            'reply_to' => '##REPLY_TO_EMAIL##'
        ]);

        EmailTemplate::create([
            'name' => 'Admin User Deactivate',
            'subject' => 'Your ##SITE_NAME## account has been deactivated',
            'body_content' => 'Hi ##USERNAME##,

Your ##SITE_NAME## account has been deactivated.

Thanks,
##SITE_NAME##
##SITE_URL##',
            'filename' => '',
            'from_name' => '##FROM_EMAIL##',
            'info' => 'We will send this mail to user, when user active by administrator.',
            'reply_to' => '##REPLY_TO_EMAIL##'
        ]);

        EmailTemplate::create([
            'name' => 'Admin User Delete',
            'subject' => 'Your ##SITE_NAME## account has been removed',
            'body_content' => 'Hi ##USERNAME##,

Your ##SITE_NAME## account has been removed.

Thanks,
##SITE_NAME##
##SITE_URL##',
            'filename' => '',
            'from_name' => '##FROM_EMAIL##',
            'info' => 'We will send this mail to user, when user delete by administrator.',
            'reply_to' => '##REPLY_TO_EMAIL##'
        ]);

        EmailTemplate::create([
            'name' => 'Admin Change Password',
            'subject' => 'Password changed',
            'body_content' => 'Hi ##USERNAME##,

Admin reset your password for your  ##SITE_NAME## account.

Your new password:
##PASSWORD##

Thanks,
##SITE_NAME##
##SITE_URL##',
            'filename' => '',
            'from_name' => '##FROM_EMAIL##',
            'info' => 'we will send this mail to user, when admin change user\'s password.',
            'reply_to' => '##REPLY_TO_EMAIL##'
        ]);

        EmailTemplate::create([
            'name' => 'Contact Us',
            'subject' => '[##SITE_NAME##] ##SUBJECT##',
            'body_content' => '##MESSAGE##

----------------------------------------------------
Telephone  : ##TELEPHONE##
IP             : ##IP##
Whois       : http://whois.sc/##IP##
URL          : ##FROM_URL##
----------------------------------------------------

Thanks,
##SITE_NAME##
##SITE_URL##',
            'filename' => '',
            'from_name' => '##FROM_EMAIL##',
            'info' => 'We will send this mail to admin, when user submit any contact form.',
            'reply_to' => '##REPLY_TO_EMAIL##'
        ]);

        EmailTemplate::create([
            'name' => 'Contact Us Auto Reply',
            'subject' => '[##SITE_NAME##] RE: ##SUBJECT##',
            'body_content' => 'Hi ##USERNAME##,

Thanks for contacting us. We\'ll get back to you shortly.

Please do not reply to this automated response. If you have not contacted us and if you feel this is an error, please contact us through our site ##CONTACT_URL##

------ you wrote -----

##MESSAGE##

Thanks,
##SITE_NAME##
##SITE_URL## ',
            'filename' => '',
            'from_name' => '##CONTACT_FROM_EMAIL##',
            'info' => 'we will send this mail to user, when user submit the contact us form.',
            'reply_to' => ''
        ]);
    }
}