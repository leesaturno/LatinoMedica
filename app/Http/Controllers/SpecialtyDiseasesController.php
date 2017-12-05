<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\SpecialtyDiseas;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

/**
 * SpecialtyDiseases resource representation.
 *
 * @Resource("SpecialtyDiseases")
 */
class SpecialtyDiseasesController extends Controller {
    public function index(Request $request)
    {
        $specialtyDiseas = SpecialtyDiseas::filterByRequest($request)->paginate($request->input('page', 200));
        return $specialtyDiseas;
    }

}
