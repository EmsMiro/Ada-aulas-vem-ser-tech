// Projeto realizado em parceria das alunas Emily Miro e Elaine Stefani Santin

const button = document.querySelector('#btn-definir');
const metaTitle = document.querySelector('#meta-title');
const metaSection = document.querySelector('.section-meta');

// Função para obter a meta do sessionStorage
function obterMetaDoSessionStorage() {
  return sessionStorage.getItem('metaFinanceira') || '';
}

//definir a meta no sessionStorage
function definirMetaNoSessionStorage(valor) {
  sessionStorage.setItem('metaFinanceira', valor);
}

// atualizar o conteúdo da div-meta com base no valor do sessionStorage
function atualizarDivMetaComSessionStorage() {
  const divMeta = metaSection.querySelector('.div-meta');
  const metaDoSessionStorage = obterMetaDoSessionStorage();

  if (divMeta !== null) {
    divMeta.innerHTML = '';

    const valorElemento = document.createElement('h3');
    const valorFormatado = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(metaDoSessionStorage);
    valorElemento.innerText = `Meta definida: ${valorFormatado}`;

    divMeta.appendChild(valorElemento);
  }
}

button.addEventListener('click', () => {
  try {
    const inputMetaValue = document.querySelector('#metaInput').value;

    if (inputMetaValue.trim() === '') {
      throw new Error('O campo não pode estar em branco.');
    }

    const valorNumerico = parseFloat(inputMetaValue);

    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      throw new Error('Insira um valor diferente de zero.');
    }

    // manda a meta no sessionStorage
    definirMetaNoSessionStorage(valorNumerico);

    // Atualizando a div-meta com o valor do sessionStorage
    atualizarDivMetaComSessionStorage();

  } catch (error) {
    alert(error.message);
  }
});

/*Código para adicionar a transação na tabela e salvar no session storage*/

const adicionarTransacaoSection = document.querySelector('.adicionar-transacao');
const tabelaSection = document.querySelector('.table');
const receitaCheckbox = document.getElementById('receitaCheckbox');
const despesaCheckbox = document.getElementById('despesaCheckbox');
const transacaoValorInput = document.getElementById('transacaoValor');
const transacaoDescricaoInput = document.getElementById('transacaoDescricao');
const btnAdicionar = document.querySelector('.btn-adicionar');

// obter as transações do session storage
function obterTransacoesDoSessionStorage(tipo) {
  const transacoesString = sessionStorage.getItem(tipo);
  return transacoesString ? JSON.parse(transacoesString) : [];
}

// definir as transações no session storage
function definirTransacoesNoSessionStorage(tipo, transacoes) {
  sessionStorage.setItem(tipo, JSON.stringify(transacoes));
}

//  adicionar uma nova transação
function adicionarTransacao(tipo, valor, descricao) {
  const transacoes = obterTransacoesDoSessionStorage(tipo);

  transacoes.push({ valor, descricao });

  definirTransacoesNoSessionStorage(tipo, transacoes);
}

//  atualizar a tabela com base nas transações
function atualizarTabela() {
  const tabelaBody = tabelaSection.querySelector('tbody');

  // Limpando a tabela antes de atualizar
  tabelaBody.innerHTML = '';

  const receitas = obterTransacoesDoSessionStorage('receita');
  const despesas = obterTransacoesDoSessionStorage('despesa');

  // adiciona as receitas na tabela
  receitas.forEach(transacao => {
    const tr = document.createElement('tr');
    const valorFormatado = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(transacao.valor);
    tr.innerHTML = `<td>Receita</td><td>${transacao.descricao}</td><td>${valorFormatado}</td>`;
    tabelaBody.appendChild(tr);
  });

  // adiciona as despesas na tabela
  despesas.forEach(transacao => {
    const tr = document.createElement('tr');
    const valorFormatado = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(transacao.valor);
    tr.innerHTML = `<td>Despesa</td><td>${transacao.descricao}</td><td>${valorFormatado}</td>`;
    tabelaBody.appendChild(tr);
  });

  // calcula e exibe o total
  const total = receitas.reduce((acc, transacao) => acc + parseFloat(transacao.valor), 0) -
    despesas.reduce((acc, transacao) => acc + parseFloat(transacao.valor), 0);

  const trTotal = document.createElement('tr');
  const valorFormatado = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(total);
  trTotal.innerHTML = `<td></td><td></td><td>Total: ${valorFormatado}</td>`;
  tabelaBody.appendChild(trTotal);
}

// adiciona um evento de clique no btn-adicionar
btnAdicionar.addEventListener('click', () => {
  const tipo = receitaCheckbox.checked ? 'receita' : (despesaCheckbox.checked ? 'despesa' : null);

  if (tipo !== null) {
    const valor = transacaoValorInput.value;
    const descricao = transacaoDescricaoInput.value;

    if (valor.trim() !== '' && descricao.trim() !== '') {
      adicionarTransacao(tipo, valor, descricao);
      atualizarTabela();
    } else {
      alert('Preencha todos os campos.');
    }
  } else {
    alert('Selecione o tipo da transação.');
  }
});

// Carrega a tabela com base nas transações do sessionStorage
atualizarTabela();

//código do verificar se a meta foi alcançada
const btnVerificarMeta = document.querySelector('.btn-verificar-meta');
const metaStatus = document.getElementById('meta-status');

// Adicionando um event listener no botão "Verificar Meta"
btnVerificarMeta.addEventListener('click', () => {
  verificarMeta();
});

//obtem os dados de receita e despesas
const receitas = obterTransacoesDoSessionStorage('receita');
const despesas = obterTransacoesDoSessionStorage('despesa');

// calcula o total de receitas e despesas
const totalReceitas = receitas.reduce((acc, transacao) => acc + parseFloat(transacao.valor), 0);
const totalDespesas = despesas.reduce((acc, transacao) => acc + parseFloat(transacao.valor), 0);

//  verifica se a meta foi alcançada
function verificarMeta() {
  // calcula o saldo (receitas - despesas)
  const saldo = totalReceitas - totalDespesas;

  // trás a meta do sessionStorage
  const metaDoSessionStorage = parseFloat(sessionStorage.getItem('metaFinanceira')) || 0;

  // berificando se o saldo é maior ou igual à meta
  if (saldo >= metaDoSessionStorage) {
    mostrarMensagemMetaAlcancada();
  } else {
    mostrarMensagemMetaNaoAlcancada();
  }
}

//  mostrar mensagem quando a meta é alcançada
function mostrarMensagemMetaAlcancada() {
  metaStatus.innerText = 'Meta financeira alcançada!';
  metaStatus.style.color = 'green';
}

// mostrar mensagem quando a meta não é alcançada
function mostrarMensagemMetaNaoAlcancada() {
  metaStatus.innerText = 'Meta financeira não alcançada.';
  metaStatus.style.color = 'red';
}

// impedir que receita e despesa sejam checkadas ao mesmo tempo
receitaCheckbox.addEventListener('change', function () {
  if (this.checked) {
    despesaCheckbox.checked = false;
  }
});

despesaCheckbox.addEventListener('change', function () {
  if (this.checked) {
    receitaCheckbox.checked = false;
  }
});

// gráfico
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Receitas', 'Despesas'],
    datasets: [{
      data: [totalReceitas, totalDespesas],
      backgroundColor: ['green', 'red'],
      hoverOffSet: 4,
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'right',
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed;
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
          },
        },
      },
    },
  },
});
