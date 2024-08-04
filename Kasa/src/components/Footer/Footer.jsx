
import iconFooter from "../../assets/icon-footer.svg"
import "./Footer.css"




function Footer(){
    return(
    
    <footer>
    <img  className="iconFooter" src={iconFooter}></img>
        <p className='StyledFooterParagraph'>© 2020 Kasa. All rights reserved</p>
    </footer>
    
    )
    
    }
    
    
    export default Footer