import { productos } from './productos.mjs'; //cadena de objetos?? productos

export function obtenerProductos(req,res){
    res.json(productos)
}

export function obtenerProductosId(req,res){
    //logica previa
    const id_producto = Number(req.params.id)

    //filter
    const productosFiltrados = productos.filter((producto)=>{
        return Number(producto.id) === id_producto
    })

    //VERIFICAMOS SI HAY ELEMENTOS EN EL ARREGLO
    if(productosFiltrados.length > 0 ){

        const respuesta = {
            datos: productosFiltrados,
            url: 'http://localhost:300/api/v1/productos/' + id_producto,
            status: 200
        }
        res.json (respuesta)
    }
    else{
        res.status(404).json({
            mensaje: "Producto no encontrado"
        })
    }
}

export function altaProductos(req,res){
    const producto = req.body


    //genero una estructura para el producto a insertar 
    const productoFinal ={
        id:productos.ultimo_id,
        ...producto.datos

    }

        productos.datos.push(productoFinal)
        //tenemos que modficar el id en la BD 
        productos.ultimo_id = ultimoI
        //responder
        res.satatus(201).json({mensaje:'se dio de alta el producto'})
}


export function modificarProductos(){
    //necesitamos saber el id
    const id_producto = Number(req.params.id)
    //necesitamos los datos del producto a maodificar
    const producto=req.body


    prodcuctos.datos.map((producto)=>{
        
        if (producto.id ===id_producto){
            const indice = productos.datos.indexOf(producto)
            //console.log(indice)
            
            //ACCEDO AL INDICE

            productos.datos[indice] = {
                id: id_producto,
                ...producto
            }
        }
    })

    res.json({})
}

export function eliminarProducto(){
    //logica previa
    const id_producto = Number(req.params.id)

    //filter
    const productosFiltrados = productos.datos.filter((producto)=>{
        return Number(producto.id) !== id_producto
    })

    //pisamos el original
    productos=productosFiltrados;



     //VERIFICAMOS SI HAY ELEMENTOS EN EL ARREGLO
    if(productosFiltrados.length > 0 ){

        const respuesta = {
            datos: productosFiltrados,
            url: 'http://localhost:300/api/v1/productos/' + id_producto,
            status: 200,
            verbo: 'delete'
        }
        res.json (respuesta)
    }
    else{
        res.status(404).json({
            mensaje: "Producto no encontrado"
        })
    }
}