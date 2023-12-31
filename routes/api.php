<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/signup', 'Api\AuthController@signup'); // 1
// Route::post('/signup', [AuthController::class, 'signup']); // 2
Route::post('/signup', [App\Http\Controllers\Api\AuthController::class, 'signup']); //3
Route::post('/ligin', [App\Http\Controllers\Api\AuthController::class, 'login']); //3
Route::post('/logout', [App\Http\Controllers\Api\AuthController::class, 'logout']); //3
