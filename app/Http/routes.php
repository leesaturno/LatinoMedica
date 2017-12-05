<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$api = $app->make('Dingo\Api\Routing\Router');

$value = config('site.timezone');
// date_default_timezone_set($value);

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->get('robots.txt', function () use ($app) {
    return config('site.robots');
});

$api->version(['v1'], function ($api) use ($app) {

    $api->group(['prefix' => 'admin', 'namespace' => 'App\Http\Controllers\Admin'], function () use ($api) {
        // cities admin side
        $api->delete('cities/{id}', 'AdminCitiesController@destroy');
        $api->get('cities', 'AdminCitiesController@index');
        $api->get('cities/{id}/edit', 'AdminCitiesController@edit');
        $api->get('cities/{id}', 'AdminCitiesController@edit');
        $api->post('cities', 'AdminCitiesController@store');
        $api->put('cities/{id}', 'AdminCitiesController@update');

        // countries admin side
        $api->delete('countries/{id}', 'AdminCountriesController@destroy');
        $api->get('countries', 'AdminCountriesController@index');
        $api->get('countries/{id}/edit', 'AdminCountriesController@edit');
        $api->get('countries/{id}', 'AdminCountriesController@edit');
        $api->post('countries', 'AdminCountriesController@store');
        $api->put('countries/{id}', 'AdminCountriesController@update');

        // currencies
        $api->delete('currencies/{id}', 'AdminCurrenciesController@destroy');
        $api->get('currencies', 'AdminCurrenciesController@index');
        $api->get('currencies/{id}/edit', 'AdminCurrenciesController@edit');
        $api->get('currencies/{id}', 'AdminCurrenciesController@edit');
        $api->post('currencies', 'AdminCurrenciesController@store');
        $api->put('currencies/{id}', 'AdminCurrenciesController@update');

        // admin dashboards
        $api->get('activities', 'AdminDashboardsController@activities');
        $api->get('stats', 'AdminDashboardsController@stats');

        // email templates admin side
        $api->get('email_templates', 'AdminEmailTemplatesController@index');
        $api->get('email_templates/{id}/edit', 'AdminEmailTemplatesController@edit');
        $api->get('email_templates/{id}', 'AdminEmailTemplatesController@edit');
        $api->put('email_templates/{id}', 'AdminEmailTemplatesController@update');

        // ips
        $api->delete('ips/{id}', 'AdminIpsController@destroy');
        $api->get('ips', 'AdminIpsController@index');
        $api->get('ips/{id}', 'AdminIpsController@show');

        // languages admin side
        $api->get('languages', 'AdminLanguagesController@index');
        $api->get('languages/{id}/edit', 'AdminLanguagesController@edit');
        $api->get('languages/{id}', 'AdminLanguagesController@edit');
        $api->post('languages', 'AdminLanguagesController@store');
        $api->put('languages/{id}', 'AdminLanguagesController@update');
        $api->delete('languages/{id}', 'AdminLanguagesController@destroy');
		$api->post('languages/activation', 'AdminLanguagesController@activation');


        // translations admin side
        $api->get('translations', 'AdminTranslationsController@index');
        $api->get('translations/language', 'AdminTranslationsController@language');
        $api->get('translations/languageCount', 'AdminTranslationsController@languageCount');
        $api->get('translations/{id}/edit', 'AdminTranslationsController@edit');
        $api->get('translations/{id}', 'AdminTranslationsController@edit');
        $api->post('translations', 'AdminTranslationsController@store');
        $api->post('translations/add', 'AdminTranslationsController@text_add');
        $api->get('translations/language/remain', 'AdminTranslationsController@remainLanguage');
        $api->put('translations/{id}', 'AdminTranslationsController@update');
        $api->delete('translations/{id}', 'AdminTranslationsController@destroy');

	//Messages admin side
        $api->get('messages', 'AdminMessagesController@index');
        //$api->get('item_messages/{item_id}', 'AdminMessagesController@itemActivities');
        //$api->get('item_user_messages/{item_user_id}', 'AdminMessagesController@bookerActivities');
        //$api->get('user_messages/{user_id}', 'AdminMessagesController@userActivities');
        $api->get('messages/{id}', 'AdminMessagesController@show');
        $api->delete('messages/{id}', 'AdminMessagesController@destroy');

        //Workplaces admin side
        $api->get('work_places/list/{doctor_id}', 'AdminWorkplacesController@index');

        //Ratings admin side
        $api->get('ratings', 'AdminRatingsController@show');

        // roles
        $api->get('roles', 'AdminRolesController@index');

        // Settings
        $api->get('settings', 'AdminSettingsController@index');
        $api->get('settings/{id}/edit', 'AdminSettingsController@edit');
        $api->get('settings/{id}', 'AdminSettingsController@edit');
        $api->get('settings/{name}/show', 'AdminSettingsController@show');
        $api->get('setting_categories/{id}/settings', 'AdminSettingsController@settings');
        $api->put('settings/{id}', 'AdminSettingsController@update');
        $api->get('plugins', 'AdminSettingsController@getPlugin');
        $api->put('plugins', 'AdminSettingsController@updatePlugin');

        // Setting Categories
        $api->get('setting_categories', 'AdminSettingCategoriesController@index');
        $api->get('setting_categories/{id}', 'AdminSettingCategoriesController@show');

        // states
        $api->delete('states/{id}', 'AdminStatesController@destroy');
        $api->get('states', 'AdminStatesController@index');
        $api->get('states/{id}/edit', 'AdminStatesController@edit');
        $api->get('states/{id}', 'AdminStatesController@edit');
        $api->post('states', 'AdminStatesController@store');
        $api->put('states/{id}', 'AdminStatesController@update');


        // users
        $api->delete('users/{id}', 'AdminUsersController@destroy');
        $api->get('users', 'AdminUsersController@index');
        $api->get('users/{id}', 'AdminUsersController@show');
        $api->get('users/{id}/edit', 'AdminUsersController@edit');
        $api->post('users', 'AdminUsersController@store');
        $api->put('users/{id}', 'AdminUsersController@update');

        // user_logins
        $api->delete('user_logins/{id}', 'AdminUserLoginsController@destroy');
        $api->get('user_logins', 'AdminUserLoginsController@index');
        $api->get('user_logins/{id}', 'AdminUserLoginsController@show');

        // withdrawal statuses
        $api->get('withdrawal_statuses', 'AdminWithdrawalStatusesController@index');

        //plans
        $api->delete('plans/{id}', 'AdminPlansController@destroy');
        $api->get('plans', 'AdminPlansController@index');
        $api->get('plans/{id}/edit', 'AdminPlansController@edit');
        $api->get('plans/{id}', 'AdminPlansController@edit');
        $api->post('plans', 'AdminPlansController@store');

        //Specialty
        $api->delete('/specialties/{id}', 'AdminSpecialtiesController@destroy');
        $api->get('/specialties', 'AdminSpecialtiesController@index');
        $api->get('/specialties/{id}/edit', 'AdminSpecialtiesController@edit');
        $api->get('/specialties/{id}', 'AdminSpecialtiesController@edit');
        $api->post('/specialties', 'AdminSpecialtiesController@store');
        $api->put('/specialties/{id}', 'AdminSpecialtiesController@update');

        //Specialty Dieseas
        $api->delete('specialty_diseases/{id}', 'AdminSpecialtyDiseasesController@destroy');
        $api->get('specialty_diseases', 'AdminSpecialtyDiseasesController@index');
        $api->get('specialty_diseases/{id}/edit', 'AdminSpecialtyDiseasesController@edit');
        $api->get('specialty_diseases/{id}', 'AdminSpecialtyDiseasesController@edit');
        $api->post('specialty_diseases', 'AdminSpecialtyDiseasesController@store');
        $api->put('specialty_diseases/{id}', 'AdminSpecialtyDiseasesController@update');

        //Insuracne
        $api->delete('/insurances/{id}', 'AdminInsuranceCompaniesController@destroy');
        $api->get('/insurances', 'AdminInsuranceCompaniesController@index');
        $api->get('/insurances/{id}/edit', 'AdminInsuranceCompaniesController@edit');
        $api->get('/insurances/{id}', 'AdminInsuranceCompaniesController@edit');
        $api->post('/insurances', 'AdminInsuranceCompaniesController@store');
        $api->put('/insurances/{id}', 'AdminInsuranceCompaniesController@update');

        //User Views
        $api->delete('user_views/{id}', 'AdminUserViewsController@destroy');
        $api->get('user_views', 'AdminUserViewsController@index');

        //Appointments
        $api->get('appointments', 'AdminAppointmentsController@index');
        $api->delete('appointments/{id}', 'AdminAppointmentsController@destroy');

        //Appointment Status
        $api->get('appointment_statuses', 'AdminAppointmentStatusesController@index');

        //Payment Gateways
        $api->get('payment_gateways', 'AdminPaymentGatewaysController@index');
        $api->get('payment_gateways/{id}/edit', 'AdminPaymentGatewaysController@edit');
        $api->get('payment_gateways/{id}', 'AdminPaymentGatewaysController@edit');
        $api->put('payment_gateways/{id}', 'AdminPaymentGatewaysController@update');

        //Payments
        $api->get('transactions', 'AdminTransactionsController@index');

        // sms templates admin side
        $api->get('sms_templates', 'AdminSmsTemplatesController@index');
        $api->get('sms_templates/{id}/edit', 'AdminSmsTemplatesController@edit');
        $api->get('sms_templates/{id}', 'AdminSmsTemplatesController@edit');
        $api->put('sms_templates/{id}', 'AdminSmsTemplatesController@update');

        // providers admin side
        $api->get('providers', 'AdminProvidersController@index');
        $api->get('providers/{id}/edit', 'AdminProvidersController@edit');
        $api->get('providers/{id}', 'AdminProvidersController@edit');
        $api->post('providers', 'AdminProvidersController@store');
        $api->put('providers/{id}', 'AdminProvidersController@update');
        $api->delete('providers/{id}', 'AdminProvidersController@destroy');

        // badges
        $api->get('badges', 'AdminBadgesController@index');
        $api->post('badges', 'AdminBadgesController@store');
        $api->delete('badges/{id}', 'AdminBadgesController@destroy');
    });

    //Appointments Settings
    $api->get('/appointments/settings', 'App\Http\Controllers\AppointmentSettingsController@index');
    $api->post('/appointments/settings', 'App\Http\Controllers\AppointmentSettingsController@update');
    $api->put('/appointments/settings', 'App\Http\Controllers\AppointmentSettingsController@show');

    //Appointments Settings Modifications
    $api->get('/appointments/modifications', 'App\Http\Controllers\AppointmentModificationsController@index');
    $api->post('/appointments/modifications/add', 'App\Http\Controllers\AppointmentModificationsController@add');
    $api->post('/appointments/modifications/edit/{id}', 'App\Http\Controllers\AppointmentModificationsController@update');
    $api->get('/appointments/modifications/edit/{id}', 'App\Http\Controllers\AppointmentModificationsController@show');
    $api->get('/appointments/modifications/show/{id}', 'App\Http\Controllers\AppointmentModificationsController@show_work_place');
    $api->delete('/appointments/modifications/delete/{id}', 'App\Http\Controllers\AppointmentModificationsController@destroy');

    //appointments user side
    $api->get('/appointments/{type}', 'App\Http\Controllers\AppointmentsController@index');
    $api->get('/appointments/booking/{doctorid}/{apt_date}/{apt_time}', 'App\Http\Controllers\AppointmentsController@booking');
    $api->get('/appointments/booking/{doctorid}/{apt_date}/{apt_time}/{workplaceid}', 'App\Http\Controllers\AppointmentsController@workplaceBooking');
    $api->post('/appointments/booking/add', 'App\Http\Controllers\AppointmentsController@booked');
    $api->get('/appointment/{id}/{status}', 'App\Http\Controllers\AppointmentsController@changeStatus');

    //Appointments Export
    $api->get('/appointments/export/{type}/{formet}', 'App\Http\Controllers\AppointmentsController@export');

    //appointment view user side
    $api->get('/appointment/{id}', 'App\Http\Controllers\AppointmentsController@show');

    /* For check the user visit the doctor */
    $api->get('/bookings/{doctorid}/{userid}', 'App\Http\Controllers\AppointmentsController@userisbook');

    //appointment status user side
    $api->get('/appointment_statuses', 'App\Http\Controllers\AppointmentStatusController@index');

    //for search
    $api->get('/search/', 'App\Http\Controllers\SearchController@search');
    $api->get('/searchall', 'App\Http\Controllers\SearchController@searchAll');
    $api->get('/search/weeklist/{userids}/{viewslot}', 'App\Http\Controllers\SearchController@weeklist');
    $api->get('/search/weeklist/{userids}/{viewslot}/{workplaceid}', 'App\Http\Controllers\SearchController@workPlaceWeeklist');
    $api->get('/search/getdoctorweeklist/{userids}/{viewslot}', 'App\Http\Controllers\SearchController@getdoctorweeklist');
    $api->get('/search/getdoctorweeklist/{usersid}/{viewslotid}/{workplaceid}', 'App\Http\Controllers\SearchController@getdoctorWorkPlaceWeeklist');
    $api->get('/search/timeslot', 'App\Http\Controllers\SearchController@timesplitslot');

    // specialty diseases front end
    $api->get('/specialty_diseases', 'App\Http\Controllers\SpecialtyDiseasesController@index');

    // specialty front end
    $api->get('/specialties', 'App\Http\Controllers\SpecialtiesController@index');
    $api->get('/specialties/{id}', 'App\Http\Controllers\SpecialtiesController@edit');

    // insurance front end
    $api->get('/insurances', 'App\Http\Controllers\InsuranceCompaniesController@index');

    //cities user side
    $api->get('/cities', 'App\Http\Controllers\CitiesController@index');

    //activities user side
    $api->get('/activities', 'App\Http\Controllers\ActivityController@index');
    $api->post('/activities', 'App\Http\Controllers\ActivityController@update');

    //Settings user side
    $api->get('/settings', 'App\Http\Controllers\SettingsController@index');

    //countries user side
    $api->get('/countries', 'App\Http\Controllers\CountriesController@index');

    //currencies user side
    $api->get('/currencies', 'App\Http\Controllers\CurrenciesController@index');

    // gender front end
    $api->get('/genders', 'App\Http\Controllers\GendersController@index');

    //languages user side
    $api->get('/languages', 'App\Http\Controllers\LanguagesController@index');
	$api->get('/languages/active', 'App\Http\Controllers\LanguagesController@active');

	 /* For update the language usage count */
    $api->get('/languages/update/usage', 'App\Http\Controllers\UserProfilesController@updatelanguage');
    $api->get('/update/language_translation', 'App\Http\Controllers\LanguagesController@language_translation');

    //states user side
    $api->get('/states', 'App\Http\Controllers\StatesController@index');

    //Messages user side
    $api->get('messages', 'App\Http\Controllers\MessagesController@inbox');
    $api->get('sentMessages', 'App\Http\Controllers\MessagesController@sentMessage');
    $api->get('starMessages', 'App\Http\Controllers\MessagesController@starMessage');
    $api->get('item_messages/{item_id}', 'App\Http\Controllers\MessagesController@itemActivities');
    $api->get('item_user_messages/{item_user_id}', 'App\Http\Controllers\MessagesController@bookerActivities');
    $api->post('messages/user', 'App\Http\Controllers\MessagesController@store');
    $api->get('messages/{id}', 'App\Http\Controllers\MessagesController@show');
    $api->post('messages/{id}/reply', 'App\Http\Controllers\MessagesController@reply');
    $api->post('private_notes', 'App\Http\Controllers\MessagesController@privateNote');
    $api->put('messages/{id}', 'App\Http\Controllers\MessagesController@update');
    $api->get('users/messages', 'App\Http\Controllers\MessagesController@usersInbox');
    $api->delete('messages', 'App\Http\Controllers\MessagesController@destroy');

    // users
    $api->get('/users', 'App\Http\Controllers\UsersController@index');
    $api->post('/users/login', 'App\Http\Controllers\UsersController@authenticate');
    $api->get('/users/auth', 'App\Http\Controllers\UsersController@getAuth');
    $api->post('/users/register', 'App\Http\Controllers\UsersController@register');
    $api->put('/users/{user_id}/activate/{hash}', 'App\Http\Controllers\UsersController@activate');
    $api->get('/doctor/{username}', 'App\Http\Controllers\UsersController@show');
    $api->put('/users/{user_id}/change_password', 'App\Http\Controllers\UsersController@changePassword');
    $api->put('/users/forgot_password', 'App\Http\Controllers\UsersController@forgetPassword');
    $api->get('users/{id}/attachment', 'App\Http\Controllers\UsersController@getUserUploadAttachment');
    $api->get('users/otp/verify/{id}/{otp}', 'App\Http\Controllers\UsersController@otpverify');
    $api->get('users/otp/resend/{id}', 'App\Http\Controllers\UsersController@otpresend');
    $api->get('users/logout', 'App\Http\Controllers\UsersController@authterminate');
    $api->put('/users/{user_id}/deactivate', 'App\Http\Controllers\UsersController@deactivate');
    $api->get('users/auth_details', 'App\Http\Controllers\UsersController@getDetails');

    // user profiles
    $api->get('/user_profiles/', 'App\Http\Controllers\UserProfilesController@edit');
    $api->post('/user_profiles/', 'App\Http\Controllers\UserProfilesController@update');
    $api->post('/user_profiles/update_photo', 'App\Http\Controllers\UserProfilesController@update_photo');
    $api->get('/update/display_name', 'App\Http\Controllers\UserProfilesController@update_display_name');

    $api->get('/img/{size}/{model}/{filename}', 'App\Http\Controllers\ImagesController@create');
    $api->get('/assets/js/plugins.js', 'App\Http\Controllers\AssetsController@createJsTplFiles');

    // my specialties
    $api->get('/user/specialties', 'App\Http\Controllers\UserProfilesController@my_specialties');
    $api->put('/user/specialties', 'App\Http\Controllers\UserProfilesController@update_specialty');

    // my insurances
    $api->get('/user/insurances/', 'App\Http\Controllers\UserProfilesController@my_insurances');
    $api->put('/user/insurances/', 'App\Http\Controllers\UserProfilesController@update_insurance');

    // my languages
    $api->get('/user/languages', 'App\Http\Controllers\UserProfilesController@my_languages');
    $api->put('/user/languages', 'App\Http\Controllers\UserProfilesController@update_language');

	// Demographic Inforamtion
	$api->post('/user/demographic', 'App\Http\Controllers\UserProfilesController@demographic_info');
    $api->post('/user/deactivate', 'App\Http\Controllers\UserProfilesController@deactive_account');

    /* For Calender Listing */
    $api->get('/calender/events', 'App\Http\Controllers\AppointmentsController@calenderview');
    $api->get('/calender/eventsdoctor', 'App\Http\Controllers\AppointmentsController@calenderViewDoctor');
	$api->get('/calender/canceltoday', 'App\Http\Controllers\AppointmentsController@cancelTodayAppointment');
    $api->get('/calender/events/{month}', 'App\Http\Controllers\AppointmentsController@calenderview');
    $api->get('/calender/events/{month}/{year}/{workplaceid}', 'App\Http\Controllers\AppointmentsController@calenderview');
	$api->post('/appointment/patientnote', 'App\Http\Controllers\AppointmentsController@patientNote');

    /* For Payment Gateways */
    $api->get('/get_gateways', 'App\Http\Controllers\PaymentsController@getGateways');
    $api->post('/subscription/subscribe', 'App\Http\Controllers\PaymentsController@subscribe');
    $api->get('/subscription/approve/{tokenid}/{payerid}', 'App\Http\Controllers\PaymentsController@paysuccess');
    $api->get('/subscription/profiledetails', 'App\Http\Controllers\PaymentsController@getprofiledetails');
    $api->get('/subscription/suspend', 'App\Http\Controllers\PaymentsController@paypalsuspend');
    $api->get('/subscription/active', 'App\Http\Controllers\PaymentsController@paypalactive');
    $api->get('/subscription/cancel', 'App\Http\Controllers\PaymentsController@paypalcancel');
    $api->get('/subscription/cron', 'App\Http\Controllers\PaymentsController@testSub');

    /* For Plugins & Enable Plugins Details */
    $api->get('/plugins/list', 'App\Http\Controllers\SettingsController@pluginslist');

    /* For Update Device Token */
    $api->put('/users/update/devicetoken', 'App\Http\Controllers\UsersController@updatedevice');

    /* For Test Appointment Related Crons */
    $api->get('/expiry/appointment', 'App\Http\Controllers\AppointmentsController@chagneexpiry');
    $api->get('/alert/appointment', 'App\Http\Controllers\AppointmentsController@sendalert');

    // workplaces
    $api->delete('workplaces/{id}', 'App\Http\Controllers\WorkplacesController@destroy');
    $api->get('workplaces', 'App\Http\Controllers\WorkplacesController@index');
    $api->get('workplaces/{id}/edit', 'App\Http\Controllers\WorkplacesController@edit');
    $api->get('workplaces/{id}', 'App\Http\Controllers\WorkplacesController@edit');
    $api->post('workplaces', 'App\Http\Controllers\WorkplacesController@store');
    $api->put('workplaces/{id}', 'App\Http\Controllers\WorkplacesController@update');

    // reminders
    $api->delete('reminders/{id}', 'App\Http\Controllers\RemindersController@destroy');
    $api->get('reminders', 'App\Http\Controllers\RemindersController@index');
    $api->get('reminders/{id}/edit', 'App\Http\Controllers\RemindersController@edit');
    $api->get('reminders/{id}', 'App\Http\Controllers\RemindersController@edit');
    $api->post('reminders', 'App\Http\Controllers\RemindersController@store');
    $api->put('reminders/{id}', 'App\Http\Controllers\RemindersController@update');

    // badges
    $api->get('badges', 'App\Http\Controllers\BadgesController@index');

    // insured patients
    $api->delete('insured_patients/{id}', 'App\Http\Controllers\InsurancePatientsController@destroy');
    $api->get('insured_patients', 'App\Http\Controllers\InsurancePatientsController@index');
    $api->get('insured_patients/{id}/edit', 'App\Http\Controllers\InsurancePatientsController@edit');
    $api->get('insured_patients/{id}', 'App\Http\Controllers\InsurancePatientsController@edit');
    $api->post('insured_patients', 'App\Http\Controllers\InsurancePatientsController@store');
    $api->put('insured_patients/{id}', 'App\Http\Controllers\InsurancePatientsController@update');

    // family_friends
    $api->delete('family_friends/{id}', 'App\Http\Controllers\FamilyFriendsController@destroy');
    $api->get('family_friends', 'App\Http\Controllers\FamilyFriendsController@index');
    $api->get('family_friends/{id}/edit', 'App\Http\Controllers\FamilyFriendsController@edit');
    $api->get('family_friends/{id}', 'App\Http\Controllers\FamilyFriendsController@edit');
    $api->post('family_friends', 'App\Http\Controllers\FamilyFriendsController@store');
    $api->put('family_friends/{id}', 'App\Http\Controllers\FamilyFriendsController@update');

    // find_doctors
    $api->get('find_doctors', 'App\Http\Controllers\FindDoctorsController@index');
    $api->get('find_doctors/{id}/edit', 'App\Http\Controllers\FindDoctorsController@edit');
    $api->get('find_doctors/{id}', 'App\Http\Controllers\FindDoctorsController@edit');
    $api->post('find_doctors', 'App\Http\Controllers\FindDoctorsController@store');
    $api->put('find_doctors/{id}', 'App\Http\Controllers\FindDoctorsController@update');
    $api->delete('find_doctors/{id}', 'App\Http\Controllers\FindDoctorsController@destroy');

    // notifications
    $api->get('notifications', 'App\Http\Controllers\NotificationController@index');
    $api->post('notifications', 'App\Http\Controllers\NotificationController@store');

    // authorized_doctors
    $api->delete('authorized_doctors/{id}', 'App\Http\Controllers\AuthorizedDoctorsController@destroy');
    $api->get('authorized_doctors', 'App\Http\Controllers\AuthorizedDoctorsController@index');
    $api->get('authorized_doctors/{id}/edit', 'App\Http\Controllers\AuthorizedDoctorsController@edit');
    $api->get('authorized_doctors/{id}', 'App\Http\Controllers\AuthorizedDoctorsController@edit');
    $api->post('authorized_doctors', 'App\Http\Controllers\AuthorizedDoctorsController@store');
    $api->put('authorized_doctors/{id}', 'App\Http\Controllers\AuthorizedDoctorsController@update');

    // insurance_plans
    $api->delete('insurance_plans/{id}', 'App\Http\Controllers\InsurancePlansController@destroy');
    $api->get('insurance_plans', 'App\Http\Controllers\InsurancePlansController@index');
    $api->get('insurance_plans/{id}/edit', 'App\Http\Controllers\InsurancePlansController@edit');
    $api->get('insurance_plans/{id}', 'App\Http\Controllers\InsurancePlansController@edit');
    $api->post('insurance_plans', 'App\Http\Controllers\InsurancePlansController@store');
    $api->put('insurance_plans/{id}', 'App\Http\Controllers\InsurancePlansController@update');

    // race
    $api->get('races', 'App\Http\Controllers\RacesController@index');
    $api->get('races/{id}/edit', 'App\Http\Controllers\RacesController@edit');
    $api->get('races/{id}', 'App\Http\Controllers\RacesController@edit');
    $api->post('races', 'App\Http\Controllers\RacesController@store');
    $api->put('races/{id}', 'App\Http\Controllers\RacesController@update');
    $api->delete('races/{id}', 'App\Http\Controllers\RacesController@destroy');

    // ethnicity
    $api->get('ethnicities', 'App\Http\Controllers\EthnicitiesController@index');
    $api->get('ethnicities/{id}/edit', 'App\Http\Controllers\EthnicitiesController@edit');
    $api->get('ethnicities/{id}', 'App\Http\Controllers\EthnicitiesController@edit');
    $api->post('ethnicities', 'App\Http\Controllers\EthnicitiesController@store');
    $api->put('ethnicities/{id}', 'App\Http\Controllers\EthnicitiesController@update');
    $api->delete('ethnicities/{id}', 'App\Http\Controllers\EthnicitiesController@destroy');

    $api->post('/patient_reviews/add', 'App\Http\Controllers\DoctorReviewsController@add');
    $api->get('/patient_reviews/{userId}/{appointmentId}', 'App\Http\Controllers\DoctorReviewsController@show');
    $api->put('/patient_reviews/{id}', 'App\Http\Controllers\DoctorReviewsController@update');
});
