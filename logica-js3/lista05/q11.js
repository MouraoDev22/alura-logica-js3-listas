// Lista 05 - Lógica de programação: praticando com desafios - Alura

// 11. Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = operacaoNumeros (lista);

console.log (resultado.somaPares);
console.log (resultado.produtoImpares);

function operacaoNumeros (array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 == 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {somaPares, produtoImpares};
}