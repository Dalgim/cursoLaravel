<?php

use App\Http\Controllers\MovieController;
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
    return view('welcome');
});

/*
anteriormente ocupabamos:
Route::get('movies', function(){
    return Movie::all();
    // Movie viene del modelo creado en la carpeta
    // models que esta en app -> Http -> Models
});
*/

/* 
indicamos que ahora obtendra los registros por medio de un
controlador MovieController del archivo MovieController.php
ubicado en app -> Http -> Controllers archivo MovieController.php
*/  
Route::get('movies', [MovieController::class, 'index']);

/*
Obtenemos un valor de la tabla por id
pasamos por parametro el id del registro a visualizar y creamos un
metodo que visualice dichos datos (metodo show)
*/
Route::get('movies/{id}', [MovieController::class, 'show']);

/*
creamos una ruta por POST para generar un nuevo registro a la 
BD
*/
Route::post('movies', [MovieController::class, 'store']);

/*
creamos una ruta por PUT por id para editar un registro de la BD
*/
Route::put('movies/{id}', [MovieController::class, 'update']);

/*
creamos una ruta por DELETE por id para borrar un registro de la BD
*/
Route::delete('movies/{id}', [MovieController::class, 'delete']);