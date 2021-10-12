<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;

class MovieController extends Controller
{
    // metodo de muestra de todos los registros
    public function index(){
        return Movie::all();
    }

    // metodo para mostrar un registro por medio de id
    public function show($id){
        return Movie::find($id);
    }

    // metodo para guardar un record en la BD por POST
    public function store(Request $request){
        // la informacion del array del registro a guardar lo
        // mandamos a una variable llamada $movie
        $movie = Movie::create($request->all());
        // mandamos la respuesta por json y mandamos el codigo 201
        // que indica que el registro fue guardado correctamente
        return response()->json($movie, 201);
    }

    // metodo para actualizar un record en la BD por PUT
    public function update(Request $request, $id){
        // recibimos el id si no lo encuentra manda una excepcion
        $movie = Movie::findOrFail($id);
        // actualizamos el registro solicitado usando update()
        // y mandando los datos obtenidos por request
        $movie->update($request->all());
        // retornamos la respuesta de actualizacion correcta
        // y mandamos el codigo 200 de vaegador 
        //para verificacion de actualizacion correcta
        return response()->json($movie, 200);
    }

    // metodo para borrar un record en la BD por DELETE
    public function delete($id){
        // recibimos el id si no lo encuentra manda una excepcion
        $movie = Movie::findOrFail($id);
        // borramos el registro solicitado usando delete()
        $movie->delete();
        // retornamos la respuesta 204 de que el borrado fue correcto
        return response(null, 204);
    }
}
