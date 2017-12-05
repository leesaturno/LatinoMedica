<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-04-01
 * Time: 12:30 PM
 */

namespace App\Transformers;

use League\Fractal;
use App\Dashboard;

/**
 * Class DashboardTransformer
 * @package App\Transformers
 */
class DashboardTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'Ip', 'User', 'Role'
    ];

    /**
     * @param Dashboard $user_login
     * @return array
     */
    public function transform(Dashboard $user_login)
    {
        $output = array_only($user_login->toArray(), ['id', 'user_id', 'user_login_ip_id', 'role_id', 'user_agent']);
        return $output;
    }

    /**
     * @param Dashboard $user_login
     * @return Fractal\Resource\Item
     */
    public function includeUser(Dashboard $user_login)
    {
        if ($user_login->user) {
            return $this->item($user_login->user, new UserTransformer());
        } else {
            return null;
        }

    }

    /**
     * @param Dashboard $user_login
     * @return Fractal\Resource\Item
     */
    public function includeRole(Dashboard $user_login)
    {
        if ($user_login->role) {
            return $this->item($user_login->role, new RoleTransformer());
        } else {
            return null;
        }

    }
}