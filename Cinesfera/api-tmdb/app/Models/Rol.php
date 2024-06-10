<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Rol extends Model
{
    use HasFactory;

    protected $table = 'roles';

    protected $guard = [
        'id',
        'role_name'
    ];

    
    /**
     *      ----------------------------------- 
     * 
     *          RELATIONSHIPS WITH MODELS 
     * 
     *      -----------------------------------
     */


    public function users() :hasMany {
        return $this->hasMany(User::class);
    }

    /**
     *      ----------------------------------- 
     * 
     *                      SCOPES  
     * 
     *      -----------------------------------
     */

     public function scopeGetRolId($query, $rol_name = 'Register') : ?int {
        return $query->where('rol_name', $rol_name)->value('id');
     }
}
