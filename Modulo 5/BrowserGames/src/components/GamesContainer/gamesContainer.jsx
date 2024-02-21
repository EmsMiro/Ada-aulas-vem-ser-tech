import './gamesContainer.css';
import Card from '../CardGame/cardgame';

const GamesContainer = ()=> {
    return(
        <div className='games-container'>
            <h2 className='games-container-title'>Em alta</h2>
            <Card
            image="https://gamohol.com/wp-content/uploads/2024/02/palworld-cover-1.jpg"
            title="Palworld"
            category="Em alta"
            platform="PC"
            description="Jogo de sobrevivência de mundo aberto e multiplayer!"            
            coment="Seu review do jogo aqui"
             />
        </div>
    );
};

export default GamesContainer;