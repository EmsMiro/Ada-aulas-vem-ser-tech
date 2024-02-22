import './main.css'
import { useState, useEffect } from 'react'; 
import Aside from '../Aside/aside';
import GamesContainer from '../GamesContainer/gamesContainer';

const Main = ()=> {
  const [games, setGames] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState(""); // variável de estado para armazenar o nome da categoria q foi selecionada 

  useEffect(() => {
    // função para carregar os jogos da categoria "default" assim que o componente for montado
    handleItemClick("Em alta");
  }, []); // esse array de dependências vazio é pra garantir que essa função só será executada uma vez, quando o componente for montado

  const handleItemClick = async (itemName) => {    

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
      setSelectedCategory(itemName); // define o nome da categoria selecionad         
      
    } catch (error) {
      console.error('Erro:', error.message);
    }
  };    
    return(
        <main>
        <Aside handleItemClick={handleItemClick} />        
        <GamesContainer games={games} selectedCategory={selectedCategory} />
      </main>
    );
};

export default Main;