//Arquitectura puede ser:
//  MVC (modelo vista controlador) 
//controlador se encarga de manejar el modelo y la vista.
// mantnible y escalable
//
//MODULOS --> capas de responsabilidad


import express from 'express'
import rutasProductos from './modulos/productos/rutas.productos.mjs'
const PUERTO = 3000
const app = express()
app.use(rutasProductos)



app.listen(PUERTO)