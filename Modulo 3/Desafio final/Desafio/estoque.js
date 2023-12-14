import { entrada, saida, alerta } from "./main.js";

export class MovimentacaoEstoque {
    constructor(produto, unidades, tipo, data){
        this.produto = produto;
        this.unidades = unidades;
        this.tipo = tipo;
        this.data = data;
    }

    executarMovimentacao() {
        const quantidadeProduto = this.produto.getQuantidade();
    let quantidadeAtualizada; // Declare a variável aqui

    if (this.tipo === 'entrada') {
        if (this.unidades > 0) {
            quantidadeAtualizada = quantidadeProduto + this.unidades;
            this.produto.setQuantidade(quantidadeAtualizada);
            console.log(entrada(`Foram adicionadas ${this.unidades} ao produto ${this.produto.nome}. Totalizando ${quantidadeAtualizada} unidades desse produto no Estoque.`));
        } else {
            throw new Error(alerta('Atenção: A quantidade de produtos a ser adicionada não pode ser menor ou igual a zero.'));
        }
    } else {
        if (quantidadeProduto >= this.unidades) {
            quantidadeAtualizada = quantidadeProduto - this.unidades;
            this.produto.setQuantidade(quantidadeAtualizada);
            console.log(saida(`Foram retiradas ${this.unidades} do produto ${this.produto.nome}. Totalizando ${quantidadeAtualizada} unidades desse produto no Estoque.`));
        } else {
            throw new Error(alerta(`Atenção: Estoque insuficiente. Restam ${quantidadeProduto} unidades deste produto.`));
        }
    }
    }
    
  }
  
  export class Estoque {
    constructor(produtos = []){
        this.estoque = produtos ;
    }
  }