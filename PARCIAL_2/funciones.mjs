import { peliculas } from "./peliculas.mjs";


export function obtenerPeliculas(req, res) {
    if (peliculas.length > 0) {
        const respuesta = {
            datos: peliculas,
            url: 'http://localhost:3000/api/v1/peliculas/',
            status: 200
        }
        res.json(respuesta)
    } else {
        res.status(404).json({
            mensaje: 'No hay peliculas disponibles'
        })
    }
}

export function filtrarPelicula(req, res) {
    // convierte el id recibido por parametro a numero
    const id_pelicula = Number(req.params.id)
    // Filter
    const peliculaFiltrada = peliculas.filter((pelicula) => {
        return Number(pelicula.id) === id_pelicula
    })
    // pregunta si hay elementos en el arreglo
    if (peliculaFiltrada.length > 0) {
        const respuesta = {
            datos: peliculaFiltrada,
            url: 'http://localhost:3000/api/v1/peliculas/' + id_pelicula ,
            status: 200
        }
        res.json(respuesta)//si el arreglo tiene elementos dentro, devuelve respuesta
    } else {
        res.status(404).json({//devuelve codigo de error 404 si no se encuentra el elemento
            mensaje: 'Pelicula no encontrada'
        })
    }
}

//endopoint procedural que cuenta cuantas peliculas hay por genero
//filtra sobre un arreglo y cuenta cuántos elementos cumplen una condición.
export function contarPorGenero(req, res) {
    //recibe el genero por parametro
    const genero = req.params.genero

    const resultado = peliculas.filter(pelicula => 
        pelicula.genero.toLowerCase() === genero.toLowerCase() //comparar genero para con toLowerCase para convertirlos a minuscula
    ).length//lenght cuenta cuantos elementos tiene el arreglo, es lo que se termina guardando dentro de la variable rsultado

 // pregunta si hay elementos en el arreglo, se pregunta si la cantidad de peliculas es mayor a cero
    if (resultado > 0) {
        const respuesta = {
            datos: {genero, cantidad: resultado},
            url: 'http://localhost:3000/contarPorGenero/' + genero ,
            status: 200
        } 
        //devuelve un json con el genero y la cantidad de peliculas que hay de ese genero
        res.json(respuesta)
    } else {
        res.status(404).json({
            mensaje: 'Genero no encontrado'
        })
    }
}