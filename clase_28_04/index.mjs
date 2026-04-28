import express from 'express'
import path from 'path'
//crear servidor
const PUERTO = 3000
const app = express()

function middlware1(req, res, next){
    console.log('middlware1')
    next()

}

app.use(express.static(path.resolve('front/index.html') ))

app.listen(PUERTO,()=>{
    console.log(`http://localhost:${PUERTO}`)
})