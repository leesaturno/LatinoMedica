<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Plugins\Withdrawals\Model\WithdrawalStatus;
use Illuminate\Support\Facades\Hash;

class WithdrawalStatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        WithdrawalStatus::create([
            'name' => 'Pending'
        ]);
        WithdrawalStatus::create([
            'name' => 'Under Process'
        ]);
        WithdrawalStatus::create([
            'name' => 'Rejected'
        ]);
		WithdrawalStatus::create([
            'name' => 'Failed'
        ]);
        WithdrawalStatus::create([
            'name' => 'Success'
        ]);
    }
}