import './gamesContainer.css';
import Card from '../CardGame/cardgame';

const GamesContainer = ({ games })=> {
    return(
        <div className='games-container'>          
            {games?.map((game) => (                               
                <Card 
                game={game}
                key={game.id}
                image={game.thumbnail}
                title={game.title}
                genre={game.genre}
                description={game.description}
                coment="Seu review do jogo aqui"
                />
            ))}            
        </div>
    );
};

export default GamesContainer;