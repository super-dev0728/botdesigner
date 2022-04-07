<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/', 'CategoryController@store')->name('categories.store');
    Route::get('/', 'CategoryController@index')->name('categories.index');
    Route::get('/{id}', 'CategoryController@show')->name('categories.show');
    Route::match(['put', 'patch'], '/{id}', 'CategoryController@update')->name('categories.update');
    Route::delete('/{id}', 'CategoryController@delete')->name('categories.delete');
});