// === Atividade 1 === //
/*Objetivo: Criar uma classe Pessoa com propriedades como nome, idade e cidade, e métodos para calcular a idade em anos bissextos.

Crie uma classe Pessoa com propriedades nome, idade e cidade.
Adicione um método calcularIdadeBissextos que recebe um ano e retorna a idade da pessoa naquele ano, considerando anos bissextos.
Teste a classe com instâncias diferentes e chame o método para calcular a idade em anos específicos. */

class Pessoa {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }

  calcularIdadeEmDeterminadoAno(ano) {
    const anoAtual = new Date().getFullYear(); // Ano atual

    // Função que verifica se o ano é bissexto
    const isBissexto = (ano) => (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

    // calculando a diferença de anos considerando os anos bissextos
    const diferencaAnos = anoAtual - this.idade + (isBissexto(anoAtual) && isBissexto(this.idade) ? 1 : 0);

    // calcula a idade da pessoa no ano especificado
    const idadeNoAno = ano - diferencaAnos;

    // verifica se a pessoa já era nascida no ano em questão
    if (idadeNoAno <= 0) {
      console.log(`${this.nome} ainda não havia nascido neste ano.`);
    } else {
      console.log(`${this.nome} teria ${idadeNoAno} anos em ${ano}.`);
    }

    return idadeNoAno;
  }
}

// exemplos de instâncias das pessoas
const pessoaExemplo1 = new Pessoa("João", 72, "Recife");
const pessoaExemplo2 = new Pessoa("Maria", 25, "Manaus");
const pessoaExemplo3 = new Pessoa("Carlos", 41, "Brasília");
const pessoaExemplo4 = new Pessoa("Lilian", 36, "Teresina");
console.log([pessoaExemplo1, pessoaExemplo2, pessoaExemplo3, pessoaExemplo4])

// Exemplos das idades das instâncias de cada pessoa em dado ano
let idadeEm1991 = pessoaExemplo1.calcularIdadeEmDeterminadoAno(1991);
let idadeEm1987 = pessoaExemplo2.calcularIdadeEmDeterminadoAno(1987);
let idadeEm2001 = pessoaExemplo3.calcularIdadeEmDeterminadoAno(2001);
let idadeEm1996 = pessoaExemplo4.calcularIdadeEmDeterminadoAno(1996);
//===================================================================//
console.log("===========================================")
// === Atividade 2 === //
/*Atividade 2:
Objetivo: Criar uma hierarquia de classes para representar animais, com classes específicas para mamíferos e aves.

Crie uma classe base Animal com propriedades como nome e tipo.
Derive classes Mamifero e Ave da classe Animal.
Adicione métodos específicos para cada classe, como amamentar para mamíferos e voar para aves.
Teste as classes criando instâncias e chamando métodos específicos. */

class Animal {
  constructor(nome,tipo){
    this.nome = nome;
    this.tipo = tipo;
  }
}

// criando uma subclasse que herda da classe base
class Mamifero extends Animal {
  amamentar() {
    console.log('método amamentar da classe mamífero');
  }
}

// criando outra subclasse que herda da classe base
class Ave extends Animal {
  voar(){
    console.log('método voar da classe ave');
  }
}

// usando as classes criadas
const exemploAnimal1 = new Mamifero('cachorro', 'mamífero');
exemploAnimal1.amamentar();

const exemploAnimal2 = new Ave('Arara', 'ave');
exemploAnimal2.voar();
//===================================================================//

console.log("===========================================")
// === Atividade 3 === //
/*Atividade 3:
Objetivo: Implementar uma classe Carro com métodos para ligar, desligar, acelerar e frear.

Crie uma classe Carro com propriedades como modelo, ano e ligado.
Adicione métodos ligar, desligar, acelerar e frear que afetam o estado do carro.
Implemente um método status que retorna uma string indicando se o carro está ligado ou desligado.
Teste os métodos chamando-os em diferentes instâncias da classe. */

class Carro {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
    this.velocidade = 0;
  }

  ligar() {
    if (!this.ligado) {
      this.ligado = true;
      console.log('O carro está ligado.');
    } else {
      console.log('O carro já está ligado.');
    }
  }

  desligar() {
    if (this.ligado) {
      this.ligado = false;
      this.velocidade = 0;
      console.log('O carro está desligado.');
    } else {
      console.log('O carro já está desligado.');
    }
  }

  acelerar() {
    if (this.ligado) {
      this.velocidade += 20;
      console.log(`O carro acelerou. Velocidade atual: ${this.velocidade} km/h`);
    } else {
      console.log('Você precisa ligar o carro antes de acelerar.');
    }
  }

  frear() {
    if (this.ligado && this.velocidade > 0) {
      this.velocidade -= 20;
      console.log(`O carro freou. Velocidade atual: ${this.velocidade} km/h`);
    } else if (this.ligado) {
      console.log('O carro já está parado.');
    } else {
      console.log('Você precisa ligar o carro antes de frear.');
    }
  } 
}

// exemplo de uso
const meuCarro = new Carro('Ferrari', 2020);

meuCarro.ligar();
meuCarro.acelerar(); 
meuCarro.frear(); 
meuCarro.desligar();



