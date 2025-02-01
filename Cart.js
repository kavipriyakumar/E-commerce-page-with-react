import React from 'react';

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
