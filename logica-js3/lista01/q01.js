// Lista 01 - Lógica de programação: praticando com desafios - Alura

// 1. Crie um programa que verifica se uma palavra ou frase é um palíndromo.

verificarPalindromo ();

function verificarPalindromo () {
    
    let palavra = prompt ('Digite uma palavra ou frase:');
    let separarPalavra = palavra.split ('');
    let inverterPalavra = separarPalavra.reverse ('');
    inverterPalavra = inverterPalavra.join ('');
    
    if (palavra == inverterPalavra) {
        console.log ('Isto é um palíndromo.');
    } else {
        console.log ('Isto não é um palíndromo.');
    }

}