<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Specialty;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\SpecialtyTransformer;

/**
 * Specialties resource representation.
 *
 * @Resource("Specialties")
 */
class AdminSpecialtiesController extends Controller {

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
     * Show all specialties
     *
     * Get a JSON representation of all the specialties.
     *
     * @Get("/specialties?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
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
    public function index(Request $request) {
        $specialties = Specialty::filterByRequest($request)->paginate(20);
        return $this->response->paginator($specialties, new SpecialtyTransformer);
    }

    /**
     * Store a new specialty.
     *
     * Store a new specialty with a `name`, iso2, and `iso3`.
     *
     * @Post("/")
     * @Transaction({
     *      @Request({"name": "Cardio", "is_active": 1}),
     *      @Response(200, body={"success": {"name": {"Specialty added successfully."}}}),
     *      @Response(422, body={"error": {"name": {"Specialty name already exist."}}})
     * })
     */
    public function store(Request $request) {
        $specialty_data = $request->only('name', 'description', 'is_active');
        $validator = Validator::make($specialty_data, Specialty::GetValidationRule());
        if ($validator->passes()) {
            $specialty_data['slug'] = str_slug($request->name,'-');
            $specialty = Specialty::create($specialty_data);
            if ($specialty) {
                return response()->json(['Success' => 'Specialty has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Specialty could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Specialty could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Show the specified specialty.
     *
     * @Get("/specialties?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified specialty details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id) {
        $specialty = Specialty::find($id);
        if (!$specialty) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($specialty, new SpecialtyTransformer);
    }

    /**
     * Update specialty
     *
     * Update specialty with a `id`.
     *
     * @Put("/specialties?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id) {
        $update_data = $request->only('name', 'description', 'is_active');
        $validator = Validator::make($update_data, Specialty::GetValidationRule());
        $specialty = false;
        if ($request->has('id')) {
            $specialty = Specialty::find($id);
            $specialty = ($request->id != $id) ? false : $specialty;
        }
        if ($validator->passes() && $specialty) {
            try {
                $update_data['slug'] = str_slug($update_data['name'], '-');
                $specialty->update($update_data);
                return response()->json(['Success' => 'Specialty has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Specialty could not be updated. Please, try again.');
            }
        } else {
            echo 'fail';die;    
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Specialty could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete specialty
     *
     * Delete specialty with a `id`.
     *
     * @Delete("/specialties?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id) {
        $specialty = Specialty::find($id);
        if (!$specialty) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $specialty->delete();
        }
        return response()->json(['Success' => 'Specialty deleted'], 200);
    }

}
