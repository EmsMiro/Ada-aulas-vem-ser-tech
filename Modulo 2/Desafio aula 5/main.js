/*Conforme o Departamento de Medicina Social, além do peso e da altura, outro dado a ser considerado afim de calcular o IMC é a idade. Portanto adultos com idade igual ou maior que 65 anos tem um padrão de valores de IMC diferente de adultos com idade inferior a 65 anos. Com base nessas informações seguem as minhas formas de resolução do desafio proposto em aula*/

/* Tabela de valores padrão para adultos abaixo de 65 anos - IMC:
Entre 16 e 16.9 Muito abaixo do peso
Menor que 18,5 Abaixo do peso
Entre 18,5 e 24,9 Peso normal
Entre 25 e 29,9 Sobrepeso
Entre 30 e 34,9 Obesidade grau 1
Entre 35 e 39,9 Obesidade grau 2
Acima de 40 Obesidade grau 3
*/

/* Tabela de valores padrão para idosos acima de 65 anos
Menor ou igual a 22 - Baixo peso 
Menor que 22 ou igual a 27 - Adequado(eutrófico)
Acima de 27 - Sobrepeso
*/

/* Declarando as variáveis para cálculo do imc*/
const peso = parseFloat(prompt('Digite seu peso: '));
const altura = parseFloat(prompt('Digite sua altura: '));
const idade = parseInt(prompt('Digite sua idade: '));
const imc = peso / (altura * altura);

/*Array com strings para cada faixa de classificacao do imc*/
const classificacaoImc = ['Muito abaixo do peso', 'Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III', 'Baixo peso', 'Adequado', 'Sobrepeso']

/*Conectando os resultados do código Js com a DOM*/

const resultadoImc = document.querySelector('#resultado-imc');
resultadoImc.innerHTML = `Resultado IMC: ${imc.toFixed(2)}`;

const faixaImc = document.querySelector('#faixa-imc');


/*Primeira forma de resolução usando if aninhado*/

if (idade >= 65) {
  if (imc <= 22) {
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[7]}`;
  } else if (imc < 27) {
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[8]}`;
  } else {
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[9]}`;
  }

} else if (idade < 65) {
  if (imc <= 16.9) {
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[0]}`;
  } else if (imc < 18.5) {
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[1]}`;
  } else if (imc < 25) {
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[2]}`;
  } else if (imc < 30) {
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[3]}`;
  } else if (imc < 35) {
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[4]}`;
  } else if (imc >= 40) {
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[5]}`;
  }
}

/*Segunda forma de resolução utilizando switch case*/

/*Utilizando a estrutura switch case com operadores para verificar as condições*/

 switch (true) {
  case idade >= 65 && imc <= 22:
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[7]}`;
    break;
  case idade >= 65 && imc < 27:
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[8]}`;
    break;
  case idade >= 65 && imc > 27:
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[9]}`;
    break;
  case idade < 65 && imc <= 16.9:
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[0]}`;
    break;
  case idade < 65 && imc < 18.5:
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[1]}`;
    break;
  case idade < 65 && imc < 25:
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[2]}`;
    break;
  case idade < 65 && imc < 30:
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[3]}`;
    break;
  case idade < 65 && imc < 35:
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[4]}`;
    break;
  case idade < 65 && imc >= 40:
    faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacaoImc[5]}`;
    break;
  default:
    faixaImc.innerHTML = 'Dados inválidos.';
} 

/* Terceira forma de resolução usando if e switch case*/

/*Declarando variável classificacao para armazenar o resultado dos valores das faixas de imc*/
let classificacao;

/*Atribuindo a faixa de imc para a classificacao*/
if (idade >= 65) {
    if (imc <= 22) {
        classificacao = classificacaoImc[7];
    } else if (imc < 27) {
        classificacao = classificacaoImc[8];
    } else {
        classificacao = classificacaoImc[9];
    }
} else {
    if (imc <= 16.9) {
        classificacao = classificacaoImc[0];
    } else if (imc < 18.5) {
        classificacao = classificacaoImc[1];
    } else if (imc < 25) {
        classificacao = classificacaoImc[2];
    } else if (imc < 30) {
        classificacao = classificacaoImc[3];
    } else if (imc < 35) {
        classificacao = classificacaoImc[4];
    } else {
        classificacao = classificacaoImc[5];
    }
}

/*Usando o switch para lidar com o resultado da classificacao*/

switch (classificacao) {
    case classificacaoImc[0]:
    case classificacaoImc[1]:
    case classificacaoImc[2]:
    case classificacaoImc[3]:
    case classificacaoImc[4]:
    case classificacaoImc[5]:
        faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacao}`;
  break;
    case classificacaoImc[7]:
    case classificacaoImc[8]:
    case classificacaoImc[9]:
        faixaImc.innerHTML = `Sua faixa de IMC atual é: ${classificacao}`;
   break;
    default:
        faixaImc.innerHTML = 'Dados inválidos.';
}

