import './gamesContainer.css';
import Card from '../CardGame/cardgame';

const GamesContainer = ({ games })=> {
    return(
        <div className='games-container'>
            <h2 className='games-container-title'>nome da categoria</h2>
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
            
            {/* Card de teste */}
            {/* <Card
            image="https://gamohol.com/wp-content/uploads/2024/02/palworld-cover-1.jpg"
            title="Palworld"
            category="Action"
            platform="PC"
            description="Jogo de sobrevivência de mundo aberto e multiplayer!"            
            coment="Seu review do jogo aqui"
             /> */}
             
        </div>
    );
};

export default GamesContainer;