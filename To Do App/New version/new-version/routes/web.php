<?php

use App\Http\Controllers\noteController;
use App\Models\note;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome', [
        'notes' => note::all()
    ]);
});
Route::delete('/note/{note}', function (note $note) {
    $note->delete();
    return back();
});
Route::post('/add', [noteController::class, 'add']);
