<?php
namespace App\Transformers;

use League\Fractal;
use App\Transaction;
use JWTAuth;
use Illuminate\Support\Facades\Auth;

/**
 * Class TransactionTransformer
 * @package App\Transformers
 */
class TransactionTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'FromUser', 'ToUser', 'transaction_type'
    ];

    /**
     * @param Transaction $converted_transactions
     * @return array
     */
    public function transform(Transaction $converted_transactions)
    {
        $user = Auth::user();
        $output = array_only($converted_transactions->toArray(), ['id', 'user_id', 'receiver_user_id', 'description', 'transaction_type_id', 'transactionable_type', 'amount', 'created_at']);
        if ($converted_transactions->receiver_user_id === $user->id) {
            $output['debit_amount'] = 0;
            $output['credit_amount'] = $output['amount'];
        } elseif($converted_transactions->user_id === $user->id) {
            $output['debit_amount'] = $output['amount'];
            $output['credit_amount'] = 0;
        }
        return $output;
    }

    /**
     * @param Transaction $transaction
     * @return Fractal\Resource\Item
     */
    public function includeFromUser(Transaction $transaction)
    {
        if ($transaction->FromUser) {
            return $this->item($transaction->FromUser, new UserTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param Transaction $transaction
     * @return Fractal\Resource\Item
     */
    public function includeToUser(Transaction $transaction)
    {
        if ($transaction->ToUser) {
            return $this->item($transaction->ToUser, new UserTransformer());
        } else {
            return null;
        }
    }

    /**
     * @param Transaction $transaction
     * @return Fractal\Resource\Item
     */
    public function includeTransactionType(Transaction $transaction)
    {
        if ($transaction->transaction_type) {
            $a = $this->item($transaction->transaction_type, new TransactionTypeTransformer());
            return $a;
        } else {
            return null;
        }
    }

}
