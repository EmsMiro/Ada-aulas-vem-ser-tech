import "./searchbar.css";
import { useState } from "react";
import Icon from "../IconsList/icon";

const SearchBar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const onClickSearch = async () => {
        await handleSearch(searchTerm);
    };

  return (
    <section className="search-section">
      <h2 className="search-title">Pesquisar por nome do jogo:</h2>
      <label className="search-input-label">
        <input 
        type="text" 
        name="search-bar" 
        id="searchBar" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
      </label>
      <div className="icon-search" onClick={onClickSearch}>
        <Icon name="search" />
      </div>
    </section>
  );
};

export default SearchBar;
