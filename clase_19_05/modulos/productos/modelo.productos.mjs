//capa encargada de los datos
//por ejemplo consultas a una base de datos local o externa

import productos from '../../productos.mjs'

export function obtenerTodos(){
    /*si tomamos los datos de un archivo json aqui estaria el readfile */
    return productos
}

export function obtenerUno(id){
    const id_producto = Number(id) //se verifica que sea un numero
    productos.filter((producto )=>{
        return Number(producto.id) === id_producto
    })
}