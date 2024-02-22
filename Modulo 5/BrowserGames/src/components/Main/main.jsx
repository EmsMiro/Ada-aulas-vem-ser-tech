import './main.css'
import { useState } from 'react'; 
import Aside from '../Aside/aside';
import GamesContainer from '../GamesContainer/gamesContainer';

const Main = ()=> {
  const [games, setGames] = useState([]);

  const handleItemClick = async (itemName) => {
    console.log("Fui clicado:", itemName);

    try {
      // consulta ao endpoint do json-server
      const response = await fetch(`http://localhost:3000/games?genre=${itemName}`);
      if (!response.ok) {
        throw new Error('Erro ao obter os dados');
      }

      // convertendo a resposta para json
      const data = await response.json();

       // mapeando os dados recebidos do server para selecionar os que precisam ir pro card
       const selectedGames = data.map((game) => ({
        id: game.id,
        title: game.title,
        thumbnail: game.thumbnail,
        short_description: game.short_description,
        genre: game.genre,
        platform: game.platform
      }));

      setGames(selectedGames);

     
      console.log("Jogos da categoria:", selectedGames);
    } catch (error) {
      console.error('Erro:', error.message);
    }
  };    
    return(
        <main>
        <Aside handleItemClick={handleItemClick} />
        <GamesContainer games={games} />
      </main>
    );
};

export default Main;