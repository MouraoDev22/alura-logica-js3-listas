// Lista 04 - Lógica de programação: praticando com desafios - Alura

// 1. Adicione os números 1,2,3 em uma variável chamada minhaLista e 
// armazene os números 4, 5 e 6 separadamente em outra variável. Use 
// o método concat() para combinar as sequências de valores em uma nova 
// lista chamada novaLista. Imprima novaLista no console.

console.log ('');
console.log ('1.');
console.log ('');

let minhaLista = [];
minhaLista.push (1, 2, 3);
console.log ('Adicionando números...');

let outraLista = [];
outraLista.push (4, 5, 6);
console.log ('Adicionando outros números...');

let novaLista = minhaLista.concat (outraLista);
console.log ('Jutando as listas...');
console.log (novaLista);
console.log ('Sucesso.');

// 2. Remova o último elemento de novaLista. Imprima novaLista após a remoção.

console.log ('');
console.log ('2.');
console.log ('');

console.log ('Removendo último número...');
novaLista.pop ();
console.log (novaLista);
console.log ('Sucesso.');

// 3. Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) 
// para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

console.log ('');
console.log ('3.')
console.log ('');

console.log ('Embaralhando lista...');
embaralhar (novaLista);
console.log (novaLista);
console.log ('Sucesso.');

function embaralhar (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor (Math.random () * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 4. Crie uma função chamada removerDuplicatas que aceita 
// um array como parâmetro e retorna um novo array sem elementos duplicados. 
// Teste a função com novaLista e imprima o array resultante.

function removerDuplicatas (array) {
  return [...new Set (array)];
}

console.log ('');
console.log ('4.')
console.log ('');

let novaListaSemDuplicatas = removerDuplicatas (novaLista);

console.log ('Removendo duplicatas da lista...');
console.log (novaListaSemDuplicatas);
console.log ('Sucesso.');