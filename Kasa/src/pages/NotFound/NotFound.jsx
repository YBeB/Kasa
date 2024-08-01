import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className='error404'>404</h1>
      <p className='message-error'>Oups! La page que vous demandez n'existe pas.</p>
      <p className='return-home'><Link to="/">Retourner sur la page d'accueil</Link></p>
    </div>
  );
};

export default NotFound;
