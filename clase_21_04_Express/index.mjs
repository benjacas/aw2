//express -> framework de js para crear servidores

import express from 'express'
//192.169.0.117
const PUERTO = 3000;
//instancia de servidor 
const app = express();

//Verbo y ruta configurada -> GET / 
app.get('/',(req,res)=>{
    res.send("Hola sdfsfsf")
})

//Verbo y ruta configurada -> GET / 
app.get('/usuarios',(req,res)=>{
    res.end("Hola ExpressJs en /usuarios")
})

//Verbo y ruta configurada -> POST / 
app.post('/',(req,res)=>{
    res.end("Hola POST en /usuarios")
})


//abro puerto para escuchar peticiones 
app.listen(PUERTO, ()=>{
    console.log(`Servidor corrriendo en http://localhost:${PUERTO}`)
});

