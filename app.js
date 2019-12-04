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

function resultado() {
    if ((pregAmericaUno.value == "buenosaires") && (pregAmericaDos == "sansalvador") && (pregAmericaTres == "ottawa")) {
        alert("Todas tus respuestas están correctas!")
    } else {
        alert("Oh no, inténtalo de nuevo")
    }
}