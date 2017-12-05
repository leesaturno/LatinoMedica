<?php
namespace App\Services;

use Tymon\JWTAuth\Providers\JWT\JWTInterface;
use App\User;

class SocialLoginService
{

    public function __construct(JWTInterface $jwt)
    {
        $this->jwt = $jwt;
    }

    /**
     * Generate JSON Web Token.
     * @param $user
     * @return token
     */
    public function createToken($user)
    {
        $payload = [
            'sub' => $user->id,
            'iat' => time(),
            'exp' => time() + (2 * 7 * 24 * 60 * 60)
        ];
        return $this->jwt->encode($payload, config('constants.token_secret'));
    }

    /**
     * Generate facebook user name
     * @param $fb_user_name
     * @return username
     */

    public function genreteFBName($fb_user_name)
    {
        $username = str_replace(' ', '', $fb_user_name);
        $username = str_replace('.', '_', $username);
        // A condtion to avoid unavilability of user username in our sites
        $i = 1;
        $created_username = $username;
        while (!User::checkUsernameAvailable($username)) {
            $username = $created_username . $i++;
        }
        return strtolower($username);
    }


}

?>