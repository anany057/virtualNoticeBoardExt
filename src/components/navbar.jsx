import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter, faSearch } from '@fortawesome/free-solid-svg-icons';
import gm from '../gm.png';
import doc from '../doc.jpg';

const Navbar = () => {
  const handleGoogleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer">
          <img src={gm} alt="Google Meet" />
        </a>
        <a href="https://www.google.com/docs/about/" target="_blank" rel="noopener noreferrer">
          <img src={doc} alt="Google Docs" />
        </a>
      </div>
      <div>
        <h1>HYPERVERGE</h1>
      </div>
      <div className="navbar-center">
        <div className="navbar-search">
          <form onSubmit={handleGoogleSearch}>
            <input type="text" name="search" placeholder="Search Google" />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
