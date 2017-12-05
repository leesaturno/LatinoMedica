<?php

return [
    'ConstUserTypes' => [
        'Admin' => 1,
        'User' => 2,
        'Doctor' => 3
    ],
    'ConstUserID' => [
        'Admin' => 1
    ],
    'ConstAttachment' => [
        'UserAvatar' => 1,
        'Photo' => 2,
        'UserPhoto' => 3,
        'Badge' => 4
    ],
    'ConstMoreAction' => [
          'Inactive' =>  1,
          'Active' =>  2,
          'Delete' =>  3,
          'Export' =>  4
    ],
    'ConstBannedTypes' => [
          'SingleIPOrHostName' =>  1,
          'IPRange' =>  2,
          'RefererBlock' =>  3
    ],
    'ConstBannedDurations' => [
          'Permanent' =>  1,
          'Days' =>  2,
          'Weeks' =>  3
    ],
    'ConstGenders' => [
          'Male' =>  1,
          'Female' =>  2
    ],
    'ConstPaymentGateways' => [
           'PayPal' =>  1
    ],
    'ConstTransactionTypes' => [
          'PlanFee' =>  1,
          'SignupFee' =>  2
    ],
    'ConstRepeatDates' => [
          'Sunday' =>  1,
          'Monday' => 2,
          'Tuesday' =>  3,
          'Wednesday' =>  4,
          'Thursday' =>  5,
          'Friday' =>  6,
          'Saturday' =>  7
    ],
    'ConstAppointmentStatus' => [
          'PendingApproval' =>  1,
          'Approved' => 2,
          'Closed' =>  3,
          'Cancelled' =>  4,
          'Rejected' =>  5,
          'Expired' =>  6,
          'Present' => 7  
    ],
    'ConstPreferredPhone' => [
          'Cell' =>  1,
          'Home' =>  2,
          'Work' =>  3
    ],
    'ConstMembershipPlan' => [
          'Gold' =>  1,
          'Silver' =>  2,
          'Bronze' =>  3,
          'FreeSignup' =>  4
    ],
    'ConstEmail' => [
          'AlretReminderMailFive' =>  1,
          'AlretReminderMailThree' => 2
    ],
    'ConstNotificationType' => [
          'Both' =>  1,
          'Email' =>  2,
          'SMS' =>  3
    ],
    'ConstPreferenceType' => [
          'Appointment' =>  1,
          'Lunch' =>  2,
          'Meeting' =>  3,
          'PersonalWork' =>  4
    ],
    'ConstUserReviewType' => [
          'VerifiedPatient' =>  1,
          'GuestPatient' =>  2
    ],
    'ConstSMSGatewayStatus' => [
          'Disable' =>  0,
          'Enable' =>  1
    ],
    'ConstTransactionTypes' => [
        'SignupFee' => 1,
        'AddedToWallet' => 2,
        'RefundForExpiredBooking' => 3,
        'RefundForRejectedBooking' => 4,
        'RefundForCanceledBooking' => 5,
        'RefundForBookingCanceledByAdmin' => 6,
        'CashWithdrawalRequest' => 7,
        'CashWithdrawalRequestApproved' => 8,
        'CashWithdrawalRequestRejected' => 9,
        'CashWithdrawalRequestPaid' => 10,
        'CashWithdrawalRequestFailed' => 11,
        'AdminAddFundToWallet' => 22,
        'AdminDeductFundFromWallet' => 13
    ],
    'ConstWithdrawalStatus' => [
        'Pending' => 1,
        'Approved' => 2,
        'Rejected' => 3,
        'Failed' => 4,
        'Success' => 5
    ],
	'ConstPaymentMethod' => [
        'Manual'  => 1,
        'paypal' => 2,
        'Admin' => 2,
    ],
    'ConstPaypalStatus' => [
        'Pending' => 0,
        'WaitingApproval'  => 1,
        'Active' => 2,
        'Cancel' => 3,
        'Suspend' => 4,
        'declined' => 5,
        'expired' => 6
    ],
    'ConstPaypalTransStatus' => [
        'Active'     => "Active",
        'Success'    => "Success",
        'Failure'    => "Failure",
        'Pending'    => "PENDING",
        'Completed'  => "COMPLETED",
        'Unverified' => "Unverified",
        'Cancel'     => "cancel",
        'Suspend'    => "suspend",
        'Cancelled'  => "Cancelled"
    ],
    'ConstSocialLogin' => [
        'User' => 10,
        'Facebook' => 1,
        'Twitter' => 2,
        'Google' => 3,
        'Github' => 4
    ],
    'Security.salt' => '2dd8271e35f1f7ee5aec1ca909d46dce7c6aec7e',
    'token_secret' => '258222255666514df22222',
    'thumb' => [
        'user' => [
            'small' => [
                'width' => 28,
                'height' => 28
            ],
            'medium' => [
                'width' => 110,
                'height' => 110
            ],
            'large' => [
                'width' => 254,
                'height' => 208
            ]
        ],
        'badge' => [
            'small' => [
                'width' => 28,
                'height' => 28
            ]
        ],
        'photo' => [
            'small' => [
                'width' => 250,
                'height' => 250
            ],
            'medium' => [
                'width' => 800,
                'height' => 600
            ]
        ]
    ],
    'ConstMessageFolder' => [
        'Inbox' => 1,
        'SentMail' => 2,
        'Drafts' => 3,
        'Spam' => 4,
        'Trash' => 5,
        'PrivateMail' => 6,
    ],
    'slot_day' => '4',
    'ConstBestAnswerRatingPoint' => [
        '1' =>  1,
        '2' =>  2,
        '3' =>  3,
        '4' =>  4,
        '5' => 5
    ],
    'ConstActivityType' => [
        'StatusChanged' => 1,
        'NewEntryPosted' => 2
    ],
];