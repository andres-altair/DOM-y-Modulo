import { crearImagen } from "./imagen.js";
import { crearLista } from "./lista.js";
import { crearParrafo } from "./parrafo.js";
import { crearTabla } from "./tabla.js";

function crearElemento(tipo) {
    const contenido = document.getElementById('contenido');
    let elemento;

    switch (tipo) {
        case 'parrafo':
            elemento = crearParrafo();
            break;
        case 'imagen':
            elemento = crearImagen();
            break;
        case 'tabla':
            elemento = crearTabla();
            break;
        case 'lista':
            elemento = crearLista();
            break;
        default:
            console.error('Tipo de elemento no reconocido');
            return;
    }

    contenido.appendChild(elemento);
}

window.crearElemento = crearElemento;
