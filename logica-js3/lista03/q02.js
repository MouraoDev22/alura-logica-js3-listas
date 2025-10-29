// Lista 03 - Lógica de programação: praticando com desafios - Alura

// 2. Escreva um programa de calculadora simples com funções separadas para adição, 
// subtração, multiplicação e divisão. Utilize um bloco condicional para determinar 
// qual função executar com base em uma variável que representa a operação desejada.

let calculadora = prompt ('Faça sua operação:');
let numero1, numero2, resultado;

if (calculadora.includes ('+')) {
    [numero1, numero2] = calculadora.split ('+');
    resultado = soma (Number (numero1), Number (numero2));
} else if (calculadora.includes ('-')) {
    [numero1, numero2] = calculadora.split ('-');
    resultado = subtracao (Number (numero1), Number (numero2));
} else if (calculadora.includes ('x')) {
    [numero1, numero2] = calculadora.split ('x');
    resultado = multiplicacao (Number (numero1), Number (numero2));
} else {
    [numero1, numero2] = calculadora.split ('/');
    resultado = divisao (Number (numero1), Number (numero2));
}

console.log (resultado);

function soma (num1, num2) {

    return num1 + num2;

}

function subtracao (num1, num2) {
    
    return num1 - num2;

}

function multiplicacao (num1, num2) {
    
    return num1 * num2;

}

function divisao (num1, num2) {
    
    return num1 / num2;

}