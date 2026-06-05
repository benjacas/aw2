import express from 'express'
import cookieParser from 'cookie-parser'
const PUERTO = 3000

const app = express()

app.use(cookieParser ('misecreto'))
//avisamos que debe incluir los datos en body
app.use(express.json())
//codificacion url
app.use(express.urlencoded({extended:true}))
//front login
app.use('/login',express.static ('./fronts/front_login'))
//front admin
function chequearAcceso(req,res,next){
    const miIdentificador = req.signedCookies['sesion']
    if(miIdentificador === 'identificador'){
        return next()
    }
    console.log(req.signedCookies['sesion'])
    return res.redirect('/login')

}
app.use('/admin',chequearAcceso,express.static ('./fronts/front_admin'))

//ruta autenticacion

app.post('/autenticar',(req,res)=>{
    //primero verficar las credenciales
    const {usuario,clave}=req.body
    if(usuario!='admin' || clave != '1234'){
        return res.redirect('/login')
    }
    console.log(req.body)
    res.cookie('sesion','identificador',{
    secure:true, //https
    httpOnly: true, //no se puede leer desde js
    sameSite: 'lax',//como se va a leer la cookie con respecto al dominio
    signed: true, //si la cookie se va a firmar o o no
    maxAge:60 * 60 //aca se define cuantos segundos se quiere que la cookie sea valida
    })
    
    /*res.json({
        mensaje:  'usuario logeado'
    })*/

    //lo vamos a utilizar solo si en el front es html puro
    res.redirect('/admin')
    //si no es puro -> utilizar js para gestionar el formulario
})
app.listen(PUERTO)