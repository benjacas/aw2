import express from 'express'

//crear servidor
const PUERTO = 3000
const app = express()



const middlwareValidarCodigo = async (req, res, next) => {
    try {
        const codigoParametro = req.params.codigo

        const usuario = await fetch('http://localhost:4321/usuario')
        const codigo = await usuario.json()

        const codigoAPI = codigo.codigo

        if (parseInt(codigoParametro) === codigoAPI) {
            return next()
        } else {
            return res.status(400).json({
                mensaje: "El código es incorrecto"
            })
        }

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al conectar con la API"
        })
    }
}



app.get('/:codigo', middlwareValidarCodigo, (req, res) => {
    res.status(200).json({
        mensaje: "El código es correcto"
    })
})


app.listen(PUERTO, () => {
    console.log(`Servidor proyecto en http://localhost:${PUERTO}`)
})
