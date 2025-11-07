// Lista 05 - Lógica de programação: praticando com desafios - Alura

// 1. Crie uma função que valide se um número é positivo, negativo ou zero.

let numero = Number (prompt ('Digite um número:'));
verificarNumero (numero);

function verificarNumero (num) {
    if (num > 0) {
        alert ('Este é um número positivo.');
    } else if (num == 0) {
        alert ('Este número é zero.');
    } else {
        alert ('Este é um número negativo.');
    }
}