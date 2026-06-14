export function validarId(req, res, next) {
    //convierte el id en numero
    const id = Number(req.params.id)

    //pregunta si el id no es un numero, si no es un numero devuelve un error
    if (isNaN(id)) { //is not a number devuelve true o false!!
        return res.status(400).json({
            mensaje: 'El codigo tiene que ser un número'
        })
    }

    next() //si todo sale bien, el middlware termina
}