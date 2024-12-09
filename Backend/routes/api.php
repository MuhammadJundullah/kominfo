<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\postsController;

Route::post('/login', [postsController::class, 'login']);


Route::get('/staff', [postsController::class, 'index']);
