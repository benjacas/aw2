console.log("todo ok");
import fsp from "node:fs/promises" //MODULO FSP PARA HACER PROMESAS
//GESTION DE NOMBRE DE RUTAS EN LOS DISTINTOS OS 
import path from "node:path" //MODULO PATH
//LEER TEXTO
////npm run escribir para probarlo
try{
    //SE LEE LA API Y DEVUELVE OBJ RESPONSE
    const res = await fetch('https://69cbcb910b417a19e07b4341.mockapi.io/api/v1/productos');
    //EXTRAER LOS DATOS Y LOS CONVIERTE EN UN OBJETO/ARREGLO JS. JAVASCRIPT SOLO LEE OBJETOS JS
    const productos = await res.json;
    console.log (productos);
    //ruta del txt
    const ruta = path.join('datosApi.txt');
    //convertimos un obj js a un json
    const datosAGuardar = JSON.stringify(productos, null, 4);  

    await fsp.writeFile(ruta,datosAGuardar);
}
catch(e){
    console.log(e);
}