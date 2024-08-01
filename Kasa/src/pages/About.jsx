import {  useState } from "react";
import backGroundImageAbout from "../assets/backgroundAbout.jpg"
import "./About.css";



function About(){
    const [fiabilityOpen, setFiabilityOpen] = useState(false);
    const [respectOpen, setRespectOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [securityOpen, setSecurityOpen] = useState(false);


    const toggleFiability = () => setFiabilityOpen(!fiabilityOpen);
    const toggleRespect = () => setRespectOpen(!respectOpen);
    const toggleService = () => setServiceOpen(!serviceOpen);
    const toggleSecurity = () => setSecurityOpen(!securityOpen);
return(
    <div className="about-content">
        <div className="DivInsideImage">
    <img className='BackgroundImageStyled' src={backGroundImageAbout}></img></div>
<div className="DropDownAbout">
<div className="flex-b">
        <p className="Dropdown-cont">

          <button className="DropDownMenuAbout" onClick={toggleFiability}>
            {fiabilityOpen ? `Fiabilité ` : 'Fiabilité'}
          </button>
        </p>
        {fiabilityOpen && (
               <div className="dropdown-content-a">
          <p >Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p></div>
        )}
        </div>
         <div className="flex-b">
        <p className="Dropdown-cont">
          <button className="DropDownMenuAbout" onClick={toggleRespect}>
            {respectOpen ? 'Respect' : 'Respect'}
          </button>
        </p>
        {respectOpen && (
              <div className="dropdown-content-a">
 <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></div> 
        )}
        </div>
        <div className="flex-b">
        <p className="Dropdown-cont">
          <button className="DropDownMenuAbout" onClick={toggleService}>
            {serviceOpen ? 'Service' : 'Service'}
          </button>
        </p>
        {serviceOpen && (
              <div className="dropdown-content-a">
<p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></div> 
        )}
        </div>
        <div className="flex-b">
        <p className="Dropdown-cont">
          <button className="DropDownMenuAbout" onClick={toggleSecurity}>
            {securityOpen ? 'Securité' : 'Securité'}
          </button>
        </p>
        {securityOpen && (
              <div className="dropdown-content-a">
<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services.En laissant une note aussi bien à  l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p></div> 
        )}
        </div>
</div>
</div>
)

}

export default About