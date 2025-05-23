<?php

use App\Http\Controllers\CrudController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get("/index", [CrudController::class, 'index'])->name("product.index");
Route::get("/create" , [CrudController::class, 'create'])->name("product.create");
Route::post("/store" , [CrudController::class, 'store'])->name("product.store");
