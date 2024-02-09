import Icons from "../icones"
import '../headerContainer/style.css';

 const HeaderContainer = () => {
    return(
        <header className='header-container'>
            <Icons id='datilograph-icon' width="50px" height="50px" />
            <h1 className="header-title">Blog * Posts</h1>
            <Icons id='menu-icon' width="50px" height="50px" />
        </header>
    );    
};

export default HeaderContainer;