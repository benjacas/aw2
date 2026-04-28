import express from 'express'
//crear servidor
const PUERTO = 3000
const app = express()

function middlware1(req, res, next){
    console.log('middlware1')
    next()

}

app.use('/',middlware1) //----->USE: usa la ruta como prefijo
//----------------------------------> 
app.get('/',middlware1,(req,res)=>{
    res.send('hola')
    console.log('respuesta final')
})

app.get('/saludo',middlware1,(req,res)=>{
    res.send('hola')
    console.log('respuesta final con saludo')
})

app.listen(PUERTO,()=>{
    console.log(`http://localhost:${PUERTO}`)
})