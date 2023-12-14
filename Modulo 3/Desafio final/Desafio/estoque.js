import { entrada, saida, alerta, exibeEstoque, exibeMovimentacoes } from "./main.js";

export class MovimentacaoEstoque {
    constructor(produto, unidades, tipo, data){
        this.produto = produto;
        this.unidades = unidades;
        this.tipo = tipo;
        this.data = data;
    }

    executarMovimentacao() {
        const quantidadeProduto = this.produto.getQuantidade();
        let quantidadeAtualizada; 

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
    constructor(){
        this.estoque = [] ;
        this.historicoMovimentacoes = [];
    }

    adicionarProdutoAoEstoque(produto){
        this.estoque.push(produto);
        console.log(exibeEstoque(`Em Estoque: ${JSON.stringify(this.estoque, null, 2)}`));
    }

    movimentacoesRealizadas(movimentacao){
        this.historicoMovimentacoes.push(movimentacao);
        console.log(exibeMovimentacoes(`Histórico de movimentações realizadas: ${JSON.stringify(this.historicoMovimentacoes, null, 2)} \n`))
    }   
    
    filtrarMovimentacaoPorCategoria(nomeCategoria){
        const movimentacaoFiltrada = [];
    
        for(let i = 0; i < this.historicoMovimentacoes.length; i++){
            const categoriaMovimentacao = this.historicoMovimentacoes[i].produto.categoria.nome;
    
            if(categoriaMovimentacao === nomeCategoria){
                movimentacaoFiltrada.push(this.historicoMovimentacoes[i]);
            }
        }
    
        console.log(`Exibindo movimentações da categoria ${nomeCategoria}: ${JSON.stringify(movimentacaoFiltrada, null, 2)}`);
    }
    
  }