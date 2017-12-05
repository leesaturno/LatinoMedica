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
 * @since      2017-02-21
 */

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Ethnicity;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\EthnicityTransformer;

/**
 * Contacts resource representation.
 * @Resource("Ethnicities")
 */
class EthnicitiesController extends Controller
{
    /**
     * Show all Ethnicity
     * Get a JSON representation of all the Ethnicity.
     * @Get("/ethnicities?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the ethnicities list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $ethnicities = Ethnicity::get();
        return $this->response->collection($ethnicities, new EthnicityTransformer);
    }

    public function store(Request $request)
    {
        $ethnicity_data = $request->only('name');
        $validator = Validator::make($ethnicity_data, Ethnicity::GetValidationRule());
        if ($validator->passes()) {
            $ethnicity = Ethnicity::create($ethnicity_data);
            if ($ethnicity) {
                return response()->json(['Success' => 'Ethnicity has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Ethnicity could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Ethnicity could not be updated. Please, try again.', $validator->errors());
        }
    }

    public function edit($id)
    {
        $ethnicity = Ethnicity::find($id);
        if (!$ethnicity) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($ethnicity, new EthnicityTransformer);
    }

    public function update(Request $request, $id)
    {
        $ethnicity_data = $request->only('name');
        $validator = Validator::make($ethnicity_data, Ethnicity::GetValidationRule());
        $ethnicity = false;
        if ($request->has('id')) {
            $ethnicity = Ethnicity::find($id);
            $ethnicity = ($request->id != $id) ? false : $ethnicity;
        } 
        if ($validator->passes() && $ethnicity) { 
            try {               
                $ethnicity->update($ethnicity_data);
                return response()->json(['Success' => 'Ethnicity has been updated'], 200);
            } catch (\Exception $e) { 
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Ethnicity could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Ethnicity could not be updated. Please, try again.', $validator->errors());
        }
    }

    public function destroy($id)
    {
        $ethnicity = Ethnicity::find($id);
        if (!$ethnicity) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $ethnicity->delete();
        }
        return response()->json(['Success' => 'Ethnicity deleted'], 200);
    }
}
