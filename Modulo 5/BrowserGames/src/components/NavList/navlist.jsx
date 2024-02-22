import { useState } from 'react';
import LoginModal from '../LoginModal/login'
import CadastroModal from '../CadastroModal/cadastro'
import './navlist.css'


const NavList = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showCadastroModal, setShowCadastroModal] = useState(false);

    return (
        <nav>
            <ul className='navList'>
                <li>Home</li>
                <li onClick={() => setShowLoginModal(true)}>Login</li>
                <li onClick={() => setShowCadastroModal(true)}>Cadastro</li>
                <li>Perfil</li>                
            </ul>
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
            {showCadastroModal && <CadastroModal onClose={() => setShowCadastroModal(false)} />}
        </nav>
    );
};

export default NavList;