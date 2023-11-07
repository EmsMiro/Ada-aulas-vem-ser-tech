
/* Código da primeira forma de resolução do desafio base*/

function calculaMedia () {
    const estrelasAvaliacoes = [1, 2, 3, 4, 5]
    const quantClientes = [2, 15, 18, 25, 40]
    let resultadoMedia = 0;
    const numTotalClientes = 100;
    
    for(let i = 0; i < estrelasAvaliacoes.length; i++) {
    resultadoMedia += estrelasAvaliacoes[i] * quantClientes[i];
     }
     const resultadoFinal = resultadoMedia/numTotalClientes;
     console.log(resultadoFinal);
    }
    
    calculaMedia() 
/***********************************************************************************/

/*Código da segunda forma de resolução do desafio base usando o método .forEach()*/

const estrelas = [1,2,3,4,5];
const avaliacoesClientes = [2,15,18,25,40];
const numClientes = 100; 
let resultado = 0;

estrelas.forEach(function(e, i){
const multiplicacao = e * avaliacoesClientes[i];
resultado += multiplicacao;
})
const mediaAvaliacoes = resultado/numClientes;

console.log(mediaAvaliacoes)
/***********************************************************************************/

/** Código do sistema de avaliação por estrelas criado como plus ao desafio base */
const stars = document.querySelectorAll('.star-icon');
const totalClientes = document.querySelector('.total-clientes');
const mediaEstabelecimento = document.querySelector('.media-estabelecimento');

let count = {
"1": 0,
"2": 0,
"3": 0,
"4": 0,
"5": 0
}

let totalCount = 0;


stars.forEach(star => {
star.addEventListener('click', () => {
const valueStar = star.getAttribute('data-avaliacao')
	console.log('estrela clicada');
  console.log('Valor da data-avaliação:' + valueStar)
  
  count[valueStar]++;
  totalCount++;
  
  console.log('Contagem de ' + valueStar + ' estrelas: ' + count[valueStar]);
  console.log('Contagens objeto:', count);
  console.log('Total de cliques:',totalCount)
  
  // Calcular a média geral
  let mediaAvaliacao = 0;
  for(const starValue in count){
  	mediaAvaliacao += starValue * count[starValue];
  	}
    let mediaTotal = (mediaAvaliacao / totalCount).toFixed(2);
    console.log('Media geral de Avaliacao:', mediaTotal)
    
    totalClientes.innerHTML= `Total de Avaliações: ${totalCount}`;
    mediaEstabelecimento.innerHTML = `Média geral do estabelecimento: ${mediaTotal}` ;
    
	});
});



