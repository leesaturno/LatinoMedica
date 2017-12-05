<?php
namespace App\Transformers;

use League\Fractal;
use App\Role;

class RoleTransformer extends Fractal\TransformerAbstract
{
    public function transform(Role $role)
    {
        $output = array_only($role->toArray(), ['id', 'name']);
        return $output;
    }
}
