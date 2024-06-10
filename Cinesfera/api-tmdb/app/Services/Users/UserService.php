<?php

namespace App\Services\Users;

use App\Models\Rol;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserService {

    private $user;
    private $rol;


    public function __construct(){
        $this->user = new User;
        $this->rol = new Rol;
    }

    /**
     * We receive all the data from the request sent by the user and we create a user and log in to the application.
     */
    public function storeUser($request){

        $userData = [
            'display_name' => $request->display_name,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $this->rol->GetRolId()
        ];
        $this->user = User::create($userData);


        return $this->user;
    }

   
   /**
     * Function with which we receive a user who logged in and we create a token for him.
     */
    public function createToken($user){
        return $user->createToken('auth_token')->plainTextToken;
    }

    /**
     * Function that receives the request as a parameter that contains the data sent by the user,
     * and with the scope defined in the model: Users we search for this user through their email.
     */
    public function getUserByEmail($request){
        return $this->user->GetUserByEmail($request->email);
    }
   /**
     * Function that receives the request as a parameter that contains the data sent by the user,
     * and with the scope defined in the model: Users we search for this user using their id.
     */
    public function getUserById($request){
        return $this->user->GetUserById($request->id);
    }
}