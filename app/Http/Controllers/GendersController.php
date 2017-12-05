<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Gender;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class GendersController extends Controller
{
    public function index(Request $request)
    {
        $genders = Gender::filterByRequest($request)->paginate($request->input('page', 200));
        return $genders;
    }
}
