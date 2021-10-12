import axios from 'axios';

export default axios.create({
    // creamos un objeto de configuracion
    baseURL: 'http://www.laravelcurso.com.devel',
});