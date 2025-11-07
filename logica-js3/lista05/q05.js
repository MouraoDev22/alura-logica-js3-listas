// Lista 05 - Lógica de programação: praticando com desafios - Alura

// 5. Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.

let numero1 = Number (prompt ('Digite um número:'));

while (isNaN (numero1)) {
    numero1 = Number (prompt ('Digite um número:'));
}

let numero2 = Number (prompt ('Digite outro número:'));

while (isNaN (numero2)) {
    numero1 = Number (prompt ('Digite um número:'));
}

mediaNumeros (numero1, numero2);

function mediaNumeros (num1, num2) {
    alert ((num1 + num2) / 2);
}