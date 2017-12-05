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

namespace Plugins\Subscriptions\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Plugins\Subscriptions\Model\Subscription;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Plugins\Subscriptions\Transformers\SubscriptionTransformer;

/**
 * Subscriptions resource representation.
 *
 * @Resource("UserEudcations")
 */
class AdminSubscriptionsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        
    }

    /**
     * Show all Subscriptions
     *
     * Get a JSON representation of all the Subscriptions.
     *
     * @Get("/subscriptions?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the user educations list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the user educations list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user educations by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display user educations By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search user educations.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $subscription = Subscription::filterByRequest($request)->paginate(20);
        return $this->response->paginator($subscription, (new SubscriptionTransformer));
    }

    /**
     * Store a new user education.
     *
     * Store a new user education with a `user_id`, `education`, `location`, `organization`, `date`, `is_active`.
     *
     * @Post("/")
     * @Transaction({
     *      @Request({"user_id": 1, "education": "MBBS", "location":"USA", "organization":"Aureus University","date":"2008","is_active":1}),
     *      @Response(200, body={"success": {"name": {"Subscription added successfully."}}}),
     *      @Response(422, body={"error": {"name": {"Subscription already exist."}}})
     * })
     */
    public function store(Request $request) {
        $subscription_data = $request->only('name', 'price', 'description', 'period_days', 'is_active');
        $validator = Validator::make($subscription_data, Subscription::GetValidationRule());
        if ($validator->passes()) {
            $subscription_data['is_active'] = true;
            $subscription = Subscription::create($subscription_data);
            if ($subscription) {
                return response()->json(['Success' => 'Subscription has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Subscription could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Subscription could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Show the specified Subscription.
     *
     * @Get("/subscriptions?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified user education details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id) {
        $subscription = Subscription::find($id);
        if (!$subscription) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($subscription, (new SubscriptionTransformer));
    }

    /**
     * Update Subscriptions
     *
     * Update Subscriptions with a `id`.
     *
     * @Put("/uyser_educations?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id) {
        $subscription_data = $request->only('id', 'name', 'price', 'description', 'period_days', 'is_active');
        $validator = Validator::make($subscription_data, Subscription::GetValidationRule());
        $subscription = false;
        if ($request->has('id')) {
            $subscription = Subscription::find($id);
            $subscription = ($request->id != $id) ? false : $subscription;
        }
        if ($validator->passes() && $subscription) {
            try {
                $subscription->update($subscription_data);
                return response()->json(['Success' => 'Subscription has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Subscription could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Subscription could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete Subscription
     *
     * Delete Subscription with a `id`.
     *
     * @Delete("/subscriptions?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id) {
        $subscription = Subscription::find($id);
        if (!$subscription) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $subscription->delete();
        }
        return response()->json(['Success' => 'Subscription deleted'], 200);
    }

}
