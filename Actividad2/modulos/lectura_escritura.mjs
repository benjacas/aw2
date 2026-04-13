import path from "node:path";
import fsp from "node:fs/promises";

export async function guardarJSON(datos, nombreArchivo = 'escuela.json') {
    const ruta = path.join(nombreArchivo);
    await fsp.writeFile(ruta, JSON.stringify(datos, null, 8));
}

export async function leerJSON(nombreArchivo = 'escuela.json') {
    const ruta = path.join(nombreArchivo);
    return await fsp.readFile(ruta, 'utf8');
}