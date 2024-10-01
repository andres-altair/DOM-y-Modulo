export function crearTabla() {
    const tabla = document.createElement('table');
    const tblBody = document.createElement('tbody');

    for (let i = 0; i < 3; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const celda = document.createElement('td');
            const textoCelda = document.createTextNode(`Fila ${i + 1}, Columna ${j + 1}`);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }
        tblBody.appendChild(fila);
    }

    tabla.appendChild(tblBody);
    tabla.setAttribute('border', '2');
    return tabla;
}