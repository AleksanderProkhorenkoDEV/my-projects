<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Rol;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'display_name',
        'name',
        'email',
        'password',
        'remember_token',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    
    /**
     *      ----------------------------------- 
     * 
     *          RELATIONSHIPS WITH MODELS 
     * 
     *      -----------------------------------
     */

    public function roles () : belongsTo {
        return $this->belongsTo(Rol::class, 'role_id');
    }

    /**
     *      ----------------------------------- 
     * 
     *                      SCOPES  
     * 
     *      -----------------------------------
     */

    /**
      * Scope in charge of searching for users in the database based on their email, to be able to use it you have to instantiate it
      * the User class and when you call it you don't have to put scope.
      */
     public function scopegetUserByEmail($query, $email){
        return $query->where('email', $email)->first();
     }

    /**
      * Scope in charge of searching for users in the database based on their id, in order to use it you have to instantiate it
      * the User class and when you call it you don't have to put scope.
      */
     public function scopegetUserById($query, $id){
        return $query->where('id', $id)->first();
     }
}
