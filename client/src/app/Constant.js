var app = angular.module('Abs.Constant', [])
    .constant('GENERAL_CONFIG', {
        'api_url': '/api',
        'preferredLanguage': 'en',
    })
    .constant('ConstUserType', {
        'Admin': 1,
        'User': 2,
        'Doctor': 3
    })
    .constant('ConstUserID', {
        'Admin': 1
    })
    .constant('ConstAttachment', {
        'UserAvatar': 1,
        'Photo': 2
    })
    .constant('ConstMoreAction', {
        'Inactive': 1,
        'Active': 2,
        'Delete': 3,
        'Export': 4
    })
    .constant('ConstBannedTypes', {
        'SingleIPOrHostName': 1,
        'IPRange': 2,
        'RefererBlock': 3
    })
    .constant('ConstBannedDurations', {
        'Permanent': 1,
        'Days': 2,
        'Weeks': 3
    })
    .constant('ConstGenders', {
        'Male': 1,
        'Female': 2
    })
    .constant('ConstPaymentGateways', {
        'PayPal': 1
    })
    .constant('ConstTransactionTypes', {
        'PlanFee': 1,
        'SignupFee': 2
    })
    .constant('ConstPaymentType', {
        'PlanFee': 1,
        'SignupFee': 2
    })
    .constant('ConstRepeatDates', {
        'Sunday': 1,
        'Monday': 2,
        'Tuesday': 3,
        'Wednesday': 4,
        'Thursday': 5,
        'Friday': 6,
        'Saturday': 7
    })
    .constant('ConstAppointmentStatus', {
        'PendingApproval': 1,
        'Approved': 2,
        'Closed': 3,
        'Cancelled': 4,
        'Rejected': 5,
        'Expired': 6
    })
    .constant('ConstPreferredPhone', {
        'Cell': 1,
        'Home': 2,
        'Work': 3
    })
    .constant('ConstMembershipPlan', {
        'Gold': 1,
        'Silver': 2,
        'Bronze': 3,
        'FreeSignup': 4
    })
    .constant('ConstEmail', {
        'AlretReminderMailFive': 1,
        'AlretReminderMailThree': 2
    })
    .constant('ConstNotificationType', {
        'Both': 1,
        'Email': 2,
        'SMS': 3
    })
    .constant('ConstPreferenceType', {
        'Appointment': 1,
        'Lunch': 2,
        'Meeting': 3,
        'PersonalWork': 4
    })
    .constant('ConstUserReviewType', {
        'VerifiedPatient': 1,
        'GuestPatient': 2
    })
    .constant('ConstSMSGatewayStatus', {
        'Disable': 0,
        'Enable': 1
    })
    .constant('ConstWithdrawalStatuses', {
        'Pending': 1,
        'UnderProcess': 2,
        'Rejected': 3,
        'AmountTransferred': 4
    })
    .constant('ConstSocialLogin', {
        'User': 10,
        'Facebook': 1,
        'Twitter': 2,
        'Google': 3,
        'Github': 4
    })
    .constant('ConstThumb', {
        'user': {
            'small': {
                'width': 28,
                'height': 28
            },
            'medium': {
                'width': 110,
                'height': 110
            },
        }
    })
    .constant('ConstPhotoThumb', {
        'photo': {
            'medium': {
                'width': 250,
                'height': 150
            },
            'large': {
                'width': 110,
                'height': 110
            },
        }
    });
