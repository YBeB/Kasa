import  { useState } from "react";
import PropTypes from 'prop-types';
import arrowUp from '../../assets/arrowup.svg';
import arrowDown from '../../assets/arrowdown.svg';

//Use State a false 
function DropDown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
//Activation de la liste deroulante une fois le boutons cliqué (Boolean a true)
  return (
    <div className="flex-b">
      <button className="DropDownMenu" onClick={toggleOpen}>
        {title}
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt={isOpen ? "Flèche vers le haut" : "Flèche vers le bas"}
        />
      </button>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default DropDown;
