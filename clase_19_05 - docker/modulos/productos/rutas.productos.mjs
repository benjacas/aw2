//import express from 'express' ---- solo si voy a usar express para alguna otra cosa
import { Router } from "express"; //----- si no solo importo el lo que necesito
import * as controlador from './controlador.productos.mjs'
//instancias
const rutasProductos = new Router()

//obtener todos los prodcutos
app.get('/api/v1/productos',controlador.obtenerTodos)
//obtener id
app.get('/api/v1/productos/:id',controlador.obtenerUno)
//eliminar uno
app.delete('/api/v1/productos/:id',controlador, eliminarUno)


export default rutasProductos