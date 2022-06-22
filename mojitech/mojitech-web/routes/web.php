<?php

use App\Http\Controllers\apiResources;
use App\Models\Product;
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
    return view('welcome',[
        'specialOffers'=>['keyboard','mouse','keyboard','mouse','keyboard'],
        'featureItems'=>['monitor'],
        'products'=>Product::latest()->filter(request(['search']))->get()
    ]);
});
Route::get('/products/{product:slug}',function(Product $product){
    return view('Product',[
        'product'=>$product
    ]);
});
Route::get('/products/?search={slug}',function($slug){
    return view('search',[
        'product'=>Product::latest()->filter(request(['search']))->get()
    ]);
});

Route::get('/api/product',[apiResources::class ,'all']);
Route::get('/api/product/{prooduct}',[apiResources::class ,'get']);
Route::get('/api/search/{prooduct}',[apiResources::class ,'find']);
