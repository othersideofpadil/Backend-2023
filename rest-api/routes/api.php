<?php

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// #method get
// Route::get('animals', [AnimalController::class,"index"]);

// #method post
// Route::post('/animals', [AnimalController::class, "store"]); 

// #method put
// Route::put('/animals/{id}', [AnimalController::class, "update"]);

// #method delete
// Route::delete('/animals/{id}', [AnimalController::class, "destroy"]);


// Students

Route::middleware(['auth:sanctum'])->group(function () {
    #method get all students
    Route::get('students', [StudentController::class,'index']);

    #method post  
    Route::post('/students', [StudentController::class,'store']);

    #method put
    Route::put('/students/{id}', [StudentController::class,'update']);

    #method delete
    Route::delete('/students/{id}', [StudentController::class,'destroy']);
});

#mendapatkan detail student
Route::get('/students/{id}', [StudentController::class,'show']);

// route login dan register
Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);