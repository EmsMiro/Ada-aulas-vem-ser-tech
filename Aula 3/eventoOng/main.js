document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('#meuFormulario');
    const resultadoDiv = document.querySelector('#resultado');
    const dbURL = 'http://localhost:3000/respostas';

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = formulario.querySelector('input[name="name"]').value;
        const idade = formulario.querySelector('input[name="idade"]').value;
        const email = formulario.querySelector('input[name="email"]').value;
        const tamanhoCamiseta = formulario.querySelector('input[name="radio"]:checked').value;
        const categoriaInscricao = formulario.querySelector('select[name="select"]').value;
        const valorDoacao = formulario.querySelector('input[name="doacao"]').value;
        
        const dadosParaEnviar = {
            nome,
            idade,
            email,
            tamanhoCamiseta,
            categoriaInscricao,
            valorDoacao
        };
        
        // enviando os dados para o json-server
        fetch(dbURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosParaEnviar)
        })
        
        .then(response => {
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            // Agora você pode acessar os dados corretamente
            const mensagem = `Inscrição confirmada! Atleta ${data.nome}, ${data.idade} anos, email: ${data.email}, tamanho camiseta: ${data.tamanhoCamiseta}, Categoria: ${data.categoriaInscricao}, Doou o valor de ${data.valorDoacao}`;
            resultadoDiv.textContent = mensagem;
        })
        .catch(error => {
            console.error('Erro ao enviar os dados para o servidor JSON:', error);
        });        
    })
})

//Constantes para lidar com as validações
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputDoacao = document.querySelector('#input-doacao');


inputName.addEventListener('keypress', (e) => {
    const keyCode = (e.keyCode ? e.keyCode : e.which);
    const regex = /[A-Za-zÁáÉéÍíÓóÚúÃãẼẽĨĩÕõŨũÑñÜüÇç~]/;
    //47 ao 58 são números
    //para provar que o que está sendo pressionado são números basta descomentar a linha abaixo
    // console.log(keyCode) 
    
    // Permite espaço em branco
    if (keyCode === 32) {
        return;
    }
    
    if (keyCode >= 47 && keyCode <= 58) {
        e.preventDefault();
    } else if (!regex.test(String.fromCharCode(keyCode))) {
        e.preventDefault();
    }
});

inputEmail.addEventListener('input', function () {
    const email = inputEmail.value;
    const emailRegex = /^[a-zA-Z0-9._-]{5,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email) || email.indexOf('@') === 0) {
        // mensagem de erro para feedback em tempo real
        inputEmail.setCustomValidity('Insira um email válido (ex.: exemplo@email.com)');
    } else {
        // Limpa a mensagem de erro em caso de email válido
        inputEmail.setCustomValidity('');
    }
} );


inputDoacao.addEventListener('input', function() {

    const valorDigitado = inputDoacao.value;

    if (valorDigitado <= 0 || valorDigitado === 0) {
        // mensagem de error
        inputDoacao.setCustomValidity('Insira um valor válido (maior que zero).');
    } else {
        // Limpa a mensagem de error
        inputDoacao.setCustomValidity('');
    }

    // const valorNaoFormatado = valorDigitado;
    // console.log(valorNaoFormatado, typeof valorNaoFormatado)

    // const valorFormatado = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(valorNaoFormatado));
    // console.log(valorFormatado, typeof valorFormatado)    
})


