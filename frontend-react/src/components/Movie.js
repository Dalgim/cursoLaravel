import { useEffect, useState } from 'react';
import MovieService from '../services/MovieService';

const Movie = (props) => {

    // el flujo de datos se maneja por medio de estados en react
    // useState es una forma facil de manejo de estados en react

    const initialMovieState = {
        id: null,
        title: '',
        cover: '',
        synopsis: '',
        year: ''
    };

    const [currentMovie, setCurrentMovie] = useState(initialMovieState);
    const [message, setMessage] = useState('');

    const getMovie = (id) => {
        MovieService.getById(id)
        .then(response => {
            setCurrentMovie(response.data);
            //console.log(response.data);
        }).catch(err => {
            alert('Ocurrio un error');
            console.log(err);
        });
    }

    useEffect (() =>{
        getMovie(props.match.params.id)
    }, [props.match.params.id]);

    // creamos el metodo de escucha
    const handleInputChange = event => {
        // no0s llegara el nombre y valor (title: 'titulo')
        const { name, value } = event.target;
        // hacemos una actualizacion del objeto movie y pase el valor
        setCurrentMovie({ ...currentMovie, [name]: value });
    }

    // creamos el metodo de guardado de la pelicula
    const updateMovie = () => {
        MovieService.update(currentMovie.id, currentMovie)
        .then(response =>{
            setMessage('La pelicula fue actualizada correctamente');
        }).catch(err =>{
            setMessage("Ocurrio un error al actualizar la pelicula");
            console.log(err);
        });
    }

    // metodo para eliminar pelicula
    const deleteMovie = () =>{
        const userConfirmed = window.confirm('Seguro que desea eliminar esta pelicula?');
        //mandamos una pregunta de si esta seguro que desea eliminar el registro
        if (!userConfirmed){
            return;
        }
        MovieService.remove(currentMovie.id)
        .then(response => {
            props.history.push('/movies');
        }).catch(err => {
            setMessage("Ocurrio un error al tratar de eliminar la pelicula");
            console.log(err);
        });
    }

    return (
        <div className="submit-form">
            { !currentMovie ? (
                <div>
                    <h4>Por favor selecciona una pelicula</h4>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            defaultValue={currentMovie.title}
                            onChange={handleInputChange}
                            name="title"
                        />
                    </div>

                    <div className="form-group">
                        <label>Portada</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="cover"
                            required
                            defaultValue={currentMovie.cover}
                            onChange={handleInputChange}
                            name="cover"
                        />
                    </div>

                    <div className="form-group">
                        <label>Sinopsis</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="synopsis"
                            required
                            defaultValue={currentMovie.synopsis}
                            onChange={handleInputChange}
                            name="synopsis"
                        />
                    </div>

                    <div className="form-group">
                        <label>Año</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="year"
                            required
                            defaultValue={currentMovie.year}
                            onChange={handleInputChange}
                            name="year"
                        />
                    </div>
                    <br/>
                    <button onClick={updateMovie} className="btn btn-success">
                        Acutalizar Pelicula</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={deleteMovie} className="btn btn-danger">
                        ELiminar Pelicula</button>
                    <div>
                        <p> {message} </p>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Movie;