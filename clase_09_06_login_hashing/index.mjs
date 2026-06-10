import express from 'express';
import bcrypt from 'bcryptjs'
import pool from './conexion.bd.mjs'


const PUERTO = 3000

////////////////

////////////////
const app = express();

app.use(express.json()) // ---> req.body -> un objeto JS
app.use(express.urlencoded({extended:true})) // ---> req.body -> un objeto JS

// hacer publicas estas carpetas para acceder desde el navegador

// -> /admin -> peticion (./fronts/front-admin)
app.use('/admin', express.static('./fronts/front-admin'))

// -> /login -> peticion (./fronts/front-login)
app.use('/login', express.static('./fronts/front-login'))


// Configuracion rutas login y registro
app.post('/autenticar',(req, res)=>{

})

app.post('/registrar', async (req, res)=>{
    // 1 - Obtengo los datos del formulario
    // const usuario = req.body.usuario
    // const pass = req.body.pass
    const {usuario, pass} = req.body

    // 2 - chequear datos
    if(!usuario || !pass){
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        })
    }

    // 3 - Hashing
    // Utilizar try/catch
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pass, salt);

    const resultado = await pool.query(`
        INSERT INTO usuarios
            (username, password_hash)
        VALUES
            ($1, $2)
        RETURNING id, username
        `,
        [
            usuario,
            hash
        ]
    )
    // Si todo OK
    if(resultado.rowCount > 0){
        return res.status(201).json({mensaje:'usuario registrado', usuario: resultado.rows[0].username})
    }
    // Si no:
    res.status(500).json({
        mensaje: 'No se pudo reslizar el registr'
    })
})



app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
