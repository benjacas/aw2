import * as modelo from './modelo.productos.mjs'
import * as vista from './vistas.prodcutos.mjs'
export function obtenerTodos(req,res){
    //obtenemos de capa modelo la funcion
    const productos = modelo.obtenerTodos()
    const respuesta = vista.obtenerTodos(productos) //se envia la respuesta a vista.productos, donde se pueden filtrar los datos

    res.json(respuesta)
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

export function eliminarUno(req,res){

}