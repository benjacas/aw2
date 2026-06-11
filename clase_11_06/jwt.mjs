import jwt from "jsonwebtoken";


//sign <--- firmar

//verify <--- verificar la firma

jwt.sign({usuario: 'andres'},'largasupersecreta',{},(error,token) =>{
    console.log (token)
})