//modulo http
import http from 'node:http' //permite crear un servidor web
import fsp from 'node:fs/promises' //permite crear promesas y usar async await para manejar archivos
import path from 'node:path' // permite manejar rutas de archivos y directorios

//creamos una instancia del servidor
//createServer recibe una funcion cada vez que alguien hace una request al servidor, esa funcion recibe dos parametros, la peticion y la respuesta
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

        const ruta = path.join('./contenido.txt')
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
    console.log(`servidor escuchando en http://localhost:3000`)
})
