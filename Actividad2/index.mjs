import { peticion } from './modulos/peticionApi.mjs';
import { guardarJSON, leerJSON } from './modulos/lectura_escritura.mjs';

try {
    const filtro = await peticion();
    await guardarJSON(filtro);

    const contenido = await leerJSON();
    console.log(contenido);
}
catch(e){
    console.log(e);
}

