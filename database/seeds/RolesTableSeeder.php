<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            'name' => 'admin'
        ]);

        Role::create([
            'name' => 'user'
        ]);
        
        Role::create([
            'name' => 'doctor'
        ]);
    }
}