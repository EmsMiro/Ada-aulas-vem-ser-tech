import './cardgame.css';

const Card = ({ image, title, category, description, platform }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-category">{category}</p>
        <p className="card-description">{description}</p>
        <p className="card-platform">{platform}</p>
      </div>
    </div>
  );
};

export default Card;