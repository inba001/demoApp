// src/components/Header.js
import React from 'react';
import LoginDropdown from './LoginDropdown';
import Cart from './Cart';

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <a></a>
        </div>
        <LoginDropdown />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
