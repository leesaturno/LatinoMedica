<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\ItemUserStatus;
use Illuminate\Support\Facades\Hash;

class ItemUserStatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ItemUserStatus::create([
            'name' => 'Booking Request',
            'slug' => 'booking-request',
            'description' => 'Request for booking.'
        ]);
        ItemUserStatus::create([
            'name' => 'Booking Request Confirmed',
            'slug' => 'booking-request-confirmed',
            'description' => 'Requested booking confirmed.'
        ]);
        ItemUserStatus::create([
            'name' => 'Payment Pending',
            'slug' => 'payment-pending',
            'description' => 'Booking is in payment pending status.'
        ]);
        ItemUserStatus::create([
            'name' => 'Waiting For Acceptance',
            'slug' => 'waiting-for-acceptance',
            'description' => 'Booking was made by the ##BOOKER## on ##CREATED_DATE##. Waiting for Host ##HOSTER## to accept the order.'
        ]);
        ItemUserStatus::create([
            'name' => 'Rejected',
            'slug' => 'rejected',
            'description' => 'Booking was rejected by the ##HOSTER##. Booking amount has been refunded.'
        ]);
        ItemUserStatus::create([
            'name' => 'Cancelled',
            'slug' => 'cancelled',
            'description' => 'Booking was cancelled by ##BOOKER##. Booking amount has been refunded based on cancellation policies.'
        ]);
        ItemUserStatus::create([
            'name' => 'Cancelled By Admin',
            'slug' => 'cancelled-by-admin',
            'description' => 'Booking was cancelled by Administrator. Booking amount has been refunded based on cancellation policies.'
        ]);
        ItemUserStatus::create([
            'name' => 'Expired',
            'slug' => 'expired',
            'description' => 'expired Booking was expired due to non acceptance by the host ##HOSTER##. Booking amount has been refunded.'
        ]);
        ItemUserStatus::create([
            'name' => 'Confirmed',
            'slug' => 'confirmed',
            'description' => 'Booking was accepted by ##HOSTER## on ##ACCEPTED_DATE##.'
        ]);
        ItemUserStatus::create([
            'name' => 'Waiting for Review',
            'slug' => 'waiting-for-review',
            'description' => '##BOOKER## has checked out.'
        ]);
        ItemUserStatus::create([
            'name' => 'Booker Reviewed',
            'slug' => 'booker-reviewed',
            'description' => 'Booker reviewed.'
        ]);
        ItemUserStatus::create([
            'name' => 'Host Reviewed',
            'slug' => 'host-reviewed',
            'description' => 'Host reviewed.'
        ]);
        ItemUserStatus::create([
            'name' => 'Completed',
            'slug' => 'completed',
            'description' => 'Order completed.'
        ]);
        ItemUserStatus::create([
            'name' => 'Attended',
            'slug' => 'attended',
            'description' => 'Attended.'
        ]);
    }
}
