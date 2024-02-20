import './gamesContainer.css';
import Card from '../CardGame/cardgame';

const GamesContainer = ()=> {
    return(
        <div className='games-container'>
            <h2 className='games-container-title'>Em alta</h2>
            <Card
            image="https://gamohol.com/wp-content/uploads/2024/02/palworld-cover-1.jpg"
            title="Palworld"
            category="Em alta, aventura"
            description="Jogo de sobrevivência com criaturas misteriosas chamadas Pals de mundo aberto e multiplayer!"
            platform="Steam(Pc)" />
        </div>
    );
};

export default GamesContainer;