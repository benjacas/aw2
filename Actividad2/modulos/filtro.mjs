export function filtro(escuela){
    return escuela.map(escuela => ({
        id: escuela.id,
        email: escuela.email,
        name: escuela.name
    }));
}