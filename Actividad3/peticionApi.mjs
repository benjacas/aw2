export async function peticion() {
    
    const res = await fetch('https://api.escuelajs.co/api/v1/users');
    const escuela = await res.json();
    return escuela;
}

export function filtro(){
    
    peticion()

    return escuela.map(usuario => ({
        id: usuario.id < 10
    }));
}