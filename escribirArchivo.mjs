import fsp from "node:fs/promises"

//ESCRIBIR EN UN TEXTO, ES UNA ESCRITURA EN EL SISTEMA DE ARCHIVOS
try{
    await fsp.writeFile('./texto.txt',"Nuevo contenidooo");
}
catch(e){
    console.log(e);
}