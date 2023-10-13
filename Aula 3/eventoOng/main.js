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
        .then(response => response.json())
        .then(data => {
            // mostrando a mensagem na tela
            const mensagem = `Inscrição confirmada! Atleta ${data.nome}, ${data.idade} anos, email: ${data.email}, tamanho camiseta: ${data.tamanhoCamiseta}, Categoria: ${data.categoriaInscricao}, Doou o valor de ${data.valorDoacao}`;
            resultadoDiv.textContent = mensagem;
        })
        .catch(error => {
            console.error('Erro ao enviar os dados para o servidor JSON:', error);
        });   

        // lembre -> essa parte do código foi pra testar!
        // const mensagem = `Inscrição confirmada! Atleta ${nome}, ${idade} anos, email: ${email}, tamanho camiseta: ${tamanhoCamiseta}, Categoria: ${categoriaInscricao}, Doou o valor de ${valorDoacao}`;
        // resultadoDiv.textContent = mensagem;
        
    })
})
