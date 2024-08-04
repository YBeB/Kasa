import  { useState } from "react";
import PropTypes from 'prop-types';
import arrowLeft from "../../assets/arrowleft.svg";
import arrowRight from "../../assets/arrowright.svg";


function Carousel({ pictures }) {
    //Création d'un index a 0
  const [currentIndex, setCurrentIndex] = useState(0);
//Parcours de l'index avec les deux fonctionnalités nextImage et prevImage
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };
//Création d'une div qui affiche et map les images dans le carousel
  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`Logement ${index}`} />
        ))}
      </div>
      {pictures.length > 1 && (
        <>
          <div className="carousel-buttons">
            <button className="carousel-button" onClick={prevImage}>
              <img src={arrowLeft} alt="previous" />
            </button>
            <button className="carousel-button" onClick={nextImage}>
              <img src={arrowRight} alt="next" />
            </button>
          </div>
          <div className="carousel-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}
// Proptypes avec comme seul elements requis les images
Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
