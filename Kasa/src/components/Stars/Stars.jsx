import PropTypes from 'prop-types';
import filledStar from "../../assets/stars.svg";
import emptyStar from "../../assets/greystars.svg";
import './Stars.css';

function Stars({ rating }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={index < rating ? filledStar : emptyStar}
          alt="star"
          className="star"
        />
      ))}
    </div>
  );
}

Stars.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Stars;
