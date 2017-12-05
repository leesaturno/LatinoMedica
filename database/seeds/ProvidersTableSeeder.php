<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Plugins\SocialLogins\Model\Provider;

class ProvidersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Provider::create(array(
            'name' => 'Facebook',
            'secret_key' => ($_ENV['DB_DATABASE']=='smysql_agriyabase') ? '187bb402b250a19fe01cf3882ef542f9' : '19dff7bada02624c89af8d6d94977cb8' ,
            'api_key' => ($_ENV['DB_DATABASE']=='smysql_agriyabase') ? '1205037272848255' : '2003061299919443' ,
            'icon_class' => 'fa-facebook',
            'button_class' => 'btn-facebook',
            'is_active' => true,
            'display_order' => 1
        ));

        Provider::create(array(
            'name' => 'Twitter',
            'secret_key' => '3WY4tkA6eEtTNPdU6lvZuIBc4Rqp2kOis9TMJd8lvelAL3g1gu',
            'api_key' => 'G9vRaWhm11QcDMJ6TrovMcFdP',
            'icon_class' => 'fa-twitter',
            'button_class' => 'btn-twitter',
            'is_active' => true,
            'display_order' => 2
        ));

        Provider::create(array(
            'name' => 'Google',
            'secret_key' => 'Y4Rtr7apXX5N0rXE6Ifa5FPJ',
            'api_key' => '95821807561-2jm168ubd9rccv3en94lu7fn6b1a0hc6.apps.googleusercontent.com',
            'icon_class' => 'fa-google',
            'button_class' => 'btn-google',
            'is_active' => true,
            'display_order' => 3
        ));
        Provider::create(array(
            'name' => 'Github',
            'secret_key' => ($_ENV['DB_DATABASE']=='smysql_agriyabase') ? 'b02ee62e6016c80f1c9ff7452dc855e5865e411c' : 'ef3761332d0b2c970513712c1fe6b3da371b76b6' ,
            'api_key' => ($_ENV['DB_DATABASE']=='smysql_agriyabase') ? '0578a31b13dae1e65404' : '8beb15c45bc7d1d71510' ,
            'icon_class' => 'fa-github',
            'button_class' => 'btn-github',
            'is_active' => true,
            'display_order' => 4
        ));

    }
}