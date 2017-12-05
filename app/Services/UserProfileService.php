<?php

namespace App\Services;

use App\UserProfile;
use App\Specialty;
use App\City;
use App\State;
use App\Country;
use App\Language;
use App\InsuranceCompany;

class UserProfileService {

    /**
     * Save record to user_login table after login
     * @param $request
     * @param $ip_id
     * @return UserLogin
     */
    public function save_user_profile_details($request_data) {
        $user_profile = new UserProfile;
        $user_profile->user_id = $request_data['user_id'];
        $user_profile->first_name = $request_data['first_name'];
        $user_profile->last_name = $request_data['last_name'];
        $user_profile->gender_id = isset($request_data['gender_id'])? $request_data['gender_id']: 1;
        $user_profile->specialty_id = isset($request_data['specialty_id'])? $request_data['specialty_id']: 0;
        $user_profile->language_id = isset($request_data['language_id'])? $request_data['language_id']: 0;
        $user_profile->is_doctor = isset($request_data['is_doctor'])? $request_data['is_doctor']: 0;
        $user_profile->postal_code = $request_data['postal_code'];
        $user_profile->phone = $request_data['phone'];
        $user_profile->dob = isset($request_data['dob'])?$request_data['dob']:'1970-01-01';
        $user_profile->hobbies = isset($request_data['hobbies'])?$request_data['hobbies']:'';
        $user_profile->country_id = isset($request_data['country_id'])?$request_data['country_id']:0;
        $user_profile->city_id                    = isset($request_data['city_id'])?$request_data['city_id']:0;
        $user_profile->latitude                   = isset($request_data['latitude'])?$request_data['latitude']:0;
        $user_profile->longitude                  = isset($request_data['longitude'])?$request_data['longitude']:0;
        $user_profile->address                    = isset($request_data['address'])?$request_data['address']:'';
        $user_profile->display_name = $request_data['first_name'].' '.$request_data['last_name'];
        return $user_profile;
    }

    /**
     * Find Latitude and Longitude for User after update the Edit Profile
     * @param $request
     * @param $location
     * @return Latitude and Longitude
     */
    public function getLatitudeLongtitude($location) {
        if ($location != '') {
            $mapUrlData = urlencode($location);
            $request_url = "http://maps.googleapis.com/maps/api/geocode/xml?address=" . $mapUrlData . "&sensor=true";
            $xml = simplexml_load_file($request_url) or die("url not loading");
            $status = $xml->status;
            $LatLng = '';
            if ($status == "OK") {
                $Lat = $xml->result->geometry->location->lat;
                $Lon = $xml->result->geometry->location->lng;
                $LatLng = "$Lat,$Lon";
            }
            return $LatLng;
        } else {
            return "Null";
        }
    }
    
    /**
     * Get City Name
     * @param $request
     * @param $city_id
     * @return City Name
     */
    public function findGetCityId($city_id) {
        $city = City::select('id', 'name')->where('id', '=', $city_id)->first();
        if (!$city) {
            return false;
        }
        return $city->name;
    }
    /**
     * Get State Name
     * @param $request
     * @param $state_id
     * @return State Name
     */
    public function findGetStateId($state_id) {
        $state = State::select('id', 'name')->where('id', '=', $state_id)->first();
        if (!$state) {
            return false;
        }
        return $state->name;
    }
     /**
     * Get Country Name
     * @param $request
     * @param $country_id
     * @return Country Name
     */
    public function findGetCountryId($country_id) {
        $country = Country::select('id', 'name')->where('id', '=', $country_id)->first();
        if (!$country) {
            return false;
        }
        return $country->name;
    }
    
    /**
     * Get all doctor specialties
     * @param $request
     * @return Specialties
     */
    public function getAllSpecialties() {
        $specialties = Specialty::select('id', 'name')->get();
        if (!$specialties) {
            return false;
        }
        return $specialties;
    }

    /**
     * Get all doctor languages
     * @param $request
     * @return Languages
     */
    public function getAllLanguages() {
        $languages = Language::select('id', 'name')->get();
        if (!$languages) {
            return false;
        }
        return $languages;
    }
    
     /**
     * Get all doctor specialties
     * @param $request
     * @return Specialties
     */
    public function getAllInsurances() {
        $insurances = InsuranceCompany::select('id', 'name')->get();
        if (!$insurances) {
            return false;
        }
        return $insurances;
    }
   public function findGetCityIdByName($city_name) {
        $city = City::select('id', 'name')->where('name', strtolower(trim($city_name)))->first();
        if (!empty($city)) {
            return $city->id;
        } else {
            $city_data = array();
            $city_data['name'] = strtolower(trim($city_name));
            $city_data['is_active'] = 1;
            $city = City::create($city_data);
            return $city->id;
        }
    }
}

?>