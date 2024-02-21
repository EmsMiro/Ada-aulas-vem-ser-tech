import { useState } from "react";
import "./aside.css";
import GamesContainer from "../GamesContainer/gamesContainer";

const Aside = () => {

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

  return (
    <aside className="category-section">
      <h2 className="category-section-title">Categorias</h2>
      <div className="scroll-wrapper">
        <ul className="category-section-ul">  
          <div className="category-item">
            <li onClick={() => handleItemClick("Em alta")}>
              <img
                src="https://timnews.com.br/system/images/photos/16013457/original/open-uri20240125-56-11q1fq4?1706198490"
                alt="palworld"
              />
              Em alta
            </li>
          </div>
          <div className="category-item">
            <li onClick={() => handleItemClick("Action RPG")}>
              <img
                src="https://i.pinimg.com/564x/ac/50/dc/ac50dcaa7a328985841ae07185b55288.jpg"
                alt="red dead redemption"
              />
              Ação
            </li>
          </div>
          <div className="category-item">
            <li onClick={() => handleItemClick("Racing")}>
              <img
                src="https://i.pinimg.com/564x/95/a4/c2/95a4c2d624d1d4bfae68f3b4eaf73256.jpg"
                alt="gran turismo"
              />
              Corrida
            </li>
          </div>
          <div className="category-item">
            <li onClick={() => handleItemClick("Sports")}>
              <img
                src="https://i.pinimg.com/564x/e1/c7/10/e1c710373d65276674b4353f1c47a214.jpg"
                alt="fifa"
              />
              Esportes
            </li>
          </div>
          <div className="category-item">
            <li onClick={() => handleItemClick("Strategy")}>
              <img
                src="https://i.pinimg.com/564x/4d/91/12/4d9112f00c72b5532fb924a69e0c9ec2.jpg"
                alt="city civilization 4"
              />
              Estratégia
            </li>
          </div>
          <div className="category-item" onClick={() => handleItemClick("Shooter")}>
            <li>
              <img
                src="https://i.pinimg.com/564x/0d/74/bf/0d74bfa8539d6f24f5b74dffba4553e0.jpg"
                alt="valorant"
              />
              FPS
            </li>
          </div>
          <div className="category-item">
            <li>
              <img
                src="https://i.pinimg.com/564x/ce/9f/95/ce9f9557dc1995930723b8d66fe99f9d.jpg"
                alt="mortal kombat"
              />
              Luta
            </li>
          </div>
          <div className="category-item">
            <li>
              <img
                src="https://i.pinimg.com/564x/da/62/d9/da62d9b153aa0845a16a5844d2c96951.jpg"
                alt="league of legends"
              />
              MOBA
            </li>
          </div>
          <div className="category-item">
            <li>
              <img
                src="https://i.pinimg.com/564x/15/27/06/152706acd8617506e4422e80f7153e19.jpg"
                alt="baldurs gate"
              />
              RPG
            </li>
          </div>
        </ul>
      </div>
      <GamesContainer games={games} />
    </aside>
  );
};

export default Aside;
