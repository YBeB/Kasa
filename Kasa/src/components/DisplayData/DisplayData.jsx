
import{ useEffect, useState } from 'react';
import Card from '../Card/Card';
import './DataDisplay.css';

const DataDisplay = () => {
  // Hooks créer pour le fetch
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// Hooks pour effects secondaire
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/catalog.json');
        if (!response.ok) {
          throw new Error('Pas de réponse');
        }
        const jsonData = await response.json();
        //Stockage de l'états dans notre UseState data
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
//Affichage d'une div qui display les cartes disponibles et les map
  return (
    <div>

      <div className="card-container">
        {data.map((item, index) => (
          <Card key={index} id={item.id} image={item.cover} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
