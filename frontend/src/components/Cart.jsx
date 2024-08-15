// src/components/Cart.js
import React from 'react';

const Cart = () => {
  return (
    <div style={{ cursor: 'pointer', padding: '10px'}}>
      <a>
        <i className="fas fa-shopping-cart"></i>
        <span>Cart</span>
      </a>
    </div>
  );
};

export default Cart;
