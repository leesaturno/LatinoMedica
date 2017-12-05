<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\SmsTemplate;

use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\SmsTemplateTransformer;

/**
 * SmsTemplates resource representation.
 *
 * @Resource("SmsTemplates")
 */
class AdminSmsTemplatesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all SmsTemplates
     *
     * Get a JSON representation of all the SmsTemplates.
     *
     * @Get("/sms_templates?sort={sort}&sortby={sortby}&page={page}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the email templates list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort email templates by Ascending / Descending Order.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $sms_templates = SmsTemplate::filterByRequest($request)->paginate(20);
        return $this->response->paginator($sms_templates, new SmsTemplateTransformer);
    }

    /**
     * Show the specified SMS Template.
     *
     * @Get("/sms_templates?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Show the specified SMS Template details."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function edit($id)
    {
        $sms_template = SmsTemplate::find($id);
        if (!$sms_template) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($sms_template, new SmsTemplateTransformer);
    }

    /**
     * Update sms template
     *
     * Update sms template with a `id`.
     *
     * @Put("/sms_templates?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Updated Successfully."}}}),
     *      @Response(422, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function update(Request $request, $id)
    {
        $sms_template_data = $request->only('sms_content');
        $validator = Validator::make($sms_template_data, SmsTemplate::GetValidationRule());
        $sms_template = false;
        if ($request->has('id')) {
            $sms_template = SmsTemplate::find($id);
            $sms_template = ($request->id != $id) ? false : $sms_template;
        }
        if ($validator->passes() && $sms_template) {
            try {
                $sms_template->update($sms_template_data);
                return response()->json(['Success' => 'SmsTemplate has been updated'], 200);
            } catch (\Exception $e) { // I don't remember what exception it is specifically
                throw new \Dingo\Api\Exception\StoreResourceFailedException('SmsTemplate could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('SmsTemplate could not be updated. Please, try again.', $validator->errors());
        }

    }
}