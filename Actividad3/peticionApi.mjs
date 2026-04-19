export async function peticionFunc() {
    
    const res = await fetch('https://api.escuelajs.co/api/v1/users');
    const escuela = await res.json();
    return escuela;
}

export function filtro(escuela){

    return escuela.filter(usuario => usuario.id < 10)
} 