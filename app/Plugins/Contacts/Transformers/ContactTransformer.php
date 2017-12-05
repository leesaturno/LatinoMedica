<?php
/**
 * Created by PhpStorm.
 * User: anandam_023ac09
 * Date: 2016-03-30
 * Time: 08:18 PM
 */

namespace Plugins\Contacts\Transformers;

use League\Fractal;
use Plugins\Contacts\Model\Contact;
use App\Transformers\UserTransformer;
use App\Transformers\IpTransformer;

/**
 * Class ContactTransformer
 * @package Contacts\Transformers
 */
class ContactTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'user', 'ip'
    ];

    /**
     * @param Contact $contact
     * @return array
     */
    public function transform(Contact $contact)
    {
        $output = array_only($contact->toArray(), ['id', 'user_id', 'first_name', 'last_name', 'subject', 'message', 'telephone', 'email']);
        return $output;
    }

    /**
     * @param Contact $contact
     * @return Fractal\Resource\Item
     */
    public function includeUser(Contact $contact)
    {
        if ($contact->user) {
            return $this->item($contact->user, new UserTransformer());
        } else {
            return null;
        }

    }

    /**
     * @param Contact $contact
     * @return Fractal\Resource\Item
     */
    public function includeIp(Contact $contact)
    {
        if ($contact->ip) {
            return $this->item($contact->ip, new IpTransformer());
        } else {
            return null;
        }

    }
}