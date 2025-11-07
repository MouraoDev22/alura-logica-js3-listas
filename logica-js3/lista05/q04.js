// Lista 05 - Lógica de programação: praticando com desafios - Alura

// 4. Crie uma função que determine se um ano é bissexto.

let calendário = prompt ('Digite um ano qualquer:');
verificarAno (calendário);

function verificarAno (ano) {
    if (ano % 4 == 0) {
        alert ('Este é um ano bissexto.');
    } else {
        alert ('Este não é um ano bissexto.');
    }
}