import React, { useState } from 'react';
import "./cadastro.css";

const CadastroModal = ({ onClose }) => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleClose = () => {
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novoUsuario = {
            name: nome,
            idade: idade,
            email: email,
            password: senha
        };

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoUsuario),
            });

            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
                onClose();
            } else {
                throw new Error('Erro ao cadastrar usuário.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <div className="modal-container" onClick={handleClose}>
            <div className="modal-content cadastro-modal" onClick={handleModalClick}>
                <span className="close-button" onClick={handleClose}>
                    X
                </span>
                <h2>Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome</label>
                        <input type="text" placeholder="Insira seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label>Idade</label>
                        <input type="text" placeholder="Insira sua idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder="Seu melhor email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" placeholder="Insira uma senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default CadastroModal;
