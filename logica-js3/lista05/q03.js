// Lista 05 - Lógica de programação: praticando com desafios - Alura

// 3. Desenvolva uma função que valide se uma string é vazia ou não.

let string = prompt ('Digite alguma coisa:');
verificarString (string);

function verificarString (str) {
    if (str == '') {
        alert ('Esta string está vazia.');
    } else {
        alert ('Esta string não está vazia.')
    }
}