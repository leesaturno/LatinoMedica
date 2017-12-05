<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\SpecialtyDiseas;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\SpecialtyDiseasTransformer;

/**
 * SpecialtyDiseases resource representation.
 *
 * @Resource("SpecialtyDiseases")
 */
class AdminSpecialtyDiseasesController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all specialty_diseases
     *
     * Get a JSON representation of all the specialty_diseases.
     *
     * @Get("/specialty_diseases?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the specialty diseases list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the specialty diseases list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort specialty diseases by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display specialty diseases By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search specialty diseases.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $specialty_diseases = SpecialtyDiseas::filterByRequest($request)->paginate(20);
        return $this->response->paginator($specialty_diseases, (new SpecialtyDiseasTransformer)->setDefaultIncludes(['Specialty']));
    }

    /**
     * Store a new specialty diseas.
     *
     * Store a new specialty diseas with a `name`, `specialty_id`.
     *
     * @Post("/")
     * @Transaction({
     *      @Request({"name": "Feaver", "specialty_id": 1}),
     *      @Response(200, body={"success": {"name": {"Specialty diseas added successfully."}}}),
     *      @Response(422, body={"error": {"name": {"Specialty diseas name already exist."}}})
     * })
     */
    public function store(Request $request) {
        $stored_data = $request->only('name', 'specialty_id','is_active');
        $validator = Validator::make($stored_data, SpecialtyDiseas::GetValidationRule());
        if ($validator->passes()) {
            $stored_data['slug'] = str_slug($request->name, '-');
            $result = SpecialtyDiseas::create($stored_data);
            if ($result) {
                return response()->json(['Success' => 'Specialty Diseas has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Specialty Diseas could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Specialty Diseas could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Show the specified specialty deases.
     *
     * @Get("/specialty_diseases?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified specialty diseas details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id) {
        $value = SpecialtyDiseas::find($id);
        if (!$value) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($value, (new SpecialtyDiseasTransformer)->setDefaultIncludes(['Specialty']));
    }

    /**
     * Update Specialty Diseas
     *
     * Update Specialty Diseas with a `id`.
     *
     * @Put("/specialty_diseases?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id) {
        $request_data = $request->only('id', 'name', 'specialty_id', 'is_active');
        $validator = Validator::make($request_data, SpecialtyDiseas::GetValidationRule());
        $specialtydeases = false;
        if ($request->has('id')) {
            $specialtydeases = SpecialtyDiseas::find($id);
            $specialtydeases = ($request->id != $id) ? false : $specialtydeases;
        }
        if ($validator->passes() && $specialtydeases) {
            try {
                $request_data['slug'] = str_slug($request_data['name'], '-');
                $specialtydeases->update($request_data);
                return response()->json(['Success' => 'Specialty Disease has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Specialty Diseas could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Specialty Diseas could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete Specialty Diseas
     *
     * Delete Specialty Diseas with a `id`.
     *
     * @Delete("/specialty_diseases?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id) {
        $value = SpecialtyDiseas::find($id);
        if (!$value) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $value->delete();
        }
        return response()->json(['Success' => 'Specialty Diseas deleted'], 200);
    }

}
