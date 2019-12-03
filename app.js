// Otra forma de ocultar con funciones aquí se ve
const contenedor1 = document.getElementById('contenedor1');
contenedor1.style.display = 'block';

// Ahora no lo vemos
// button.onclick = function saludo() {
//     const name = document.getElementById('name').value;
//     const parrafo = document.getElementById('saludo');
//     parrafo.innerHTML = 'Hola ' + name;
//     (`Hola, ${name}`);
//     contenedor1.style.display = 'block';
// }

function siguiente() {
    const name = document.getElementById('name').value;
    const saludo = document.getElementById('saludo');
    saludo.innerHTML = '¡Hola, ' + name + '!';
    contenedor1.style.display = 'none';
}

function escogerAmerica() {
    preguntasAmerica.style.display = 'block'
    preguntasEuropa.style.display = 'none'
}

function escogerEuropa() {
    preguntasAmerica.style.display = 'none'
    preguntasEuropa.style.display = 'block'
}

function resultadosFinales() {

}
// Ahora en vez de redirigir con cada página, mejor agrupar en divs y ocultar y mostrar