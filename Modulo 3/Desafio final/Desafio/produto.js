import { exibeInfos } from "./main.js";
export class Categoria {
    constructor(nome){
         this.nome = nome;        
    }
}

export class Produto {
    #preco;
    #quantidade;

    constructor(nome,preco,quantidade,tamanho,categoria){
        this.nome = nome;
        this.setPreco(preco);
        this.setQuantidade(quantidade); 
        this.tamanho = tamanho;        
        this.categoria = categoria;
    }

    getPreco(){
        return this.#preco;
    }

    setPreco(novoPreco){
        if(novoPreco < 0){
            throw new Error('O valor do produto não pode ser negativo.');
        }
        this.#preco = (novoPreco).toFixed(2);
    }

    getQuantidade(){
        return this.#quantidade;
    }

    setQuantidade(novaQuantidade){
        if(novaQuantidade < 0){
            throw new Error('A quantidade do produto não pode ser negativa.')
        }
        this.#quantidade = novaQuantidade;
    }

    exibeProduto(){
        console.log(exibeInfos( `Produto: ${this.nome}, Preço: R$ ${this.getPreco()},        
        Quantidade: ${this.getQuantidade()}, Categoria: ${this.categoria.nome}, Tamanho: ${this.tamanho}`)       
        ); 
    }
}

