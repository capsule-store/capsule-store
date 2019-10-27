import React from 'react';
import { connect } from 'react-redux';

import Checkout from './Checkout';
import LineItem from './LineItem';

const Cart = ({ cart, products, loggedIn }) => {
  const total = cart.reduce((t, item) => {
    const { price } = products.find((product) => product.id === item.productId);
    return t + parseInt(item.quantity) * parseFloat(price);
  }, 0);

  return (
    <div>
      <h2>Review Cart</h2>
      <ul>
        {cart.map((item) => (
          <LineItem key={item.id} item={item} />
        ))}
      </ul>
      <div id="cartTotal">
        <div>Total</div>
        <div id="totalPrice">{total}</div>
      </div>
      {loggedIn ? (
        // Stripe Checkout takes amount in cents
        <Checkout amount={total * 100}>Checkout</Checkout>
      ) : (
        <p>Please log in to check out</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ auth, cart, products }) => ({
  cart,
  products,
  loggedIn: !!auth.id,
});

export default connect(mapStateToProps)(Cart);
