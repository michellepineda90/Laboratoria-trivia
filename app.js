const bienvenida = document.getElementById('bienvenida');
bienvenida.style.display = 'block';
const elige = document.getElementById('elige');
elige.style.display = 'none';
const preguntasAmerica = document.getElementById('preguntasAmerica');
preguntasAmerica.style.display = 'none';
const preguntasEuropa = document.getElementById('preguntasEuropa');
preguntasEuropa.style.display = 'none';
const enviarRespuestas = document.getElementById('enviar');
enviarRespuestas.style.display = 'none';
const pregAmericaUno = document.getElementById('argentina');
const pregAmericaDos = document.getElementById('elsalvador');
const pregAmericaTres = document.getElementById('canada');
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
    enviarRespuestas.style.display = 'block';
}

function escogerEuropa() {
    elige.style.display = 'none';
    preguntasAmerica.style.display = 'none';
    preguntasEuropa.style.display = 'block';
    enviarRespuestas.style.display = 'block';
}

function resultadoAmerica() {
    const resultadosAmerica = [];
    let numCorrect = 0;
    resultadosAmerica.push(pregAmericaUno.value);
    resultadosAmerica.push(pregAmericaDos.value);
    resultadosAmerica.push(pregAmericaTres.value);

    for (index = 0; index < resultadosAmerica.length; index++) {
        if (resultadosAmerica[index] == "correct") {
            numCorrect++;
            console.log(numCorrect)
        };
    }
    enviarRespuestas.style.display = 'none';
    preguntasAmerica.style.display = 'none';
    resultados.style.display = 'block';
    puntaje.innerHTML = numCorrect
}

function reiniciar() {
    bienvenida.style.display = 'block';
    resultados.style.display = 'none';
}