// Lista 02 - Lógica de programação: praticando com desafios - Alura

// 1. Crie um formulário simples com campos de entrada e utilize JavaScript 
// para recuperar os valores digitados nos campos usando a propriedade value. 
// Exiba os valores no console e na tela.

document.getElementById ("mostraNome").textContent = '';

function capturarValores () {
    
    let nome = document.getElementById ("campoNome").value;
    let idade = document.getElementById ("campoIdade").value;
    let exibirNomeIdade = document.getElementById ("mostraNome");
    let verificadorNomeNumero = isNaN (nome);

    if (nome == '' || verificadorNomeNumero == false || isNaN (idade) || idade < 0) {
        alert ('Verifique os valores inseridos novamente');
        return;
    }

    exibirNomeIdade.textContent = `${nome}, ${idade} anos.`;
    console.log (`${nome}, ${idade} anos.`);

}