// importação dos módulos de estoque e produto
import { MovimentacaoEstoque, Estoque } from "./estoque.js";
import { Categoria, Produto } from "./produto.js";

// código referente à API Chalk Js
import chalk from "chalk";
export const entrada = chalk.bgHex('#45C4B0').bold;
export const saida = chalk.bgHex('#FF6B1A').bold;
export const exibeInfos = chalk.hex('#0897B4').bold;
export const alerta = chalk.bgYellowBright.red;
export const exibeEstoque = chalk.hex('#9AEBA3');
//  console.log(lucro('Balanço positivo, lucro de R$ 400.00'));
//   console.log(desfalque('Balanço negativo, prejuízo de R$ 400.00'));
  

try {
    const categoriaCamisa = new Categoria('Camisa');
    const camisaPolo = new Produto('Camisa Polo', 120.00, 200, 'M', categoriaCamisa);
    camisaPolo.exibeProduto();
    const categoriaRegata = new Categoria('Camiseta');
    const camisaStreetWear = new Produto('Camiseta Street Wear', 250.00, 420, 'G', categoriaRegata);

    const novaMovimentacaoEntrada = new MovimentacaoEstoque(camisaPolo, 50, 'entrada', new Date(2023-10-16));    
    novaMovimentacaoEntrada.executarMovimentacao();
    
    const novaMovimentacaoSaida = new MovimentacaoEstoque(camisaStreetWear, 35, 'saída', new Date(2023-12-11));
    novaMovimentacaoSaida.executarMovimentacao();

    const meuEstoque = new Estoque();
    meuEstoque.adicionarProdutoAoEstoque(camisaPolo);

  } catch (error) {
    console.error(error.message);
  } 