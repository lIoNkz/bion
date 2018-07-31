<?php

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

Route::get('/', 'FrontendController@index');


Auth::routes();

Route::get('/home', 'HomeController@index');


Route::post('/send-message', 'MessageController@store')->name('messages_store');


Route::middleware(['auth'])->group(function () {
	Route::get('/messages', 'MessageController@index')->name('messagesIndex');
	Route::get('/show-message/{id}', 'MessageController@show')->name('showMessage');
});

Route::post('/send-cons', 'ConsultanceController@store')->name('cons_store');

Route::middleware(['auth'])->group(function () {
	Route::get('/consultances', 'ConsultanceController@index')->name('consultancesIndex');
	Route::get('/show-cons/{id}', 'ConsultanceController@show')->name('showCons');
});

Route::post('/send-review', 'ReviewController@store')->name('reviews_store');

Route::middleware(['auth'])->group(function () {
	Route::get('/reviews', 'ReviewController@index')->name('reviewsIndex');
	Route::get('/show-reviews/{id}', 'ReviewController@show')->name('showReviews');
});


Route::resource('textblocks', 'TextblockController');



Route::resource('photos', 'PhotoController');
// Image upload
	Route::post('/upload-images-to-the-server', 'PhotoController@upload')->name('upload');



Route::post('/send-mail', 'FrontendController@mail')->name('mail');
Route::post('/send-mail-service', 'FrontendController@mail_service')->name('mail_service');