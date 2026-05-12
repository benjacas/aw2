import express from 'express';
import { obtenerPeliculas, filtrarPelicula, contarPorGenero} from './funciones.mjs';
import { validarId } from './middlware.mjs';

const PUERTO = 3000;

const app = express();

app.use(express.json());
//todas las peliculas
app.get('/api/v1/peliculas', obtenerPeliculas);
//busca peliculas por id
app.get('/api/v1/peliculas/:id',validarId, filtrarPelicula);
//cuenta cuantas peliculas hay por genero
app.get('/contarPorGenero/:genero', contarPorGenero);

app.listen(PUERTO); 