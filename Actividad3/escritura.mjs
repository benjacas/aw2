import path from "node:path";
import fsp from "node:fs/promises";


export async function guardarJSON(datos, nombreArchivo = 'usuarios_escuela.json') {

    try{
        const ruta = path.join(nombreArchivo);
        await fsp.writeFile(ruta, JSON.stringify(datos, null, 8));
    }
        catch(e){
        throw new Error (e)
    }
    

}