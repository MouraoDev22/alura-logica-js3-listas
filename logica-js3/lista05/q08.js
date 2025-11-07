// Lista 05 - Lógica de programação: praticando com desafios - Alura

// 8. Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

let lista = ['Arroz', '4', 'Feijão', '10', '20'];
let elemento = prompt ('Digite ou não uma das seguintes coisas: "Arroz", "4", "Feijão", "10" ou  "20".');
verificarArray (lista, elemento);

function verificarArray (array, elmt) {
    if (array.includes (elmt)) {
        alert (`O elemento ${elemento} está presente no array.`);
    } else {
        alert (`O elemento ${elemento} não está presente no array.`);
    }
}