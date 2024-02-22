import "./searchbar.css";
import { useState } from "react";
import Icon from "../IconsList/icon";

const SearchBar = ({ setFilteredGames }) => {
    const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      // buscando no server
      const response = await fetch(`http://localhost:3000/games?title_like=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Erro ao obter os dados');
      }

      // lembre-se -> smp converter a resposta pra json
      const data = await response.json();

      // pra definir os jogos filtrados
      setFilteredGames(data);
      
      
      if (data.length === 0) {
        alert("Esse jogo não foi encontrado no nosso banco de dados. :(");
      }
    } catch (error) {
      console.error('Erro:', error.message);
    }
  };
  return (
    <section className="search-section">
      <h2 className="search-title">Pesquisar por nome do jogo:</h2>
      <label className="search-input-label">
        <input type="text" name="search-bar" id="searchBar" value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
      </label>
      <div className="icon-search" onClick={handleSearch}>
        <Icon name="search" />
      </div>
    </section>
  );
};

export default SearchBar;
