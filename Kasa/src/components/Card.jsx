
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
const Card = ({ id , image, title }) => {
  return (
    <div className="card">
      <Link to={`/home/${id}`}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      </Link>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
