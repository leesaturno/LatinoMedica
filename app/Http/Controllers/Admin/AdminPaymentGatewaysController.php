<?php

/**
 * User: vijayanand_04ac09
 * Date: 2016-04-08
 * Time: 3:15 PM
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\PaymentGateway;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\PaymentGatewayTransformer;

/**
 * PaymentGateways resource representation.
 *
 * @Resource("PaymentGateways")
 */
class AdminPaymentGatewaysController extends Controller {

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
     * Show all Payment Gateways
     *
     * Get a JSON representation of all the payment gateways.
     *
     * @Get("/payment_gateways?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the payment gateways list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the payment gateways list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort payment gateways by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display payment gateways By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search payment gateways.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $payment_gateways = PaymentGateway::paginate(20);
        return $this->response->paginator($payment_gateways, (new PaymentGatewayTransformer));
    }
    
    /**
     * Show the specified Payment Gateway.
     *
     * @Get("/payment_gateways?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified user education details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id) {
        $payment_gateway = PaymentGateway::find($id);
        if (!$payment_gateway) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($payment_gateway, (new PaymentGatewayTransformer));
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
        $plan_data = $request->only('name', 'description');
        $validator = Validator::make($plan_data, PaymentGateway::GetValidationRule());
        if ($request->has('id')) {
            $plan = PaymentGateway::find($id);
            $plan = ($request->id != $id) ? false : $plan;
        }
        if ($validator->passes() && $plan) {
            try {
                $plan->update($plan_data);
                return response()->json(['Success' => 'PaymentGateway has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('PaymentGateway could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('PaymentGateway could not be updated. Please, try again.', $validator->errors());
        }
    }
}
