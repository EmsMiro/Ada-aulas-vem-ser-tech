const arrGeral = [
  ["Fernanda Santos", 19660156627897],
  ["Rafael Souza", 23998058019370],
  ["Maria Silva", 92291338611],
  ["Maria Souza", 55443795656],
  ["Ana Costa", 77743761456],
  ["Maria Ferreira", 47202302326],
  ["Sofia Costa", 58017232567],
  ["Lucas Silva", 16733009491247],
  ["Rafael Souza", 63351859919],
  ["Carlos Oliveira", 84297701780],
];

    const parceirosAgrupados = {
    PF: [],
    PJ: [],
    };

for (let i = 0; i < arrGeral.length; i++) {
  for (let j = 0; j < arrGeral[i].length; j++) {
    if (typeof arrGeral[i][j] === "number") {
      const nome = arrGeral[i][0];
      const parceiroId = arrGeral[i][j].toString();
      if (parceiroId.length >= 14) {
        parceirosAgrupados.PJ.push({ nome, parceiroId });
      } else if (parceiroId.length < 14) {
        parceirosAgrupados.PF.push({ nome, parceiroId });
      }
    } 
  }
}

console.log(parceirosAgrupados);

function preencherDetalhe(tipo, dados) {
    const detalhe = document.getElementById("conteudo" + tipo);
    
  
  dados.forEach((dado) => {
      const paragrafo = document.createElement("p");
      const documento = tipo === "PJ" ? "CNPJ" : "CPF";
      paragrafo.textContent = `Nome: ${dado.nome}, ${documento}: ${dado.parceiroId}`;
      detalhe.appendChild(paragrafo);
    });
  }
  
  
  preencherDetalhe("PJ", parceirosAgrupados.PJ);
  preencherDetalhe("PF", parceirosAgrupados.PF);