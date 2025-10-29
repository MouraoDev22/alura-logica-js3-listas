// Lista 03 - Lógica de programação: praticando com desafios - Alura

// 4. Crie uma função que converta a temperatura de Celsius para Fahrenheit 
// e vice-versa. Utilize uma variável para indicar a escala desejada e um 
// bloco condicional para determinar qual conversão realizar

conversorGraus ();

function conversorGraus () {
    
    let temperatura = Number (prompt ('Digite uma temperatura (Apenas números):'));
    let tipoTemperatura = Number (prompt ('É em Celcius ou Fahrenheit? Digite 1 para Celcius e 2 para Fahrenheit.'));

    while (tipoTemperatura !== 1 && tipoTemperatura !== 2) {
    tipoTemperatura = prompt ('É em Celcius ou Fahrenheit? Digite 1 para Celcius e 2 para Fahrenheit.');
    }

    if (tipoTemperatura == 1) {
    conversorGrausCparaF (temperatura);
    } else {
    conversorGrausFparaC (temperatura);
    }

}

function conversorGrausCparaF (temp) {
    celcius = temp;
    let fahrenheit = (temp * 9 / 5) + 32;
    console.log (`${fahrenheit}°F`);
}

function conversorGrausFparaC (temp) {
    let celcius = (temp - 32) * 5 / 9;
    console.log (`${celcius}°C`);
}