<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */
    public function run()
    {
        //disable foreign key check for this connection before running seeders
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        DB::table('setting_categories')->truncate();
        DB::table('settings')->truncate();
        DB::table('roles')->truncate();
        DB::table('genders')->truncate();
        DB::table('withdrawal_statuses')->truncate();
        DB::table('countries')->truncate();
        DB::table('cities')->truncate();
        DB::table('states')->truncate();
        DB::table('currencies')->truncate();
        DB::table('users')->truncate();
        DB::table('user_profiles')->truncate();
        DB::table('attachments')->truncate();
        DB::table('languages')->truncate();
       // DB::table('pages')->truncate();
        DB::table('providers')->truncate();
        DB::table('email_templates')->truncate();
        DB::table('ips')->truncate();
       // DB::table('item_user_statuses')->truncate();
       // DB::table('transaction_types')->truncate();

        $this->call('SettingCategoryTableSeeder');
        $this->call('WithdrawalStatusesTableSeeder');
        $this->call('RolesTableSeeder');
        //$this->call('GendersTableSeeder');
        $this->call('CountriesTableSeeder');
        $this->call('CurrenciesTableSeeder');
        $this->call('IpsTableSeeder');
        $this->call('ProvidersTableSeeder');
        $this->call('UsersTableSeeder');
        $this->call('EmailTemplatesTableSeeder');
        $this->call('LanguagesTableSeeder');
       // $this->call('ItemUserStatusesTableSeeder');
        //$this->call('TransactionTypesTableSeeder');
    }
}
