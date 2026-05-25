// import express from 'express'
import {Router} from 'express'
import * as controlador from './controlador.productos.mjs'//imoprta todo lo que hay en el controlador y lo guarda en un objeto llamado controlador

// Instanciamos router de express para juntar todas las rutas de los endpoints
const rutasProductos = new Router()

// Obtener todos los productos
rutasProductos.get('/api/v1/productos', controlador.obtenerTodos)
//obtener un producto por id
rutasProductos.get('/api/v1/productos/:id', controlador.obtenerUno)
//eliminar un producto por id
rutasProductos.delete('/api/v1/productos/:id', controlador.eliminarUno)

export default rutasProductos


