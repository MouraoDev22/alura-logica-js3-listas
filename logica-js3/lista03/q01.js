// Lista 03 - Lógica de programação: praticando com desafios - Alura

// 1. Crie uma função que aceite uma string como parâmetro, utilize a 
// função parseInt para converter essa string em um número inteiro e retorne o resultado.

let numero = prompt ('Digite um número inteiro:');
converterEmNumero (numero);

function converterEmNumero (string) {
    let numero = parseInt (string);
}