<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Ip;

class IpsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Ip::create([
            'ip' => '127.0.0.1',
            'city_id' => 33,
            'state_id' => 8,
            'country_id' => 102,
            'host' => 'localhost'
        ]);

        Ip::create([
            'ip' => '::1',
            'city_id' => 33,
            'state_id' => 8,
            'country_id' => 102,
            'host' => 'localhost'
        ]);
    }
}