import express from 'express'
import {obtenerProductos, obtenerProductosId, eliminarProducto, altaProductos, modificarProductos} from './funciones.mjs'


const PUERTO = 3000;

const app = express();
app.use(express.json()) //avisa a express que parsee los datos en json a http

//DEFINIENDO UNA API REST


//GET api/v1/productos -> TODOS

app.get('/api/v1/productos', obtenerProductos)

//GET api/v1/productos/:id -> UNO POR ID
app.get('/api/v1/productos/:id', obtenerProductosId)

//POST api/v1/productos -> DAR DE ALTA UN NUEVO ID
app.post('/api/v1/productos', altaProductos)
//PUT api/v1/productos/:id -> MODIFICAR UN PRODUCTO
app.post('/api/v1/productos',modificarProductos)
//DELETE api/v1/productos/:id -> ELIMINAR PRODUCTO
app.delete('api/v1/productos/:id', eliminarProducto)


app.listen(PUERTO)

