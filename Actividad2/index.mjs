import path from "node:path"
import fsp from "node:fs/promises"
try{
    //SE LEE LA API Y DEVUELVE OBJ RESPONSE
    const res = await fetch('https://api.escuelajs.co/api/v1/users');
    //EXTRAER LOS DATOS Y LOS CONVIERTE EN UN OBJETO/ARREGLO JS. JAVASCRIPT SOLO LEE OBJETOS JS
    const escuela = await res.json();

    //filtro
    const filtro = escuela.map(escuela => ({
        id: escuela.id,
        email: escuela.email,
        name: escuela.name
    }));

    //ruta del json
    const ruta = path.join('escuela.json');
    
    //guardar en el json
    const datosAGuardar = JSON.stringify(filtro,null,8);
    await fsp.writeFile(ruta,datosAGuardar);
    
    //LEER CONTENIDO
    const leer=await fsp.readFile(ruta,'utf8')
    console.log(leer);
   
}
catch(e){
    console.log(e);
}

