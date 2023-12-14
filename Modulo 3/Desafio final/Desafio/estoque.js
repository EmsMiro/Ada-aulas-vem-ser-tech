export class MovimentacaoEstoque {
    constructor(produto, unidades, tipo, data){
        this.produto = produto;
        this.unidades = unidades;
        this.tipo = tipo;
        this.data = data;
    }

    
  }
  
  export class Estoque {
    constructor(produtos = []){
        this.estoque = produtos;
    }
  }