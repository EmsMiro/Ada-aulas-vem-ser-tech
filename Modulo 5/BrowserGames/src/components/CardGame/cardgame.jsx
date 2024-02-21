import "./cardgame.css";
import CustomRating from "../CustomRating/rating";

const Card = ({
  image,
  title,
  category,
  description,
  platform,
  rating,
  coment,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-subtitle">
          <p className="card-category">{category}</p>
          <p className="card-platform">{platform}</p>
        </div>
        <p className="card-description">{description}</p> 
        <CustomRating />      
        <label>
          <textarea className="card-coment" placeholder={coment}></textarea>
        </label>
        <button className="card-btn">Enviar</button>
      </div>
    </div>
  );
};

export default Card;
