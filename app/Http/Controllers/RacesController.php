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

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Race;
use App\Translation;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\RaceTransformer;

/**
 * Contacts resource representation.
 * @Resource("Races")
 */
class RacesController extends Controller
{
    /**
     * Show all Races
     * Get a JSON representation of all the Races.
     * @Get("/races?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the Races list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $races = Race::get();
        return $this->response->collection($races, new RaceTransformer);
    }

    public function store(Request $request)
    {
        $race_data = $request->only('name');
        $validator = Validator::make($race_data, Race::GetValidationRule());
        if ($validator->passes()) {
            $race = Race::create($race_data);
            if ($race) {
                return response()->json(['Success' => 'Race has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Race could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Race could not be updated. Please, try again.', $validator->errors());
        }
    }

    public function edit($id)
    {
        $race = Race::find($id);
        if (!$race) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($race, new RaceTransformer);
    }

    public function update(Request $request, $id)
    {
        $race_data = $request->only('name');
        $validator = Validator::make($race_data, Race::GetValidationRule());
        $race = false;
        if ($request->has('id')) {
            $race = Race::find($id);
            $race = ($request->id != $id) ? false : $race;
        } 
        if ($validator->passes() && $race) { 
            try {               
                $race->update($race_data);
                return response()->json(['Success' => 'Race has been updated'], 200);
            } catch (\Exception $e) { 
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Race could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Race could not be updated. Please, try again.', $validator->errors());
        }
    }

    public function destroy($id)
    {
        $race = Race::find($id);
        if (!$race) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $race->delete();
        }
        return response()->json(['Success' => 'Race deleted'], 200);
    }
}