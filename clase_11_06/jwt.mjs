import jwt from 'jsonwebtoken'


// sign <---- firmar
// verify <--- verificar la firma

jwt.sign({usuario:'andres'},'largaysupersecreta',{expiresIn: '1h'},(error, token)=>{
    console.log(token)
})