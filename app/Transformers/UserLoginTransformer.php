<?php
/**
 * Created by PhpStorm.
 * User: poornadhivya_169at11
 * Date: 2016-04-01
 * Time: 12:30 PM
 */

namespace App\Transformers;

use League\Fractal;
use App\UserLogin;

/**
 * Class UserLoginTransformer
 * @package App\Transformers
 */
class UserLoginTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'UserLoginIp', 'User', 'Role'
    ];

    /**
     * @param UserLogin $user_login
     * @return array
     */
    public function transform(UserLogin $user_login)
    {
        $output = array_only($user_login->toArray(), ['id', 'created_at', 'user_id', 'user_login_ip_id', 'role_id', 'user_agent']);
        return $output;
    }

    /**
     * @param UserLogin $user_login
     * @return Fractal\Resource\Item
     */
    public function includeUserLoginIp(UserLogin $user_login)
    {
        if ($user_login->UserLoginIp) {
            return $this->item($user_login->UserLoginIp, new IpTransformer());
        } else {
            return null;
        }

    }

    /**
     * @param UserLogin $user_login
     * @return Fractal\Resource\Item
     */
    public function includeUser(UserLogin $user_login)
    {
        if ($user_login->user) {
            return $this->item($user_login->user, new UserTransformer());
        } else {
            return null;
        }

    }

    /**
     * @param UserLogin $user_login
     * @return Fractal\Resource\Item
     */
    public function includeRole(UserLogin $user_login)
    {
        if ($user_login->role) {
            return $this->item($user_login->role, new RoleTransformer());
        } else {
            return null;
        }

    }
}