<?php
/**
 * AgriyaBase - Lumen framework
 *
 * PHP version 5.5.9
 *
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Mugundhan. A (mugundhan_352at15)
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Specialty;
use App\Transformers\SpecialtyTransformer;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

/**
 * Contacts resource representation.
 * @Resource("Specialties")
 */

class SpecialtiesController extends Controller
{
	/**
     * Show all specialties
     * Get a JSON representation of all the specialties.
     * @Get("/specialties?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the language list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
		$specialties = Specialty::where(['is_active'=>1])->filterByRequest($request)->get();
        return $specialties;
    }
    public function edit($id) {
        $specialty = Specialty::find($id);
        if (!$specialty) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($specialty, new SpecialtyTransformer);
    }
}
