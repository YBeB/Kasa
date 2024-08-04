
import { Link, useLocation } from 'react-router-dom';
import icon from '../../assets/logo.svg';
import './Header.css'; 

function Header() {
  const location = useLocation();

  return (
    <header>
      <img src={icon} alt="icon" className="icon" />
      <nav>
        <ul className='UlHeader'>
          <li className={`liHeader ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={`liHeader ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
