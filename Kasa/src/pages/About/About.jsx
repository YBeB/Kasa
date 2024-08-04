
import backGroundImageAbout from "../../assets/backgroundAbout.jpg";
//Importation du composant DropDown
import DropDown from "../../components/DropDown/DropDown";
import "./About.css";
//Affichage du Dropdown menu
function About() {
  return (
    <div className="about-content">
      <div className="DivInsideImage">
        <img className='BackgroundImageStyled' src={backGroundImageAbout} alt="background" />
      </div>
      <div className="DropDownAbout">
        <DropDown 
          title="Fiabilité" 
          content={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>} 
          className="about-dropdown"
        />
        <DropDown 
          title="Respect" 
          content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} 
          className="about-dropdown"
        />
        <DropDown 
          title="Service" 
          content={<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience de service irréprochable. Nous offrons des services personnalisés et répondons à toutes vos demandes rapidement et efficacement.</p>} 
          className="about-dropdown"
        />
        <DropDown 
          title="Securité" 
          content={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>} 
          className="about-dropdown"
        />
      </div>
    </div>
  );
}

export default About;
