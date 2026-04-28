import express from 'express'
//crear servidor
const PUERTO = 3000
const app = express()

function middlware1(req, res, next){
    
    const usuarioExiste=true

    if(usuarioExiste){
        console.log('usuario existe puede pasar')
        next() //avanzar al siguiente----------------------->
    }else{
        console.log('usuario no existe no puede pasar')
        res.send('usuario no registrado')
    }
   
}


//----------------------------------> 
app.get('/',middlware1,(req,res)=>{
    res.send('hola')
    console.log('respuesta final')
})
app.listen(PUERTO,()=>{
    console.log(`http://localhost:${PUERTO}`)
})