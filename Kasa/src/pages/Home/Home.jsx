import  { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Home.css";
//Importation de tout les composants necessaire a la page
import Carousel from "../../components/Carousel/Carousel";
import Stars from "../../components/Stars/Stars";
import HostProfile from "../../components/HostProfile/HostProfile";
import DropDown from "../../components/DropDown/DropDown";


function Home() {
  //Utilisation de UseParams et useNavigate pour gerer l'url
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// Utilisations du Hooks useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/catalog.json");
        if (!response.ok) {
          throw new Error("Pas de réponse");
        }
        const jsonData = await response.json();
        const itemData = jsonData.find((item) => item.id === id);
        //Si L'id n'est pas trouvé , redirection vers la page /error 404 
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;
//Affichage de tout les components créer et importé 
  return (
    <div className="home">
      <Carousel pictures={data.pictures} />
      <div className="PrincipalContent">
        <div className="MiddlePart">
          <div className="MiddleLowPart">
            <h1>{data.title}</h1>
            <p className="location">{data.location}</p>
          </div>
          <div className="TagRating">
            <ul className="TagUl">
              {data.tags.map((tag, index) => (
                <li className="TagLi" key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="HostandRating">
          <HostProfile host={data.host} />
          <Stars rating={data.rating} />
        </div>
      </div>
      <div className="DropDown">
        <DropDown title="Description" content={<p>{data.description}</p>} />
        <DropDown 
          title="Equipments" 
          content={
            <ul>
              {data.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          } 
        />
      </div>
    </div>
  );
}

export default Home;
