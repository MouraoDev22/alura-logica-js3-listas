// Lista 03 - Lógica de programação: praticando com desafios - Alura

// 3. Implemente uma função que aceite um número como parâmetro e utilize 
// um bloco condicional para determinar se o número é par ou ímpar.

let numero = prompt ('Digite um número:');

verificarParImpar (numero);

function verificarParImpar (num) {

    num = Number (num);

    if (num % 2 == 0) {
        alert ('Este é um número par.');
    } else {
        alert ('Este é um número ímpar.');
    }

} 