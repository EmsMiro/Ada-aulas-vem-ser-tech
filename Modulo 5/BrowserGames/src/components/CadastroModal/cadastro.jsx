import React from 'react';
import "./cadastro.css";

const CadastroModal = ({ onClose }) => {
    const handleClose = () => {
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-container" onClick={handleClose}>
            <div className="modal-content cadastro-modal" onClick={handleModalClick}>
                <span className="close-button" onClick={handleClose}>
                    X
                </span>
                <h2>Cadastro</h2>
                <form>
                    <div>
                        <label>Nome</label>
                        <input type="text" placeholder="Enzo da Silva" />
                    </div>
                    <div>
                        <label>Data de Nascimento</label>
                        <input type="date" placeholder="01/01/2001" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder="enzo@email.com" />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" placeholder="1234" />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default CadastroModal;
