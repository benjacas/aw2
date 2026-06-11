import express from 'express';
import bcrypt from 'bcryptjs'
import pool from './conexion.bd.mjs'
import { nanoid } from 'nanoid';
import cookieParser from 'cookie-parser';

const PUERTO = 3000

////////////////

////////////////
const app = express();
app.use(cookieParser())
app.use(express.json()) // ---> req.body -> un objeto JS
app.use(express.urlencoded({extended:true})) // ---> req.body -> un objeto JS

// hacer publicas estas carpetas para acceder desde el navegador


// -> /login -> peticion (./fronts/front-login)
app.use('/login', express.static('./fronts/front-login'))


// Configuracion rutas login y registro
app.post('/autenticar', async (req, res)=>{
 const { usuario, pass } = req.body;
    if (!usuario || !pass) {
        return res.status(400).send('Usuario y contraseña son requeridos');
    }
    // Verificamos la contraseña usando bcrypt
    let verificado = false;
    try {
        // Consultamos la contraseña
        const resultado = await pool.query(
            'SELECT password_hash FROM usuarios WHERE username = $1',
            [usuario]
        );
        verificado = await bcrypt.compare(pass, resultado.rows[0].password_hash);
        console.log(resultado)
    } catch (error) {
        return res.status(401).send('Error al verificar la contraseña');
    }
    if (verificado) {
        const sesionId = nanoid(21); // Generar un ID con nanoid
        const resultado = await pool.query(
            'UPDATE usuarios SET session_id = $1 WHERE username = $2 RETURNING session_id',
            [sesionId,usuario]
        );
        console.log(resultado)
        // Establecemos una cookie de sesión
        res.cookie('sessionId', resultado.rows[0].session_id, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000, // 1 día
        });
        res.redirect('/'); // Redirigimos al usuario a la página principal
    } else {
        res.status(401).send('Usuario o contraseña incorrectos');
    }
})

app.get('/logout', (req, res) => {
    res.cookie('sessionId', '', { maxAge: 0 })
    res.redirect('/login')
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

app.use(async (req, res, next) => {
    const userSessionId = req.cookies.sessionId
    const resultado = await pool.query(
        'SELECT session_id FROM usuarios WHERE session_id = $1',
        [userSessionId]
    )
    if (resultado.rowCount === 0) {
        return res.redirect('/login')
    }
    next()
}, express.static('./fronts/front-admin'))

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
