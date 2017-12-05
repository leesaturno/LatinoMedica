angular.module('templates-app', ['Common/404.tpl.html', 'Common/footer.tpl.html', 'Common/header.tpl.html', 'User/activities.tpl.html', 'User/authorization.tpl.html', 'User/booking_register.tpl.html', 'User/change_password.tpl.html', 'User/dashboard_settings.tpl.html', 'User/dashboard.tpl.html', 'User/demographic.tpl.html', 'User/doctor_filter.tpl.html', 'User/doctor_note.tpl.html', 'User/doctor_profile_question.tpl.html', 'User/family_friends.tpl.html', 'User/forgot_password.tpl.html', 'User/header.tpl.html', 'User/list_your_practice.tpl.html', 'User/login_user.tpl.html', 'User/login.tpl.html', 'User/medical_team.tpl.html', 'User/my_calender.tpl.html', 'User/my_insurances.tpl.html', 'User/my_languages.tpl.html', 'User/my_specialties.tpl.html', 'User/navmenu.tpl.html', 'User/notifications.tpl.html', 'User/register.tpl.html', 'User/settings.tpl.html', 'User/sidemenu.tpl.html', 'User/updateDiseaseForm.tpl.html', 'User/user_profile.tpl.html', 'User/user_settings.tpl.html', 'User/user_view.tpl.html', 'Home/featured_specialist_doctor.tpl.html', 'Home/home.tpl.html', 'Appointments/appointment_booking_appt_info.tpl.html', 'Appointments/appointment_booking_confirm.tpl.html', 'Appointments/appointment_booking_details.tpl.html', 'Appointments/appointment_booking_patient_info.tpl.html', 'Appointments/appointment_index.tpl.html', 'Appointments/appointment_modifications_add.tpl.html', 'Appointments/appointment_modifications_edit.tpl.html', 'Appointments/appointment_modifications.tpl.html', 'Appointments/appointment_note.tpl.html', 'Appointments/appointment_remainder.tpl.html', 'Appointments/appointment_setting.tpl.html', 'Appointments/appointment_view.tpl.html', 'Appointments/appointments.tpl.html', 'Appointments/booking_breadcrum.tpl.html', 'Search/search.tpl.html', 'Worklocation/userAppoinmentModification.tpl.html', 'Worklocation/userAppoinmentModificationCreate.tpl.html', 'Worklocation/userAppoinmentModificationUpdate.tpl.html', 'Worklocation/userAppoinmentSettings.tpl.html', 'Worklocation/userWorkPlaces.tpl.html', 'Worklocation/userWorkPlacesAdd.tpl.html', 'Worklocation/userWorkPlacesEdit.tpl.html', 'Messages/messagecompose.tpl.html', 'Messages/messages.tpl.html', 'Messages/sentmessages.tpl.html', 'Badges/userBadges.tpl.html', 'CustomDirectives/Maps/locationDirections.tpl.html']);

angular.module("Common/404.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Common/404.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"tex-center\">	\n" +
    "		<h3>404 Page Not Found</h3>\n" +
    "	</div>		\n" +
    "</div>\n" +
    "");
}]);

angular.module("Common/footer.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Common/footer.tpl.html",
    "<!--footer section start-->\n" +
    "<footer id=\"js-footer-hide-section\">\n" +
    "    <div class=\"footer\">\n" +
    "        <div class=\"container\">\n" +
    "            <!--<div banner position=\"bottomBanner\"></div>-->\n" +
    "            <div class=\"row\">\n" +
    "                <!--<div class=\"col-md-6 row\">\n" +
    "                    <div class=\"col-sm-7\">\n" +
    "                        <h3>Company</h3>\n" +
    "                        <div footer-links></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-5\">\n" +
    "                        <h3>Search By</h3>\n" +
    "                        <ul class=\"list-unstyled row footer-menu\">\n" +
    "                            <li class=\"col-sm-10\">\n" +
    "                                <ul class=\"list-unstyled\">\n" +
    "                                    <li><a href=\"#/search?is_online_booking=true&specialty_id=1\">Nombre del Doctor</a></li>\n" +
    "                                    <li><a href=\"#/search?is_online_booking=true&specialty_id=1\">Especialidad</a></li>\n" +
    "                                    <li><a href=\"#/search?is_online_booking=true&specialty_id=1\">Procedimiento</a></li>\n" +
    "                                </ul>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4 get-app\">\n" +
    "                    <h3>Get the App</h3>\n" +
    "                    <ul class=\"list-inline\">\n" +
    "                        <li><a href=\"javascript:void(0);\"><img src=\"assets/img/app-store.png\" alt=\"app-store\" /></a></li>\n" +
    "                        <li><a href=\"javascript:void(0);\"><img src=\"assets/img/google-store.png\" alt=\"google-store\" /></a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <h3>Follow Us</h3>\n" +
    "                    <ul class=\"list-inline social-link\">\n" +
    "                        <li class=\"facebook\">\n" +
    "                            <a href=\"{{$root.settings['follow.facebook_url']}}\" target=\"_blank\" title=\"{{'Follow me on facebook'| translate}}\" class=\"btn-social btn-fb\"><i class=\"fa fa-fw fa-facebook\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li class=\"twitter\">\n" +
    "                            <a href=\"{{$root.settings['follow.twitter_url']}}\" target=\"_blank\" title=\"{{'Follow me on twitter'| translate}}\" class=\"btn-social btn-twitter\"><i class=\"fa fa-fw fa-twitter\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li class=\"google-plus\">\n" +
    "                            <a href=\"{{$root.settings['follow.google_plus_url']}}\" target=\"_blank\" title=\"{{'Follow me on google plus'| translate}}\" class=\"btn-social btn-gp\"><i class=\"fa fa-fw fa-google-plus\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li class=\"linkedin\">\n" +
    "                            <a href=\"{{$root.settings['follow.linkedin_url']}}\" target=\"_blank\" title=\"{{'Follow me on linkedin'| translate}}\" class=\"btn-social btn-linkedin\"><i class=\"fa fa-fw fa-linkedin\"></i></a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>-->\n" +
    "                <!--<div class=\"pull-left footer-link\">\n" +
    "                    <ul class=\"list-inline terms-menu\">\n" +
    "                        <li>\n" +
    "                            Copyright &copy; {{model.date | date:'yyyy'}}\n" +
    "                            {{$root.settings['site.name']}}.\n" +
    "                            {{'All rights reserved' | translate}}.\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                            <div footer-links></div>\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                            <a href=\"#/contactus\" title=\"Contactenos\" class=\"whitec\">\n" +
    "                                Contactenos\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>-->\n" +
    "                <!--<div class=\"social-icons\">\n" +
    "                    <ul class=\"list-inline social-link\">\n" +
    "                        <li ng-show=\"$root.settings['follow.facebook_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.facebook_url']}}\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{'Follow me on facebook'| translate}}\" class=\"btn-social btn-fb\"><i class=\"fa fa-fw fa-facebook\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.google_plus_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.google_plus_url']}}\" target=\"_blank\" title=\"Siguenos en Google Plus\" class=\"btn-social btn-gp\"><i class=\"fa fa-fw fa-google-plus\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.linkedin_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.linkedin_url']}}\" target=\"_blank\" title=\"Siguenos en Linkedin\" class=\"btn-social btn-linkedin\"><i class=\"fa fa-fw fa-linkedin\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.foursquare_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.foursquare_url']}}\" target=\"_blank\" title=\"Siguenos en  Foursquare\" class=\"btn-social btn-foursquare\"><i class=\"fa fa-fw fa-foursquare\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.pinterest_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.pinterest_url']}}\" target=\"_blank\" title=\"Siguenos en Pinterest\" class=\"btn-social btn-pinterest\"><i class=\"fa fa-fw fa-pinterest\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.flickr_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.flickr_url']}}\" target=\"_blank\" title=\"Follow me on Flickr\" class=\"btn-social btn-flickr\"><i class=\"fa fa-fw fa-flickr\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.instagram_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.instagram_url']}}\" target=\"_blank\" title=\"Siguenos en  Instagram\" class=\"btn-social btn-instagram\"><i class=\"fa fa-fw fa-instagram\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.tumblr_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.tumblr_url']}}\" target=\"_blank\" title=\"Siguenos en Tumblr\" class=\"btn-social btn-tumblr\"><i class=\"fa fa-fw fa-tumblr\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.youtube_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.youtube_url']}}\" target=\"_blank\" title=\"Siguenos en Youtube\" class=\"btn-social btn-youtube\"><i class=\"fa fa-fw fa-youtube-play\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.vimeo_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.vimeo_url']}}\" target=\"_blank\" title=\"Siguenos en Vimeo\" class=\"btn-social btn-vimeo\"><i class=\"fa fa-fw fa-vimeo\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.twitter_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.twitter_url']}}\" target=\"_blank\" title=\"Siguenos en Twitter\" class=\"btn-social btn-twitter\"><i class=\"fa fa-fw fa-twitter\"></i></a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>-->\n" +
    "                <div footer-links></div>      \n" +
    "         	</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>\n" +
    "<!--footer section end-->");
}]);

angular.module("Common/header.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Common/header.tpl.html",
    "<!-- Navigation -->\n" +
    "<nav class=\"navbar header navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header page-scroll visible-xs\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" id=\"js-header-hide-section-btn\" ng-class=\"(menu_show == false) ? 'toggle-top':' '\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <div class=\"navbar-collapse\">\n" +
    "                <ul class=\"pull-left call-us nav\">\n" +
    "                	<li class=\"text-left\" ng-class=\"(menu_show == true) ? 'show':'hide'\">\n" +
    "                    	<a class=\"call-icon\" href=\"javascript:void(0)\">Contactenos <span>{{$root.settings['site.contact_number']}}</span></a>\n" +
    "                    </li>\n" +
    "                    <li class=\"auth-logo\" ng-class=\"(menu_show == false) ? 'show':'hide'\">\n" +
    "                        <a ui-sref=\"home\" title=\"{{'Logo' | translate}}\"><img src=\"assets/img/logo-auth.png\" alt=\"logo\" class=\"img-responsive\"/></a>\n" +
    "                   </li>\n" +
    "				</ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "        	<ul class=\"pull-left call-us nav hidden-xs\">\n" +
    "			   <li ng-class=\"(menu_show == true) ? 'show':'hide'\">\n" +
    "               		<a class=\"call-icon\" href=\"javascript:void(0)\">Contactenos <span>{{$root.settings['site.contact_number']}}</span></a>\n" +
    "               </li>\n" +
    "			   <li class=\"auth-logo\" ng-class=\"(menu_show == false) ? 'show':'hide'\">\n" +
    "               		<a ui-sref=\"home\" title=\"{{'Logo' | translate}}\"><img src=\"assets/img/logo-auth.png\" alt=\"logo\" class=\"img-responsive\"/></a>\n" +
    "               </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right fa-inverse\" id=\"js-header-hide-section\" ng-class=\"(menu_show == false) ? 'nav-lh':' '\">\n" +
    "                <li ui-sref-active=\"active\" ng-show=\"!model.isAuthenticated()\">\n" +
    "                	<a class=\"login\" ui-sref=\"login\" title=\"Iniciar sesión / Regístrate\">Iniciar sesión / Regístrate</a>\n" +
    "                </li>\n" +
    "                <li ng-if=\"$root.auth.id == NULL\">\n" +
    "					<a class=\"contact-icon\" ui-sref=\"list_your_practice()\" title=\"Regístrate como Doctor\">Regístrate como Doctor</a>\n" +
    "                </li>\n" +
    "                <!--<li class=\"auth-user\" ng-show=\"model.isAuthenticated()\" ng-class=\"(menu_dropdown) ? 'show':'hide'\">\n" +
    "                	<span>{{$root.activityCount}}</span>\n" +
    "                	<a class=\"login\" href=\"#/doctor/{{$root.auth.username}}\" title=\"{{$root.auth.username}}\">{{$root.auth.username}}</a>\n" +
    "                </li>-->\n" +
    "                <li class=\"dropdown\" ng-show=\"model.isAuthenticated()\">\n" +
    "                	<dashboard-settings></dashboard-settings>\n" +
    "                	<!--<a href=\"\" class=\" dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                        <img ng-src=\"{{$root.auth.attachmentable.thumb.small}}\" alt=\"{{$root.auth.username}}\" />\n" +
    "                        <span class=\"fa fa-angle-down\"></span>\n" +
    "                    </a>\n" +
    "                   	<ul class=\"dropdown-menu\">\n" +
    "                    	<li><a href=\"#/appointments\" title=\"Ver Citas\"><i class=\"fa fa-eye fa-fw\"></i>Ver Citas</a></li>\n" +
    "                        <li><a href=\"#/users/user_profile\" title=\"Edit Profile\"><i class=\"fa fa-pencil-square-o fa-fw\"></i>{{ 'Edit Profile' | translate }}</a></li>\n" +
    "                        <li><a href=\"#\" ng-click=\"model.logout()\"><i class=\"fa fa-power-off fa-fw\"></i>Cerrar Sesion</a></li>\n" +
    "                    </ul>-->\n" +
    "                </li>\n" +
    "                <!--<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Contacts') > -1\">-->\n" +
    "                <li>\n" +
    "					<a class=\"contact-icon\" href=\"#/contactus\" title=\"Contactenos\">Contactenos</a>\n" +
    "                </li>\n" +
    "                <li ng-translate-language-select></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <!-- /.navbar-collapse -->\n" +
    "    </div>\n" +
    "    <!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "<!--<div subscription-alert ></div>-->");
}]);

angular.module("User/activities.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/activities.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <section class=\"contest-block\">\n" +
    "                <div class=\"container\" ng-controller=\"AcitivitiesController\">\n" +
    "                    <div class=\"clearfix\">\n" +
    "                        <div class=\"panel-heading\">\n" +
    "                            <h3 style=\"display:inline;\">{{'Activities'|translate}}</h3>\n" +
    "                        </div>\n" +
    "                        <div ng-repeat=\"activity in activities\">\n" +
    "                            <p> <span ng-if=\"activity.foreign.appointment_status_id == model.ConstAppointmentStatus.PendingApproval\">Your Appointment status is Pending.</span>  \n" +
    "                            <span ng-if=\"activity.foreign.appointment_status_id == model.ConstAppointmentStatus.Approved\">Your Appointment status is Approved.</span>\n" +
    "                            <span ng-if=\"activity.foreign.appointment_status_id == model.ConstAppointmentStatus.Closed\">Your Appointment status is Closed.</span>  \n" +
    "                            <span ng-if=\"activity.foreign.appointment_status_id == model.ConstAppointmentStatus.Cancelled\">Your Appointment status is Cancelled.</span>\n" +
    "                            <span ng-if=\"activity.foreign.appointment_status_id == model.ConstAppointmentStatus.Rejected\">Your Appointment status is Rejected.</span> <span ng-if=\"activity.foreign.appointment_status_id == model.ConstAppointmentStatus.Expired\">Your Appointment status is Expired.</span>   \n" +
    "                            </p>\n" +
    "                            <hr>\n" +
    "                        </div>\n" +
    "                        <div class=\"text-center\" ng-show=\"!loader && activities.length\">\n" +
    "                            <uib-pagination ng-hide=\"!activities.length \" total-items=\"total_items\" max-size=\"maxSize \" items-per-page=\"items_per_page\" ng-model=\"current_page \" class=\"pagination-sm \" boundary-links=\"true\" num-pages=\"no_of_pages \" ng-click=\"activityPaginate() \"></uib-pagination>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/authorization.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/authorization.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 edit-left\">\n" +
    "                    <display-template name=\"User/sidemenu.tpl.html\"></display-template>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "						<section class=\"clearfix authorisation setting-page\">\n" +
    "							<div class=\"page-head\">    \n" +
    "								<h1>{{\"Authorization\" | translate }}</h1>\n" +
    "							</div>\n" +
    "							<div class=\"form-content\">\n" +
    "								<form name=\"authorizeddoctor_add\" method=\"post\" ng-submit=\"model.addDoctor(authorizeddoctor_add.$valid)\" novalidate>\n" +
    "									<div class=\"form-body\">\n" +
    "										<div class=\"clearfix\">\n" +
    "											<div class=\"col-md-8\">\n" +
    "												<div class=\"form-group\" ng-class=\"{ 'has-error' : (authorizeddoctor_add.$submitted || authorizeddoctor_add.doctor_id.$touched) && (authorizeddoctor_add.doctor_id.$pristine || authorizeddoctor_add.doctor_id.$invalid) && (authorizeddoctor_add.doctor_id.$error.required)}\">\n" +
    "													<span>{{\"(I) \"}} {{$root.auth.user_profile.display_name}} {{\" Authorize\" | translate }}</span>\n" +
    "													\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"doctor_id\" id=\"doctor_id\" placeholder=\"{{'Enter Doctor code'| translate}}\" ng-model=\"model.authorizedDoctor.doctor_id\" ng-required=\"true\">\n" +
    "													<span class=\"error\" ng-show=\"(authorizeddoctor_add.$submitted || authorizeddoctor_add.doctor_id.$touched) && (authorizeddoctor_add.doctor_id.$pristine || authorizeddoctor_add.doctor_id.$invalid) && (authorizeddoctor_add.doctor_id.$error.required)\">{{\"Enter doctor code\" | translate }} </span>\n" +
    "												</div>\n" +
    "												\n" +
    "											</div>\n" +
    "											<div class=\"col-md-4\">\n" +
    "												<input type=\"submit\" class=\"btn pull-right btn-green btn-animate\" value=\"{{'Authorize' | translate }}\" />\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</form>\n" +
    "								<div class=\"clearfix\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <div class=\"col-md-12\">\n" +
    "                                            <div class=\"form-group clearfix\">\n" +
    "                                                <label>{{'Authorized Doctors'| translate}}</label>\n" +
    "                                                <div class=\"clearfix\" ng-repeat=\"doctorsList in model.doctorsLists.data\" ng-show=\"model.dataLength\">\n" +
    "                                                    <p class=\"pull-left\">{{doctorsList.doctor.user_profile.display_name}}{{\" | \"}}<a href=\"javascript:void(0)\">{{doctorsList.doctor.user_profile.specialties[0].name}}</a></p>\n" +
    "                                                    <a class=\"pull-right\" href=\"javascript:void(0)\" ng-click=\"model.removeDoctor(doctorsList.id)\" >{{\"Revoke\" | translate }}</a>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "								</div>\n" +
    "								<div class=\"clearfix\" ng-show=\"!model.dataLength\">\n" +
    "									 <p class=\"hor-space alert alert-danger\">{{'No Record Found'|translate}}</p>\n" +
    "								</div>\n" +
    "								 <div class=\"paging clearfix text-center\" ng-show=\"model.dataLength\">\n" +
    "									<uib-pagination total-items=\"model._metadata.total\" num-pages=\"model._metadata.total_pages\" ng-model=\"model.currentPage\" max-size=\"model.maxSize\" boundary-links=\"true\" boundary-link-numbers=\"true\" rotate=\"false\" items-per-page=\"model._metadata.per_page\" previous-text=\"&#xf104;\" next-text=\"&#xf105;\" ng-change=\"model.paginate()\"></uib-pagination>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "					</section>\n" +
    "					</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/booking_register.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/booking_register.tpl.html",
    "<div class=\"register m-b-100\">\n" +
    "    <div class=\"container m-t-100\">\n" +
    "    	<figure class=\"m-b-100\">\n" +
    "            <a href=\"#!/\">\n" +
    "                <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive center-block\"/>\n" +
    "            </a>\n" +
    "        </figure>\n" +
    "        <div class=\"user-login col-sm-8 col-sm-offset-2 row\">\n" +
    "            <div class=\"user-signup\">\n" +
    "                <div class=\"form-heading\">\n" +
    "                    <h2 class=\"form-login-heading\">{{'Book your appointment'| translate }}\n" +
    "                      \n" +
    "                    </h2>\n" +
    "                </div>\n" +
    "                <form class=\"form-login form-horizontal\" name=\"signupForm\" ng-submit=\"model.signup(signupForm.$valid)\" novalidate>\n" +
    "                    <div class=\"form-body\">\n" +
    "						<div class=\"col-md-12 location-info row\">\n" +
    "                            \n" +
    "                            <div class=\"row\">\n" +
    "								<div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.is_seen_before.$touched) && (signupForm.is_seen_before.$pristine || signupForm.is_seen_before.$invalid)}\">\n" +
    "									<label class=\"col-sm-12 form-name\"><span class=\"red\">*</span>{{'Have you used Latinomedica before?'| translate}}</label>\n" +
    "									<span>We will use the information from your last visit</span>\n" +
    "								<div class=\"col-md-6\">\n" +
    "                          \n" +
    "							<label>\n" +
    "    <input type=\"radio\" ng-model=\"model.is_seen_before\" value=\"1\">Soy nuevo en {{$root.settings['site.name']}}\n" +
    "  </label>\n" +
    "									</div>\n" +
    "									<div class=\"col-md-6\">\n" +
    "  <label>\n" +
    "    <input type=\"radio\" ng-model=\"model.is_seen_before\" value=\"0\">Ya he usado {{$root.settings['site.name']}}\n" +
    "  </label>\n" +
    "									</div>\n" +
    "                        </div>\n" +
    "									\n" +
    "						 </div>\n" +
    "                        </div>\n" +
    "						\n" +
    "						<div class=\"form-heading\">\n" +
    "                    <h2 class=\"form-login-heading\">Crea tu cuenta\n" +
    "                      \n" +
    "                    </h2>\n" +
    "							<span>{{$root.settings['site.name']}} le ayudará a manejar sus citas</span>\n" +
    "                </div>\n" +
    "								<div class=\"col-md-12 location-info row\">\n" +
    "                            \n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-6\">\n" +
    "									 <label class=\"col-sm-12 form-name\">Telefono movil</label>\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.required)}\">\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"fa fa-phone fa-fw\"></i></span>\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"phone\" placeholder=\"{{'Mobile'| translate}}\" ng-model=\"model.user_profile.phone\"\n" +
    "                                                ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                            />\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.required)\">{{'Enter Mobile Number'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.pattern)\">{{'Enter Valid Mobile Number Without Character'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.minlength)\">{{'Minimum Length is 8'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.maxlength)\">{{'Maximum Length is 12'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    \n" +
    "                                </div>\n" +
    "                               \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                            \n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid)}\">\n" +
    "								 \n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">*Ingrese su correo electronico</label>\n" +
    "                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" ng-model=\"model.email\" ng-required=\"true\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.required)\">{{'Please enter your E-mail id'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.email)\">{{'Enter valid E-mail'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.emailErr\">{{model.emailErr}}</span>\n" +
    "                                </div>\n" +
    "							</div>\n" +
    "								 <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.confirm_email.$pristine || signupForm.confirm_email.$invalid)}\">\n" +
    "								<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">*Confirme su correo electrónico</label>\n" +
    "                                    <input type=\"email\" class=\"form-control\" placeholder=\"Confirm Email\" name=\"confirm_email\" ng-model=\"model.confirm_email\" ng-required=\"true\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.confirm_email.$pristine || signupForm.confirm_email.$invalid) && (signupForm.confirm_email.$error.required)\">{{'Please re-enter your E-mail id'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.confirm_email.$pristine || signupForm.confirm_email.$invalid) && (signupForm.confirm_email.$error.email)\">{{'Enter valid E-mail'| translate }}</span>\n" +
    "									<span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.email.$dirty && signupForm.confirm_email.$dirty) && (model.email != model.confirm_email)\">{{'E-mail Mismatch'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.confirm_emailErr\">{{model.confirm_emailErr}}</span>\n" +
    "                                </div>\n" +
    "								</div>\n" +
    "							\n" +
    "							<div class=\"form-group checkbox-field\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.remainder.$touched) && (signupForm.remainder.$pristine || signupForm.remainder.$invalid)}\">\n" +
    "                            <div class=\"checkbox col-sm-12\">\n" +
    "                                <label>\n" +
    "                                    <input id=\"terms_cond\" class=\"hide\" type=\"checkbox\" name=\"remainder\" ng-model=\"model.remainder\">\n" +
    "                                    {{'Please, send me emails with preventive health care remainders. recommended'| translate }}\n" +
    "                                    <span></span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            \n" +
    "                        </div>\n" +
    "                            \n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">*Crear contraseña</label>\n" +
    "                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" ng-model=\"model.password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.required)\">{{ 'Enter Password' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.minlength)\">{{ 'Minimum length is 6' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.maxlength)\">{{ 'Maximum length is 20' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.passwordErr\">{{model.passwordErr}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            \n" +
    "							<div class=\"form-group\">\n" +
    "                            <label class=\"col-sm-12 form-name\">*Nombre</label>\n" +
    "                            <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid)}\">\n" +
    "                                <input type=\"text\" class=\"form-control\" placeholder=\"Por favor ingresa tu Nombre\" name=\"first_name\" ng-model=\"model.first_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.required)\">{{'Please enter your first name'| translate }} </span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.pattern)\">{{ 'Enter Valid name without number' | translate }}</span>\n" +
    "                                 \n" +
    "                            </div>\n" +
    "                                <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid)}\">\n" +
    "                                <input type=\"text\" class=\"form-control\" placeholder=\"Por favor ingresa tu Apellido\" name=\"last_name\" ng-model=\"model.last_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.required)\">{{'Please enter your last name'| translate }} </span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.pattern)\">{{ 'Enter valid name without number' | translate }}</span>\n" +
    "\n" +
    "                                 \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "							\n" +
    "							\n" +
    "							<div class=\"col-md-12 location-info row\">\n" +
    "                            \n" +
    "                            <div class=\"row\">\n" +
    "								 <label class=\"col-sm-12 form-name\">*Fecha de nacimiento</label>\n" +
    "								<div class=\"col-md-4\">\n" +
    "									\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.required)}\">\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"month\" id=\"month\" placeholder=\"{{'MM'| translate}}\" ng-model=\"model.signupForm.month\"\n" +
    "                                                ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"2\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                            />\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.required)\">{{'Enter Month'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.pattern)\">{{'Enter Valid Month Without Character'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.minlength)\">{{'Minimum Length is 2'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.maxlength)\">{{'Maximum Length is 2'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    \n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4\">\n" +
    "									\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.required)}\">\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"date\" id=\"date\" placeholder=\"{{'DD'| translate}}\" ng-model=\"model.signupForm.date\"\n" +
    "                                                ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"2\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                            />\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.required)\">{{'Enter date'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.pattern)\">{{'Enter Valid date Without Character'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.minlength)\">{{'Minimum Length is 2'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.maxlength)\">{{'Maximum Length is 2'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    \n" +
    "                                </div>\n" +
    "								<div class=\"col-md-4\">\n" +
    "									\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.required)}\">\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"year\" id=\"year\" placeholder=\"{{'yyyy'| translate}}\" ng-model=\"model.signupForm.year\"\n" +
    "                                                ng-required=\"true\" ng-minlength=\"4\" ng-maxlength=\"4\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                            />\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.required)\">{{'Enter year'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.pattern)\">{{'Enter Valid year Without Character'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.minlength)\">{{'Minimum Length is 4'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.maxlength)\">{{'Maximum Length is 4'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    \n" +
    "                                </div>\n" +
    "                                \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "							\n" +
    "							<div class=\"input-group dropdown-block\">\n" +
    "                                <span class=\"input-group-addon\"><i class=\"fa fa-users fa-fw\"></i></span>\n" +
    "                                <select ng-model=\"model.gender_id\" ng-required=\"true\" name=\"gender_id\" class=\"form-control\">\n" +
    "                                    <option value=\"\">Genero</option>\n" +
    "                                    <option ng-repeat=\"genderList in genderLists\" value=\"{{genderList.id}}\">{{genderList.name}}</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "					\n" +
    "                        <div class=\"col-md-12 location-info row\">\n" +
    "                            \n" +
    "                            <div class=\"row\">\n" +
    "								<div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.is_member.$touched) && (signupForm.is_member.$pristine || signupForm.is_member.$invalid)}\">\n" +
    "									<label class=\"col-sm-12 form-name\"><span class=\"red\">*</span>¿quién va a ver al doctor?</label>\n" +
    "									\n" +
    "								<div class=\"col-md-6\">\n" +
    "                          \n" +
    "							<label>\n" +
    "    <input type=\"radio\" ng-model=\"model.is_member\" value=\"1\">Yo\n" +
    "  </label>\n" +
    "									</div>\n" +
    "									<div class=\"col-md-6\">\n" +
    "  <label>\n" +
    "    <input type=\"radio\" ng-model=\"model.is_member\" value=\"2\">Un Familiar\n" +
    "  </label>\n" +
    "									</div>\n" +
    "									<div class=\"col-md-6\">\n" +
    "  <label>\n" +
    "    <input type=\"radio\" ng-model=\"model.is_member\" value=\"3\">Otra Persona\n" +
    "  </label>\n" +
    "									</div>\n" +
    "                        </div>\n" +
    "									\n" +
    "						 </div>\n" +
    "                        </div>\n" +
    "						\n" +
    "						<div class=\"input-group dropdown-block\">\n" +
    "                                <span class=\"input-group-addon\"><i class=\"fa fa-users fa-fw\"></i></span>\n" +
    "                                <select ng-model=\"model.family_member\" ng-required=\"true\" name=\"family_member\" class=\"form-control\">\n" +
    "                                    <option value=\"\">{{\"Select from the list of family member or friend\"| translate }}</option>\n" +
    "                                    <option ng-repeat=\"genderList in genderLists\" value=\"{{genderList.id}}\">{{genderList.name}}</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "						\n" +
    "						<div class=\"col-md-12 location-info row\">\n" +
    "                            \n" +
    "                            <div class=\"row\">\n" +
    "								<label class=\"col-sm-12 form-name\"><span>*</span>Agregar a un Familiar o Amigo</label>\n" +
    "								<div class=\"col-md-3\">\n" +
    "									\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.name_member.$touched) && (signupForm.name_member.$pristine || signupForm.name_member.$invalid) && (signupForm.name_member.$error.required)}\">\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"name_member\" id=\"name_member\" placeholder=\"{{'Name of the family member or Patient'| translate}}\" ng-model=\"model.signupForm.name_member\" ng-required=\"true\" ng-minlength=\"3\"  ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                            />\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.name_member.$touched) && (signupForm.name_member.$pristine || signupForm.name_member.$invalid) && (signupForm.name_member.$error.required)\">{{'Enter Name'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.name_member.$touched) && (signupForm.name_member.$pristine || signupForm.name_member.$invalid) && (signupForm.name_member.$error.pattern)\">{{'Enter Valid Name Without Character'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.name_member.$touched) && (signupForm.name_member.$pristine || signupForm.name_member.$invalid) && (signupForm.name_member.$error.minlength)\">{{'Minimum Length is 3'| translate }} </span>\n" +
    "                                        \n" +
    "                                    </div>\n" +
    "                                    \n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-3\">\n" +
    "									\n" +
    "                                     <span class=\"input-group-addon\"><i class=\"fa fa-users fa-fw\"></i></span>\n" +
    "                                <select ng-model=\"model.family_member\" ng-required=\"true\" name=\"family_member\" class=\"form-control\">\n" +
    "                                    <option value=\"\">{{\"Select from the list of family member or friend\"| translate }}</option>\n" +
    "                                    <option ng-repeat=\"genderList in genderLists\" value=\"{{genderList.id}}\">{{genderList.name}}</option>\n" +
    "                                </select>\n" +
    "                                    \n" +
    "                                </div>\n" +
    "								<div class=\"col-md-3\">\n" +
    "									\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.age.$touched) && (signupForm.age.$pristine || signupForm.age.$invalid) && (signupForm.year.$error.required)}\">\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"age\" id=\"age\" placeholder=\"{{'age'| translate}}\" ng-model=\"model.signupForm.age\"\n" +
    "                                                ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"2\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                            />\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.age.$touched) && (signupForm.age.$pristine || signupForm.age.$invalid) && (signupForm.age.$error.required)\">{{'Enter age'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.age.$touched) && (signupForm.age.$pristine || signupForm.age.$invalid) && (signupForm.age.$error.pattern)\">{{'Enter Valid age Without Character'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.age.$touched) && (signupForm.age.$pristine || signupForm.age.$invalid) && (signupForm.age.$error.minlength)\">{{'Minimum Length is 2'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.age.$touched) && (signupForm.age.$pristine || signupForm.age.$invalid) && (signupForm.age.$error.maxlength)\">{{'Maximum Length is 2'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    \n" +
    "                                </div>\n" +
    "								<div class=\"col-md-3\">\n" +
    "									\n" +
    "                                     <span class=\"input-group-addon\"><i class=\"fa fa-users fa-fw\"></i></span>\n" +
    "                                <select ng-model=\"model.family_member\" ng-required=\"true\" name=\"family_member\" class=\"form-control\">\n" +
    "                                    <option value=\"\">{{\"Select from the list of family member or friend\"| translate }}</option>\n" +
    "                                    <option ng-repeat=\"genderList in genderLists\" value=\"{{genderList.id}}\">{{genderList.name}}</option>\n" +
    "                                </select>\n" +
    "                                    \n" +
    "                                </div>\n" +
    "                                \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div class=\"form-group progress-reg\">\n" +
    "                        	<div class=\"col-sm-12\">\n" +
    "                                <p><span></span></p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "    \n" +
    "                        <div class=\"form-group checkbox-field\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.termCondition.$touched) && (signupForm.termCondition.$pristine || signupForm.termCondition.$invalid)}\">\n" +
    "                            <div class=\"checkbox col-sm-12\">\n" +
    "                                <label>\n" +
    "                                    <input id=\"terms_cond\" class=\"hide\" type=\"checkbox\" name=\"termCondition\" ng-model=\"model.terms_conditions\" ng-required=\"true\">\n" +
    "                                    {{'Please read and agree to The terms of Use and privace policy'| translate }}\n" +
    "                                    <span></span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.termCondition.$touched) && (signupForm.termCondition.$pristine || signupForm.termCondition.$invalid) && (signupForm.termCondition.$error.required)\">{{'Required'| translate }}</span>\n" +
    "                        </div>\n" +
    "						<div class=\"form-group checkbox-field\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.contract.$touched) && (signupForm.contract.$pristine || signupForm.contract.$invalid)}\">\n" +
    "                            <div class=\"checkbox col-sm-12\">\n" +
    "                                <label>\n" +
    "                                    <input id=\"terms_cond\" class=\"hide\" type=\"checkbox\" name=\"contract\" ng-model=\"model.contract\" ng-required=\"true\">\n" +
    "                                    {{'I have read and agree to Latinomedia '| translate }}\n" +
    "                                    <span></span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.contract.$touched) && (signupForm.contract.$pristine || signupForm.contract.$invalid) && (signupForm.contract.$error.required)\">{{'Required'| translate }}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-footer clearfix\">\n" +
    "                        <div class=\"col-sm-9 col-sm-offset-2\">\n" +
    "                            <div class=\"pull-left\">\n" +
    "                                <button class=\"btn btn-green btn-animate\" type=\"submit\">Unime Ahora!</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/change_password.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/change_password.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 edit-left\">\n" +
    "                    <display-template name=\"User/sidemenu.tpl.html\"></display-template>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "					<section class=\"clearfix setting-page\" ng-controller=\"ChangePasswordController as model\">\n" +
    "    					<div>\n" +
    "                            <div class=\"form-content change-password\">\n" +
    "                                <!--<figure class=\"page-logo\">\n" +
    "                                    <a href=\"#!/\">\n" +
    "                                        <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive center-block\"/>\n" +
    "                                    </a>\n" +
    "                                </figure>-->\n" +
    "                                <div class=\"page-head text-center\">\n" +
    "                                    <h1>{{'Reset Password' | translate}}</h1>\n" +
    "                                </div>\n" +
    "                                <form method=\"post\" name=\"changePasswordForm\" ng-submit=\"change_password(changePasswordForm.$valid, user)\" novalidate>\n" +
    "                                    <div class=\"form-body clearfix\">\n" +
    "                                        <div class=\"clearfix\">\n" +
    "                                            <div class=\"col-md-6\">\n" +
    "                                                <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : (changePasswordForm.$submitted || changePasswordForm.old_password.$touched) && (changePasswordForm.old_password.$pristine || changePasswordForm.old_password.$invalid) }\">\n" +
    "                                                    <label>{{'Current Password' | translate}}</label>\n" +
    "                                                    <input class=\"form-control\" type=\"password\" name=\"old_password\" ng-model=\"user.old_password\" placeholder=\"{{'Current Password' | translate}}\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                                    <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.old_password.$touched) && (changePasswordForm.old_password.$pristine || changePasswordForm.old_password.$invalid) && (changePasswordForm.old_password.$error.required)\">{{'Enter Current Password' | translate}}</span>\n" +
    "                                                    <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.old_password.$touched) && (changePasswordForm.old_password.$pristine || changePasswordForm.old_password.$invalid) && (changePasswordForm.old_password.$error.minlength)\">{{'Minimum length is' | translate}} 6</span>\n" +
    "                                                    <span class=\"error\" ng-show=\"user.oldPassErr\">{{user.oldPassErr}}</span>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"clearfix\">\n" +
    "                                            <div class=\"col-md-6\">\n" +
    "                                                <div class=\"form-group has-feedback\"\n" +
    "                                             ng-class=\"{ 'has-error' : (changePasswordForm.$submitted || changePasswordForm.new_password.$touched) && (changePasswordForm.new_password.$pristine || changePasswordForm.new_password.$invalid) }\">\n" +
    "                                                    <label>{{'New Password' | translate}}</label>\n" +
    "                                                    <input class=\"form-control\" type=\"password\" name=\"new_password\" ng-model=\"user.password\" placeholder=\"{{'New Password' | translate}}\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                                    <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.new_password.$touched) && (changePasswordForm.new_password.$pristine || changePasswordForm.new_password.$invalid) && (changePasswordForm.new_password.$error.required)\">{{'Enter New Password' | translate}}</span>\n" +
    "                                                    <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.new_password.$touched) && (changePasswordForm.new_password.$pristine || changePasswordForm.new_password.$invalid) && (changePasswordForm.new_password.$error.minlength)\">{{'Minimum length is' | translate}} 6</span>\n" +
    "                                                    <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.new_password.$touched) && (changePasswordForm.new_password.$pristine || changePasswordForm.new_password.$invalid) && (changePasswordForm.new_password.$error.maxlength)\">{{'Maximum length is' | translate}} 40</span>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"clearfix\">\n" +
    "                                            <div class=\"col-md-6\">\n" +
    "                                                <div class=\"form-group has-feedback\"\n" +
    "                                             ng-class=\"{ 'has-error' : (changePasswordForm.$submitted || changePasswordForm.confirm_new_password.$touched) && (changePasswordForm.confirm_new_password.$pristine || changePasswordForm.confirm_new_password.$invalid) }\">\n" +
    "                                                    <label>{{'Confirm Password' | translate}}</label>\n" +
    "                                                    <input class=\"form-control\" type=\"password\" name=\"confirm_new_password\" ng-model=\"user.confirm_password\" data-match=\"user.password\" placeholder=\"{{'Re-type New Password' | translate}}\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                                    <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.confirm_new_password.$touched) && (changePasswordForm.confirm_new_password.$pristine || changePasswordForm.confirm_new_password.$invalid) && (changePasswordForm.confirm_new_password.$error.required)\">{{'Re-type New Password' | translate}}</span>\n" +
    "                                                    <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.confirm_new_password.$touched) && (changePasswordForm.confirm_new_password.$pristine || changePasswordForm.confirm_new_password.$invalid) && (changePasswordForm.confirm_new_password.$error.minlength)\">{{'Minimum length is' | translate}} 6</span>\n" +
    "                                                    <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.confirm_new_password.$touched) && (changePasswordForm.confirm_new_password.$pristine || changePasswordForm.confirm_new_password.$invalid) && (changePasswordForm.confirm_new_password.$error.maxlength)\">{{'Maximum length is' | translate}} 40</span>\n" +
    "                                                    <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.confirm_new_password.$touched) && (changePasswordForm.new_password.$dirty && changePasswordForm.confirm_new_password.$dirty) && (user.confirm_new_password != user.new_password)\">{{'Password Mismatch' | translate}}</span>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-footer appmt-btn\">\n" +
    "                                        <button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Save' | translate}}</button>\n" +
    "                                        <a href=\"javascript:void(0)\" class=\"btn cancel\">{{'Cancel'| translate }}</a>\n" +
    "                                    </div>\n" +
    "                                </form>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/dashboard_settings.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/dashboard_settings.tpl.html",
    "<li class=\"dropdown arrow-icon\" ng-class=\"(menu_dropdown) ? 'show':'hide'\">\n" +
    "	<a href=\"javascript:void(0);\" title=\"{{$root.auth.username}}\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "        <img ng-src=\"{{$root.auth.attachmentable.thumb.medium}}\" alt=\"{{$root.auth.username}}\" />\n" +
    "        <span class=\"fa fa-angle-down\"></span>\n" +
    "	</a>\n" +
    "    <ul class=\"dropdown-menu arrow arrow-right\">\n" +
    "    	<li class=\"container\">\n" +
    "        	<ul class=\"list-unstyled row\">\n" +
    "            	<li class=\"col-sm-3 col-xs-6\">\n" +
    "                    <h2>{{'Profile Details' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li><a ui-sref=\"MyAppointments()\" title=\"{{'Dashboard' | translate}}\"><i class=\"fa fa-pencil-square-o fa-fw\"></i>{{'Dashboard' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/doctor/{{$root.auth.username}}\" title=\"{{'View Profile' | translate}}\"><i class=\"fa fa-eye fa-fw\"></i>{{'View Profile' | translate}}</a></li>\n" +
    "                        <li><a href=\"#/users/change_password\" title=\"{{'Change Password' | translate}}\"><i class=\"fa fa-lock fa-fw\"></i>{{'Change Password' | translate}}</a></li>                     <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/users/user_profile\" title=\"{{'Settings' | translate}}\"><i class=\"fa fa-cog\"></i>{{'Settings' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/messages\" title=\"{{'Messages' | translate}}\"><i class=\"fa fa-commenting-o\"></i>{{'Messages' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.settings['site.enabled_plugins'].indexOf('UserEducations') > -1\"><a href=\"#/user/education\" title=\"{{'My Educations' | translate}}\"><i class=\"fa fa-book fa-fw\"></i>{{'My Educations' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/badges\" title=\"{{'Badges' | translate}}\"><i class=\"fa fa-graduation-cap fa-fw\"></i>{{'Badges' | translate}}</a></li>  \n" +
    "                    </ul>\n" +
    "                    <h2 ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">{{'Work Places' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                    	<li><a href=\"#/user/workplaces\"><i class=\"fa fa-location-arrow fa-fw\"></i>{{ 'My Workplaces' | translate }}</a></li>\n" +
    "                    </ul>\n" +
    "               	</li>\n" +
    "            	<!--<li class=\"col-sm-3 col-xs-6\">\n" +
    "                    <h2>{{'Appointment Details' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/calendar\" title=\"{{'My Calendar' | translate}}\"><i class=\"fa fa-calendar fa-fw\"></i>{{'My Calendar' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/appointments/modifications\" title=\"{{'Appointment Modifications' | translate}}\"><i class=\"fa fa-edit fa-fw\"></i>{{'Appointment Modifications' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/appointments/settings\" title=\"{{'Appointment Settings' | translate}}\"><i class=\"fa fa-gear fa-fw\"></i>{{'Appointment Settings' | translate}}</a></li> \n" +
    "                        <li><a href=\"#/appointments/all\" title=\"{{'My Appointments' | translate}}\"><i class=\"fa fa-envelope-o fa-fw\"></i>{{'My Appointments' | translate}}</a></li>\n" +
    "                    </ul>\n" +
    "              	</li>-->\n" +
    "            	<li class=\"col-sm-3 col-xs-6\">\n" +
    "                    <h2>{{'Facilities' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                        <li><a href=\"#/appointments/all\" title=\"{{'My Appointments' | translate}}\"><i class=\"fa fa-envelope-o fa-fw\"></i>{{'My Appointments' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.auth.is_trial == 1 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 || $root.auth.role_id == model.ConstUserType.Doctor && $root.auth.is_paypal_cancel == 1 &&  $root.auth.subscription_end < currentDate && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"><a href=\"#/subscribe/plans\" title=\"{{'Subscription Plans' | translate}}\"><i class=\"fa fa-clone fa-fw\"></i>{{'Subscription Plans' | translate}}</a></li>    \n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.auth.is_trial == 0 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"><a href=\"#/subscribe/list\" title=\"{{'Subscribe Details' | translate}}\"><i class=\"fa fa-clone fa-fw\"></i>{{'My Subscription' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/specialties\" title=\"{{'My Specialties' | translate}}\"><i class=\"fa fa-user-md fa-fw\"></i>{{'My Specialties' | translate}}</a></li>\n" +
    "                        <!--<li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/insurances\" title=\"{{'My Insurances' | translate}}\"><i class=\"fa fa-retweet fa-fw\"></i>{{'My Insurances' | translate}}</a></li> -->\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/languages\" title=\"{{'My Languages' | translate}}\"><i class=\"fa fa-language fa-fw\"></i>{{'My Languages' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/photos\" title=\"{{'My Clinic Photos' | translate}}\"><i class=\"fa fa-hospital-o fa-fw\"></i>{{'My Clinic Photos' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.settings['site.enabled_plugins'].indexOf('IcalCalendar') > -1\"><a href=\"#/ical/list\" title=\"{{'Ical List' | translate}}\"><i class=\"fa fa-link fa-fw\"></i>{{'Ical' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.User\"><a href=\"#/\" title=\"{{'Book a new appointment' | translate}}\"><i class=\"fa fa-plus fa-fw\"></i>{{'Book a new appointment' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.User && $root.settings['site.enabled_plugins'].indexOf('UserFavorites') > -1\"><a href=\"#/user/favorite\" title=\"{{'My Doctors' | translate}}\"><i class=\"fa fa-user-md fa-fw\"></i>{{'My Doctors' | translate}}</a></li>\n" +
    "                        <li><a href=\"#/questions\" ng-if=\"$root.auth.role_id == model.ConstUserType.User && $root.settings['site.enabled_plugins'].indexOf('QuestionAnswer') > -1\" title=\"{{'Questions' | translate}}\"><i class=\"fa fa-book fa-fw\"></i>{{'Questions' | translate}}</a></li>\n" +
    "                        <li><a href=\"#/answers\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.settings['site.enabled_plugins'].indexOf('QuestionAnswer') > -1\" title=\"{{'Answers' | translate}}\"><i class=\"fa fa-book fa-fw\"></i>{{'Answers' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Admin\"><a href=\"ag-admin/#/dashboard\" title=\"{{'Admin Dashboard' | translate}}\"><i class=\"fa fa-clone fa-fw\"></i>{{'Admin Dashboard' | translate}}</a></li>\n" +
    "                    </ul>\n" +
    "              	</li>\n" +
    "            	<li class=\"col-sm-3 col-xs-6\">                    \n" +
    "                    <h2>{{'Exit' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li><a href=\"#\" ng-click=\"model.logout()\"><i class=\"fa fa-power-off fa-fw\"></i>{{ 'Sign out' | translate }}</a></li>\n" +
    "                    </ul>\n" +
    "              	</li>\n" +
    "       		</ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</li>");
}]);

angular.module("User/dashboard.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/dashboard.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "             <div class=\"tab-content\">\n" +
    "                <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"ajustes\">\n" +
    "                assaas\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/demographic.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/demographic.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 edit-left\">\n" +
    "                    <display-template name=\"User/sidemenu.tpl.html\"></display-template>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "					<section class=\"clearfix demograph setting-page\">\n" +
    "						<div class=\"page-head\">    \n" +
    "							<h1>{{\"Demographic Information\" | translate }}</h1>\n" +
    "						</div>\n" +
    "						<div class=\"form-content\">\n" +
    "							<form name=\"demographic_info\" method=\"post\" ng-submit=\"model.addDemographic()\">\n" +
    "								<div class=\"form-body\">\n" +
    "									<div class=\"clearfix\">\n" +
    "										<div class=\"col-md-12\">\n" +
    "											<div class=\"form-group checkbox-field\">\n" +
    "												<label for=\"name\">{{\"Race(choose one or more)\" | translate }}</label>\n" +
    "												<div class=\"checkbox\" ng-repeat=\"race in model.races\">\n" +
    "												<label>\n" +
    "													<input type=\"checkbox\" checklist-model=\"model.racevalue.race_ids\" checklist-value=\"race.id\" class=\"hide\" ng-change=\"model.race_check(race.id, checked)\"> {{race.name | translate }}\n" +
    "													<span></span>\n" +
    "												</label>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "									<div class=\"clearfix\">\n" +
    "										<div class=\"col-md-12\">\n" +
    "											<div class=\"form-group checkbox-field\">\n" +
    "												<label for=\"name\">{{\"Ethnicity\" | translate }}</label>\n" +
    "												<div class=\"checkbox\" ng-repeat=\"ethnicity in model.ethnic\">\n" +
    "												<label>\n" +
    "													<input type=\"checkbox\" checklist-model=\"model.ethic.ethic_ids\" checklist-value=\"ethnicity.id\" class=\"hide\" ng-change=\"model.ethnicity_check(ethnicity.id, checked)\"> {{ethnicity.name | translate }}\n" +
    "													<span></span>\n" +
    "												</label>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "									<div class=\"clearfix\">\n" +
    "										<div class=\"col-md-12\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<label for=\"name\">{{\"Preferred Language\" | translate }}</label>\n" +
    "												<p>Latinomedica {{\"is currently available in \" | translate }} <a href=\"javascript:void(0)\">{{\"English\" | translate }} </a>{{\"and\" | translate }} <a href=\"javascript:void(0)\">{{\"Spanish\" | translate }}</a></p>\n" +
    "												<div class=\"row\">\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<div class=\"form-group select-opt\">\n" +
    "															<div class=\"input-group\">\n" +
    "													 			<select class=\"form-control\" name=\"preferred_lang\" id=\"preferred_lang\" ng-model=\"model.demographicInformation.preferred_lang\" ng-options=\"c.value as c.option for c in model.languages\">\n" +
    "																	<option value=\"\">{{\"Select Language\" | translate }}</option>\n" +
    "																</select>\n" +
    "															</div>\n" +
    "														</div>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "									<div class=\"clearfix\">\n" +
    "										<div class=\"col-md-6\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<label for=\"name\">{{\"Zip code (Optional)\" | translate }}</label>\n" +
    "												<input type=\"text\" class=\"form-control\" name=\"postal_code\" id=\"postal_code\" ng-model=\"model.demographicInformation.postal_code\" >\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"form-footer appmt-btn\">\n" +
    "									<button class=\"btn btn-green btn-animate\" type=\"submit\">{{\"Save\" | translate }}</button>\n" +
    "								</div>\n" +
    "							</form>\n" +
    "						</div>\n" +
    "				</section>\n" +
    "				</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/doctor_filter.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/doctor_filter.tpl.html",
    "<div class=\"appointment-block pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head clearfix\">  \n" +
    "            <h1 class=\"pull-left\">{{\"Your team\" | translate }}</h1>\n" +
    "        </div>\n" +
    "        <form class=\"form-horizontal appmt-view\" name=\"search_list\" ng-submit=\"model.search_list_data(search_list.$valid)\">\n" +
    "			\n" +
    "			<div class=\"form-group col-md-8\">\n" +
    "				<select class=\"form-control\" ng-model=\"model.add_list.city_id\" name=\"city_id\" ng-required=\"true\">\n" +
    "					<option value=\"\">Ciudad</option>\n" +
    "					<option ng-repeat=\"citiesliList in citiesliLists\" ng-model=\"model.add_list.city_id\" value=\"{{citiesliList.id}}\">{{citiesliList.name}}</option>\n" +
    "				</select>\n" +
    "				<div ng-show=\"(search_list.city_id.$dirty && search_list.city_id.$invalid) || search_list.city_id.$touched\" ng-messages=\"search_list.city_id.$error\">\n" +
    "					<span class=\"error\" ng-message=\"required\">{{'select city'| translate }}</span>\n" +
    "				</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-8\">\n" +
    "				             <select ng-model=\"model.add_list.specialty_id\" ng-required=\"true\" class=\"form-control\" name=\"specialty_id\"  ng-options=\"specialtyliLists.id as specialtyliLists.name for specialtyliLists in specialtyliLists\">\n" +
    "                                    <option value=\"\">{{\"Specialists\" | translate }}</option>\n" +
    "                             </select>\n" +
    "				<div ng-show=\"(search_list.specialty_id.$dirty && search_list.specialty_id.$invalid) || search_list.specialty_id.$touched\" ng-messages=\"search_list.specialty_id.$error\">\n" +
    "					<span class=\"error\" ng-message=\"required\">{{'select specialty'| translate }}</span>\n" +
    "				</div>\n" +
    "                        </div>\n" +
    "			 <div class=\"form-group col-md-6\">\n" +
    "			<button type=\"submit\" class=\"btn btn-lg btn-primary\">{{\"Submit\" | translate}}</button>\n" +
    "			 <button class=\"btn btn-lg btn-warning\" type=\"button\" ng-click=\"closeModal()\">{{\"Cancel\" | translate}}</button>\n" +
    "			</div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/doctor_note.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/doctor_note.tpl.html",
    "<div class=\"appointment-block pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head clearfix\">  \n" +
    "            <h1 class=\"pull-left\">Nota</h1>\n" +
    "        </div>\n" +
    "        <form class=\"form-horizontal appmt-view\" name=\"remainder\" ng-submit=\"note_add(remainder.$valid)\">			\n" +
    "			<div class=\"form-group col-md-8\">\n" +
    "				<div class=\"form-group\" ng-class=\"{ 'has-error' : (remainder.patient_note.$submitted || remainder.patient_note.patient_note.$touched) && (remainder.patient_note.patient_note.$pristine || remainder.patient_note.patient_note.$invalid) && (remainder.patient_note.patient_note.$error.required)}\">\n" +
    "				 <label >Nota</label>\n" +
    "                     <textarea ng-model=\"model.remainder.patient_note\" name=\"patient_note\" placeholder=\"Note Description\" class=\"form-control\" ng-required=\"true\"></textarea>\n" +
    "					<span class=\"error\" ng-show=\"(remainder.patient_note.$submitted || remainder.patient_note.$touched) && (remainder.patient_note.$pristine || remainder.patient_note.$invalid) && (remainder.patient_note.$error.required)\">{{'Enter Note'| translate }} </span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "            <div class=\"form-group col-md-6\">\n" +
    "                <button type=\"submit\" class=\"btn btn-lg btn-primary\">{{'Submit' | translate}}</button>\n" +
    "                <button class=\"btn btn-lg btn-warning\" type=\"button\" ng-click=\"notecloseModal()\">{{'Cancel' | translate}}</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/doctor_profile_question.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/doctor_profile_question.tpl.html",
    "<div class=\"form-content\" ng-if=\"$root.auth.id != Null && $root.auth.role_id == model.ConstUserType.User && specialtyId != Null\">\n" +
    "    <!--<div class=\"page-head\">\n" +
    "        <h1>Pregunte al Doctor</h1>\n" +
    "    </div>-->\n" +
    "    <form name=\"formValue\" method=\"post\" ng-submit=\"questionAdd(formValue.$valid, data)\" novalidate>\n" +
    "        <div class=\"form-body\">\n" +
    "            <div ng-class=\"{ 'has-error' : (formValue.$submitted || formValue.specialty_id.$touched) && (formValue.specialty_id.$pristine || formValue.specialty_id.$invalid) && (formValue.specialty_id.$error.required)}\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"question\" id=\"question\" placeholder=\"{{'Write your question here'| translate }}\" ng-model=\"data.question\" ng-required=\"true\"/>\n" +
    "                    <span class=\"error\" ng-show=\"(formValue.$submitted || formValue.question.$touched) && (formValue.question.$pristine || formValue.question.$invalid) && (formValue.question.$error.required)\">{{'Question Required'| translate }} </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-footer text-center\">\n" +
    "            <button class=\"btn btn-green\" type=\"submit\">Agregar</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"form-group clearfix specialty\">\n" +
    "    <ul class=\"list-unstyled field-data\" >\n" +
    "        <!--<li class=\"sg-para3 sg-navy specialty\" ng-repeat=\"questionR in questions\">-->\n" +
    "        <li class=\"question sg-para3 sg-navy\" ng-repeat=\"questionR in questions\">\n" +
    "            <i class=\"fa fa-comment\" aria-hidden=\"true\"></i>\n" +
    "            {{questionR.question}}\n" +
    "            <span>{{questionR.created_at | dateFormat}}</span><br>\n" +
    "            <div class=\"answer\" ng-repeat=\"answer in questionR.answer.data\">\n" +
    "                <i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n" +
    "                {{answer.answer}}\n" +
    "                <span>{{answer.created_at | dateFormat}}</span>\n" +
    "			</div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("User/family_friends.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/family_friends.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 edit-left\">\n" +
    "                    <display-template name=\"User/sidemenu.tpl.html\"></display-template>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <section class=\"clearfix family-friends setting-page\" id=\"friendtop\">\n" +
    "                        <div class=\"page-head\">\n" +
    "                            <h1>Familia o Amigos</h1>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-content\">\n" +
    "                            <div class=\"form-body\">\n" +
    "                                <div class=\"clearfix\">\n" +
    "                                    <p class=\"pull-right\">Agregar nuevo</p>\n" +
    "                                </div>\n" +
    "                                <form name=\"familyfriends\" method=\"post\" ng-submit=\"model.friendsAdd(familyfriends.$valid)\" novalidate>\n" +
    "                                    <div class=\"clearfix\">\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (familyfriends.$submitted || familyfriends.first_name.$touched) && (familyfriends.first_name.$pristine || familyfriends.first_name.$invalid) && (familyfriends.first_name.$error.required)}\">\n" +
    "                                                <label>Nombre</label>\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"first_name\" id=\"first_name\" ng-required=\"true\" ng-model=\"model.familyFriends.first_name\" ng-minlength=\"3\" ng-maxlength=\"25\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                                <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.first_name.$touched) && (familyfriends.first_name.$pristine || familyfriends.first_name.$invalid) && (familyfriends.first_name.$error.required)\">{{\"First Name Required\" | translate }}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.first_name.$touched) && (familyfriends.first_name.$pristine || familyfriends.first_name.$invalid) && (familyfriends.first_name.$error.minlength)\">{{\"Minimum 3 character required\" | translate }}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.first_name.$touched) && (familyfriends.first_name.$pristine || familyfriends.first_name.$invalid) && (familyfriends.first_name.$error.maxlength)\">{{\"Maximum 25 Character\" | translate }}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.first_name.$touched) && (familyfriends.first_name.$pristine || familyfriends.first_name.$invalid) && (familyfriends.first_name.$error.pattern)\">{{\"Enter a valid name without numbers\" | translate }}</span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-6\" ng-class=\"{ 'has-error' : (familyfriends.$submitted || familyfriends.last_name.$touched) && (familyfriends.last_name.$pristine || familyfriends.last_name.$invalid) && (familyfriends.last_name.$error.required)}\">\n" +
    "                                            <div class=\"form-group\">\n" +
    "                                                <label>Apellido</label>\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"last_name\" id=\"last_name\" ng-required=\"true\" ng-model=\"model.familyFriends.last_name\" ng-minlength=\"1\" ng-maxlength=\"20\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                                 <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.last_name.$touched) && (familyfriends.last_name.$pristine || familyfriends.last_name.$invalid) && (familyfriends.last_name.$error.required)\">{{\"Last Name Required\" | translate }}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.last_name.$touched) && (familyfriends.last_name.$pristine || familyfriends.last_name.$invalid) && (familyfriends.last_name.$error.minlength)\">{{\"Minimum 1 Character\" | translate }}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.last_name.$touched) && (familyfriends.last_name.$pristine || familyfriends.last_name.$invalid) && (familyfriends.last_name.$error.maxlength)\">{{\"Maximum 20 Character\" | translate }}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.last_name.$touched) && (familyfriends.last_name.$pristine || familyfriends.last_name.$invalid) && (familyfriends.last_name.$error.pattern)\">{{\"Enter a valid name without numbers\" | translate }}</span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"clearfix\">\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (familyfriends.$submitted || familyfriends.relationship.$touched) && (familyfriends.relationship.$pristine || familyfriends.relationship.$invalid) && (familyfriends.relationship.$error.required)}\">\n" +
    "                                                <label>Relacion</label>\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"relationship\" id=\"relationship\" ng-required=\"true\" ng-model=\"model.familyFriends.relationship\">\n" +
    "                                                <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.relationship.$touched) && (familyfriends.relationship.$pristine || familyfriends.relationship.$invalid) && (familyfriends.relationship.$error.required)\">{{\"Enter relation\"| translate }} </span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (familyfriends.$submitted || familyfriends.email.$touched) && (familyfriends.email.$pristine || familyfriends.email.$invalid) && (familyfriends.email.$error.required)}\">\n" +
    "                                                <label>E-mail</label>\(Opcional)\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" ng-model=\"model.familyFriends.email\" ng-pattern=\"/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$/\">                                                \n" +
    "                        <span class=\"error\" ng-show=\"(familyfriends.$submitted) && (familyfriends.email.$pristine || familyfriends.email.$invalid) && (familyfriends.email.$error.email)\">{{\"Enter valid email\" | translate }}</span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"clearfix\">\n" +
    "                                        <div class=\"col-md-4\">\n" +
    "                                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (familyfriends.$submitted || familyfriends.mobile.$touched) && (familyfriends.mobile.$pristine || familyfriends.mobile.$invalid) && (familyfriends.mobile.$error.required)}\">\n" +
    "                                                <label for=\"cell\">Telefono Movil</label>\(Opcional)\n" +
    "                                                <input type=\"text\" class=\"form-control\" id=\"cell\" name=\"mobile\" id=\"mobile\" ng-model=\"model.familyFriends.mobile\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\">  \n" +
    "                                                 <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.mobile.$touched) && (familyfriends.mobile.$pristine || familyfriends.mobile.$invalid) && (familyfriends.mobile.$error.minlength)\">{{\"Minimum 8 digits\" | translate }}</span>\n" +
    "                                                 <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.mobile.$touched) && (familyfriends.mobile.$pristine || familyfriends.mobile.$invalid) && (familyfriends.mobile.$error.maxlength)\">{{\"Maximum 12 digits\" | translate }}</span>\n" +
    "                                                 <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.mobile.$touched) && (familyfriends.mobile.$pristine || familyfriends.mobile.$invalid) && (familyfriends.mobile.$error.pattern)\">{{\"Enter a valid mobile number\" | translate }}</span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-4\">\n" +
    "                                            <div class=\"form-group\">\n" +
    "                                                <label for=\"homemobile\">Telefono de Casa</label>\(Opcional)\n" +
    "                                                <input type=\"text\" class=\"form-control\" id=\"homemobile\" ng-model=\"model.familyFriends.home_phone\">\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-4\">\n" +
    "                                            <div class=\"form-group\">\n" +
    "                                                <label for=\"workmobile\">Telefono de Trabajo</label>\(Opcional)\n" +
    "                                                <input type=\"text\" class=\"form-control\" id=\"workmobile\" ng-model=\"model.familyFriends.work_phone\">\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"clearfix address\">\n" +
    "                                        <div class=\"\">\n" +
    "                                            <div class=\"col-md-12\"><label>Direccion</label>(Opcional)</div>\n" +
    "                                            <div class=\"col-md-4\">\n" +
    "                                                <div class=\"form-group\">\n" +
    "                                                    <input type=\"text\" class=\"form-control\" placeholder=\"Direccion\" ng-model=\"model.familyFriends.address\">\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-md-4\">\n" +
    "                                                <div class=\"form-group\">\n" +
    "                                                    <input type=\"text\" class=\"form-control\" placeholder=\"#Apt/Unidad\" ng-model=\"model.familyFriends.address1\">\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-md-4\">\n" +
    "                                                <div class=\"form-group select-opt\" >\n" +
    "                                                    <select class=\"form-control\" name=\"city_id\" id=\"city_id\" ng-model=\"model.familyFriends.city_id\" ng-options=\"city.id as city.name for city in cityArray\">  \n" +
    "                                                        <option value=\"\">{{\"City\" | translate }}</option>   \n" +
    "                                                    </select>\n" +
    "                                            </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-md-4\">\n" +
    "                                                <div class=\"form-group select-opt\" >\n" +
    "                                                    <select class=\"form-control\" name=\"state_id\" id=\"state_id\" ng-model=\"model.familyFriends.state_id\" ng-options=\"state.id as state.name for state in stateArray\">  \n" +
    "                                                        <option value=\"\">{{\"State\" | translate }}</option>   \n" +
    "                                                    </select>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-md-4\">\n" +
    "                                                <div class=\"form-group select-opt\" >\n" +
    "                                                    <select class=\"form-control\" name=\"country_id\" id=\"country_id\" ng-model=\"model.familyFriends.country_id\" ng-options=\"country.id as country.name for country in countryArray\">  \n" +
    "                                                        <option value=\"\">{{\"Country\" | translate }}</option>   \n" +
    "                                                    </select>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-md-4\">\n" +
    "                                                <div class=\"form-group\">\n" +
    "                                                    <input type=\"text\" class=\"form-control\" name=\"zipcode\" id=\"zipcode\" placeholder=\"Codigo Postal\" ng-model=\"model.familyFriends.zipcode\" ng-minlength=\"3\" />\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"clearfix\">\n" +
    "                                        <div class=\"\">\n" +
    "                                            <label class=\"col-md-12\">Genero</label>\n" +
    "                                            <div class=\"col-md-4\">\n" +
    "                                                <div class=\"form-group select-opt\" ng-class=\"{ 'has-error' : (familyfriends.$submitted || familyfriends.gender_id.$touched) && (familyfriends.gender_id.$pristine || familyfriends.gender_id.$invalid) && (familyfriends.gender_id.$error.required)}\">\n" +
    "                                                    <select class=\"form-control\" name=\"gender_id\" id=\"gender_id\" ng-model=\"model.familyFriends.gender_id\" ng-required=\"true\" ng-options=\"gender.id as gender.name for gender in genderArray\">  \n" +
    "                                                        <option value=\"\">{{\"Select Gender\" | translate }}</option>\n" +
    "                                                    </select>\n" +
    "                                                    <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.gender_id.$touched) && (familyfriends.gender_id.$pristine || familyfriends.gender_id.$invalid) && (familyfriends.gender_id.$error.required)\">{{\"Select a Gender\" | translate }}</span>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"clearfix\">\n" +
    "                                        <div class=\"\">\n" +
    "                                            <label class=\"col-md-12\">Fecha de Nacimiento</label>\n" +
    "                                            <div class=\"col-md-6\">\n" +
    "                                                <div class=\"form-group\" ng-class=\"{ 'has-error' : (familyfriends.$submitted || familyfriends.dob.$touched) && (familyfriends.dob.$pristine || familyfriends.dob.$invalid) && (familyfriends.dob.$error.required)}\">\n" +
    "                                                    <div class=\"input-group\" >\n" +
    "                                                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar fa-fw\"></i></span>                                                       \n" +
    "                                                        <input class=\"form-control\" ng-model=\"model.familyFriends.dob\" data-date-format=\"yyyy-MM-dd\"                    data-max-date=\"{{model.dateBlockeBefore}}\" data-autoclose=\"1\" name=\"dob\"\n" +
    "                                                            bs-datepicker type=\"text\" ng-required=\"true\" placeholder=\"Date\"\n" +
    "                                                            ng-model=\"dob\">\n" +
    "                                                        <span class=\"error\" ng-show=\"(familyfriends.$submitted || familyfriends.dob.$touched) && (familyfriends.dob.$pristine || familyfriends.dob.$invalid) && (familyfriends.dob.$error.required)\">{{\"Select DOB\" | translate }}</span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-footer appmt-btn\">\n" +
    "                                        <button class=\"btn btn-green btn-animate\" ng-if=\"typeid == 1\" type=\"submit\">{{\"Save\" | translate }}</button>\n" +
    "										<button class=\"btn btn-green btn-animate\" ng-if=\"typeid == 2\" type=\"submit\">{{\"Update\" | translate }}</button>\n" +
    "                                    </div>\n" +
    "                        		</form>\n" +
    "                        	</div>\n" +
    "                            <div class=\"created-block\">\n" +
    "                                <div class=\"page-head\">\n" +
    "                                    <h1>Familia o Amigos Añadidos</h1>\n" +
    "                                </div>\n" +
    "                                <div class=\"created-family\">\n" +
    "                                    <div>\n" +
    "                                        <div class=\"row\" ng-if=\"noRecords\" ng-repeat=\"friendsList in friendsLists\">\n" +
    "                                            <div class=\"col-sm-5\">\n" +
    "                                                <p>{{friendsList.first_name}}</p>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-sm-2\">\n" +
    "                                                <p>{{friendsList.relationship | capitalize}}</p>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-sm-2\">\n" +
    "                                                <p>{{friendsList.dob | ageFilter}} Años</p>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-sm-3\">\n" +
    "                                               <a href=\"javascript:void(0)\" class=\"pull-left\" ng-click=\"editFamilyfriend(friendsList.id)\">{{\"Edit\" | translate }}</a>\n" +
    "                                            <a href=\"javascript:void(0)\" class=\"pull-right\" ng-click=\"removeFamilyfriend(friendsList.id)\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"paging clearfix text-center\" ng-if=\"noRecords\">\n" +
    "                                            <uib-pagination total-items=\"_metadata.total\" num-pages=\"_metadata.total_pages\" ng-model=\"currentPage\" max-size=\"maxSize\"\n" +
    "                                                boundary-links=\"true\" boundary-link-numbers=\"true\" rotate=\"false\" items-per-page=\"_metadata.per_page\"\n" +
    "                                                previous-text=\"&#xf104;\" next-text=\"&#xf105;\" ng-change=\"paginate(currentPage)\"></uib-pagination>\n" +
    "                                        </div>\n" +
    "                                        <div>\n" +
    "                                            <div class=\"col-sm-12\" ng-if=\"!noRecords\">\n" +
    "                                                <p class=\"hor-space alert alert-danger\">{{\"No Family Added\" | translate }}</p>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "						</div>\n" +
    "                    </section>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/forgot_password.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/forgot_password.tpl.html",
    "<section class=\"clearfix\">\n" +
    "    <div class=\"container page-space\">\n" +
    "    	<div class=\"form-content col-md-5 forgot-pass\">\n" +
    "        	<figure class=\"page-logo\">\n" +
    "            	<a href=\"#!/\">\n" +
    "                    <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive center-block\"/>\n" +
    "                </a>\n" +
    "            </figure>\n" +
    "        	<div class=\"page-head text-center\">\n" +
    "                <h1>Olvido su contraseña?</h1>\n" +
    "            </div>\n" +
    "            <form class=\"\" method=\"post\" name=\"forgotPassword\" ng-submit=\"forgot_password(forgotPassword.$valid, user);forgotPassword.$setPristine()\">\n" +
    "            	<div class=\"form-body\">\n" +
    "                	<div class=\"alert alert-info\">\n" +
    "                        {{\"Por favor ingrese un correo electronico Le enviaremos una nueva contraseña al correo ingresado\"}}\n"+
    "                    </div>\n" +
    "                    <div class=\"form-group clearfix mt15\" ng-class=\"{ 'has-error' : (forgotPassword.$submitted || forgotPassword.email.$touched) && (forgotPassword.email.$pristine || forgotPassword.email.$invalid) }\">\n" +
    "                        <input class=\"form-control\" type=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Enter your email' | translate}}\"  ng-pattern=\"/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$/\" ng-required=\"true\" autofocus>\n" +
    "                        <div class=\"help-block\" ng-if=\"forgotPassword.email.$dirty\" ng-messages=\"forgotPassword.email.$error\">\n" +
    "                            <!--<div class=\"error\" ng-message=\"required\">{{'Please Enter Email' | translate}}.</div>\n" +
    "                            <div class=\"clearfix\"></div>  \n" +
    "                            <div class=\"error\" ng-message=\"email\">Su correo electronico es invalido.</div>-->\n" +
    "                            <div class=\"error\">\n" +
    "                                <span class=\"error\" ng-show=\"(forgotPassword.$submitted || forgotPassword.email.$touched) && (forgotPassword.email.$pristine || forgotPassword.email.$invalid) && (forgotPassword.email.$error.required)\">{{'Please Enter Email'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(forgotPassword.$submitted || forgotPassword.email.$touched) && (forgotPassword.email.$pristine || forgotPassword.email.$invalid) && (forgotPassword.email.$error.pattern)\">{{'Enter valid email'| translate }}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-footer\">\n" +
    "                    <button type=\"submit\" ng-disabled=\"forgotPassword.$invalid || disableButton\" class=\"btn btn-green btn-animate btn-block\" value=\"Enviar\">\n" +
    "                        Enviar\n" +
    "                        <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "         	</form>\n" +
    "            <p class=\"text-center account-type\">Todavia no tienes una cuenta?<a ng-href=\"#/users/login_user\">&nbsp;Registrate</a></p>\n" +
    "      	</div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("User/header.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/header.tpl.html",
    "<figure class=\"pull-left\">\n" +
    "	<a href=\"#!/\">\n" +
    "		<img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive\"/>\n" +
    "	</a>\n" +
    "</figure>\n" +
    "<ul class=\"nav navbar-nav navbar-right\">\n" +
    "	<li>\n" +
    "		<!--<a href=\"#/activities\" title=\"\">\n" +
    "			<i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i>\n" +
    "			<sup>{{$root.activityCount}}</sup>\n" +
    "		</a>-->\n" +
    "	</li>\n" +
    "	<li class=\"dropdown\">\n" +
    "		<!--<a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{\"Welcome\" | translate }}, {{$root.auth.user_profile.display_name}}\n" +
    "			<span class=\"caret\"></span>\n" +
    "		</a>-->\n" +
    "        <user-settings></user-settings>\n" +
    "		<!--<ul class=\"dropdown-menu\">\n" +
    "			<li><a href=\"javascript:void(0)\">Edit</a></li>\n" +
    "			<li><a href=\"javascript:void(0)\">Notifications</a></li>\n" +
    "			<li><a href=\"javascript:void(0)\">Logout</a></li>\n" +
    "		</ul>-->\n" +
    "	</li>\n" +
    "	<li>\n" +
    "		<a href=\"javascript:void(0)\">\n" +
    "			<img ng-src=\"{{$root.auth.attachmentable.thumb.medium}}\" alt=\"{{$root.auth.username}}\" class=\"img-responsive\"/>\n" +
    "		</a>\n" +
    "	</li>\n" +
    "</ul>");
}]);

angular.module("User/list_your_practice.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/list_your_practice.tpl.html",
    "<div class=\"practice-list\">\n" +
    "    <!-- Start: Banner -->\n" +
    "    <div class=\"practice-banner text-center fa-inverse\">\n" +
    "        <div class=\"container\">\n" +
    "        	<div class=\"practice-caption\">\n" +
    "                <h1 data-uk-scrollspy=\"{cls:'uk-animation-slide-top', delay:100}\">Los médicos prosperan con {{$root.settings['site.name']}}</h1>\n" +
    "                <a href=\"javascript:void(0)\" class=\"btn\" ng-click=\"gotoDiv('joinlationmedica')\">Suscribete Ahora!</a>\n" +
    "                <p>{{$root.settings['site.name']}} Me ayuda a lograr lo que me propuse hacer como doctor.</p>\n" +
    "                <span>Dr. Julio César Castro</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Banner -->\n" +
    "    \n" +
    "    <!-- Start: Banner Bottom -->\n" +
    "    <div class=\"practice-banner-bottom\">\n" +
    "        <div class=\"container\">\n" +
    "            <ul class=\"list-inline pull-left\">\n" +
    "                <li class=\"active\">\n" +
    "                    <a href=\"javascript:void(0)\">Ques es? {{$root.settings['site.name']}}{{\"?\"}}</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"javascript:void(0)\" ng-click=\"gotoDiv('doctorsjoin')\">¿Por qué unirse?</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"javascript:void(0)\" ng-click=\"gotoDiv('howitworks')\">¿Como funciona?</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <a class=\"pull-right btn\" href=\"javascript:void(0)\" ng-click=\"gotoDiv('joinlationmedica')\">Registrate como Doctor</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Banner Bottom -->\n" +
    "    \n" +
    "    <!-- Start: Related Practices -->\n" +
    "    <div class=\"related-list text-center\">\n" +
    "    	<div class=\"container\">\n" +
    "            <h2>En todo el país, los médicos confían en {{$root.settings['site.name']}}</h2>\n" +
    "			<h4>Sus colegas ya registrados</h4>\n" +
    "            <p>Ver quién está usando {{$root.settings['site.name']}} en su area</p>\n" +
    "            <form class=\"form-inline practice-search col-md-12\" name=\"searchForm\" ng-submit=\"model.search(searchForm)\">\n" +
    "            	<div class=\"form-group col-md-8 select-opt col-sm-12\">\n" +
    "                    <div class=\"input-group\">\n" +
    "                        <div class=\"input-group-addon hidden-xs\">Muéstrame</div>\n" +
    "                        <select ng-model=\"model.specialty_id\" name=\"specialty_id\" class=\"form-control\">\n" +
    "                                        <option value=\"\">Seleccionar Especialidad</option>\n" +
    "                                        <option ng-repeat=\"specialtyliList in specialtyliLists\" value=\"{{specialtyliList.id}}\">{{specialtyliList.name}}</option>\n" +
    "                                    </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group col-md-3 select-opt col-sm-12\">\n" +
    "                    <select class=\"form-control\" name=\"city_id\" id=\"city_id\" ng-model=\"model.city_id\" ng-options=\"city.id as city.name for city in cityArray\">  \n" +
    "					   <option value=\"\">{{\"City\" | translate }}</option>                    \n" +
    "					</select>\n" +
    "				</div>\n" +
    "                <div class=\"col-md-1\">\n" +
    "                    <button class=\"btn btn-block\" type=\"submit\">Ir</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <!-- Dynamic Data for Featured Doctors --> \n" +
    "            <div class=\"related-practice text-center col-md-12\">\n" +
    "    			<div class=\"container\">\n" +
    "                	<featured-specialist-doctor></featured-specialist-doctor>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <p class=\"col-md-12\"><a href=\"javascript:void(0)\" class=\"btn\" ng-click=\"gotoDiv('joinlationmedica')\">Suscribase!</a></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Related Practices -->\n" +
    "    \n" +
    "    <!-- Start: How patients find you -->\n" +
    "    <div class=\"container\" id=\"howitworks\">\n" +
    "    	<div class=\"patients-find text-center\">\n" +
    "            <h3>Como te encontraran los pacientes</h3>\n" +
    "            <a href=\"javascript:void(0)\" class=\"btn\" ng-click=\"gotoDiv('joinlationmedica')\">Crea tu Cuenta</a>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6 col-sm-6\">\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/search-mob.png\" alt=\"search mobile\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 col-sm-6\">\n" +
    "                    <div class=\"media text-center date\">\n" +
    "                        <div class=\"pull-left\">\n" +
    "                            <figure>\n" +
    "                                <img src=\"assets/img/date-icon.png\" alt=\"Date Icon\" class=\"img-responsive\" />\n" +
    "                            </figure>\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <h4 class=\"media-heading\">Su propia lista de búsqueda</h4>\n" +
    "                            <p>Los pacientes pueden encontrarlo en nuestro sitio web a través de la aplicación {{$root.settings['site.name']}}</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"media text-center search\">\n" +
    "                        <div class=\"pull-left\">\n" +
    "                            <figure>\n" +
    "                                <img src=\"assets/img/search-icon.png\" alt=\"search Icon\" class=\"img-responsive\" />\n" +
    "                            </figure>\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <h4 class=\"media-heading\">Reservaciones en línea 24/7</h4>\n" +
    "                            <p>Los pacientes pueden ver su disponibilidad y reservar con un toque ya sea a las 2 pm y sus teléfonos están ocupados, o son las 2 am y su oficina está cerrada</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6 col-sm-6\">\n" +
    "                    <div class=\"media text-center location\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <h4 class=\"media-heading\">Perfil personalizado de Latinomedica</h4>\n" +
    "                            <p>Su perfil {{$root.settings['site.name']}} se personaliza con su seguro en la red, los procedimientos ofrecidos y su disponibilidad en tiempo real</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <figure>\n" +
    "                                <img src=\"assets/img/location-icon.png\" alt=\"location Icon\" class=\"img-responsive\" />\n" +
    "                            </figure>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"media text-center foto\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <h4 class=\"media-heading\">Fotos profesionales</h4>\n" +
    "                            <p>Fotos de la oficina para mejorar su perfil y ayudar a atraer a más pacientes. (Sólo disponible en ciertas áreas.)</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <figure>\n" +
    "                                <img src=\"assets/img/foto-icon.png\" alt=\"location Icon\" class=\"img-responsive\" />\n" +
    "                            </figure>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"media text-center edit\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <h4 class=\"media-heading\">Ubicaciones ilimitadas</h4>\n" +
    "                            <p>Indique varias ubicaciones donde atiende en su perfil para ayudar a los pacientes a encontrar la ubicación más convenientemente</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <figure>\n" +
    "                                <img src=\"assets/img/edit-icon.png\" alt=\"location Icon\" class=\"img-responsive\" />\n" +
    "                            </figure>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"media text-center star\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <h4 class=\"media-heading\">Comentarios de Pacientes</h4>\n" +
    "                            <p>Construya y proteja su reputación en línea con reseñas verificadas de pacientes reales</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <figure>\n" +
    "                                <img src=\"assets/img/star-icon.png\" alt=\"location Icon\" class=\"img-responsive\" />\n" +
    "                            </figure>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 col-sm-6\">\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/search-browser.png\" alt=\"search mobile\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: How patients find you -->\n" +
    "    \n" +
    "    <!-- Start: Information Today -->\n" +
    "    <div class=\"interested\">\n" +
    "        <div class=\"container\">\n" +
    "            <p>¿Interesado? Obtenga más información hoy</p>\n" +
    "            <a href=\"javascript:void(0)\" class=\"btn\" ng-click=\"gotoDiv('joinlationmedica')\">Regístrese para una demostración GRATUITA</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Information Today -->\n" +
    "    \n" +
    "    <!-- Start: Latinomedica work -->\n" +
    "    <div class=\"interested-bottom\">\n" +
    "    	<div class=\"container\">\n" +
    "        	<div class=\"patients-find text-center\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6 col-sm-6\">\n" +
    "                        <figure>\n" +
    "                            <img src=\"assets/img/latinowork-mob.png\" alt=\"latinowork mobile\" class=\"img-responsive\" />\n" +
    "                        </figure>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 col-sm-6\">\n" +
    "                        <div class=\"media text-center notepad\">\n" +
    "                            <div class=\"pull-left\">\n" +
    "                                <figure>\n" +
    "                                    <img src=\"assets/img/notepad-icon.png\" alt=\"Notepad Icon\" class=\"img-responsive\" />\n" +
    "                                </figure>\n" +
    "                            </div>\n" +
    "                            <div class=\"media-body\">\n" +
    "                                <h4 class=\"media-heading\">Registrarse inmediatamente</h4>\n" +
    "                                <p>Los pacientes llenan sus papeles en línea - todo lo que tienes que hacer es imprimirlo. Esto puede mejorar la precisión y legibilidad de su práctica</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"media text-center mail\">\n" +
    "                            <div class=\"pull-left\">\n" +
    "                                <figure>\n" +
    "                                    <img src=\"assets/img/mail-icon.png\" alt=\"Mail Icon\" class=\"img-responsive\" />\n" +
    "                                </figure>\n" +
    "                            </div>\n" +
    "                            <div class=\"media-body\">\n" +
    "                                <h4 class=\"media-heading\">Recordatorios de correo electrónico y texto</h4>\n" +
    "                                <p>Sus pacientes reciben recordatorios de citas, {{$root.settings['site.name']}} reduce los espectaculos y el tiempo que pasa por su personal de oficina en el teléfono.</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                	</div>\n" +
    "                </div>\n" +
    "                <h4>Esto hace que Latinomedica funcione para usted</h4>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6 col-sm-6\">\n" +
    "                        <div class=\"media text-center calendar\">\n" +
    "                            <div class=\"media-left\">\n" +
    "                                <h4 class=\"media-heading\">Calendario Latinomedica</h4>\n" +
    "                                <p>Gestione la disponibilidad sin problemas. Usted controla su horario y los pacientes pueden elegir al reservar</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"media-body\">\n" +
    "                                <figure>\n" +
    "                                    <img src=\"assets/img/calendar-icon.png\" alt=\"calendar Icon\" class=\"img-responsive\" />\n" +
    "                                </figure>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"media text-center clock\">\n" +
    "                            <div class=\"media-left\">\n" +
    "                                <h4 class=\"media-heading\">Actividad de la cuenta</h4>\n" +
    "                                <p>Te recordaré que confirmes las citas y envías otras actualizaciones útiles.</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"media-body\">\n" +
    "                                <figure>\n" +
    "                                    <img src=\"assets/img/clock-icon.png\" alt=\"clock Icon\" class=\"img-responsive\" />\n" +
    "                                </figure>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"media text-center synchronize\">\n" +
    "                            <div class=\"media-left\">\n" +
    "                                <h4 class=\"media-heading\">Sincronizarse</h4>\n" +
    "                                <p>Nuestra tecnología lee su software de administración de prácticas (PMS) y muestra automáticamente los tiempos disponibles en su perfil {{$root.settings['site.name']}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"media-body\">\n" +
    "                                <figure>\n" +
    "                                    <img src=\"assets/img/synchronize-icon.png\" alt=\"synchronize Icon\" class=\"img-responsive\" />\n" +
    "                                </figure>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 col-sm-6\">\n" +
    "                        <figure>\n" +
    "                            <img src=\"assets/img/latinowork-browser.png\" alt=\"Latinowork Browser\" class=\"img-responsive\" />\n" +
    "                        </figure>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Latinomedica work -->\n" +
    "    \n" +
    "    <!-- Start: Doctors Join -->\n" +
    "    <div class=\"container\" id=\"doctorsjoin\">\n" +
    "        <div class=\"doctors-join\">\n" +
    "            <h3>¿Por qué los médicos se unen a Latinomedica?</h3>\n" +
    "            <div class=\"row text-center\">\n" +
    "                <div class=\"col-md-6 col-sm-6\">\n" +
    "                    <h5>Construyendo la lealtad del paciente</h5>\n" +
    "                    <p>Fortalecer las relaciones con los pacientes ofreciendo a {{$root.settings['site.name']}} una comodidad de primera clase desde simples reservas y recordatorios personalizados hasta inscripción sin problemas en línea.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 col-sm-6\">\n" +
    "                    <h5>Atrae a los pacientes que necesitas</h5>\n" +
    "                    <p>Su perfil de {{$root.settings['site.name']}} se personaliza con su seguro, los procedimientos ofrecidos y su disponibilidad en tiempo real.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <hr />\n" +
    "        <div class=\"doctors-join-bottom\">\n" +
    "            <div class=\"row text-center\">\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <h5>Mejorar la asistencia</h5>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/mejorar.png\" alt=\"mejorar\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>{{$root.settings['site.name']}} Recordatorios mejoran la asistencia en un 60%</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <h5>Estás siempre al día</h5>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/siempre.png\" alt=\"siempre\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>Recordatorios por SMS reserva pueden ser localizados o itinerantes usuarios potenciales</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <h5>Los reembolsos altos</h5>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/reembolsos.png\" alt=\"reembolsos\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>95% de {{$root.settings['site.name']}} los pacientes están asegurados comercialmente o pagan en efectivo.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <h5>Gran Presencia de búsqueda</h5>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/gran.png\" alt=\"gran\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>120 Millones de búsquedas anuales de médicos muestran {{$root.settings['site.name']}} en los mejores resultados.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"maximice text-center\">\n" +
    "        <div class=\"container\">\n" +
    "        	<div class=\"max-wid\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6 col-sm-6\">\n" +
    "                        <h5>Maximizar su disponibilidad</h5>\n" +
    "                        <p>Llene los espacios de último minuto de su calendario causadas por cancelaciones y cambios de horario. Con {{$root.settings['site.name']}}, Usted está allí para sus pacientes cuando lo necesitan.</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 col-sm-6\">\n" +
    "                        <h5>Fortalecer su reputación</h5>\n" +
    "                        <p>{{$root.settings['site.name']}} Protege y mejora su presencia en la web con revisiones verificadas de pacientes reales.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    	<hr />\n" +
    "        <div class=\"container\">\n" +
    "    		<div class=\"row\">\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <h5>Adaptarse a las necesidades urgentes</h5>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/acomodar.png\" alt=\"acomodar\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>El típico paciente de {{$root.settings['site.name']}} visita a un médico en 24 horas </p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <h5>Estar disponible 24/7</h5>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/estar.png\" alt=\"estar\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>45% de las citas de {{$root.settings['site.name']}} se reservan después de horas</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <h5>Capturar más comentarios</h5>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/capture.png\" alt=\"capture\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>El puntaje médico promedio después de un año en {{$root.settings['site.name']}} es 4.68 de 5 estrellas.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 col-sm-6\">\n" +
    "                    <h5>Obtener comentarios verificados</h5>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/obtener.png\" alt=\"obtener\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>El proveedor promedio tiene 40 calificaciones después de un año en {{$root.settings['site.name']}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Doctors Join -->\n" +
    "    \n" +
    "    <!-- Begin: Testimonials -->\n" +
    "    <div class=\"list-testimonial text-center\">\n" +
    "        <div class=\"container\">\n" +
    "        	<slick dots=\"true\" responsive=\"breakpointSlick\" slides-to-show=1 slides-to-scroll=1 class=\"slider lazy slick-slider\">\n" +
    "                <button type=\"button\" data-role=\"none\" class=\"slick-prev slick-arrow\" aria-label=\"Previous\" role=\"button\" style=\"display: block;\">                	\n" +
    "                    <img src=\"assets/img/left-slick-white.png\" alt=\"Previous\" class=\"img-responsive\" />\n" +
    "                </button>\n" +
    "                <div class=\"item\">\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>{{$root.settings['site.name']}} me ayuda a lograr lo que me propuse hacer como doctor</p>\n" +
    "                    <span>Dr. Julio César Castro</span>\n" +
    "                </div>\n" +
    "                <div class=\"item\">\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>{{$root.settings['site.name']}} me ayuda a lograr lo que me propuse hacer como doctor</p>\n" +
    "                    <span>Dr. Julio César Castro</span>\n" +
    "                </div>\n" +
    "                <div class=\"item\">\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>{{$root.settings['site.name']}} me ayuda a lograr lo que me propuse hacer como doctor</p>\n" +
    "                    <span>Dr. Julio César Castro</span>\n" +
    "                </div>\n" +
    "                <div class=\"item\">\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>{{$root.settings['site.name']}} me ayuda a lograr lo que me propuse hacer como doctor</p>\n" +
    "                    <span>Dr. Julio César Castro</span>\n" +
    "                </div>\n" +
    "                <div class=\"item\">\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                    <p>{{$root.settings['site.name']}} me ayuda a lograr lo que me propuse hacer como doctor</p>\n" +
    "                    <span>Dr. Julio César Castro</span>\n" +
    "                </div>\n" +
    "                <button type=\"button\" data-role=\"none\" class=\"slick-next slick-arrow\" aria-label=\"Next\" role=\"button\" style=\"display: block;\">\n" +
    "                    <img src=\"assets/img/right-slick-white.png\" alt=\"Next\" class=\"img-responsive\" />\n" +
    "                </button>\n" +
    "            </slick>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Testimonials -->\n" +
    "    \n" +
    "    <!-- Begin: Clients -->\n" +
    "    <div class=\"text-center list-client\">\n" +
    "        <div class=\"container\">\n" +
    "			<slick dots=\"true\" responsive=\"breakpointSlick\" slides-to-show=1 slides-to-scroll=1 class=\"slider lazy slick-slider\">\n" +
    "                <button type=\"button\" data-role=\"none\" class=\"slick-prev slick-arrow\" aria-label=\"Previous\" role=\"button\" style=\"display: block;\">                	\n" +
    "                    <img src=\"assets/img/left-slick-white.png\" alt=\"Previous\" class=\"img-responsive\" />\n" +
    "                </button>\n" +
    "                <div class=\"item\">\n" +
    "                    <p>{{$root.settings['site.name']}} es el único que ofrece a los pacientes una manera rápida e indolora de programar una cita con el médico adecuado.</p>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/elsiglo.png\" alt=\"elsiglo\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "                <div class=\"item\">\n" +
    "                    <p>{{$root.settings['site.name']}} es el único que ofrece a los pacientes una manera rápida e indolora de programar una cita con el médico adecuado.</p>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/elsiglo.png\" alt=\"elsiglo\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "                <div class=\"item\">\n" +
    "                    <p>{{$root.settings['site.name']}} es el único que ofrece a los pacientes una manera rápida e indolora de programar una cita con el médico adecuado.</p>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/elsiglo.png\" alt=\"elsiglo\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "                <div class=\"item\">\n" +
    "                    <p>{{$root.settings['site.name']}} es el único que ofrece a los pacientes una manera rápida e indolora de programar una cita con el médico adecuado.</p>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/elsiglo.png\" alt=\"elsiglo\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "                <div class=\"item\">\n" +
    "                    <p>{{$root.settings['site.name']}} {{\"es el único que ofrece a los pacientes una manera rápida e indolora de programar una cita con el médico adecuado\" | translate }}</p>\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/elsiglo.png\" alt=\"elsiglo\" class=\"img-responsive\" />\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "                <button type=\"button\" data-role=\"none\" class=\"slick-next slick-arrow\" aria-label=\"Next\" role=\"button\" style=\"display: block;\">\n" +
    "                    <img src=\"assets/img/right-slick-white.png\" alt=\"Next\" class=\"img-responsive\" />\n" +
    "                </button>\n" +
    "    		</slick>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Clients -->\n" +
    "    \n" +
    "    <!-- Start: Join Latinomedica -->\n" +
    "    <div class=\"register list-register\" id=\"joinlationmedica\">\n" +
    "        <div class=\"container\">\n" +
    "            <!--<figure class=\"page-logo\">\n" +
    "                <a href=\"#!/\">\n" +
    "                    <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive center-block\"/>\n" +
    "                </a>\n" +
    "            </figure>-->\n" +
    "            <h3>Únete a {{$root.settings['site.name']}}!</h3>\n" +
    "            <div class=\"user-login form-content\">\n" +
    "                <div class=\"user-signup\">\n" +
    "                    <form class=\"form-login\" name=\"signupForm\" ng-submit=\"model.signup(signupForm.$valid)\" novalidate>\n" +
    "                    	<div class=\"row\">\n" +
    "                        	<div class=\"col-md-6\">\n" +
    "                            	<div class=\"form-group\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid)}\">\n" +
    "                                        	<label>Nombre</label>\n" +
    "                                            <input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"first_name\" ng-model=\"model.first_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-zA-Z]*$/\">\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.required)\">{{\"Please enter your first name\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.minlength)\">{{\"Minimum length is 3\" | translate }}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.pattern)\">{{\"Enter Valid name without number and space\" | translate }}</span>                                     \n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid)}\">\n" +
    "                                        	<label>Apellido</label>\n" +
    "                                            <input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"last_name\" ng-model=\"model.last_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-zA-Z]*$/\">\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.required)\">{{\"Please enter your last name\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.minlength)\">{{\"Minimum length is 3\" | translate }}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.pattern)\">{{\"Enter valid name without number and space\" | translate }}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid)}\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <label>Numero Telefonico</label>\n" +
    "                                            <input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"phone\" ng-model=\"model.phone\" ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\">\n" +
    "                                             <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.required)\">{{\"Enter Phone Number\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.maxlength)\">{{\"Maximum length is 12\" | translate }}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.minlength)\">{{\"Minimum length is 8\" | translate }}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.pattern)\">{{\"Enter Valid Mobile Number Without Character\"| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <label>Tu correo electrónico</label>\n" +
    "                                            <input type=\"email\" class=\"form-control\" name=\"email\" ng-model=\"model.email\"  ng-required=\"true\">\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.required)\">{{\"Please enter your mail id\"| translate }}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.email)\">{{\"Enter valid email\"| translate }}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.emailErr\">{{model.emailErr}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "								<div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid)}\">\n" +
    "                                	<div class=\"row\">\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <label>Contraseña</label>\n" +
    "                                            <input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"password\" ng-model=\"model.password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "											<span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.required)\">{{\"Please enter password\" | translate }}</span>\n" +
    "											<span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.minlength)\">{{\"Minimum length is 6\" | translate }}</span>\n" +
    "											<span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.maxlength)\">{{\"Maximum length is 20\" | translate }}</span>\n" +
    "											<span class=\"error\" ng-show=\"model.passwordErr\">{{model.passwordErr}}</span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <label>Confirmar Contraseñpa</label>\n" +
    "                                            <input type=\"password\" class=\"form-control\" placeholder=\"\" name=\"confirmPassword\" ng-model=\"model.confirm_password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "											<span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.required)\">{{\"Please enter confirm password\" | translate}}</span>\n" +
    "											<span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.minlength)\">{{\"Minimum length is 6\" | translate}}</span>\n" +
    "											<span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.maxlength)\">{{\"Maximum length is 20\" | translate }}</span>\n" +
    "											<span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.password.$dirty && signupForm.confirmPassword.$dirty) && (model.password != model.confirm_password)\">{{\"Password Mismatch\" | translate }}</span>\n" +
    "											<span class=\"error\" ng-show=\"model.confirmPasswordErr\">{{model.confirmPasswordErr}}</span>\n" +
    "                                        </div>\n" +
    "                                	</div>\n" +
    "                                </div>								\n" +
    "                            </div>\n" +
    "                            \n" +
    "                            <div class=\"col-md-6\">\n" +
    "                            	<label>Especialidad</label>\n" +
    "                            	<div class=\"form-group select-opt\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.specialty_id.$touched) && (signupForm.specialty_id.$pristine || signupForm.specialty_id.$invalid)}\">\n" +
    "                                    <select ng-model=\"model.specialty_id\" ng-required=\"true\" name=\"specialty_id\" class=\"form-control\">\n" +
    "                                        <option value=\"\">Seleccione su Especialidad</option>\n" +
    "                                        <option ng-repeat=\"specialtyliList in specialtyliLists\" value=\"{{specialtyliList.id}}\">{{specialtyliList.name}}</option>\n" +
    "                                    </select>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.specialty_id.$touched) && (signupForm.specialty_id.$pristine || signupForm.specialty_id.$invalid) && (signupForm.specialty_id.$error.required)\">{{\"Please select specialty\" | translate }} </span>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid)}\">\n" +
    "                                	<div class=\"row\">\n" +
    "                                        <div class=\"\">\n" +
    "                                            <label>Código Postal</label>\n" +
    "                                            <input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"postal_code\" ng-model=\"model.postal_code\"  ng-required=\"true\" ng-minlength=\"3\" ng-maxlength=\"6\">\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid) && (signupForm.postal_code.$error.required)\">{{\"Enter Postal Code\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid) && (signupForm.postal_code.$error.minlength)\">{{\"Minimum length is 3\" | translate }}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid) && (signupForm.postal_code.$error.maxlength)\">{{\"Maximum length is 6\" | translate }}</span>\n" +
    "                                    	</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <!--<div class=\"form-body\">\n" +
    "                           <div class=\"row joint-field-w\">\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <div class=\"form-group select-opt\">\n" +
    "                                        <label class=\"form-name\">Ciudad</label>\n" +
    "                                        <div ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.city_id.$touched) && (signupForm.city_id.$pristine || signupForm.city_id.$invalid) && (signupForm.city_id.$error.required)}\">\n" +
    "                                            <select class=\"form-control\" name=\"city_id\" id=\"city_id\" ng-model=\"model.user_profile.city_id\" ng-options=\"city.id as city.name for city in cityArray\">  \n" +
    "                                                <option value=\"\">{{\"City'| translate}}</option>\n" +
    "                                            </select>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.city_id.$touched) && (signupForm.city_id.$pristine || signupForm.city_id.$invalid) && (signupForm.city_id.$error.required)\">{{\"Choose City\"| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                           <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.hobbies.$touched) && (signupForm.hobbies.$pristine || signupForm.hobbies.$invalid)}\">\n" +
    "                                <label class=\"form-name\">{{\"Hobbies'}}</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" name=\"hobbies\" ng-model=\"model.hobbies\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.hobbies.$touched) && (signupForm.hobbies.$pristine || signupForm.hobbies.$invalid) && (signupForm.hobbies.$error.required)\">{{\"Please enter your hobbies\"| translate }} </span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.hobbies.$touched) && (signupForm.hobbies.$pristine || signupForm.hobbies.$invalid) && (signupForm.hobbies.$error.minlength)\">{{ 'Minimum length is 3\" | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.hobbies.$touched) && (signupForm.hobbies.$pristine || signupForm.hobbies.$invalid) && (signupForm.hobbies.$error.pattern)\">{{ 'Enter hobbies without number\" | translate }}</span>\n" +
    "                            </div>\n" +
    "                        </div>-->\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <div class=\"g-recaptcha\" vc-recaptcha key=\"model.captcha_site_key\" ng-class=\"{ 'has-error' : model.captchaErr}\"></div>\n" +
    "                            <span class=\"error\" ng-show=\"model.captchaErr\">{{model.captchaErr}}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group checkbox-field\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.termCondition.$touched) && (signupForm.termCondition.$pristine || signupForm.termCondition.$invalid)}\">\n" +
    "                            <div class=\"checkbox col-sm-12 first-box\">\n" +
    "                                <label>\n" +
    "                                    <input id=\"terms_cond\" class=\"hide\" type=\"checkbox\" name=\"termCondition\" ng-model=\"model.terms_conditions\" ng-required=\"true\">\n" +
    "                                    {{\"Please read and agree to\" | translate }} <em>{{\"The terms of Use and privace policy\" | translate }}</em>\n" +
    "                                    <span></span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.termCondition.$touched) && (signupForm.termCondition.$pristine || signupForm.termCondition.$invalid) && (signupForm.termCondition.$error.required)\">{{\"Required\" | translate }}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-footer clearfix\">\n" +
    "                            <div class=\"pull-left\">\n" +
    "                                <button class=\"btn btn-green btn-animate\" type=\"submit\">{{\"Begin\" | translate }}</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Join Latinomedica -->\n" +
    "</div>");
}]);

angular.module("User/login_user.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/login_user.tpl.html",
    "<div class=\"login-page\">\n" +
    "	<div class=\"user-login container page-space\">\n" +
    "    	<div class=\"login-page-height login-user\">\n" +
    "        	<figure class=\"page-logo\">\n" +
    "            	<a href=\"#!/\">\n" +
    "                    <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive center-block\"/>\n" +
    "                </a>\n" +
    "            </figure>\n" +
    "            <div class=\"choose-register\">\n" +
    "                <div class=\"patient-block col-sm-6\">\n" +
    "                    <div class=\"choose-vendor media\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <img src=\"assets/img/look-doctor-login.png\" alt=\"doctor\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <h3>{{'I am looking for a doctor'|translate}}</h3>\n" +
    "                            <p>Looking to make an appointment with one of ABS doc's Doctors or Dentists in your area</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"button\">\n" +
    "                            <a href=\"#/users/register/patient{{widgetLink}}\" class=\"btn btn-animate\" >{{'Join Us'|translate}}</a> \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"doctor-block col-sm-6\">\n" +
    "                    <div class=\"choose-vendor media\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <img src=\"assets/img/doctor-login.png\" alt=\"doctor\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <h3>{{'I am doctor'|translate}}</h3>\n" +
    "                            <p>Looking to become a member of ABS doc's network of practioners? Sign up to start taking appointments.</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"button\">\n" +
    "                            <a href=\"#/users/register/doctor{{widgetLink}}\" class=\"btn btn-animate\">{{'Join Us'|translate}}</a> \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div> \n" +
    "            </div>\n" +
    "      	</div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/login.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/login.tpl.html",
    "<div class=\"login-page page-space\">\n" +
    "    <div class=\"user-login container\">\n" +
    "    	<div class=\"login-page-height\">\n" +
    "        	<figure class=\"page-logo\">\n" +
    "            	<a href=\"#!/\">\n" +
    "                    <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive center-block\"/>\n" +
    "                </a>\n" +
    "            </figure>\n" +
    "            <div class=\"login-section col-md-6 col-xs-12\">\n" +
    "                <form class=\"form-login form-horizontal col-sm-10\" name=\"loginForm\" ng-submit=\"model.login(loginForm.$valid)\" novalidate>\n" +
    "                   	<div class=\"clearfix\">\n" +
    "                        <h2 class=\"form-login-heading\"><span>Igresar</span></h2>\n" +
    "                    </div>\n" +
    "                    <h4>Accede a tu cuenta de {{$root.settings['site.name']}}</h4>\n" +
    "                    <div class=\"form-group email\" ng-class=\"{ 'has-error' : (loginForm.$submitted || loginForm.email.$touched) && (loginForm.email.$pristine || loginForm.email.$invalid)}\">\n" +
    "			     		<input type=\"email\" class=\"form-control\" placeholder=\"E-mail\" name=\"email\" ng-model=\"model.email\" ng-required=\"true\">\n" +
    "                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.email.$touched) && (loginForm.email.$pristine || loginForm.email.$invalid) && (loginForm.email.$error.required)\">{{'Enter Email'| translate }}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.email.$touched) && (loginForm.email.$pristine || loginForm.email.$invalid) && (loginForm.email.$error.email)\">{{ 'Enter your email' | translate }}</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group password\" ng-class=\"{ 'has-error' : (loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid)}\">\n" +
    "                  		<input type=\"password\" class=\"form-control\" placeholder=\"Contraseña\" name=\"password\" ng-model=\"model.password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid) && (loginForm.password.$error.required)\">{{'Enter Password'| translate }}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid) && (loginForm.password.$error.minlength)\">{{'Minimum length is 6'| translate}}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid) && (loginForm.password.$error.maxlength)\">{{'Maximum length is 40'| translate }}</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                    	<div class=\"checkbox\">\n" +
    "                        	<label>\n" +
    "                                <input type=\"checkbox\" class=\"hide\" />{{\"keep me signed in\" | translate }}\n" +
    "                                <span></span>\n" +
    "                        	</label>\n" +
    "                        </div>\n" +
    "                    	<button class=\"btn btn-green btn-block\" type=\"submit\">{{'Log In'|translate}}</button>\n" +
    "                    </div>\n" +
    "                    <p class=\"forgot-password text-center\"><a href=\"#/users/forgot_password\" class=\"text-muted\">{{\"Forget your Password?\" | translate }}</a></p>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"choose-register col-md-6 col-xs-12\">\n" +
    "            	<div class=\"row\">\n" +
    "                    <div class=\"patient-block col-sm-12\">\n" +
    "                        <div class=\"choose-vendor media\">\n" +
    "                        	<div class=\"button\">\n" +
    "                                <div class=\"media-body\">\n" +
    "                                    <h4>{{\"New in Latinomedica\" | translate }}</h4>\n" +
    "                                    <a href=\"#/users/register/patient{{widgetLink}}\" class=\"btn btn-animate\" >{{'Create an Account '|translate}}</a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "               	</div>\n" +
    "            </div>\n" +
    "      	</div>\n" +
    "    </div>     \n" +
    "</div>");
}]);

angular.module("User/medical_team.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/medical_team.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <div class=\"medical-team\">\n" +
    "            	<div class=\"row\">\n" +
    "                	<div class=\"col-md-8 col-sm-8\">\n" +
    "                    	<div class=\"medical-left\">\n" +
    "                    		<div class=\"clearfix\">\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <h3>{{\"Hi\" | translate }} {{$root.auth.username}}</h3>\n" +
    "                                    <p>{{\"Click below to find a doctor and to make an appointemnt instaltly .Its completely free!\" | translate }}</p>\n" +
    "                                    <a href=\"#/search\" class=\"btn btn-animate btn-green\">{{\"Find Doctors\" | translate }}</a>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        	<ul class=\"list-inline clearfix\">\n" +
    "                                <li class=\"col-md-6\" ng-repeat=\"team in model.medicalTeam\">\n" +
    "									<div>\n" +
    "                                        <div class=\"clearfix\">\n" +
    "                                            <h4 class=\"pull-left\">{{\"Appointment with a\" | translate }} {{team.specialty.name}}</h4>\n" +
    "                                            <a class=\"pull-right\" href=\"javascript:void(0)\" ng-click=\"deletedoctortlist(team.id)\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></a>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"media\">\n" +
    "                                            <div class=\"media-left\">\n" +
    "                                                <img src=\"assets/img/specialist-logo.png\" alt=\"logo\" />\n" +
    "                                            </div>\n" +
    "                                            <div class=\"media-body\">\n" +
    "                                                <p>{{\"Need a doctor? Make an appointment now and add a doctor to your medical team\" | translate }}</p>\n" +
    "                                                <a class=\"pull-right btn btn-animate btn-green\" href=\"#/search?is_online_booking=true&city_id={{team.city.id}}&specialty_id={{team.specialty.id}}\">{{\"Search\" | translate }}</a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                                <li class=\"col-md-6 last-child\">\n" +
    "                                	<div>\n" +
    "                                        <a href=\"javascript:void(0)\" ng-click=\"showDoctorList()\">\n" +
    "                                            <span class=\"fa-stack fa-lg\">\n" +
    "                                                <i class=\"fa fa-circle-o fa-stack-2x\"></i>\n" +
    "                                                <i class=\"fa fa-plus fa-stack-1x fa-inverse\"></i>\n" +
    "                                            </span>\n" +
    "                                        </a>\n" +
    "										<p><a href=\"javascript:void(0)\" ng-click=\"showDoctorList()\">{{\"Find a Doctor\" | translate }}</a></p>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4 col-sm-4\">\n" +
    "                    	<div class=\"medical-right hide\">\n" +
    "                        	<div class=\"clearfix\">\n" +
    "                                <p class=\"pull-left\"><a href=\"javascript:void(0)\">{{\"Already have one? Sign In\" | translate }} </a></p>\n" +
    "                                <a href=\"javascript:void(0)\" class=\"pull-right\"><img src=\"assets/img/questions.png\" alt=\"questions\" /></a>\n" +
    "                            </div>\n" +
    "                            <h5>{{\"Recommendations for you\" | translate }}</h5>\n" +
    "                            <p>1 de 5</p>\n" +
    "                            <span>{{\"Completed\" | translate }} </span>\n" +
    "                            <div class=\"progress\">\n" +
    "                                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%;\">\n" +
    "                                    <span class=\"sr-only\">{{\"20% Complete\" | translate }}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div>\n" +
    "                                <uib-accordion close-others=\"oneAtATime\">\n" +
    "                                    <div uib-accordion-group class=\"panel-default\" heading=\"Eyesight test\" is-open=\"status.isFirstOpen\" is-disabled=\"status.isFirstDisabled\">\n" +
    "                                        {{\"Eyesight test\" | translate }}\n" +
    "                                    </div>\n" +
    "                                    <div uib-accordion-group class=\"panel-default\" heading=\"Skin test\" is-open=\"status.isFirstOpen\" is-disabled=\"status.isFirstDisabled\">\n" +
    "                                       {{\"Skin test\" | translate }}\n" +
    "                                    </div>\n" +
    "                                    <div uib-accordion-group class=\"panel-default\" heading=\"Anual checkup\" is-open=\"status.isFirstOpen\" is-disabled=\"status.isFirstDisabled\">\n" +
    "                                        {{\"Anual checkup\" | translate }}\n" +
    "                                    </div>\n" +
    "                                    <div uib-accordion-group class=\"panel-default\" heading=\"Dental cleaning\" is-open=\"status.isFirstOpen\" is-disabled=\"status.isFirstDisabled\">\n" +
    "                                        {{\"Dental cleaning\" | translate }}\n" +
    "                                    </div>\n" +
    "                                    <div uib-accordion-group class=\"panel-default\" heading=\"Medical record\" is-open=\"status.isFirstOpen\" is-disabled=\"status.isFirstDisabled\">\n" +
    "                                       {{\"Medical record\" | translate }}\n" +
    "                                    </div>\n" +
    "                                </uib-accordion>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <h4>\n" +
    "                        	<img src=\"assets/img/event-icon.png\" alt=\"event-icon\" />\n" +
    "                            <span>{{\"No upcoming appointments\" | translate }}</span>\n" +
    "                        </h4>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "				<h3>{{\"Answer to your messages\" | translate }}</h3>\n" +
    "                <div class=\"medical-answer\" ng-repeat=\"questionR in questions\">\n" +
    "                	<div class=\"row\">\n" +
    "                    	<div class=\"col-md-8 col-sm-8\">\n" +
    "                        	<p><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{questionR.question}}</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-4 col-sm-4\">\n" +
    "                        	<span class=\"date\">{{questionR.created_at | dateFormat}}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "					<div class=\"answers\" ng-if=\"questionR.answer.data != ''\">\n" +
    "                        <div class=\"clearfix\" ng-repeat=\"answer in questionR.answer.data\">\n" +
    "                            <div class=\"col-md-6 col-sm-5\">\n" +
    "                                <h5><i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{answer.user.username}}</h5>\n" +
    "                                <p><i class=\"fa fa-comments\" aria-hidden=\"true\"></i>{{answer.answer}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-3 col-sm-4\">\n" +
    "                                <p></p>\n" +
    "                                <span class=\"date\">{{answer.created_at | dateFormat}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-3 col-sm-3\">\n" +
    "                                <p>{{\"Rate the best answer\" | translate }}</p>\n" +
    "								<div ng-repeat=\"star in stars\" ng-if=\"answer.ratings != 0 \">\n" +
    "                                    <div star-rating rating-value=\"answer.ratings\" max=\"star.max\" ng-click=\"model.ratingDone()\"></div>\n" +
    "								</div>\n" +
    "								<div ng-repeat=\"star in stars\" ng-if=\"answer.ratings == 0 \">\n" +
    "									 <div star-rating rating-value=\"1\" max=\"star.max\" on-rating-selected=\"model.ratingChange(answer.id, rating)\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "		    </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/my_calender.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/my_calender.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <!--<section class=\"pad-63\" ng-controller=\"CalenderController as model\">\n" +
    "                <div>\n" +
    "                    <div class=\"page-head\">\n" +
    "                        <h1>{{\"My Calendar\"|translate}}</h1>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-12 calendar-block\">\n" +
    "                        <div class=\"calendar-header text-center\">\n" +
    "                            <h2 class=\"text-center\">{{ model.calendarTitle }}</h2>\n" +
    "                            <div class=\"pull-left\">\n" +
    "                                <div class=\"btn-group\">\n" +
    "                                    <button class=\"btn btn-lgreen\" mwl-date-modifier date=\"model.viewDate\" decrement=\"model.calendarView\" ng-click=\"prev()\">\n" +
    "                            Previous\n" +
    "                        </button>\n" +
    "                                    <button class=\"btn btn-default\" mwl-date-modifier date=\"model.viewDate\" set-to-today ng-click=\"today()\">\n" +
    "                            Today\n" +
    "                        </button>\n" +
    "                                    <button class=\"btn btn-lgreen\" mwl-date-modifier date=\"model.viewDate\" increment=\"model.calendarView\" ng-click=\"next()\">\n" +
    "                            Next\n" +
    "                        </button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"pull-right\">\n" +
    "                                <div class=\"btn-group\">\n" +
    "                                    <label class=\"btn btn-lgreen\" ng-model=\"model.calendarView\" uib-btn-radio=\"'year'\">Year</label>\n" +
    "                                    <label class=\"btn btn-lgreen\" ng-model=\"model.calendarView\" uib-btn-radio=\"'month'\">Month</label>\n" +
    "                                    <label class=\"btn btn-lgreen\" ng-model=\"model.calendarView\" uib-btn-radio=\"'week'\">Week</label>\n" +
    "                                    <label class=\"btn btn-lgreen\" ng-model=\"model.calendarView\" uib-btn-radio=\"'day'\">Day</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"calendar-body\">\n" +
    "                            <mwl-calendar events=\"model.events\" view=\"model.calendarView\" view-title=\"model.calendarTitle\" view-date=\"model.viewDate\"\n" +
    "                                on-event-click=\"model.eventClicked(calendarEvent)\" on-event-times-changed=\"model.eventTimesChanged(calendarEvent); calendarEvent.startsAt = calendarNewEventStart; calendarEvent.endsAt = calendarNewEventEnd\"\n" +
    "                                edit-event-html=\"'<i class=\\'glyphicon glyphicon-pencil\\'></i>'\" delete-event-html=\"'<i class=\\'glyphicon glyphicon-remove\\'></i>'\"\n" +
    "                                on-edit-event-click=\"model.eventEdited(calendarEvent)\" on-delete-event-click=\"model.eventDeleted(calendarEvent)\"\n" +
    "                                cell-is-open=\"model.isCellOpen\" day-view-start=\"00:00\" day-view-end=\"23:00\" day-view-split=\"30\"\n" +
    "                                cell-modifier=\"model.modifyCell(calendarCell)\">\n" +
    "                                </mwl-calendar>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </section>-->\n" +
    "            <div class=\"calendar-block\">\n" +
    "                <div class=\"calendar\">\n" +
    "                    <div uib-datepicker ng-model=\"dt\" datepicker-options=\"options\"></div>\n" +
    "                </div>\n" +
    "                <p class=\"text-left\"><img src=\"assets/img/calendar.png\" alt=\"calendar\" />{{'Todays Appoinments'| translate}}</p>\n" +
    "                <div ng-repeat=\"calendarData in calendarDatas\" ng-if=\"dataLength\">\n" +
    "                    <div class=\"today-appointment\" ng-class=\"(workplaceChange != calendarData.workplace.id) ? 'mt20':''\">\n" +
    "                        <div ng-init=\"workplaceChange=calendarData.workplace.id\">\n" +
    "                            <div class=\"clearfix\">\n" +
    "                                <div class=\"col-sm-5 clearfix\">\n" +
    "                                    <p class=\"pull-left\">\n" +
    "                                        <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n" +
    "                                        {{calendarData.user.username}}\n" +
    "                                    </p>\n" +
    "                                    <div ng-if=\"calendarData.user.overall_avg_rating\" class=\"pull-right rating\">\n" +
    "                                        <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" ng-model=\"calendarData.user.overall_avg_rating\" readonly=\"true\"\n" +
    "                            ></input-stars>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-2\">\n" +
    "                                    <p>{{calendarData.appointment_time}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-2\">\n" +
    "                                    <p>{{calendarData.appointment_date}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-2\">\n" +
    "                                    <p>{{'Clinic'| translate}} {{calendarData.workplace.location}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-1\">\n" +
    "                                    <div class=\"pos-rel\">\n" +
    "                                        <a href=\"javascript:void(0)\" ng-click=\"showAction($index)\"><i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i></a>\n" +
    "                                        <ul class=\"list-unstyled js-action-remove\" id=\"tgle-{{$index}}\">\n" +
    "                                            <li><a href=\"#/appointment/{{calendarData.id}}\">{{'Edit Appointment'| translate}}</a></li>\n" +
    "                                            <li><a href=\"javascript:void(0)\"  ng-click=\"showNoteModal(calendarData.id)\">{{'Note'| translate}}</a></li>\n" +
    "                                            <li><a href=\"javascript:void(0)\" ng-click=\"deleteStatus('cancel')\">{{'Delete'| translate}}</a></li>\n" +
    "                                        </ul>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-if=\"!dataLength\">\n" +
    "                   <p class=\"hor-space alert alert-danger text-center\">{{'No Appoinments Todays'| translate}}</p>\n" +
    "                </div>\n" +
    "                <p class=\"text-center\" ng-if=\"dataLength\">\n" +
    "                    <a href=\"javascript:void(0)\" ng-click=\"cancelTodayAppointment(calendarDatas[0].appointment_date)\" class=\"btn btn-animate btn-green\">{{'Cancel Todays Appointments'| translate}}</a>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/my_insurances.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/my_insurances.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 edit-left\">\n" +
    "                    <display-template name=\"User/sidemenu.tpl.html\"></display-template>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <section class=\"clearfix checklist-content setting-page\">\n" +
    "                        <div class=\"page-head\">    \n" +
    "                            <h1>{{'Insurances'| translate}}</h1>\n" +
    "                        </div>\n" +
    "                        <div class=\"remove-width\">\n" +
    "                            <div class=\"form-content\">\n" +
    "                                <form name=\"insuranceUpdate\" name=\"patientinsurance_add\" method=\"post\" ng-submit=\"model.myInsurance()\" novalidate ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                                    <!--<div class=\"form-heading\">\n" +
    "                                        <h2><span>{{'Select Your Insurances'| translate}}</span></h2>\n" +
    "                                    </div>-->\n" +
    "                                    <div class=\"form-body clearfix\">\n" +
    "                                        <!--<div class=\"form-group col-md-4\" ng-repeat=\"insurance in insurances\">\n" +
    "                                            <label class=\"checkbox-field\">\n" +
    "                                                <input class=\"hide\" type=\"checkbox\" checklist-model=\"user.insurance_ids\" checklist-value=\"insurance.id\" ng-change=\"check(insurance.id, checked)\" id=\"{{insurance.name}}\">\n" +
    "                                                <span class=\"custom-check check-green\"></span>\n" +
    "                                                <span><label for=\"{{insurance.name}}\">{{insurance.name}}</label></span>\n" +
    "                                            </label>\n" +
    "                                        </div>-->\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <div class=\"clearfix\">\n" +
    "                                                <div class=\"col-md-6\">\n" +
    "                                                    <div class=\"form-group clearfix\">\n" +
    "                                                        <label>{{'Medical insurance'| translate}}</label>\n" +
    "                                                        <div class=\"input-group select-opt\">\n" +
    "                                                            <select class=\"form-control\" name=\"preferred_lang\" id=\"preferred_lang\" ng-model=\"model.insurance.medical_insurance_id\" ng-options=\"c.id as c.name for c in insurances\">\n" +
    "                                                                <option value=\"\">{{\"Choose a medical insurance\" | translate }}</option>\n" +
    "                                                            </select>\n" +
    "                                                           </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"clearfix\">\n" +
    "                                                <div class=\"col-md-6\">\n" +
    "                                                    <div class=\"form-group clearfix\">\n" +
    "                                                        <label>{{'Dental insurance'| translate}}</label>\n" +
    "                                                        <div class=\"input-group select-opt\">\n" +
    "                                                            <select class=\"form-control\" name=\"preferred_lang\" id=\"preferred_lang\" ng-model=\"model.insurance.dental_insurance_id\" ng-options=\"c.id as c.name for c in insurances\">\n" +
    "                                                                <option value=\"\">{{\"Choose a dental plan\" | translate }}</option>\n" +
    "                                                            </select>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"clearfix\">\n" +
    "                                                <div class=\"col-md-6\">\n" +
    "                                                    <div class=\"form-group clearfix\">\n" +
    "                                                        <label>{{'Eyesight insurance'| translate}}</label>\n" +
    "                                                        <div class=\"input-group select-opt\">\n" +
    "                                                            <select class=\"form-control\" name=\"preferred_lang\" id=\"preferred_lang\" ng-model=\"model.insurance.eye_insurance_id\" ng-options=\"c.id as c.name for c in insurances\">\n" +
    "                                                                <option value=\"\">{{\"Choose a eyesight plan\" | translate }}</option>\n" +
    "                                                            </select>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-footer appmt-btn\">\n" +
    "                                        <button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Save'| translate }}</button>\n" +
    "                                    </div>\n" +
    "                                </form>\n" +
    "                                <div ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                                	<form name=\"doctorinsurance_add\" method=\"post\" ng-submit=\"model.DoctorInsurance(doctorinsurance_add.$valid)\" novalidate>\n" +
    "                                    <div class=\"form-body clearfix\" >\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <div class=\"col-md-8\">\n" +
    "                                                <div class=\"form-group\">\n" +
    "                                                    <label>{{'Accepted medical Insurance'| translate}}</label>\n" +
    "                                                     <div class=\"form-group select-opt\" ng-class=\"{ 'has-error' : (doctorinsurance_add.$submitted || doctorinsurance_add.insurance_id.$touched) && (doctorinsurance_add.insurance_id.$pristine || doctorinsurance_add.insurance_id.$invalid) && (doctorinsurance_add.insurance_id.$error.required)}\">\n" +
    "                                                    <select class=\"form-control\" name=\"insurance_id\" id=\"insurance_id\" ng-model=\"model.insurancecount.insurance_id\" ng-options=\"c.id as c.name for c in insurances\" ng-required=\"true\">\n" +
    "                                                                <option value=\"\">{{\"Choose a medical insurance\" | translate }}</option>\n" +
    "                                                            </select>\n" +
    "                                                          <span class=\"error\" ng-show=\"(doctorinsurance_add.$submitted || doctorinsurance_add.insurance_id.$touched) && (doctorinsurance_add.insurance_id.$pristine || doctorinsurance_add.insurance_id.$invalid) && (doctorinsurance_add.insurance_id.$error.required)\">{{\"Select medical insurance\" | translate }}</span>\n" +
    "                                                   </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-md-4\">\n" +
    "                                            	<div class=\"form-group\">\n" +
    "                                                    <label>{{'Patients per day'| translate}}</label>\n" +
    "                                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (doctorinsurance_add.$submitted || doctorinsurance_add.allowed_patients.$touched) && (doctorinsurance_add.allowed_patients.$pristine || doctorinsurance_add.allowed_patients.$invalid) && (doctorinsurance_add.allowed_patients.$error.required)}\">\n" +
    "                                                    <input type=\"text\" class=\"form-control\" name=\"allowed_patients\" id=\"allowed_patients\" ng-model=\"model.insurancecount.allowed_patients\" ng-required=\"true\">\n" +
    "                                                        <span class=\"error\" ng-show=\"(doctorinsurance_add.$submitted || doctorinsurance_add.allowed_patients.$touched) && (doctorinsurance_add.allowed_patients.$pristine || doctorinsurance_add.allowed_patients.$invalid) && (doctorinsurance_add.allowed_patients.$error.required)\">{{\"Enter patient count\" | translate }} </span>\n" +
    "                                                    \n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-footer appmt-btn\">\n" +
    "                                        <button class=\"btn btn-green btn-animate\" type=\"submit\">{{\"Save\" | translate }}</button>\n" +
    "                                    </div>\n" +
    "                                </form>\n" +
    "                                    \n" +
    "                                    <div class=\"clearfix insurance-revoke\">\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <div class=\"col-md-12\">\n" +
    "                                                <div class=\"form-group clearfix\">\n" +
    "                                                    <label>{{\"Insurance Lists\" | translate }}</label>\n" +
    "                                                    <div class=\"clearfix\" ng-repeat=\"insuranceList in model.insuranceLists.data\" ng-show=\"model.dataLength\">\n" +
    "                                                        <p class=\"pull-left\">{{insuranceList.insurance.name}}{{\" | \"}}{{insuranceList.allowed_patients}}</p>\n" +
    "                                                        <a class=\"pull-right\" href=\"javascript:void(0)\" ng-click=\"model.removeInsurance(insuranceList.id)\" >{{\"Revoke\" | translate }}</a>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"clearfix\" ng-show=\"!model.dataLength\">\n" +
    "                                         <p class=\"hor-space alert alert-danger\">{{'No Record Found'|translate}}</p>\n" +
    "                                    </div>\n" +
    "                                     <div class=\"paging clearfix text-center\" ng-show=\"model.dataLength\">\n" +
    "                                        <uib-pagination total-items=\"model._metadata.total\" num-pages=\"model._metadata.total_pages\" ng-model=\"model.currentPage\" max-size=\"model.maxSize\" boundary-links=\"true\" boundary-link-numbers=\"true\" rotate=\"false\" items-per-page=\"model._metadata.per_page\" previous-text=\"&#xf104;\" next-text=\"&#xf105;\" ng-change=\"model.paginate()\"></uib-pagination>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </section>\n" +
    "<!--<div oc-lazy-load='loadSeo'>\n" +
    "    <user-profile-seo></user-profile-seo>\n" +
    "</div> -->\n" +
    "				</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/my_languages.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/my_languages.tpl.html",
    "<section class=\"clearfix pad-63 checklist-content\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'My Languages'| translate}}</h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container remove-width\">\n" +
    "        <div class=\"form-content\">\n" +
    "        	<form name=\"languageUpdate\" ng-submit=\"model.myLanguage(languageUpdate)\" novalidate>\n" +
    "                <div class=\"form-heading\">\n" +
    "                    <h2><span>{{'Select Your Languages'| translate}}</span></h2>\n" +
    "                </div>\n" +
    "                <div class=\"form-body clearfix\">\n" +
    "                	<div class=\"form-group col-md-4\" ng-repeat=\"language in languages\">\n" +
    "                        <label class=\"checkbox-field\">\n" +
    "                            <input class=\"hide\" type=\"checkbox\" checklist-model=\"user.language_ids\" checklist-value=\"language.id\" ng-change=\"check(language.id, checked)\" id=\"{{language.name}}\">\n" +
    "                            <span class=\"custom-check check-green\"></span>\n" +
    "                            <span><label for=\"{{language.name}}\">{{language.name}}</label></span>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-footer\">\n" +
    "                	<div class=\"row\">\n" +
    "                    	<div class=\"text-center\">\n" +
    "                			<button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Update'| translate }}</button>\n" +
    "                		</div>\n" +
    "                  	</div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("User/my_specialties.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/my_specialties.tpl.html",
    "<section class=\"clearfix pad-63 checklist-content\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'My Specialties'| translate}}</h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container remove-width\">\n" +
    "        <div class=\"form-content\">\n" +
    "            <form name=\"specialityUpdate\" ng-submit=\"model.mySpeciality(specialityUpdate)\" novalidate>\n" +
    "                <div class=\"form-heading\">\n" +
    "                    <h2>{{'Select Your Specialties'| translate}}</h2>\n" +
    "                </div>\n" +
    "                <div class=\"form-body clearfix\">\n" +
    "                    <div class=\"form-group col-md-4\" ng-repeat=\"specialty in specialties\">\n" +
    "                        <label class=\"checkbox-field\">\n" +
    "                            <input class=\"hide\" type=\"checkbox\" checklist-model=\"user.specialty_ids\" checklist-value=\"specialty.id\" ng-change=\"check(specialty.id, checked)\"id=\"{{specialty.name}}\">\n" +
    "                            <span class=\"custom-check check-green\"></span>\n" +
    "                            <span><label for=\"{{specialty.name}}\">{{specialty.name}}</label></span>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-footer\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"text-center\">\n" +
    "                            <button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Update'| translate }}</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<div oc-lazy-load='loadSeo'>\n" +
    "    <user-profile-seo></user-profile-seo>\n" +
    "</div>");
}]);

angular.module("User/navmenu.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/navmenu.tpl.html",
    "<ul class=\"nav nav-tabs list-inline\" role=\"tablist\">\n" +
    "	<li role=\"presentation\" ng-repeat=\"tabsMenu in tabsMenus\">\n" +
    "		<a ng-click=\"switchMenu(tabsMenu.state)\" aria-controls=\"equipo\" role=\"tab\" data-toggle=\"tab\"><span class=\"{{tabsMenu.header_class | translate}}\"></span>{{tabsMenu.header_text | translate}}</a>\n" +
    "	</li>\n" +
    "</ul>");
}]);

angular.module("User/notifications.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/notifications.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 edit-left\">\n" +
    "                    <display-template name=\"User/sidemenu.tpl.html\"></display-template>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <section class=\"clearfix notifications setting-page\">\n" +
    "                        <div class=\"page-head\">\n" +
    "                            <h1>{{\"Notifications\" | translate }}</h1>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-content\">\n" +
    "                            <form name=\"notification\" ng-submit=\"model.notification()\">\n" +
    "                                <div class=\"form-body\">\n" +
    "                                    <div class=\"clearfix\">\n" +
    "                                        <div class=\"col-md-12\">\n" +
    "                                            <div class=\"form-group checkbox-field\">\n" +
    "                                                <label for=\"name\">{{\"E-mails\" | translate }}</label>\n" +
    "                                                <div class=\"checkbox\">\n" +
    "                                                    <label>\n" +
    "                                                        <input type=\"checkbox\" class=\"hide\" ng-model=\"model.formValue.is_remind_email_wellness\" ng-checked=\"(model.formValue.is_remind_email_wellness == '1') ? true : false\" ng-true-value=\"1\" ng-false-value=\"0\"> {{\"Wellness reminders\" | translate }}\n" +
    "                                                        <span></span>\n" +
    "                                                    </label>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"clearfix\">\n" +
    "                                        <div class=\"col-md-12\">\n" +
    "                                            <div class=\"form-group checkbox-field\">\n" +
    "                                                <label>{{\"Application Settings\" | translate }}</label>\n" +
    "                                                <p>{{\"Download the latinomedica\" | translate }}<a href=\"javascript:void(0)\">{{\"Android app\" | translate }}</a>{{\"\n" +
    "                                                    or the\" | translate }} <a href=\"javascript:void(0)\">{{\"Iphone app\" | translate }}</a>.</p>\n" +
    "                                                <div class=\"checkbox\">\n" +
    "                                                    <label>\n" +
    "                                                        <input type=\"checkbox\" class=\"hide\" ng-model=\"model.formValue.is_remind_app_appointments\" ng-checked=\"(model.formValue.is_remind_app_appointments == '1') ? true : false\" ng-true-value=\"1\" ng-false-value=\"0\"> {{\"Notify appointment reminders\" | translate }}\n" +
    "                                                        <span></span>\n" +
    "                                                    </label>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"checkbox\">\n" +
    "                                                    <label>\n" +
    "                                                        <input type=\"checkbox\" class=\"hide\" ng-model=\"model.formValue.is_remind_app_appointment_changed\"  ng-checked=\"(model.formValue.is_remind_app_appointment_changed == '1') ? true : false\" ng-true-value=\"1\" ng-false-value=\"0\"> {{\"Notify if your appointment is reprogrammed or cancelled\" | translate }}\n" +
    "                                                        <span></span>\n" +
    "                                                    </label>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"checkbox\">\n" +
    "                                                    <label>\n" +
    "                                                        <input type=\"checkbox\" class=\"hide\" ng-model=\"model.formValue.is_remind_app_wellness\" ng-checked=\"(model.formValue.is_remind_app_wellness == '1') ? true : false\" ng-true-value=\"1\" ng-false-value=\"0\"> {{\"Notify wellness reminders\" | translate }}\n" +
    "                                                        <span></span>\n" +
    "                                                    </label>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-footer appmt-btn\">\n" +
    "                                    <button class=\"btn btn-green btn-animate\" type=\"submit\">{{\"Save\" | translate }}</button>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "                    </section>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/register.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/register.tpl.html",
    "<div class=\"register\">\n" +
    "    <div class=\"container page-space\">\n" +
    "    	<figure class=\"page-logo\">\n" +
    "            <a href=\"#!/\">\n" +
    "                <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive center-block\"/>\n" +
    "            </a>\n" +
    "        </figure>\n" +
    "        <div class=\"user-login form-content col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2\">\n" +
    "            <div class=\"user-signup\">\n" +
    "                <form class=\"form-login\" name=\"signupForm\" ng-submit=\"model.signup(signupForm.$valid)\" novalidate>\n" +
    "                    <div class=\"form-body\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-6 col-md-offset-3 js-crop-col-md-3\">\n" +
    "                                <div class=\"form-group text-center height-210\">\n" +
    "                                    <div class=\"no-mandatory\">\n" +
    "                                        <div class=\"default-img text-center\" for=\"inputFile\">\n" +
    "                                            <img ng-src=\"assets/img/contact-img.png\" for=\"inputFile\" title=\"{{user.username}}\" alt=\"{{user.username}}\">\n" +
    "                                        </div>\n" +
    "                                        <a href=\"javascript:void(0);\" for=\"inputFile\" title=\"{{user.username}}\" class=\"center-block js-crop-image-section\">\n" +
    "                                            <span><img ng-src=\"{{user.attachmentable.thumb.large}}\" title=\"{{user.username}}\" class=\"js-image-crop-tmp-update\" alt=\"{{user.username}}\"></span>\n" +
    "                                        </a>\n" +
    "                                        <input class=\"input-file hide\" type=\"file\" ngf-select ng-model=\"file\" name=\"file\" ngf-pattern=\"'image/*'\" ngf-accept=\"'image/*'\"\n" +
    "                                            ngf-max-size=\"2MB\" id=\"inputFile\" ng-change=\"cropImg(this)\">\n" +
    "                                        <label for=\"inputFile\">\n" +
    "                                            <span class=\"center-block js-cropimg-choose\">{{'Add user photo' | translate }}</span>\n" +
    "                                        </label>\n" +
    "                                        <span class=\"error text-danger help-block\" ng-show=\"signupForm.file.$error.required\">{{'Allowed extensions: jpg, jpeg, gif, png'|translate }}</span>\n" +
    "                                        <div class=\"js-image-crop croppie-container crop-img-sec\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div class=\"form-group form-heading\">\n" +
    "                            <h2 class=\"form-login-heading\">{{'Create a new account' | translate }}</h2>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div ng-if=\"model.user_type == 'doctor'\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"form-name\">{{'Name' | translate }}</label>\n" +
    "                                <div class=\"row joint-field-w\">\n" +
    "                                    <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid)}\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" placeholder=\"{{'Name' | translate }}\" name=\"first_name\" ng-model=\"model.first_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-zA-Z]*$/\">\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.required)\">{{'Please enter your first name'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.pattern)\">{{ 'Enter Valid name without number and space' | translate }}</span>                                     \n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid)}\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" placeholder=\"Apellido\" name=\"last_name\" ng-model=\"model.last_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-zA-Z]*$/\">\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.required)\">{{'Please enter your last name'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.pattern)\">{{ 'Enter valid name without number and space' | translate }}</span>\n" +
    "                                </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"model.user_type == 'patient'\">\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid)}\">\n" +
    "                                <label>{{'Insert your E-mail address' | translate}}</label>\n" +
    "                                <input type=\"email\" class=\"form-control\" placeholder=\"{{'Email' | translate }}\" name=\"email\" ng-model=\"model.email\" ng-required=\"true\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.required)\">{{'Please enter your E-mail id' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.email)\">{{'Enter valid E-mail' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"model.emailErr\">{{model.emailErr}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.confirm_email.$pristine || signupForm.confirm_email.$invalid)}\">\n" +
    "                                <label>{{'Confirm your E-mail address' | translate}}</label>\n" +
    "                                <input type=\"email\" class=\"form-control\" placeholder=\"{{'Confirm Email' | translate }}\" name=\"confirm_email\" ng-model=\"model.confirm_email\" ng-required=\"true\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.confirm_email.$pristine || signupForm.confirm_email.$invalid) && (signupForm.confirm_email.$error.required)\">{{'Please re-enter your E-mail id'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.confirm_email.$pristine || signupForm.confirm_email.$invalid) && (signupForm.confirm_email.$error.email)\">{{'Enter valid E-mail'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.email.$dirty && signupForm.confirm_email.$dirty) && (model.email != model.confirm_email)\">{{'E-mail Mismatch'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"model.confirm_emailErr\">{{model.confirm_emailErr}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid)}\">\n" +
    "                                <label>{{'Create a Password' | translate}}</label>\n" +
    "                                <input type=\"password\" class=\"form-control\" placeholder=\"{{'Password' | translate }}\" name=\"password\" ng-model=\"model.password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"20\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.required)\">{{ 'Enter Password' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.minlength)\">{{ 'Minimum length is 6' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.maxlength)\">{{ 'Maximum length is 20' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"model.passwordErr\">{{model.passwordErr}}</span>\n" +
    "                            </div>\n" +
    "							<div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid)}\">\n" +
    "								<label>{{'Confirm Password' | translate}}</label>\n" +
    "                                <input type=\"password\" class=\"form-control\" placeholder=\"{{'Confirm Password'| translate }}\" name=\"confirmPassword\" ng-model=\"model.confirm_password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"20\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.required)\">{{'Enter Confirm Password'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.minlength)\">{{'Minimum length is 6'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.maxlength)\">{{'Maximum length is 20'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.password.$dirty && signupForm.confirmPassword.$dirty) && (model.password != model.confirm_password)\">{{'Password Mismatch'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"model.confirmPasswordErr\">{{model.confirmPasswordErr}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"form-name\">{{'Your Name' | translate}}</label>\n" +
    "                                <div class=\"row joint-field-w\">\n" +
    "                                    <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid)}\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" placeholder=\"{{'Name' | translate }}\" name=\"first_name\" ng-model=\"model.first_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.required)\">{{'Please enter your first name'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.pattern)\">{{ 'Enter Valid name without number' | translate }}</span>                                         \n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid)}\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" placeholder=\"Apellido\" name=\"last_name\" ng-model=\"model.last_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.required)\">{{'Please enter your last name'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.pattern)\">{{ 'Enter valid name without number' | translate }}</span>\n" +
    "                                    </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                            <div class=\"form-group location-info\">\n" +
    "                                <label class=\"form-name\">{{'Date of birth'| translate}}</label>\n" +
    "                                <div class=\"row joint-field-w\">\n" +
    "                                    <div class=\"col-sm-4\">\n" +
    "                                        <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.required)}\">\n" +
    "                                            <div class=\"input-group\">\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"month\" id=\"month\" placeholder=\"{{'MM'| translate }}\" ng-model=\"model.month\" ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"2\" ng-pattern=\"/^[0-9]*$/\" ng-blur=\"model.mothValid();\" />\n" +
    "                                            </div>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.required)\">{{'Enter Month'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.pattern)\">{{'Enter Valid Month Without Character'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.minlength)\">{{'Minimum Length is 2'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.maxlength)\">{{'Maximum Length is 2'| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-4 mid-child\">\n" +
    "                                        <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.required)}\">\n" +
    "                                            <div class=\"input-group\">\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"date\" id=\"date\" placeholder=\"{{'DD'| translate }}\" ng-model=\"model.date\" ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"2\" ng-pattern=\"/^[0-9]*$/\" ng-blur=\"model.dateValid();\"/>\n" +
    "                                            </div>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.required)\">{{'Enter date'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.pattern)\">{{'Enter Valid date Without Character'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.minlength)\">{{'Minimum Length is 2'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.maxlength)\">{{'Maximum Length is 2'| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-4\">\n" +
    "                                        <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.required)}\">\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"year\" id=\"year\" placeholder=\"{{'YYYY'| translate }}\" ng-model=\"model.year\" ng-required=\"true\" ng-minlength=\"4\" ng-maxlength=\"4\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                            />\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.required)\">{{'Enter year'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.pattern)\">{{'Enter Valid year Without Character'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.minlength)\">{{'Minimum Length is 4'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.maxlength)\">{{'Maximum Length is 4'| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                                \n" +
    "                            <div class=\"row joint-field-w\">\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <div class=\"form-group location-info\">\n" +
    "                                       <label class=\"form-name\">{{'Cellphone'| translate }}</label>\n" +
    "                                        <div class=\"\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.required)}\">\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"phone\" placeholder=\"{{'Cellphone'| translate }}\" ng-model=\"model.phone\"\n" +
    "                                                ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                            />\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.required)\">{{'Enter Mobile Number'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.pattern)\">{{'Enter Valid Mobile Number Without Character'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.minlength)\">{{'Minimum Length is 8'| translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.maxlength)\">{{'Maximum Length is 12'| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <div class=\"form-group select-opt\">\n" +
    "                                        <label class=\"form-name\">Ciudad</label>\n" +
    "                                        <div ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.city_id.$touched) && (signupForm.city_id.$pristine || signupForm.city_id.$invalid) && (signupForm.city_id.$error.required)}\">\n" +
    "                                            <select class=\"form-control\" name=\"city_id\" id=\"city_id\" ng-model=\"model.user_profile.city_id\" ng-options=\"city.id as city.name for city in cityArray\" ng-required=\"true\">  \n" +
    "                                                <option value=\"\">{{'City'| translate }}</option>                    \n" +
    "                                                <!--<option ng-repeat=\"city in cityArray\" value=\"{{city.id}}\" ng-selected=\"model.user_profile.city_id == city.id\">{{city.name}}</option>-->   \n" +
    "                                            </select>\n" +
    "                                            \n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.city_id.$touched) && (signupForm.city_id.$pristine || signupForm.city_id.$invalid) && (signupForm.city_id.$error.required)\">{{'Choose City'| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                                \n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.hobbies.$touched) && (signupForm.hobbies.$pristine || signupForm.hobbies.$invalid)}\">\n" +
    "                                <label class=\"form-name\">{{'Hobbies' | translate }}</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" name=\"hobbies\" placeholder=\"{{'Hobbies'| translate }}\" ng-model=\"model.hobbies\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z A-Z ,]*$/\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.hobbies.$touched) && (signupForm.hobbies.$pristine || signupForm.hobbies.$invalid) && (signupForm.hobbies.$error.required)\">{{'Please enter your hobbies'| translate }} </span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.hobbies.$touched) && (signupForm.hobbies.$pristine || signupForm.hobbies.$invalid) && (signupForm.hobbies.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.hobbies.$touched) && (signupForm.hobbies.$pristine || signupForm.hobbies.$invalid) && (signupForm.hobbies.$error.pattern)\">{{ 'Enter hobbies without number' | translate }}</span>\n" +
    "                            </div>\n" +
    "                            \n" +
    "                            <div class=\"form-group clearfix location-info\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.gender_id.$touched) && (signupForm.gender_id.$pristine || signupForm.gender_id.$invalid)}\">\n" +
    "                                <label class=\"form-name\">{{'Gender'| translate }}</label>\n" +
    "                                <div class=\"gender-field clearfix\">\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <label><input type=\"radio\" name=\"gender_id\" ng-model=\"model.gender_id\" value=\"1\" ng-required=\"true\"> {{'Male' | translate }}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <label><input type=\"radio\" name=\"gender_id\" ng-model=\"model.gender_id\" value=\"2\" ng-required=\"true\"> {{'Female' | translate }}</label>\n" +
    "                                    </div>\n" +
    "									<span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.gender_id.$touched) && (signupForm.gender_id.$pristine || signupForm.gender_id.$invalid) && (signupForm.gender_id.$error.required)\">{{'Please select gender'| translate }} </span>\n" +
    "                                </div>\n" +
    "                                <em class=\"requi\">* Required fields</em>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div ng-if=\"model.user_type == 'doctor'\">\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid)}\">\n" +
    "                                <label>{{'Username' | translate}}</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" name=\"username\" ng-model=\"model.username\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z0-9]*$/\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid) && (signupForm.username.$error.required)\">{{'Please enter your Username'| translate }} </span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid) && (signupForm.username.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid) && (signupForm.username.$error.pattern)\">{{ 'Enter valid username without space and caps' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-if=\"model.nameErr\">{{model.nameErr}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid)}\">\n" +
    "                                <label>{{'Email' | translate}}</label>\n" +
    "                                <input type=\"email\" class=\"form-control\" name=\"email\" ng-model=\"model.email\"  ng-required=\"true\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.required)\">{{'Please enter your mail id'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.email)\">{{'Enter valid email'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"model.emailErr\">{{model.emailErr}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid)}\">\n" +
    "                                <label>{{'Password' | translate}}</label>\n" +
    "                                <div class=\"row joint-field-w\">\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <input type=\"password\" class=\"form-control\" placeholder=\"Create a Password\" name=\"password\" ng-model=\"model.password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.required)\">{{ 'Please enter password' | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.minlength)\">{{ 'Minimum length is 6' | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.maxlength)\">{{ 'Maximum length is 20' | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"model.passwordErr\">{{model.passwordErr}}</span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid)}\">\n" +
    "                                        <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"confirmPassword\" ng-model=\"model.confirm_password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.required)\">{{'Please enter confirm password'| translate}}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.minlength)\">{{'Minimum length is 6'| translate}}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.maxlength)\">{{'Maximum length is 20'| translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.password.$dirty && signupForm.confirmPassword.$dirty) && (model.password != model.confirm_password)\">{{'Password Mismatch'| translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"model.confirmPasswordErr\">{{model.confirmPasswordErr}}</span>\n" +
    "                                </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid)}\">\n" +
    "                                <label>Telefono</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\" ng-model=\"model.phone\" ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\">\n" +
    "                                 <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.required)\">{{'Enter Phone Number'| translate }} </span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.maxlength)\">{{ 'Maximum length is 12' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.minlength)\">{{ 'Minimum length is 8' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.pattern)\">{{'Enter Valid Mobile Number Without Character'| translate }} </span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid)}\">\n" +
    "                                <label>Codigo Postal</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" placeholder=\"Codigo Postal\" name=\"postal_code\" ng-model=\"model.postal_code\"  ng-required=\"true\" ng-minlength=\"3\" ng-maxlength=\"6\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid) && (signupForm.postal_code.$error.required)\">{{'Enter Postal Code'| translate }} </span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid) && (signupForm.postal_code.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid) && (signupForm.postal_code.$error.maxlength)\">{{ 'Maximum length is 6' | translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group select-opt\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.specialty_id.$touched) && (signupForm.specialty_id.$pristine || signupForm.specialty_id.$invalid)}\">\n" +
    "                                <label>{{'Specialty' | translate}}</label>\n" +
    "                                <select ng-model=\"model.specialty_id\" ng-required=\"true\" name=\"specialty_id\" class=\"form-control\">\n" +
    "                                    <option value=\"\">Please enter specialty</option>\n" +
    "                                    <option ng-repeat=\"specialtyliList in specialtyliLists\" value=\"{{specialtyliList.id}}\">{{specialtyliList.name}}</option>\n" +
    "                                </select>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.specialty_id.$touched) && (signupForm.specialty_id.$pristine || signupForm.specialty_id.$invalid) && (signupForm.specialty_id.$error.required)\">{{'Please select specialty'| translate }} </span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group select-opt\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.language_id.$touched) && (signupForm.language_id.$pristine || signupForm.language_id.$invalid)}\">\n" +
    "                                <label>{{'Language' | translate}}</label>\n" +
    "                                <select ng-model=\"model.language_id\" ng-required=\"true\" name=\"language_id\" class=\"form-control\">\n" +
    "                                    <option value=\"\">Please enter language</option>\n" +
    "                                    <option ng-repeat=\"languageList in languageLists\" value=\"{{languageList.id}}\">{{languageList.name}}</option>\n" +
    "                                </select>\n" +
    "                                <em class=\"requi\">* Required fields</em>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.language_id.$touched) && (signupForm.language_id.$pristine || signupForm.language_id.$invalid) && (signupForm.language_id.$error.required)\">{{'Please select language'| translate }} </span> \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                       <!-- <div class=\"form-group\">\n" +
    "                            <div class=\"g-recaptcha\" vc-recaptcha key=\"model.captcha_site_key\" ng-class=\"{ 'has-error' : model.captchaErr}\"></div>\n" +
    "                            <span class=\"error\" ng-show=\"model.captchaErr\">{{model.captchaErr}}</span>\n" +
    "                        </div> -->\n" +
    "    \n" +
    "                        <div class=\"form-group checkbox-field\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.termCondition.$touched) && (signupForm.termCondition.$pristine || signupForm.termCondition.$invalid)}\">\n" +
    "                            <div class=\"checkbox col-sm-12 first-box\">\n" +
    "                                <label>\n" +
    "                                    <input id=\"terms_cond\" class=\"hide\" type=\"checkbox\" name=\"termCondition\" ng-model=\"model.terms_conditions\" ng-required=\"true\">\n" +
    "                                    {{'Please read and agree to'| translate }} <a href=\"#/page/about-us\"><em>{{'The terms of Use and privace policy' | translate }}</em></a>\n" +
    "                                    <span></span>\n" +
    "                                </label>\n" +
    "						    </div>\n" +
    "                           <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.termCondition.$touched) && (signupForm.termCondition.$pristine || signupForm.termCondition.$invalid) && (signupForm.termCondition.$error.required)\">{{'Required'| translate }}</span>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div class=\"form-group checkbox-field\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.contract.$touched) && (signupForm.contract.$pristine || signupForm.contract.$invalid)}\">\n" +
    "                            <div class=\"checkbox col-sm-12 first-box\">\n" +
    "                                <label>\n" +
    "                                    <input id=\"terms_cond\" class=\"hide\" type=\"checkbox\" name=\"contract\" ng-model=\"model.contract\" ng-required=\"true\">\n" +
    "                                    {{'I have read and agree to'| translate }} <a href=\"#/page/about-us\"><em>{{settings['site.name'] | translate }}</em></a>\n" +
    "                                    <span></span>\n" +
    "                                </label>\n" +
    "								\n" +
    "                            </div>\n" +
    "                           <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.contract.$touched) && (signupForm.contract.$pristine || signupForm.contract.$invalid) && (signupForm.contract.$error.required)\">{{'Required'| translate }}</span> \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-footer clearfix\">\n" +
    "                        <input type=\"hidden\" name=\"user_type\"  ng-value=\"model.user_type\"/>\n" +
    "                        <div ng-if=\"widgetLink == ''\">\n" +
    "                            <button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Save and continue' | translate }}</button>\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"widgetLink !== ''\" class=\"col-sm-12\">\n" +
    "                            <div class=\"text-center\">\n" +
    "                                <button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Save and continue' | translate }}</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/settings.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/settings.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\" ng-controller=\"UserSettingsController as model\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <div class=\"row\" >\n" +
    "                <div class=\"col-sm-3 edit-left\">\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                        <li class=\"active\" ng-click=\"getTemplate('User/user_profile.tpl.html')\">Profile</li>\n" +
    "                        <li ng-click=\"getTemplate('User/change_password.tpl.html')\">{{'Password' | translate}}</li>\n" +
    "                        <li>\n" +
    "                            <a ui-sref=\"Notifications()\">{{'Notifications' | translate}}</a>\n" +
    "                        </li>\n" +
    "                        <li ng-click=\"getTemplate('User/family_friends.tpl.html')\">\n" +
    "                            <a ui-sref=\"FamilyFriends()\">{{'Family or Friends' | translate}}</a>\n" +
    "                        </li>\n" +
    "                        <li ng-click=\"getTemplate('User/my_insurances.tpl.html')\">{{'Insurance' | translate}}</li>\n" +
    "                        <li ng-click=\"getTemplate('User/demographic.tpl.html')\">{{'Demographic Information' | translate}}</li>\n" +
    "                        <li ng-click=\"getTemplate('User/authorization.tpl.html')\">{{'Authorization' | translate}}</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <display-template name=\"{{displayTemplate}}\"></display-template>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/sidemenu.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/sidemenu.tpl.html",
    "<ul class=\"list-unstyled\">\n" +
    "    <li ng-class=\"(currentState == 'UserProfile') ? 'active' : ''\">\n" +
    "        <a ui-sref=\"UserProfile()\">{{'Profile' | translate}}</a>\n" +
    "    </li>\n" +
    "	<li ng-class=\"(currentState == 'ChangePassword') ? 'active' : ''\">\n" +
    "		<a ui-sref=\"ChangePassword()\">{{'Password' | translate}}</a>\n" +
    "	</li>\n" +
    "    <li ng-class=\"(currentState == 'Notifications') ? 'active' : ''\">\n" +
    "        <a ui-sref=\"Notifications()\">{{'Notifications' | translate}}</a>\n" +
    "    </li>\n" +
    "	<li ng-if=\"$root.auth.role_id == ConstUserType.User\" ng-class=\"(currentState == 'FamilyFriends') ? 'active' : ''\">\n" +
    "        <a ui-sref=\"FamilyFriends()\">{{'Family or Friends' | translate}}</a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"(currentState == 'MyInsurances') ? 'active' : ''\" >\n" +
    "		<a ui-sref=\"MyInsurances()\">{{'Insurance' | translate}}</a>\n" +
    "	</li>\n" +
    "    <li ng-class=\"(currentState == 'DemographicInformation') ? 'active' : ''\" >\n" +
    "		<a ui-sref=\"DemographicInformation()\">{{\"Demographic Information\" | translate }}</a>\n" +
    "	</li>\n" +
    "    <li ng-class=\"(currentState == 'Authorization') ? 'active' : ''\" ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "		<a ui-sref=\"Authorization()\">{{'Authorization' | translate }}</a>\n" +
    "	</li>\n" +
    "</ul>");
}]);

angular.module("User/updateDiseaseForm.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/updateDiseaseForm.tpl.html",
    "<section>\n" +
    "    <div class=\"container\">\n" +
    "    	<div class=\"form-content\">\n" +
    "            <h2><span>{{'Specialty Diseases' | translate}}</span></h2>\n" +
    "      	</div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("User/user_profile.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/user_profile.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3 edit-left\">\n" +
    "                    <display-template name=\"User/sidemenu.tpl.html\"></display-template>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <section class=\"edit-profile clearfix setting-page\">\n" +
    "                        <div class=\"page-head\">\n" +
    "                            <h1>{{'Profile'| translate}}</h1>\n" +
    "                            <!--<a href=\"#/doctor/{{$root.auth.username}}\" title=\"{{'View Profile' | translate}}\" class=\"btn btn-green pull-right\" ng-if=\"model.user_profile.user_type == 'doctor'\">{{'View Profile' | translate}}</a>-->\n" +
    "                        </div>\n" +
    "                        <div class=\"form-content\">\n" +
    "                            <form class=\"clearfix\" enctype=\"multipart/form-data\" name=\"userprofileEdit\" ng-submit=\"model.userProfile(userprofileEdit.$valid)\" novalidate>\n" +
    "                                <div class=\"form-body col-md-12\" ng-show=\"!photoUpload\">\n" +
    "                                    <!--<div class=\"col-md-3 js-crop-col-md-3\">\n" +
    "                                        <div class=\"form-group text-center\">\n" +
    "                                            <h3>{{'Upload your picture to help your medical team'| translate}}</h3>\n" +
    "                                            <div class=\"form-group\">\n" +
    "                                                <a href=\"#/user/{{user.username}}\" title=\"{{user.username}}\" class=\"thumbnail center-block js-crop-image-section\">\n" +
    "                                                    <span>\n" +
    "                                                        <img ng-if=\"user.user_avatar_source_id != model.ConstSocialLogin.Twitter && user.user_avatar_source_id != model.ConstSocialLogin.Github\" ng-src=\"{{user.attachmentable.thumb.large}}\" title=\"{{user.username}}\" class=\"js-image-crop-tmp-update\" alt=\"{{user.username}}\">\n" +
    "                                                        <img ng-if=\"user.user_avatar_source_id == model.ConstSocialLogin.Twitter || user.user_avatar_source_id == model.ConstSocialLogin.Github\" ng-src=\"{{user.attachmentable.thumb.large}}\" title=\"{{user.username}}\" class=\"js-image-crop-tmp-update\" alt=\"{{user.username}}\" height=\"{{model.thumb.large.height}}\" width=\"{{model.thumb.large.width}}\">\n" +
    "                                                    </span>\n" +
    "                                                </a>\n" +
    "                                                <input class=\"input-file hide\" type=\"file\" ngf-select ng-model=\"file\" name=\"file\" ngf-pattern=\"'image/*'\" ngf-accept=\"'image/*'\"\n" +
    "                                                ngf-max-size=\"2MB\" id=\"inputFile\" ng-change=\"cropImg(this)\">\n" +
    "                                                <label for=\"inputFile\">\n" +
    "                                                    <span class=\"center-block js-cropimg-choose\"><i class=\"fa fa-cloud-upload\"></i>Change picture...</span>\n" +
    "                                                </label>\n" +
    "                                                <span class=\"error\" ng-show=\"userprofileEdit.file.$error.required\" class=\"text-danger help-block\">{{'Allowed extensions: jpg, jpeg, gif, png'|translate}}</span>\n" +
    "                                                <div class=\"js-image-crop croppie-container crop-img-sec\"></div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>-->\n" +
    "                                    <div class=\"personal-info\">\n" +
    "                                        <div class=\"clearfix name-block row\">\n" +
    "                                            <div class=\"form-group pull-left\">\n" +
    "                                                <label for=\"name\">{{'Name'| translate}}</label>\n" +
    "                                                <p class=\"form-control-static\">{{$root.auth.user_profile.display_name}}</p>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"file-upload pull-right\">\n" +
    "                                                <a for=\"real\" ng-click=\"model.photoUpload(1)\">{{'Update profile photo'| translate}}</a>\n" +
    "                                            </div>\n" +
    "                                            <input type=\"file\" name=\"attachment\" id=\"real\" class=\"realupload hide\" onchange=\"this.form.upload.value = this.value;\" />\n" +
    "                                        </div>\n" +
    "                                        <div class=\"clearfix row\">\n" +
    "                                            <div class=\"\">\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\">\n" +
    "                                                        <label for=\"exampleInputEmail1\">{{'E-mail'| translate}}</label>\n" +
    "                                                        <input type=\"email\" class=\"form-control\" ng-readonly=\"true\" ng-model=\"model.user_profile.User.email\">\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"clearfix row\">\n" +
    "                                            <div class=\"\">\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\">\n" +
    "                                                        <label for=\"cell\">{{'Cellphone'| translate}}</label>\n" +
    "                                                        <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"phone\" placeholder=\"{{'Mobile'| translate}}\" ng-model=\"model.user_profile.phone\"\n" +
    "                                                            ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                                        />\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.required)\">{{'Enter Mobile Number'| translate }} </span>\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.pattern)\">{{'Enter Valid Mobile Number Without Character'| translate }} </span>\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.minlength)\">{{'Minimum Length is 8'| translate }} </span>\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.maxlength)\">{{'Maximum Length is 12'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\">\n" +
    "                                                        <label for=\"homephone\">{{'Home Phone'| translate}} {{'(Optional)'| translate}}</label>\n" +
    "                                                        <input type=\"text\" class=\"form-control\" name=\"home_phone_number\" id=\"home_phone_number\" placeholder=\"{{'Mobile'| translate}}\" ng-model=\"model.user_profile.home_phone_number\" />\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.home_phone_number.$touched) && (userprofileEdit.home_phone_number.$pristine || userprofileEdit.home_phone_number.$invalid) && (userprofileEdit.home_phone_number.$error.required)\">{{'Enter Home phone Number'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\">\n" +
    "                                                        <label for=\"work_phone_number\">{{'Work phone(Optional)'| translate}}</label>\n" +
    "                                                        <input type=\"text\" class=\"form-control\" name=\"work_phone_number\" id=\"work_phone_number\" placeholder=\"{{'Mobile'| translate}}\" ng-model=\"model.user_profile.work_phone_number\"/>\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.work_phone_number.$touched) && (userprofileEdit.work_phone_number.$pristine || userprofileEdit.work_phone_number.$invalid) && (userprofileEdit.work_phone_number.$error.required)\">{{'Enter Work phone'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"clearfix row\">\n" +
    "                                            <div class=\"\">\n" +
    "                                                <div class=\"col-md-12\">\n" +
    "                                                    <div class=\"form-group\">\n" +
    "                                                        <label for=\"hobbies\">{{'Hobbies'| translate}}</label>\n" +
    "                                                        <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.hobbies.$touched) && (userprofileEdit.hobbies.$pristine || userprofileEdit.hobbies.$invalid) && (userprofileEdit.hobbies.$error.required)}\">\n" +
    "                                                            <input type=\"text\" class=\"form-control\" id=\"hobbies\" name=\"hobbies\" ng-model=\"model.user_profile.hobbies\" ng-required=\"true\"\n" +
    "                                                                placeholder=\"{{'Hobbies'| translate}}\">\n" +
    "                                                            <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.hobbies.$touched) && (userprofileEdit.hobbies.$pristine || userprofileEdit.hobbies.$invalid) && (userprofileEdit.hobbies.$error.required)\">{{'Enter Hobbies'| translate }} </span>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"clearfix social row\">\n" +
    "                                            <div class=\"\">\n" +
    "                                                <label class=\"col-md-12\">{{'Social Network'| translate}}</label>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\">\n" +
    "                                                        <div class=\"input-group select-opt\">\n" +
    "                                                            <div class=\"input-group-addon\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></div>\n" +
    "                                                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.instagram_handle.$touched) && (userprofileEdit.instagram_handle.$pristine || userprofileEdit.instagram_handle.$invalid) && (userprofileEdit.instagram_handle.$error.required)}\">\n" +
    "\n" +
    "                                                                <input type=\"text\" class=\"form-control\" id=\"instagram_handle\" name=\"instagram_handle\" ng-model=\"model.user_profile.instagram_handle\" \n" +
    "                                                                    placeholder=\"{{'Instagram Url'| translate}}\">\n" +
    "                                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.instagram_handle.$touched) && (userprofileEdit.instagram_handle.$pristine || userprofileEdit.instagram_handle.$invalid) && (userprofileEdit.instagr.$error.required)\">{{'Enter Instagram Url'| translate }} </span>\n" +
    "\n" +
    "                                                            </div>\n" +
    "                                                        </div>	\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.instagram_handle.$touched) && (userprofileEdit.instagram_handle.$pristine || userprofileEdit.instagram_handle.$invalid) && (userprofileEdit.instagr.$error.required)\">{{'Enter Instagram Url'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\">\n" +
    "                                                        <div class=\"input-group select-opt\">\n" +
    "                                                           <div class=\"input-group-addon\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></div>\n" +
    "                                                           <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.twitter_handle.$touched) && (userprofileEdit.twitter_handle.$pristine || userprofileEdit.twitter_handle.$invalid) && (userprofileEdit.twitter_handle.$error.required)}\">\n" +
    "\n" +
    "                                                                <input type=\"text\" class=\"form-control\" id=\"twitter_handle\" name=\"twitter_handle\" ng-model=\"model.user_profile.twitter_handle\" \n" +
    "                                                                    placeholder=\"{{'Twitter Url'| translate}}\">\n" +
    "                                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.twitter_handle.$touched) && (userprofileEdit.twitter_handle.$pristine || userprofileEdit.twitter_handle.$invalid) && (userprofileEdit.twitter_handle.$error.required)\">{{'Enter Instagram Url'| translate }} </span>\n" +
    "\n" +
    "                                                            </div>\n" +
    "                                                        </div>\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.twitter_handle.$touched) && (userprofileEdit.twitter_handle.$pristine || userprofileEdit.twitter_handle.$invalid) && (userprofileEdit.twitter_handle.$error.required)\">{{'Enter Twitter Url'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\">\n" +
    "                                                        <div class=\"input-group select-opt\">\n" +
    "                                                           <div class=\"input-group-addon\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></div>\n" +
    "                                                           <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.facebook_handle.$touched) && (userprofileEdit.facebook_handle.$pristine || userprofileEdit.facebook_handle.$invalid) && (userprofileEdit.facebook_handle.$error.required)}\">\n" +
    "\n" +
    "                                                                <input type=\"text\" class=\"form-control\" id=\"facebook_handle\" name=\"facebook_handle\" ng-model=\"model.user_profile.facebook_handle\" \n" +
    "                                                                    placeholder=\"{{'Facebook Url'| translate}}\">\n" +
    "                                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.facebook_handle.$touched) && (userprofileEdit.facebook_handle.$pristine || userprofileEdit.facebook_handle.$invalid) && (userprofileEdit.facebook_handle.$error.required)\">{{'Enter Instagram Url'| translate }} </span>\n" +
    "\n" +
    "                                                            </div>\n" +
    "                                                        </div>\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.facebook_handle.$touched) && (userprofileEdit.facebook_handle.$pristine || userprofileEdit.facebook_handle.$invalid) && (userprofileEdit.facebook_handle.$error.required)\">{{'Enter Facebook Url'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"clearfix address row\">\n" +
    "                                            <div class=\"\">\n" +
    "                                                <label class=\"col-md-12\">{{'Address(Optional)'| translate}}</label>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.address.$touched) && (userprofileEdit.address.$pristine || userprofileEdit.address.$invalid) && (userprofileEdit.address.$error.required)}\">\n" +
    "                                                        <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" ng-model=\"model.user_profile.address\" placeholder=\"{{'Physical address'| translate}}\">\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.address.$touched) && (userprofileEdit.address.$pristine || userprofileEdit.address.$invalid) && (userprofileEdit.address.$error.required)\">{{'Physical address'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.apartment_unit.$touched) && (userprofileEdit.apartment_unit.$pristine || userprofileEdit.apartment_unit.$invalid) && (userprofileEdit.apartment_unit.$error.required)}\">\n" +
    "                                                        <input type=\"text\" class=\"form-control\" id=\"apartment_unit\" name=\"apartment_unit\" ng-model=\"model.user_profile.apartment_unit\" placeholder=\"{{'#apt, unit'| translate}}\">\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.apartment_unit.$touched) && (userprofileEdit.apartment_unit.$pristine || userprofileEdit.apartment_unit.$invalid) && (userprofileEdit.apartment_unit.$error.required)\">{{'#apt, unit'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.city_id.$touched) && (userprofileEdit.city_id.$pristine || userprofileEdit.city_id.$invalid) && (userprofileEdit.city_id.$error.required)}\">\n" +
    "                                                        <input type=\"text\" class=\"form-control\" id=\"city\" name=\"model.user_profile.city_name\" placeholder=\"City\">\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.city_id.$touched) && (userprofileEdit.city_id.$pristine || userprofileEdit.city_id.$invalid) && (userprofileEdit.city_id.$error.required)\">{{'Choose City'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group select-opt\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.country_id.$touched) && (userprofileEdit.country_id.$pristine || userprofileEdit.country_id.$invalid) && (userprofileEdit.country_id.$error.required)}\">\n" +
    "                                                        <select class=\"form-control\" name=\"country_id\" id=\"country_id\" ng-model=\"model.user_profile.country_id\" ng-options=\"country.id as country.name for country in countryArray\">  \n" +
    "                                                        <option value=\"\">{{'Country'| translate}}</option>                \n" +
    "                                                    </select>\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.country_id.$touched) && (userprofileEdit.country_id.$pristine || userprofileEdit.country_id.$invalid) && (userprofileEdit.country_id.$error.required)\">{{'Enter Country'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.postal_code.$touched) && (userprofileEdit.postal_code.$pristine || userprofileEdit.postal_code.$invalid) && (userprofileEdit.postal_code.$error.required)}\">\n" +
    "                                                        <input type=\"text\" class=\"form-control\" name=\"postal_code\" id=\"postal_code\" placeholder=\"Codigo Postal\" ng-model=\"model.user_profile.postal_code\"\n" +
    "                                                            ng-required=\"true\" ng-minlength=\"3\" />\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.postal_code.$touched) && (userprofileEdit.postal_code.$pristine || userprofileEdit.postal_code.$invalid) && (userprofileEdit.postal_code.$error.required)\">{{'Enter Postal Code'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"clearfix row\">\n" +
    "                                            <div class=\"\">\n" +
    "                                                <label class=\"col-md-12\">{{'Gender'| translate}}</label>\n" +
    "                                                <div class=\"col-md-4\">\n" +
    "                                                    <div class=\"form-group select-opt\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.gender_id.$touched) && (userprofileEdit.gender_id.$pristine || userprofileEdit.gender_id.$invalid) && (userprofileEdit.gender_id.$error.required)}\">\n" +
    "                                                        <select class=\"form-control\" name=\"gender_id\" id=\"gender_id\" ng-model=\"model.user_profile.gender_id\" ng-required=\"true\" ng-options=\"gender.id as gender.name for gender in genderArray\">  \n" +
    "                                                            <option value=\"\">{{'Select Gender'| translate}}</option>\n" +
    "                                                        </select>\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.gender_id.$touched) && (userprofileEdit.gender_id.$pristine || userprofileEdit.gender_id.$invalid) && (userprofileEdit.gender_id.$error.required)\">{{'Choose Gender'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"clearfix row\">\n" +
    "                                            <div class=\"\">\n" +
    "                                                <label class=\"col-md-12\">{{'Date of birth' | translate}}</label>\n" +
    "                                                <div class=\"col-md-6\">\n" +
    "                                                    <div class=\"form-group\">\n" +
    "                                                        <div class=\"input-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.dob.$touched) && (userprofileEdit.dob.$pristine || userprofileEdit.dob.$invalid) && (userprofileEdit.dob.$error.required)}\">\n" +
    "                                                            <span class=\"input-group-addon\"><i class=\"fa fa-calendar fa-fw\"></i></span>\n" +
    "                                                            <input class=\"form-control\" ng-model=\"model.user_profile.dob\" data-date-format=\"yyyy-MM-dd\" data-start-date=\"{{date|date:'yyyy-MM-dd'}}\"\n" +
    "                                                                data-max-date=\"{{dateBlockeBefore}}\" data-autoclose=\"1\" name=\"dob\"\n" +
    "                                                                bs-datepicker type=\"appoint_date\" required=\"true\" placeholder=\"Date\">\n" +
    "                                                        </div>\n" +
    "                                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.dob.$touched) && (userprofileEdit.dob.$pristine || userprofileEdit.dob.$invalid) && (userprofileEdit.dob.$error.required)\">{{'Choose DOB'| translate }} </span>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12 js-crop-col-md-3\" ng-show=\"photoUpload\">\n" +
    "                                    <div class=\"form-group text-center\">\n" +
    "                                        <h3>{{'Upload your picture to help your medical team'| translate}}</h3>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <span title=\"{{user.username}}\" class=\"thumbnail center-block js-crop-image-section\">\n" +
    "                                                <span>\n" +
    "                                                        <img ng-if=\"user.user_avatar_source_id != model.ConstSocialLogin.Twitter && user.user_avatar_source_id != model.ConstSocialLogin.Github\" ng-src=\"{{user.attachmentable.thumb.large}}\" title=\"{{user.username}}\" class=\"js-image-crop-tmp-update\" alt=\"{{user.username}}\">\n" +
    "                                                        <img ng-if=\"user.user_avatar_source_id == model.ConstSocialLogin.Twitter || user.user_avatar_source_id == model.ConstSocialLogin.Github\" ng-src=\"{{user.attachmentable.thumb.large}}\" title=\"{{user.username}}\" class=\"js-image-crop-tmp-update\" alt=\"{{user.username}}\" height=\"{{model.thumb.large.height}}\" width=\"{{model.thumb.large.width}}\">\n" +
    "                                                    </span>\n" +
    "                                            </span>\n" +
    "                                            <input class=\"input-file hide\" type=\"file\" ngf-select ng-model=\"file\" name=\"file\" ngf-pattern=\"'image/*'\" ngf-accept=\"'image/*'\"\n" +
    "                                                ngf-max-size=\"2MB\" id=\"inputFile\" ng-change=\"cropImg(this)\">\n" +
    "                                            <label for=\"inputFile\">\n" +
    "                                                    <span class=\"center-block js-cropimg-choose\"><i class=\"fa fa-cloud-upload\"></i>Change picture...</span>\n" +
    "                                                    <a for=\"real\" ng-click=\"model.photoUpload(2)\" >{{'Cancel Update profile photo'| translate}}</a>\n" +
    "                                                </label>\n" +
    "                                            <span ng-show=\"userprofileEdit.file.$error.required\" class=\"error text-danger help-block\">{{'Allowed extensions: jpg, jpeg, gif, png'|translate}}</span>\n" +
    "                                            <div class=\"js-image-crop crop-img-sec\"></div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            <!--<div class=\"form-group col-md-6\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.first_name.$touched) && (userprofileEdit.first_name.$pristine || userprofileEdit.first_name.$invalid) && (userprofileEdit.first_name.$error.required)}\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" name=\"first_name\" id=\"first_name\" placeholder=\"{{'First Name'| translate}}\" ng-model=\"model.user_profile.first_name\"\n" +
    "                                        ng-required=\"true\" ng-minlength=\"3\" ng-maxlength=\"25\" ng-pattern=\"/^[a-z A-Z]*$/\"\n" +
    "                                    />\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.first_name.$touched) && (userprofileEdit.first_name.$pristine || userprofileEdit.first_name.$invalid) && (userprofileEdit.first_name.$error.required)\">{{'Enter First Name'| translate }} </span>\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.first_name.$touched) && (userprofileEdit.first_name.$pristine || userprofileEdit.first_name.$invalid) && (userprofileEdit.first_name.$error.minlength)\">{{'Minimum length is 3'| translate}}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.first_name.$touched) && (userprofileEdit.first_name.$pristine || userprofileEdit.first_name.$invalid) && (userprofileEdit.first_name.$error.maxlength)\">{{'Maximum length is 25'| translate}}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.first_name.$touched) && (userprofileEdit.first_name.$pristine || userprofileEdit.first_name.$invalid) && (userprofileEdit.first_name.$error.pattern)\">{{'Enter valid name without number'| translate}}</span>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-6\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.last_name.$touched) && (userprofileEdit.last_name.$pristine || userprofileEdit.last_name.$invalid) && (userprofileEdit.last_name.$error.required)}\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" name=\"last_name\" id=\"last_name\" placeholder=\"Apellido\" ng-model=\"model.user_profile.last_name\"\n" +
    "                                        ng-required=\"true\" ng-minlength=\"1\" ng-maxlength=\"20\" ng-pattern=\"/^[a-z A-Z]*$/\"\n" +
    "                                    />\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.last_name.$touched) && (userprofileEdit.last_name.$pristine || userprofileEdit.last_name.$invalid) && (userprofileEdit.last_name.$error.required)\">{{'Enter Last Name'| translate }} </span>\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.last_name.$touched) && (userprofileEdit.last_name.$pristine || userprofileEdit.last_name.$invalid) && (userprofileEdit.last_name.$error.minlength)\">{{'Minimum length is 1'| translate}}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.last_name.$touched) && (userprofileEdit.last_name.$pristine || userprofileEdit.last_name.$invalid) && (userprofileEdit.last_name.$error.maxlength)\">{{'Maximum length is 20'| translate }} </span>\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.last_name.$touched) && (userprofileEdit.last_name.$pristine || userprofileEdit.last_name.$invalid) && (userprofileEdit.last_name.$error.pattern)\">{{'Enter valid name without number'| translate }} </span>\n" +
    "                                </div>\n" +
    "                                <div class=\"clearfix\">\n" +
    "                                    <div class=\"form-group col-md-6\" ng-show=\"model.user_profile.user_type == 'doctor'\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" name=\"dr_title\" id=\"dr_title\" placeholder=\"{{'Title'| translate}}\" ng-model=\"model.user_profile.dr_title\"\n" +
    "                                            ng-required=\"false\" />\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\" ng-show=\"model.user_profile.user_type == 'doctor'\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" name=\"practice_name\" id=\"practice_name\" placeholder=\"{{'Practice Name'| translate}}\"\n" +
    "                                            ng-model=\"model.user_profile.practice_name\" />\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.practice_name.$touched) && (userprofileEdit.practice_name.$pristine || userprofileEdit.practice_name.$invalid) && (userprofileEdit.practice_name.$error.url)\">{{'Enter Practice Name'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.practice_name.$touched) && (userprofileEdit.practice_name.$pristine || userprofileEdit.practice_name.$invalid) && (userprofileEdit.practice_name.$error.minlength)\">{{'Minimum length is 1'| translate}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"clearfix\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <div class=\"input-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.dob.$touched) && (userprofileEdit.dob.$pristine || userprofileEdit.dob.$invalid) && (userprofileEdit.dob.$error.required)}\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"fa fa-calendar fa-fw\"></i></span>\n" +
    "                                            <input class=\"form-control\" ng-model=\"model.user_profile.dob\" data-date-format=\"yyyy-MM-dd\" data-start-date=\"{{date|date:'yyyy-MM-dd'}}\"\n" +
    "                                                data-max-date=\"{{dateBlockeBefore}}\" data-autoclose=\"1\" name=\"dob\" bs-datepicker\n" +
    "                                                type=\"appoint_date\" required=\"true\" placeholder=\"Date\">\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.dob.$touched) && (userprofileEdit.dob.$pristine || userprofileEdit.dob.$invalid) && (userprofileEdit.dob.$error.required)\">{{'Choose DOB'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6 select-opt\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.gender_id.$touched) && (userprofileEdit.gender_id.$pristine || userprofileEdit.gender_id.$invalid) && (userprofileEdit.gender_id.$error.required)}\">\n" +
    "                                        <select class=\"form-control\" name=\"gender_id\" id=\"gender_id\" ng-model=\"model.user_profile.gender_id\" ng-required=\"true\" ng-options=\"gender.id as gender.name for gender in genderArray\">  \n" +
    "                                            <option value=\"\">{{'Select Gender'| translate}}</option>\n" +
    "                                        </select>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.gender_id.$touched) && (userprofileEdit.gender_id.$pristine || userprofileEdit.gender_id.$invalid) && (userprofileEdit.gender_id.$error.required)\">{{'Choose Gender'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6 select-opt\" ng-show=\"model.user_profile.user_type == 'doctor'\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.notification_type_id.$touched) && (userprofileEdit.notification_type_id.$pristine || userprofileEdit.notification_type_id.$invalid) && (userprofileEdit.notification_type_id.$error.required)}\">\n" +
    "                                        <select class=\"form-control\" name=\"notification_type_id\" ng-required=\"model.user_profile.user_type == 'doctor'\" ng-model=\"model.user_profile.notification_type_id\"\n" +
    "                                            ng-options=\"notification_type.id as notification_type.name for notification_type in notificationArray\">\n" +
    "                                            <option value=\"\"> Select Notification Type </option>\n" +
    "                                            </select>\n" +
    "                                            <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.notification_type_id.$touched) && (userprofileEdit.notification_type_id.$pristine) && (userprofileEdit.notification_type_id.$error.required)\">{{'Select Notification Type'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\" ng-show=\"model.user_profile.user_type == 'doctor'\">\n" +
    "                                        <label class=\"checkbox-field\">\n" +
    "                                            <input class=\"hide\" id=\"is_newpatient_accepted\" type=\"checkbox\" name=\"is_newpatient_accepted\" ng-model=\"model.user_profile.is_newpatient_accepted\" ng-checked=\"model.user_profile.is_newpatient_accepted == true\">\n" +
    "                                            <span class=\"custom-check check-green\"></span>\n" +
    "                                            <span>\n" +
    "                                                <label for=\"is_newpatient_accepted\">{{'Approval Needed for patient booking appointments'| translate }}</label>\n" +
    "                                            </span>\n" +
    "                                        </label>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12 appointments-info row\" ng-show=\"auth.is_trial==0 && auth.subscription_id == 0\">\n" +
    "                                    <h3>{{'Appointments:'| translate}}</h3>                            \n" +
    "                                    <div ng-show=\"model.user_profile.user_type == 'doctor'\" class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.is_allow_appointments.$touched) && (userprofileEdit.is_allow_appointments.$pristine || userprofileEdit.is_allow_appointments.$invalid) && (userprofileEdit.is_allow_appointments.$error.required)}\">\n" +
    "                                        <select class=\"form-control\" name=\"is_allow_appointments\" id=\"is_allow_appointments\" ng-model=\"model.user_profile.is_allow_appointments\">  \n" +
    "                                            <option value=\"\">{{'Please select appointments'| translate}}</option>\n" +
    "                                            <option value=\"1\">{{'Allow'| translate}}</option> \n" +
    "                                            <option value=\"0\">{{'Dis-allow'| translate}}</option>  \n" +
    "                                        </select>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.is_allow_appointments.$touched) && (userprofileEdit.is_allow_appointments.$pristine || userprofileEdit.is_allow_appointments.$invalid) && (userprofileEdit.is_allow_appointments.$error.required)\">{{'Choose Appointments'| translate }} </span>\n" +
    "                                    </div>             \n" +
    "                                </div>                     \n" +
    "                                <div class=\"col-md-12 professional-info row\" ng-show=\"model.user_profile.user_type == 'doctor'\">                            \n" +
    "                                    <h3>{{'Identification Number:'| translate}}</h3>\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.identification_number.$touched) && (userprofileEdit.identification_number.$pristine || userprofileEdit.identification_number.$invalid) && (userprofileEdit.identification_number.$error.required)}\">                             \n" +
    "                                        <input type=\"text\" class=\"form-control\" name=\"identification_number\" id=\"identification_number\" placeholder=\"{{'Identification Number'| translate}}\" ng-model=\"model.user_profile.identification_number\"\n" +
    "                                                        ng-required=\"true\" ng-minlength=\"4\" ng-maxlength=\"12\" \n" +
    "                                                    />\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.identification_number.$touched) && (userprofileEdit.identification_number.$pristine || userprofileEdit.identification_number.$invalid) && (userprofileEdit.identification_number.$error.required)\">{{'Enter Identification Number'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.identification_number.$touched) && (userprofileEdit.identification_number.$pristine || userprofileEdit.identification_number.$invalid) && (userprofileEdit.identification_number.$error.minlength)\">{{'Minimum Length is 4'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.identification_number.$touched) && (userprofileEdit.identification_number.$pristine || userprofileEdit.identification_number.$invalid) && (userprofileEdit.identification_number.$error.maxlength)\">{{'Maximum Length is 12'| translate }} </span>\n" +
    "                                    </div>                  \n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12 professional-info row\" ng-show=\"model.user_profile.user_type == 'doctor'\">                            \n" +
    "                                    <h3>{{'Insurance Patient Count per Day:'| translate}}</h3>\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.no_insurance_patients.$touched) && (userprofileEdit.no_insurance_patients.$pristine || userprofileEdit.no_insurance_patients.$invalid) && (userprofileEdit.no_insurance_patients.$error.required)}\">    \n" +
    "                                        <input type=\"number\" class=\"form-control\" name=\"no_insurance_patients\" id=\"no_insurance_patients\" placeholder=\"{{'Insurance Patient Count'| translate}}\" ng-model=\"model.user_profile.no_insurance_patients\"\n" +
    "                                                        ng-required=\"true\"/>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.no_insurance_patients.$touched) && (userprofileEdit.no_insurance_patients.$pristine || userprofileEdit.no_insurance_patients.$invalid) && (userprofileEdit.no_insurance_patients.$error.required)\">{{'Enter Insurance Patient Count'| translate }} </span>\n" +
    "                                    </div>                  \n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12 location-info row\">\n" +
    "                                    <h3>{{'Location Info'| translate}}</h3>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.required)}\">\n" +
    "                                                <div class=\"input-group\">\n" +
    "                                                    <span class=\"input-group-addon\"><i class=\"fa fa-phone fa-fw\"></i></span>\n" +
    "                                                    <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"phone\" placeholder=\"{{'Mobile'| translate}}\" ng-model=\"model.user_profile.phone\"\n" +
    "                                                        ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                                    />\n" +
    "                                                </div>\n" +
    "                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.required)\">{{'Enter Mobile Number'| translate }} </span>\n" +
    "                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.pattern)\">{{'Enter Valid Mobile Number Without Character'| translate }} </span>\n" +
    "                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.minlength)\">{{'Minimum Length is 8'| translate }} </span>\n" +
    "                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.maxlength)\">{{'Maximum Length is 12'| translate }} </span>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.address.$touched) && (userprofileEdit.address.$pristine || userprofileEdit.address.$invalid) && (userprofileEdit.address.$error.required)}\">\n" +
    "                                                <textarea class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"{{'Address'| translate}}\" ng-model=\"model.user_profile.address\"\n" +
    "                                                    required></textarea>\n" +
    "                                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.address.$touched) && (userprofileEdit.address.$pristine || userprofileEdit.address.$invalid) && (userprofileEdit.address.$error.required)\">{{'Enter Address'| translate }} </span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <div class=\"form-group select-opt\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.city_id.$touched) && (userprofileEdit.city_id.$pristine || userprofileEdit.city_id.$invalid) && (userprofileEdit.city_id.$error.required)}\">\n" +
    "                                                <select class=\"form-control\" name=\"city_id\" id=\"city_id\" ng-model=\"model.user_profile.city_id\" ng-options=\"city.id as city.name for city in cityArray\">  \n" +
    "                                                    <option value=\"\">{{'City'| translate}}</option>                       \n" +
    "                                                </select>\n" +
    "                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.city_id.$touched) && (userprofileEdit.city_id.$pristine || userprofileEdit.city_id.$invalid) && (userprofileEdit.city_id.$error.required)\">{{'Choose City'| translate }} </span>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"form-group select-opt\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.country_id.$touched) && (userprofileEdit.country_id.$pristine || userprofileEdit.country_id.$invalid) && (userprofileEdit.country_id.$error.required)}\">\n" +
    "                                                <select class=\"form-control\" name=\"country_id\" id=\"country_id\" ng-model=\"model.user_profile.country_id\" ng-options=\"country.id as country.name for country in countryArray\">  \n" +
    "                                                    <option value=\"\">{{'Country'| translate}}</option>                    \n" +
    "                                                </select>\n" +
    "                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.country_id.$touched) && (userprofileEdit.country_id.$pristine || userprofileEdit.country_id.$invalid) && (userprofileEdit.country_id.$error.required)\">{{'Enter Country'| translate }} </span>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.postal_code.$touched) && (userprofileEdit.postal_code.$pristine || userprofileEdit.postal_code.$invalid) && (userprofileEdit.postal_code.$error.required)}\">\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"postal_code\" id=\"postal_code\" placeholder=\"Codigo Postal\" ng-model=\"model.user_profile.postal_code\"\n" +
    "                                                    ng-required=\"true\" ng-minlength=\"3\" />\n" +
    "                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.postal_code.$touched) && (userprofileEdit.postal_code.$pristine || userprofileEdit.postal_code.$invalid) && (userprofileEdit.postal_code.$error.required)\">{{'Enter Postal Code'| translate }} </span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12 professional-info row\">\n" +
    "                                    <div ng-show=\"model.user_profile.user_type == 'doctor'\">\n" +
    "                                        <h3>{{'Professional Info:'| translate}}</h3>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <textarea class=\"form-control\" id=\"booking_instructions\" name=\"booking_instructions\" placeholder=\"{{'Booking Instructions'| translate}}\"\n" +
    "                                                ng-model=\"model.user_profile.booking_instructions\"></textarea>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <textarea class=\"form-control\" id=\"about_me\" name=\"about_me\" placeholder=\"{{'About me'| translate}}\" ng-model=\"model.user_profile.about_me\"></textarea>\n" +
    "                                            <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.about_me.$touched) && (userprofileEdit.about_me.$pristine || userprofileEdit.about_me.$invalid) && (userprofileEdit.about_me.$error.required)\">{{'Enter Professional Statement'| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <textarea class=\"form-control\" id=\"board_certifications\" name=\"board_certifications\" placeholder=\"{{'Board Certifications'| translate}}\"\n" +
    "                                                ng-model=\"model.user_profile.board_certifications\"></textarea>\n" +
    "                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.board_certifications.$touched) && (userprofileEdit.board_certifications.$pristine || userprofileEdit.board_certifications.$invalid) && (userprofileEdit.board_certifications.$error.required)\">{{'Enter Board Certifications'| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <textarea class=\"form-control\" id=\"memberships\" name=\"memberships\" placeholder=\"{{'Professional Memberships'| translate}}\"\n" +
    "                                                ng-model=\"model.user_profile.memberships\"></textarea>\n" +
    "                                                <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.memberships.$touched) && (userprofileEdit.memberships.$pristine || userprofileEdit.memberships.$invalid) && (userprofileEdit.memberships.$error.required)\">{{'Enter Professional Memberships'| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <textarea class=\"form-control\" id=\"awards\" name=\"awards\" placeholder=\"{{'Awards'| translate}}\" ng-model=\"model.user_profile.awards\"></textarea>\n" +
    "                                            <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.awards.$touched) && (userprofileEdit.awards.$pristine || userprofileEdit.awards.$invalid) && (userprofileEdit.awards.$error.required)\">{{'Enter Awards and Publications'| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12 hobbies-info row\" ng-show=\"model.user_profile.user_type == 'doctor'\"> \n" +
    "                                    <h3>{{'Hobbies:'| translate}}</h3>\n" +
    "                                    <div class=\"form-group\">\n" +
    "                                        <textarea class=\"form-control\" id=\"hobbies\" name=\"hobbies\" placeholder=\"{{'Enter your Hobbies'| translate}}\"\n" +
    "                                            ng-model=\"model.user_profile.hobbies\"></textarea>\n" +
    "                                    </div>                  \n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12 htnl-info row\" ng-show=\"model.user_profile.user_type == 'doctor'\"> \n" +
    "                                    <h3>{{'Content:'| translate}}</h3>\n" +
    "                                    <div class=\"form-group\">\n" +
    "                                        <div text-angular ng-model=\"model.user_profile.html_info\"></div>                     \n" +
    "                                    </div>                  \n" +
    "                                </div>-->\n" +
    "                                <div class=\"edit-profile\">\n" +
    "                                    <div class=\"personal-info\">\n" +
    "                                        <div class=\"col-md-12 row\">\n" +
    "                                            <div ng-if=\"model.user_profile.user_type == 'doctor' && $root.auth.subscription_id != 0\">\n" +
    "                                                <label class=\"col-md-12\">{{'Description'| translate}}</label>\n" +
    "                                                <div class=\"form-group\">\n" +
    "                                                    <div text-angular id=\"about_me\" name=\"about_me\" placeholder=\"{{'About me'| translate}}\" ng-model=\"model.user_profile.about_me\">                                                    \n" +
    "                                                    </div>\n" +
    "                                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.about_me.$touched) && (userprofileEdit.about_me.$pristine || userprofileEdit.about_me.$invalid) && (userprofileEdit.about_me.$error.required)\">{{'Enter Professional Statement'| translate }} </span>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"form-footer appmt-btn col-md-12 clearfix\">\n" +
    "                                                <div class=\"pull-left\">\n" +
    "                                                    <button class=\"btn btn-green btn-animate confirm\" type=\"submit\">{{'Save'| translate }}</button>\n" +
    "                                                    <a href=\"#/appointments/all\" class=\"btn cancel\">{{'Cancel'| translate }}</a>\n" +
    "                                                </div>\n" +
    "                                                <div class=\"pull-right\">\n" +
    "                                                    <span>\n" +
    "                                                        <a href=\"javascript:void(0)\" ng-click=\"model.userProfileDeactive()\">{{'Deactivate my account'| translate }}</a>\n" +
    "                                                    </span>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                        	</form>\n" +
    "                    	</div>\n" +
    "                	</section>\n" +
    "            	</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/user_settings.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/user_settings.tpl.html",
    "<li class=\"dropdown arrow-icon\">\n" +
    "	<a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{\"Welcome\" | translate }}, {{$root.auth.user_profile.display_name}}\n" +
    "        <span class=\"caret\"></span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu arrow arrow-right\">\n" +
    "    	<li>\n" +
    "        	<ul class=\"list-unstyled\">\n" +
    "            	<li class=\"col-sm-3 col-xs-6\">\n" +
    "                    <h2>{{'Profile Details' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li><a ui-sref=\"MyAppointments()\" title=\"{{'Dashboard' | translate}}\"><i class=\"fa fa-pencil-square-o fa-fw\"></i>{{'Dashboard' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/doctor/{{$root.auth.username}}\" title=\"{{'View Profile' | translate}}\"><i class=\"fa fa-eye fa-fw\"></i>{{'View Profile' | translate}}</a></li>\n" +
    "                        <li><a href=\"#/users/change_password\" title=\"{{'Change Password' | translate}}\"><i class=\"fa fa-lock fa-fw\"></i>{{'Change Password' | translate}}</a></li>                     <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/users/user_profile\" title=\"{{'Settings' | translate}}\"><i class=\"fa fa-cog\"></i>{{'Settings' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/messages\" title=\"{{'Messages' | translate}}\"><i class=\"fa fa-commenting-o\"></i>{{'Messages' | translate}}</a></li>  \n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.settings['site.enabled_plugins'].indexOf('UserEducations') > -1\"><a href=\"#/user/education\" title=\"{{'My Educations' | translate}}\"><i class=\"fa fa-book fa-fw\"></i>{{'My Educations' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/badges\" title=\"{{'Badges' | translate}}\"><i class=\"fa fa-graduation-cap fa-fw\"></i>{{'Badges' | translate}}</a></li>  \n" +
    "                    </ul>\n" +
    "                    <h2 ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">{{'Work Places' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                    	<li><a href=\"#/user/workplaces\"><i class=\"fa fa-location-arrow fa-fw\"></i>{{ 'My Workplaces' | translate }}</a></li>\n" +
    "                    </ul>\n" +
    "               	</li>\n" +
    "            	 <!--<li class=\"col-sm-3 col-xs-6\">\n" +
    "                    <h2>{{'Appointment Details' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/calendar\" title=\"{{\"My Calendar\" | translate}}\"><i class=\"fa fa-calendar fa-fw\"></i>{{\"My Calendar\" | translate}}</a></li>\n" +
    "                       <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/appointments/modifications\" title=\"{{'Appointment Modifications' | translate}}\"><i class=\"fa fa-edit fa-fw\"></i>{{'Appointment Modifications' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/appointments/settings\" title=\"{{'Appointment Settings' | translate}}\"><i class=\"fa fa-gear fa-fw\"></i>{{'Appointment Settings' | translate}}</a></li> \n" +
    "                        <li><a href=\"#/appointments/all\" title=\"{{'My Appointments' | translate}}\"><i class=\"fa fa-envelope-o fa-fw\"></i>{{'My Appointments' | translate}}</a></li>\n" +
    "                    </ul>\n" +
    "              	</li>-->\n" +
    "            	<li class=\"col-sm-3 col-xs-6\">\n" +
    "                    <h2>{{'Facilities' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                        <li><a href=\"#/appointments/all\" title=\"{{'My Appointments' | translate}}\"><i class=\"fa fa-envelope-o fa-fw\"></i>{{'My Appointments' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.auth.is_trial == 1 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 || $root.auth.role_id == model.ConstUserType.Doctor && $root.auth.is_paypal_cancel == 1 &&  $root.auth.subscription_end < currentDate && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"><a href=\"#/subscribe/plans\" title=\"{{'Subscription Plans' | translate}}\"><i class=\"fa fa-clone fa-fw\"></i>{{'Subscription Plans' | translate}}</a></li>    \n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.auth.is_trial == 0 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"><a href=\"#/subscribe/list\" title=\"{{'Subscribe Details' | translate}}\"><i class=\"fa fa-clone fa-fw\"></i>{{'My Subscription' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/specialties\" title=\"{{'My Specialties' | translate}}\"><i class=\"fa fa-user-md fa-fw\"></i>{{'My Specialties' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/insurances\" title=\"{{'My Insurances' | translate}}\"><i class=\"fa fa-retweet fa-fw\"></i>{{'My Insurances' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/languages\" title=\"{{'My Languages' | translate}}\"><i class=\"fa fa-language fa-fw\"></i>{{'My Languages' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/photos\" title=\"{{'My Clinic Photos' | translate}}\"><i class=\"fa fa-hospital-o fa-fw\"></i>{{'My Clinic Photos' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.settings['site.enabled_plugins'].indexOf('IcalCalendar') > -1\"><a href=\"#/ical/list\" title=\"{{'Ical List' | translate}}\"><i class=\"fa fa-link fa-fw\"></i>{{'Ical' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.User\"><a href=\"#/\" title=\"{{'Book a new appointment' | translate}}\"><i class=\"fa fa-plus fa-fw\"></i>{{'Book a new appointment' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.User && $root.settings['site.enabled_plugins'].indexOf('UserFavorites') > -1\"><a href=\"#/user/favorite\" title=\"{{'My Doctors' | translate}}\"><i class=\"fa fa-user-md fa-fw\"></i>{{'My Doctors' | translate}}</a></li>\n" +
    "                        <li><a href=\"#/questions\" ng-if=\"$root.auth.role_id == model.ConstUserType.User && $root.settings['site.enabled_plugins'].indexOf('QuestionAnswer') > -1\" title=\"{{'Questions' | translate}}\"><i class=\"fa fa-book fa-fw\"></i>{{'Questions' | translate}}</a></li>\n" +
    "                        <li><a href=\"#/answers\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.settings['site.enabled_plugins'].indexOf('QuestionAnswer') > -1\" title=\"{{'Answers' | translate}}\"><i class=\"fa fa-book fa-fw\"></i>{{'Answers' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Admin\"><a href=\"ag-admin/#/dashboard\" title=\"{{'Admin Dashboard' | translate}}\"><i class=\"fa fa-clone fa-fw\"></i>{{'Admin Dashboard' | translate}}</a></li>\n" +
    "                    </ul>\n" +
    "              	</li>\n" +
    "            	<li class=\"col-sm-3 col-xs-6\">                    \n" +
    "                    <h2>{{'Exit' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li><a href=\"#\" ng-click=\"dashboardlogout()\"><i class=\"fa fa-power-off fa-fw\"></i>{{ 'Sign out' | translate }}</a></li>\n" +
    "                    </ul>\n" +
    "              	</li>\n" +
    "       		</ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</li>");
}]);

angular.module("User/user_view.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("User/user_view.tpl.html",
    "<div class=\"user-view clearfix\" >\n" +
    "    <div class=\"user-map-location\">\n" +
    "        <div class=\"maps js-maps-show clearfix\">\n" +
    "            <div style=\"width: 100%; float:left; height: 100%\">\n" +
    "                <form class=\"form-inline clearfix container\">\n" +
    "                	<div class=\"clearfix\">\n" +
    "                        <h3 class=\"pull-left\">Google Maps</h3>\n" +
    "                        <i class=\"fa fa-close pull-right\" ng-click=\"mapFilterClose(1)\"></i>\n" +
    "                    </div>\n" +
    "                	<div class=\"row\">\n" +
    "                        <div class=\"form-group col-sm-3 col-md-2\">\n" +
    "                            <ul class=\"list-inline\">\n" +
    "                                <li ng-class=\"(travelMode == 'DRIVING')? 'active': ''\" ng-click=\"driveModeChanged('DRIVING')\"><a class=\"map-car\" href=\"javascript:void(0)\"></a></li>\n" +
    "                                <!--<li ng-class=\"(travelMode == 'TRANSIT')? 'active': ''\" ng-click=\"driveModeChanged('TRANSIT')\"><a class=\"map-bus\" href=\"javascript:void(0)\"></a></li>-->\n" +
    "                                <li ng-class=\"(travelMode == 'WALKING')? 'active': ''\" ng-click=\"driveModeChanged('WALKING')\"><a class=\"map-walking\" href=\"javascript:void(0)\"></a></li>\n" +
    "                                <li ng-class=\"(travelMode == 'BICYCLING')? 'active': ''\" ng-click=\"driveModeChanged('BICYCLING')\"><a class=\"map-bike\" href=\"javascript:void(0)\"></a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-sm-3 col-md-4\">\n" +
    "                            <label>{{'Origin'| translate }}</label>\n" +
    "                            <input ng-model=\"originBox\" type=\"text\" class=\"form-control\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-sm-3 col-md-4\">\n" +
    "                            <label>{{'Destination'| translate }}</label>\n" +
    "                            <select ng-model=\"destinationBox\" class=\"form-control\" ng-options=\"workplace.location as workplace.location for workplace in workplaces\" on-change=\"showRoute(workplace)\">\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-3 col-md-2\">\n" +
    "                            <input type=\"button\" class=\"btn btn-animate btn-green\" ng-click=\"mapChanged(travelMode)\" value=\"{{'Calculate Route'| translate }}\" />\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "                <div class=\"direction-map\" ng-if=\"mapCenter\">\n" +
    "                    <ng-map zoom=\"15\" center=\"[{{latitude}}, {{longitude}}]\" style=\"height:90%\"\n" +
    "                        on-click=\"logLatLng()\">\n" +
    "                        <marker ng-repeat=\"workplace in workplaces\" id='{{workplace.id}}' position=\"{{workplace.latitude}}, {{workplace.longitude}}\" on-click=\"showRoute(workplace)\" icon=\"assets/img/hospital-marker.png\"></marker>\n" +
    "                        <directions draggable=\"true\" panel=\"directions-panel\" travel-mode=\"{{travelMode}}\" waypoints=\"{{waypoints}}\" origin=\"{{origin}}\"\n" +
    "                            destination=\"{{destination}}\">\n" +
    "                        </directions>\n" +
    "                    </ng-map>\n" +
    "                </div>\n" +
    "                <div class=\"hide\" ng-if=\"mapCenter\">\n" +
    "                    Directions path length: {{map.directionsRenderers[0].directions.routes[0].overview_path.length}}\n" +
    "                </div>\n" +
    "                <div ng-if=\"!mapCenter\" class=\"container\">\n" +
    "                    <p class=\"hor-space alert alert-danger\">{{'Sorry No Locations.' |translate}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div ng-if=\"mapCenter\" id=\"directions-panel\" class=\"hide\" style=\"width: 28%; float:left; height: 100%; overflow: auto; padding: 0px 5px\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"maps-image clearfix\" ng-click=\"mapFilterClose(2)\" ng-if=\"staticMapImage != ''\">\n" +
    "        	<img src=\"#\" class=\"img-responsive js-maps-image\">\n" +
    "        </div>\n" +
    "        <div class=\"maps-image js-maps-image clearfix\" ng-if=\"staticMapImage == ''\">\n" +
    "            <div class=\"no-map\">\n" +
    "                <h4 class=\"text-center\">{{'No map location found !' |translate}}</h4>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "	<div id=\"printSpeciality\">\n" +
    "        <div class=\"user-profile col-md-12\" mapscroll ng-class=\"{posfixed:boolChangeClass}\">\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"media\">\n" +
    "                    <div class=\"pull-left\" ng-class=\"(model.user.is_verified == '1') ? 'certified-tag' : ''\" >\n" +
    "                        <a href=\"#/doctor/{{model.user.username}}\" title=\"{{model.user.username}}\" class=\"thumbnail\">\n" +
    "                            <img ng-if=\"model.user.user_avatar_source_id != model.ConstSocialLogin.Twitter && model.user.user_avatar_source_id != model.ConstSocialLogin.Github\"\n" +
    "                                ng-src=\"{{model.user.attachmentable.thumb.large}}\" title=\"{{model.user.username}}\" class=\"\" alt=\"{{model.user.username}}\">\n" +
    "                            <img ng-if=\"model.user.user_avatar_source_id == model.ConstSocialLogin.Twitter || model.user.user_avatar_source_id == model.ConstSocialLogin.Github\"\n" +
    "                                ng-src=\"{{model.user.attachmentable.thumb.large}}\" title=\"{{model.user.username}}\" class=\"\" alt=\"{{model.user.username}}\"\n" +
    "                                height=\"{{model.thumb.large.height}}\" width=\"{{model.thumb.large.width}}\">\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"media-body\">\n" +
    "                        <h3>{{'Dr.'| translate }}{{model.user.user_profile.first_name}} {{model.user.user_profile.last_name}}</h3>\n" +
    "                        <p><span ng-if=\"model.user.user_profile.specialties.length > 0\" ng-repeat=\"specialty in model.user.user_profile.specialties\">\n" +
    "                                    {{$first ? '' : $last ? ' and ' : ', '}} {{specialty.name | translate }}\n" +
    "                                </span></p>\n" +
    "                        <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"overAllRating\"\n" +
    "                            ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserReviews') > -1\"></input-stars>\n" +
    "                        <p class=\"pull-left\"><span>{{\"Code\" | translate }}: <a href=\"javascript:void(0)\">{{model.user.user_code}}</a></span></p>\n" +
    "                        <ul class=\"list-inline bottom-list pull-right\">\n" +
    "                            <li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Photos') > -1\">\n" +
    "                                <clinic-photos></clinic-photos>\n" +
    "                            </li>\n" +
    "                            <li class=\"read-reviews\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserReviews') > -1\">\n" +
    "                                <a class=\"btn\" href=\"javascript:void(0)\" ng-click=\"gotoAnchor('VerifiedPatientReviews')\" title=\"{{'Verified Patient Reviews'| translate  }}\">\n" +
    "                                    {{'Read patient reviews'| translate }}\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <span>{{'Practices' | translate }} </span><a class=\"btn\" href=\"javascript:void(0)\">{{'Immediate and primary' | translate }}</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a class=\"btn\" href=\"javascript:void(0)\" ng-click=\"printDiv('printSpeciality');\" title=\"{{'Print' | translate }}\">{{'Print' | translate }}</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <p ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserFavorites') > -1 && $root.auth.role_id == model.ConstUserType.User && model.isAuthenticated()\">\n" +
    "                                    <span favorite-add></span>\n" +
    "                                </p>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-7\">\n" +
    "                    <div class=\"qualify-exp\">\n" +
    "                        <h3 ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserEducations') > -1\">{{'Qualifications and experience' | translate }}</h3>\n" +
    "                        <div class=\"row education\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserEducations') > -1\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <h4>{{'Education' | translate }}</h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <div ng-if=\"model.user.user_profile.educations.length > 0\" class=\"row\" ng-repeat=\"education in model.user.user_profile.educations\">\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <h4>{{'Accomplishments' | translate }}</h4>\n" +
    "                                        <p>{{education.education}}</p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <h4>{{'Universities' | translate }}</h4>\n" +
    "                                        <p>{{education.organization}}</p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"row\" ng-if=\"model.user.user_profile.educations.length == 0\">\n" +
    "                                    <div class=\"col-sm-12\">\n" +
    "                                        <p class=\"alert alert-danger\">\n" +
    "                                            {{'Education not yet added' | translate }}\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <h4>{{'Hospital affiliation' | translate }}</h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <span>\n" +
    "                                    {{model.user.user_profile.hospital_affiliation}}\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <h4>{{'Languages spoken at the consulting room' | translate }}</h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <ul class=\"list-unstyled field-data\" ng-if=\"model.user.user_profile.languages.length > 0\">\n" +
    "                                    <li class=\"sg-para3 sg-navy language\" ng-repeat=\"language in model.user.user_profile.languages\" ng-class=\"($index > 1) ? 'hide js-showmore-language' : ''\"> \n" +
    "                                        {{language.name}}\n" +
    "                                    </li>\n" +
    "                                    <li><a href=\"javascript:void(0)\" class=\"seeall-btn show\" ng-click=\"showMoreLanguage()\">{{'See all...' | translate }}</a></li>\n" +
    "                                </ul>\n" +
    "                                <p class=\"alert alert-danger\" ng-if=\"model.user.user_profile.languages.length == 0\">\n" +
    "                                    {{'Language not yet added' | translate }}\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <h4>{{'Postgraduate Specialization' | translate }}</h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <span ng-if=\"model.user.user_profile.specialties.length > 0\" ng-repeat=\"specialty in model.user.user_profile.specialties\">\n" +
    "                                    {{$first ? '' : $last ? ' and ' : ', '}} {{specialty.name | translate}}\n" +
    "                                </span>\n" +
    "                                <p class=\"alert alert-danger\" ng-if=\"model.user.user_profile.specialties.length == 0\">\n" +
    "                                    {{'Specialty not yet added' | translate }}\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <h4>{{'Insurances inside the network' | translate }}</h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <span ng-if=\"model.user.insured_patients.data.length > 0\" ng-repeat=\"patient in model.user.insured_patients.data\">\n" +
    "                                    {{$first ? '' : $last ? ' and ' : ', '}} {{patient.insurance.name | capitalize}}\n" +
    "                                </span>\n" +
    "                                <p class=\"alert alert-danger\" ng-if=\"model.user.insured_patients.data.length == 0\">\n" +
    "                                    {{'Insurances not yet added' | translate }}\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <h4>{{'Latinomédica Awards' | translate }}</h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <ul class=\"list-inline\" ng-if=\"model.userBadges.length > 0\">\n" +
    "                                    <li ng-repeat=\"badges in model.userBadges\"><img class=\"img-responsive\" ng-src=\"{{badges.thumb.small}}\" /></li>\n" +
    "                                </ul>\n" +
    "                                <p class=\"alert alert-danger\" ng-if=\"model.userBadges.length == 0\">\n" +
    "                                    {{'Awards not yet added' | translate }}\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!--<div class=\"patient-reviews row\">-->\n" +
    "                    <div class=\"patient-reviews row\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserReviews') > - 1\">\n" +
    "                        <div class=\"\" id=\"VerifiedPatientReviews\">\n" +
    "                            <h3 class=\"text-center\">{{'Patient verification and reviews'| translate }}</h3>\n" +
    "                            <!--<div class=\"add-review pull-right\" ng-show=\"model.isAuthenticated()\">\n" +
    "                                <a href=\"#/user/review/add/{{model.user.id}}\" class=\"btn btn-green btn-animate\"><i class=\"fa fa-plus-circle fa-fw\"></i>{{'Add Review'|translate  }}</a>\n" +
    "                            </div>-->\n" +
    "                            <!-- Add Review if the login user is patient -->\n" +
    "                            <div ng-if=\"isvisited\">\n" +
    "                                <div ng-if=\"reviewEnable\">\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <rating-stars></rating-stars>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-if=\"!reviewEnable\">\n" +
    "                                <div class=\"no-review\">\n" +
    "                                    <div ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\" class=\"alert alert-danger\">\n" +
    "                                        {{'Doctor not able to add review' | translate }}\n" +
    "                                    </div>\n" +
    "                                    <div ng-if=\"$root.auth.role_id == model.ConstUserType.User\" class=\"alert alert-danger\">\n" +
    "                                        <div ng-if=\"alreadyadded\">\n" +
    "                                            {{'You are not able to add more than one review for a doctor' | translate }}\n" +
    "                                        </div>\n" +
    "                                        <div ng-if=\"!isvisited\">\n" +
    "                                            {{'You are not able to add the review. Need to visit the doctor atleast once.' | translate }}\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"profile-review row\" ng-repeat=\"review in doctorReviews\" ng-if=\"doctorReviews.length > 0\">\n" +
    "                                <div class=\"col-sm-4 profile-review-author\">\n" +
    "                                    <h4>{{ review.created_at | dateFormat }}</h4>\n" +
    "                                    <span>{{'by '| translate  }} {{review.pet_name}}</span>\n" +
    "                                    <p>{{'(Verified Patient)' | translate }}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-8\">\n" +
    "                                    <div class=\"row separate-reviews\">\n" +
    "                                        <div class=\"col-sm-4\">\n" +
    "                                            <p>{{'General Opinion'| translate }}</p>\n" +
    "                                            <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"overAllRating\"\n" +
    "                            ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserReviews') > -1\"></input-stars>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-sm-4\">\n" +
    "                                            <p>{{'Patient Care'| translate }}</p>\n" +
    "                                            <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"overAllRating\"\n" +
    "                            ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserReviews') > -1\"></input-stars>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-sm-4\">\n" +
    "                                            <p>{{'Waiting Time'| translate }}</p>\n" +
    "                                            <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"overAllRating\"\n" +
    "                            ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserReviews') > -1\"></input-stars>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"clearfix review-msg\">\n" +
    "                                        <p>{{review.review}}</p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"alert alert-info\" ng-if=\"doctorReviews.length == 0\">\n" +
    "                                {{'Not yet reviewed'| translate }}\n" +
    "                            </div>\n" +
    "                            <div class=\"paging clearfix text-center\" ng-show=\"meta.pagination.total > 0\">\n" +
    "                                <uib-pagination previous-text=\"&#xf104\" next-text=\"&#xf105\" total-items=\"_metadata.total\" num-pages=\"meta.pagination.total_pages\"\n" +
    "                                    ng-model=\"currentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-link-numbers=\"true\"\n" +
    "                                    rotate=\"false\" items-per-page=\"meta.pagination.per_page\" ng-change=\"paginate()\"></uib-pagination>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-5\">\n" +
    "                    <div class=\"description-right\">\n" +
    "                         <div class=\"clinic-slider\">\n" +
    "                             <ul class=\"list-unstyled\" ng-if=\"imageDisplay\">\n" +
    "                                <li class=\"mySlides clearfix\" id=\"mySlides{{$index}}\" ng-repeat=\"clinicimage in clinicphotos\">\n" +
    "                                    <img ng-repeat=\"clinicimageThumb in clinicimage\" class=\"img-responsive col-xs-4\" ng-src=\"{{clinicimageThumb.thumb}}\"/>\n" +
    "                                </li>\n" +
    "                             </ul>\n" +
    "                             <div class=\"no-clinic\" ng-if=\"!imageDisplay\">\n" +
    "                                <h4 class=\"text-center\">{{'No Clinic images found !' | translate }}</h4>\n" +
    "                             </div>\n" +
    "                         </div>\n" +
    "                        <!-- <h3>{{'Make an appointment' | translate }}</h3>\n" +
    "                        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n" +
    "                            <p>{{'Choose doctors address or medical consultation center for the appointment' | translate }}</p>\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n" +
    "                                    <h4 class=\"panel-title\">\n" +
    "                                        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n" +
    "                                            {{'Clínica La Fontana, Calle Páez, La Victoria -  Aragua.' | translate }}\n" +
    "                                        </a>\n" +
    "                                    </h4>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n" +
    "                                    <h4 class=\"panel-title\">\n" +
    "                                        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n" +
    "                                            {{'Whats the reason for your visit?' | translate }}\n" +
    "                                        </a>\n" +
    "                                    </h4>\n" +
    "                                </div>\n" +
    "                                <div id=\"collapseTwo\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n" +
    "                                    <div class=\"panel-body\">\n" +
    "                                    {{'Tooth decay' | translate }}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n" +
    "                                    <h4 class=\"panel-title\">\n" +
    "                                        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\">\n" +
    "                                            {{'Health Insurance' | translate }}\n" +
    "                                        </a>\n" +
    "                                    </h4>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div> -->\n" +
    "                        <h3>{{'Available times for the appointment' | translate }}</h3>\n" +
    "                        <div class=\"appmt-details\">\n" +
    "                            <div class=\"\" ng-repeat=\"searchLists in worklocationLists\">\n" +
    "                                <h5 class=\"text-center\">{{searchLists.worklocationName}}</h5>\n" +
    "                                <div class=\"search-responsive\" id=\"{{searchLists.worklocationId}}\">\n" +
    "                                    <div class=\"search-result\" ng-if=\"searchLists.week_hender\">\n" +
    "                                        <h5 class=\"text-center\">{{model.siteCurrency}} {{searchLists.worklocationPrice}}</h5>\n" +
    "                                        <div class=\"week-hender\">\n" +
    "                                            <ul class=\"search-week-ul list-inline text-center\">\n" +
    "                                                <li class=\"search-left-arrow\">\n" +
    "                                                    <a href=\"javascript:void(0)\" ng-click=\"prevWeek(searchLists.worklocationId, $index)\"> <i class=\"fa fa-angle-left fa-2x\"></i></a>\n" +
    "                                                </li>\n" +
    "                                                <li>\n" +
    "                                                    <ul class=\"list-unstyled\">\n" +
    "                                                        <li>{{searchLists.days.today.day | translate}}</li>\n" +
    "                                                        <li>{{searchLists.days.today.date}}</li>\n" +
    "                                                    </ul>\n" +
    "                                                </li>\n" +
    "                                                <li>\n" +
    "                                                    <ul class=\"list-unstyled\">\n" +
    "                                                        <li>{{searchLists.days.day2.day | translate}}</li>\n" +
    "                                                        <li>{{searchLists.days.day2.date}}</li>\n" +
    "                                                    </ul>\n" +
    "                                                </li>\n" +
    "                                                <li>\n" +
    "                                                    <ul class=\"list-unstyled\">\n" +
    "                                                        <li>{{searchLists.days.day3.day | translate}}</li>\n" +
    "                                                        <li>{{searchLists.days.day3.date}}</li>\n" +
    "                                                    </ul>\n" +
    "                                                </li>\n" +
    "                                                <li class=\"bor-none\">\n" +
    "                                                    <ul class=\"list-unstyled\">\n" +
    "                                                        <li>{{searchLists.days.day4.day | translate}}</li>\n" +
    "                                                        <li>{{searchLists.days.day4.date}}</li>\n" +
    "                                                    </ul>\n" +
    "                                                </li>\n" +
    "                                                <li class=\"search-right-arrow\">\n" +
    "                                                    <a href=\"javascript:void(0)\" ng-click=\"nextWeek(searchLists.worklocationId, $index)\">\n" +
    "                                                        <i class=\"fa fa-angle-right fa-2x\"></i></a>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"doctor-list clearfix\">\n" +
    "                                            <div class=\"doctor-booking-details\">\n" +
    "                                                <ul class=\"search-week-ul list-inline text-center\" ng-if=\"searchLists.workslots.length != 0\">\n" +
    "                                                    <li>\n" +
    "                                                        <ul class=\"list-unstyled\" ui-if=\"!!searchLists.workslots[searchLists.days.today.day].length\">\n" +
    "                                                            <li ng-repeat=\"todaySlot in searchLists.workslots[searchLists.days.today.day] track by $index\">\n" +
    "                                                                <span ng-show=\"todaySlot != '--'\">\n" +
    "                                                                    <span ng-if=\"$index < searchLists.appointmentLoadMore\">\n" +
    "                                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{searchLists.days.today.dateFormatted}}/{{todaySlot}}/{{searchLists.worklocationId}}\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                <span ng-if=\"$index >= searchLists.appointmentLoadMore\" class=\"hide showmore js-showmore{{searchLists.worklocationId}}\">\n" +
    "                                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{searchLists.days.today.dateFormatted}}/{{todaySlot}}/{{searchLists.worklocationId}}\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                </span>\n" +
    "                                                                <span ng-show=\"todaySlot == '--'\" class=\"hide\">\n" +
    "                                                                    <span ng-if=\"$index < searchLists.appointmentLoadMore\">\n" +
    "                                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                <span ng-if=\"$index >= searchLists.appointmentLoadMore\" class=\"hide showmore js-showmore{{searchLists.worklocationId}}\">\n" +
    "                                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                </span>\n" +
    "                                                            </li>\n" +
    "                                                        </ul>\n" +
    "                                                    </li>\n" +
    "                                                    <li>\n" +
    "                                                        <ul class=\"list-unstyled\" ui-if=\"!!searchLists.workslots[searchLists.days.day2.day].length\">\n" +
    "                                                            <li ng-repeat=\"Day2 in searchLists.workslots[searchLists.days.day2.day] track by $index\">\n" +
    "                                                                <span ng-show=\"Day2 != '--'\">\n" +
    "                                                                    <span ng-if=\"$index < searchLists.appointmentLoadMore\">\n" +
    "                                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{searchLists.days.day2.dateFormatted}}/{{Day2}}/{{searchLists.worklocationId}}\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                <span ng-if=\"$index >= searchLists.appointmentLoadMore\" class=\"hide showmore js-showmore{{searchLists.worklocationId}}\">\n" +
    "                                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{searchLists.days.day2.dateFormatted}}/{{Day2}}/{{searchLists.worklocationId}}\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                </span>\n" +
    "                                                                <span ng-show=\"Day2 == '--'\" class=\"hide\">\n" +
    "                                                                    <span ng-if=\"$index < searchLists.appointmentLoadMore\">\n" +
    "                                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                <span ng-if=\"$index >= searchLists.appointmentLoadMore\" class=\"hide showmore js-showmore{{searchLists.worklocationId}}\">\n" +
    "                                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                </span>\n" +
    "                                                            </li>\n" +
    "                                                        </ul>\n" +
    "                                                    </li>\n" +
    "                                                    <li>\n" +
    "                                                        <ul class=\"list-unstyled\" ui-if=\"!!searchLists.workslots[searchLists.days.day3.day].length\">\n" +
    "                                                            <li ng-repeat=\"Day3 in searchLists.workslots[searchLists.days.day3.day] track by $index\">\n" +
    "                                                                <span ng-show=\"Day3 != '--'\">\n" +
    "                                                                    <span ng-if=\"$index < searchLists.appointmentLoadMore\">\n" +
    "                                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{searchLists.days.day3.dateFormatted}}/{{Day3}}/{{searchLists.worklocationId}}\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                <span ng-if=\"$index >= searchLists.appointmentLoadMore\" class=\"hide showmore js-showmore{{searchLists.worklocationId}}\">\n" +
    "                                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{searchLists.days.day3.dateFormatted}}/{{Day3}}/{{searchLists.worklocationId}}\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                </span>\n" +
    "                                                                <span ng-show=\"Day3 == '--'\" class=\"hide\">\n" +
    "                                                                    <span ng-if=\"$index < searchLists.appointmentLoadMore\">\n" +
    "                                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                <span ng-if=\"$index >= searchLists.appointmentLoadMore\" class=\"hide showmore js-showmore{{searchLists.worklocationId}}\">\n" +
    "                                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                </span>\n" +
    "                                                            </li>\n" +
    "                                                        </ul>\n" +
    "                                                    </li>\n" +
    "                                                    <li>\n" +
    "                                                        <ul class=\"list-unstyled\" ui-if=\"!!searchLists.workslots[searchLists.days.day4.day].length\">\n" +
    "                                                            <li ng-repeat=\"Day4 in searchLists.workslots[searchLists.days.day4.day] track by $index\">\n" +
    "                                                                <span ng-show=\"Day4 != '--'\">\n" +
    "                                                                    <span ng-if=\"$index < searchLists.appointmentLoadMore\">\n" +
    "                                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{searchLists.days.day4.dateFormatted}}/{{Day4}}/{{searchLists.worklocationId}}\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                <span ng-if=\"$index >= searchLists.appointmentLoadMore\" class=\"hide showmore js-showmore{{searchLists.worklocationId}}\">\n" +
    "                                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{searchLists.days.day4.dateFormatted}}/{{Day4}}/{{searchLists.worklocationId}}\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                </span>\n" +
    "                                                                <span ng-show=\"Day4 == '--'\" class=\"hide\">\n" +
    "                                                                    <span ng-if=\"$index < searchLists.appointmentLoadMore\">\n" +
    "                                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                <span ng-if=\"$index >= searchLists.appointmentLoadMore\" class=\"hide showmore js-showmore{{searchLists.worklocationId}}\">\n" +
    "                                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                                    </span>\n" +
    "                                                                </span>\n" +
    "                                                            </li>\n" +
    "                                                        </ul>\n" +
    "                                                    </li>\n" +
    "                                                </ul>\n" +
    "                                                <ul class=\"search-week-ul list-inline text-center\" ng-if=\"searchLists.workslots.length == 0\">\n" +
    "                                                    <li>\n" +
    "                                                        <div class=\"alert alert-danger ng-binding ng-scope\" >\n" +
    "                                                            {{'No Slots Available' | translate }}\n" +
    "                                                        </div>\n" +
    "                                                    </li>\n" +
    "                                                </ul>\n" +
    "                                                <div class=\"showlessmore\" ng-if=\"searchLists.show_button\">\n" +
    "                                                    <span class=\"showmore_btn js-showmore_btn{{searchLists.worklocationId}} show\">\n" +
    "                                                        <button ng-click=\"loadMore(searchLists.worklocationId)\" class=\"btn btn-dk-blue\">Más&nbsp;<i class=\"fa fa-angle-down\"></i></button>\n" +
    "                                                    </span>\n" +
    "                                                    <span class=\"showless_btn js-showless_btn{{searchLists.worklocationId}} hide\">\n" +
    "                                                        <button ng-click=\"showLess(searchLists.worklocationId)\" class=\"btn btn-red\">Menos&nbsp;<i class=\"fa fa-angle-up\"></i></button>\n" +
    "                                                    </span>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"doctor-description\">\n" +
    "                <h3 class=\"text-center\">{{\"Doctor's Description\" | translate }}</h3>\n" +
    "                <div ng-bind-html=\"model.user.user_profile.about_me\" ng-if=\"model.user.user_profile.about_me != ''\"></div>\n" +
    "                <div class=\"alert alert-danger\" ng-if=\"model.user.user_profile.about_me == ''\">\n" +
    "                    {{'No Description Added' | translate }}\n" +
    "                </div>\n" +
    "                <!--\n" +
    "                <div class=\"doc-descrip\">\n" +
    "                    <figure>\n" +
    "                        <img src=\"assets/img/doctor-description.jpg\" alt=\"doctor-description\" class=\"img-responsive\"/>\n" +
    "                        <figcaption>{{'Servicio Odontológico Integral' | translate }}</figcaption>\n" +
    "                    </figure>\n" +
    "                    <h3>{{'Limpieza bucal con fluorización, revisión y diagnóstico con radiografía ' | translate }}</h3>\n" +
    "                    <p>{{'¿Sabías qué un cepillado después de cada comida, una visita periódica al dentista, una limpieza bucal… son algunos de los elementos claves para garantizar una buena higiene bucal?' | translate }}</p>\n" +
    "                    <ul class=\"list-inline row\">\n" +
    "                        <li class=\"col-sm-4\">\n" +
    "                            <figure>\n" +
    "                                <img src=\"assets/img/description-one.jpg\" alt=\"description-one\" class=\"img-responsive\"/>\n" +
    "                            </figure>\n" +
    "                        </li>\n" +
    "                        <li class=\"col-sm-4\">\n" +
    "                            <figure>\n" +
    "                                <img src=\"assets/img/description-two.jpg\" alt=\"description-two\" class=\"img-responsive\"/>\n" +
    "                            </figure>\n" +
    "                        </li>\n" +
    "                        <li class=\"col-sm-4\">\n" +
    "                            <figure>\n" +
    "                                <img src=\"assets/img/description-three.jpg\" alt=\"description-three\" class=\"img-responsive\"/>\n" +
    "                            </figure>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                    <p>{{'Ofrece los últimos tratamientos en estética dental y ortodoncia invisible. Disponen de servicio de radiología para evitar traslados a otros centros y un equipo de odontólogos multidisciplinar e internacional.' | translate }}</p>\n" +
    "                </div>-->\n" +
    "            </div>\n" +
    "            <div class=\"ask-questions\">\n" +
    "                <div class=\"page-head\">\n" +
    "                    <h1>{{'Ask the Doctor'| translate }}</h1>\n" +
    "                </div>\n" +
    "                <div class=\"doctor-questions\">\n" +
    "                    <doctor-profile-questions></doctor-profile-questions>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"container appmt-details\">\n" +
    "            <!--<h2 class=\"text-center\">Book Appointment</h2>-->\n" +
    "            <!--<div class=\"col-md-8 col-lg-7 pull-right\" ng-repeat=\"searchLists in worklocationLists\">\n" +
    "                <h2 class=\"text-center\">{{searchLists.worklocationName}} - <span>{{today.year}}</span></h2>\n" +
    "                <div class=\"search-responsive\" id=\"{{searchLists.worklocationId}}\">\n" +
    "                    <div class=\"search-result\">\n" +
    "                        <div class=\"week-hender\">\n" +
    "                            <ul class=\"search-week-ul list-inline text-center\">\n" +
    "                                <li class=\"search-left-arrow\">\n" +
    "                                    <a href=\"javascript:void(0)\" ng-click=\"prevWeek(searchLists.worklocationId)\"> <i class=\"fa fa-angle-left fa-2x\"></i></a>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\">\n" +
    "                                        <li>{{today.day}}</li>\n" +
    "                                        <li>{{today.date}}</li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\">\n" +
    "                                        <li>{{day2.day}}</li>\n" +
    "                                        <li>{{day2.date}}</li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\">\n" +
    "                                        <li>{{day3.day}}</li>\n" +
    "                                        <li>{{day3.date}}</li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\">\n" +
    "                                        <li>{{day4.day}}</li>\n" +
    "                                        <li>{{day4.date}}</li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                                <li class=\"search-right-arrow\">\n" +
    "                                    <a href=\"javascript:void(0)\" ng-click=\"nextWeek(searchLists.worklocationId)\"> <i class=\"fa fa-angle-right fa-2x\"></i></a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"doctor-list clearfix\">\n" +
    "                            <div class=\"doctor-booking-details\">\n" +
    "                                <ul class=\"search-week-ul list-inline text-center\">\n" +
    "                                    <li>\n" +
    "                                        <ul class=\"list-unstyled\" ui-if=\"!!searchLists.workslots[today.day].length\">\n" +
    "                                            <li ng-repeat=\"todaySlot in searchLists.workslots[today.day] track by $index\">\n" +
    "                                                <span ng-show=\"todaySlot != '--'\">\n" +
    "                                                    <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{today.date}}/{{todaySlot}}\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                    </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{today.date}}/{{todaySlot}}\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                    </span>\n" +
    "                                                </span>\n" +
    "                                                <span ng-show=\"todaySlot == '--'\">\n" +
    "                                                    <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                    </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                    </span>\n" +
    "                                                </span>\n" +
    "                                            </li>\n" +
    "                                        </ul>\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        <ul class=\"list-unstyled\" ui-if=\"!!searchLists.workslots[day2.day].length\">\n" +
    "                                            <li ng-repeat=\"Day2 in searchLists.workslots[day2.day] track by $index\">\n" +
    "                                                <span ng-show=\"Day2 != '--'\">\n" +
    "                                                    <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{day2.date}}/{{Day2}}\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                    </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{day2.date}}/{{Day2}}\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                    </span>\n" +
    "                                                </span>\n" +
    "                                                <span ng-show=\"Day2 == '--'\">\n" +
    "                                                    <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                    </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                    </span>\n" +
    "                                                </span>\n" +
    "                                            </li>\n" +
    "                                        </ul>\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        <ul class=\"list-unstyled\" ui-if=\"!!searchLists.workslots[day3.day].length\">\n" +
    "                                            <li ng-repeat=\"Day3 in searchLists.workslots[day3.day] track by $index\">\n" +
    "                                                <span ng-show=\"Day3 != '--'\">\n" +
    "                                                    <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{day3.date}}/{{Day3}}\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                    </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{day3.date}}/{{Day3}}\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                    </span>\n" +
    "                                                </span>\n" +
    "                                                <span ng-show=\"Day3 == '--'\">\n" +
    "                                                    <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                    </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                    </span>\n" +
    "                                                </span>\n" +
    "                                            </li>\n" +
    "                                        </ul>\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        <ul class=\"list-unstyled\" ui-if=\"!!searchLists.workslots[day4.day].length\">\n" +
    "                                            <li ng-repeat=\"Day4 in searchLists.workslots[day4.day] track by $index\">\n" +
    "                                                <span ng-show=\"Day4 != '--'\">\n" +
    "                                                    <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{day4.date}}/{{Day4}}\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                    </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                        <a href=\"#/appointments/booking/{{model.user.id}}/{{day4.date}}/{{Day4}}\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                    </span>\n" +
    "                                                </span>\n" +
    "                                                <span ng-show=\"Day4 == '--'\">\n" +
    "                                                    <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                    </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                        <a href=\"javascript:void(0)\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                    </span>\n" +
    "                                                </span>\n" +
    "                                            </li>\n" +
    "                                        </ul>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                                <div class=\"showlessmore\" ng-if=\"searchLists[today.day].length > appointmentLoadMore || searchLists[day1.day].length > appointmentLoadMore || searchLists[day2.day].length > appointmentLoadMore || searchLists[day3.day].length > appointmentLoadMore || searchLists[day4.day].length > appointmentLoadMore || searchLists[day5.day].length > appointmentLoadMore || searchLists[day6.day].length > appointmentLoadMore || searchLists[day7.day].length > appointmentLoadMore\">\n" +
    "                                    <span class=\"showmore_btn show\">\n" +
    "                                        <button ng-click=\"loadMore()\" class=\"btn btn-dk-blue\">Más&nbsp;<i class=\"fa fa-angle-down\"></i></button>\n" +
    "                                    </span>\n" +
    "                                    <span class=\"showless_btn hide\">\n" +
    "                                        <button ng-click=\"showLess()\" class=\"btn btn-red\">Menos&nbsp;<i class=\"fa fa-angle-up\"></i></button>\n" +
    "                                    </span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>-->\n" +
    "            <!--<div class=\"col-md-4 col-lg-5\">\n" +
    "                <div class=\"qualify-exp\">\n" +
    "                    <h3>{{'Qualifications and Experience'| translate  }}</h3>\n" +
    "                    <div class=\"form-group clearfix specialty\">\n" +
    "                        <label>{{'Specialties'| translate }}</label>\n" +
    "                        <ul class=\"list-unstyled field-data\">\n" +
    "                            <li class=\"sg-para3 sg-navy specialty\" ng-repeat=\"specialty in model.user.user_profile.specialties\">\n" +
    "                                {{specialty.name | translate}}\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        \n" +
    "                    </div>\n" +
    "                    <div class=\"form-group clearfix language\">\n" +
    "                        <label>{{'Languages Spoken'| translate }}</label>\n" +
    "                        <ul class=\"list-unstyled field-data\">\n" +
    "                            <li class=\"sg-para3 sg-navy language\" ng-repeat=\"language in model.user.user_profile.languages\">\n" +
    "                                {{language.name}}\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group clearfix education\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserEducations') > -1\">\n" +
    "                        <label>{{'Education'| translate }}</label>\n" +
    "                        <ul class=\"list-unstyled field-data\">\n" +
    "                            <li class=\"sg-para3 sg-navy\" ng-repeat=\"education in model.user.user_profile.educations\">\n" +
    "                                {{education.education}} - {{education.location}} - {{education.organization}}\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group clearfix certificate\">\n" +
    "                        <label>{{'Board Certifications'| translate }}</label>\n" +
    "                        <div class=\"field-data\" hm-read-more hm-text=\"{{model.user.user_profile.board_certifications}}\" hm-limit=\"500\" hm-more-text=\"leer mas\"\n" +
    "                            hm-less-text=\"read less\" hm-dots-class=\"dots\" hm-link-class=\"links\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group clearfix statement\">\n" +
    "                        <label>{{'Professional Statement'| translate }}</label>\n" +
    "                        <div class=\"field-data\" hm-read-more hm-text=\"{{model.user.user_profile.about_me}}\" hm-limit=\"500\" hm-more-text=\"leer mas\"\n" +
    "                            hm-less-text=\"read less\" hm-dots-class=\"dots\" hm-link-class=\"links\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group clearfix membership\">\n" +
    "                        <label>{{'Memberships'| translate }}</label>\n" +
    "                        <div class=\"field-data\">\n" +
    "                            {{model.user.user_profile.memberships}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group clearfix awards\">\n" +
    "                        <label>{{'Latinomedica Awards'| translate }}</label>\n" +
    "                         <div ng-repeat=\"badges in model.userBadges\">\n" +
    "                                <div class=\"col-sm-6 col-md-3\" > \n" +
    "                                    <div class=\"thumbnail\">                         \n" +
    "                                        <img class=\"img-responsive\" style=\"max-width:100%\" ng-src=\"{{badges.thumb.small}}\">\n" +
    "    \n" +
    "                                    </div> \n" +
    "                                </div> \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>-->\n" +
    "            <!--<div class=\"col-md-12 book-instruction\">\n" +
    "                <h3>{{'Booking Instructions'| translate }}</h3>\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        {{model.user.user_profile.booking_instructions}}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>-->\n" +
    "            <!--<div class=\"col-md-12 patient-reviews\">\n" +
    "                <div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserReviews') > - 1\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"\" id=\"VerifiedPatientReviews\">\n" +
    "                            <h3 class=\"pull-left\">{{'Patient verification and reviews'| translate }}</h3>\n" +
    "                            <div class=\"clearfix\"></div>\n" +
    "                            <div ng-if=\"isvisited\">\n" +
    "                                <div ng-if=\"reviewEnable\">\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <rating-stars></rating-stars>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-if=\"!reviewEnable\">\n" +
    "                                <div class=\"no-review\">\n" +
    "                                    <div ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\" class=\"alert alert-danger\">\n" +
    "                                        Doctor no puede agregar opinión\n" +
    "                                    </div>\n" +
    "                                    <div ng-if=\"$root.auth.role_id == model.ConstUserType.User\" class=\"alert alert-danger\">\n" +
    "                                        <div ng-if=\"alreadyadded\">\n" +
    "                                            No puedes agregar más de una reseña para un médico.\n" +
    "                                        </div>\n" +
    "                                        <div ng-if=\"!isvisited\">\n" +
    "                                            No puedes añadir la opinión. Necesidad de visitar al médico al menos una vez.\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"profile-review row\" ng-repeat=\"review in doctorReviews\" ng-if=\"doctorReviews.length > 0\">\n" +
    "                                <div class=\"col-md-5 col-lg-6 profile-review-author\">\n" +
    "                                    <h4>{{ review.created_at | dateFormat }}</h4>\n" +
    "                                    <span>{{'by '| translate  }} {{review.pet_name}}</span>\n" +
    "                                    <span>{{'(Verified Patient)' | translate }}</span>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-7 col-lg-6\">\n" +
    "                                    <div class=\"row separate-reviews\">\n" +
    "                                        <div class=\"col-md-4\">\n" +
    "                                            <p>{{'Overall Rating'| translate }}</p>\n" +
    "                                            <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star-o\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"review.bedside_rate\"></input-stars>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-4\">\n" +
    "                                            <p>{{'Bedside Manner'| translate }}</p>\n" +
    "                                            <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star-o\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"review.bedside_rate\"></input-stars>\n" +
    "                                            <rating-stars></rating-stars>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-4\">\n" +
    "                                            <p>{{'Wait Time'| translate }}</p>\n" +
    "                                            <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star-o\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"review.waittime_rate\"></input-stars>\n" +
    "                                            <rating-stars></rating-stars>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"clearfix review-msg\">\n" +
    "                                        <p>{{review.review}}</p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"alert alert-info\" ng-show=\"metadata.total === 0\">{{'Not yet reviewed'| translate }}</div>\n" +
    "                            <div class=\"paging clearfix text-center\" ng-show=\"meta.pagination.total > 0\">\n" +
    "                                <uib-pagination previous-text=\"&#xf104\" next-text=\"&#xf105\" total-items=\"_metadata.total\" num-pages=\"meta.pagination.total_pages\"\n" +
    "                                    ng-model=\"currentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-link-numbers=\"true\"\n" +
    "                                    rotate=\"false\" items-per-page=\"meta.pagination.per_page\" ng-change=\"paginate()\"></uib-pagination>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>-->\n" +
    "            <!--<div class=\"col-md-12 socialshare\">\n" +
    "                <a facebook class=\"facebookShare\" data-url='http://google.com' data-shares='shares'>{{ 'Share' | translate }}</a>\n" +
    "                <a twitter  data-lang=\"en\" data-count='horizontal' data-url='http://google.com' data-via='notsosleepy' data-size=\"medium\" data-text='Testing Twitter Share' ></a>\n" +
    "                <div gplus class=\"g-plus\" data-size=\"tall\" data-annotation=\"bubble\" data-href='http://google.com' data-action='share'></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-12 doctor-hobbies\">\n" +
    "                <h3>{{'Hobbies'| translate }}</h3>\n" +
    "                <div ng-bind-html=\"model.user.user_profile.hobbies\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-12 doctor-html-content\">\n" +
    "                <h3>{{'Html Content'| translate }}</h3>\n" +
    "                <div ng-bind-html=\"model.user.user_profile.html_info | trustedhtml\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-12 Maps\">\n" +
    "                <h3>Google Maps</h3>\n" +
    "                <location-directions></location-directions>\n" +
    "            </div>-->\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<!-- Start: Contact -->\n" +
    "<!--<div class=\"contact-block text-center\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-md-7 footer-logo\">\n" +
    "                <img src=\"assets/img/footer-logo.png\" alt=\"logo\" />\n" +
    "                <p>{{'Need help booking online? (1234) 123-1234' | translate }}</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-5 text-right\">\n" +
    "                <a class=\"btn btn-red\" href=\"javascript:void(0);\">{{'SERVICE@ABS.COM' | translate }}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>-->\n" +
    "<!-- End: Contact -->");
}]);

angular.module("Home/featured_specialist_doctor.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Home/featured_specialist_doctor.tpl.html",
    "<div ng-if=\"featuredDoctorsLength\">\n" +
    "    <slick lazy-load='ondemand' data=\"featuredDoctors\" responsive=\"responsiveSlick\" slides-to-show=5 slides-to-scroll=1 class=\"slider lazy slick-slider\">\n" +
    "        <button type=\"button\" data-role=\"none\" class=\"slick-prev slick-arrow\" aria-label=\"Previous\" role=\"button\" style=\"display: block;\">                	\n" +
    "            <img src=\"assets/img/left-slick.png\" alt=\"Previous\" class=\"img-responsive\" />\n" +
    "        </button>\n" +
    "        <div class=\"specialist-list image\" ng-repeat=\"doctors in featuredDoctors\">\n" +
    "            <div class=\"border-right\">\n" +
    "                <div class=\"green-box\">\n" +
    "                    <figure class=\"avatar\">\n" +
    "                        <div ng-class=\"(doctors.is_verified == '1') ? 'certified-tag' : ''\" >\n" +
    "                            <a href=\"#/doctor/{{doctors.username}}\"><img data-lazy=\"{{doctors.attachments.data.thumb.large}}\"\n" +
    "                                alt=\"specialists\" class=\"img-responsive img-circle\" /></a>\n" +
    "                        </div>\n" +
    "                    </figure>\n" +
    "                    <img data-lazy=\"assets/img/specialist-logo.png\" alt=\"specialist-logo\" class=\"img-responsive avatar-logo\" />\n" +
    "                </div>\n" +
    "                <div class=\"specialist-detail\">\n" +
    "                    <h4>\n" +
    "                        <a href=\"#/doctor/{{doctors.username}}\">\n" +
    "                            {{doctors.user_profile.data.display_name}}\n" +
    "                        </a>\n" +
    "                    </h4>\n" +
    "                    <p>{{ doctors.user_profile.data.practice_name | translate}}</p>\n" +
    "                    <span ng-if=\"doctors.user_profile.data.specialties.length > 0\">{{ doctors.user_profile.data.specialties[0].name | translate}}</span>\n" +
    "                    <div class=\"rating\">\n" +
    "                        <div class=\"specialist-rating\">\n" +
    "                            <div class=\"specialist-rating2\" >\n" +
    "								<input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctors.overall_avg_rating\"></input-stars>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"specialist-footer clearfix\">\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <a href=\"javascript:void(0)\">\n" +
    "                            <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> {{doctors.points}}\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <a href=\"javascript:void(0)\">\n" +
    "                            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{doctors.doctor_view_count}}\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 share\">\n" +
    "                        <a href=\"javascript:void(0)\" class=\"js-share-open\" data-index=\"{{$index}}\" >\n" +
    "                            <i class=\"fa fa-share-alt\" aria-hidden=\"true\" ></i>\n" +
    "                        </a>\n" +
    "                        <div class=\"social-share js-social-share\" id=\"js-social-share{{$index}}\">\n" +
    "                            <div><a facebook class=\"facebookShare\" data-url='http://google.com' data-shares='shares'>{{ 'Share' | translate }}</a></div>\n" +
    "                            <div><a twitter  data-lang=\"en\" data-count='horizontal' data-url='http://google.com' data-via='notsosleepy' data-size=\"medium\" data-text='Testing Twitter Share' ></a></div>\n" +
    "                            <div gplus class=\"g-plus\" data-size=\"tall\" data-annotation=\"bubble\" data-href='http://google.com' data-action='share'></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <button type=\"button\" data-role=\"none\" class=\"slick-next slick-arrow\" aria-label=\"Next\" role=\"button\" style=\"display: block;\">\n" +
    "            <img src=\"assets/img/right-slick.png\" alt=\"Next\" class=\"img-responsive\" />\n" +
    "        </button>\n" +
    "    </slick>\n" +
    "</div>");
}]);

angular.module("Home/home.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Home/home.tpl.html",
    "<div class=\"homePage\">\n" +
    "	<!-- Start: Banner -->\n" +
    "    <div class=\"banner text-center fa-inverse\">\n" +
    "        <div class=\"container\">\n" +
    "        	<figure>\n" +
    "               <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive\"/>\n" +
    "            </figure>\n" +
    "            <h1 data-uk-scrollspy=\"{cls:'uk-animation-slide-top', delay:100}\">¡Encuentra un doctor!</h1>\n" +
    "            <h3 data-uk-scrollspy=\"{cls:'uk-animation-slide-top', delay:100}\">Su directorio medico</h3>\n" +
    "            <h5 data-uk-scrollspy=\"{cls:'uk-animation-slide-top', delay:100}\">Sólo médicos y profesionales de la salud</h5>\n" +
    "            <form data-uk-scrollspy=\"{cls:'uk-animation-slide-bottom', delay:100}\" class=\"home-search form-inline col-md-12\" name=\"homeSearchForm\" ng-submit=\"model.homesearch(homeSearchForm)\" novalidate>\n" +
    "            	<div class=\"row\">\n" +
    "                    <div class=\"form-group speciality col-md-6\">\n" +
    "                       <div angucomplete-alt id=\"ex1\" ng-model=\"model.doctor\" placeholder=\"Especialidad, Nombre del Doctor\" maxlength=\"50\" pause=\"100\" selected-object=\"selectedCountry\" local-data=\"autocomplete\" search-fields=\"name\" title-field=\"name\" minlength=\"1\" image-field=\"image\" input-class=\"form-control form-control-small\" match-class=\"highlight\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group city col-md-2\">\n" +
    "                        <select class=\"form-control\" ng-model=\"model.form_city\" name=\"form_city\">\n" +
    "                            <option value=\"\">Ciudad</option>\n" +
    "                            <option ng-repeat=\"citiesliList in citiesliLists\" value=\"{{citiesliList.id}}\">{{citiesliList.name}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group insurance col-md-3\"> \n" +
    "                        <select class=\"form-control\" ng-model=\"model.form_insurances\" name=\"form_insurances\">\n" +
    "                            <option value=\"\">Seguro de Salud</option>\n" +
    "                            <option ng-repeat=\"insurance in insurances\" value=\"{{insurance.id}}\">{{insurance.name}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group form-btn col-md-1\">\n" +
    "                        <button class=\"btn btn-block btn-sblue btn-animate\" type=\"submit\"><i class=\"fa fa-search fa-inverse\" aria-hidden=\"true\"></i></button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Banner -->\n" +
    "    \n" +
    "    <!-- Start: start Doctor -->\n" +
    "   	<div class=\"star-doctor\">\n" +
    "    	<div class=\"container\">\n" +
    "        	<div class=\"row\">\n" +
    "            	<div class=\"col-md-6 col-lg-7 star-doc-left\" data-uk-scrollspy=\"{cls:'uk-animation-slide-left', delay:400}\">\n" +
    "                	<h2>Usted es un doctor de cinco estrellas?</h2>\n" +
    "                    <h3>Indique su especialidad para llegar a millones de pacientes</h3>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li>Atraer a nuevos pacientes</li>\n" +
    "                        <li>Construir y fortalecer su reputación online</li>\n" +
    "                        <li>Proporcionar experiencia del paciente Primium</li>\n" +
    "                    </ul>\n" +
    "                    <a href=\"#/users/practice\" class=\"btn\" ng-if=\"!$root.auth\">Regístrate como Doctor en {{$root.settings['site.name']}}</a>\n" +
    "                </div>\n" +
    "                <figure class=\"col-md-6 col-lg-5\">\n" +
    "                	<img data-uk-scrollspy=\"{cls:'uk-animation-slide-right', delay:400}\" src=\"assets/img/bg-doctor.png\" alt=\"doctor\" class=\"img-responsive\" />\n" +
    "                    <div class=\"\">\n" +
    "                    	<div class=\"star-rating\">\n" +
    "                            <div class=\"star-rating2\" style=\"width:80%;\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </figure>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: start Doctor -->\n" +
    "    \n" +
    "    <!-- Start: App -->\n" +
    "    <div class=\"app-link\">\n" +
    "    	<div class=\"container\">\n" +
    "        	<div class=\"row\">\n" +
    "            	<div class=\"col-md-7 hidden-sm hidden-xs\">\n" +
    "                	<figure>\n" +
    "                    	<img src=\"assets/img/app-img.png\" alt=\"app\" class=\"img-responsive\" />\n" +
    "                        <ul class=\"list-unstyled\">\n" +
    "                        	<li>\n" +
    "                            	<a href=\"javascript:void(0)\">\n" +
    "                            		<img src=\"assets/img/android-app.png\" alt=\"android\" class=\"img-responsive\" />\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                            	<a href=\"javascript:void(0)\">\n" +
    "                            		<img src=\"assets/img/iphone-app.png\" alt=\"iphone\" class=\"img-responsive\" />\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                            	<a href=\"javascript:void(0)\">\n" +
    "                            		<img src=\"assets/img/windows-app.png\" alt=\"windows\" class=\"img-responsive\" />\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-5\">\n" +
    "                	<h2>Obtén la aplicación de {{$root.settings['site.name']}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li>Compruebe el mapa de los médicos en su red de seguros</li>\n" +
    "                        <li>Vea los comentarios de los pacientes para ayudarle a elegir el médico adecuado</li>\n" +
    "                        <li>Consulte el horario de cualquier médico disponible, y haga clic para reservar al instante</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-7 visible-sm visible-xs\">\n" +
    "                	<figure>\n" +
    "                    	<img src=\"assets/img/app-img.png\" alt=\"app\" class=\"img-responsive\" />\n" +
    "                        <ul class=\"list-unstyled\">\n" +
    "                        	<li>\n" +
    "                            	<a href=\"javascript:void(0)\">\n" +
    "                            		<img src=\"assets/img/android-app.png\" alt=\"android\" class=\"img-responsive\" />\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                            	<a href=\"javascript:void(0)\">\n" +
    "                            		<img src=\"assets/img/iphone-app.png\" alt=\"iphone\" class=\"img-responsive\" />\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                            	<a href=\"javascript:void(0)\">\n" +
    "                            		<img src=\"assets/img/windows-app.png\" alt=\"windows\" class=\"img-responsive\" />\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: App -->    \n" +
    "    <!-- Start: Related Practices -->\n" +
    "    <div class=\"related-practice text-center\">\n" +
    "    	<div class=\"container\">\n" +
    "        	<div data-uk-scrollspy=\"{cls:'uk-animation-fade', delay:100}\">\n" +
    "                <h2>Especialistas Destacados</h2>\n" +
    "                <!--<p>{{'Save your time by searching the doctors based on the key ratings of the practices.' | translate }}</p>-->\n" +
    "            </div>\n" +
    "\n" +
    "            <!--<ul class=\"list-unstyled thumb-block row\">\n" +
    "            	<li class=\"col-md-3 col-sm-6\" data-uk-scrollspy=\"{cls:'uk-animation-scale-up', delay:200}\" ng-repeat=\"bestRatedDoctor in bestRatedDoctors\">\n" +
    "                	<div class=\"thumbnail\">\n" +
    "                        <a href=\"#/doctor/{{bestRatedDoctor.username}}\" title=\"{{bestRatedDoctor.username}}\" class=\"\">\n" +
    "                            <img ng-src=\"{{bestRatedDoctor.attachments.thumb.large}}\" alt=\"{{bestRatedDoctor.user_profile.specialties[0]['name']}}\" />\n" +
    "                        </a>\n" +
    "                        <div class=\"caption text-left\">\n" +
    "                        	<h3 class=\"text-left\">\n" +
    "                            	<a href=\"#/doctor/{{bestRatedDoctor.username}}\" title=\"{{bestRatedDoctor.username}}\" class=\"\">\n" +
    "                                	{{bestRatedDoctor.user_profile.first_name }} {{bestRatedDoctor.user_profile.last_name}} - {{bestRatedDoctor.user_profile.specialties[0]['name']}}\n" +
    "                                </a>\n" +
    "                            </h3>\n" +
    "                            <p class=\"text-left\">{{bestRatedDoctor.user_profile.about_me | limitTo: 75}}</p>\n" +
    "                            <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"bestRatedDoctor.overall_avg_rating\"></input-stars>\n" +
    "                            <p class=\"text-left\">{{bestRatedDoctor.user_profile.address}},{{bestRatedDoctor.user_profile.postal_code}} {{bestRatedDoctor.user_profile.city.name}}, {{bestRatedDoctor.user_profile.country.name}}</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>-->    \n" +
    "            <!-- Dynamic Data for Featured Doctors --> \n" +
    "            <featured-specialist-doctor></featured-specialist-doctor>\n" +
    "            <featured-specialist-doctor-2></featured-specialist-doctor-2>\n" +
    "            <!--<slick lazy-load='ondemand' slides-to-show=5 slides-to-scroll=1 class=\"slider lazy slick-slider\">\n" +
    "            	<button type=\"button\" data-role=\"none\" class=\"slick-prev slick-arrow\" aria-label=\"Previous\" role=\"button\" style=\"display: block;\">                	\n" +
    "	            	<img src=\"assets/img/left-slick.png\" alt=\"Previous\" class=\"img-responsive\" />\n" +
    "                </button>\n" +
    "                <div class=\"specialist-list image\">\n" +
    "                    <div class=\"border-right\">\n" +
    "                        <div class=\"green-box\">\n" +
    "                            <figure class=\"avatar\">\n" +
    "                                <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive img-circle\" />\n" +
    "                            </figure>\n" +
    "                            <img src=\"assets/img/specialist-logo.png\" alt=\"specialist-logo\" class=\"img-responsive avatar-logo\" />\n" +
    "                        </div>\n" +
    "                        <h4>Dr. Julio C. Castro</h4>\n" +
    "                        <p>Dentist</p>\n" +
    "                        <span>ARAGUA - LA VICTORIA</span>\n" +
    "                        <div class=\"rating\">\n" +
    "                            <div class=\"specialist-rating\">\n" +
    "                                <div class=\"specialist-rating2\" style=\"width:80%\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <p class=\"specialist-footer clearfix\">\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> 5000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 11000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-2\">\n" +
    "                            <a href=\"javascript:void(0)\" class=\"share\">\n" +
    "                                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"specialist-list image\">\n" +
    "                    <div class=\"border-right\">\n" +
    "                        <div class=\"green-box\">\n" +
    "                            <figure class=\"avatar\">\n" +
    "                                <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive img-circle\" />\n" +
    "                            </figure>\n" +
    "                            <img src=\"assets/img/specialist-logo.png\" alt=\"specialist-logo\" class=\"img-responsive avatar-logo\" />\n" +
    "                        </div>\n" +
    "                        <h4>Dr. Julio C. Castro</h4>\n" +
    "                        <p>Dentist</p>\n" +
    "                        <span>ARAGUA - LA VICTORIA</span>\n" +
    "                        <div class=\"rating\">\n" +
    "                            <div class=\"specialist-rating\">\n" +
    "                                <div class=\"specialist-rating2\" style=\"width:80%\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <p class=\"specialist-footer clearfix\">\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> 5000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 11000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-2\">\n" +
    "                            <a href=\"javascript:void(0)\" class=\"share\">\n" +
    "                                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"specialist-list image\">\n" +
    "                    <div class=\"border-right\">\n" +
    "                        <div class=\"green-box\">\n" +
    "                            <figure class=\"avatar\">\n" +
    "                                <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive img-circle\" />\n" +
    "                            </figure>\n" +
    "                            <img src=\"assets/img/specialist-logo.png\" alt=\"specialist-logo\" class=\"img-responsive avatar-logo\" />\n" +
    "                        </div>\n" +
    "                        <h4>Dr. Julio C. Castro</h4>\n" +
    "                        <p>Dentist</p>\n" +
    "                        <span>ARAGUA - LA VICTORIA</span>\n" +
    "                        <div class=\"rating\">\n" +
    "                            <div class=\"specialist-rating\">\n" +
    "                                <div class=\"specialist-rating2\" style=\"width:80%\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <p class=\"specialist-footer clearfix\">\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> 5000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 11000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-2\">\n" +
    "                            <a href=\"javascript:void(0)\" class=\"share\">\n" +
    "                                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"specialist-list image\">\n" +
    "                    <div class=\"border-right\">\n" +
    "                        <div class=\"green-box\">\n" +
    "                            <figure class=\"avatar\">\n" +
    "                                <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive img-circle\" />\n" +
    "                            </figure>\n" +
    "                            <img src=\"assets/img/specialist-logo.png\" alt=\"specialist-logo\" class=\"img-responsive avatar-logo\" />\n" +
    "                        </div>\n" +
    "                        <h4>Dr. Julio C. Castro</h4>\n" +
    "                        <p>Dentist</p>\n" +
    "                        <span>ARAGUA - LA VICTORIA</span>\n" +
    "                        <div class=\"rating\">\n" +
    "                            <div class=\"specialist-rating\">\n" +
    "                                <div class=\"specialist-rating2\" style=\"width:80%\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <p class=\"specialist-footer clearfix\">\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> 5000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 11000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-2\">\n" +
    "                            <a href=\"javascript:void(0)\" class=\"share\">\n" +
    "                                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"specialist-list image\">\n" +
    "                    <div class=\"border-right\">\n" +
    "                        <div class=\"green-box\">\n" +
    "                            <figure class=\"avatar\">\n" +
    "                                <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive img-circle\" />\n" +
    "                            </figure>\n" +
    "                            <img src=\"assets/img/specialist-logo.png\" alt=\"specialist-logo\" class=\"img-responsive avatar-logo\" />\n" +
    "                        </div>\n" +
    "                        <h4>Dr. Julio C. Castro</h4>\n" +
    "                        <p>Dentist</p>\n" +
    "                        <span>ARAGUA - LA VICTORIA</span>\n" +
    "                        <div class=\"rating\">\n" +
    "                            <div class=\"specialist-rating\">\n" +
    "                                <div class=\"specialist-rating2\" style=\"width:80%\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <p class=\"specialist-footer clearfix\">\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> 5000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 11000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-2\">\n" +
    "                            <a href=\"javascript:void(0)\" class=\"share\">\n" +
    "                                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>                    \n" +
    "                <div class=\"specialist-list image\">\n" +
    "                    <div class=\"border-right\">\n" +
    "                        <div class=\"green-box\">\n" +
    "                            <figure class=\"avatar\">\n" +
    "                                <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive img-circle\" />\n" +
    "                            </figure>\n" +
    "                            <img src=\"assets/img/specialist-logo.png\" alt=\"specialist-logo\" class=\"img-responsive avatar-logo\" />\n" +
    "                        </div>\n" +
    "                        <h4>Dr. Julio C. Castro</h4>\n" +
    "                        <p>Dentist</p>\n" +
    "                        <span>ARAGUA - LA VICTORIA</span>\n" +
    "                        <div class=\"rating\">\n" +
    "                            <div class=\"specialist-rating\">\n" +
    "                                <div class=\"specialist-rating2\" style=\"width:80%\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <p class=\"specialist-footer clearfix\">\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> 5000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 11000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-2\">\n" +
    "                            <a href=\"javascript:void(0)\" class=\"share\">\n" +
    "                                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>                    \n" +
    "                <div class=\"specialist-list image\">\n" +
    "                    <div class=\"border-right\">\n" +
    "                        <div class=\"green-box\">\n" +
    "                            <figure class=\"avatar\">\n" +
    "                                <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive img-circle\" />\n" +
    "                            </figure>\n" +
    "                            <img src=\"assets/img/specialist-logo.png\" alt=\"specialist-logo\" class=\"img-responsive avatar-logo\" />\n" +
    "                        </div>\n" +
    "                        <h4>Dr. Julio C. Castro</h4>\n" +
    "                        <p>Dentist</p>\n" +
    "                        <span>ARAGUA - LA VICTORIA</span>\n" +
    "                        <div class=\"rating\">\n" +
    "                            <div class=\"specialist-rating\">\n" +
    "                                <div class=\"specialist-rating2\" style=\"width:80%\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <p class=\"specialist-footer clearfix\">\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> 5000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 11000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-2\">\n" +
    "                            <a href=\"javascript:void(0)\" class=\"share\">\n" +
    "                                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>                    \n" +
    "                <div class=\"specialist-list image\">\n" +
    "                    <div class=\"border-right\">\n" +
    "                        <div class=\"green-box\">\n" +
    "                            <figure class=\"avatar\">\n" +
    "                                <img src=\"assets/img/specialists.png\" alt=\"specialists\" class=\"img-responsive img-circle\" />\n" +
    "                            </figure>\n" +
    "                            <img src=\"assets/img/specialist-logo.png\" alt=\"specialist-logo\" class=\"img-responsive avatar-logo\" />\n" +
    "                        </div>\n" +
    "                        <h4>Dr. Julio C. Castro</h4>\n" +
    "                        <p>Dentist</p>\n" +
    "                        <span>ARAGUA - LA VICTORIA</span>\n" +
    "                        <div class=\"rating\">\n" +
    "                            <div class=\"specialist-rating\">\n" +
    "                                <div class=\"specialist-rating2\" style=\"width:80%\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <p class=\"specialist-footer clearfix\">\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> 5000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-5\">\n" +
    "                            <a href=\"javascript:void(0)\">\n" +
    "                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 11000\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                            <span class=\"col-md-2\">\n" +
    "                            <a href=\"javascript:void(0)\" class=\"share\">\n" +
    "                                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n" +
    "                            </a>\n" +
    "                            </span>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <button type=\"button\" data-role=\"none\" class=\"slick-next slick-arrow\" aria-label=\"Next\" role=\"button\" style=\"display: block;\">\n" +
    "                    <img src=\"assets/img/right-slick.png\" alt=\"Next\" class=\"img-responsive\" />\n" +
    "                </button>\n" +
    "            </slick>-->\n" +
    "            <!--<a href=\"#/search?is_online_booking=true&specialty_id=1\" class=\"btn\" data-uk-scrollspy=\"{cls:'uk-animation-fade', delay:800}\">{{'View All' | translate }}</a>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Related Practices -->\n" +
    "    \n" +
    "    <!-- Start: Book Appointment -->\n" +
    "    <!--<div class=\"book-appmt text-center\">\n" +
    "    	<div class=\"container\">\n" +
    "        	<div class=\"paging-head\" data-uk-scrollspy=\"{cls:'uk-animation-fade', delay:100}\">\n" +
    "                <h2 class=\"text-center\">{{'Find the suitable doctors to book the appointments' | translate }}</h2>\n" +
    "                <p>{{'Choose the best time for you. Just a click to book.' | translate }}</p>\n" +
    "            </div>\n" +
    "            <ul class=\"list-unstyled row\">\n" +
    "            	<li class=\"col-md-3 col-sm-6\" data-uk-scrollspy=\"{cls:'uk-animation-scale-up', delay:200}\">\n" +
    "                	<div class=\"doctor-list\">\n" +
    "                    	<span><img src=\"assets/img/search.png\" alt=\"search\" /></span>\n" +
    "                        <h3>{{'Search doctor, 24/7' | translate }}</h3>\n" +
    "                        <p>{{'Look for the appropriate specialist doctors online for treating your ailments.' | translate }}</p>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li class=\"col-md-3 col-sm-6\" data-uk-scrollspy=\"{cls:'uk-animation-scale-up', delay:500}\">\n" +
    "                	<div class=\"doctor-list\">\n" +
    "                    	<span><img src=\"assets/img/stethoscope.png\" alt=\"stethoscope\" /></span>\n" +
    "                        <h3>{{'Choose best practice' | translate }} </h3>\n" +
    "                        <p>{{'Make a decision in choosing the specialist doctors for each and every health issue.' | translate }}</p>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li class=\"col-md-3 col-sm-6\" data-uk-scrollspy=\"{cls:'uk-animation-scale-up', delay:800}\">\n" +
    "                	<div class=\"doctor-list\">\n" +
    "                    	<span><img src=\"assets/img/ambulance.png\" alt=\"ambulance\" /></span>\n" +
    "                        <h3>{{'Book appointment' | translate }}</h3>\n" +
    "                        <p>{{'Schedule a preferred doctor’s appointment and get consulting on your own time and date.' | translate }}</p>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li class=\"col-md-3 col-sm-6\" data-uk-scrollspy=\"{cls:'uk-animation-scale-up', delay:1100}\">\n" +
    "                	<div class=\"doctor-list\">\n" +
    "                    	<span><img src=\"assets/img/review.png\" alt=\"review\" /></span>\n" +
    "                        <h3>{{'Review service' | translate }}</h3>\n" +
    "                        <p>{{'Get the genuine rating about the service of all specialist doctors immensely.' | translate }}</p>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>-->	\n" +
    "    <!-- End: Book Appointment -->\n" +
    "    \n" +
    "    <!-- Start: Related Practices -->\n" +
    "    <!--<div class=\"related-practice text-center\">\n" +
    "    	<div class=\"container\">\n" +
    "        	<div class=\"paging-head\" data-uk-scrollspy=\"{cls:'uk-animation-fade', delay:100}\">\n" +
    "                <h2>{{'Browse best rated Practices' | translate }}</h2>\n" +
    "                <p>{{'Save your time by searching the doctors based on the key ratings of the practices.' | translate }}</p>\n" +
    "            </div>\n" +
    "            <ul class=\"list-unstyled thumb-block row\">\n" +
    "            	<li class=\"col-md-3 col-sm-6\" data-uk-scrollspy=\"{cls:'uk-animation-scale-up', delay:200}\" ng-repeat=\"bestRatedDoctor in bestRatedDoctors\">\n" +
    "                	<div class=\"thumbnail\">\n" +
    "                        <a href=\"#/doctor/{{bestRatedDoctor.username}}\" title=\"{{bestRatedDoctor.username}}\" class=\"\">\n" +
    "                            <img ng-src=\"{{bestRatedDoctor.attachments.thumb.large}}\" alt=\"{{bestRatedDoctor.user_profile.specialties[0]['name']}}\" />\n" +
    "                        </a>\n" +
    "                        <div class=\"caption text-left\">\n" +
    "                        	<h3 class=\"text-left\">\n" +
    "                            	<a href=\"#/doctor/{{bestRatedDoctor.username}}\" title=\"{{bestRatedDoctor.username}}\" class=\"\">\n" +
    "                                	{{bestRatedDoctor.user_profile.first_name }} {{bestRatedDoctor.user_profile.last_name}} - {{bestRatedDoctor.user_profile.specialties[0]['name']}}\n" +
    "                                </a>\n" +
    "                            </h3>\n" +
    "                            <p class=\"text-left\">{{bestRatedDoctor.user_profile.about_me | limitTo: 75}}</p>\n" +
    "                            <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"bestRatedDoctor.overall_avg_rating\"></input-stars>\n" +
    "                            <p class=\"text-left\">{{bestRatedDoctor.user_profile.address}},{{bestRatedDoctor.user_profile.postal_code}} {{bestRatedDoctor.user_profile.city.name}}, {{bestRatedDoctor.user_profile.country.name}}</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <a href=\"#/search?is_online_booking=true&specialty_id=1\" class=\"btn\" data-uk-scrollspy=\"{cls:'uk-animation-fade', delay:800}\">{{'View All' | translate }}</a>\n" +
    "        </div>\n" +
    "    </div>-->\n" +
    "    <!-- End: Related Practices -->\n" +
    "    \n" +
    "    <!-- Start: How it works -->\n" +
    "    <!--<div class=\"how-it-works text-center\">\n" +
    "    	<div class=\"container\" data-uk-scrollspy=\"{cls:'uk-animation-fade', delay:100}\">\n" +
    "        	<div id=\"carousel-example-generic\" class=\"carousel slide col-md-8 col-md-offset-2\" data-ride=\"carousel\">\n" +
    "                <ol class=\"carousel-indicators\">\n" +
    "                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n" +
    "                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n" +
    "                </ol>\n" +
    "                <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "                    <div class=\"item active\">\n" +
    "                    	<div class=\"paging-head\">\n" +
    "                            <h1>Success Stories</h1>\n" +
    "                            <p>Costco employees love the feeling of camaraderie that’s at the core of our nearest doctors in your network. So we didn’t just want a program that worked. We wanted a program with heart.</p>\n" +
    "                            <p><span>Donna Sexton, Director of Benefits, Costco</span></p>\n" +
    "                        </div>\n" +
    "                  	</div>\n" +
    "                    <div class=\"item\">\n" +
    "                    	<div class=\"paging-head\">\n" +
    "                            <h1>Success Stories</h1>\n" +
    "                            <p>Costco employees love the feeling of camaraderie that’s at the core of our nearest doctors in your network. So we didn’t just want a program that worked. We wanted a program with heart.</p>\n" +
    "                            <p><span>Donna Sexton, Director of Benefits, Costco</span></p>\n" +
    "                        </div>\n" +
    "                  	</div>\n" +
    "                    <div class=\"item\">\n" +
    "                    	<div class=\"paging-head\">\n" +
    "                            <h1>Success Stories</h1>\n" +
    "                            <p>Costco employees love the feeling of camaraderie that’s at the core of our nearest doctors in your network. So we didn’t just want a program that worked. We wanted a program with heart.</p>\n" +
    "                            <p><span>Donna Sexton, Director of Benefits, Costco</span></p>\n" +
    "                        </div>\n" +
    "                  	</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>-->\n" +
    "    <!-- End: How it works -->\n" +
    "    \n" +
    "    <!-- Start: Find Doctor -->\n" +
    "    <div class=\"find-doctor\">\n" +
    "    	<div class=\"container\">\n" +
    "        	<h2 data-uk-scrollspy=\"{cls:'uk-animation-fade', delay:100}\">Encuentra tu Doctor por{{\"...\"}}</h2>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-4\" data-uk-scrollspy=\"{cls:'uk-animation-slide-bottom', delay:200}\">\n" +
    "                    <div class=\"change-location city\">\n" +
    "                        <h4><span>Ciudad</span></h4>\n" +
    "                        <ul class=\"list-unstyled\" ng-init=\"citiesliList=9\" ng-scrollbars ng-scrollbars-config=\"scrollbarConfig\">\n" +
    "                            <li ng-repeat=\"citiesliList in citiesliLists | limitTo:citiesliList track by $index\">\n" +
    "                                <a href=\"javascript:void(0)\" ng-click=\"model.pageRedirect('city_id=' + citiesliList.id)\">{{citiesliList.name}}</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                          		<a class=\"btn-more\" ng-click=\"$parent.citiesliList=citiesliLists.length\" ng-if=\"citiesliList==9\">Más{{\"...\"}}</a>\n" +
    "                                <a class=\"btn-more\" ng-click=\"$parent.citiesliList=9\" ng-if=\"citiesliList!=9\">Menos</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-md-4\" data-uk-scrollspy=\"{cls:'uk-animation-slide-bottom', delay:300}\">\n" +
    "                    <div class=\"change-location specialty\">\n" +
    "                        <h4><span>Especialidad</span></h4>\n" +
    "                        <ul class=\"list-unstyled\" ng-init=\"specialtyliList=9\" ng-scrollbars ng-scrollbars-config=\"scrollbarConfig\">\n" +
    "                            <li ng-repeat=\"specialtyliList in specialtyliLists | limitTo:specialtyliList track by $index\">\n" +
    "                                <a href=\"javascript:void(0)\" ng-click=\"model.pageRedirect('specialty_id=' + specialtyliList.id)\">{{specialtyliList.name | translate}}</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                          		<a class=\"btn-more\" ng-click=\"$parent.specialtyliList=specialtyliLists.length\" ng-if=\"specialtyliList==9\">Más{{\"...\"}}</a>\n" +
    "                                <a class=\"btn-more\" ng-click=\"$parent.specialtyliList=9\" ng-if=\"specialtyliList!=9\">Menos</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-md-4\" data-uk-scrollspy=\"{cls:'uk-animation-slide-bottom', delay:600}\">\n" +
    "                    <div class=\"change-location insurance\">\n" +
    "                        <h4><span>Seguro</span></h4>\n" +
    "                        <ul class=\"list-unstyled\" ng-init=\"insurance=9\" ng-scrollbars ng-scrollbars-config=\"scrollbarConfig\">\n" +
    "                            <li ng-repeat=\"insurance in insurances | limitTo:insurance track by $index\">\n" +
    "                                <a href=\"javascript:void(0)\" ng-click=\"model.pageRedirect('insurance_id=' + insurance.id)\">{{insurance.name | translate}}</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                          		<a class=\"btn-more\" ng-click=\"$parent.insurance=insurances.length\" ng-if=\"insurance==9\">Más{{\"...\"}}</a>\n" +
    "                                <a class=\"btn-more\" ng-click=\"$parent.insurance=9\" ng-if=\"insurance!=9\">Menos</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <p>O busca por Nombre{{\",\"}} <span><a href=\"#/users/practice\"> Especialidad</a></span>{{\",\"}} <span><a href=\"#/users/practice\"> Procedimiento</a></span> o Clinica</p>\n" +
    "       	</div>\n" +
    "   	</div>\n" +
    "	<!-- End: Find Doctor -->\n" +
    "    \n" +
    "    <!-- Start: Contact -->\n" +
    "    <!--<div class=\"contact-block\">\n" +
    "    	<div class=\"container\">\n" +
    "        	<div class=\"row\">\n" +
    "                <div class=\"col-md-7 footer-logo text-left\" data-uk-scrollspy=\"{cls:'uk-animation-slide-left', delay:100}\">\n" +
    "                    <img src=\"assets/img/footer-logo.png\" alt=\"logo\" />\n" +
    "                    <p>{{'Need help booking online?' | translate }} {{$root.settings['site.contact_number']}}</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-5 text-right\" data-uk-scrollspy=\"{cls:'uk-animation-slide-right', delay:100}\">\n" +
    "                    <a class=\"btn btn-red\" href=\"javascript:void(0);\">{{$root.settings['site.contact_email']}}</a>\n" +
    "                </div>\n" +
    "			</div>\n" +
    "        </div>\n" +
    "    </div>-->\n" +
    "    <!-- End: Contact -->\n" +
    "    \n" +
    "    <!-- Start: Clients -->\n" +
    "    	<div class=\"clients\">\n" +
    "        	<div class=\"container\">\n" +
    "            	<h2 class=\"text-center\">Los pacientes están perdiendo la paciencia cuando quieren ser atendidos por usted.</h2>\n" +
    "                <p class=\"text-center\">Vea por qué somos el socio perfecto para los sistemas de salud.</p>\n" +
    "                <ul class=\"list-inline row\">\n" +
    "                	<li class=\"col-md-2 col-xs-12 col-sm-6\">\n" +
    "                    	<a href=\"javascript:void(0)\">\n" +
    "                        	<img src=\"assets/img/client-centro.png\" alt=\"client-centro\" class=\"img-responsive\" />\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"col-md-2 col-xs-12 col-sm-6\">\n" +
    "                    	<a href=\"javascript:void(0)\">\n" +
    "                        	<img src=\"assets/img/client-clinica.png\" alt=\"client-clinica\" class=\"img-responsive\" />\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"col-md-2 col-xs-12 col-sm-6\">\n" +
    "                    	<a href=\"javascript:void(0)\">\n" +
    "                        	<img src=\"assets/img/client-maracay.png\" alt=\"client-maracay\" class=\"img-responsive\" />\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"col-md-2 col-xs-12 col-sm-6\">\n" +
    "                    	<a href=\"javascript:void(0)\">\n" +
    "                        	<img src=\"assets/img/client-medicas.png\" alt=\"client-medicas\" class=\"img-responsive\" />\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"col-md-2 col-xs-12 col-sm-6\">\n" +
    "                    	<a href=\"javascript:void(0)\">\n" +
    "                        	<img src=\"assets/img/client-hospital.png\" alt=\"client-hospital\" class=\"img-responsive\" />\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"col-md-2 col-xs-12 col-sm-6\">\n" +
    "                    	<a href=\"javascript:void(0)\">\n" +
    "                        	<img src=\"assets/img/client-sociedad.png\" alt=\"client-sociedad\" class=\"img-responsive\" />\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <p class=\"text-center\"><a class=\"btn\" href=\"#/users/practice\">Unase a Nosotros y a Nuestros Socios</a></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    <!-- End: Clients -->\n" +
    "    \n" +
    "</div>");
}]);

angular.module("Appointments/appointment_booking_appt_info.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_booking_appt_info.tpl.html",
    "<section class=\"pad-63 book-appmt-block\">\n" +
    "	<div class=\"col-md-12 pad0\">\n" +
    "    	<div class=\"breadcrumb-bg\">\n" +
    "            <div class=\"col-sm-1\"> \n" +
    "            </div>\n" +
    "            <div class=\"col-sm-11\">\n" +
    "                <booking-bread-crum datastep=\"{{stepStatus}}\"></booking-bread-crum>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">\n" +
    "        	<h1>Reserve su cita</h1>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "			<div class=\"col-lg-6 col-md-6 doctor-visit\" ng-if=\"$root.auth.role_id != model.ConstUserType.User\">\n" +
    "                <div ng-if=\"$root.auth.id == Null\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <h4>Has usado{{$root.settings['site.name']}} antes?</h4>\n" +
    "                        <p>Utilizaremos la información de su última visita</p>\n" +
    "                        <div>\n" +
    "                            <div class=\"radio\">\n" +
    "                                <label>\n" +
    "                                    <input class=\"hide\" type=\"radio\" ng-model=\"model.formFields.is_used_before\" name=\"is_used_before\" value=\"1\">\n" +
    "                                    <span></span>Soy nuevo en {{$root.settings['site.name']}}\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"radio\">\n" +
    "                                <label>\n" +
    "                                    <input class=\"hide\" type=\"radio\" ng-model=\"model.formFields.is_used_before\" name=\"is_used_before\" value=\"2\">\n" +
    "                                    <span></span>He usado {{$root.settings['site.name']}} antes\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div  class=\"col-md-10\" ng-show=\"model.formFields.is_used_before == 2\">\n" +
    "                        <div class=\"row\">\n" +
    "                        <form class=\"form-login form-horizontal\" name=\"loginForm\" ng-submit=\"model.login(loginForm.$valid)\" novalidate>\n" +
    "                            <div class=\"clearfix\">\n" +
    "                                <h2 class=\"form-login-heading\">Ingresar</h2>\n" +
    "                            </div>\n" +
    "                            <h5>Accede a tu {{$root.settings['site.name']}} cuenta</h5>\n" +
    "                            <div class=\"form-group email\" ng-class=\"{ 'has-error' : (loginForm.$submitted || loginForm.email.$touched) && (loginForm.email.$pristine || loginForm.email.$invalid)}\">\n" +
    "                                <div class=\"col-md-10\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <!--<label>{{'E-mail'}}</label>-->\n" +
    "                                        <input type=\"email\" class=\"form-control\" placeholder=\"{{'Email'| translate }}\" name=\"email\" ng-model=\"model.email\" ng-required=\"true\">\n" +
    "                                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.email.$touched) && (loginForm.email.$pristine || loginForm.email.$invalid) && (loginForm.email.$error.required)\">{{\"Enter Email\" | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.email.$touched) && (loginForm.email.$pristine || loginForm.email.$invalid) && (loginForm.email.$error.email)\">{{\"Enter your email\" | translate }}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group password\" ng-class=\"{ 'has-error' : (loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid)}\">\n" +
    "                                <div class=\"col-md-10\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <!--<label>{{'Password'}}</label>-->\n" +
    "                                        <input type=\"password\" class=\"form-control\" placeholder=\"{{'Password' | translate }}\" name=\"password\" ng-model=\"model.password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid) && (loginForm.password.$error.required)\">{{\"Enter Password\" | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid) && (loginForm.password.$error.minlength)\">{{\"Minimum length is 6\" | translate}}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid) && (loginForm.password.$error.maxlength)\">{{\"Maximum length is 40\" | translate }}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <div class=\"checkbox\">\n" +
    "                                    <label>\n" +
    "                                        <input type=\"checkbox\" class=\"hide\" />Recordar me\n" +
    "                                        <span></span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-10\">\n" +
    "                                <div class=\"row\">\n" +
    "                                    <button class=\"btn btn-green btn-block\" type=\"submit\">Iniciar sesión</button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                           <p class=\"forgot-password text-center col-md-10\"><a href=\"#/users/forgot_password\" class=\"text-muted\" target=\"_blank\">{{\"Forget your Password?\" | translate }}</a></p>\n" +
    "                        </form>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"model.formFields.is_used_before == 1\">\n" +
    "                    <form class=\"form-login form-horizontal\" name=\"signupForm\" ng-submit=\"model.signup(signupForm.$valid)\" novalidate>\n" +
    "                        <div class=\"form-body\">\n" +
    "                            <div class=\"form-heading\">\n" +
    "                                <h2 class=\"form-login-heading\">Crea tu cuenta</h2>\n" +
    "                                <span>Esto le ayudará a manejar sus citas</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"location-info\">\n" +
    "                                <label class=\"form-name\">Teléfono móvil</label>\n" +
    "                                <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.required)}\">\n" +
    "                                    <div class=\"input-group col-md-8\">\n" +
    "                                        <!--<span class=\"input-group-addon\"><i class=\"fa fa-phone fa-fw\"></i></span>-->\n" +
    "                                        <input type=\"text\" class=\"form-control\" name=\"{{'phone' | translate }}\" id=\"phone\" placeholder=\"{{'Mobile'| translate}}\" ng-model=\"model.phone\"\n" +
    "                                        ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                        />\n" +
    "                                    </div>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.required)\">{{\"Enter Mobile Number\" | translate }} </span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.pattern)\">{{\"Enter Valid Mobile Number Without Character\" | translate }} </span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.minlength)\">{{\"Minimum Length is 8\" | translate }} </span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.maxlength)\">{{\"Maximum Length is 12\" | translate }} </span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid)}\">\n" +
    "                                <div class=\"col-md-10\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                    <label>Inserte su correo electrónico</label>\n" +
    "                                    <input type=\"email\" class=\"form-control\" placeholder=\"{{'Email' | translate }}\" name=\"email\" ng-model=\"model.email\" ng-required=\"true\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.required)\">{{\"Please enter your E-mail id\" | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.email)\">{{\"Enter valid E-mail\" | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.emailErr\">{{model.emailErr}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.confirm_email.$pristine || signupForm.confirm_email.$invalid)}\">\n" +
    "                                <div class=\"col-md-10\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label>Confirme su correo electrónico</label>\n" +
    "                                        <input type=\"email\" class=\"form-control\" placeholder=\"{{'Confirm Email' | translate }}\" name=\"confirm_email\" ng-model=\"model.confirm_email\" ng-required=\"true\">\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.confirm_email.$pristine || signupForm.confirm_email.$invalid) && (signupForm.confirm_email.$error.required)\">{{\"Please re-enter your E-mail id\" | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.confirm_email.$pristine || signupForm.confirm_email.$invalid) && (signupForm.confirm_email.$error.email)\">{{\"Enter valid E-mail\" | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirm_email.$touched) && (signupForm.email.$dirty && signupForm.confirm_email.$dirty) && (model.email != model.confirm_email)\">{{\"E-mail Mismatch\" | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"model.confirm_emailErr\">{{model.confirm_emailErr}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group checkbox-field\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.remainder.$touched) && (signupForm.remainder.$pristine || signupForm.remainder.$invalid)}\">\n" +
    "                                <div class=\"checkbox col-sm-12\">\n" +
    "                                    <label>\n" +
    "                                        <input id=\"terms_cond\" class=\"hide\" type=\"checkbox\" name=\"remainder\" ng-model=\"model.remainder\">\n" +
    "                                        {{\"Please, send me emails with preventive health care remainders. recommended\" | translate }}\n" +
    "                                        <span></span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid)}\">\n" +
    "                                <div>\n" +
    "                                    <label>Crear una contraseña</label>\n" +
    "                                    <input type=\"password\" class=\"form-control\" placeholder=\"{{'Password' | translate }}\" name=\"password\" ng-model=\"model.password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.required)\">{{\"Enter Password\" | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.minlength)\">{{\"Minimum length is 6\" | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.maxlength)\">{{\"Maximum length is 20\" | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.passwordErr\">{{model.passwordErr}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "							<div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid)}\">\n" +
    "                                        <input type=\"password\" class=\"form-control\" placeholder=\"{{'Confirm Password' | translate }}\" name=\"confirmPassword\" ng-model=\"model.confirm_password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.required)\">{{\"Please enter confirm password\" |  translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.minlength)\">{{\"Minimum length is 6\" | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.maxlength)\">{{\"Maximum length is 20\" |  translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.password.$dirty && signupForm.confirmPassword.$dirty) && (model.password != model.confirm_password)\">{{\"Password Mismatch\" | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"model.confirmPasswordErr\">{{model.confirmPasswordErr}}</span>\n" +
    "                                </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <div class=\"row\">\n" +
    "                                    <label class=\"col-sm-12 form-name\">Nombre</label>\n" +
    "                                    <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid)}\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" placeholder=\"{{'First Name' | translate }}\" name=\"first_name\" ng-model=\"model.first_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.required)\">{{\"Please enter your first name\" | translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.minlength)\">{{\"Minimum length is 3\" | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.pattern)\">{{\"Enter Valid name without number\" | translate }}</span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid)}\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" placeholder=\"Apellido\" name=\"last_name\" ng-model=\"model.last_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.required)\">{{\"Please enter your last name\" | translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.minlength)\">{{\"Minimum length is 3\" | translate }}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.pattern)\">{{\"Enter valid name without number\" | translate }}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"location-info form-group\">\n" +
    "                                <label class=\"form-name\">Fecha de Nacimiento</label>\n" +
    "                                <div class=\"row joint-field-d\">\n" +
    "                                    <div class=\"col-xs-4\">\n" +
    "                                        <div class=\"\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.required)}\">\n" +
    "                                            <div class=\"input-group dob\">\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"date\" id=\"date\" placeholder=\"{{'Day' | translate }}\" ng-model=\"model.date\"\n" +
    "                                                ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"2\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                                />\n" +
    "                                            </div>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.required)\">{{\"Enter date\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.pattern)\">{{\"Enter Valid date Without Character\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.minlength)\">{{\"Minimum Length is 2\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.date.$touched) && (signupForm.date.$pristine || signupForm.date.$invalid) && (signupForm.date.$error.maxlength)\">{{\"Maximum Length is 2\" | translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-xs-4 mid-child\">\n" +
    "                                        <div class=\"\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.required)}\">\n" +
    "                                            <div class=\"input-group dob\">\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"month\" id=\"month\" placeholder=\"{{'Month' | translate }}\" ng-model=\"model.month\" ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"2\" ng-pattern=\"/^[0-9]*$/\" />\n" +
    "                                            </div>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.required)\">{{\"Enter Month\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.pattern)\">{{\"Enter Valid Month Without Character\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.minlength)\">{{\"Minimum Length is 2\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.month.$touched) && (signupForm.month.$pristine || signupForm.month.$invalid) && (signupForm.month.$error.maxlength)\">{{\"Maximum Length is 2\" | translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-xs-4\">\n" +
    "                                        <div class=\"\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.required)}\">\n" +
    "                                            <div class=\"input-group dob\">\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"year\" id=\"year\" placeholder=\"{{'Year' | translate }}\" ng-model=\"model.year\"\n" +
    "                                                ng-required=\"true\" ng-minlength=\"4\" ng-maxlength=\"4\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                                />\n" +
    "                                            </div>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.required)\">{{\"Enter year\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.pattern)\">{{\"Enter Valid year Without Character\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.minlength)\">{{\"Minimum Length is 4\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.year.$touched) && (signupForm.year.$pristine || signupForm.year.$invalid) && (signupForm.year.$error.maxlength)\">{{\"Maximum Length is 4\" | translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"input-group dropdown-block col-md-6 select-opt\">\n" +
    "                                <!--<span class=\"input-group-addon\"><i class=\"fa fa-users fa-fw\"></i></span>-->\n" +
    "                                <label class=\"form-name\">Género</label>\n" +
    "                                <select ng-model=\"model.gender_id\" class=\"form-control form-group\" name=\"gender_id\" ng-options=\"gender.id as gender.name for gender in model.genderList\">\n" +
    "                                <option value=\"\">{{\"Select from the list\" | translate }}</option>\n" +
    "                                <option ng-repeat=\"genderList in genderLists\" value=\"{{genderList.id}}\">{{genderList.name}}</option>\n" +
    "                                </select>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.gender_id.$touched) && (signupForm.gender_id.$pristine || signupForm.gender_id.$invalid) && (signupForm.gender_id.$error.required)\">{{\"Select a Gender\" | translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group checkbox-field\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.termCondition.$touched) && (signupForm.termCondition.$pristine || signupForm.termCondition.$invalid)}\">\n" +
    "                                <div class=\"checkbox col-sm-12\">\n" +
    "                                    <label>\n" +
    "                                        <input id=\"terms_cond\" class=\"hide\" type=\"checkbox\" name=\"termCondition\" ng-model=\"model.terms_conditions\" ng-required=\"true\">\n" +
    "                                        {{\"Please read and agree to The Terms of Use and Privacy Policy\" | translate }}\n" +
    "                                        <span></span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.termCondition.$touched) && (signupForm.termCondition.$pristine || signupForm.termCondition.$invalid) && (signupForm.termCondition.$error.required)\">{{\"Required\" | translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group checkbox-field\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.contract.$touched) && (signupForm.contract.$pristine || signupForm.contract.$invalid)}\">\n" +
    "                                <div class=\"checkbox col-sm-12\">\n" +
    "                                    <label>\n" +
    "                                        <input id=\"terms_cond\" class=\"hide\" type=\"checkbox\" name=\"contract\" ng-model=\"model.contract\" ng-required=\"true\">\n" +
    "                                        {{\"I have read and agree to\" | translate }} {{$root.settings['site.name']}} {{\"Contract\" | translate }}\n" +
    "                                        <span></span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.contract.$touched) && (signupForm.contract.$pristine || signupForm.contract.$invalid) && (signupForm.contract.$error.required)\">{{\"Required\" | translate }}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-footer clearfix\">\n" +
    "                            <div class=\"\">\n" +
    "                                <div class=\"pull-left\">\n" +
    "                                    <button class=\"btn btn-green btn-animate\" type=\"submit\">{{\"Join Now\" | translate }}</button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "			</div>\n" +
    "        	<div class=\"col-lg-6 col-md-6 doctor-visit\">\n" +
    "                <div ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                    <form class=\"form-content row col-md-12\" name=\"stepone\" ng-submit=\"model.step1(stepone.$valid)\" novalidate>\n" +
    "                        <div class=\"form-group dropdown-block select-opt\">\n" +
    "                            <label class=\"form-name\">¿Va a utilizar su seguro de salud?</label>\n" +
    "                            <select class=\"form-control\" name=\"check_insurance_id\" ng-change=\"insuranceCheck(model.formFields.checkInsurance)\" ng-model=\"model.formFields.checkInsurance\" required=\"required\">\n" +
    "								<option value=''>{{\"Please Select\" | translate }}</option>\n" +
    "                                <option value='Yes'>{{\"Yes\" | translate }}</option>\n" +
    "                                <option value='No'>{{\"No\" | translate }}</option>\n" +
    "                            </select>\n" +
    "							 <span class=\"error\" ng-show=\"(stepone.$submitted || stepone.check_insurance_id.$touched) && (stepone.check_insurance_id.$pristine || logisteponenForm.check_insurance_id.$invalid) && (stepone.check_insurance_id.$error.required)\">{{\"Please select\" | translate }}</span>\n" +
    "                        </div>\n" +
    "						<div class=\"form-group\" ng-show=\"model.formFields.checkInsurance == 'Yes'\">\n" +
    "							<div class=\"form-group dropdown-block select-opt\" ng-if=\"response_code == 1\">\n" +
    "								<select ng-model=\"model.formFields.insurance_id\" class=\"form-control\" name=\"insurance_id\" ng-options=\"insurance.id as insurance.name for insurance in activeInsurance track by insurance.id\" ng-required=\"true\" required=\"required\">\n" +
    "                                <option value=\"\">{{\"Select your insurance\" | translate }}</option>\n" +
    "                            </select> \n" +
    "                            <span class=\"error\" ng-show=\"(stepone.$submitted || stepone.insurance_id.$touched) && (stepone.insurance_id.$pristine || logisteponenForm.insurance_id.$invalid) && (stepone.insurance_id.$error.required)\">\n" +
    "                                {{\"Select a insurance\" | translate }}\n" +
    "                            </span>\n" +
    "							<span ng-if=\"expiredInsurance.length > 0\" ng-repeat=\"insurance in expiredInsurance\">\n" +
    "								<h4>{{\"Apointment Slots finished insurance\" | translate }}</h4>\n" +
    "                                {{insurance.name | capitalize}}\n" +
    "                            </span>\n" +
    "							</div>\n" +
    "							<div class=\"form-group\" ng-if=\"response_code == 0\">\n" +
    "								<h4>No hay seguro disponible para este día por favor elija otra ranura o seleccione ¿Va a usar su seguro de salud? a \"No\"</h4>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "                        <div class=\"form-group dropdown-block select-opt\">\n" +
    "                            <label class=\"form-name\">¿Cuál es la razón de su visita?</label>\n" +
    "                            <select ng-model=\"model.formFields.specialty_disease_id\" class=\"form-control\" name=\"specialty_disease_id\" ng-options=\"diseas.id as diseas.name for diseas in model.diseasList track by diseas.id\" ng-required=\"true\" required=\"required\" ng-change=\"reasonValue()\">\n" +
    "                                <option value=\"\">{{\"Select your reason\" | translate }}</option>\n" +
    "                            </select> \n" +
    "                            <span class=\"error\" ng-show=\"(stepone.$submitted || stepone.specialty_disease_id.$touched) && (stepone.specialty_disease_id.$pristine || logisteponenForm.specialty_disease_id.$invalid) && (stepone.specialty_disease_id.$error.required)\">{{\"Select a Reason\" | translate }}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"form-name\">¿Has visto a este médico antes?</label>\n" +
    "                            <div>\n" +
    "                                <div class=\"radio\">\n" +
    "                                    <label>\n" +
    "                                        <input class=\"hide\" type=\"radio\" ng-model=\"model.formFields.is_seen_before\" name=\"is_seen_before\" value=\"0\">\n" +
    "                                        <span></span>Soy un Nuevo Paciente\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"radio\">\n" +
    "                                    <label>\n" +
    "                                        <input class=\"hide\" type=\"radio\" ng-model=\"model.formFields.is_seen_before\" name=\"is_seen_before\" value=\"1\">\n" +
    "                                        <span></span>Soy un paciente existente de esta especialidad\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <hr />\n" +
    "                       \n" +
    "                        <div class=\"col-md-12 book-free\">\n" +
    "                            <button class=\"btn btn-green\" type=\"submit\">Reserva Libre</button>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <div ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                    <div class=\"alert alert-danger\">\n" +
    "                        <strong><i class='fa fa-ban'></i> {{$root.auth.user_profile.dr_title}} {{$root.auth.user_profile.first_name}}</strong> {{\"Doctor will not able to schedule an appointment\" | translate }}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "        	</div>\n" +
    "        	<div class=\"col-md-6\">\n" +
    "                <div class=\"book-doctor-details col-md-12\">\n" +
    "                    <h2>{{doctorSpecialtyDiseases[0].name}}</h2>\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"media\">\n" +
    "                            <div class=\"media-left\" ng-class=\"(doctorProfile.User.data.is_verified == '1') ? 'certified-tag' : ''\">\n" +
    "                                <figure>\n" +
    "                                <img class=\"doctor-image\" ng-src=\"{{doctorProfile.User.data.attachmentable.data.thumb.medium}}\" alt=\"{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\">\n" +
    "                                </figure>\n" +
    "                            </div>\n" +
    "                            <div class=\"media-body\">\n" +
    "                                <h3>{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}</h3>\n" +
    "                                <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorProfile.start_rating\"></input-stars><br/>\n" +
    "                                <span ng-if=\"doctorProfile.specialties.length > 0\" ng-repeat=\"specialty in doctorProfile.specialties\">\n" +
    "								{{$first ? '' : $last ? ' and ' : ', '}} {{specialty.name | translate}}\n" +
    "                            </span>\n" +
    "                                <h4>{{doctorProfile.work_place.data.location}}</h4>\n" +
    "                                <p><a href=\"#/doctor/{{doctorProfile.User.data.username}}\">Leer comentarios</a></p>\n" +
    "                                <p><span>Code: <a href=\"javascript:void(0)\">{{doctorProfile.User.data.user_code}}</a></span></p>\n" +
    "                                <address class=\"text-blue\"> {{doctorProfile.address}} </address>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"panel col-md-12 fa-inverse\">\n" +
    "                        <!--<p>Monday, November 21th - <span>10:30 AM</span></p>-->\n" +
    "                        <p>{{appt_date}}- <span>{{appt_time}}</span></p>\n" +
    "                    </div>\n" +
    "                     <div class=\"col-md-12\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <h4>{{\"Patient\" | translate }}</h4>\n" +
    "                                <p>{{$root.auth.user_profile.display_name}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <h4>{{\"Reason for your Visit\" | translate }}</h4>\n" +
    "                                <p>{{reasonToVisit}}</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            \n" +
    "				<p class=\"safe-booking col-md-12\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i>{{\"Safe booking\" | translate }}</p>\n" +
    "        	</div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_booking_confirm.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_booking_confirm.tpl.html",
    "<section class=\"pad-63 book-appmt-block\">\n" +
    "	<div class=\"col-md-12 pad0\">\n" +
    "    	<div class=\"breadcrumb-bg\">\n" +
    "            <div class=\"col-sm-1\"> \n" +
    "            </div>\n" +
    "            <div class=\"col-sm-11\">\n" +
    "                <booking-bread-crum></booking-bread-crum>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">\n" +
    "            <h1>Reserve su cita</h1>\n" +
    "        </div>\n" +
    "        <!--<div class=\"appmt-steps col-md-12\">\n" +
    "            <ul class=\"list-inline row\">\n" +
    "                <li class=\"complete-step col-md-4\">\n" +
    "                    <span>Step 1</span> \n" +
    "                    <p class=\"tab-title\">Información de la cita</p>\n" +
    "                </li>\n" +
    "                <li class=\"complete-step col-md-4\">\n" +
    "                    <span>Step 2</span> \n" +
    "                    <p class=\"tab-title\">Información del Paciente</p>\n" +
    "                </li>\n" +
    "                <li class=\"complete-step col-md-3\">\n" +
    "                    <span>3</span> \n" +
    "                    <p class=\"tab-title\">Detalles</p>\n" +
    "                </li>\n" +
    "                <li class=\"current-step col-md-4\">\n" +
    "                    <span>Step 3</span> \n" +
    "                    <p class=\"tab-title\">Has Terminado</p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>-->\n" +
    "        <div class=\"col-md-12 book-doctor-details\" ng-show=\"widgetCheck == 0\">\n" +
    "        	<div class=\"col-md-4\">\n" +
    "            	<div class=\"media\">\n" +
    "                    <div class=\"media-left\">\n" +
    "                        <img class=\"doctor-image\" ng-src=\"{{doctorProfile.User.data.attachmentable.data.thumb.medium}}\" alt=\"Dr. Patricia A. Lloyd\">\n" +
    "                    </div>\n" +
    "                    <div class=\"media-body\">\n" +
    "                        <h3>{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}</h3>\n" +
    "                        <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorProfile.start_rating\"></input-stars>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "            	<address class=\"text-blue\"> {{doctorProfile.address}} </address>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "            	<div class=\"js-time\"> \n" +
    "                    <ul class=\"list-unstyled text-left\">\n" +
    "                        <li>{{'Appt Date:'| translate }}<span>{{appt_date}}</span></li>\n" +
    "                        <li>{{'Appt Time:'| translate }}<span>{{appt_time}}</span></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    	<div class=\"col-md-12 table-block appmt-finish\">\n" +
    "            <div class=\"table-responsive row\">\n" +
    "                <table class=\"table table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Nombre</th>\n" +
    "                            <th>Email</th>\n" +
    "                            <th>Telefono</th>\n" +
    "                            <th>Fecha de Nacimiento</th>\n" +
    "                            <th>Genero</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr>\n" +
    "                            <td>{{name}}</td>\n" +
    "                            <td>{{email}}</td>\n" +
    "                            <td>{{mobile}}</td>\n" +
    "                            <td>{{dob}}</td>\n" +
    "                            <td>{{gender}}</td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <div class=\"appmt-btn text-center\">\n" +
    "                <button ng-click=\"finalConfirm()\" class=\"btn btn-green confirm\">Confirmar cita</button> \n" +
    "                <button ng-click=\"bookingCancel()\" class=\"btn cancel\">Cancelar reserva</button> \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_booking_details.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_booking_details.tpl.html",
    "<section class=\"pad-63 book-appmt-block\">\n" +
    "	<div class=\"col-md-12 pad0\">\n" +
    "    	<div class=\"breadcrumb-bg\">\n" +
    "            <div class=\"col-sm-1\"> \n" +
    "            </div>\n" +
    "            <div class=\"col-sm-11\">\n" +
    "                <booking-bread-crum></booking-bread-crum>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"page-head\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1>Reserve su cita</h1>\n" +
    "        </div>\n" +
    "        <!--<div class=\"appmt-steps col-md-12\">\n" +
    "            <ul class=\"list-inline row\">\n" +
    "                <li class=\"complete-step col-md-4\">\n" +
    "                    <span>Step 1</span> \n" +
    "                    <p class=\"tab-title\">Información de la cita</p>\n" +
    "                </li>\n" +
    "                <li class=\"complete-step col-md-4\">\n" +
    "                    <span>Step 2</span> \n" +
    "                    <p class=\"tab-title\">Información del Paciente</p>\n" +
    "                </li>\n" +
    "                <li class=\"complete-step col-md-3\">\n" +
    "                    <span>3</span> \n" +
    "                    <p class=\"tab-title\">Detalles</p>\n" +
    "                </li>\n" +
    "                <li class=\"current-step col-md-4\">\n" +
    "                    <span>Step 3</span> \n" +
    "                    <p class=\"tab-title\">Has Terminado</p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>-->\n" +
    "        <div class=\"col-xs-12\"> \n" +
    "            <div class=\"book-appmt-doctor\">\n" +
    "                <h2>{{'Doctor'| translate}}</h2>\n" +
    "                <div class=\"book-doctor-details text-center\">\n" +
    "                    <img class=\"doctor-image\" ng-src=\"{{doctorProfile.attachmentable.data.thumb.medium}}\" alt=\"Dr. Patricia A. Lloyd\">    \n" +
    "                    <h3 class=\"\">\n" +
    "                        {{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\n" +
    "                    </h3>\n" +
    "                    <p>\n" +
    "                    <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorProfile.start_rating\"></input-stars>\n" +
    "                    </p>\n" +
    "                    <address class=\"text-blue\"> {{doctorProfile.address}} </address>\n" +
    "                    <div class=\"js-time\"> \n" +
    "                        <ul class=\"list-inline text-left\">\n" +
    "                            <li class=\"text-blue\"> {{'Appt Date:'| translate }} {{appt_date}} </li>\n" +
    "                            <li class=\"text-blue\"> {{'Appt Time:'| translate }} {{appt_time}}</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <!--<ul class=\"list-inline text-left\">\n" +
    "                        <li class=\"text-grey\">Reason for Visit</li>\n" +
    "                        <li class=\"text-blue\">Yet To Select</li>\n" +
    "                    </ul>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-7 book-appmt\">\n" +
    "            <div ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                <form class=\"form-content col-md-8\" name=\"stepthree\" ng-submit=\"model.step3(stepthree)\" novalidate>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Phone number where the doctor can contact you</label>\n" +
    "                        <input type=\"text\" ng-model=\"model.formValue.phone\" name=\"phone\" class=\"form-control\"> \n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>¿Alguna nota para el consultorio del médico?</label>\n" +
    "                        <textarea ng-model=\"model.formValue.notes\" name=\"patient_notes\" class=\"form-control\"></textarea>\n" +
    "                    </div>\n" +
    "                    <div class=\"\">\n" +
    "                        <button class=\"btn btn-block btn-blue btn-animate\" type=\"submit\">{{'Book for Free'| translate }}</button>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <div class=\"alert alert-danger\">\n" +
    "                    <strong><i class='fa fa-ban'></i> {{$root.auth.user_profile.dr_title}} {{$root.auth.user_profile.first_name}}</strong> Doctor will not able to schedule an appointment.\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_booking_patient_info.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_booking_patient_info.tpl.html",
    "<section class=\"pad-63 book-appmt-block\">\n" +
    "    <div class=\"col-md-12 pad0\">\n" +
    "        <div class=\"breadcrumb-bg\">\n" +
    "            <div class=\"col-sm-1\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-11\">\n" +
    "                <booking-bread-crum></booking-bread-crum>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">\n" +
    "            <h1>Reserve su cita</h1>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6 doctor-visit patient-info\">\n" +
    "                <div ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                    <form class=\"form-content row form-horizontal col-md-12\" name=\"steptwo\" ng-submit=\"model.step2(steptwo.$valid)\" novalidate>\n" +
    "                        <div class=\"location-info\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"form-group\" ng-class=\"{ 'has-error' : (steptwo.$submitted || steptwo.is_member.$touched) && (steptwo.is_member.$pristine || steptwo.is_member.$invalid)}\">\n" +
    "                                    <label class=\"col-sm-12 form-name\">¿quién va a ver al doctor?</label>\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <label class=\"light-grey\">\n" +
    "                                                <input type=\"radio\" ng-model=\"model.formValue.is_guest_appointment\" value=\"1\">Yo\n" +
    "                                            </label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <label class=\"light-grey\">\n" +
    "                                                <input type=\"radio\" ng-model=\"model.formValue.is_guest_appointment\" value=\"2\">Un miembro de la familia\n" +
    "                                            </label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <label class=\"light-grey\">\n" +
    "                                                <input type=\"radio\" ng-model=\"model.formValue.is_guest_appointment\" value=\"3\">Otra persona\n" +
    "                                            </label>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\" ng-show=\"model.formValue.is_guest_appointment == '1'\">\n" +
    "                            <div class=\"form-group col-md-6\">\n" +
    "                            <label class=\"col-sm-6 form-name\">Nombre</label>\n" +
    "                                <input type=\"text\" name=\"first_name\" ng-model=\"model.formValue.first_name\" placeholder=\"Nombre\" class=\"form-control\"\n" +
    "                                    ng-required=\"model.formValue.is_guest_appointment == '1'\" ng-minlength=\"3\" ng-maxlength=\"25\"\n" +
    "                                    ng-disabled=\"true\" />\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.first_name.$touched) && (steptwo.first_name.$pristine || steptwo.first_name.$invalid) && (steptwo.first_name.$error.required) && model.formValue.is_guest_appointment == '1'\">{{\"First Name Required\" | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.first_name.$touched) && (steptwo.first_name.$pristine || steptwo.first_name.$invalid) && (steptwo.first_name.$error.minlength) && model.formValue.is_guest_appointment == '1'\">{{\"Minimum 3 character required\" | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.first_name.$touched) && (steptwo.first_name.$pristine || steptwo.first_name.$invalid) && (steptwo.first_name.$error.maxlength) && model.formValue.is_guest_appointment == '1'\">{{\"Maximum 25 Character\" | translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-6\">\n" +
    "                            <label class=\"col-sm-6 form-name\">Apellido</label>\n" +
    "                                <input type=\"text\" name=\"last_name\" ng-model=\"model.formValue.last_name\" class=\"form-control\" placeholder=\"Apellido\" ng-required=\"model.formValue.is_guest_appointment == '1'\"\n" +
    "                                    ng-minlength=\"1\" ng-maxlength=\"20\" ng-pattern=\"/^[a-z A-Z]*$/\"   ng-disabled=\"true\" />\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.last_name.$touched) && (steptwo.last_name.$pristine || steptwo.last_name.$invalid) && (steptwo.last_name.$error.required) && model.formValue.is_guest_appointment == '1'\">{{\"Last Name Required\" | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.last_name.$touched) && (steptwo.last_name.$pristine || steptwo.last_name.$invalid) && (steptwo.last_name.$error.minlength) && model.formValue.is_guest_appointment == '1'\">{{\"Minimum 1 character required\" | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.last_name.$touched) && (steptwo.last_name.$pristine || steptwo.last_name.$invalid) && (steptwo.last_name.$error.maxlength) && model.formValue.is_guest_appointment == '1'\">{{\"Maximum 20 Character\" | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.last_name.$touched) && (steptwo.last_name.$pristine || steptwo.last_name.$invalid) && (steptwo.last_name.$error.pattern) && model.formValue.is_guest_appointment == '1'\">{{\"Enter a valid name without numbers\" | translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-6 select-opt\">\n" +
    "                            <label class=\"col-sm-6 form-name\">Genero</label>\n" +
    "                                <select ng-model=\"model.formValue.gender_id\" class=\"form-control\" name=\"gender_id\" ng-required=\"model.formValue.is_guest_appointment == '1'\"\n" +
    "                                    ng-options=\"gender.id as gender.name for gender in model.genderList\"  ng-disabled=\"true\">\n" +
    "                                <option value=\"\"> Select Gender</option>                   \n" +
    "                            </select>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.gender_id.$touched) && (steptwo.gender_id.$pristine || steptwo.gender_id.$invalid) && (steptwo.gender_id.$error.required) && model.formValue.is_guest_appointment == '1'\">{{'Select a Gender'| translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-6\">\n" +
    "                            <label class=\"col-sm-12 form-name\">Codigo postal</label>\n" +
    "                                <input type=\"text\" name=\"postal_code\" ng-model=\"model.formValue.postal_code\" placeholder=\"Codigo Postal\" class=\"form-control\"\n" +
    "                                    ng-minlength=\"3\" ng-maxlength=\"10\" ng-required=\"model.formValue.is_guest_appointment == '1'\"\n" +
    "                                />\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.postal_code.$touched) && (steptwo.postal_code.$pristine || steptwo.postal_code.$invalid) && (steptwo.postal_code.$error.required) && model.formValue.is_guest_appointment == '1'\">{{'Postal Code Required'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.postal_code.$touched) && (steptwo.postal_code.$pristine || steptwo.postal_code.$invalid) && (steptwo.postal_code.$error.minlength) && model.formValue.is_guest_appointment == '1'\">{{'Minimum 3 Character Required'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.postal_code.$touched) && (steptwo.postal_code.$pristine || steptwo.postal_code.$invalid) && (steptwo.postal_code.$error.maxlength) && model.formValue.is_guest_appointment == '1'\">{{'Maximum 10 Character Required'| translate }}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-show=\"model.formValue.is_guest_appointment == '2'\">\n" +
    "                            <div class=\"input-group dropdown-block select-opt select-custom\">\n" +
    "                                <label class=\"form-name\">{{\"Family member or friend\" | translate }}</label>\n" +
    "                                <select ng-model=\"model.formValue.family_member\" name=\"family_member\" class=\"form-control form-group\"\n" +
    "                                    ng-options=\"friend.id as friend.first_name for friend in model.friendsLists track by friend.id\">\n" +
    "                                    <option value=\"\">{{\"Select from the list of family member or friend\" | translate }}</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <div class=\"location-info add-fam\" ng-show=\"model.formValue.family_member == null\">\n" +
    "                                <label class=\"form-name\">{{\"Add a new Family of Friend\" | translate }}</label>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <div class=\"form-group\" ng-class=\"{ 'has-error' : (steptwo.$submitted || steptwo.name_member.$touched) && (steptwo.name_member.$pristine || steptwo.name_member.$invalid) && (steptwo.name_member.$error.required) && model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null}\">\n" +
    "                                            <div>\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"name_member\" id=\"name_member\" placeholder=\"{{'Name of the family member or Patient'| translate }}\"\n" +
    "                                                    ng-model=\"model.formValue.name_member\" ng-required=\"model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null\"\n" +
    "                                                    ng-minlength=\"3\" />\n" +
    "                                            </div>\n" +
    "                                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.name_member.$touched) && (steptwo.name_member.$pristine || steptwo.name_member.$invalid) && (steptwo.name_member.$error.required) && model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null\">{{\"Enter Name\"| translate }}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6 fam\">\n" +
    "                                        <div class=\"form-group\" ng-class=\"{ 'has-error' : (steptwo.$submitted || steptwo.relation.$touched) && (steptwo.relation.$pristine || steptwo.relation.$invalid) && (steptwo.relation.$error.required) && model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null}\">\n" +
    "                                            <div>\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"relation\" id=\"relation\" placeholder=\"{{'Relation'| translate }}\" ng-model=\"model.formValue.relation\"\n" +
    "                                                    ng-required=\"model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null\" />\n" +
    "                                            </div>\n" +
    "                                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.relation.$touched) && (steptwo.relation.$pristine || steptwo.relation.$invalid) && (steptwo.relation.$error.required) && model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null\">{{\"Enter Relationship\"| translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <div class=\"form-group\" ng-class=\"{ 'has-error' : (steptwo.$submitted || steptwo.age.$touched) && (steptwo.age.$pristine || steptwo.age.$invalid) && (steptwo.year.$error.required) && model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null}\">\n" +
    "                                            <div>\n" +
    "                                                <input type=\"text\" class=\"form-control\" name=\"age\" id=\"age\" placeholder=\"{{'age' | translate }}\" ng-model=\"model.formValue.age\"\n" +
    "                                                    ng-required=\"model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null\" ng-pattern=\"/^[0-9]*$/\" />\n" +
    "                                            </div>\n" +
    "                                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.age.$touched) && (steptwo.age.$pristine || steptwo.age.$invalid) && (steptwo.age.$error.required) && model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null\">{{\"Enter age\" | translate }} </span>\n" +
    "                                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.age.$touched) && (steptwo.age.$pristine || steptwo.age.$invalid) && (steptwo.age.$error.pattern) && model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null\">{{\"Enter Valid age Without Character\" | translate }} </span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6 select-opt fam\" ng-if=\"model.formValue.age >= 10\">\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <select ng-model=\"model.formValue.realtion_gender_id\" class=\"form-control\" name=\"relation_gender_id\" ng-options=\"sex.id as sex.name for sex in model.genderList\"\n" +
    "                                                ng-required=\"model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null\">\n" +
    "                                                <option value=\"\">{{\"Select Gender\"| translate }}</option>\n" +
    "                                            </select>\n" +
    "                                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.realtion_gender_id.$touched) && (steptwo.realtion_gender_id.$pristine || steptwo.realtion_gender_id.$invalid) && (steptwo.realtion_gender_id.$error.required) && model.formValue.is_guest_appointment == '2' && model.formValue.family_member == null\">{{'Select a Gender'| translate }}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\" ng-show=\"model.formValue.is_guest_appointment == '3'\">\n" +
    "                            <div class=\"form-group col-md-6\">\n" +
    "                                <input type=\"text\" name=\"guest_first_name\" ng-model=\"model.formValue.guest_first_name\" placeholder=\"Nombre\" class=\"form-control\"\n" +
    "                                    ng-required=\"model.formValue.is_guest_appointment == '3'\" ng-minlength=\"3\" ng-maxlength=\"25\"\n" +
    "                                    ng-pattern=\"/^[a-z A-Z]*$/\" />\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_first_name.$touched) && (steptwo.guest_first_name.$pristine || steptwo.guest_first_name.$invalid) && (steptwo.guest_first_name.$error.required) && (model.formValue.is_guest_appointment == '3')\">{{'First Name Required'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_first_name.$touched) && (steptwo.guest_first_name.$pristine || steptwo.guest_first_name.$invalid) && (steptwo.guest_first_name.$error.minlength) && (model.formValue.is_guest_appointment == '3')\">{{'Minimum 3 character required'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_first_name.$touched) && (steptwo.guest_first_name.$pristine || steptwo.guest_first_name.$invalid) && (steptwo.guest_first_name.$error.maxlength) && (model.formValue.is_guest_appointment == '3')\">{{'Maximum 25 Character'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_first_name.$touched) && (steptwo.guest_first_name.$pristine || steptwo.guest_first_name.$invalid) && (steptwo.guest_first_name.$error.pattern) && (model.formValue.is_guest_appointment == '3')\">{{'Enter a valid name without numbers'| translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-6\">\n" +
    "                                <input type=\"text\" name=\"guest_last_name\" ng-model=\"model.formValue.guest_last_name\" placeholder=\"Apellido\" class=\"form-control\"\n" +
    "                                    ng-required=\"model.formValue.is_guest_appointment == '3'\" ng-minlength=\"1\" ng-maxlength=\"20\"\n" +
    "                                    ng-pattern=\"/^[a-z A-Z]*$/\" />\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_last_name.$touched) && (steptwo.guest_last_name.$pristine || steptwo.guest_last_name.$invalid) && (steptwo.guest_last_name.$error.required) && (model.formValue.is_guest_appointment == '3')\">{{'Last Name Required'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_last_name.$touched) && (steptwo.guest_last_name.$pristine || steptwo.guest_last_name.$invalid) && (steptwo.guest_last_name.$error.minlength) && (model.formValue.is_guest_appointment == '3')\">{{'Minimum 1 Character'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_last_name.$touched) && (steptwo.guest_last_name.$pristine || steptwo.guest_last_name.$invalid) && (steptwo.guest_last_name.$error.maxlength) && (model.formValue.is_guest_appointment == '3')\">{{'Maximum 20 Character'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_last_name.$touched) && (steptwo.guest_last_name.$pristine || steptwo.guest_last_name.$invalid) && (steptwo.guest_last_name.$error.pattern) && (model.formValue.is_guest_appointment == '3')\">{{'Enter a valid name without numbers'| translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-6\">\n" +
    "                                <input type=\"text\" name=\"guest_postal_code\" ng-model=\"model.formValue.guest_postal_code\" placeholder=\"Codigo Postal\" class=\"form-control\"\n" +
    "                                    ng-minlength=\"3\" ng-maxlength=\"10\" ng-required=\"model.formValue.is_guest_appointment == '3'\"\n" +
    "                                />\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_postal_code.$touched) && (steptwo.guest_postal_code.$pristine || steptwo.guest_postal_code.$invalid) && (steptwo.guest_postal_code.$error.required) && (model.formValue.is_guest_appointment == '3')\">{{'Postal Code Required'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_postal_code.$touched) && (steptwo.guest_postal_code.$pristine || steptwo.guest_postal_code.$invalid) && (steptwo.guest_postal_code.$error.minlength) && (model.formValue.is_guest_appointment == '3')\">{{'Minimum 3 Character Required'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_postal_code.$touched) && (steptwo.guest_postal_code.$pristine || steptwo.guest_postal_code.$invalid) && (steptwo.guest_postal_code.$error.maxlength) && (model.formValue.is_guest_appointment == '3')\">{{'Maximum 10 Character Required'| translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-6\">\n" +
    "                                <input type=\"email\" name=\"guest_email\" ng-model=\"model.formValue.guest_email\" placeholder=\"Email\" class=\"form-control\" ng-required=\"model.formValue.is_guest_appointment == '3'\"\n" +
    "                                    ng-pattern=\"/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$/\" />\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_email.$touched) && (steptwo.guest_email.$pristine || steptwo.guest_email.$invalid) && (steptwo.guest_email.$error.required) && (model.formValue.is_guest_appointment == '3')\">{{'Enter Email'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_email.$touched) && (steptwo.guest_email.$pristine || steptwo.guest_email.$invalid) && (steptwo.guest_email.$error.pattern) && (model.formValue.is_guest_appointment == '3')\">{{'Enter valid email'| translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-6\">\n" +
    "                                <input class=\"form-control\" ng-model=\"model.formValue.guest_dob\" placeholder=\"DOB\" data-date-format=\"yyyy-MM-dd\" data-max-date=\"{{dobDateLimit}}\"\n" +
    "                                    data-autoclose=\"1\" name=\"guest_dob\" bs-datepicker type=\"text\" ng-required=\"model.formValue.is_guest_appointment == '3'\">\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_dob.$touched) && (steptwo.guest_dob.$pristine || steptwo.guest_dob.$invalid) && (steptwo.guest_dob.$error.required) && (model.formValue.is_guest_appointment == '3')\">{{'Select DOB'| translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-6 select-opt\">\n" +
    "                                <select ng-model=\"model.formValue.guest_gender_id\" class=\"form-control\" name=\"guest_gender_id\" ng-options=\"sex.id as sex.name for sex in model.genderList\"\n" +
    "                                    ng-required=\"model.formValue.is_guest_appointment == '3'\">\n" +
    "                                <option value=\"\"> Select Gender </option>\n" +
    "                            </select>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_gender_id.$touched) && (steptwo.guest_gender_id.$pristine || steptwo.guest_gender_id.$invalid) && (steptwo.guest_gender_id.$error.required) && (model.formValue.is_guest_appointment == '3')\">{{'Select a Gender'| translate }}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"common row\">\n" +
    "                            <div class=\"form-group col-md-6\">\n" +
      "                            <label class=\"col-sm-12 form-name\">Telefono</label>\n" +
    "                                <input type=\"text\" ng-model=\"model.formValue.phone\" name=\"phone\" placeholder=\"Mobile\" class=\"form-control\" ng-required=\"model.formValue.age >= 10\"\n" +
    "                                    ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\">\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.phone.$touched) && (steptwo.phone.$pristine || steptwo.phone.$invalid) && (steptwo.phone.$error.required)\">{{\"Enter Phone Number\" | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.phone.$touched) && (steptwo.phone.$pristine || steptwo.phone.$invalid) && (steptwo.phone.$error.minlength)\">{{\"Minimum 8 digits\" | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.phone.$touched) && (steptwo.phone.$pristine || steptwo.phone.$invalid) && (steptwo.phone.$error.maxlength)\">{{\"Maximum 12 digits\" | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.phone.$touched) && (steptwo.phone.$pristine || steptwo.phone.$invalid) && (steptwo.phone.$error.pattern)\">{{\"Enter a valid phone number\" | translate }}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-12\">\n" +
    "                                <label>Nota</label> "+
    "                                <textarea ng-model=\"model.formValue.notes\" name=\"patient_notes\" placeholder=\"¿Alguna nota para el consultorio del médico?\"\n" +
    "                                    class=\"form-control\"></textarea>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group dropdown-block appt-time\">\n" +
    "                            <label class=\"form-name\">Hora de la cita</label>\n" +
    "                            <div>\n" +
    "                                <div class=\"col-sm-3\">\n" +
    "                                    <div class=\"input-group\">\n" +
    "                                        <div class=\"input-group-addon\"></div>\n" +
    "                                        <input type=\"text\" class=\"form-control\" id=\"time\" placeholder=\"9:30 AM\" ng-value=\"appt_time\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-4\">\n" +
    "                                    <div class=\"form-group\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" id=\"day\" placeholder=\"Monday: 22/01/2017\" ng-value=\"appt_date\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-5\">\n" +
    "                                    <div class=\"input-group\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" id=\"docname\" placeholder=\"Clinica Maracay\" ng-value=\"doctorProfile.first_name\">\n" +
    "                                        <a href=\"javascript:void(0)\" class=\"input-group-addon\" ng-click=\"cancelAppoinment()\">\n" +
    "                                            <i class=\"fa fa-times-circle-o\"></i>\n" +
    "                                        </a>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-5\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <button class=\"btn btn-block btn-green\" type=\"submit\">{{\"Book for Free\" | translate }}</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                    <div class=\"alert alert-danger\">\n" +
    "                        <strong><i class='fa fa-ban'></i> {{$root.auth.user_profile.dr_title}} {{$root.auth.user_profile.first_name}}</strong>{{\"Doctor\n" +
    "                        will not able to schedule an appointment\" | translate }}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <div class=\"book-doctor-details col-md-12\">\n" +
    "                    <h2>{{doctorSpecialtyDiseases[0].name}}</h2>\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"media\">\n" +
    "                            <div class=\"media-left\" ng-class=\"(doctorProfile.User.data.is_verified == '1') ? 'certified-tag' : ''\">\n" +
    "                                <figure>\n" +
    "                                    <img class=\"doctor-image\" ng-src=\"{{doctorProfile.User.data.attachmentable.data.thumb.medium}}\" alt=\"{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\">\n" +
    "                                </figure>\n" +
    "                            </div>\n" +
    "                            <div class=\"media-body\">\n" +
    "                                <h3>{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}</h3>\n" +
    "                                <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorProfile.start_rating\"></input-stars>\n" +
    "                                <hr/>\n" +
    "                                <span ng-if=\"doctorProfile.specialties.length > 0\" ng-repeat=\"specialty in doctorProfile.specialties\">\n" +
    "								{{$first ? '' : $last ? ' and ' : ', '}} {{specialty.name}}\n" +
    "                            </span>\n" +
    "                                <h4>{{doctorProfile.work_place.data.location}}</h4>\n" +
    "                                <p><a href=\"#/doctor/{{doctorProfile.User.data.username}}\">Leer comentarios</a></p>\n" +
    "                                <p><span>Code: <a href=\"javascript:void(0)\">{{doctorProfile.User.data.user_code}}</a></span></p>\n" +
    "                                <address class=\"text-blue\"> {{doctorProfile.address}} </address>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"panel col-md-12 fa-inverse\">\n" +
    "                        <!--<p>Monday, November 21th - <span>10:30 AM</span></p>-->\n" +
    "                        <p>{{appt_date}}- <span>{{appt_time}}</span></p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <h4>{{\"Patient\" | translate }}</h4>\n" +
    "                                <p>{{$root.auth.user_profile.display_name}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <h4>{{\"Reason for your Visit\" | translate }}</h4>\n" +
    "                                <p>{{reasonToVisit}}</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!--<div class=\"col-md-3\">\n" +
    "                <address class=\"text-blue\"> {{doctorProfile.address}} </address>\n" +
    "            </div>\n" +
    "            <div class=\"js-time col-md-4\"> \n" +
    "                <ul class=\"list-unstyled\">\n" +
    "                    <li>{{'Appt Date:'| translate }} <span>{{appt_date}}</span></li>\n" +
    "                    <li>{{'Appt Time:'| translate }} <span>{{appt_time}}</span></li>\n" +
    "                </ul>\n" +
    "            </div>-->\n" +
    "                <p class=\"safe-booking col-md-12\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i>{{\"Safe booking\" | translate }}</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_index.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <nav-menu></nav-menu>\n" +
    "                <div class=\"tab-content\">\n" +
    "                    <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"ajustes\">\n" +
    "                        <div class=\"appointment-block pad-63\">\n" +
    "                            <div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-12\" role=\"navigation\">\n" +
    "                                        <div class=\"appointment-header clearfix\">\n" +
    "                                            <h1 class=\"pull-left\">{{'Appointments'|translate}} </h1>\n" +
    "                                            <div class=\"appointment-list pull-left\">\n" +
    "                                                <div class=\"pull-left all-appointment\">\n" +
    "                                                    <a href=\"#/appointments/all\"> {{'All'| translate}} </a>\n" +
    "                                                </div>\n" +
    "                                                <!--<ul class=\"nav navbar-nav\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                                                    <li ng-class=\"{active: $route.current.activetab == 'today'}\"><a href=\"#/appointments/today\"> {{'Today'| translate}} </a></li>\n" +
    "                                                    <li ng-class=\"{active: $route.current.activetab == 'week'}\"><a href=\"#/appointments/week\"> {{'Week'| translate}} </a></li>\n" +
    "                                                    <li ng-class=\"{active: $route.current.activetab == 'home'}\"><a href=\"#/appointments/month\"> {{'Month'| translate}} </a></li>\n" +
    "                                                </ul>-->\n" +
    "                                                <ul class=\"nav navbar-nav\">\n" +
    "                                                    <li><a href=\"#/appointments/pending-approval\"> {{'Pending Approval'| translate}} </a></li>\n" +
    "                                                    <li><a href=\"#/appointments/approved\"> {{'Approved'| translate}} </a></li>\n" +
    "                                                    <li><a href=\"#/appointments/cancelled\"> {{'Cancelled'| translate}} </a></li>\n" +
    "                                                    <li><a href=\"#/appointments/rejected\"> {{'Rejected'| translate}} </a></li>\n" +
    "                                                </ul>\n" +
    "                                                 <!--<uibgroup-export islength=\"appointmentsLength\"></uibgroup-export>-->\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "    \n" +
    "                                    <!--<div class=\"col-md-12 table-block\">\n" +
    "                                        <div class=\"table-responsive\">\n" +
    "                                            <table class=\"table table-hover\">\n" +
    "                                                <thead>\n" +
    "                                                    <tr>\n" +
    "                                                        <th>{{'Appointment Info'| translate}}</th>\n" +
    "                                                        <th ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">{{'Patient\\'s Name'| translate}}</th>\n" +
    "                                                        <th ng-if=\"$root.auth.role_id == model.ConstUserType.User\">{{'Doctor\\'s Name'| translate}}</th>\n" +
    "                                                        <th>{{'Appointment Date'| translate}}</th>\n" +
    "                                                        <th>Hora de la cita</th>\n" +
    "                                                        <th>{{'Status'| translate}}</th>\n" +
    "                                                    </tr>\n" +
    "                                                </thead>\n" +
    "                                                <tbody>\n" +
    "                                                    <tr ng-repeat=\"appointment in appointments\">\n" +
    "                                                        <td>\n" +
    "                                                            <a href=\"#/appointment/{{appointment.id}}\" title=\"{{ 'View Details' | translate }}\" class=\"btn btn-green btn-animate btn-xs\">\n" +
    "                                                                {{ 'Details' | translate }}\n" +
    "                                                                <i class=\"fa fa-angle-double-right fa-fw\"></i>\n" +
    "                                                            </a>\n" +
    "                                                        </td>\n" +
    "                                                        <td ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                                                            {{appointment.User.user_profile.display_name}}\n" +
    "                                                            </a>\n" +
    "                                                        </td>\n" +
    "                                                        <td ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                                                            <a href=\"#/doctor/{{appointment.doctor_user.username}}\">\n" +
    "                                                                {{appointment.doctor_user.user_profile.display_name}}\n" +
    "                                                            </a>\n" +
    "                                                        </td>\n" +
    "                                                        <td>{{appointment.appointment_date | dateFormat}}</td>\n" +
    "                                                        <td>{{appointment.appointment_time}}</td>\n" +
    "                                                        <td>{{appointment.appointment_status.name}}</td>\n" +
    "                                                        <tr ng-show=\"_metadata.total === 0\">\n" +
    "                                                            <td colspan=\"6\" class=\"text-center\">\n" +
    "                                                                <p class=\"hor-space alert alert-danger\">{{'No Record Found' |translate}}</p>\n" +
    "                                                            </td>\n" +
    "                                                        </tr>\n" +
    "                                                    </tr>\n" +
    "                                                </tbody>\n" +
    "                                            </table>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"paging clearfix text-center\" ng-show=\"_metadata.total > 0\">\n" +
    "                                            <uib-pagination previous-text=\"&#xf104\" next-text=\"&#xf105\" total-items=\"_metadata.total\" num-pages=\"_metadata.total_pages\"\n" +
    "                                                ng-model=\"currentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-link-numbers=\"true\"\n" +
    "                                                rotate=\"false\" items-per-page=\"_metadata.per_page\" ng-change=\"paginate()\"></uib-pagination>\n" +
    "                                        </div>\n" +
    "                                    </div>-->\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"citas\">\n" +
    "                    <uibgroup-export islength=\"appointmentsLength\"></uibgroup-export>\n" +
    "                    <div ng-repeat=\"appointment_formatted in appointment_formatteds|limitTo:appointment_formatteds_year.length track by $index\">\n" +
    "                        <p>{{appointment_formatteds_year[$index]}}</p>\n" +
    "                        <div class=\"clearfix\" ng-repeat=\"appointment in appointment_formatted track by $index\">\n" +
    "                            <div class=\"col-sm-6\">\n" +
    "                                <a href=\"#/appointment/{{appointment.value.id}}\" class=\"appointment-result\">\n" +
    "                                    <p>\n" +
    "                                        <img src=\"assets/img/calendar.png\" alt=\"calendar\" ng-if=\"appointment.upComing == '1'\" />\n" +
    "                                        <img src=\"assets/img/tick-icon.png\" alt=\"tick\" ng-if=\"appointment.upComing == '0'\" />\n" +
    "                                        {{'Appointment with :'| translate}}\n" +
    "                                        <span ng-if=\"$root.auth.role_id == model.ConstUserType.User\">{{appointment.value.doctor_user.user_profile.display_name}}</span>\n" +
    "                                        <span ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">{{appointment.value.User.user_profile.display_name}}</span>\n" +
    "                                        <span ng-if=\"$root.auth.role_id == model.ConstUserType.User\" class=\"doc-name\">{{appointment.value.doctor_user.user_profile.specialties[0].name}}</span>\n" +
    "                                    </p>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <p>{{appointment.value.appointment_time}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <p>{{appointment.value.appointment_date}}</p>\n" +
    "                            </div>					    \n" +
    "                            <div class=\"col-sm-2 citas-location\">\n" +
    "                                <p>{{appointment.value.workplace.location}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <p ng-if=\"appointment.value.appointment_status_id == 1\">Aprobación pendiente</p>\n" +
    "                                <p ng-if=\"appointment.value.appointment_status_id == 2\">Aprobado</p>\n" +
    "                                <p ng-if=\"appointment.value.appointment_status_id == 3\">Cerrado</p>\n" +
    "                                <p ng-if=\"appointment.value.appointment_status_id == 4\">Cancelado</p>\n" +
    "                                <p ng-if=\"appointment.value.appointment_status_id == 5\">Rechazado</p>\n" +
    "                                <p ng-if=\"appointment.value.appointment_status_id == 6\">Expirado</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-1 apps-coming\" ng-if=\"appointment.upComing == '1'\">\n" +
    "                                <a href=\"javascript:void(0)\" ng-click=\"appointstatuschange('cancel', appointment.id)\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></a>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-1 apps-coming expired\" ng-if=\"appointment.upComing == '0'\">\n" +
    "                                <a href=\"javascript:void(0)\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <p class=\"text-center\" ng-if=\"appointment_formatteds_year[$index] == year_condition\">\n" +
    "                            <a href=\"#/search\" class=\"btn btn-animate btn-green\" ng-if=\"$root.auth.role_id == model.ConstUserType.User\">{{'Make an appointment now'| translate}}</a>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <div ng-show=\"_metadata.total === 0\">\n" +
    "                        <p class=\"hor-space alert alert-danger\">{{'No Record Found' |translate}}</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"paging clearfix text-center\" ng-show=\"_metadata.total > 0\">\n" +
    "                        <uib-pagination total-items=\"_metadata.total\" num-pages=\"_metadata.total_pages\" ng-model=\"currentPage\" max-size=\"maxSize\" boundary-links=\"true\" boundary-link-numbers=\"true\" rotate=\"false\" items-per-page=\"_metadata.per_page\" previous-text=\"&#xf104;\" next-text=\"&#xf105;\" ng-change=\"paginate()\"></uib-pagination>\n" +
    "                    </div>\n" +
    "                    <!--<div class=\"expired\">\n" +
    "                        <p>{{'2016'| translate}}</p>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-sm-6\">\n" +
    "                                <p class=\"text-left\">\n" +
    "                                    <img src=\"assets/img/tick-icon.png\" alt=\"calendar\" />{{'Appointment with :'| translate}}\n" +
    "                                    <span>{{'Dr. Julio Castro | '| translate}}</span>\n" +
    "                                    <a href=\"javascript:void(0)\">{{'Dentist'| translate}}</a>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-1\">\n" +
    "                                <p>{{'4:30 pm'| translate}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-3\">\n" +
    "                                <p>{{'Tuesday:11/10/2016'| translate}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-1\">\n" +
    "                                <p>{{'Clinica Maracay'| translate}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-1 text-center\">\n" +
    "                                <a href=\"javascript:void(0)\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-sm-6\">\n" +
    "                                <p class=\"text-left\">\n" +
    "                                    <img src=\"assets/img/tick-icon.png\" alt=\"calendar\" />{{'Appointment with :'| translate}}\n" +
    "                                    <span>{{'Dr. Julio Castro | '| translate}}</span>\n" +
    "                                    <a href=\"javascript:void(0)\">{{'Dentist'| translate}}</a>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-1\">\n" +
    "                                <p>{{'4:30 pm'| translate}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-3\">\n" +
    "                                <p>{{'Tuesday:11/10/2016'| translate}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-1\">\n" +
    "                                <p>{{'Clinica Maracay'| translate}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-1 text-center\">\n" +
    "                                <a href=\"javascript:void(0)\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("Appointments/appointment_modifications_add.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_modifications_add.tpl.html",
    "<section class=\"clearfix pad-63 appmt-form\">\n" +
    "    <div class=\"container\">\n" +
    "    	<div class=\"col-md-5 col-md-offset-3 border\">\n" +
    "            <div class=\"page-head\">   \n" +
    "                <h1>{{'Appointment Settings Modification Add'| translate }}</h1>\n" +
    "            </div>\n" +
    "            <div class=\"form-content\">\n" +
    "                <form name=\"settingValue\" method=\"post\" ng-submit=\"model.appointmentModificationAdd(settingValue)\" novalidate>\n" +
    "                    <div class=\"form-heading\">\n" +
    "                        <h2>{{'Change Your Calender Settings'| translate }}</h2>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-body\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input class=\"form-control\" ng-model=\"model.settingValue.appoint_date\" data-date-format=\"yyyy-MM-dd\" data-start-date=\"{{date|date:'yyyy-MM-dd'}}\" data-min-date=\"{{dateBlockeBefore}}\"  data-autoclose=\"1\" name=\"date2\" bs-datepicker type=\"appoint_date\" required=\"required\" placeholder=\"Date\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"checkbox-field1\">\n" +
    "                                <input class=\"hide\" type=\"checkbox\" name=\"type\" ng-model=\"model.settingValue.type\" ng-change=\"model.ShowHide('type')\" />\n" +
    "                                <span></span>{{'Make a day off' | translate }}\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "            \n" +
    "                        <div class=\"form-group\" ng-hide=\"model.settingValue.type\">\n" +
    "                            <label>{{'Choose your Available Time' | translate }}</label>\n" +
    "                            \n" +
    "                            <select class=\"form-control\"  chosen single-backstroke-delete=\"true\" display-disabled-options=\"true\" multiple ng-model=\"model.settingValue.appt_time\" ng-options=\"time for time in timeSlot\">\n" +
    "                                <option value=\"\"></option>\n" +
    "                            </select>\n" +
    "                           <!-- <div class=\"form-group\">\n" +
    "                                <label class=\"checkbox-field\">\n" +
    "                                    <input type=\"checkbox\" name=\"is_two_session\" ng-model=\"model.settingValue.is_two_session\" ng-change=\"model.ShowHide('is_two_session')\" />\n" +
    "                                    <span>Practice operates in two sessions</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label>Practice Open</label>\n" +
    "                                <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_open\" name=\"practice_open\" bs-timepicker data-time-type=\"none\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_two_session\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Lunch At</label>\n" +
    "                                    <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.lunch_at\" name=\"lunch_at\" bs-timepicker data-time-type=\"none\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                </div>\n" +
    "    \n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Resume At</label>\n" +
    "                                    <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.resume_at\" name=\"resume_at\" bs-timepicker data-time-type=\"none\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label>Practice Close</label>\n" +
    "                                <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_close\" name=\"practice_close\" bs-timepicker data-time-type=\"none\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                            </div> \n" +
    "                           -->\n" +
    "    \n" +
    "                        </div>\n" +
    "                        <!-- Common Setting Completed Here -->\n" +
    "                        \n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Active / In Active</label>\n" +
    "                            <div class=\"switch-option\">\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.settingValue.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-footer education-btn appmt-btn\">\n" +
    "                        <button class=\"btn btn-green confirm\" type=\"submit\">{{'Add'| translate }}</button>\n" +
    "                        <a href=\"#/appointments/modifications\" class=\"btn cancel\">{{'Back'| translate }}</a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "       	</div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_modifications_edit.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_modifications_edit.tpl.html",
    "<section class=\"clearfix pad-63 appmt-form\">\n" +
    "    <div class=\"container\">\n" +
    "    	<div class=\"col-md-5 col-md-offset-3 border\">\n" +
    "            <div class=\"page-head\">\n" +
    "                <h1>{{'Appointment Settings Modification Add'| translate}}</h1>\n" +
    "            </div>\n" +
    "            <div class=\"form-content\">\n" +
    "                <form name=\"modificationform\" method=\"post\" ng-submit=\"model.appointmentModificationEdit(modificationform)\" novalidate>\n" +
    "                    <div class=\"form-heading\">\n" +
    "                        <h2><span>{{'Change Your Calender Settings'| translate}}</span></h2>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-body\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Date</label>\n" +
    "                            <input class=\"form-control\" ng-model=\"model.settingValue.appoint_date\" data-date-format=\"yyyy-MM-dd\" readonly data-start-date=\"{{date|date:'yyyy-MM-dd'}}\" data-min-date=\"{{date|date:'yyyy-MM-dd'}}\"  data-autoclose=\"1\" name=\"type\" bs-datepicker type=\"appoint_date\" required=\"required\">\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"checkbox-field1\">\n" +
    "                                <input class=\"hide\" type=\"checkbox\" name=\"type\" ng-model=\"model.settingValue.type\" ng-change=\"model.ShowHide('type')\" ng-checked=\"model.settingValue.type\"/>\n" +
    "                                <span></span>{{'Make a day off' | translate }}\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "            \n" +
    "                        <div class=\"form-group\" ng-hide=\"model.settingValue.type\">\n" +
    "                             <label>{{'Choose your Available Time' | translate }}</label>\n" +
    "                            <select class=\"form-control\"  chosen single-backstroke-delete=\"true\" display-disabled-options=\"true\" multiple ng-model=\"model.settingValue.appt_time\" ng-options=\"time for time in timeSlot\">\n" +
    "                                <option value=\"\"></option>\n" +
    "                            </select>\n" +
    "                        <!--\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"checkbox-field\">\n" +
    "                                    <input type=\"checkbox\" name=\"is_two_session\" ng-model=\"model.settingValue.is_two_session\" ng-change=\"model.ShowHide('is_two_session')\" ng-checked=\"model.settingValue.is_two_session === 1\"/>\n" +
    "                                    <span>Practice operates in two sessions</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label>Practice Open</label>\n" +
    "                                <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_open\" name=\"practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\" ng-value=\"{{model.settingValue.practice_open}}\">\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_two_session\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Lunch At</label>\n" +
    "                                    <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.lunch_at\" name=\"lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Resume At</label>\n" +
    "                                    <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.resume_at\" name=\"resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label>Practice Close</label>\n" +
    "                                <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_close\" name=\"practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                            </div>\n" +
    "                        -->\n" +
    "                        </div>\n" +
    "                        <!-- Common Setting Completed Here -->\n" +
    "            \n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Active / In Active</label>\n" +
    "                            <div class=\"switch-option\">\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.settingValue.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>	\n" +
    "                    </div>\n" +
    "                    <div class=\"form-footer education-btn appmt-btn\">\n" +
    "                        <button class=\"btn btn-green confirm\" type=\"submit\">{{'Update'| translate }}</button>\n" +
    "                        <a href=\"#/appointments/modifications\" class=\"btn cancel\">{{'Back'| translate }}</a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "   		</div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_modifications.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_modifications.tpl.html",
    "<section class=\"clearfix pad-63 appmt-table\">\n" +
    "	<div class=\"container\">\n" +
    "        <div class=\"page-head clearfix\">    \n" +
    "            <h1 class=\"pull-left\">{{'Appointment Settings Modification'| translate}}</h1>\n" +
    "                <!-- for search -->\n" +
    "                <div class=\"pull-right search-table-field col-md-5 appmt-modification\"> \n" +
    "                    <div class=\"pull-right col-md-3\">\n" +
    "                        <a href=\"#/appointments/modifications/add\" class=\"btn btn-green btn-animate pull-right\"><i class=\"fa fa-plus-circle fa-fw\"></i>Add</a>\n" +
    "                	</div>\n" +
    "                    <!--<div class=\"pull-right col-md-7\">\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search\">\n" +
    "                            <span class=\"input-group-btn\">\n" +
    "                                <button type=\"button\" class=\"btn btn-green btn-animate\">Go!</button>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>-->\n" +
    "                </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "        <div class=\"col-md-12 table-block\"> \n" +
    "            <!-- for table -->\n" +
    "            <div class=\"table-responsive\">\n" +
    "                <table class=\"table table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th width=\"200\">{{'Date'| translate}}</th>\n" +
    "                            <th width=\"200\">{{'Type'| translate}}</th>\n" +
    "                            <th width=\"500\">{{'Slot'| translate}}</th>\n" +
    "                            <th width=\"150\">{{'Status'| translate}}</th>\n" +
    "                            <th width=\"220\">{{'Action'| translate}}</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"modifyValue in modificationList\" ng-show=\"_metadata.total !== 0\">\n" +
    "                            <td>{{modifyValue.appoint_date}}</td>\n" +
    "                            <td>\n" +
    "                                <span ng-show=\"modifyValue.type == 1\">\n" +
    "                                    {{'Day Off'| translate}}\n" +
    "                                </span>\n" +
    "                                <span ng-show=\"modifyValue.type == 0\">\n" +
    "                                    {{'Schedule Change'| translate}}\n" +
    "                                </span>\n" +
    "                            </td>\n" +
    "                            \n" +
    "                            <td>\n" +
    "                                <span ng-show=\"modifyValue.practice_open == ''\">\n" +
    "                                    --\n" +
    "                                </span>\n" +
    "                                <span ng-show=\"modifyValue.practice_open != ''\" >\n" +
    "                                    <ul ng-bind-html=\"modifyValue.practice_open | splitedShow\" class=\"time-slots list-unstyled\">\n" +
    "                                    </ul>\n" +
    "                                </span>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"switch-option\" ng-if=\"modifyValue.is_active == '1'\">\n" +
    "                                    <switch id=\"enabled\" name=\"enabled\" ng-model=\"swithcOn\" disabled=\"true\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                                </div>\n" +
    "                                <div class=\"switch-option\" ng-if=\"modifyValue.is_active != '1'\">\n" +
    "                                    <switch id=\"enabled\" name=\"enabled\" disabled=\"true\" ng-model=\"swithcOff\" on=\"Yes\"  off=\"No\" class=\"green\"></switch>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td class=\"action-btn\">\n" +
    "                                <a href=\"#/appointments/modifications/edit/{{modifyValue.id}}\" class=\"btn green\">\n" +
    "                                    <i class=\"fa fa-pencil\"></i>Edit\n" +
    "                                </a>\n" +
    "                                <a ng-click='AptModificationDelete(modifyValue.id)' class=\"btn red\">\n" +
    "                                    <i class=\"fa fa-trash\"></i>Delete\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr ng-show=\"_metadata.total === 0\">\n" +
    "                            <td colspan=\"5\">\n" +
    "                                <p class=\"hor-space alert alert-danger\">{{'No Record Found' |translate}}</p>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div> \n" +
    "            <div class=\"paging clearfix text-center\" ng-show=\"_metadata.total > 0\">\n" +
    "                <uib-pagination previous-text=\"&#xf104\" next-text=\"&#xf105\" total-items=\"_metadata.total\" num-pages=\"_metadata.total_pages\" ng-model=\"currentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-link-numbers=\"true\" rotate=\"false\" items-per-page=\"_metadata.per_page\" ng-change=\"paginate()\"></uib-pagination>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("Appointments/appointment_note.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_note.tpl.html",
    "<div class=\"appointment-block app-modal\">\n" +
    "    <div class=\"page-head\">  \n" +
    "        <h1>{{'Note' | translate }}</h1>\n" +
    "    </div>\n" +
    "    <form class=\"form-horizontal form-content appmt-view\" name=\"remainder\" ng-submit=\"remainder_note_add(remainder.$valid)\">\n" +
    "        <div class=\"form-group\" ng-class=\"{ 'has-error' : (remainder.reminder_text.$submitted || remainder.reminder_text.reminder_text.$touched) && (remainder.reminder_text.reminder_text.$pristine || remainder.reminder_text.reminder_text.$invalid) && (remainder.reminder_text.reminder_text.$error.required)}\">\n" +
    "            <label >{{'Note Description' | translate }}</label>\n" +
    "            <textarea ng-model=\"model.remainder.reminder_text\" name=\"reminder_text\" placeholder=\"Note Description\" class=\"form-control\" ng-required=\"true\"></textarea>\n" +
    "            <span class=\"error\" ng-show=\"(remainder.reminder_text.$submitted || remainder.reminder_text.$touched) && (remainder.reminder_text.$pristine || remainder.reminder_text.$invalid) && (remainder.reminder_text.$error.required)\">{{'Enter Remainder Text'| translate }} </span>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"form-group education-btn appmt-btn\">\n" +
    "            <button type=\"submit\" class=\"btn btn-green\">{{'Submit' | translate}}</button>\n" +
    "            <button class=\"btn cancel\" type=\"button\" ng-click=\"closeModal()\">{{'Cancel' | translate}}</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("Appointments/appointment_remainder.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_remainder.tpl.html",
    "<div class=\"appointment-block app-modal\">\n" +
    "    <div class=\"page-head\">  \n" +
    "        <h1>{{'Remainder' | translate }}</h1>\n" +
    "    </div>\n" +
    "    <form class=\"form-horizontal form-content appmt-view\" name=\"remainder\" ng-submit=\"remainder_add(remainder.$valid)\">\n" +
    "        <div class=\"form-group\" ng-class=\"{ 'has-error' : (remainder.reminder_text.$submitted || remainder.reminder_text.reminder_text.$touched) && (remainder.reminder_text.reminder_text.$pristine || remainder.reminder_text.reminder_text.$invalid) && (remainder.reminder_text.reminder_text.$error.required)}\">\n" +
    "            <label >{{'Remainder Text' | translate }}</label>\n" +
    "            <textarea ng-model=\"model.remainder.reminder_text\" name=\"reminder_text\" placeholder=\"Remainder text\" class=\"form-control\" ng-required=\"true\"></textarea>\n" +
    "            <span class=\"error\" ng-show=\"(remainder.reminder_text.$submitted || remainder.reminder_text.$touched) && (remainder.reminder_text.$pristine || remainder.reminder_text.$invalid) && (remainder.reminder_text.$error.required)\">{{'Enter Remainder Text'| translate }} </span>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"form-group\">\n" +
    "            <label>{{'Remainder on' | translate }}</label>\n" +
    "            <input class=\"form-control\" ng-model=\"model.remainder.remind_on\" placeholder=\"Date\"  data-date-format=\"yyyy-MM-dd\" data-max-date=\"{{dobDateLimit}}\" data-autoclose=\"1\" name=\"remind_on\" bs-datepicker type=\"text\" ng-required=\"true\">\n" +
    "            <span class=\"error\" ng-show=\"(remainder.$submitted || remainder.remind_on.$touched) && (remainder.remind_on.$pristine || remainder.remind_on.$invalid) && (remainder.remind_on.$error.required)\">{{'Select Date'| translate }}</span>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"form-group education-btn appmt-btn\">\n" +
    "            <button type=\"submit\" class=\"btn btn-green\">{{'Submit' | translate}}</button>\n" +
    "            <button class=\"btn cancel\" type=\"button\" ng-click=\"closeModal()\">{{'Cancel' | translate}}</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("Appointments/appointment_setting.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_setting.tpl.html",
    "<section class=\"clearfix pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'Change Your Calender Settings'| translate}}</h1>\n" +
    "        </div>\n" +
    "        <div class=\"form-content calendar-settings\">\n" +
    "            <form name=\"settingForm\" ng-submit=\"model.settingUpdate(settingForm.$valid)\" novalidate>\n" +
    "                <div class=\"form-body row\">\n" +
    "                	<div class=\"clearfix\">\n" +
    "                        <div class=\"col-md-5 date-section m-t-0\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"checkbox-field\">\n" +
    "                                    <input class=\"hide\" type=\"checkbox\" ng-model=\"model.settingValue.is_today_first_day\" ng-checked=\"model.settingValue.is_today_first_day === 1\" name=\"is_today_first_day\"/>\n" +
    "                                    <span class=\"custom-check\"></span>\n" +
    "                                    <span>{{'Always show today as first day on my calendar '| translate}}</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-7 select-opt\">\n" +
    "                                <select class=\"form-control\" name=\"calendar_slot_id\" ng-model=\"model.settingValue.calendar_slot_id\">  \n" +
    "                                    <option value=\"\">{{'Show Calendar Slots of'| translate}}</option>     \n" +
    "                                    <option ng-repeat=\"calendar_slot in calendarSlots\" value=\"{{calendar_slot.id}}\" ng-selected=\"model.settingValue.calendar_slot_id == calendar_slot.id\">{{calendar_slot.name}}</option>	                         \n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-7\">\n" +
    "                            <div class=\"form-group col-md-12\">\n" +
    "                                <label class=\"checkbox-field\">\n" +
    "                                    <input class=\"hide\" type=\"checkbox\" name=\"is_two_session\" ng-model=\"model.settingValue.is_two_session\" ng-checked=\"model.settingValue.is_two_session === 1\"/>\n" +
    "                                    <span class=\"custom-check\"></span>\n" +
    "                                    <span>{{'Practice operates in two sessions'| translate}}</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-12 session-block\">\n" +
    "                                <div class=\"form-group col-md-6\">\n" +
    "                                    <label class=\"col-md-4\">{{'Practice Open'| translate}}</label>\n" +
    "                                    <div class=\"col-md-8\">\n" +
    "                                        <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_open\" name=\"practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                        <!-- <span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.practice_open.$touched) && (settingForm.practice_open.$pristine || settingForm.practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span> -->\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                 <div ng-show=\"model.settingValue.is_two_session\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">{{'Lunch At'| translate}}</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.lunch_at\" name=\"lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.lunch_at.$touched) && (settingForm.lunch_at.$pristine || settingForm.lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.open_lunch\">{{model.open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">{{'Resume At'| translate}}</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.resume_at\" name=\"resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.resume_at.$touched) && (settingForm.resume_at.$pristine || settingForm.resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                           <span class=\"error\" ng-show=\"model.lunch_resume\">{{model.lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                 </div>\n" +
    "                                <div class=\"form-group col-md-6\">\n" +
    "                                    <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                    <div class=\"col-md-8\">\n" +
    "                                        <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_close\" name=\"practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                        <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.practice_close.$touched) && (settingForm.practice_close.$pristine || settingForm.practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        <span class=\"error\" ng-show=\"model.resume_close\">{{model.resume_close}}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"model.open_close\">{{model.open_close}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                	</div>\n" +
    "                    <!-- Common Setting Completed Here -->\n" +
    "    \n" +
    "                    <div ng-show=\"model.settingValue.type\">\n" +
    "                    	<div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                 <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_sunday_open\" ng-checked=\"model.settingValue.is_sunday_open === 1\" ng-model=\"model.settingValue.is_sunday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Sunday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"sunday_two_session\" ng-checked=\"model.settingValue.sunday_two_session === 1\" ng-model=\"model.settingValue.sunday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Sunday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                       \n" +
    "                            <div ng-show=\"model.settingValue.is_sunday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_practice_open\" name=\"sunday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_practice_open.$touched) && (settingForm.sunday_practice_open.$pristine || settingForm.sunday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_practice_close\" name=\"sunday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_practice_close.$touched) && (settingForm.sunday_practice_close.$pristine || settingForm.sunday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_resume_close\">{{model.sunday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_open_close\">{{model.sunday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                \n" +
    "                                <div ng-show=\"model.settingValue.sunday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_lunch_at\" name=\"sunday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_lunch_at.$touched) && (settingForm.sunday_lunch_at.$pristine || settingForm.sunday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_open_lunch\">{{model.sunday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_resume_at\" name=\"sunday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_resume_at.$touched) && (settingForm.sunday_resume_at.$pristine || settingForm.sunday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_lunch_resume\">{{model.sunday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_monday_open\" ng-checked=\"model.settingValue.is_monday_open === 1\" ng-model=\"model.settingValue.is_monday_open\"/>\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Monday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"monday_two_session\" ng-checked=\"model.settingValue.monday_two_session === 1\" ng-model=\"model.settingValue.monday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Monday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_monday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                     <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_practice_open\" name=\"monday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                           <!-- <span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_practice_open.$touched) && (settingForm.monday_practice_open.$pristine || settingForm.monday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_practice_close\" name=\"monday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_practice_close.$touched) && (settingForm.monday_practice_close.$pristine || settingForm.monday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_resume_close\">{{model.monday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_open_close\">{{model.monday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.monday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_lunch_at\" name=\"monday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_lunch_at.$touched) && (settingForm.monday_lunch_at.$pristine || settingForm.monday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_open_lunch\">{{model.monday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_resume_at\" name=\"monday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_resume_at.$touched) && (settingForm.monday_resume_at.$pristine || settingForm.monday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_lunch_resume\">{{model.monday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_tuesday_open\" ng-checked=\"model.settingValue.is_tuesday_open === 1\" ng-model=\"model.settingValue.is_tuesday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Tuesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"tuesday_two_session\" ng-checked=\"model.settingValue.tuesday_two_session === 1\" ng-model=\"model.settingValue.tuesday_two_session\"/>\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Tuesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_tuesday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_practice_open\" name=\"tuesday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_practice_open.$touched) && (settingForm.tuesday_practice_open.$pristine || settingForm.tuesday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_practice_close\" name=\"practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_practice_close.$touched) && (settingForm.tuesday_practice_close.$pristine || settingForm.tuesday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_resume_close\">{{model.tuesday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_open_close\">{{model.tuesday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.tuesday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_lunch_at\" name=\"tuesday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_lunch_at.$touched) && (settingForm.tuesday_lunch_at.$pristine || settingForm.tuesday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_open_lunch\">{{model.tuesday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_resume_at\" name=\"tuesday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                           <!-- <span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_resume_at.$touched) && (settingForm.tuesday_resume_at.$pristine || settingForm.tuesday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_lunch_resume\">{{model.tuesday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_wednesday_open\" ng-checked=\"model.settingValue.is_wednesday_open === 1\" ng-model=\"model.settingValue.is_wednesday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Wednesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"wednesday_two_session\" ng-checked=\"model.settingValue.wednesday_two_session === 1\" ng-model=\"model.settingValue.wednesday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Wednesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    \n" +
    "                            <div ng-show=\"model.settingValue.is_wednesday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_practice_open\" name=\"wednesday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_practice_open.$touched) && (settingForm.wednesday_practice_open.$pristine || settingForm.wednesday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_practice_close\" name=\"wednesday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_practice_close.$touched) && (settingForm.wednesday_practice_close.$pristine || settingForm.wednesday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_resume_close\">{{model.wednesday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_open_close\">{{model.wednesday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.wednesday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_lunch_at\" name=\"wednesday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_lunch_at.$touched) && (settingForm.wednesday_lunch_at.$pristine || settingForm.wednesday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_open_lunch\">{{model.wednesday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_resume_at\" name=\"wednesday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_resume_at.$touched) && (settingForm.wednesday_resume_at.$pristine || settingForm.wednesday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_lunch_resume\">{{model.wednesday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_thrusday_open\" ng-checked=\"model.settingValue.is_thrusday_open === 1\" ng-model=\"model.settingValue.is_thrusday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Thrusday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"thrusday_two_session\" ng-checked=\"model.settingValue.thrusday_two_session === 1\" ng-model=\"model.settingValue.thrusday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Thrusday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        \n" +
    "                            <div ng-show=\"model.settingValue.is_thrusday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_practice_open\" name=\"thrusday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_practice_open.$touched) && (settingForm.thrusday_practice_open.$pristine || settingForm.thrusday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_practice_close\" name=\"thrusday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_practice_close.$touched) && (settingForm.thrusday_practice_close.$pristine || settingForm.thrusday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_resume_close\">{{model.thrusday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_open_close\">{{model.thrusday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                \n" +
    "                                <div ng-show=\"model.settingValue.thrusday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_lunch_at\" name=\"thrusday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_lunch_at.$touched) && (settingForm.thrusday_lunch_at.$pristine || settingForm.thrusday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_open_lunch\">{{model.thrusday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_resume_at\" name=\"thrusday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_resume_at.$touched) && (settingForm.thrusday_resume_at.$pristine || settingForm.thrusday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_lunch_resume\">{{model.thrusday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_friday_open\" ng-checked=\"model.settingValue.is_friday_open === 1\" ng-model=\"model.settingValue.is_friday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Friday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"friday_two_session\" ng-checked=\"model.settingValue.friday_two_session === 1\" ng-model=\"model.settingValue.friday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Friday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    \n" +
    "                            <div ng-show=\"model.settingValue.is_friday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_practice_open\" name=\"friday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_practice_open.$touched) && (settingForm.friday_practice_open.$pristine || settingForm.friday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_practice_close\" name=\"friday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_practice_close.$touched) && (settingForm.friday_practice_close.$pristine || settingForm.friday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_resume_close\">{{model.friday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_open_close\">{{model.friday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.friday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_lunch_at\" name=\"friday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_lunch_at.$touched) && (settingForm.friday_lunch_at.$pristine || settingForm.friday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_open_lunch\">{{model.friday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_resume_at\" name=\"friday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_resume_at.$touched) && (settingForm.friday_resume_at.$pristine || settingForm.friday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_lunch_resume\">{{model.friday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                    <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_saturday_open\" ng-checked=\"model.settingValue.is_saturday_open === 1\" ng-model=\"model.settingValue.is_saturday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Saturday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"saturday_two_session\" ng-checked=\"model.settingValue.saturday_two_session === 1\" ng-model=\"model.settingValue.saturday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Saturday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_saturday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_practice_open\" name=\"saturday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_practice_open.$touched) && (settingForm.saturday_practice_open.$pristine || settingForm.saturday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_practice_close\" name=\"saturday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_practice_close.$touched) && (settingForm.saturday_practice_close.$pristine || settingForm.saturday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_resume_close\">{{model.saturday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_open_close\">{{model.saturday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.saturday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_lunch_at\" name=\"saturday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_lunch_at.$touched) && (settingForm.saturday_lunch_at.$pristine || settingForm.saturday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_open_lunch\">{{model.saturday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_resume_at\" name=\"saturday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_resume_at.$touched) && (settingForm.saturday_resume_at.$pristine || settingForm.saturday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_lunch_resume\">{{model.saturday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                   		</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-10\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"checkbox-field\">\n" +
    "                                <input class=\"hide\" type=\"checkbox\" ng-model=\"model.settingValue.type\" ng-checked=\"model.settingValue.type === 1\" name=\"type\"/>\n" +
    "                                <span class=\"custom-check\"></span>\n" +
    "                                <span>Visiting hours are NOT same for all working days in a week</span>\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group switch-option\">\n" +
    "                            <label>Active / In Active</label>\n" +
    "                            <div>\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.settingValue.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 setting-btn\">\n" +
    "                        <button class=\"btn btn-green btn-animate btn-block show\" type=\"submit\" ng-disabled=\"is_disable\">{{'Update'| translate }}</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_view.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointment_view.tpl.html",
    "<div class=\"appointment-block pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head app-view clearfix\">  \n" +
    "            <h1 class=\"pull-left\">{{'The appointment is scheduled for' | translate }} {{appointment.appointment_date | appointmentDate}} {{appointment.appointment_time}}</h1>\n" +
    "        	<a href=\"#/appointments/all\" class=\"btn btn-green pull-right\"><i class=\"fa fa-chevron-left\"></i>Back</a>\n" +
    "        </div>\n" +
    "        <form class=\"form-horizontal appmt-view view-main\">\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                <label class=\"col-sm-3 col-md-2\">{{'Doctor' | translate }}</label>\n" +
    "                <span class=\"col-sm-9 col-md-10 name\">\n" +
    "                	<a href=\"#/doctor/{{appointmentUser.username}}\">{{appointmentUser.user_profile.dr_title}} {{appointmentUser.user_profile.first_name}} {{appointmentUser.user_profile.last_name}}</a>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <label class=\"col-sm-3 col-md-2\">{{'Patient Name' | translate }}</label>\n" +
    "                <span class=\"col-sm-9 col-md-10 name\">{{appointmentUser.user_profile.first_name}} {{appointmentUser.user_profile.last_name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 col-md-2\">{{'Gender' | translate }}</label>\n" +
    "                <span class=\"col-sm-9 col-md-10\">{{appointmentUser.user_profile.gender.name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                <label class=\"col-sm-3 col-md-2\">{{'Where' | translate }}</label>\n" +
    "                <span class=\"col-sm-9 col-md-10\"><span ng-if=\"appointmentUser.user_profile.address\">{{appointmentUser.user_profile.address}} <span ng-if=\"appointmentUser.user_profile.city.name\">{{appointmentUser.user_profile.city.name}}, </span> <span ng-if=\"appointmentUser.user_profile.country.name\">{{appointmentUser.user_profile.country.name}},</span><span ng-if=\"appointmentUser.user_profile.postal_code\"> {{appointmentUser.user_profile.postal_code}}<span></span></span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 col-md-2\">{{'Patient Note' | translate }}</label>\n" +
    "                <span class=\"col-sm-9 col-md-10\" ng-if=\"appointment.patient_note\">{{appointment.patient_note}}</span>\n" +
    "                <span class=\"col-sm-9 col-md-10\" ng-if=\"!appointment.patient_note\">--</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 col-md-2\">{{'Doctor Note' | translate }}</label>\n" +
    "                <span class=\"col-sm-9 col-md-10\" ng-if=\"appointment.doctor_note\">{{appointment.doctor_note}}</span>\n" +
    "                <span class=\"col-sm-9 col-md-10\" ng-if=\"!appointment.doctor_note\">--</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <label class=\"col-sm-3 col-md-2\">{{'Patient Status' | translate }}</label>\n" +
    "                <span class=\"col-sm-9 col-md-10\" ng-if=\"appointment.is_seen_before == 1\"> Already Seen </span>\n" +
    "                <span class=\"col-sm-9 col-md-10\" ng-if=\"appointment.is_seen_before == 0\"> New Patient </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <label class=\"col-sm-3 col-md-2\">{{'Reason for visit' | translate }}</label>\n" +
    "                <span class=\"col-sm-9 col-md-10\">{{appointment.specialty_diseas.name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 col-md-2\">{{'Appointment Status' | translate }}</label>\n" +
    "                <span class=\"col-sm-9 col-md-10 label label-warning\">{{appointment.appointment_status.name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <p ng-if=\"appointment.appointment_status_id == model.ConstAppointmentStatus.PendingApproval && appointmentDateTime >= todayDateTime\"> <button ng-click=\"changeappointstatus('confirm')\" class=\"btn btn-green btn-animate\"> {{'Confirm Appointment' | translate }} </button> </p>\n" +
    "                <p ng-if=\"appointment.appointment_status_id == model.ConstAppointmentStatus.PendingApproval && appointmentDateTime >= todayDateTime\"><button ng-click=\"changeappointstatus('decline')\" class=\"btn btn-danger btn-animate\"> {{'Decline Appointment' | translate }} </button> </p>\n" +
    "            </div>\n" +
    "            <div class=\"form-group appmt-view-btn\" ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                <p ng-if=\"appointmentDateTime >= todayDateTime &&  appointment.appointment_status_id != model.ConstAppointmentStatus.Cancelled\"> \n" +
    "                    <button ng-click=\"changeappointstatus('cancel')\" class=\"btn btn-danger btn-animate\"> \n" +
    "                        {{'Cancel Appointment' | translate }} \n" +
    "                    </button> \n" +
    "                </p>\n" +
    "            </div>\n" +
    "			<button type=\"button\" class=\"btn btn-red\" ng-click=\"showModal()\">{{\"Close\" | translate}}</button>\n" +
    "        </form>\n" +
    "        <div ng-if=\"$rootScope.auth.role_id == ConstUserType.Doctor\" class=\"appview-review\">\n" +
    "            <div class=\"patient-reviews row\" ng-if=\"model.reviewRate.isvisited && model.reviewRate.appointment_id == appointment.id\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <h4>{{'Your Rating'| translate }}</h4>\n" +
    "                    <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" ng-model=\"model.reviewRate.rate\" readonly=\"true\"></input-stars>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"patient-reviews row\" ng-if=\"!model.reviewRate.isvisited\">\n" +
    "                <form class=\"form-horizontal appmt-view\" ng-submit=\"patientReviewAdd(appointment.user_id,appointment.id)\">\n" +
    "                    <!-- content here -->\n" +
    "                    <div class=\"row separate-reviews\">                                    \n" +
    "                        <div class=\"col-sm-12\">\n" +
    "                            <h4>{{'Rating'| translate }}</h4>\n" +
    "                            <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" ng-model=\"model.reviewRate.rate\"></input-stars>\n" +
    "                        </div>\n" +
    "                    </div>   \n" +
    "                    <button type=\"submit\" class=\"btn btn-green\">{{\"Add Rating\" | translate}}</button>   \n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>        \n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("Appointments/appointments.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/appointments.tpl.html",
    "<section class=\"clearfix\">\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "        <div class=\"panel\">\n" +
    "            <div class=\"list-header text-center well-sm\">\n" +
    "                <h3>{{'Appointments'|translate}}</h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"well-lg panel clearfix\" ng-controller=\"AppointmentsController\">\n" +
    "            \n" +
    "                    <tab ng-repeat=\"tab in tabs\" heading=\"{{tab.title}}\" select=\"getContent($index)\" active=\"tab.active\" disabled=\"tab.disabled\">\n" +
    "                        <div ng-hide=\"!tabs.isLoaded\">\n" +
    "                            <h1>{{tab.title}}</h1>\n" +
    "                            <div ng-repeat=\"item in tabs.content\">\n" +
    "                                <p>{{item[tab.title]}}</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-hide=\"tabs.isLoaded\"><h3>Loading...</h3></div>\n" +
    "                    </tab>\n" +
    "            \n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("Appointments/booking_breadcrum.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Appointments/booking_breadcrum.tpl.html",
    "<ol class=\"breadcrumb\">\n" +
    "    <li ng-class=\"(stepStatus >= '1') ? 'active':''\"><a href=\"javascript:void(0);\">Información del Paciente</a></li>\n" +
    "    <li ng-class=\"(stepStatus >= '2') ? 'active':''\"><a href=\"javascript:void(0);\">Información de la cita</a></li>\n" +
    "    <!--<li ng-class=\"(stepStatus >= '3') ? 'active':''\"><a href=\"javascript:void(0);\">Detalles</a></li>-->\n" +
    "    <li ng-class=\"(stepStatus == '4') ? 'active':''\"><a href=\"javascript:void(0);\">Has Terminado</a></li>\n" +
    "</ol>");
}]);

angular.module("Search/search.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Search/search.tpl.html",
    "<div class=\"doctor-search\">\n" +
    "    <div class=\"search-block\">\n" +
    "        <div class=\"container\">\n" +
    "        	<div class=\"col-md-12 home-search\">\n" +
    "                <form data-uk-scrollspy=\"{cls:'uk-animation-slide-bottom', delay:100}\" class=\"form-inline col-md-12\" name=\"homeSearchForm\"  ng-submit=\"model.refinesearch()\" novalidate>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group speciality col-md-6\">\n" +
    "                            <div angucomplete-alt id=\"ex1\" ng-model=\"model.doctor\" placeholder=\"Especialidad, Nombre del Doctor\" maxlength=\"50\" pause=\"100\" selected-object=\"selectedCountry\" local-data=\"autocomplete\" search-fields=\"name\" title-field=\"name\" minlength=\"1\" image-field=\"image\" input-class=\"form-control form-control-small\" match-class=\"highlight\" ></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group city col-md-2\">\n" +
    "                            <select ng-model=\"model.city_id\" class=\"form-control\" name=\"city_id\"  ng-options=\"citiesliList.id as citiesliList.name for citiesliList in citiesliLists\">\n" +
    "                                <option value=\"\">{{'City'| translate }}</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group insurance col-md-3\">\n" +
    "                            <select ng-model=\"model.insurance_id\" class=\"form-control\" name=\"insurance_id\"  ng-options=\"insurance.id as insurance.name for insurance in insurances\">\n" +
    "                                <option value=\"\">{{'Insurance'| translate }}</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group form-btn col-md-1\">\n" +
    "                            <button class=\"btn btn-block btn-sblue btn-animate\" type=\"submit\"><i class=\"fa fa-search fa-inverse\" aria-hidden=\"true\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "				 </form>\n" +
    "            </div>\n" +
    "     	</div>\n" +
    "  	</div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-9 doctor-search-left\">\n" +
    "                <h3>{{'Doctors or Specialists' | translate }}</h3>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"form-inline col-md-5\">\n" +
    "                        <div class=\"form-group select-opt\">\n" +
    "                             <select ng-click=\"model.formFilter(0,0)\" ng-model=\"model.specialty_disease_id\" class=\"form-control\" name=\"specialty_disease_id\"  ng-options=\"specialtyDiseasliList.id as specialtyDiseasliList.name for specialtyDiseasliList in specialtyDiseasliLists\">\n" +
    "                                    <option value=\"\">{{'Specialists'| translate }}</option>\n" +
    "                             </select>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <ul class=\"list-inline clearfix col-md-6\">\n" +
    "                        <li ng-click=\"model.formFilter(1,0)\" ng-class=\"(model.gender_id == '' || model.gender_id == undefined) ? 'active' : ''\">\n" +
    "                            <a href=\"javascript:void(0)\" >{{'Any gender'| translate }}</a>\n" +
    "                        </li>\n" +
    "                        <li ng-click=\"model.formFilter(1,1)\" ng-class=\"(model.gender_id == 1) ? 'active' : ''\">\n" +
    "                            <a href=\"javascript:void(0)\" >{{'Male'| translate }}</a>\n" +
    "                        </li>\n" +
    "                        <li ng-click=\"model.formFilter(1,2)\" ng-class=\"(model.gender_id == 2) ? 'active' : ''\">\n" +
    "                            <a href=\"javascript:void(0)\">{{'Female'| translate }}</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <p class=\"pull-left\" ng-if=\"model.specialtyDetail.name\">{{ model.specialtyDetail.name | translate }} {{'and other suppliers in Venezuela'| translate }}</p>\n" +
    "                <div class=\"search-responsive col-md-12\">\n" +
    "                    <div class=\"search-result clearfix\">\n" +
    "                        <div class=\"search-result-header clearfix\">\n" +
    "                        	<ul class=\"list-inline col-md-7\">\n" +
    "                                <li ng-click=\"model.formFilter(2,0)\" ng-class=\"(model.appointment == '' || model.appointment == undefined) ? 'active' : ''\"><a href=\"javascript:void(0)\">Cualquier día</a></li>\n" +
    "                                <li ng-click=\"model.formFilter(2,1)\" ng-class=\"(model.appointment == 'today') ? 'active' : ''\"><a href=\"javascript:void(0)\">Hoy</a></li>\n" +
    "                                <li ng-click=\"model.formFilter(2,2)\" ng-class=\"(model.appointment == 'threeday') ? 'active' : ''\"><a href=\"javascript:void(0)\">Próximos 3 días</a></li>\n" +
    "                                <!--<li><a href=\"javascript:void(0)\">Filter(1)</a></li>-->\n" +
    "                            </ul>\n" +
    "              \n" +
    "                            <div class=\"col-md-5 pull-right\">\n" +
    "                                <div class=\"week-hender\">\n" +
    "                                    <ul class=\"search-week-ul list-inline text-center\">\n" +
    "                                        <li class=\"search-left-arrow\"><a href=\"javascript:void(0)\" ng-click=\"prevWeek()\"> <i class=\"fa fa-angle-left fa-2x\"></i></a></li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{today.day | translate}}</li>\n" +
    "                                                <li>{{today.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{day2.day | translate}}</li>\n" +
    "                                                <li>{{day2.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{day3.day | translate}}</li>\n" +
    "                                                <li>{{day3.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{day4.day | translate}}</li>\n" +
    "                                                <li>{{day4.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li class=\"search-right-arrow\"><a href=\"javascript:void(0)\" ng-click=\"nextWeek()\"> <i class=\"fa fa-angle-right fa-2x\"></i></a></li>\n" +
    "                                    </ul>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"search-loading-div\" id=\"search-loading-div\">\n" +
    "                            <div id=\"loading\" class=\"loadAng\">\n" +
    "                                <div class=\"bar\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"search-result-div\" id=\"search-result-div\">\n" +
    "                            <div class=\"doctor-list clearfix\" ng-repeat=\"doctorList in searchLists\" ng-if=\"searchRecordShow\">\n" +
    "                                <div class=\"col-md-7 doctor-detail text-center hidden-sm hidden-xs\">\n" +
    "                                	<div class=\"row\">\n" +
    "                                    	<div class=\"col-lg-6\">\n" +
    "                                           <div class=\"doctor-profile-image\" ng-class=\"(doctorList.data.User.data.is_verified == '1') ? 'certified-tag' : ''\" >\n" +
    "                                                <a href=\"#/doctor/{{doctorList.data.User.data.username}}\"><img class=\"img-responsive\" ng-src=\"{{doctorList.data.User.data.attachmentable.data.thumb.medium}}\" alt=\"doctor\"/></a>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"doctor-profile-details\">\n" +
    "                                                <p class=\"doctor-rating\">\n" +
    "                                                    <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorList.starRating\"></input-stars>\n" +
    "                                                    \n" +
    "                                                </p>\n" +
    "                                                <p><span>{{\"Code\" | translate }}: <a href=\"javascript:void(0)\">{{doctorList.data.User.data.user_code}}</a></span></p>\n" +
    "                                                <div class=\"specialist-footer clearfix\">\n" +
    "                                                    <div class=\"col-md-5\">\n" +
    "                                                        <a href=\"javascript:void(0)\">\n" +
    "                                                            <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> {{doctorList.data.User.data.points}}\n" +
    "                                                        </a>\n" +
    "                                                    </div>\n" +
    "                                                    <div class=\"col-md-5\">\n" +
    "                                                        <a href=\"javascript:void(0)\">\n" +
    "                                                            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{doctorList.data.User.data.doctor_view_count}}\n" +
    "                                                        </a>\n" +
    "                                                    </div>\n" +
    "                                                    <div class=\"col-md-2 share\">\n" +
    "                                                        <a href=\"javascript:void(0)\" class=\"js-share-open\" data-index=\"{{$index}}\">\n" +
    "                                                            <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n" +
    "                                                        </a>\n" +
    "                                                        <div class=\"social-share js-social-share\" id=\"js-social-share{{$index}}\">\n" +
    "                                                        	<div><a facebook class=\"facebookShare\" data-url='http://google.com' data-shares='shares'>{{ 'Share' | translate }}</a></div>\n" +
    "                                                            <div><a twitter  data-lang=\"en\" data-count='horizontal' data-url='http://google.com' data-via='notsosleepy' data-size=\"medium\" data-text='Testing Twitter Share' ></a></div>\n" +
    "                                                            <div gplus class=\"g-plus\" data-size=\"tall\" data-annotation=\"bubble\" data-href='http://google.com' data-action='share'></div>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-lg-6 doctor-detail-right text-left\">\n" +
    "                                        	<div>\n" +
    "                                            	<h5><a href=\"#/doctor/{{doctorList.data.User.data.username}}\">{{doctorList.data.display_name}}</a></h5>\n" +
    "                                                <span>{{doctorList.work_place.data.location}}</span>\n" +
    "                                            </div>\n" +
    "                                            <div>\n" +
    "                                            	<p>{{'Specialties' | translate}}</p>\n" +
    "                                                <span ng-if=\"doctorList.data.specialties.length > 0\">\n" +
    "                                                    {{doctorList.data.specialties | array_to_string | translate }}\n" +
    "                                                </span>\n" +
    "                                            </div>\n" +
    "                                            <div>\n" +
    "                                            	<p>{{'Favorite place to work' | translate}}</p>\n" +
    "                                                <span>{{doctorList.work_place.data.location}}</span>\n" +
    "                                            </div>\n" +
    "                                            <div>\n" +
    "                                            	<p>{{'First appointment price' | translate}}</p>\n" +
    "                                                <span class=\"highlight\">\n" +
    "                                                    {{model.siteCurrency}} {{doctorList.work_place.data.price}}\n" +
    "                                                </span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-5 doctor-booking-details doctor_{{doctorList.data.user_id}}_loadMore\">\n" +
    "                                    <ul class=\"search-week-ul list-inline text-center\">\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[today.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{today.day}}</li>\n" +
    "                                                <li ng-repeat=\"todaySlot in doctorList[today.day] track by $index\">\n" +
    "                                                    <span ng-show=\"todaySlot != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{today.dateFormatted}}/{{todaySlot}}/{{doctorList.work_place_id}}\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{today.dateFormatted}}/{{todaySlot}}/{{doctorList.work_place_id}}\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"todaySlot == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[day2.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{day2.day}}</li>\n" +
    "                                                <li ng-repeat=\"Day2 in doctorList[day2.day] track by $index\">\n" +
    "                                                    <span ng-show=\"Day2 != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day2.dateFormatted}}/{{Day2}}/{{doctorList.work_place_id}}\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day2.dateFormatted}}/{{Day2}}/{{doctorList.work_place_id}}\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"Day2 == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[day3.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{day3.day}}</li>\n" +
    "                                                <li ng-repeat=\"Day3 in doctorList[day3.day] track by $index\">\n" +
    "                                                    <span ng-show=\"Day3 != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day3.dateFormatted}}/{{Day3}}/{{doctorList.work_place_id}}\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day3.dateFormatted}}/{{Day3}}/{{doctorList.work_place_id}}\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"Day3 == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[day4.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{day4.day}}</li>\n" +
    "                                                <li ng-repeat=\"Day4 in doctorList[day4.day] track by $index\">\n" +
    "                                                    <span ng-show=\"Day4 != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day4.dateFormatted}}/{{Day4}}/{{doctorList.work_place_id}}\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day4.dateFormatted}}/{{Day4}}/{{doctorList.work_place_id}}\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"Day4 == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-6 doctor-detail text-center visible-sm visible-xs\">\n" +
    "                                	<div class=\"row\">\n" +
    "                                    	<div class=\"col-lg-6\">\n" +
    "                                          	<div class=\"doctor-profile-image\" ng-class=\"(doctorList.data.User.data.is_verified == '1') ? 'certified-tag' : ''\" >\n" +
    "                                                <img class=\"img-responsive\" ng-src=\"{{doctorList.data.User.data.attachmentable.data.thumb.medium}}\" alt=\"doctor\"/>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"doctor-profile-details\">\n" +
    "                                                <p class=\"doctor-rating\">\n" +
    "                                                    <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorList.starRating\"></input-stars>\n" +
    "                                                </p>\n" +
    "                                                <p><span>Code: <a href=\"javascript:void(0)\">LM-000-001</a></span></p>\n" +
    "                                                <p class=\"specialist-footer clearfix\">\n" +
    "                                                    <span class=\"col-md-5\">\n" +
    "                                                    <a href=\"javascript:void(0)\">\n" +
    "                                                        <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> {{doctorList.data.User.data.points}}\n" +
    "                                                    </a>\n" +
    "                                                    </span>\n" +
    "                                                    <span class=\"col-md-5\">\n" +
    "                                                    <a href=\"javascript:void(0)\">\n" +
    "                                                        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{'11000' | translate}}\n" +
    "                                                    </a>\n" +
    "                                                    </span>\n" +
    "                                                    <span class=\"col-md-2\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"share\">\n" +
    "                                                        <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n" +
    "                                                    </a>\n" +
    "                                                    </span>\n" +
    "                                                </p>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-if=\"searchRecordShow == '0'\" class=\"no-record-field\">\n" +
    "                                <p class=\"hor-space alert alert-danger\">{{'No Doctor Found' |translate}}</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"paging col-md-12 text-right\" ng-if=\"searchRecordShow\">\n" +
    "                            <paging\n" +
    "                                    page=\"PaginateValues.current_page\"\n" +
    "                                    page-size=\"PaginateValues.per_page\"\n" +
    "                                    total=\"PaginateValues.total\"\n" +
    "                                    pg-href={{paginateUrl}}&page={page}\n" +
    "                                    text-first=\"First\"\n" +
    "                                    text-last=\"Last\"\n" +
    "                                    text-next=\"&#xf105\"\n" +
    "                                    text-prev=\"&#xf104\"\n" +
    "                                    text-title-page=\"Page {page}\"\n" +
    "                                    text-title-first=\"First hover\"\n" +
    "                                    text-title-last=\"Last hover\"\n" +
    "                                    text-title-next=\"Next hover\"\n" +
    "                                    text-title-prev=\"Prev hover\"\n" +
    "                                    show-prev-next=\"true\"\n" +
    "                                    show-first-last=\"false\"\n" +
    "                                    ng-click=\"model.paginateRedirect()\"\n" +
    "                            >\n" +
    "                            </paging>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3 search-block doctor-search-right\">\n" +
    "                <div class=\"map-block col-md-12\">\n" +
    "                    <div map-lazy-load=\"https://maps.google.com/maps/api/js\">\n" +
    "                        <ng-map zoom=\"1\" center=\"[{{cenLat}}, {{cenLong}}]\" class=\"map-height\">\n" +
    "                            <marker ng-repeat=\"mapPosition in mappositions\" id='{{mapPosition.id}}' position=\"{{mapPosition.lat}}, {{mapPosition.lon}}\" on-click=\"showDetail(mapPosition)\" icon=\"assets/img/hospital-marker.png\"></marker>\n" +
    "                            <info-window id=\"doctor-info\">\n" +
    "                                <div ng-non-bindable=\"\">\n" +
    "                                    <div class=\"dr-avatar\"> <img class=\"img-responsive\" ng-src=\"{{doctorInfo.avatar}}\" alt=\"{{'Dr.'| translate }}{{doctorInfo.doctor_name}}\"/> </div>\n" +
    "                                    <div class=\"dr-heading\">\n" +
    "                                        <h4>{{'Dr.'| translate }}{{doctorInfo.doctor_name}}</h4>\n" +
    "                                        <div class=\"dr-rate\"><input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star-o\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorInfo.rating\"></input-stars></div>\n" +
    "                                        <div class=\"dr-location\">\n" +
    "                                            <div class=\"address1\">{{doctorInfo.address1}}</div>\n" +
    "                                            <div class=\"address2\">{{doctorInfo.address2}}</div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <a href=\"#/doctor/{{doctorInfo.username}}\" class=\"btn btn-block btn-green btn-xs\">{{'Book Online'| translate }}</a>\n" +
    "                                </div>\n" +
    "                            </info-window>\n" +
    "                        </ng-map>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-12 map-bottom\">\n" +
    "                    <span ng-if=\"model.specialtyDetail.name\">\n" +
    "                        <h5>{{ model.specialtyDetail.name | translate }}</h5>\n" +
    "                        <p>{{ model.specialtyDetail.description | translate }}</p>\n" +
    "                        <a href=\"#/users/register/doctor\" class=\"pull-right\">Leer mas...</a>\n" +
    "                    </span>\n" +
    "                    <h5>{{'Specialties'| translate }}</h5>\n" +
    "                    <p>{{'Dentistry has several specialties specified:'| translate }}</p>\n" +
    "                    <p><strong>{{'Oral Rehabilitation:.'| translate }}</strong>{{'is the part of dentistry in charge of the restoration, and that is to  recover the physiological and aesthetic function through the use of dental prostheses and other measures '| translate }}</p>\n" +
    "                    <p><strong>{{'Periodontics or Periodontal.'| translate }}</strong>{{' its a branch of dentistry specialized in the diagnostic, prevention and treatment of periodontal diseases'| translate }}</p>\n" +
    "                    <a href=\"#/users/register/doctor\" class=\"pull-right\">Leer mas...</a>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <!-- Start: Find Doctor -->\n" +
    "                <div class=\"find-doctor\">\n" +
    "                    <h2>{{\"Find Doctors by\" | translate}}...</h2>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-4\">\n" +
    "                            <div class=\"change-location city\">\n" +
    "                                <h4><span>Ciudad</span></h4>\n" +
    "                                <ul class=\"list-unstyled\" ng-init=\"citiesliList=5\" ng-scrollbars ng-scrollbars-config=\"scrollbarConfig\">\n" +
    "                                    <li ng-repeat=\"citiesliList in citiesliLists | limitTo:citiesliList track by $index\" class=\"search-list-iteams\">\n" +
    "                                        <a href=\"javascript:void(0)\" ng-click=\"model.pageRedirect('city_id=' + citiesliList.id)\">{{citiesliList.name}}</a>\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.citiesliList=citiesliLists.length\" ng-if=\"citiesliList==5\">{{\"More\" | translate}}...</a>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.citiesliList=5\" ng-if=\"citiesliList!=5\">{{\"Less\" | translate}}</a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-4\">\n" +
    "                            <div class=\"change-location specialty\">\n" +
    "                                <h4><span>{{'Specialty'| translate }}</span></h4>\n" +
    "                                <ul class=\"list-unstyled\" ng-init=\"specialtyliList=5\" ng-scrollbars ng-scrollbars-config=\"scrollbarConfig\">\n" +
    "                                    <li ng-repeat=\"specialtyliList in specialtyliLists | limitTo:specialtyliList track by $index\">\n" +
    "                                        <a href=\"javascript:void(0)\" ng-click=\"model.pageRedirect('specialty_id=' + specialtyliList.id)\">{{specialtyliList.name}}</a>\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.specialtyliList=specialtyliLists.length\" ng-if=\"specialtyliList==5\">Más...</a>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.specialtyliList=5\" ng-if=\"specialtyliList!=5\">Menos</a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-4\">\n" +
    "                            <div class=\"change-location insurance\">\n" +
    "                                <h4><span>{{'Languages'| translate }}</span></h4>\n" +
    "                                <ul class=\"list-unstyled\" ng-init=\"languageList=5\" ng-scrollbars ng-scrollbars-config=\"scrollbarConfig\">\n" +
    "                                    <li ng-repeat=\"languageList in languagesLists | limitTo:languageList track by $index\">\n" +
    "                                        <a href=\"javascript:void(0)\" ng-click=\"model.pageRedirect('language_id=' + languageList.id)\">{{languageList.name}}</a>\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.languageList=languageLists.length\" ng-if=\"languageList==5\">Más...</a>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.languageList=5\" ng-if=\"languageList!=5\">Menos</a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>{{'Or search by Name' | translate }}, <span>{{'Practice'| translate }}</span>, <span>{{'Comments'| translate }}</span>, <span>{{'Hospital'| translate }}</span>, <span>{{'Languages'| translate }}</span></p>\n" +
    "                </div>\n" +
    "                <!-- End: Find Doctor -->\n" +
    "   			</div>\n" +
    "		</div>\n" +
    " 	</div>\n" +
    "</div>");
}]);

angular.module("Worklocation/userAppoinmentModification.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Worklocation/userAppoinmentModification.tpl.html",
    "<section class=\"clearfix pad-63 appmt-table\">\n" +
    "	<div class=\"container\">\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'My Appoinment Modification'|translate}} \n" +
    "				<span class=\"text-center\">{{'Location:' |  translate}}{{model.workplace.location |translate}}</span>\n" +
    "                <span class=\"pull-right search-table-field\">\n" +
    "                    <a href=\"#/user/workplaces/{{model.locationid}}/appoinmentmodification/create\" class=\"btn btn-green btn-animate\"><i class=\"fa fa-plus-circle fa-fw\"></i>{{'Add'|translate}}</a>\n" +
    "                </span>            \n" +
    "                <span class=\"pull-right search-table-field\">\n" +
    "                    <a href=\"#/user/workplaces\" class=\"btn btn-primary btn-animate\"><i class=\"fa fa-chevron-left fa-fw\"></i>{{'Back'|translate}}</a>\n" +
    "                </span>                \n" +
    "            </h1>\n" +
    "        </div>\n" +
    "\n" +
    "		<div growl></div>\n" +
    "        <div class=\"table-block\">\n" +
    "            <div class=\"table-responsive\">\n" +
    "                <table class=\"table table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th width=\"200\">{{'Date'| translate}}</th>\n" +
    "                            <th width=\"200\">{{'Type'| translate}}</th>\n" +
    "                            <th width=\"500\">{{'Slot'| translate}}</th>\n" +
    "                            <th width=\"150\">{{'Status'| translate}}</th>\n" +
    "                            <th width=\"220\">{{'Action'| translate}}</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody> \n" +
    "						 <tr ng-repeat=\"modifyValue in model.appoinmentModification\">\n" +
    "                            <td>{{modifyValue.appoint_date | dateFormat}}</td>\n" +
    "                            <td>\n" +
    "                                <span ng-show=\"modifyValue.type == 1\">\n" +
    "                                    {{'Day Off'| translate}}\n" +
    "                                </span>\n" +
    "                                <span ng-show=\"modifyValue.type == 0\">\n" +
    "                                    {{'Schedule Change'| translate}}\n" +
    "                                </span>\n" +
    "                            </td>\n" +
    "                            \n" +
    "                            <td>\n" +
    "                                <span ng-show=\"modifyValue.practice_open == ''\">\n" +
    "                                    --\n" +
    "                                </span>\n" +
    "                                <span ng-show=\"modifyValue.practice_open != ''\" >\n" +
    "                                    <ul ng-bind-html=\"modifyValue.practice_open | splitedShow\" class=\"time-slots list-unstyled\">\n" +
    "                                    </ul>\n" +
    "                                </span>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"switch-option\" ng-if=\"modifyValue.is_active == '1'\">\n" +
    "                                    <switch id=\"enabled\" name=\"enabled\" ng-model=\"modifyValue.is_active\" disabled=\"true\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                                </div>\n" +
    "                                <div class=\"switch-option\" ng-if=\"modifyValue.is_active != '1'\">\n" +
    "                                    <switch id=\"enabled\" name=\"enabled\" disabled=\"true\" ng-model=\"modifyValue.is_active\" on=\"Yes\"  off=\"No\" class=\"green\"></switch>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td class=\"action-btn\">                               \n" +
    "								<a href=\"#/user/workplaces/{{model.locationid}}/appoinmentmodification/{{modifyValue.id}}/update\" title=\"{{'Edit'| translate}}\" class=\"btn green\"><i class=\"fa fa-pencil\"></i>{{'Edit' | translate}}</a>\n" +
    "                                <a ng-click='deleteWorkPlace(modifyValue.id)' title=\"{{'Delete' | translate}}\" class=\"btn red\"><i class=\"fa fa-trash\"></i>{{'Delete' | translate}}</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr ng-show=\"!model.dataModificationLength\">\n" +
    "                            <td colspan=\"5\">\n" +
    "                                <p class=\"hor-space alert alert-danger\">{{'No Record Found' |translate}}</p>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        \n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <div class=\"paging clearfix text-center\" ng-show=\"model.worklocation._metadata.total_records > 0\">\n" +
    "                <pagination\n" +
    "                    total-items=\"model.worklocation.meta.pagination.total\"\n" +
    "                    ng-model=\"currentPage\"\n" +
    "                    ng-change=\"paginate()\"\n" +
    "                    max-size=\"model.worklocation._metadata.maxSize\"\n" +
    "                    boundary-links=\"true\"\n" +
    "                    num-pages=\"model.worklocation.meta.pagination.total_pages\"\n" +
    "                    items-per-page=\"model.worklocation.meta.pagination.per_page\"\n" +
    "                ></pagination>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("Worklocation/userAppoinmentModificationCreate.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Worklocation/userAppoinmentModificationCreate.tpl.html",
    "<section class=\"clearfix user-education\">\n" +
    "    <div class=\"container page-space\">\n" +
    "    	<figure class=\"page-logo\">\n" +
    "            <a href=\"#!/\">\n" +
    "                <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive center-block\"/>\n" +
    "            </a>\n" +
    "        </figure>\n" +
    "        <div class=\"form-content col-md-6 col-md-offset-3\">\n" +
    "            <a href=\"javascript:;\" title=\"Referesh\" class=\"pull-right text-primary\" ><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></a>\n" +
    "            <div class=\"page-head\">\n" +
    "                <h1>{{'Appointment Settings Modification Add'| translate}}</h1>\n" +
    "            </div>\n" +
    "            <form class=\"clearfix\" name=\"appoinmentmodification_add\" method=\"post\" ng-submit=\"saveAppoinmentModification(appoinmentmodification_add.$valid)\" novalidate>\n" +
    "                <div class=\"form-body\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                    	<input class=\"form-control\" ng-model=\"model.appoinmentmodification_add.appoint_date\" data-date-format=\"yyyy-MM-dd\" data-start-date=\"{{date|date:'yyyy-MM-dd'}}\" data-min-date=\"{{dateBlockeBefore}}\"  data-autoclose=\"1\" name=\"date2\" bs-datepicker type=\"appoint_date\" required=\"required\" placeholder=\"Date\">\n" +
    "                        <div ng-show=\"(appoinmentmodification_add.appoint_date.$dirty && appoinmentmodification_add.appoint_date.$invalid) || appoinmentmodification_add.appoint_date.$touched\">\n" +
    "                        	<span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div> \n" +
    "                    </div>\n" +
    "					<div class=\"form-group\">\n" +
    "                        <label class=\"checkbox-field1\">\n" +
    "                            <input class=\"hide\" type=\"checkbox\" name=\"type\" ng-model=\"model.appoinmentmodification_add.type\" ng-change=\"model.ShowHide('type')\" />\n" +
    "                            <span></span>Make a day off\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\" ng-hide=\"model.appoinmentmodification_add.type\">\n" +
    "					<div class=\"form-group\">\n" +
    "                        <label>Choose your Available Time</label>\n" +
    "                        <select class=\"form-control\"  chosen single-backstroke-delete=\"true\" display-disabled-options=\"true\" multiple ng-model=\"model.appoinmentmodification_add.appt_time\" ng-options=\"time for time in model.timeSlot\">\n" +
    "                            <option value=\"\"></option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "					<!--<div class=\"form-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" name=\"lunch_at\" id=\"lunch_at\" placeholder=\"{{'Launch'| translate}}\" ng-model=\"model.appoinmentmodification.lunch_at\" ng-required=\"true\" />        \n" +
    "                        <div ng-show=\"(appoinmentmodification_add.lunch_at.$dirty && appoinmentmodification_add.lunch_at.$invalid) || appoinmentmodification_add.lunch_at.$touched\" ng-messages=\"appoinmentmodification_add.lunch_at.$error\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>           \n" +
    "                    </div>\n" +
    "					<div class=\"form-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" name=\"resume_at\" id=\"resume_at\" placeholder=\"{{'Resume'| translate}}\" ng-model=\"model.appoinmentmodification.resume_at\" ng-required=\"true\" />        \n" +
    "                        <div ng-show=\"(appoinmentmodification_add.resume_at.$dirty && appoinmentmodification_add.resume_at.$invalid) || appoinmentmodification_add.resume_at.$touched\" ng-messages=\"appoinmentmodification_add.resume_at.$error\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>           \n" +
    "                    </div>\n" +
    "					<div class=\"form-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" name=\"practice_close\" id=\"practice_close\" placeholder=\"{{'Practice Close'| translate}}\" ng-model=\"model.appoinmentmodification.practice_close\" ng-required=\"true\" />        \n" +
    "                        <div ng-show=\"(appoinmentmodification_add.practice_close.$dirty && appoinmentmodification_add.practice_close.$invalid) || appoinmentmodification_add.practice_close.$touched\" ng-messages=\"appoinmentmodification_add.practice_close.$error\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>           \n" +
    "                    </div> -->\n" +
    "						\n" +
    "					</div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                            <label>Active / In Active</label>\n" +
    "                            <div class=\"switch-option\">\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.appoinmentmodification_add.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-footer education-btn appmt-btn\">\n" +
    "                    <button ng-disabled=\"appoinmentmodification_add.$invalid\" class=\"btn btn-green btn-animate wid-230 mr5 confirm\" type=\"submit\">{{'Save'| translate }}</button>\n" +
    "                    <a href=\"#/user/workplaces/{{model.locationid}}/appoinmentmodification\" class=\"btn btn-animate wid-230 cancel\">{{'Cancel'| translate }}</a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("Worklocation/userAppoinmentModificationUpdate.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Worklocation/userAppoinmentModificationUpdate.tpl.html",
    "<section class=\"clearfix user-education\">\n" +
    "    <div class=\"container page-space\">\n" +
    "    	<figure class=\"page-logo\">\n" +
    "            <a href=\"#!/\">\n" +
    "                <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-responsive center-block\"/>\n" +
    "            </a>\n" +
    "        </figure>\n" +
    "        <div class=\"form-content col-md-6 col-md-offset-3\">\n" +
    "            <a href=\"javascript:;\" title=\"Referesh\" class=\"pull-right text-primary\" ><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></a>\n" +
    "            <div class=\"page-head\">\n" +
    "                <h1>{{'Edit Appoinment Modification'| translate}}</h1>\n" +
    "            </div>\n" +
    "            <form class=\"clearfix\" name=\"appoinmentmodification_update\" method=\"post\" ng-submit=\"updateAppoinmentModification(appoinmentmodification_update.$valid)\" novalidate>\n" +
    "                <div class=\"form-body\">\n" +
    "                    <div class=\"form-group\">\n" +
    "						<input class=\"form-control\" ng-model=\"model.appoinmentmodification_update.appoint_date\" data-date-format=\"yyyy-MM-dd\" readonly data-start-date=\"{{date|date:'yyyy-MM-dd'}}\" data-min-date=\"{{date|date:'yyyy-MM-dd'}}\"  data-autoclose=\"1\" name=\"type\" bs-datepicker type=\"appoint_date\" required=\"required\">\n" +
    "						 <div ng-show=\"(appoinmentmodification_update.appoint_date.$dirty && appoinmentmodification_update.appoint_date.$invalid) || appoinmentmodification_update.appoint_date.$touched\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "							 </div> \n" +
    "                        </div>\n" +
    "					<div class=\"form-group\">\n" +
    "                        <label class=\"checkbox-field1\">\n" +
    "                            <input class=\"hide\" type=\"checkbox\" name=\"type\" ng-model=\"model.appoinmentmodification_update.type\" ng-change=\"model.ShowHide('type')\" />\n" +
    "                            <span></span>Make a day off\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\" ng-hide=\"model.appoinmentmodification_update.type\">              \n" +
    "					\n" +
    "					<div class=\"form-group\">\n" +
    "                        <label>Choose your Available Time</label>\n" +
    "                        <select class=\"form-control\"  chosen single-backstroke-delete=\"true\" display-disabled-options=\"true\" multiple ng-model=\"model.appoinmentmodification_update.appt_time\" ng-options=\"time for time in model.timeSlot\">\n" +
    "                            <option value=\"\"></option>\n" +
    "                        </select>                            \n" +
    "                    </div>\n" +
    "					<!--<div class=\"form-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" name=\"lunch_at\" id=\"lunch_at\" placeholder=\"{{'Launch'| translate}}\" ng-model=\"model.appoinmentmodification.lunch_at\" ng-required=\"true\" />        \n" +
    "                        <div ng-show=\"(appoinmentmodification_update.lunch_at.$dirty && appoinmentmodification_update.lunch_at.$invalid) || appoinmentmodification_update.lunch_at.$touched\" ng-messages=\"appoinmentmodification_update.lunch_at.$error\">\n" +
    "                            <span class=\"error\" ng-message=\"required\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>           \n" +
    "                    </div>\n" +
    "					<div class=\"form-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" name=\"resume_at\" id=\"resume_at\" placeholder=\"{{'Resume'| translate}}\" ng-model=\"model.appoinmentmodification.resume_at\" ng-required=\"true\" />        \n" +
    "                        <div ng-show=\"(appoinmentmodification_update.resume_at.$dirty && appoinmentmodification_update.resume_at.$invalid) || appoinmentmodification_update.resume_at.$touched\" ng-messages=\"appoinmentmodification_update.resume_at.$error\">\n" +
    "                            <span class=\"error\" ng-message=\"required\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>           \n" +
    "                    </div>\n" +
    "					<div class=\"form-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" name=\"practice_close\" id=\"practice_close\" placeholder=\"{{'Practice Close'| translate}}\" ng-model=\"model.appoinmentmodification.practice_close\" ng-required=\"true\" />        \n" +
    "                        <div ng-show=\"(appoinmentmodification_update.practice_close.$dirty && appoinmentmodification_update.practice_close.$invalid) || appoinmentmodification_update.practice_close.$touched\" ng-messages=\"appoinmentmodification_update.practice_close.$error\">\n" +
    "                            <span class=\"error\" ng-message=\"required\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>           \n" +
    "                    </div> -->						\n" +
    "					</div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                            <label>Active / In Active</label>\n" +
    "                            <div class=\"switch-option\">\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.appoinmentmodification_update.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "				</div>\n" +
    "                <div class=\"form-footer education-btn appmt-btn\">\n" +
    "                    <button ng-disabled=\"appoinmentmodification_update.$invalid\" class=\"btn btn-green btn-animate wid-230 mr5 confirm\" type=\"submit\">{{'Save'| translate }}</button>\n" +
    "                    <a href=\"#/user/workplaces/{{model.locationid}}/appoinmentmodification\" class=\"btn btn-animate wid-230 cancel\">{{'Cancel'| translate }}</a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("Worklocation/userAppoinmentSettings.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Worklocation/userAppoinmentSettings.tpl.html",
    "<section class=\"clearfix pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'Change Your Appointment Settings'| translate}}\n" +
    "			<span class=\"pull-right\">{{'Location:' |  translate}}{{model.workplace.location |translate}}</span>\n" +
    "			</h1>\n" +
    "        </div>\n" +
    "        <div class=\"form-content calendar-settings\">\n" +
    "            <form name=\"settingForm\" ng-submit=\"model.settingUpdate(settingForm.$valid)\" novalidate>\n" +
    "                <div class=\"form-body row\">\n" +
    "                	<div class=\"clearfix\">\n" +
    "                        <div class=\"col-md-5 date-section m-t-0\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"checkbox-field\">\n" +
    "                                    <input class=\"hide\" type=\"checkbox\" ng-model=\"model.settingValue.is_today_first_day\" ng-checked=\"model.settingValue.is_today_first_day === 1\" name=\"is_today_first_day\"/>\n" +
    "                                    <span class=\"custom-check\"></span>\n" +
    "                                    <span>{{'Always show today as first day on my calendar '| translate}}</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-7 select-opt\">\n" +
    "                                <select class=\"form-control\" name=\"calendar_slot_id\" ng-model=\"model.settingValue.calendar_slot_id\">  \n" +
    "                                    <option value=\"\">{{'Show Calendar Slots of'| translate}}</option>     \n" +
    "                                    <option ng-repeat=\"calendar_slot in calendarSlots\" value=\"{{calendar_slot.id}}\" ng-selected=\"model.settingValue.calendar_slot_id == calendar_slot.id\">{{calendar_slot.name}}</option>	                         \n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-7\">\n" +
    "                            <div class=\"form-group col-md-12\">\n" +
    "                                <label class=\"checkbox-field\">\n" +
    "                                    <input class=\"hide\" type=\"checkbox\" name=\"is_two_session\" ng-model=\"model.settingValue.is_two_session\" ng-checked=\"model.settingValue.is_two_session === 1\"/>\n" +
    "                                    <span class=\"custom-check\"></span>\n" +
    "                                    <span>{{'Practice operates in two sessions'| translate}}</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-12 session-block\">\n" +
    "                                <div class=\"form-group col-md-6\">\n" +
    "                                    <label class=\"col-md-4\">{{'Practice Open'| translate}}</label>\n" +
    "                                    <div class=\"col-md-8\">\n" +
    "                                        <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_open\" name=\"practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                        <!-- <span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.practice_open.$touched) && (settingForm.practice_open.$pristine || settingForm.practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span> -->\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                 <div ng-show=\"model.settingValue.is_two_session\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">{{'Lunch At'| translate}}</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.lunch_at\" name=\"lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.lunch_at.$touched) && (settingForm.lunch_at.$pristine || settingForm.lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.open_lunch\">{{model.open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">{{'Resume At'| translate}}</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.resume_at\" name=\"resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.resume_at.$touched) && (settingForm.resume_at.$pristine || settingForm.resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                           <span class=\"error\" ng-show=\"model.lunch_resume\">{{model.lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                 </div>\n" +
    "                                <div class=\"form-group col-md-6\">\n" +
    "                                    <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                    <div class=\"col-md-8\">\n" +
    "                                        <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_close\" name=\"practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                        <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.practice_close.$touched) && (settingForm.practice_close.$pristine || settingForm.practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        <span class=\"error\" ng-show=\"model.resume_close\">{{model.resume_close}}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"model.open_close\">{{model.open_close}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                	</div>\n" +
    "                    <!-- Common Setting Completed Here -->\n" +
    "    \n" +
    "                    <div ng-show=\"model.settingValue.type\">\n" +
    "                    	<div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                 <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_sunday_open\" ng-checked=\"model.settingValue.is_sunday_open === 1\" ng-model=\"model.settingValue.is_sunday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Sunday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"sunday_two_session\" ng-checked=\"model.settingValue.sunday_two_session === 1\" ng-model=\"model.settingValue.sunday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Sunday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                       \n" +
    "                            <div ng-show=\"model.settingValue.is_sunday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_practice_open\" name=\"sunday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_practice_open.$touched) && (settingForm.sunday_practice_open.$pristine || settingForm.sunday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_practice_close\" name=\"sunday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_practice_close.$touched) && (settingForm.sunday_practice_close.$pristine || settingForm.sunday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_resume_close\">{{model.sunday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_open_close\">{{model.sunday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                \n" +
    "                                <div ng-show=\"model.settingValue.sunday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_lunch_at\" name=\"sunday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_lunch_at.$touched) && (settingForm.sunday_lunch_at.$pristine || settingForm.sunday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_open_lunch\">{{model.sunday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_resume_at\" name=\"sunday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_resume_at.$touched) && (settingForm.sunday_resume_at.$pristine || settingForm.sunday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_lunch_resume\">{{model.sunday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_monday_open\" ng-checked=\"model.settingValue.is_monday_open === 1\" ng-model=\"model.settingValue.is_monday_open\"/>\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Monday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"monday_two_session\" ng-checked=\"model.settingValue.monday_two_session === 1\" ng-model=\"model.settingValue.monday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Monday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_monday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                     <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_practice_open\" name=\"monday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                           <!-- <span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_practice_open.$touched) && (settingForm.monday_practice_open.$pristine || settingForm.monday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_practice_close\" name=\"monday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_practice_close.$touched) && (settingForm.monday_practice_close.$pristine || settingForm.monday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_resume_close\">{{model.monday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_open_close\">{{model.monday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.monday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_lunch_at\" name=\"monday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_lunch_at.$touched) && (settingForm.monday_lunch_at.$pristine || settingForm.monday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_open_lunch\">{{model.monday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_resume_at\" name=\"monday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_resume_at.$touched) && (settingForm.monday_resume_at.$pristine || settingForm.monday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_lunch_resume\">{{model.monday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_tuesday_open\" ng-checked=\"model.settingValue.is_tuesday_open === 1\" ng-model=\"model.settingValue.is_tuesday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Tuesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"tuesday_two_session\" ng-checked=\"model.settingValue.tuesday_two_session === 1\" ng-model=\"model.settingValue.tuesday_two_session\"/>\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Tuesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_tuesday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_practice_open\" name=\"tuesday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_practice_open.$touched) && (settingForm.tuesday_practice_open.$pristine || settingForm.tuesday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_practice_close\" name=\"practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_practice_close.$touched) && (settingForm.tuesday_practice_close.$pristine || settingForm.tuesday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_resume_close\">{{model.tuesday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_open_close\">{{model.tuesday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.tuesday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_lunch_at\" name=\"tuesday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_lunch_at.$touched) && (settingForm.tuesday_lunch_at.$pristine || settingForm.tuesday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_open_lunch\">{{model.tuesday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_resume_at\" name=\"tuesday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                           <!-- <span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_resume_at.$touched) && (settingForm.tuesday_resume_at.$pristine || settingForm.tuesday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_lunch_resume\">{{model.tuesday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_wednesday_open\" ng-checked=\"model.settingValue.is_wednesday_open === 1\" ng-model=\"model.settingValue.is_wednesday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Wednesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"wednesday_two_session\" ng-checked=\"model.settingValue.wednesday_two_session === 1\" ng-model=\"model.settingValue.wednesday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Wednesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    \n" +
    "                            <div ng-show=\"model.settingValue.is_wednesday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_practice_open\" name=\"wednesday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_practice_open.$touched) && (settingForm.wednesday_practice_open.$pristine || settingForm.wednesday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_practice_close\" name=\"wednesday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_practice_close.$touched) && (settingForm.wednesday_practice_close.$pristine || settingForm.wednesday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_resume_close\">{{model.wednesday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_open_close\">{{model.wednesday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.wednesday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_lunch_at\" name=\"wednesday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_lunch_at.$touched) && (settingForm.wednesday_lunch_at.$pristine || settingForm.wednesday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_open_lunch\">{{model.wednesday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_resume_at\" name=\"wednesday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_resume_at.$touched) && (settingForm.wednesday_resume_at.$pristine || settingForm.wednesday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_lunch_resume\">{{model.wednesday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_thrusday_open\" ng-checked=\"model.settingValue.is_thrusday_open === 1\" ng-model=\"model.settingValue.is_thrusday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Thrusday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"thrusday_two_session\" ng-checked=\"model.settingValue.thrusday_two_session === 1\" ng-model=\"model.settingValue.thrusday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Thrusday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        \n" +
    "                            <div ng-show=\"model.settingValue.is_thrusday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_practice_open\" name=\"thrusday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_practice_open.$touched) && (settingForm.thrusday_practice_open.$pristine || settingForm.thrusday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_practice_close\" name=\"thrusday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_practice_close.$touched) && (settingForm.thrusday_practice_close.$pristine || settingForm.thrusday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_resume_close\">{{model.thrusday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_open_close\">{{model.thrusday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                \n" +
    "                                <div ng-show=\"model.settingValue.thrusday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_lunch_at\" name=\"thrusday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_lunch_at.$touched) && (settingForm.thrusday_lunch_at.$pristine || settingForm.thrusday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_open_lunch\">{{model.thrusday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_resume_at\" name=\"thrusday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_resume_at.$touched) && (settingForm.thrusday_resume_at.$pristine || settingForm.thrusday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_lunch_resume\">{{model.thrusday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_friday_open\" ng-checked=\"model.settingValue.is_friday_open === 1\" ng-model=\"model.settingValue.is_friday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Friday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"friday_two_session\" ng-checked=\"model.settingValue.friday_two_session === 1\" ng-model=\"model.settingValue.friday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Friday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    \n" +
    "                            <div ng-show=\"model.settingValue.is_friday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_practice_open\" name=\"friday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_practice_open.$touched) && (settingForm.friday_practice_open.$pristine || settingForm.friday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_practice_close\" name=\"friday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_practice_close.$touched) && (settingForm.friday_practice_close.$pristine || settingForm.friday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_resume_close\">{{model.friday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_open_close\">{{model.friday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.friday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_lunch_at\" name=\"friday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_lunch_at.$touched) && (settingForm.friday_lunch_at.$pristine || settingForm.friday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_open_lunch\">{{model.friday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_resume_at\" name=\"friday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_resume_at.$touched) && (settingForm.friday_resume_at.$pristine || settingForm.friday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_lunch_resume\">{{model.friday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                    <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_saturday_open\" ng-checked=\"model.settingValue.is_saturday_open === 1\" ng-model=\"model.settingValue.is_saturday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Saturday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"saturday_two_session\" ng-checked=\"model.settingValue.saturday_two_session === 1\" ng-model=\"model.settingValue.saturday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Saturday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_saturday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_practice_open\" name=\"saturday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_practice_open.$touched) && (settingForm.saturday_practice_open.$pristine || settingForm.saturday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_practice_close\" name=\"saturday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_practice_close.$touched) && (settingForm.saturday_practice_close.$pristine || settingForm.saturday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_resume_close\">{{model.saturday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_open_close\">{{model.saturday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.saturday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_lunch_at\" name=\"saturday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_lunch_at.$touched) && (settingForm.saturday_lunch_at.$pristine || settingForm.saturday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_open_lunch\">{{model.saturday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_resume_at\" name=\"saturday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_resume_at.$touched) && (settingForm.saturday_resume_at.$pristine || settingForm.saturday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_lunch_resume\">{{model.saturday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                   		</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-10\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"checkbox-field\">\n" +
    "                                <input class=\"hide\" type=\"checkbox\" ng-model=\"model.settingValue.type\" ng-checked=\"model.settingValue.type === 1\" name=\"type\"/>\n" +
    "                                <span class=\"custom-check\"></span>\n" +
    "                                <span>Visiting hours are NOT same for all working days in a week</span>\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group switch-option\">\n" +
    "                            <label>Active / In Active</label>\n" +
    "                            <div>\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.settingValue.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 setting-btn\">\n" +
    "                        <button class=\"btn btn-green btn-animate btn-block show\" type=\"submit\" ng-disabled=\"is_disable\">{{'Update'| translate }}</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("Worklocation/userWorkPlaces.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Worklocation/userWorkPlaces.tpl.html",
    "<section class=\"clearfix pad-63 appmt-table\">\n" +
    "	<div class=\"container\">\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'My Workplaces'|translate}}\n" +
    "                <span class=\"pull-right search-table-field\">\n" +
    "                    <a href=\"#/user/workplaces/add\" class=\"btn btn-green btn-animate\"><i class=\"fa fa-plus-circle fa-fw\"></i>{{'Add Places'|translate}}</a>\n" +
    "                </span>\n" +
    "            </h1>\n" +
    "        </div>\n" +
    "\n" +
    "		<div growl></div>\n" +
    "        <div class=\"table-block\">\n" +
    "            <div class=\"table-responsive\">\n" +
    "                <table class=\"table table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th width=\"500\">{{'Country'|translate}}</th>                            \n" +
    "                            <th width=\"500\">{{'City'|translate}}</th>\n" +
    "                            <th width=\"500\">{{'Phone'|translate}}</th>\n" +
    "                            <th width=\"500\">{{'Price'|translate}}</th>\n" +
    "                            <th width=\"500\">{{'Preferred'|translate}}</th>\n" +
    "                            <th width=\"500\">{{'status'|translate}}</th>\n" +
    "                            <th width=\"500\">{{'Action'|translate}}</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>                        \n" +
    "                        <tr ng-repeat=\"worklocation in model.worklocation.data\" ng-show=\"model.dataLength\">\n" +
    "                            <td>{{worklocation.country.name |translate}}</td>                            \n" +
    "                            <td>{{worklocation.city.name |translate}}</td>\n" +
    "                            <td>{{worklocation.work_phone_number |translate}}</td>\n" +
    "                            <td>{{model.siteCurrency}} {{worklocation.price}}</td>\n" +
    "                            <td>\n" +
    "                                <a ng-if=\"worklocation.is_preferred_location == '1'\"  href=\"javascript:;\" title=\"Preferred Location\"><i class=\"fa fa-circle text-success\" aria-hidden=\"true\"></i></a>\n" +
    "                                <a ng-if=\"worklocation.is_preferred_location != '1'\"  href=\"javascript:;\" title=\"Location\"><i class=\"fa fa-circle-o text-success\" aria-hidden=\"true\"></i></a>                                \n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <a ng-if=\"worklocation.is_active == '1'\"  href=\"javascript:;\" title=\"Active\"><i class=\"fa fa-thumbs-o-up text-success\" aria-hidden=\"true\"></i></a>\n" +
    "                                <a ng-if=\"worklocation.is_active != '1'\"  href=\"javascript:;\" title=\"Inactive\"><i class=\"fa fa-thumbs-o-down text-danger\" aria-hidden=\"true\"></i></a>\n" +
    "                            </td>\n" +
    "                            <td class=\"action-btn\">\n" +
    "                                <a href=\"#/user/workplaces/{{worklocation.id}}/edit\" title=\"{{'Edit'| translate}}\" class=\"btn green\"><i class=\"fa fa-pencil\"></i>{{'Edit' | translate}}</a>\n" +
    "                                <a ng-click='deleteWorkPlace(worklocation.id)' title=\"{{'Delete' | translate}}\" class=\"btn red\"><i class=\"fa fa-trash\"></i>{{'Delete' | translate}}</a>\n" +
    "                                <a ng-if=\"model.premiumUser\" href=\"#/user/workplaces/{{worklocation.id}}/appoinmentsettings\" title=\"{{'Appoinment Settings' | translate}}\" class=\"btn blue\"><i class=\"fa fa-calendar-check-o\"></i>{{'Appoinment  Settings' | translate}}</a>\n" +
    "                                <a ng-if=\"model.premiumUser\" href=\"#/user/workplaces/{{worklocation.id}}/appoinmentmodification\" title=\"{{'Appoinment Modification' | translate}}\" class=\"btn text-success\"><i class=\"fa fa-calendar-plus-o\"></i>{{'Appoinment Modifications' | translate}}</a>                                \n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr ng-show=\"!model.dataLength\">\n" +
    "                            <td colspan=\"8\">\n" +
    "                                <p class=\"hor-space alert alert-danger\">{{'No Record Found'|translate}}</p>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <div class=\"paging clearfix text-center\" ng-show=\"model.worklocation._metadata.total_records > 0\">\n" +
    "                <pagination\n" +
    "                    total-items=\"model.worklocation.meta.pagination.total\"\n" +
    "                    ng-model=\"currentPage\"\n" +
    "                    ng-change=\"paginate()\"\n" +
    "                    max-size=\"model.worklocation._metadata.maxSize\"\n" +
    "                    boundary-links=\"true\"\n" +
    "                    num-pages=\"model.worklocation.meta.pagination.total_pages\"\n" +
    "                    items-per-page=\"model.worklocation.meta.pagination.per_page\"\n" +
    "                ></pagination>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("Worklocation/userWorkPlacesAdd.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Worklocation/userWorkPlacesAdd.tpl.html",
    "<section class=\"clearfix\">\n" +
    "    <div class=\"container page-space\">\n" +
    "        <div class=\"form-content col-md-6 col-md-offset-3\">\n" +
    "            <div class=\"page-head\">\n" +
    "                <h1>{{'Add Work Place'| translate}}</h1>\n" +
    "            </div>\n" +
    "            <form class=\"clearfix\" name=\"workplace_add\" method=\"post\" ng-submit=\"new_workplace(workplace_add.$valid)\" novalidate>\n" +
    "                <div class=\"form-body\">\n" +
    "                    <div class=\"form-group select-opt\">\n" +
    "                        <label>{{'Country' | translate }}</label>\n" +
    "                        <select ng-required=\"true\" class=\"form-control\" name=\"country\" id=\"country\" ng-options=\"c.id as c.name for c in model.countries\" ng-model=\"model.workplace.country_id\">  \n" +
    "                                <option value=\"\">{{'Select Country'| translate}}</option>                                \n" +
    "                        </select>\n" +
    "                        <div ng-show=\"(workplace_add.country.$dirty && workplace_add.country_id.$invalid) || workplace_add.country_id.$touched\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>                \n" +
    "                    </div>\n" +
    "                    <div class=\"form-group select-opt\">\n" +
    "                      <label>{{'State' | translate }}</label>\n" +
    "                       <select ng-required=\"true\" class=\"form-control\" name=\"state\" id=\"state\" ng-options=\"s.id as s.name for s in model.states\" ng-model=\"model.workplace.state_id\">  \n" +
    "                                <option value=\"\">{{'Select State'| translate}}</option>                                \n" +
    "                        </select>\n" +
    "                        <div ng-show=\"(workplace_add.state.$dirty && workplace_add.state_id.$invalid) || workplace_add.state_id.$touched\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group select-opt\">\n" +
    "                       <label>Ciudad</label>\n" +
    "                       <select ng-required=\"true\" class=\"form-control\" name=\"city\" id=\"city\" ng-options=\"c.id as c.name for c in model.cities\" ng-model=\"model.workplace.city_id\">  \n" +
    "                                <option value=\"\">{{'Select City'| translate}}</option>                                \n" +
    "                        </select>\n" +
    "                        <div ng-show=\"(workplace_add.city.$dirty && workplace_add.city_id.$invalid) || workplace_add.city_id.$touched\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                         <label>{{'Location' | translate }}</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" name=\"location\" id=\"location\" placeholder=\"{{'Location'| translate}}\" ng-model=\"model.workplace.location\" ng-required=\"true\" />        \n" +
    "                        <div ng-show=\"(workplace_add.location.$submitted || workplace_add.location.$touched) && (workplace_add.location.$pristine || workplace_add.location.$invalid) && (workplace_add.location.$error.required)\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>           \n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>{{'Google Location' | translate }}</label>\n" +
    "                                    <geo-location entry=\"entry\" entity=\"entity\"></geo-location>\n" +
    "                                    <!--<input type=\"hidden\" ng-model=\"model.user_profile.latitude\" />\n" +
    "                                    <input type=\"hidden\" ng-model=\"model.user_profile.longitude\" />\n" +
    "                                    <textarea class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"{{'Address'| translate}}\" ng-model=\"model.user_profile.address\" required></textarea>-->\n" +
    "                                <span class=\"error\" ng-show=\"(workplace_add.address1.$submitted || workplace_add.address1.$touched) && (workplace_add.address1.$pristine || workplace_add.address1.$invalid) && (workplace_add.address1.$error.required)\">{{'Enter Address'| translate }} </span>\n" +
    "                            </div>\n" +
    "                   \n" +
    "						 \n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (workplace_add.work_phone_number.$submitted || workplace_add.work_phone_number.work_phone_number.$touched) && (workplace_add.work_phone_number.work_phone_number.$pristine || workplace_add.work_phone_number.work_phone_number.$invalid) && (workplace_add.work_phone_number.work_phone_number.$error.required)}\">\n" +
    "                                       <label>{{'Phone Number' | translate }}</label>\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"fa fa-phone fa-fw\"></i></span>\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"work_phone_number\" id=\"work_phone_number\" placeholder=\"{{'Mobile'| translate}}\" ng-model=\"model.workplace.work_phone_number\"\n" +
    "                                                ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                            />\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(workplace_add.work_phone_number.$submitted || workplace_add.work_phone_number.$touched) && (workplace_add.work_phone_number.$pristine || workplace_add.work_phone_number.$invalid) && (workplace_add.work_phone_number.$error.required)\">{{'Enter Mobile Number'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(workplace_add.work_phone_number.$submitted || workplace_add.work_phone_number.$touched) && (workplace_add.work_phone_number.$pristine || workplace_add.work_phone_number.$invalid) && (workplace_add.work_phone_number.$error.pattern)\">{{'Enter Valid Mobile Number Without Character'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(workplace_add.work_phone_number.$submitted || workplace_add.work_phone_number.$touched) && (workplace_add.work_phone_number.$pristine || workplace_add.work_phone_number.$invalid) && (workplace_add.work_phone_number.$error.minlength)\">{{'Minimum Length is 8'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(workplace_add.work_phone_number.$submitted || workplace_add.work_phone_number.$touched) && (workplace_add.work_phone_number.$pristine || workplace_add.work_phone_number.$invalid) && (workplace_add.work_phone_number.$error.maxlength)\">{{'Maximum Length is 12'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                      \n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Price :</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" name=\"price\" id=\"price\" placeholder=\"{{'Price'| translate}}\" ng-model=\"model.workplace.price\" ng-required=\"false\"  /> \n" +
    "                    </div>\n" +
    "					<div class=\"form-group\">\n" +
    "                            <label class=\"checkbox-field1\">\n" +
    "                                <input class=\"hide\" type=\"checkbox\" name=\"type\" ng-model=\"model.workplace.is_preferred_location\" />\n" +
    "                                <span></span>{{'is Preferred location?' | translate }}\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "					<div class=\"form-group\">\n" +
    "                            <label>{{'Active / In Active' | translate }}</label>\n" +
    "                            <div class=\"switch-option\" ng-init=\"model.workplace.is_active = true\">\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.workplace.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"form-footer education-btn appmt-btn\">\n" +
    "                    <button ng-disabled=\"workplace_add.$invalid\" class=\"btn btn-green btn-animate wid-230 mr5 confirm\" type=\"submit\">{{'Save'| translate }}</button>\n" +
    "                    <a href=\"#/user/workplaces\" class=\"btn btn-animate wid-230 cancel\">{{'Cancel'| translate }}</a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("Worklocation/userWorkPlacesEdit.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Worklocation/userWorkPlacesEdit.tpl.html",
    "<section class=\"clearfix\">\n" +
    "    <div class=\"container page-space\">\n" +
    "        <div class=\"form-content col-md-6 col-md-offset-3\">\n" +
    "            <div class=\"page-head\">\n" +
    "                <h1>{{'Edit Workplace'| translate}}</h1>\n" +
    "            </div>\n" +
    "           <form class=\"clearfix\" name=\"workplace_edit\" method=\"post\" ng-submit=\"update_workplace(workplace_edit.$valid)\" novalidate>\n" +
    "                <div class=\"form-body\">\n" +
    "                    <div class=\"form-group select-opt\">\n" +
    "                        <label>{{'Country' | translate }}</label>\n" +
    "                        <select ng-required=\"true\" class=\"form-control\" name=\"country_id\" id=\"country_id\" ng-options=\"c.id as c.name for c in model.countries\" ng-model=\"model.workplace.country_id\" value=\"{{model.workplace.country_id}}\" ng-value=\"model.workplace.country_id\">  \n" +
    "                                <option value=\"\">{{'Select Country'| translate}}</option> \n" +
    "                        </select>\n" +
    "                        <div ng-show=\"(workplace_edit.country.$dirty && workplace_edit.country_id.$invalid) || workplace_edit.country_id.$touched\" ng-messages=\"workplace_edit.country_id.$error\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>                \n" +
    "                    </div>\n" +
    "                    <div class=\"form-group select-opt\">\n" +
    "                        <label>{{'State' | translate }}</label>\n" +
    "                       <select ng-required=\"true\" class=\"form-control\" name=\"state_id\" id=\"state_id\" ng-options=\"s.id as s.name for s in model.states\" ng-model=\"model.workplace.state_id\" value=\"{{model.workplace.state_id}}\" ng-value=\"model.workplace.state_id\">  \n" +
    "                                <option value=\"\">{{'Select State'| translate}}</option>                                \n" +
    "                        </select>\n" +
    "                        <div ng-show=\"(workplace_edit.state.$dirty && workplace_edit.state_id.$invalid) || workplace_edit.state_id.$touched\" ng-messages=\"workplace_edit.state_id.$error\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group select-opt\">\n" +
    "                       <label>Ciudad</label>\n" +
    "                       <select ng-required=\"true\" class=\"form-control\" name=\"city_id\" id=\"city_id\" ng-options=\"c.id as c.name for c in model.cities\" ng-model=\"model.workplace.city_id\" value=\"{{model.workplace.city_id}}\" ng-value=\"model.workplace.city_id\">  \n" +
    "                                <option value=\"\">{{'Select City'| translate}}</option>                                \n" +
    "                        </select>\n" +
    "                        <div ng-show=\"(workplace_edit.city.$dirty && workplace_edit.city_id.$invalid) || workplace_edit.city_id.$touched\" ng-messages=\"workplace_edit.city_id.$error\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                         <label>{{'Location' | translate }}</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" name=\"location\" id=\"location\" placeholder=\"{{'Location'| translate}}\" ng-model=\"model.workplace.location\" ng-required=\"true\" />        \n" +
    "                        <div ng-show=\"(workplace_edit.location.$dirty && workplace_edit.location.$invalid) || workplace_edit.location.$touched\" ng-messages=\"workplace_edit.location.$error\">\n" +
    "                            <span class=\"error\">{{'This field is required!'| translate }}</span>\n" +
    "                        </div>           \n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>{{'Google Location' | translate }}</label>\n" +
    "                                    <geo-location entry=\"entry\" entity=\"entity\"></geo-location>\n" +
    "                                    <!--<input type=\"hidden\" ng-model=\"model.user_profile.latitude\" />\n" +
    "                                    <input type=\"hidden\" ng-model=\"model.user_profile.longitude\" />\n" +
    "                                    <textarea class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"{{'Address'| translate}}\" ng-model=\"model.user_profile.address\" required></textarea>-->\n" +
    "                                <span class=\"error\" ng-show=\"(workplace_add.address1.$submitted || workplace_add.address1.$touched) && (workplace_add.address1.$pristine || workplace_add.address1.$invalid) && (workplace_add.address1.$error.required)\">{{'Enter Address'| translate }} </span>\n" +
    "                            </div>\n" +
    "					<div class=\"form-group\" ng-class=\"{ 'has-error' : (workplace_edit.work_phone_number.$submitted || workplace_edit.work_phone_number.work_phone_number.$touched) && (workplace_edit.work_phone_number.work_phone_number.$pristine || workplace_edit.work_phone_number.work_phone_number.$invalid) && (workplace_edit.work_phone_number.work_phone_number.$error.required)}\">\n" +
    "                        <label>{{'Phone Number' | translate }}</label>\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"fa fa-phone fa-fw\"></i></span>\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"work_phone_number\" id=\"work_phone_number\" placeholder=\"{{'Mobile'| translate}}\" ng-model=\"model.workplace.work_phone_number\"\n" +
    "                                                ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\"\n" +
    "                                            />\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(workplace_edit.work_phone_number.$submitted || workplace_edit.work_phone_number.$touched) && (workplace_edit.work_phone_number.$pristine || workplace_edit.work_phone_number.$invalid) && (workplace_edit.work_phone_number.$error.required)\">{{'Enter Mobile Number'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(workplace_edit.work_phone_number.$submitted || workplace_edit.work_phone_number.$touched) && (workplace_edit.work_phone_number.$pristine || workplace_edit.work_phone_number.$invalid) && (workplace_edit.work_phone_number.$error.pattern)\">{{'Enter Valid Mobile Number Without Character'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(workplace_edit.work_phone_number.$submitted || workplace_edit.work_phone_number.$touched) && (workplace_edit.work_phone_number.$pristine || workplace_edit.work_phone_number.$invalid) && (workplace_edit.work_phone_number.$error.minlength)\">{{'Minimum Length is 8'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(workplace_edit.work_phone_number.$submitted || workplace_edit.work_phone_number.$touched) && (workplace_edit.work_phone_number.$pristine || workplace_edit.work_phone_number.$invalid) && (workplace_edit.work_phone_number.$error.maxlength)\">{{'Maximum Length is 12'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>{{'Price' | translate }}</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" name=\"price\" id=\"price\" placeholder=\"{{'Price'| translate}}\" ng-model=\"model.workplace.price\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" step=\"0.01\" /> \n" +
    "                    </div>\n" +
    "					<div class=\"form-group\">\n" +
    "                            <label class=\"checkbox-field1\">\n" +
    "								<input class=\"hide\" type=\"checkbox\" name=\"type\" ng-change=\"(model.workplace.is_preferred_location === true) ? true : false\" ng-model=\"model.workplace.is_preferred_location\" ng-checked=\"model.workplace.is_preferred_location == '1'\" />\n" +
    "                                <span></span>{{'is Preferred location?' | translate }}\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "					<div class=\"form-group\">\n" +
    "                            <label>{{'Active / In Active' | translate }}</label>\n" +
    "                            <div class=\"switch-option\">\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.workplace.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"form-footer education-btn appmt-btn\">\n" +
    "                    <button ng-disabled=\"workplace_edit.$invalid\" class=\"btn btn-green btn-animate wid-230 mr5 confirm\" type=\"submit\">{{'Save'| translate }}</button>\n" +
    "                    <a href=\"#/user/workplaces\" class=\"btn btn-animate wid-230 cancel\">{{'Cancel'| translate }}</a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("Messages/messagecompose.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Messages/messagecompose.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <section class=\"clearfix checklist-content setting-page messages\">\n" +
    "            <div>\n" +
    "                <div class=\"page-head\">    \n" +
    "                    <h1>{{\"Compose Message\"| translate }}</h1>\n" +
    "                </div>\n" +
    "                <ul class=\"list-inline text-center\">\n" +
    "                    <li>\n" +
    "                        <a ui-sref=\"ComposeMessage()\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> {{\"Write\" | translate }}</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"received\">\n" +
    "                        <a ui-sref=\"Message()\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i> {{\"Received\" | translate }}</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"sent\">\n" +
    "                        <a ui-sref=\"SentMessage()\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i> {{\"Sent\" | translate }}</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"delete\">\n" +
    "                        <a href=\"javascript:void(0)\" ng-click=\"model.messageDelete()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> {{\"Delete\" | translate }}</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <div class=\"remove-width\">\n" +
    "                    <div class=\"form-content\">\n" +
    "                        <form name=\"composeMessage\" method=\"post\" ng-submit=\"model.message_compose(composeMessage.$valid)\" novalidate>\n" +
    "                            <div class=\"form-body clearfix\" >\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>{{\"User\" | translate }}</label>\n" +
    "                                     <div class=\"form-group select-opt\" ng-class=\"{ 'has-error' : (composeMessage.$submitted || composeMessage.to_user_id.$touched) && (composeMessage.to_user_id.$pristine || composeMessage.to_user_id.$invalid) && (composeMessage.to_user_id.$error.required)}\">\n" +
    "                                    <select class=\"form-control\" name=\"to_user_id\" id=\"to_user_id\" ng-model=\"model.compose_message.to_user_id\" ng-options=\"key as value for (key , value) in model.userLists\" ng-required=\"true\">\n" +
    "                                        <option value=\"\">{{\"Select User\" | translate }}</option>\n" +
    "                                    </select>\n" +
    "                                          <span class=\"error\" ng-show=\"(composeMessage.$submitted || composeMessage.to_user_id.$touched) && (composeMessage.to_user_id.$pristine || composeMessage.to_user_id.$invalid) && (composeMessage.to_user_id.$error.required)\">{{\"Select User\" | translate }}</span>\n" +
    "                                   </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>{{\"Subject\" | translate }}</label>\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (composeMessage.$submitted || composeMessage.subject.$touched) && (composeMessage.subject.$pristine || composeMessage.subject.$invalid) && (composeMessage.subject.$error.required)}\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" ng-model=\"model.compose_message.subject\" ng-required=\"true\">\n" +
    "                                        <span class=\"error\" ng-show=\"(composeMessage.$submitted || composeMessage.subject.$touched) && (composeMessage.subject.$pristine || composeMessage.subject.$invalid) && (composeMessage.subject.$error.required)\">{{\"Enter subject\" | translate }} </span>\n" +
    "                                    \n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>{{\"Message\" | translate }}</label>\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (composeMessage.$submitted || composeMessage.message.$touched) && (composeMessage.message.$pristine || composeMessage.message.$invalid) && (composeMessage.message.$error.required)}\">\n" +
    "                                    <textarea class=\"form-control\" name=\"message\" id=\"message\" ng-model=\"model.compose_message.message\" ng-required=\"true\"></textarea>\n" +
    "                                        <span class=\"error\" ng-show=\"(composeMessage.$submitted || composeMessage.message.$touched) && (composeMessage.message.$pristine || composeMessage.message.$invalid) && (composeMessage.message.$error.required)\">{{\"Enter message\" | translate }} </span>\n" +
    "                                    \n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-footer appmt-btn\">\n" +
    "                                <button class=\"btn btn-green btn-animate\" type=\"submit\">{{\"Save\" | translate }}</button>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            </section>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("Messages/messages.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Messages/messages.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <section class=\"clearfix appmt-table messages\">\n" +
    "                <div>\n" +
    "                    <div class=\"page-head\">    \n" +
    "                        <h1>Mensajes</h1>\n" +
    "                    </div>\n" +
    "                    <ul class=\"list-inline text-center\">\n" +
    "                        <li>\n" +
    "                            <a ui-sref=\"ComposeMessage()\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> {{\"Write\" | translate }}</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"received\">\n" +
    "                            <a ui-sref=\"Message()\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i> {{\"Received\" | translate }}</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"sent\">\n" +
    "                            <a ui-sref=\"SentMessage()\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i> {{\"Sent\" | translate }}</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"delete\">\n" +
    "                            <a href=\"javascript:void(0)\" ng-click=\"model.messageDelete()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> {{\"Delete\" | translate }}</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "					<div class=\"medical-answer\">\n" +
    "                    	<div class=\"question-detail\" ng-repeat=\"message in model.receivedMessages\">\n" +
    "							<div class=\"clearfix\">\n" +
    "                                <div class=\"col-md-9\">\n" +
    "                                    <div class=\"checkbox\">\n" +
    "                                        <label>\n" +
    "                                            <input type=\"checkbox\" id=\"{{message.id}}\"  ng-model=\"message.selected\" checklist-value=\"message.id\" ng-change=\"message.selected\">\n" +
    "                                        </label>\n" +
    "                                    </div>\n" +
    "                                    <h5><i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{message.from_user.username}}<a href=\"javascript:void(0)\" ng-click=\"model.ShowHide(message.id)\">{{message.message_content.subject}}</a></h5>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <span class=\"date\">{{message.created_at | dateFormat}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "							<div class=\"hide js-answers{{message.id}}\">\n" +
    "                        		<p class=\"text-center\"><a href=\"javascript:void(0)\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n" +
    "                                <div class=\"answer-detail\">\n" +
    "                                    <div class=\"answers\">\n" +
    "                                        <div class=\"clearfix\">\n" +
    "                                            <div class=\"col-md-6 col-sm-5\">\n" +
    "                                                <h5><i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{message.from_user.username}}<a href=\"javascript:void(0)\">{{message.message_content.subject}}</a></h5>\n" +
    "                                                <p><i class=\"fa fa-comments\" aria-hidden=\"true\"></i>{{message.message_content.message}}</p>\n" +
    "												<span class=\"\"><a href=\"javascript:void(0)\" ng-click=\"model.messageReplyBox(message.id)\">{{\"Reply\" | translate}}</a></span>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-md-3 col-sm-4\">\n" +
    "                                                <p></p>\n" +
    "                                                <span class=\"date\">{{message.created_at | dateFormat}}</span>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"media\" ng-repeat=\"child_message in message.children.data\">\n" +
    "												    <hr>\n" +
    "                                                    <div class=\"media-body\">\n" +
    "														<div class=\"col-md-6\">\n" +
    "															<h5><i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{child_message.from_user.username}}<a href=\"javascript:void(0)\">{{child_message.message_content.subject}}</a></h5>\n" +
    "														</div>\n" +
    "															<div class=\"col-md-3\">\n" +
    "																<span class=\"date\">{{child_message.created_at | dateFormat}}</span>\n" +
    "															</div>\n" +
    "													    <p><i class=\"fa fa-comments\" aria-hidden=\"true\"></i>{{child_message.message_content.message}}</p>\n" +
    "														 <div class=\"col-md-3 col-sm-3\">\n" +
    "												<span class=\"\"><a href=\"javascript:void(0)\" ng-click=\"model.messageReplyBox(message.id)\">{{\"Reply\" | translate}}</a></span>\n" +
    "                                            </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "											<div class=\"hide js-replybox{{message.id}} col-md-6 col-sm-5\">\n" +
    "												<form name=\"replyMessage\" method=\"post\" ng-submit=\"model.message_reply(replyMessage.$valid, message.from_user.id)\" novalidate>\n" +
    "                                                    <h3>{{\"Reply Message\" | translate }}</h3>\n" +
    "                           							 <div class=\"form-body clearfix\">\n" +
    "														<div class=\"form-group\">\n" +
    "															<label>{{\"Subject\" | translate }}</label>\n" +
    "															<div class=\"form-group\" ng-class=\"{ 'has-error' : (replyMessage.$submitted || replyMessage.subject.$touched) && (replyMessage.subject.$pristine || replyMessage.subject.$invalid) && (replyMessage.subject.$error.required)}\">\n" +
    "															<input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" ng-model=\"model.reply_message.subject\" ng-required=\"true\" />\n" +
    "																<span class=\"error\" ng-show=\"(replyMessage.$submitted || replyMessage.message.$touched) && (replyMessage.message.$pristine || replyMessage.message.$invalid) && (replyMessage.message.$error.required)\">{{\"Enter Subject\" | translate }} </span>\n" +
    "\n" +
    "															</div>\n" +
    "														</div>\n" +
    "                                                        <div class=\"form-group\">\n" +
    "															<label>{{\"Message\" | translate }}</label>\n" +
    "															<div class=\"form-group\" ng-class=\"{ 'has-error' : (replyMessage.$submitted || replyMessage.message.$touched) && (replyMessage.message.$pristine || replyMessage.message.$invalid) && (replyMessage.message.$error.required)}\">\n" +
    "															<textarea class=\"form-control\" name=\"message\" id=\"message\" ng-model=\"model.reply_message.message\" ng-required=\"true\"></textarea>\n" +
    "																<span class=\"error\" ng-show=\"(replyMessage.$submitted || replyMessage.message.$touched) && (replyMessage.message.$pristine || replyMessage.message.$invalid) && (replyMessage.message.$error.required)\">{{\"Enter message\" | translate }} </span>\n" +
    "\n" +
    "															</div>\n" +
    "														</div>\n" +
    "													</div>\n" +
    "													<div class=\"form-footer appmt-btn\">\n" +
    "														<button class=\"btn btn-green btn-animate\" type=\"submit\">{{\"Save\" | translate }}</button>\n" +
    "													</div>\n" +
    "                       							 </form>\n" +
    "											\n" +
    "											</div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "							</div>\n" +
    "                        </div>\n" +
    "						<div class=\"clearfix\" ng-show=\"!model.dataLength\">\n" +
    "							<p class=\"hor-space alert alert-danger\">{{\"No Record Found\" | translate }}</p>\n" +
    "						</div>\n" +
    "                        <div class=\"paging clearfix text-center\" ng-show=\"model.dataLength\">\n" +
    "                            <uib-pagination total-items=\"model._metadata.total\" num-pages=\"model._metadata.total_pages\" ng-model=\"model.currentPage\" max-size=\"model.maxSize\" boundary-links=\"true\" boundary-link-numbers=\"true\" rotate=\"false\" items-per-page=\"model._metadata.per_page\" previous-text=\"&#xf104;\" next-text=\"&#xf105;\" ng-change=\"model.paginate()\"></uib-pagination>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("Messages/sentmessages.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Messages/sentmessages.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"edit-profile-page clearfix\">\n" +
    "        <header-menu></header-menu>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <nav-menu></nav-menu>\n" +
    "            <section class=\"clearfix appmt-table messages\">\n" +
    "                <div>\n" +
    "                    <div class=\"page-head\">    \n" +
    "                        <h1>Mensajes Enviados</h1>\n" +
    "                    </div>\n" +
    "                    <ul class=\"list-inline text-center\">\n" +
    "                        <li>\n" +
    "                            <a ui-sref=\"ComposeMessage()\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> {{\"Write\" | translate }}</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"received\">\n" +
    "                            <a ui-sref=\"Message()\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i> {{\"Received\" | translate }}</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"sent\">\n" +
    "                            <a ui-sref=\"SentMessage()\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i> {{\"Sent\" | translate }}</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"delete\">\n" +
    "                            <a href=\"javascript:void(0)\" ng-click=\"model.messageDelete()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> {{\"Delete\" | translate }}</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                    <div class=\"medical-answer\">\n" +
    "                    	<div class=\"question-detail\" ng-repeat=\"message in model.sentMessages\">\n" +
    "							<div class=\"clearfix\">\n" +
    "                                <div class=\"col-md-9\">\n" +
    "                                    <div class=\"checkbox\">\n" +
    "                                        <label>\n" +
    "                                            <input type=\"checkbox\" id=\"{{message.id}}\"  ng-model=\"message.selected\" checklist-value=\"message.id\" ng-change=\"message.selected\">\n" +
    "                                        </label>\n" +
    "                                    </div>\n" +
    "                                   <h5><i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{message.from_user.username}}<a href=\"javascript:void(0)\" ng-click=\"model.ShowHide(message.id)\">{{message.message_content.subject}}</a></h5>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <span class=\"date\">{{message.created_at | dateFormat}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "							<div class=\"hide js-answers{{message.id}}\">\n" +
    "                        		<p class=\"text-center\"><a href=\"javascript:void(0)\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n" +
    "                                <div class=\"answer-detail\">\n" +
    "                                    <div class=\"answers\">\n" +
    "                                        <div class=\"clearfix\">\n" +
    "                                            <div class=\"col-md-6 col-sm-5\">\n" +
    "                                                <h5><i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{message.from_user.username}}<a href=\"javascript:void(0)\">{{message.message_content.subject}}</a></h5>\n" +
    "                                                <p><i class=\"fa fa-comments\" aria-hidden=\"true\"></i>{{message.message_content.message}}</p>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-md-3 col-sm-4\">\n" +
    "                                                <p></p>\n" +
    "                                                <span class=\"date\">{{message.created_at | dateFormat}}</span>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-md-3 col-sm-3\">\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "							</div>\n" +
    "                        </div>\n" +
    "						<div class=\"clearfix\" ng-show=\"!model.dataLength\">\n" +
    "							<p class=\"hor-space alert alert-danger\">{{\"No Record Found\" | translate }}</p>\n" +
    "						</div>\n" +
    "						<div class=\"paging clearfix text-center\" ng-show=\"model.dataLength\">\n" +
    "							<uib-pagination total-items=\"model._metadata.total\" num-pages=\"model._metadata.total_pages\" ng-model=\"model.currentPage\" max-size=\"model.maxSize\" boundary-links=\"true\" boundary-link-numbers=\"true\" rotate=\"false\" items-per-page=\"model._metadata.per_page\" previous-text=\"&#xf104;\" next-text=\"&#xf105;\" ng-change=\"model.paginate()\"></uib-pagination>\n" +
    "						</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("Badges/userBadges.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("Badges/userBadges.tpl.html",
    "<section class=\"clearfix pad-63 appmt-table user-badge\">\n" +
    "	<div class=\"container\">\n" +
    "        <!--<div class=\"page-head\">    \n" +
    "            <h1>{{'Upload Badges'|translate}}</h1>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-4\">              \n" +
    "                <div class=\"form-group\">\n" +
    "                    <button class=\"btn btn-green btn-animate btn-block\" ngf-select=\"uploadFiles($files)\"    ngf-pattern=\"'.jpg,.png,.gif,.jpeg'\">Select Files</button>\n" +
    "                    <p class=\"help-block\">Example block-level help text here.</p>                    \n" +
    "                </div> \n" +
    "            </div>   \n" +
    "        </div>-->\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'My Badges'|translate}}</h1>\n" +
    "        </div>\n" +
    "		<div growl></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div ng-if=\"model.userBadgesLength\" ng-repeat=\"badge in model.userBadges\">\n" +
    "				<div class=\"col-sm-6 col-md-3\" > \n" +
    "                    <div class=\"thumbnail\">\n" +
    "					    <img class=\"img-responsive\" style=\"max-width:100%\" src=\"{{badge.thumb.small}}\">\n" +
    "                        <!--<div class=\"caption\">\n" +
    "                            <p><a ng-click=\"deleteBadges(badge.id)\" title=\"Delete\" class=\"pull-right\" href=\"javascript:void(0);\">\n" +
    "                            	<i class=\"fa fa-trash-o error\" aria-hidden=\"true\"></i></a>\n" +
    "                            </p>\n" +
    "                        </div>-->\n" +
    "                    </div> \n" +
    "                </div> \n" +
    "            </div>\n" +
    "            <div ng-if=\"!model.userBadgesLength\">\n" +
    "                <div class=\"col-sm-12\" > \n" +
    "                    <p class=\"text-center text-danger\"> {{'No record(s) found'| translate }}</p>\n" +
    "                </div>\n" +
    "            </div>            \n" +
    "        </div>\n" +
    "        <div class=\"table-block\">            \n" +
    "            <div class=\"paging clearfix text-center\" ng-show=\"model.worklocation._metadata.total_records > 0\">\n" +
    "                <pagination\n" +
    "                    total-items=\"model.worklocation._metadata.total_records\"\n" +
    "                    ng-model=\"currentPage\"\n" +
    "                    ng-change=\"paginate()\"\n" +
    "                    max-size=\"model.worklocation._metadata.maxSize\"\n" +
    "                    boundary-links=\"true\"\n" +
    "                    num-pages=\"model.worklocation._metadata.noOfPages\"\n" +
    "                    items-per-page=\"model.worklocation._metadata.limit\"\n" +
    "                ></pagination>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("CustomDirectives/Maps/locationDirections.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("CustomDirectives/Maps/locationDirections.tpl.html",
    "<!--<div class=\"row\">\n" +
    "    <div class=\"col-sm-12\">\n" +
    "        <form class=\"form-inline\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"origin\">Origin</label>\n" +
    "                <input type=\"text\" ng-model=\"origin\" ng-init=\"origin='toronto'\" class=\"form-control\" id=\"origin\" placeholder=\"Origin\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"destination\">Destionation</label>\n" +
    "                <input type=\"text\" ng-model=\"destination\" ng-init=\"destination='ottawa'\" class=\"form-control\" id=\"destination\" placeholder=\"Origin\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"destination\">{{'Destionation' | translate }}</label>\n" +
    "                <select class=\"form-control\" ng-model=\"travelMode\" ng-init=\"travelMode='DRIVING'\">\n" +
    "                    <option value=\"DRIVING\">{{'Driving' | translate }}</option>\n" +
    "                    <option value=\"WALKING\">{{'Walking' | translate }}</option>\n" +
    "                    <option value=\"BICYCLING\">{{'Bicycling' | translate }}</option>\n" +
    "                    <option value=\"TRANSIT\">{{'Transit' | translate }}</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>-->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div style=\"width: 68%; float:left; height: 100%\">\n" +
    "      <b>Origin </b>\n" +
    "	  <input ng-model=\"originBox\" type=\"text\" class=\"form-control\" />\n" +
    "      <b>Destionation </b>\n" +
    "	  <input ng-model=\"destinationBox\" type=\"text\" class=\"form-control\" />\n" +
    "      <b>Mode of Travel: </b>\n" +
    "      <select ng-model=\"travelMode\" ng-init=\"travelMode='DRIVING'\">\n" +
    "        <option value=\"DRIVING\">{{'Driving' | translate}}</option>\n" +
    "        <option value=\"WALKING\">{{'Walking' | translate}}</option>\n" +
    "        <option value=\"BICYCLING\">{{'Bicycling' | translate}}</option>\n" +
    "        <option value=\"TRANSIT\">{{'Transit' | translate}}</option>\n" +
    "      </select>\n" +
    "	  <input type=\"button\" class=\"btn btn-primary\" ng-click=\"mapChanged()\" value=\"{{'submit'| translate }}\"/>\n" +
    "      <ng-map zoom=\"14\" center=\"37.7699298, -122.4469157\" style=\"height:90%\" on-click=\"logLatLng()\" >\n" +
    "	  {{origin}}-----{{destination}}\n" +
    "        <directions draggable=\"true\" panel=\"directions-panel\" travel-mode=\"{{travelMode}}\" waypoints=\"{{wayPoints}}\" origin=\"{{origin}}\" destination=\"{{destination}}\">\n" +
    "        </directions>\n" +
    "      </ng-map>\n" +
    "	  <div class=\"hide\">\n" +
    "      Directions path length: {{map.directionsRenderers[0].directions.routes[0].overview_path.length}}\n" +
    "	  </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"directions-panel\" style=\"width: 28%; float:left; height: 100%; overflow: auto; padding: 0px 5px\">\n" +
    "    </div>");
}]);
