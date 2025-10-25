// Lista 01 - Lógica de programação: praticando com desafios - Alura

// 2. Crie um programa com uma função que receba três números como argumentos 
// e os retorne em ordem crescente. Exiba os números ordenados.

let num1 = Number (prompt ('Digite um número:'));

while (isNaN (num1)) {
    num1 = Number (prompt ('Digite um número:'));
}

let num2 = Number (prompt ('Digite outro número:'));

while (isNaN (num2)) {
    num1 = Number (prompt ('Digite outro número:'));
}

let num3 = Number (prompt ('Digite um último número:'));

while (isNaN (num3)) {
    num1 = Number (prompt ('Digite um último número:'));
}

ordenarNumeros ();

function ordenarNumeros (num1, num2, num3) {
    
    const numerosOrdenados = [num1, num2, num3].sort ((x, y) => x - y);
    console.log (`Números ordenados: ${numerosOrdenados.join (', ')}`);

}