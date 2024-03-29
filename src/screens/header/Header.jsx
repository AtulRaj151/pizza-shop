// Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Pizza Shop</h1>
      <div className="animated-text">
        <span className="animated-letter">P</span>
        <span className="animated-letter">I</span>
        <span className="animated-letter">Z</span>
        <span className="animated-letter">Z</span>
        <span className="animated-letter">A</span>
      </div>
    </header>
  );
};

export default Header;
