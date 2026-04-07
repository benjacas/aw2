console.log("todo ok");
import fsp from "node:fs/promises"
//LEER TEXTO
try{
   const contenido = await fsp.readFile('./texto.txt','utf-8')
   console.log(contenido)
}
catch(e){
    console.log(e);
}