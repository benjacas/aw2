console.log("todo ok");
import fsp from "node:fs/promises" //MODULO FSP PARA HACER PROMESAS
//GESTION DE NOMBRE DE RUTAS EN LOS DISTINTOS OS 
import path from "node:path" //MODULO PATH
//LEER TEXTO
////npm run escribir para probarlo
try{
    const ruta = path.join('texto.txt'); //sirve para que la ruta sea generica en todos los os
   //const contenido = await fsp.readFile('./texto.txt','utf-8')
   const contenido = await fsp.readFile(ruta,'utf-8')

   console.log(contenido)
}
catch(e){
    console.log(e);
}