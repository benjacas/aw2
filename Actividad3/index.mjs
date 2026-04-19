import http from 'node:http'
import { peticionFunc } from './peticionApi.mjs'
import { guardarJSON } from './escritura.mjs'
import { manejarRutas } from './server.mjs'

try {
    const api = await peticionFunc()
    await guardarJSON(api)
} catch (e) {
    console.log("error de fetch", e)
}

try {
    const app = http.createServer(manejarRutas)

    app.listen(3000, () => {
        console.log('servidor escuchando en http://localhost:3000')
    })
} catch (e) {
    console.log("Error de servidor", e)
}

