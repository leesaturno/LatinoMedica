<?php

/**
 * AgriyaBase - Lumen framework
 *
 * PHP version 5.5.9
 *
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Agriya <info@agriya.com>
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\UserProfile;
use App\Specialty;
use App\Attachment;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\UserProfileTransformer;
use Image;
use File;
use App\Services\UserProfileService;
use Log;

/**
 * UserProfiles resource representation.
 * @Resource("UserProfiles")
 */
class UserProfilesController extends Controller
{
    /**
     * UserProfilesController constructor.
     */
    public function __construct(UserProfileService $user_profile_service) 
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth', ['except' => 'update_display_name']);
        $this->UserProfileService = $user_profile_service;
    }

    /**
     * Get the specified user profile.
     * @Get("/user_profiles/{id}/edit")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "user_id": 1, "first_name": "admin", "last_name": "admin", "about_me": "I am the site admin", "website": null, "facebook_profile_link": null, "twitter_profile_link": null, "google_plus_profile_link": null, "linkedin_profile_link": null, "youtube_profile_link": null}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function edit()
    {
        $user = $this->auth->user();
        $user_profile = UserProfile::with('User.attachments')->where('user_id', '=', $user->id)->first();
        if (!$user_profile) {
            UserProfile::create(['first_name' => $user->username, 'user_id' => $user->id]);
            $user_profile = UserProfile::with('User.attachments')->where('user_id', '=', $user->id)->first();
        }
        return $this->response->item($user_profile, (new UserProfileTransformer)->setDefaultIncludes(['User']));
    }

    /**
     * Update user_profile
     * Update user_profile with a `user_id`.
     * @Put("/user_profiles/{id}")
     * @Transaction({
     *      @Request({"user_id": 1, "first_name": "admin", "last_name": "admin", "about_me": "I am the site admin", "website": null, "facebook_profile_link": null, "twitter_profile_link": null, "google_plus_profile_link": null, "linkedin_profile_link": null, "youtube_profile_link": null}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {}, "status_code": 422})
     * })
     */
    public function update(Request $request)
    {
        $user_profile_data = $request->only('first_name', 'last_name', 'dr_title', 'practice_name', 'gender_id', 'booking_instructions','about_me', 'board_certifications', 'memberships', 'awards', 'phone', 'address', 'city_name', 'country_id', 'postal_code', 'notification_type_id', 'is_newpatient_accepted', 'dob', 'profileimg', 'is_allow_appointments', 'identification_number', 'no_insurance_patients', 'is_allow_appointments', 'hobbies','html_info','linkedin_handle', 'twitter_handle', 'instagram_handle', 'facebook_handle', 'race', 'ethnicity', 'preferred_lang', 'is_active', 'hospital_affiliation', 'work_phone_number', 'home_phone_number', 'apartment_unit');
        $profileImage = $user_profile_data['profileimg'];
        unset($user_profile_data['profileimg']);

        $validator = Validator::make($user_profile_data, UserProfile::GetValidationRule());
        $user = $this->auth->user();
        if ($user) {
            if ($validator->passes()) {
                $user_data['is_active'] = !empty($user_profile_data['is_active'])? $user_profile_data['is_active'] : $user->is_active;
                $user_data['hospital_affiliation'] = !empty($user_profile_data['hospital_affiliation'])? $user_profile_data['hospital_affiliation'] : $user->hospital_affiliation;
                User::where('id', $user->id)->update($user_data);
                unset($user_profile_data['is_active']);
                unset($user_profile_data['hospital_affiliation']);
                $user_profile = UserProfile::where('user_id', '=', $user->id)->first();
                $city_name = $user_profile_data['city_name'];
                $user_profile_data['city_id'] = $this->UserProfileService->findGetCityIdByName($user_profile_data['city_name']);                
                $country_name= $this->UserProfileService->findGetCountryId($user_profile_data['country_id']);
                $location = $user_profile_data['address']." - ".$city_name." - ".$country_name." - ".$user_profile_data['postal_code']; 
                $latlon = $this->UserProfileService->getLatitudeLongtitude($location);
                $latlon = explode(',',$latlon); 
                $user_profile_data['latitude'] = isset($latlon[0]) ? $latlon[0] : 0;
                $user_profile_data['longitude'] = isset($latlon[1]) ? $latlon[1] : 0;
                $user_profile_data['display_name'] = $user_profile_data['dr_title'].' '.$user_profile_data['first_name'].' '.$user_profile_data['last_name']; 
                try {
                    unset($user_profile_data['city_name']);
                    if (!empty($user_profile)) {
                        UserProfile::where('id', '=', $user_profile->id)->update($user_profile_data);
                    } else {
                        $user_profile_data['user_id'] = $user->id;
                        UserProfile::create($user_profile_data);
                    }
                    /* for mobile app */
                    if(!empty($profileImage)){
                        //Log::info('Showing user: '.$profileImage); die;
                        $path = storage_path('app/User/' . $user->id . '/');
                        if (!File::isDirectory($path)) {
                            File::makeDirectory($path, 0777, true);
                        }
                        $imageName = md5(microtime()).'.jpg';
                        $path = storage_path('app/User/' . $user->id . '/' .$imageName);
                        if (file_put_contents($path, base64_decode(preg_replace('#data:image/[^;]+;base64,#', '', $profileImage)))) {
                            $curuser = User::with(['attachments'])->where('id', '=', $user->id)->first();
                            $attachment = array();
                            $attachment['filename'] = $imageName;
                            $attachment['dir'] = 'app/User/' . $user->id . '/';
                            $attachment['mimetype'] = 'image/jpeg';
                            $attachment['filesize'] = '102114';
                            if ($curuser->attachments) {
                                $curuser->attachments()->update($attachment);
                            } else {
                                $att = Attachment::create($attachment);
                                $curuser = User::with(['attachments'])->where('id', '=', $user->id)->first();
                                $curuser->attachments()->save($att);
                            }
                        }
                    }
                    if ($request->hasFile('file')) {
                        if ($request->file('file')->isValid()) {
                            $path = storage_path('app/User/' . $user->id . '/');
                            if (!File::isDirectory($path)) {
                                File::makeDirectory($path, 0777, true);
                            }
                            $img = Image::make($_FILES['file']['tmp_name']);
                            $path = storage_path('app/User/' . $user->id . '/' . $_FILES['file']['name']);
                            if ($img->save($path)) {
                                $curuser = User::with(['attachments'])->where('id', '=', $user->id)->first();
                                $attachment = array();
                                $attachment['filename'] = $_FILES['file']['name'];
                                $attachment['dir'] = 'app/User/' . $user->id . '/';
                                $attachment['mimetype'] = $request->file('file')->getClientMimeType();
                                $attachment['filesize'] = $request->file('file')->getClientSize();
                                if ($curuser->attachments) {
                                    $curuser->attachments()->update($attachment);
                                } else {
                                    $att = Attachment::create($attachment);
                                    $curuser = User::with(['attachments'])->where('id', '=', $user->id)->first();
                                    $curuser->attachments()->save($att);
                                }
                            }
                        }
                    }
                    return response()->json(['Success' => 'UserProfile has been updated'], 200);
                } catch (\Exception $e) { // I don't remember what exception it is specifically
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('UserProfile could not be updated. Please, try again.'.$e->getMessage());
                }
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('UserProfile could not be updated. Please, try again.', $validator->errors());
            }
        }
    }

    public function update_photo(Request $request)
    {
        $user_profile_data = $request->only('profileimg');
        $user = $this->auth->user();
        if ($user) {
              try {
                    if (!empty($user_profile_data['profileimg'])) {
                        $path = storage_path('app/User/' . $user->id . '/');
                        if (!File::isDirectory($path)) {
                            File::makeDirectory($path, 0777, true);
                        }
                        $imageName = md5(microtime()).'.jpg';
                        $path = storage_path('app/User/' . $user->id . '/' .$imageName);
                        if (file_put_contents($path, base64_decode(preg_replace('#data:image/[^;]+;base64,#', '', $user_profile_data['profileimg'])))) {
                            $curuser = User::with(['attachments'])->where('id', '=', $user->id)->first();
                            $attachment = array();
                            $attachment['filename'] = $imageName;
                            $attachment['dir'] = 'app/User/' . $user->id . '/';
                            $attachment['mimetype'] = 'image/jpeg';
                            $attachment['filesize'] = '102114';
                            if ($curuser->attachments) {
                                $curuser->attachments()->update($attachment);
                            } else {
                                $att = Attachment::create($attachment);
                                $curuser = User::with(['attachments'])->where('id', '=', $user->id)->first();
                                $curuser->attachments()->save($att);
                            }
                            return response()->json(['Success' => 'Profile Image has been updated.'], 200);
                        }
                     } else {
                        throw new \Dingo\Api\Exception\StoreResourceFailedException('Profile Image could not be updated. Please, try again.');
                     }
                } catch (\Exception $e) { // I don't remember what exception it is specifically
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Profile Image could not be updated. Please, try again.');
                }
        }
    }

    /**
     * Show all doctor specialties
     *
     * Get a JSON representation of all the specialties.
     *
     * @Get("/my_specialties?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the specialties list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the specialties list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort specialties by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display specialties By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search specialties.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function my_specialties() {
        $user = $this->auth->user();
        $user_specialties = UserProfile::select('specialty_id')->where('user_id', '=', $user->id)->first();
        $specialties = $this->UserProfileService->getAllSpecialties();
        if (!$specialties) {
            return $this->response->errorNotFound("Invalid Request");
        }
        if ($user_specialties) {
            $all_selected_ids = array();
            $specialty_ids = explode(",", $user_specialties->specialty_id);
            foreach ($specialties as $specialtie) {
                if (in_array($specialtie['id'], $specialty_ids)) {
                    $specialtie['checked'] = true;
                    $specialties1[] = $specialtie;
                } else {
                    $specialtie['checked'] = false;
                    $specialties1[] = $specialtie;
                }
            }
        }
        return response()->json(['specialties' => $specialties, 'user_specialty_id' => $user_specialties->specialty_id]);
    }
    
    public function update_specialty(Request $request) {
        $user_specialty_data = $request->only('specialty');
        $user = $this->auth->user();
        if ($user) {
               $user_profile = UserProfile::where('user_id', '=', $user->id)->first();
            if($user_specialty_data) {
               try {
                   $user_profile_data = ['specialty_id'=> implode(',',$user_specialty_data['specialty'])];
                   UserProfile::where('id', '=', $user_profile->id)->update($user_profile_data);
                   return response()->json(['Success' => 'Specialties has been updated'], 200);
               } catch (Exception $ex) {
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Specialties could not be updated. Please, try again.');   
               } 
            }  else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Specialties could not be updated. Please, try again.');
            }
        }
    }
    /**
     * Show all doctor specialties
     *
     * Get a JSON representation of all the specialties.
     *
     * @Get("/my_specialties?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the specialties list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the specialties list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort specialties by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display specialties By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search specialties.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function my_languages() {
        $user = $this->auth->user();
        $user_languages = UserProfile::select('language_id')->where('user_id', '=', $user->id)->first();
        $languages = $this->UserProfileService->getAllLanguages();
        if (!$languages) {
            return $this->response->errorNotFound("Invalid Request");
        }
        if ($user_languages) {
            $all_selected_ids = array();
            $language_ids = explode(",", $user_languages->language_id);
            foreach ($languages as $language) {
                if (in_array($language['id'], $language_ids)) {
                    $language['checked'] = true;
                    $languages1[] = $language;
                } else {
                    $language['checked'] = false;
                    $languages1[] = $language;
                }
            }
        }
        return response()->json(['languages' => $languages, 'user_language_id' => $user_languages->language_id]);
    }
   
    public function update_language(Request $request) {
        $user_language_data = $request->only('language');
        $user = $this->auth->user();
        if ($user) {
                $user_profile = UserProfile::where('user_id', '=', $user->id)->first();
            if($user_language_data) {
               try {
                   $user_profile_data = ['language_id'=> implode(',',$user_language_data['language'])];
                   UserProfile::where('id', '=', $user_profile->id)->update($user_profile_data); 
                   return response()->json(['Success' => 'Language has been updated'], 200);
               } catch (Exception $ex) {
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Languages could not be updated. Please, try again.');   
               } 
            }  else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Languages could not be updated. Please, try again.');
            }
        }
    }
    
    /**
     * Show all doctor insurance companies
     *
     * Get a JSON representation of all the insurance companies.
     *
     * @Get("/my_insurances?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the insurances list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the insurances list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort insurances by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display insurances By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search insurances.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function my_insurances() {
        $user = $this->auth->user();
        $user_insurances = UserProfile::select('insurance_id')->where('user_id', '=', $user->id)->first();
        $insurances = $this->UserProfileService->getAllInsurances();
        if (!$insurances) {
            return $this->response->errorNotFound("Invalid Request");
        }
        if ($user_insurances) {
            $all_selected_ids = array();
            $insurance_ids = explode(",", $user_insurances->insurance_id);
            foreach ($insurances as $insurance) {
                if (in_array($insurance['id'], $insurance_ids)) {
                    $insurance['checked'] = true;
                    $insurance1[] = $insurance;
                } else {
                    $insurance['checked'] = false;
                    $insurance1[] = $insurance;
                }
            }
        }
        return response()->json(['insurances' => $insurances, 'user_insurance_id' => $user_insurances->insurance_id]);
    }
    public function update_insurance(Request $request) {
        $user_insurance_data = $request->only('insurance');
        $user = $this->auth->user();
        if ($user) {
            $user_profile = UserProfile::where('user_id', '=', $user->id)->first();
            if ($user_insurance_data) {
                try {
                    $user_profile_data = ['insurance_id' => implode(',', $user_insurance_data['insurance'])];
                    UserProfile::where('id', '=', $user_profile->id)->update($user_profile_data);
                    return response()->json(['Success' => 'Insurances has been updated'], 200);
                } catch (Exception $ex) {
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Insurances could not be updated. Please, try again.');
                }
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Insurances could not be updated. Please, try again.');
            }
        }
    }
	
	public function demographic_info(Request $request) {
		$user_profile_data = $request->only('race', 'ethnicity', 'preferred_lang','postal_code');
		$user = $this->auth->user();
		$user_profile = UserProfile::where('user_id', '=', $user->id)->first();
		try {
			if (!empty($user_profile)) {
				UserProfile::where('id', '=', $user_profile->id)->update($user_profile_data);
			} else {
				return response()->json(['Failure' => 'Demographic information could not be updated'], 200);	
			}
			return response()->json(['Success' => 'Demographic information has been updated'], 200);
		} catch (\Exception $e) { // I don't remember what exception it is specifically
           throw new \Dingo\Api\Exception\StoreResourceFailedException('Demographic information could not be updated. Please, try again.');
       }
	}

    public function deactive_account(Request $request) {
		$user_profile_data = $request->only('is_active');
		$user = $this->auth->user();
		try {
			if (!empty($user)) {
				User::where('id', '=', $user->id)->update($user_profile_data);
			} else {
				return response()->json(['Failure' => 'Your account deactivate Failed. Please, try again.'], 200);	
			}
			return response()->json(['Success' => 'Your account deactivate successfully'], 200);
		} catch (\Exception $e) { // I don't remember what exception it is specifically
           throw new \Dingo\Api\Exception\StoreResourceFailedException('Your account deactivate Failed. Please, try again.');
       }
	}
    
    public function get_file_size($imageData){
        $uri = 'data://application/octet-stream;base64,' . base64_encode($imageData);
        return getimagesize($uri);
    }


    public function update_display_name(){
        $users = UserProfile::where('is_doctor','=', 1)->where('display_name', '=', '')->get()->toArray();
        foreach($users as $user){
            $updateVal['display_name'] = '';
            $updateVal['display_name'] = $user['dr_title']. ' '.$user['first_name'].' '.$user['last_name'];
            UserProfile::where('id', '=', $user['id'])->update($updateVal);
            echo 'updated - '. $updateVal['display_name']. '<br>';
        }
        echo 'done'. '<br>';
    }
}
