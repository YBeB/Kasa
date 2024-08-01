import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Home.css";
import filledStar from "../assets/stars.svg";
import emptyStar from "../assets/greystars.svg";
import arrowLeft from "../assets/arrowleft.svg";
import arrowRight from "../assets/arrowright.svg";
function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [equipmentsOpen, setEquipmentsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/catalog.json");
        if (!response.ok) {
          throw new Error("Pas de réponse");
        }
        const jsonData = await response.json();
        const itemData = jsonData.find((item) => item.id === id);
        if (!itemData) {
          navigate("/404");
        } else {
          setData(itemData);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.pictures.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  const toggleDescription = () => setDescriptionOpen(!descriptionOpen);
  const toggleEquipments = () => setEquipmentsOpen(!equipmentsOpen);
  const renderStars = (rating) => {
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
  };

  return (
    <div className="home">
      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.pictures.map((picture, index) => (
            <img key={index} src={picture} alt={`Logement ${index}`} />
          ))}
        </div>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={prevImage}>
            <img src={arrowLeft}></img>
          </button>
          <button className="carousel-button" onClick={nextImage}>
            {" "}
            <img src={arrowRight}></img>
          </button>
        </div>
        <div className="carousel-counter">
          {currentIndex + 1}/{data.pictures.length}
        </div>
      </div>
      <div className="PrincipalContent">
      <div className="MiddlePart">
        <div className="MiddleLowPart">
          <h1>{data.title}</h1>
          <p className="location">{data.location}</p>
        </div>
        <div className="TagRating">
        <ul className="TagUl">
          {data.tags.map((tag, index) => (
            <li className="TagLi" key={index}>
              {tag}
            </li>
          ))}
        </ul>

  
      </div>

      </div>
 
      <div className="HostandRating">
        <div className="HostProfil">
          <div className="Name">
            <p className="host-name">{data.host.name.split(" ")[0]}</p>
            <p className="host-surname">{data.host.name.split(" ")[1]}</p>
          </div>

          <img
            src={data.host.picture}
            alt={data.host.name}
            className="host-picture"
          />
                    
          </div>
          <p>{renderStars(data.rating)}</p>
      </div>
      </div>
      <div className="DropDown">
        <div className="flex-b">
          <p className="Dropdown-cont">
            <button className="DropDownMenu" onClick={toggleDescription}>
              {descriptionOpen ? `Description ` : "Description"}
            </button>
          </p>
          {descriptionOpen && (
            <div className="dropdown-content">
              <p>{data.description}</p>
            </div>
          )}
        </div>
        <div className="flex-b">
          <p className="Dropdown-cont">
            <button className="DropDownMenu" onClick={toggleEquipments}>
              {equipmentsOpen ? "Equipments" : "Equipments"}
            </button>
          </p>
          {equipmentsOpen && (
            <div className="dropdown-content">
              <ul>
                {data.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
