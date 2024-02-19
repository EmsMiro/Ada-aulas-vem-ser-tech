import "./login.css";

const LoginModal = ({ onClose }) => {
    const handleClose = () => {
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-container" onClick={handleClose}>
            <div className="modal-content login-modal" onClick={handleModalClick}>
                <span className="close-button" onClick={handleClose}>X</span>
                <h2>Login</h2>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="jose@email.com" />
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" placeholder="****" />
                </div>
                <button type="submit">Login</button>
            </div>
        </div>
    );
};

export default LoginModal;
