<?php

use App\Http\Controllers\api\postsController;
use Illuminate\Support\Facades\Route;

Route::get('/staff', [postsController::class, 'index']);
