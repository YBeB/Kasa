
import backgroundImage from '../../assets/backgroundImageHomepage.jpg';
import DataDisplay from '../../components/DisplayData/DisplayData';
import "./Homepage.css";

function Homepage(){
// Affichage de tout les cards via differents components type Card et DataDisplay
return(
    <body>
   < div className='DivInsideImage'>

<img className='BackgroundImageStyled' src={backgroundImage}></img>
<h1 className='HeaderTitle'>Chez vous, partout et ailleurs</h1>
</div>
<div className='DivBody'>
<div className='DivInsideBody'>
<DataDisplay/>
</div>
</div>
</body>
)

}
export default Homepage