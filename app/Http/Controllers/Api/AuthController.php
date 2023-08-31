<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
   public function login(LoginRequest $request){
      $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response([
                'message' => 'Invalid credentials'
            ], 401);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        
       return response ([
            'user' => $user,
            'token' => $token,
        ], 201);
    }

    public function signup(SignupRequest $request){
        /** @var \App\Models\User $user */
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password'=>bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;

       return response ([
            'user' => $user,
            'token' => $token,
        ], 201);

    }
    

    public function logout(Request $request){
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('' , '204');
    }
}
