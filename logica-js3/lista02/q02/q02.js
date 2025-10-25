// Lista 02 - Lógica de programação: praticando com desafios - Alura

// 2. Tenha um elemento HTML na página (por exemplo, um parágrafo) 
// e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.

function modificarConteudo () {
    
    let paragrafo = document.getElementById ("meuParagrafo");
    
    paragrafo.textContent = 'O Homo sapiens surgiu na África por volta de 300 mil anos atrás, desenvolvendo habilidades cognitivas e culturais que o distinguiram de outros hominíneos, como o uso de linguagem complexa, a arte e a fabricação de ferramentas sofisticadas. Por volta de 100 mil anos atrás, começou a se dispersar para fora do continente africano, migrando em pequenos grupos que se adaptaram a diferentes ambientes ao longo do caminho. Essa expansão levou o ser humano moderno a ocupar o Oriente Médio, a Ásia e, posteriormente, a Europa por volta de 45 mil anos atrás, chegando à Oceania e às Américas em períodos mais recentes, por volta de 50 mil e 15 mil anos atrás, respectivamente. Durante essa jornada, o Homo sapiens encontrou e se misturou geneticamente com outras espécies humanas, como os neandertais e os denisovanos, deixando traços de sua herança em populações atuais. Com o advento da agricultura por volta de 10 mil anos atrás, iniciou-se uma nova fase: o sedentarismo e a formação das primeiras civilizações, consolidando o domínio humano sobre o planeta.';

}