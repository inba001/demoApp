import React from 'react';
import LoginDropdown from './LoginDropdown';
import Cart from './Cart';
import ProductSearch from './ProductSearch';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Header.css';

const Header = () => {
  return (
    <header className="header bg-light">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-md-2"><h2>AIMTRNS</h2></div>
            <div className="col-md-8">
                <ProductSearch />
            </div>
            <div className="col-md-1 text-center">
                <LoginDropdown />
            </div>
            <div className="col-md-1 text-end">
                <Cart />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
