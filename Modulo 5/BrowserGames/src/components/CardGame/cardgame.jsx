import "./cardgame.css";
import CustomRating from "../CustomRating/rating";

const Card = ({ game }) => {
  return (
    <div className="card">
    <img src={game.thumbnail} alt={game.title} className="card-image" />
    <div className="card-body">
      <h3 className="card-title">{game.title}</h3>
      <div className="card-subtitle">
        <p className="card-category">{game.genre}</p>
        <p className="card-platform">{game.platform}</p>
      </div>
      <p className="card-description">{game.short_description}</p>
      <CustomRating />
      <label>
        <textarea className="card-coment" placeholder="Seu review do jogo aqui"></textarea>
      </label>
      <button className="card-btn">Enviar</button>
    </div>
  </div>
  );
};

export default Card;
