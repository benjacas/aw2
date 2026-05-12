import * as modelo from './modelo.productos.mjs'

export function obtenerTodos(req,res){
    //obtenemos de capa modelo la funcion
    const productos = modelo.obtenerTodos()
    res.json(productos)
}

export function obtenerUno (req,res){
    const id_producto = req.params.id
    const prodcutos= modelo.obtenerUno(id_producto)
    if(prodcutos.lenght>0){
        res.json(prodcutos)
    }else{
        res.json({mensaje:'producto no encontrado'})
    }
}