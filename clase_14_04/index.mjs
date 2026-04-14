//modulo http
import http from 'node:http'

//creamos una instancia del servidor
const app = http.createServer((peticion,respuesta)=>{
    

    if (peticion.url==='/'){
        //antes del end todo, despues nada.
        respuesta.statusCode = 200
        return respuesta.end(
            'ruta raiz / '
        )
    }

    if (peticion.url==='/usuarios'){

        respuesta.statusCode = 200
        return respuesta.end(
            'ruta usuarios /usuarios '
        )
    }

    respuesta.statusCode = 404
    return respuesta.end('No se encontró la ruta')
})

//abrimos puerto
app.listen(3000,()=>)
