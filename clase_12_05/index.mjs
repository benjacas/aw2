//Arquitectura puede ser:
//  MVC (modelo vista controlador) 
//controlador se encarga de manejar el modelo y la vista.
// mantnible y escalable
//
//MODULOS --> capas de responsabilidad


import express from 'express'
import * as controlador from './modulos/productos/controlador.productos.mjs'
const PUERTO = 3000
const app = express()

//obtener todos los prodcutos
app.get('/api/v1/productos',controlador.obtenerTodos)

//obtener id
app.get('/api/v1/productos/:id',controlador.obtenerUno)


app.listen(PUERTO)