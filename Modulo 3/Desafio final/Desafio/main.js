// importação dos módulos de estoque e produto
import { MovimentacaoEstoque, Estoque } from "./estoque.js";
import { Categoria, Produto } from "./produto.js";

// código referente à API Chalk Js
import chalk from "chalk";
export const entrada = chalk.bgHex('#45C4B0').bold;
export const saida = chalk.bgHex('#FF6B1A').bold;
export const exibeInfos = chalk.hex('#0897B4').bold;
export const exibeValorTotal = chalk.bgHex('#0897B4').bold;
export const alerta = chalk.bgYellowBright.red;
export const exibeEstoque = chalk.hex('#9AEBA3');
export const exibeMovimentacoes = chalk.hex('#FF81D0');
//  console.log(lucro('Balanço positivo, lucro de R$ 400.00'));
//   console.log(desfalque('Balanço negativo, prejuízo de R$ 400.00'));
  

try {
    // Exemplos de uso - Categoria Camisa
    const categoriaCamisa = new Categoria('Camisa');
    const camisaPolo = new Produto('Camisa Polo', 120.00, 200, 'M', categoriaCamisa);
    const camisaSocial = new Produto('Camisa Social', 280.00, 350, 'G', categoriaCamisa);
    camisaPolo.exibeProduto();

    // Adicionando espaçamento
    console.log('\n');
    
    camisaSocial.exibeProduto();

    // Adicionando espaçamento
    console.log('\n');

    // Categoria Camiseta
    const categoriaCamiseta = new Categoria('Camiseta');
    const camisaStreetWear = new Produto('Camiseta Street Wear', 250.00, 420, 'G', categoriaCamiseta);
    camisaStreetWear.exibeProduto();

    // Adicionando espaçamento
    console.log('\n');

    //Movimentações no Estoque
    const novaMovimentacaoEntrada = new MovimentacaoEstoque(camisaPolo, 50, 'entrada', new Date('2023-10-16').toLocaleDateString('pt-BR'));    
    novaMovimentacaoEntrada.executarMovimentacao();
    
    const novaMovimentacaoSaida = new MovimentacaoEstoque(camisaStreetWear, 35, 'saída', new Date('2023-11-20').toLocaleDateString('pt-BR'));
    novaMovimentacaoSaida.executarMovimentacao();

    const novaMovimentacaoEntradaCamisaSocial = new MovimentacaoEstoque(camisaSocial, 120, 'entrada', new Date('2023-12-09').toLocaleDateString('pt-BR'));
    novaMovimentacaoEntradaCamisaSocial.executarMovimentacao();
     
    //Adicionando produto ao Estoque
    const meuEstoque = new Estoque();
    meuEstoque.adicionarProdutoAoEstoque(camisaPolo, camisaPolo.getQuantidade(), camisaPolo.getPreco());
    meuEstoque.adicionarProdutoAoEstoque(camisaSocial, camisaSocial.getQuantidade(), camisaSocial.getPreco());
    meuEstoque.adicionarProdutoAoEstoque(camisaStreetWear, camisaStreetWear.getQuantidade(), camisaStreetWear.getPreco());

     // Adicionando espaçamento
     console.log('\n'); 
     
    // Exibir estoque
    meuEstoque.exibirEstoque();

    // Exibindo histórico de movimentações
    meuEstoque.movimentacoesRealizadas(novaMovimentacaoEntrada);    
    meuEstoque.movimentacoesRealizadas(novaMovimentacaoSaida);
    meuEstoque.movimentacoesRealizadas(novaMovimentacaoEntradaCamisaSocial);     

    //Exibindo histórico de movimentações por categoria
    meuEstoque.filtrarMovimentacaoPorCategoria('Camisa');

    // Adicionando espaçamento
    console.log('\n'); 

    //Exibidin valor total do Estoque
    meuEstoque.calcularValorTotalEstoque();

  } catch (error) {
    console.error(error.message);
  } 