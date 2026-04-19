import fs from 'fs'
import { peticionFunc, filtro } from './peticionApi.mjs'





export async function manejarRutas(peticion, respuesta) {
    try{
        if (peticion.method === 'GET') {

            if (peticion.url === '/usuarios') {
                const leerJson = fs.readFileSync('./usuarios_escuela.json', 'utf-8')
                respuesta.statusCode = 200
                respuesta.setHeader('Content-Type', 'application/json')
                return respuesta.end(leerJson)
            }

            if (peticion.url === '/usuarios/filtrados') {
                const leerApi = await peticionFunc()
                const filtroApi = filtro(leerApi)
                respuesta.statusCode = 200
                respuesta.setHeader('Content-Type', 'application/json')
                return respuesta.end(JSON.stringify(filtroApi))
            }
        }

        // fallback
        respuesta.statusCode = 404
        return respuesta.end('No se encontró la ruta')
        }
        catch(e){
        throw new Error("Error en manejar rutas", e)
    }
}
