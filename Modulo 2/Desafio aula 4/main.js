const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;';

// variável que vai armazenar o objeto
const listaDaVenda = [];

// Separando a string e transformando em array
const produtosSeparados = reciboDeVenda.split(';');
console.log(produtosSeparados);

//variável para armazenar a quantidade de produtos como propriedade do objeto listaDaVenda
const quantidadePorProduto = {};

// o for of vai iterar sobre o array resultante do split que é const produtosSeparados
for (const produtoAtual of produtosSeparados) {
    // verifica se o produto não está vazio ou é apenas espaços em branco
    if (produtoAtual.trim() !== '') {
         // Divide as informações do produto em nome, valor e cupom usando destructuring
      const [nomeProduto, valorCupomInfo] = produtoAtual.split('/');
      const [valorProduto, cupom] = valorCupomInfo.split('=').map(item => parseFloat(item.replace('valor', '')) || parseInt(item.replace('cupom', '')));
  
      // Formata o nome do produto com a primeira letra maiúscula
      const produto = nomeProduto.charAt(0).toUpperCase() + nomeProduto.slice(1);

       // Atualiza a quantidade no objeto auxiliar da quantidade de produtos, criei assim para não usar aninhamento de for
      quantidadePorProduto[produto] = (quantidadePorProduto[produto] || 0) + 1

       // Adiciona as propriedades ao objeto da listaDaVenda com as informações do produto
      listaDaVenda.push({
        produto, 
        valor: valorProduto,
        cupom: cupom,
        quantidade: quantidadePorProduto[produto]
      });
    }
  }
  
  // exibe o objeto completo listaDeVenda
  console.log(listaDaVenda);
