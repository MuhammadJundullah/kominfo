<?php

namespace App\Http\Controllers\api;

use App\Models\Staff;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\postsResource;

class postsController extends Controller
{
    public function index()
    {
        $staff = Staff::all();
        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil diambil',
            'data' => postsResource::collection($staff),
        ]);
    }
}
