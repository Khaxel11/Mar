import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const normalRoutes = ROUTES.filter(route => !route.special);

  return (
    <>
      <div 
        className="secret-trigger"
        onClick={() => setIsOpen(true)}
      ></div>

      {isOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h2>Menú</h2>
          <button 
            className="menu-close"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
        
        <ul className="menu-list">
          {normalRoutes.map((route) => (
            <li key={route.id} className="menu-item">
              <Link 
                to={route.path} 
                onClick={() => setIsOpen(false)}
                className="menu-link"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="menu-special-section">
          <div className="menu-divider"></div>
          <ul className="menu-list">
            {ROUTES.filter(route => route.special).map((route) => (
              <li key={route.id} className="menu-item">
                <Link 
                  to={route.path} 
                  onClick={() => setIsOpen(false)}
                  className="menu-link special"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-footer">
          <p>Te amo, Mareita</p>
        </div>
      </nav>
    </>
  );
};

export default Menu;