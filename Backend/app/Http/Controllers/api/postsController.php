<?php
namespace App\Http\Controllers\api;

use App\Models\Staff;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\postsResource;
use App\Models\informasi_publiks;

class postsController extends Controller
{
    public function login(Request $request) 
    {
        
        $request->validate([
        'username' => 'required|string',
        'password' => 'required|string',
         ]);

        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'status' => 'success',
                'message' => 'Login successful',
                'token' => $token,
            ]);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Invalid credentials',
        ], 401);
    }

    public function logout(Request $request)
    {
        // Hapus token pengguna
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logged out successfully.',
        ]);
    }
    
    public function index()
    {
        $staff = Staff::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil diambil',
            'data' => postsResource::collection($staff),
        ]);
    }

    public function informasipublik()
    {
        $data = informasi_publiks::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil diambil',
            'data' => $data,
        ]);
    }

}