<?php

/**
 * AgriyaBase - Lumen framework
 * PHP version 5.5.9
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Mugundhan Asokan
 * @email      a.mugundhan@gmail.com
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */

namespace Plugins\UserFavorites\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\UserFavorites\Model\UserFavorite;
use Plugins\UserFavorites\Transformers\UserFavoriteTransformer;
use App\User;

class UserFavoritesController extends Controller {
    
    public function __construct(){
        $this->middleware('jwt.auth');
    }
    
    public function index() {
        $user = $this->auth->user();
        $favorites = UserFavorite::where('user_id', '=', $user->id)->paginate(20);
        return $this->response->paginator($favorites, (new UserFavoriteTransformer)->setDefaultIncludes(['doctor_user']));
    }
    
    public function add(Request $request){
        $acceptValues = $request->only('username');
        $doctorId = User::where('username','=',$acceptValues['username'])->first();
        if($doctorId){
            $user = $this->auth->user();
            /* For check the docotor is already added favorite */
            $isAlreadyFavoriteAdded = UserFavorite::where(['doctor_user_id'=>$doctorId['id'], 'user_id'=>$user->id])->first();
            if(empty($isAlreadyFavoriteAdded)){
                $storedValue['doctor_user_id'] = $doctorId['id'];
                $storedValue['user_id'] = $user->id;
                $favoriteAdded = UserFavorite::create($storedValue);
                if($favoriteAdded){
                    return response()->json(['Success' => 'Doctor is added your my doctor list'], 200);
                }else{
                   return response()->json(['Failed' => 'Doctor has not been added your my doctor list']); 
                }
            }else{
                return response()->json(['Failed' => 'Doctor is already added your my doctor list']);
            }
        }else{
            return response()->json(['Failed' => 'Doctor has not been added your my doctor list']); 
        }        
    }
    /**
     * Delete User Favorite
     *
     * Delete User Favorite with a `id`.
     *
     * @Delete("/user_favorites?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id){
        if(!empty($id)){
            $user = $this->auth->user();
            /* Check the deleted value is added by auth user */
            $isAddedAuthUser = UserFavorite::find($id);
            if($isAddedAuthUser){
                if($isAddedAuthUser['user_id'] == $user->id){
                    $isAddedAuthUser->delete();
                    return response()->json(['Success' => 'Doctor Removed Successfully'], 200);
                }else{
                    return $this->response->errorNotFound("Invalid Request");
                }
            }else{
                return response()->json(['Failed' => 'Trying Invalid Id']);
            }
        }
    }
}
