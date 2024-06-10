<?php

use App\Http\Controllers\WatchList\WatchListController;
use App\Http\Controllers\Media\MediaLikeController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


/**
 *  Group of routes that manage the Login/Register system
 */
Route::prefix('auth')->group(function () {
    Route::post('/register',   [AuthController::class, 'register']);
    Route::post('/login',      [AuthController::class, 'login']);
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/logout', [AuthController::class, 'logout']);
    });
});

/**
 * Todas las rutas protegidas ahi que añadirlas dentro del middleware.
 */
Route::middleware('auth:sanctum')->group(function(){

    /** -------------- MEDIA ROUTE -------------- */
    Route::get('media',                 [MediaLikeController::class, 'index']);
    Route::get('media/{media_id}/user/{user_id}',  [MediaLikeController::class, 'show']);
    Route::post('media',                [MediaLikeController::class, 'store']);
    Route::delete('media',              [MediaLikeController::class, 'destroy']);

    /** -------------- WATCH LIST ROUTE -------------- */
    Route::get('watch',                 [WatchListController::class, 'index']);
    Route::get('watch/{media_id}/user/{user_id}',  [WatchListController::class, 'show']);
    Route::post('watch',                [WatchListController::class, 'store']);
    Route::delete('watch',              [WatchListController::class, 'destroy']);

});