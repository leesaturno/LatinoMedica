<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Plan;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\PlanTransformer;

/**
 * Plan resource representation.
 *
 * @Resource("Plans")
 */
class AdminPlansController extends Controller {

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
     * Show all plans
     *
     * Get a JSON representation of all the plans.
     *
     * @Get("/plans?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the plan.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the plans list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort plans by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display plans By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search plan.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $plans = Plan::filterByRequest($request)->paginate(20);
        return $this->response->paginator($plans, new PlanTransformer);
    }

    /**
     * Store a new plan.
     *
     * Store a new plan  with a `name`, `description`, `features`, `amount`, `duration` and `is_active`.
     *
     * @Post("/")
     * @Transaction({
     *      @Request({"name": "Plan Name", "description": "Plan Description", "features": "Plan Features", "amount": 44.00, "duration": 365, "is_active":1}),
     *      @Response(200, body={"success": {"name": {"Plan added successfully."}}}),
     *      @Response(422, body={"error": {"name": {"Plan name already exist."}}})
     * })
     */
    public function store(Request $request) {
        $plan_data = $request->only('name', 'description', 'amount', 'duration', 'features');
        $validator = Validator::make($plan_data, Plan::GetValidationRule());
        if ($validator->passes()) {
            $plan_data['is_active'] = true;
            $plan_data['slug'] = str_slug($request->name, '-');
            $plan = Plan::create($plan_data);
            if ($plan) {
                return response()->json(['Success' => 'Plan has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Plan could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Plan could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Show the specified plan.
     *
     * @Get("/plans?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified plan details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id) {
        $plan = Plan::find($id);
        if (!$plan) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($plan, new PlanTransformer);
    }

    /**
     * Update plan
     *
     * Update plan with a `id`.
     *
     * @Put("/plans?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id) {
        $plan_data = $request->only('name', 'description', 'features', 'amount', 'duration', 'is_active');
        $validator = Validator::make($plan_data, Plan::GetValidationRule());
        $plan_data['slug'] = str_slug($request['name'], '-');
        if ($request->has('id')) {
            $plan = Plan::find($id);
            $plan = ($request->id != $id) ? false : $plan;
        }
        if ($validator->passes() && $plan) {
            try {
                $plan->update($plan_data);
                return response()->json(['Success' => 'Plan has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Plan could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Plan could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete Plan
     *
     * Delete Plan with a `id`.
     *
     * @Delete("/plans?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id) {
        $plan = Plan::find($id);
        if (!$plan) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $plan->delete();
        }
        return response()->json(['Success' => 'Plan deleted'], 200);
    }

}
