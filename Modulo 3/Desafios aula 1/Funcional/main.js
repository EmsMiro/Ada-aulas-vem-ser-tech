/*Exercício 1:
Objetivo: Criar uma função que recebe uma lista de números e retorna a soma dos quadrados dos números pares.

Crie uma função chamada somaQuadradosPares que recebe uma lista de números.
Utilize programação funcional para filtrar os números pares da lista.
Eleve cada número par ao quadrado.
Calcule a soma dos quadrados obtidos.
Retorne o resultado. */

const somaQuadradosPares = function(arrNumeros) {
    const arrNumerosPares = arrNumeros.filter(function(numero) {
      return numero % 2 === 0;
    });
    let somaQuadrados = 0;
   for(let i = 0; i < arrNumerosPares.length; i++){
       const itemAtual = arrNumerosPares[i];
    const numeroAoQuadrado = itemAtual ** 2;
    somaQuadrados+= numeroAoQuadrado;   
   } 
   return somaQuadrados;   
  }

  // usando reduce
  const somaQuadradosPares2 = function(arrNumeros) {
    const somaQuadrados = arrNumeros.reduce( function(acumulador, numero) {
      if (numero % 2 === 0) {
        return acumulador + numero ** 2;
      } else {
        return acumulador;
      }
    }, 0);
  
    return somaQuadrados;
  }
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(somaQuadradosPares(numeros));
  console.log(somaQuadradosPares2(numeros));
//==================================================================//
console.log('============================================');

/*Exercício 2:
Objetivo: Criar uma função que recebe uma lista de palavras e retorna uma nova lista com as palavras ordenadas por tamanho, da menor para a maior.
esperada: ["uva", "banana", "laranja", "abacaxi"]*/

const frutasNaoOrdenadas = ["uva", "banana", "laranja", "abacaxi"];

function ordenaArray (array) {
    const novoArrayOrdenado = array.sort(function(a,b) {
        return a - b;
    });
    return console.log(novoArrayOrdenado);     
}

ordenaArray(frutasNaoOrdenadas);
//==================================================================//
console.log('============================================');

/*Exercício 3:
Objetivo: Criar uma função que recebe uma lista de números e retorna a média dos números ímpares.

javascript Copy code

Crie uma função chamada mediaNumerosImpares que recebe uma lista de números.
Utilize programação funcional para filtrar os números ímpares da lista.
Calcule a média dos números ímpares obtidos.
Retorne o resultado. */

const arrayNumerosAleatorios = [1, 2, 5, 11, 43, 67, 20, 51];

function mediaNumerosImpares (array) {
 const numerosImpares = array.filter((numero) => numero % 2 !== 0);
 if(numerosImpares.length === 0){
    return console.log('O array analisado não tem números ímpares.')
 }

 const somaImpares = numerosImpares.reduce((a,b) => a + b, 0);
 const mediaImpares = somaImpares / numerosImpares.length;

 return console.log(mediaImpares);
}
mediaNumerosImpares(arrayNumerosAleatorios);





