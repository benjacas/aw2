import http from 'node:http' //permite crear un servidor web
import {servidor} from './server.mjs'
import { guardarJSON} from './escritura.mjs';
import {peticion, filtro} from './peticionApi.mjs'
import fs from 'fs'
try{
    //api
    const api = await peticion();
    //guardar JSON
    await guardarJSON(api)
}
catch (e){
    console.log("error de fetch")
    console.log(e)
}

try{
    //crear servidor
    const app = http.createServer( async (peticion,respuesta)=>{
    if (peticion.method==='GET'){

        if (peticion.url==='/usuarios'){

            const leerJson = fs.readFileSync('./usuarios_escuela.json','utf-8')

            respuesta.statusCode = 200
            respuesta.setHeader(
                'Content-Type', 'application/json'
            )


            return respuesta.end(leerJson)
            
        }

        if (peticion.url==='/usuarios/filtrados'){

            const leerFiltro=filtro()
            const leerJson = fs.readFileSync(leerFiltro,'utf-8')

            respuesta.statusCode = 200
            respuesta.setHeader(
                'Content-Type', 'application/json'
            )


            return respuesta.end(leerJson)
            
        }
    }
    //---------------------------------------------
        //fallback
        respuesta.statusCode = 404
        return respuesta.end('No se encontró la ruta')
    })


    //abrir puerto
    app.listen(3000,()=>{
        console.log(`servidor escuchando en http://localhost:3000`)
    })
}
catch(e){
    console.log("Error de servidor")
    console.log(e)
}


