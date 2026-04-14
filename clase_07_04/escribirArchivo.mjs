import fsp from "node:fs/promises"
//GESTION DE NOMBRE DE RUTAS EN LOS DISTINTOS OS 
import path from "node:path" //MODULO PATH

//SOBREESCRIBIR EN UN TEXTO, ES UNA ESCRITURA EN EL SISTEMA DE ARCHIVOS
//npm run escribir para probarlo
try{
    const ruta = path.join('texto.txt'); //sirve para que la ruta sea generica en todos los os
    //await fsp.writeFile('./texto.txt',"Nuevo contenidooo");
    await fsp.writeFile(ruta,"Nuevo contenidooo");
}
catch(e){
    console.log(e);
}