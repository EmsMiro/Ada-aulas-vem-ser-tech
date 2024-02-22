import './main.css'
import { useState, useEffect } from 'react'; 
import Aside from '../Aside/aside';
import GamesContainer from '../GamesContainer/gamesContainer';
import SearchBar from '../SearchBar/searchBar';

const Main = ()=> {
  const [games, setGames] = useState([]); 
  const [filteredGames, setFilteredGames] = useState([]);
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
      setSelectedCategory(itemName); // definindo o nome da categoria selecionad 
         
      
    } catch (error) {
      console.error('Erro:', error.message);
    }
  };
  
  const handleSearch = async (searchTerm) => {
    try {
        // Buscando no server
        const response = await fetch(`http://localhost:3000/games?title_like=${searchTerm}`);
        if (!response.ok) {
            throw new Error('Erro ao obter os dados');
        }

        // Convertendo a resposta para json
        const data = await response.json();
        setFilteredGames(data);

        if (data.length === 0) {
            alert("Esse jogo não foi encontrado no nosso banco de dados. :(");
        }
    } catch (error) {
        console.error('Erro:', error.message);
    }
};
    return(
        <main>        
        <Aside handleItemClick={handleItemClick} />
        <div className="content-main-container">
        <SearchBar handleSearch={handleSearch} />                     
        <GamesContainer games={filteredGames.length > 0 ? filteredGames : games} selectedCategory={selectedCategory} />
        </div>        
      </main>
    );
};

export default Main;