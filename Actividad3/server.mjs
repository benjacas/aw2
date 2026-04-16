export function servidor(peticion, respuesta){
    peticion=peticion
    respuesta=respuesta
    const app = http.createServer( async (peticion,respuesta)=>{
    if (peticion.method==='GET'){
    
        if (peticion.url==='/usuarios'){
    
            respuesta.statusCode = 200
            return respuesta.end(
                'ruta usuarios /usuarios '
            )
        }

        if (peticion.url==='/usuarios/filtrados'){
            //antes del end todo, despues nada.
            respuesta.statusCode = 200
            return respuesta.end(
                'ruta raiz / '
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
}