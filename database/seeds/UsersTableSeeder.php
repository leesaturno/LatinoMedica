<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;
use App\UserProfile;
use App\Attachment;
use App\Eloquent;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */
    public function run()
    {
        $admin_user = User::create([
            'role_id' => 1,
            'username' => 'admin',
            'email' => 'servicedemo.admin@gmail.com',
            'password' => Hash::make('agriya'),
            'is_agree_terms_conditions' => 1,
            'is_email_confirmed' => 1,
            'is_active' => 1,
            'register_ip_id' => 1,
            'last_login_ip_id' => 1
        ]);
        UserProfile::create([
            'user_id' => $admin_user->id,
            'first_name' => 'admin',
            'last_name' => 'admin',
            'about_me' => 'I am the site admin and will manange all the pages in the site'
        ]);
		// this is default avatar
        Attachment::create([
            'attachmentable_id' => 0,
            'attachmentable_type' => 'App\User',
            'filename' => 'default.jpg',
            'dir' => 'app/User/0/',
            'mimetype' => 'image/jpeg',
            'filesize' => '7870'
        ]);
    }
}