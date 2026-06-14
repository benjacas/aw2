import express from 'express';
import { obtenerPeliculas, filtrarPelicula, contarPorGenero} from './funciones.mjs';
import { validarId } from './middlware.mjs';

const PUERTO = 3000;
//se pone inicializa express dentro de la variable
const app = express();

//use sirve fundamentalmente para implementar middlewares de manera independiente a los verbos HTTP
app.use(express.json());
//todas las peliculas
app.get('/api/v1/peliculas', obtenerPeliculas);
//busca peliculas por id
app.get('/api/v1/peliculas/:id',validarId, filtrarPelicula);//middlware validarId
//cuenta cuantas peliculas hay por genero
app.get('/contarPorGenero/:genero', contarPorGenero);
//se abre el puerto 3000
app.listen(PUERTO); 