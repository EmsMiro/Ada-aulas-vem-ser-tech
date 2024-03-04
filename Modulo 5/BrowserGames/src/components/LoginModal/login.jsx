import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users?email=' + email);
      const userData = await response.json();

      if (userData.length === 1 && userData[0].password === password) {
        alert(`Login efetuado com sucesso! Bem-vindo ${userData[0].name}`);
        handleClose();
        
        // Armazenar os detalhes do usuário no localStorage
        localStorage.setItem('user', JSON.stringify(userData[0]));

        navigate('/profile');
      } else {
        console.log('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="modal-container" onClick={handleClose}>
      <div className="modal-content login-modal" onClick={handleModalClick}>
        <span className="close-button" onClick={handleClose}>X</span>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input type="text" placeholder="jose@email.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder="****" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
