<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;

use Closure;

/**
 * Class AuthenticateRole
 * @package App\Http\Middleware
 */

class AuthenticateRole
{

    /**
     * @param         $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = Auth::user()->toArray();
        if($user['role_id'] != config('constants.ConstUserTypes.Admin')){
            throw new \Symfony\Component\HttpKernel\Exception\BadRequestHttpException('Authentication failed');
        }
        return $next($request);
    }
}
