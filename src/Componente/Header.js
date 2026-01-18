import React from 'react';
import { Link } from 'react-router-dom'; // <--- Usiamo "Link" invece di "a href"

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          JUNO WINE GARDEN
        </Link>
      </div>
      <nav className="nav-links">
        {/* Usa "to" invece di "href" */}
        <Link to="/">The Garden</Link> 
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/wineries">Wineries</Link>
        <Link to="/private-events">Private Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;