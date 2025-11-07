// Lista 05 - Lógica de programação: praticando com desafios - Alura

// 2. Implemente uma função que verifique se uma pessoa é maior de idade.

let idade = Number (prompt ('Digite sua idade:'));

while (isNaN (idade)) {
    idade = Number (prompt ('Digite sua idade:'));
}

verificarIdade (idade);

function verificarIdade (idd) {
    if (idd >= 18) {
        alert ('Maior de idade.');
    } else {
        alert ('Menor de idade.');
    }
}