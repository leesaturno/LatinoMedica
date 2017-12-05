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

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Validator;
use App\Transformers\TransactionTransformer;
use App\Transaction;
use App\Services\TransactionService;
use DB;

/**
 * Transactions resource representation.
 * @Resource("Admin/AdminTransactions")
 */
class AdminTransactionsController extends Controller
{
    /**
     * AdminTransactionsController constructor.
     */
    public function __construct()
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
        $this->setTransactionService();
    }

    public function setTransactionService()
    {
        $this->transactionService = new TransactionService();
    }

    /**
     * Show all transaction types.
     * Get a JSON representation of all the transaction types.
     *
     * @Get("/transactions?filter={filter}&sort={sort}&sortby={sortby}&page={q}&page={q}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the transactions list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort transactions by Ascending / Descending Order.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1),
     *      @Parameter("filter", type="integer", required=false, description="Filter transactions list by status.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search transactions.", default=null)
     * })
     */
    public function index(Request $request)
    {
        $transactions = Transaction::filterByRequest($request)->paginate(20);
        //$converted_transactions = $this->transactionService->transactionDescription($transactions);
        $transaction_details = $this->response->paginator($transactions, (new TransactionTransformer)->setDefaultIncludes(['FromUser', 'ToUser']));
        return $transaction_details;
    }
}
