// Código para definição da meta financeira e validações
const button = document.querySelector('#btn-definir');
const metaTitle = document.querySelector('#meta-title');
const metaSection = document.querySelector('.section-meta');

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

        const divMeta = metaSection.querySelector('.div-meta');
        
        if (divMeta !== null) {            
            divMeta.innerHTML = '';
            
            const valorElemento = document.createElement('h3');
            valorElemento.innerText = `Meta definida: R$ ${valorNumerico}`;
           
            divMeta.appendChild(valorElemento);
        } else {
            throw new Error('Elemento .div-meta não encontrado.');
        }

    } catch (error) {
        alert(error.message);
    }
});
