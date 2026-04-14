//modulo http
import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

//creamos una instancia del servidor
const app = http.createServer( async (peticion,respuesta)=>{
if (peticion.method==='GET'){

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
}
    
    if(peticion.method==='POST'){
        if(peticion.url === '/'){

        const ruta = './contenido.txt'
        await fsp.writeFile(ruta, 'contenido falso')
            return respuesta.end('recurso creado')
        }
            
    }
//---------------------------------------------
    //fallback
    respuesta.statusCode = 404
    return respuesta.end('No se encontró la ruta')
})

//abrimos puerto
app.listen(3000,()=>{
    console.log(`servidor escuchando en https://localhost:3000`)
})
