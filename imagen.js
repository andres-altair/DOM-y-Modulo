export function crearImagen() {
    const imagen = document.createElement('img');
    imagen.src = 'https://via.placeholder.com/150';
    imagen.alt = 'Imagen de prueba';
    return imagen;
}
