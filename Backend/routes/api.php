<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\postsController;

Route::post('/login', [postsController::class, 'login']);

// Route::post('/logout', [postsController::class, 'logout']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [postsController::class, 'logout']);
    Route::get('/dashboard', [postsController::class, 'dashboard']);
});
Route::get('/informasi-publik', [postsController::class, 'informasipublik']);


Route::get('/staff', [postsController::class, 'index']);
