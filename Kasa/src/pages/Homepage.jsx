
import backgroundImage from '../assets/backgroundImageHomepage.jpg';
import DataDisplay from '../components/DisplayData';
import "./Homepage.css";

function Homepage(){

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