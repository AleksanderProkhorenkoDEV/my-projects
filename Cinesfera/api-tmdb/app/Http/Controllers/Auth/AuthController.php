<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LogoutRequest;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Services\Users\UserService;
use Illuminate\Http\Request;
use App\Models\User;


class AuthController extends Controller
{   
    private  $userService;
    
    public function __construct(){
        $this->userService = new UserService;
    }

    /**
     * We receive the request for the form that is responsible for validating all the data entered by the user, in case
     * everything is valid, through a service that receives this request creates the user and returns it.
     */
    function register (RegisterRequest $request)
    {
        $user = $this->userService->storeUser($request);
        return response()->json(['usuario' => $user, 'status' => 200], 200);
    }

    /**
     * We collect the custom request that we receive from the form in which all the data that we receive is validated.
     *
     * Subsequently, the credentials that the user sent us are checked, in case they are incorrect
     * we return an indicative message and status 401.
     *
     * If they are correct, we take out the user who authenticated and create a token and these two things
     * are the ones we return in the return.
     */
    function login (LoginRequest $request){

        if(!Auth::attempt(['email' => $request->email, 'password' => $request->password], $request->remember)) return response()->json(['message' => 'The password or email address is incorrect', 'status' => 401], 401); 
        $user = Auth::user();
        $token = $this->userService->createToken($user);
        return response()->json(['user'=>$user, 'token' => $token, 'status' => 200], 200);
    }
    /**
     * Function responsible for logging the user into the application, collects the data from the request header and is the
     * that is used to log out, within them is the token created in the login.
     */
    function logout (Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Succes logout','status' => 200], 200);
    }
}
