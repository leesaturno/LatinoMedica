var lLAsyncSync = function (libs, cb) {
    var counter = 0;
    var loadPart1, loadPart2, loaderTemplate;

    loaderTemplate = function (funcName) {
        if (counter < libs.length) {
            var lib = libs[counter];
            $.getScript(lib, function () {
                counter++;
                if (counter == libs.length) {
                    // Angular trigger after all js load
                    angular.bootstrap('html', ['Abs']);
                }
                // Go next
                funcName();
            }).fail(function () {
                console.log("*********************", arguments);
                if (arguments[0].readyState === 0) {
                    console.error('It wasnt possible to load the script: ' + lib);
                } else {
                    console.error('A problem occurred while loading the script: ' + lib);
                    //script loaded but failed to parse
                    console.error(arguments[2].toString());
                    console.error(arguments);
                }
            });
        } else {
            if (cb) {
                cb();
            }
        }
    };

    loadPart1 = function () {
        loaderTemplate(loadPart2);
    };
    loadPart2 = function () {
        loaderTemplate(loadPart1);
    };

    // Start the iteration of the libraries
    if (libs && libs.length > 0) {
        loadPart1();
    } else if (cb) {
        console.error('No libraries to be loaded');
        cb();
    }
};
(function ($, window, document, undefined) {
    'use strict';
    var libraries = [];
    libraries.push('vendor/angular/angular.js');
    libraries.push('vendor/angular-sanitize/angular-sanitize.js');
    libraries.push('vendor/angular-resource/angular-resource.js');
    libraries.push('vendor/angular-bootstrap/ui-bootstrap-tpls.min.js');
    libraries.push('vendor/ng-file-upload-shim/angular-file-upload-shim.min.js');
    libraries.push('vendor/ng-file-upload/ng-file-upload.min.js');
    libraries.push('vendor/angular-ui-router/release/angular-ui-router.js');
    libraries.push('vendor/angular-animate/angular-animate.js');
    libraries.push('vendor/angular-messages/angular-messages.js');
    libraries.push('vendor/angular-translate/angular-translate.min.js');
    libraries.push('vendor/satellizer/satellizer.js');
    libraries.push('vendor/angular-growl-v2/build/angular-growl.js');
    libraries.push('vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js');
    libraries.push('vendor/angular-dynamic-locale/tmhDynamicLocale.min.js');
    libraries.push('vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.js');
    libraries.push('vendor/angular-translate-handler-log/angular-translate-handler-log.js');
    libraries.push('vendor/angular-translate-storage-local/angular-translate-storage-local.min.js');
    libraries.push('vendor/angular-cookies/angular-cookies.js');
    libraries.push('vendor/angular-slugify/angular-slugify.js');
    libraries.push('vendor/bootstrap/dist/js/bootstrap.min.js');
    libraries.push('vendor/angulartics/dist/angulartics.min.js');
    libraries.push('vendor/angulartics-google-analytics/dist/angulartics-google-analytics.min.js');
    libraries.push('vendor/angulartics-facebook-pixel/dist/angulartics-facebook-pixel.min.js');
    libraries.push('vendor/angular-recaptcha/release/angular-recaptcha.min.js');
    libraries.push('vendor/ngmap/build/scripts/ng-map.min.js');
    libraries.push('vendor/moment/min/moment-with-locales.min.js');
    libraries.push('vendor/angular-input-stars/angular-input-stars.js');
    libraries.push('vendor/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js');
    libraries.push('vendor/angular-strap/dist/angular-strap.min.js');
    libraries.push('vendor/angular-strap/dist/angular-strap.tpl.min.js');
    libraries.push('vendor/angular-ui-switch/angular-ui-switch.js');
    libraries.push('vendor/angular-read-more/dist/readmore.min.js');
    libraries.push('vendor/angular-paging/src/paging.js');
    libraries.push('vendor/angular-sweetalert/SweetAlert.min.js');
    libraries.push('vendor/sweetalert/dist/sweetalert.min.js');
    libraries.push('vendor/checklist-model/checklist-model.js');
    libraries.push('vendor/angular-chosen-localytics/dist/angular-chosen.min.js');
    libraries.push('vendor/angular-ui-select/dist/select.js');
    libraries.push('vendor/ngGallery/src/js/ngGallery.js');
    //libraries.push('vendor/uikit/js/uikit.min.js');
    libraries.push('vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js');
    libraries.push('vendor/ng-scrollbars/dist/scrollbars.min.js');
    libraries.push('vendor/chosen/chosen.jquery.js');
    libraries.push('vendor/exif-js/exif.js');
    libraries.push('vendor/Croppie/croppie.min.js');
    libraries.push('vendor/textAngular/dist/textAngular-rangy.min.js');
    libraries.push('vendor/textAngular/dist/textAngular-sanitize.min.js');
    libraries.push('vendor/textAngular/dist/textAngular.min.js');
    libraries.push('vendor/angular-socialshare/angular-socialshare.min.js');
    libraries.push('vendor/slick-carousel/slick/slick.js');
    libraries.push('vendor/angular-slick/dist/slick.js');
    libraries.push('vendor/angular-touch/angular-touch.js');
    libraries.push('client/src/app/App.js');
    libraries.push('client/src/app/Common/Common.module.js');
    libraries.push('client/src/app/Home/Home.module.js');
    libraries.push('client/src/app/User/User.module.js');
    libraries.push('client/src/app/Appointments/Appointments.module.js');
    libraries.push('client/src/app/Search/Search.module.js');
    libraries.push('client/src/app/Worklocation/Workplaces.module.js');
    libraries.push('client/src/app/Messages/Messages.module.js');
    libraries.push('client/src/app/Badges/Badges.module.js');
    libraries.push('client/src/app/Common/Footer.js');
    libraries.push('client/src/app/Common/Header.js');
    libraries.push('client/src/app/Constant.js');
    libraries.push('client/src/app/Home/Home.js');
    libraries.push('client/src/app/Home/HomeService.js');
    //libraries.push('client/src/app/Plugins/Translations/Translations.js');
    libraries.push('client/src/app/User/ChangePassword.js');
    libraries.push('client/src/app/User/Dashboard.js');
    libraries.push('client/src/app/User/ForgetPassword.js');
    libraries.push('client/src/app/User/Login.js');
    libraries.push('client/src/app/User/Register.js');
    libraries.push('client/src/app/User/User.js');
    libraries.push('client/src/app/User/UserActivate.js');
    libraries.push('client/src/app/User/UserProfile.js');
    libraries.push('client/src/app/User/MyCalender.js');
    libraries.push('client/src/app/User/MySpecialties.js');
    libraries.push('client/src/app/User/MyInsurances.js');
    libraries.push('client/src/app/User/Notification.js');
    libraries.push('client/src/app/User/activities.js');
    libraries.push('client/src/app/User/FamilyFriends.js');
	libraries.push('client/src/app/User/Authorization.js');
    libraries.push('client/src/app/User/DemographicInformation.js');
    libraries.push('client/src/app/User/MyLanguages.js');
    libraries.push('client/src/app/User/UserSettings.js');
    libraries.push('client/src/app/User/UsersService.js');
    libraries.push('client/src/app/User/ListYourPractice.js');
    libraries.push('client/src/app/Appointments/Appointments.js');
    libraries.push('client/src/app/Appointments/AppointmentSettings.js');
    libraries.push('client/src/app/Appointments/AppointmentService.js');
    libraries.push('client/src/app/Appointments/AppointmentsModification.js');
    libraries.push('client/src/app/Appointments/Booking.js');
    libraries.push('client/src/app/Search/Search.js');
    libraries.push('client/src/app/Search/SearchService.js');
    libraries.push('client/src/app/Worklocation/UserWorkPlaces.js');
    libraries.push('client/src/app/Worklocation/UserWorkPlacesService.js');
    libraries.push('client/src/app/Messages/UserMessages.js');
    libraries.push('client/src/app/Messages/UserMessagesService.js');
    libraries.push('client/src/app/Badges/UserBadges.js');
    libraries.push('client/src/app/Badges/UserBadgesService.js');
	libraries.push('client/src/app/User/MedicalTeam.js');
    libraries.push('client/src/app/CustomDirectives/Maps/NgMapsDirectives.js');
    libraries.push('client/src/app/CustomDirectives/Autocomplete/angucomplete-alt.js');
    libraries.push('api/assets/js/plugins.js');
    libraries.push('assets/js/templates-app.js');   

    lLAsyncSync(libraries, function () {
        // Creates the Locale component
    });

})(jQuery, window, document);
