import { MovimentacaoEstoque } from "./estoque.js";
import { Categoria, Produto } from "./produto.js";
import chalk from "chalk";
const lucro = chalk.bgGreen.bold;
const desfalque = chalk.bgRed.bold;
export const exibeInfos = chalk.cyanBright.bold;
//  console.log(lucro('Balanço positivo, lucro de R$ 400.00'));
//   console.log(desfalque('Balanço negativo, prejuízo de R$ 400.00'));
  

try {
    const categoriaCamisa = new Categoria('Camisa');
    const camisaPolo = new Produto('Camisa Polo', 120.00, 200, 'M', categoriaCamisa);
    camisaPolo.exibeProduto();
    

  } catch (error) {
    console.error(error.message);
  } 