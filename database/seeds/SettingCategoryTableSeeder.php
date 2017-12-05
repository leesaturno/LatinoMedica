<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\SettingCategory;
use App\Setting;

class SettingCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */
    public function run()
    {
        $system = SettingCategory::create(array(
            'name' => 'System',
            'description' => 'Manage site name, currency details, language details, email controls.',
            'display_order' => 1
        ));
        $seo = SettingCategory::create(array(
            'name' => 'SEO',
            'description' => 'Manage content, meta data and other information relevant to browsers or search engines',
            'display_order' => 2
        ));
        $analytics = SettingCategory::create(array(
            'name' => 'Analytics',
            'description' => 'Manage Google and Facebook analytics code here',
            'display_order' => 3
        ));
        $follow_us = SettingCategory::create(array(
            'name' => 'Follow Us',
            'description' => 'manage site\'s social network links. Enter full URL, Leave it blank if not available.',
            'display_order' => 4
        ));
        $account = SettingCategory::create(array(
            'name' => 'Account',
            'description' => 'Manage account settings such as admin approval, email verification, and other site account settings.',
            'display_order' => 5
        ));
        $wallet = SettingCategory::create(array(
            'name' => 'Wallet',
            'description' => 'Manage wallet related setting such as enabling groupon-like wallet, maximum and minimum funding limit settings.',
            'display_order' => 6
        ));
        $withdrawal = SettingCategory::create(array(
            'name' => 'Withdrawal',
            'description' => 'Manage cash withdraw settings for a user such as enabling withdrawal and setting withdraw limit.',
            'display_order' => 7
        ));
        $email = SettingCategory::create(array(
            'name' => 'E-mail',
            'description' => 'Manage E-mail settings, email will be sent through the email services like E-mail, SMTP, Mailgun, Sparkpost, Mandrill, Amazon SES and log. Use any one driver as default mail driver to send mail and add their related settings.',
            'display_order' => 8
        ));
        $mobile = SettingCategory::create(array(
            'name' => 'Mobile',
            'description' => 'Manage all App Store ID.',
            'display_order' => 9
        ));
        $captcha = SettingCategory::create(array(
            'name' => 'Captcha',
            'description' => 'Captchas are meant to protect your website from spam and abuse.',
            'display_order' => 10
        ));
        $banner = SettingCategory::create(array(
            'name' => 'Banner',
            'description' => 'Banner for all page bottom, all page top, profile page sidebar.',
            'display_order' => 11
        ));
        $sudopay = SettingCategory::create(array(
            'name' => 'Sudopay',
            'description' => 'Manage Site\'s SudoPay Gateway settings',
            'display_order' => 12
        ));
        $paypal = SettingCategory::create(array(
            'name' => 'PayPal',
            'description' => 'Manage Site\'s PayPal Gateway settings',
            'display_order' => 13
        ));
        $plugin = SettingCategory::create(array(
            'name' => 'Plugins',
            'description' => 'Here you can modify site related plugins.',
            'display_order' => 14
        ));
        $item = SettingCategory::create(array(
            'name' => 'Items',
            'description' => 'Here you can set item based settings.',
            'display_order' => 15
        ));
        //System settings
        Setting::create(array(
            'setting_category_id' => $system->id,
            'name' => 'site.name',
            'value' => 'Abs',
            'label' => 'Site Name',
            'description' => 'This name will be used in all pages, emails.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $system->id,
            'name' => 'site.version',
            'value' => 'v1.0a.01',
            'label' => 'Site Version',
            'description' => 'This is current site version.',
            'display_order' => 2
        ));
        Setting::create(array(
            'setting_category_id' => $system->id,
            'name' => 'site.dafault_language',
            'value' => 'en',
            'label' => 'Site Dafault Language',
            'description' => 'This is default language to be used in all pages throughout site.',
            'display_order' => 3
        ));
        Setting::create(array(
            'setting_category_id' => $system->id,
            'name' => 'site.currency_code',
            'value' => 'USD',
            'label' => 'Currency Code',
            'description' => 'The selected currency will be used in site to display as default currency in all pages. (Replaced with user selected currency)',
            'display_order' => 4
        ));
        Setting::create(array(
            'setting_category_id' => $system->id,
            'name' => 'site.contact_email',
            'value' => 'productdemo.admin+contactAbs@gmail.com',
            'label' => 'Contact Email Address',
            'description' => 'This is the email address to which you will receive the mail from contact form.',
            'display_order' => 5
        ));
        Setting::create(array(
            'setting_category_id' => $system->id,
            'name' => 'site.reply_to_email',
            'value' => 'productdemo.admin+replyAbs@gmail.com',
            'label' => 'Reply Email Address',
            'description' => '"Reply-To" email header for all emails. Leave it empty to receive replies as usual (to "From" email address).',
            'display_order' => 6
        ));
        Setting::create(array(
            'setting_category_id' => $system->id,
            'name' => 'site.from_email',
            'value' => 'productdemo.admin+fromAbs@gmail.com',
            'label' => 'From Email Address',
            'description' => 'This is the email address that will appear in the "From" field of all emails sent from the site.',
            'display_order' => 7
        ));

        //SEO settings
        Setting::create(array(
            'setting_category_id' => $seo->id,
            'name' => 'meta.keywords',
            'value' => 'Agriya, AgriyaBase, Ahsan',
            'label' => 'Meta keywords',
            'description' => 'These are the keywords used for improving search engine results of our site. (Comma separated for multiple keywords.)',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $seo->id,
            'name' => 'meta.description',
            'value' => 'AgriyaBase',
            'label' => 'Mets description',
            'description' => 'This is the short description of your site, used by search engines on search result pages to display preview snippets for a given page.',
            'display_order' => 2
        ));
        Setting::create(array(
            'setting_category_id' => $seo->id,
            'name' => 'site.robots',
            'value' => '',
            'label' => 'Robots',
            'description' => 'Content for robots.txt; (search engine) robots specific instructions. Refer,http://www.robotstxt.org/ for syntax and usage.',
            'display_order' => 3
        ));
        Setting::create(array(
            'setting_category_id' => $seo->id,
            'name' => 'twitter.creator',
            'value' => '',
            'label' => 'Twitter Creator',
            'description' => 'Twitter creator id',
            'display_order' => 4
        ));
        Setting::create(array(
            'setting_category_id' => $seo->id,
            'name' => 'twitter.site',
            'value' => '',
            'label' => 'Twitter Site',
            'description' => 'Twitter site name',
            'display_order' => 5
        ));
        Setting::create(array(
            'setting_category_id' => $seo->id,
            'name' => 'twitter.card',
            'value' => '',
            'label' => 'Twitter Card',
            'description' => 'Twitter card id',
            'display_order' => 6
        ));

        //Analytics settings
        Setting::create(array(
            'setting_category_id' => $analytics->id,
            'name' => 'analytics.is_enabled_google_analytics',
            'value' => '1',
            'label' => 'Enabled Google Analytics?',
            'description' => 'It is for enable/disable the google analytics by giving 0 or 1.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $analytics->id,
            'name' => 'analytics.google_analytics.profile_id',
            'value' => 'UA-76504232-1',
            'label' => 'Google Analytics Profile ID',
            'description' => 'It is the site\'s google analytics profile ID.',
            'display_order' => 2
        ));
        Setting::create(array(
            'setting_category_id' => $analytics->id,
            'name' => 'analytics.is_enabled_facebook_pixel',
            'value' => '1',
            'label' => 'Enabled Facebook Pixel?',
            'description' => 'It is for enable/disable the facebook pixel by giving 0 or 1.',
            'display_order' => 3
        ));
        Setting::create(array(
            'setting_category_id' => $analytics->id,
            'name' => 'analytics.facebook_analytics.pixel',
            'value' => '6058027948413',
            'label' => 'Facebook Pixel ID',
            'description' => 'It is the site\'s facebook analytics pixel ID',
            'display_order' => 4
        ));

        //Follow us settings
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.facebook_url',
            'value' => 'https://www.facebook.com/agriya',
            'label' => 'Facebook URL',
            'description' => 'Facebook url of site.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.google_plus_url',
            'value' => 'https://plus.google.com/+AgriyaNews',
            'label' => 'Google Plus URL',
            'description' => 'Google plus url of site.',
            'display_order' => 2
        ));
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.linkedin_url',
            'value' => 'https://www.linkedin.com/company/agriya',
            'label' => 'LinkedIn URL',
            'description' => 'LinkedIn url of site.',
            'display_order' => 3
        ));
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.foursquare_url',
            'value' => '',
            'label' => 'Foursquare URL',
            'description' => 'Foursquare url of site.',
            'display_order' => 4
        ));
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.pinterest_url',
            'value' => '',
            'label' => 'Pinterest URL',
            'description' => 'Pinterest url of site.',
            'display_order' => 5
        ));
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.flickr_url',
            'value' => '',
            'label' => 'Flickr URL',
            'description' => 'Flickr url of site.',
            'display_order' => 6
        ));
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.instagram_url',
            'value' => '',
            'label' => 'Instagram URL',
            'description' => 'Instagram url of site.',
            'display_order' => 7
        ));
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.tumblr_url',
            'value' => '',
            'label' => 'Tumblr URL',
            'description' => 'Tumblr url of site.',
            'display_order' => 8
        ));
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.youtube_url',
            'value' => '',
            'label' => 'YouTube URL',
            'description' => 'YouTube url of site.',
            'display_order' => 9
        ));
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.vimeo_url',
            'value' => '',
            'label' => 'Vimeo URL',
            'description' => 'Vimeo url of site.',
            'display_order' => 10
        ));
        Setting::create(array(
            'setting_category_id' => $follow_us->id,
            'name' => 'follow.twitter_url',
            'value' => '',
            'label' => 'Twitter URL',
            'description' => 'Twitter url of site.',
            'display_order' => 11
        ));

        // Account settings
        Setting::create(array(
            'setting_category_id' => $account->id,
            'name' => 'user.is_admin_activate_after_register',
            'value' => '0',
            'label' => 'Enable Administrator Approval After Registration',
            'description' => 'On enabling this feature, admin need to approve each user after registration (User cannot login until admin approves)',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $account->id,
            'name' => 'user.is_email_verification_for_register',
            'value' => '0',
            'label' => 'Enable Email Verification After Registration',
            'description' => 'On enabling this feature, user need to verify their email address provided during registration. (User cannot login until email address is verified)',
            'display_order' => 2

        ));
        Setting::create(array(
            'setting_category_id' => $account->id,
            'name' => 'user.is_auto_login_after_register',
            'value' => '1',
            'label' => 'Enable Auto Login After Registration',
            'description' => 'On enabling this feature, users will be automatically logged-in after registration. (Only when "Email Verification" & "Admin Approval" is disabled)',
            'display_order' => 3
        ));
        Setting::create(array(
            'setting_category_id' => $account->id,
            'name' => 'user.is_admin_mail_after_register',
            'value' => '0',
            'label' => 'Enable Notify Administrator on Each Registration',
            'description' => 'On enabling this feature, notification mail will be sent to administrator on each registration.',
            'display_order' => 4
        ));
        Setting::create(array(
            'setting_category_id' => $account->id,
            'name' => 'user.is_welcome_mail_after_register',
            'value' => '1',
            'label' => 'Enable Sending Welcome Mail After Registration	',
            'description' => 'On enabling this feature, users will receive a welcome mail after registration.',
            'display_order' => 5
        ));
        Setting::create(array(
            'setting_category_id' => $account->id,
            'name' => 'user.is_allow_user_to_switch_language',
            'value' => '1',
            'label' => 'Enable User to Switch Language',
            'description' => 'On enabling this feature, users can change site language to their choice.',
            'display_order' => 6
        ));

        //Wallet settings
        Setting::create(array(
            'setting_category_id' => $wallet->id,
            'name' => 'wallet.min_wallet_amount',
            'value' => '10',
            'label' => 'Minimum Wallet Funding Limit',
            'description' => 'This is the minimum amount a user can add to his wallet.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $wallet->id,
            'name' => 'wallet.max_wallet_amount',
            'value' => '1000',
            'label' => 'Maximum Wallet Funding Limit',
            'description' => 'This is the maximum amount a user can add to his wallet. (If left empty, then, no maximum amount restrictions)',
            'display_order' => 2
        ));
		
		Setting::create(array(
            'setting_category_id' => $wallet->id,
            'name' => 'wallet.wallet_fee_payer',
            'value' => 'Site',
            'label' => 'Who will pay the gateway fee for wallet',
            'description' => 'Fill it [User OR Site]',
            'display_order' => 3
        ));

        //Withdrawal settings
        Setting::create(array(
            'setting_category_id' => $withdrawal->id,
            'name' => 'user.minimum_withdraw_amount',
            'value' => '2',
            'label' => 'Minimum Wallet Withdrawal Amount',
            'description' => 'This is the minimum amount a user can withdraw from their wallet.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $withdrawal->id,
            'name' => 'user.maximum_withdraw_amount',
            'value' => '1000',
            'label' => 'Maximum Wallet Withdrawal Amount',
            'description' => 'This is the maximum amount a user can withdraw from their wallet.',
            'display_order' => 2
        ));

        //E-mail settings
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'mail.driver',
            'value' => 'log',
            'label' => 'Mail Driver',
            'description' => '(log, smtp, mailgun, mandrill, ses, sparkpost) - Copy and paste the any one driver in value box to make as default mail driver, 1. Log Driver - This driver will write all e-mail messages to your log files for inspection. 2. SMTP Driver - Simple Mail Transfer Protocol is a TCP/IP protocol used to sending and receiving e-mail. 3. Mailgun Driver - Also add domain and secret key. 4. Mandrill Driver - Also add secret key. 5. SES Driver - Also add Amazon SES key, secret and region. 6. SparkPost Driver - Also add secret key.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'mail.host',
            'value' => '',
            'label' => 'SMTP Host',
            'description' => 'An email hosting service is an Internet hosting service that operates email servers. add host name of your server.',
            'display_order' => 2
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'mail.port',
            'value' => '',
            'label' => 'SMTP Port',
            'description' => 'A port number is a way to identify a specific process to which an Internet or other network message is to be forwarded when it arrives at a server.',
            'display_order' => 3
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'mail.encryption',
            'value' => '',
            'label' => 'SMTP Encryption',
            'description' => 'Configure the SMTP encryption key.',
            'display_order' => 4
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'mail.username',
            'value' => '',
            'label' => 'SMTP Username',
            'description' => 'Configure the SMTP username.',
            'display_order' => 5
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'mail.password',
            'value' => '',
            'label' => 'SMTP Password',
            'description' => 'Configure the SMTP password.',
            'display_order' => 6
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'mail.from.address',
            'value' => '',
            'label' => 'SMTP From Mail',
            'description' => 'Configure the SMTP from mail.',
            'display_order' => 7
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'mail.from.name',
            'value' => '',
            'label' => 'SMTP From Name',
            'description' => 'Configure the SMTP from name.',
            'display_order' => 8
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'services.mailgun.domain',
            'value' => '',
            'label' => 'Mailgun Domain',
            'description' => 'Mailgun domain name to send mail.',
            'display_order' => 9
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'services.mailgun.secret',
            'value' => '',
            'label' => 'Mailgun Secret',
            'description' => 'Mailgun secret key to send mail.',
            'display_order' => 10
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'services.mandrill.secret',
            'value' => '',
            'label' => 'Mandrill Secret',
            'description' => 'Mandrill secret key to send mail.',
            'display_order' => 11
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'services.ses.key',
            'value' => '',
            'label' => 'Amazon SES Key',
            'description' => 'Amazon SES Key to send mail.',
            'display_order' => 12
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'services.ses.secret',
            'value' => '',
            'label' => 'Amazon SES Secret',
            'description' => 'Amazon SES secret to send mail.',
            'display_order' => 13
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'services.ses.region',
            'value' => '',
            'label' => 'Amazon SES Region',
            'description' => 'Amazon SES region to send mail.',
            'display_order' => 14
        ));
        Setting::create(array(
            'setting_category_id' => $email->id,
            'name' => 'services.sparkpost.secret',
            'value' => '',
            'label' => 'Sparkpost Secret',
            'description' => 'Sparkpost secret key to send mail.',
            'display_order' => 15
        ));

        //Mobile settings
        Setting::create(array(
            'setting_category_id' => $mobile->id,
            'name' => 'android_app_store_id',
            'value' => '',
            'label' => 'Android App Store ID',
            'description' => 'This is the App store ID used for Android App',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $mobile->id,
            'name' => 'ios_app_store_id',
            'value' => '',
            'label' => 'iOS App Store ID',
            'description' => 'This is the App store ID used for iOS App',
            'display_order' => 2
        ));

        Setting::create(array(
            'setting_category_id' => $mobile->id,
            'name' => 'ipad_app_store_id',
            'value' => '',
            'label' => 'iPad App Store ID',
            'description' => 'This is the App store ID used for iPad App',
            'display_order' => 3
        ));

        Setting::create(array(
            'setting_category_id' => $mobile->id,
            'name' => 'windows_phone_app_id',
            'value' => '',
            'label' => 'Windows Phone App ID',
            'description' => 'This is the App ID used for Windows Phone App',
            'display_order' => 4
        ));

        Setting::create(array(
            'setting_category_id' => $mobile->id,
            'name' => 'scheme_name',
            'value' => '',
            'label' => 'Scheme Name',
            'description' => 'This is the Scheme Name used in deep link tags',
            'display_order' => 5
        ));

        //Captcha Setting
        Setting::create(array(
            'setting_category_id' => $captcha->id,
            'name' => 'captcha.site_key',
            'value' => ($_ENV['DB_DATABASE'] == 'smysql_agriyabase') ? '6Lc5Cx8TAAAAALXmOp09rQDo5abkK2ILrmhaLLSC' : '6Lcsxx0TAAAAAKSHVpbYPh_KJ4zJT8S2Q6bvX3Vx',
            'label' => 'Captcha Site Key',
            'description' => 'Captcha Site Key.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $captcha->id,
            'name' => 'captcha.secret_key',
            'value' => ($_ENV['DB_DATABASE'] == 'smysql_agriyabase') ? '6Lc5Cx8TAAAAAKWF8DxLeblxZgg7knIBbVpliD_O' : '6Lcsxx0TAAAAAM3SZqeH8RcLzhLkQvzHjlE4O9MF',
            'label' => 'Captcha Secret Key',
            'description' => 'Captcha Secret Key.',
            'display_order' => 2
        ));
        // banner setting
        Setting::create(array(
            'setting_category_id' => $banner->id,
            'name' => 'banner.all_page_top',
            'value' => '<img src="http://placehold.it/728X90" alt ="728X90" width="728" height="90"/>',
            'label' => 'Banner All Page Top',
            'description' => 'Banner for all page top in the site.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $banner->id,
            'name' => 'banner.all_page_bottom',
            'value' => '<img src="http://placehold.it/728X90" alt ="728X90" width="728" height="90"/>',
            'label' => 'Banner All Page Bottom',
            'description' => 'Banner for all page bottom in the site.',
            'display_order' => 2
        ));
        // plugin settings
        Setting::create(array(
            'setting_category_id' => $plugin->id,
            'name' => 'site.enabled_plugins',
            'value' => 'Analytics, SocialLogins, Withdrawals, Translations, Banner',
            'label' => 'Enabled Plugins',
            'description' => 'Enabled Plugins list in comma separater',
            'display_order' => 1
        ));
        // sudopay settings
        Setting::create(array(
            'setting_category_id' => $sudopay->id,
            'name' => 'sudopay.is_live_mode',
            'value' => '',
            'label' => 'Live Mode?',
            'description' => 'This is the site "SudoPay" gateway live mode setting.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $sudopay->id,
            'name' => 'sudopay.sudopay_merchant_id',
            'value' => '',
            'label' => 'Merchant ID',
            'description' => 'This is the site "SudoPay" gateway merchant ID.',
            'display_order' => 2
        ));
        Setting::create(array(
            'setting_category_id' => $sudopay->id,
            'name' => 'sudopay.sudopay_website_id',
            'value' => '',
            'label' => 'Website ID',
            'description' => 'This is the site "SudoPay" gateway website ID.',
            'display_order' => 3
        ));
        Setting::create(array(
            'setting_category_id' => $sudopay->id,
            'name' => 'sudopay.sudopay_api_key',
            'value' => '',
            'label' => 'API Key',
            'description' => 'This is the site "SudoPay" gateway api key.',
            'display_order' => 4
        ));
        Setting::create(array(
            'setting_category_id' => $sudopay->id,
            'name' => 'sudopay.sudopay_secret_string',
            'value' => '',
            'label' => 'Secret',
            'description' => 'This is the site "SudoPay" gateway secret string.',
            'display_order' => 5
        ));

        // paypal settings
        Setting::create(array(
            'setting_category_id' => $paypal->id,
            'name' => 'paypal.is_live_mode',
            'value' => '0',
            'label' => 'Live Mode?',
            'description' => 'This is the site "PayPal" live mode setting.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $paypal->id,
            'name' => 'paypal.api_username',
            'value' => 'poorna.dhivya-developer_api1.agriya.in',
            'label' => 'Username',
            'description' => 'This is the site "PayPal" api username.',
            'display_order' => 2
        ));
        Setting::create(array(
            'setting_category_id' => $paypal->id,
            'name' => 'paypal.api_password',
            'value' => '1401182755',
            'label' => 'Password',
            'description' => 'This is the site "PayPal" api password.',
            'display_order' => 3
        ));

        Setting::create(array(
            'setting_category_id' => $paypal->id,
            'name' => 'paypal.api_signature',
            'value' => 'A8iSWel3wQWHqSE.z.R8W1A8RWdgAz516LDYhCR9FFVT9RPaZfN1yQ3w',
            'label' => 'Signature',
            'description' => 'This is the site "PayPal" api signature.',
            'display_order' => 4
        ));
        Setting::create(array(
            'setting_category_id' => $paypal->id,
            'name' => 'paypal.api_id',
            'value' => 'AVo4aLO9nExsN2n2hxZzPVXdzwyOu23S5HYpNN-tvol8vJaWlgQMpRk3zQjt2KBTaCkSbHlTnQ5GSRXA',
            'label' => 'Api ID',
            'description' => 'This is the site "PayPal" api ID.',
            'display_order' => 5
        ));
        Setting::create(array(
            'setting_category_id' => $paypal->id,
            'name' => 'paypal.api_account_email',
            'value' => 'poorna.dhivya-developer@agriya.in',
            'label' => 'Account Email',
            'description' => 'This is the site "PayPal" api account email.',
            'display_order' => 6
        ));
        Setting::create(array(
            'setting_category_id' => $paypal->id,
            'name' => 'paypal.secret',
            'value' => 'EDO5H6v9CLcmFhqejbAGAJUSp2cDvqnOZhfoTW7U7Mkegioeiwc2d190uexR02fiSqR9FwLOxrzzNXGE',
            'label' => 'Secret Key',
            'description' => 'This is the site "PayPal" api secret key.',
            'display_order' => 7
        ));
        // item settings
        Setting::create(array(
            'setting_category_id' => $item->id,
            'name' => 'item.auto_expire',
            'value' => '1',
            'label' => 'Days after unaccepted booking auto expire',
            'description' => 'This is the maximum number of days after in which unaccepted bookings are automatically expired and amount will be refunded to booker.',
            'display_order' => 1
        ));
        Setting::create(array(
            'setting_category_id' => $item->id,
            'name' => 'item.is_auto_approve',
            'value' => '1',
            'label' => 'Enable Auto Approval After Listing Add',
            'description' => 'On disabling this feature, admin need to approve each item after added (item will not list in site until admin approves)',
            'display_order' => 2
        ));
        Setting::create(array(
            'setting_category_id' => $item->id,
            'name' => 'item.is_enable_security_deposit',
            'value' => '1',
            'label' => 'Enable Security Deposit',
            'description' => 'On enabling this feature, host can set security deposit amount for his item. Booker will pay booking amount with security deposit at the time of booking. It will automatically refund to booker if no dispute was raised by host.',
            'display_order' => 3
        ));
        Setting::create(array(
            'setting_category_id' => $item->id,
            'name' => 'item.auto_update_pending_payment_status',
            'value' => '1',
            'label' => 'No of threshold limit days for item move to Pending Payment Cleared status',
            'description' => 'This is the maximum number of days after Waiting for Review item will be moved to Pending Payment status. Booker can review or raise dispute within given days. If dispute raised, then amount will be blocked.',
            'display_order' => 4
        ));
        Setting::create(array(
            'setting_category_id' => $item->id,
            'name' => 'item.days_after_amount_withdraw',
            'value' => '1',
            'label' => 'Days after amount will be cleared to host',
            'description' => 'This is the maximum number of days after pendinag payment cleared in which the booking amount is in holding state.',
            'display_order' => 5
        ));
        Setting::create(array(
            'setting_category_id' => $item->id,
            'name' => 'item.item_fee',
            'value' => '5',
            'label' => 'Item listing Fee',
            'description' => 'For free listing post, set it as "0".',
            'display_order' => 6
        ));
    }
}