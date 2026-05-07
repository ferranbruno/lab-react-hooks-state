import React from 'react';

function Cart({ cart }) {
  return (
    <div data-testid="cart">
      <h2>Shopping Cart</h2>

      <div data-testid="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} is in your cart.
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;