import './rating.css'
import Rating from 'react-rating';

const CustomRating = ({ value }) => {
    return (
      <Rating
        initialRating={value}
        emptySymbol={<span className="icon">&#9734;</span>} 
        fullSymbol={<span className="icon">&#9733;</span>}          
      />
    );
  };
  
  export default CustomRating;