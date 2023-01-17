<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\ClientResource;
use App\Models\Client;
use App\Http\Controllers\ClientController;


Route::get('/clients', function(){
    return ClientResource::collection(Client::all());
});

Route::get('/client/{id}', function($id) {
    return new ClientResource(Client::findOrFail($id));
});

Route::post('/client', [ClientController::class, 'store']);

Route::put('client/{id}', [ClientController::class, 'update']);

Route::delete('client/{id}', [ClientController::class, 'destroy']);

Route::get('client/searchName/{key}', [ClientController::class, 'searchName']);

Route::get('client/searchCpf/{key}', [ClientController::class, 'searchCpf']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
