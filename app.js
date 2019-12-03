const bienvenida = document.getElementById('bienvenida');
bienvenida.style.display = 'block';
const elige = document.getElementById('elige');
elige.style.display = 'none';
const preguntasAmerica = document.getElementById('preguntasAmerica');
preguntasAmerica.style.display = 'none';
const preguntasEuropa = document.getElementById('preguntasEuropa');
preguntasEuropa.style.display = 'none';
const enviarRespuestas = document.getElementById('enviarRespuestas');
enviarRespuestas.style.display = 'none';
const resultados = document.getElementById('resultados');
resultados.style.display = 'none';

function siguiente() {
    const name = document.getElementById('name').value;
    const saludo = document.getElementById('saludo');
    saludo.innerHTML = '¡Hola, ' + name + '!';
    bienvenida.style.display = 'none';
    elige.style.display = 'block';
}

function escogerAmerica() {
    elige.style.display = 'none';
    preguntasAmerica.style.display = 'block';
    preguntasEuropa.style.display = 'none';
}

function escogerEuropa() {
    elige.style.display = 'none';
    preguntasAmerica.style.display = 'none';
    preguntasEuropa.style.display = 'block';
}

function resultadosFinales() {

}