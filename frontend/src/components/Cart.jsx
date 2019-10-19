import React from 'react';

const Cart = () => (
  <div>
    <h2>Review Cart</h2>
    <ul>
      {lineItems.map((item) => (
        <LineItem item={item} />
      ))}
    </ul>
  </div>
);

export default Cart;
