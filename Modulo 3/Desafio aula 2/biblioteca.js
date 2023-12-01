/*Sistema de Gestão de Biblioteca
Vamos criar um sistema de gestão de biblioteca em JavaScript utilizando Programação Orientada a Objetos. Teremos classes para representar Livros, Autores e uma Biblioteca.

Crie a classe Autor:
A classe deve ter atributos como nome e nacionalidade.
Crie um método exibirDetalhes que imprima no console os detalhes do autor.
Crie a classe Livro:
A classe deve ter atributos como titulo, anoPublicacao e uma instância da classe Autor.
Crie um método detalhesDoLivro que imprima no console os detalhes do livro, incluindo os detalhes do autor.
Crie a classe Biblioteca:
A classe deve ter um atributo que armazena uma lista de livros.
Crie métodos para adicionar um livro à biblioteca, listar todos os livros e buscar livros por autor.
Teste o Sistema:
Crie instâncias das classes Autor, Livro e Biblioteca.
Adicione alguns autores e livros à biblioteca.
Liste todos os livros na biblioteca.
Faça uma busca por livros de um autor específico.
Exiba os detalhes de alguns livros. */

class Autor {
    constructor(nome, nacionalidade) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
    }

    exibirDetalhes() {
        console.log(`Autor: ${this.nome}, Nacionalidade: ${this.nacionalidade}`);
    }
}

class Livro {
    constructor(titulo, anoPublicacao, autor) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
        this.autor = autor; // instância da classe Autor
    }

    detalhesDoLivro() {
        console.log(`Detalhes do livro: Título: ${this.titulo}, Ano de publicação: ${this.anoPublicacao}`);
        this.autor.exibirDetalhes();
    }
}

class Biblioteca {
    constructor() {
        this.listaDeLivros = [];
    }

    adicionarNovoLivro(novoLivro) {
        this.listaDeLivros.push(novoLivro);
    }

    listarLivros() {
        console.log('Livros na Biblioteca:');
        this.listaDeLivros.forEach(livro => {
            console.log(`- Título: ${livro.titulo}, Ano de Publicação: ${livro.anoPublicacao},
             Autor: ${livro.autor.nome}, Nacionalidade: ${livro.autor.nacionalidade}`);
        });
    }

    buscarLivroPorAutor(nomePesquisado) {
        const livroPesquisado = this.listaDeLivros.filter(livro => livro.autor.nome === nomePesquisado);
        console.log(`Livros encontrados do autor ${nomePesquisado}: `);
        return livroPesquisado;
    }
}

// testes
const autor1 = new Autor('Edgar Allan Poe', 'norte-americano');
const livro1 = new Livro('O Corvo', 1845, autor1);
livro1.detalhesDoLivro();

console.log('================================================');

const biblioteca = new Biblioteca();
biblioteca.adicionarNovoLivro(livro1);
console.log(biblioteca);

console.log('================================================');
//adicionando outro livro
const autor2 = new Autor('Carolina Maria de Jesus', 'brasileira');
const livro2 = new Livro('Quarto de despejo: Diário de uma favelada', 1960, autor2);
biblioteca.adicionarNovoLivro(livro2);

// listando todos os livros presentes na biblioteca
biblioteca.listarLivros();

console.log('================================================');
//pesquisando o livro de um autor específico
console.log(biblioteca.buscarLivroPorAutor(autor1.nome));


console.log('================================================');
// exibindo detalhes de um livro
livro2.detalhesDoLivro();



