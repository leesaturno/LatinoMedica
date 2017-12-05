<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Gender;

class GendersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Gender::create([
            'name' => 'Male'
        ]);

        Gender::create([
            'name' => 'Female'
        ]);
    }
}