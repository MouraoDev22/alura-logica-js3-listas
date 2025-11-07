// Lista 05 - Lógica de programação: praticando com desafios - Alura

// 9. Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

let lista = ['Arroz', '4', 'Feijão', '10', '20'];
verificarArray (lista);

function verificarArray (array) {
    if (array.includes ('4')) {
        alert (`O elemento ${lista [1]} está presente no array.`);
    } else {
        alert (`O elemento ${lista [1]} não está presente no array.`);
    }
}