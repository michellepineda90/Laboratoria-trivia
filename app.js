// Display de página de inicio y obtención de datos del HTML
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
const p1 = document.getElementById('p1');
const pregAmericaUno = document.getElementById('argentina');
const pregAmericaDos = document.getElementById('elsalvador');
const pregAmericaTres = document.getElementById('canada');
const pregEuropaUno = document.getElementById('alemania');
const pregEuropaDos = document.getElementById('suecia');
const pregEuropaTres = document.getElementById('francia');
const resultados = document.getElementById('resultados');
const name = document.getElementById('name');
resultados.style.display = 'none';

function siguiente() {
    // Pasa de la página de inicio a página de saludo y elección
    const saludo = document.getElementById('saludo');
    saludo.innerHTML = '¡Hola, ' + name.value + '!';
    bienvenida.style.display = 'none';
    elige.style.display = 'block';
}

function escogerAmerica() {
    // Pasa a la página de preguntas sobre América
    elige.style.display = 'none';
    pregAmericaUno.value = "reinicio";
    pregAmericaDos.value = "reinicio";
    pregAmericaTres.value = "reinicio";
    preguntasAmerica.style.display = "block";
    preguntasEuropa.style.display = 'none';
    enviarRespuestas.style.display = 'block';
    resultados.style.display = 'none';
    name.value = "";
}

function escogerEuropa() {
    // Pasa a la página de preguntas sobre Europa
    elige.style.display = 'none';
    pregEuropaUno.value = "reinicio";
    pregEuropaDos.value = "reinicio";
    pregEuropaTres.value = "reinicio";
    preguntasAmerica.style.display = 'none';
    preguntasEuropa.style.display = 'block';
    enviarRespuestas.style.display = 'block';
    resultados.style.display = 'none';
    name.value = "";
}

function resultadoAmerica() {
    // Obtiene el puntaje de las preguntas sobre América
    const resultadosAmerica = [];
    let numCorrect = 0;
    resultadosAmerica.push(pregAmericaUno.value);
    resultadosAmerica.push(pregAmericaDos.value);
    resultadosAmerica.push(pregAmericaTres.value);

    for (index = 0; index < resultadosAmerica.length; index++) {
        if (resultadosAmerica[index] == "correct") {
            numCorrect++;
        };
    }
    enviarRespuestas.style.display = 'none';
    preguntasAmerica.style.display = 'none';
    resultados.style.display = 'block';
    puntaje.innerHTML = "Respuestas correctas: " + numCorrect;
    incorrectas.innerHTML = "Respuestas incorrectas: " + (3 - numCorrect);
}

function resultadoEuropa() {
    // Obtiene el puntaje de las preguntas sobre Europa
    const resultadosEuropa = [];
    let numCorrectE = 0;
    resultadosEuropa.push(pregEuropaUno.value);
    resultadosEuropa.push(pregEuropaDos.value);
    resultadosEuropa.push(pregEuropaTres.value);

    for (index = 0; index < resultadosEuropa.length; index++) {
        if (resultadosEuropa[index] == "correct") {
            numCorrectE++;
        };
    }
    enviarRespuestas.style.display = 'none';
    preguntasEuropa.style.display = 'none';
    resultados.style.display = 'block';
    puntaje.innerHTML = "Respuestas correctas: " + numCorrectE;
    incorrectas.innerHTML = "Respuestas incorrectas: " + (3 - numCorrectE);
}

function reiniciar() {
    // Reinicia el juego
    bienvenida.style.display = 'block';
    resultados.style.display = 'none';
    name.value = "";
}