// Token de acceso TID AW2 p.366

import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import pool from './conexion.bd.mjs';

//inyecatar las variables de entorno al proceso
dotenv.config();
//si el puerto no existe,pone el puerto 400 por defecto
const PUERTO = process.env.PUERTO || 4000;

const app = express();

//middleware parsea el cuerpo de la peticion y lo guarda como objeto en formato json
app.use(express.json());
//parsea el cuerpo de la peticion y lo guarda como objeto en formato urlencoded
app.use(express.urlencoded({extended:true}))
//middleware leer la cabecera de las cookie y crea un objeto js. SI la cookie esta firmada la poner en signedCookies
app.use(cookieParser());

app.post('/registrar', async (req, res) => {
    const { usuario, pass } = req.body;
    if (!usuario || !pass) {
        return res.sendStatus(400);
    }
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashingPass = bcrypt.hashSync(pass, salt);
        const resultado = await pool.query(
            'INSERT INTO usuarios (username, password_hash) VALUES ($1, $2)',
            [usuario, hashingPass]
        );
        if (resultado.rowCount > 0) {
            res.redirect('/login'); // Redirigimos al usuario a la página de login
        } else {
            res.sendStatus(500);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//servir ambos fronts
//admin
app.use(express.static('./fronts/front-admin'));
//login 
app.use(express.static('./fronts/front-login'))

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
