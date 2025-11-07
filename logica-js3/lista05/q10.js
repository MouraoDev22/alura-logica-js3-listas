// Lista 05 - Lógica de programação: praticando com desafios - Alura

// 10. Desenvolva uma função que receba um array de objetos representando 
// estudantes de um curso e um objeto que representa um estudante procurado. 
// Depois retorne se o objeto está presente no array.

let estudantesCurso = ['Pedro', 'José', 'Maria', 'Richard', 'Beatriz'];
let estudanteProcurado = prompt ('Qual o nome do estudante que está procurando?');

while (isNaN (estudanteProcurado) == false) {
    estudanteProcurado = prompt ('Qual o nome do estudante que está procurando?');
}

verificarEstudantes (estudantesCurso, estudanteProcurado);

function verificarEstudantes (estudantes, estudanteAlvo) {
    if (estudantes.includes (estudanteAlvo)) {
        alert (`O estudante ${estudanteAlvo} está presente neste curso.`);
    } else {
        alert (`O estudante ${estudanteAlvo} não está presente neste curso.`);
    }
}