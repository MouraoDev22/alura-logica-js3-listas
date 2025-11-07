// Lista 05 - Lógica de programação: praticando com desafios - Alura

// 7. Crie um array e utilize a função includes para verificar se um elemento específico está presente.

let lista = [200, 500, 740, 0, 240];
verificarArray (lista);

function verificarArray (array) {
    if (array.includes (0)) {
        alert ('O array inclui 0');
    } else {
        alert ('O array não inclui 0');
    }
}