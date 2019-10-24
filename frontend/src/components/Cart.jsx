import React from 'react';
import { connect } from 'react-redux';

import LineItem from './LineItem';

const Cart = ({ cart }) => (
  <div>
    <h2>Review Cart</h2>
    <ul>
      {cart.map((item) => (
        <LineItem key={item.id} item={item} />
      ))}
    </ul>
    <div id="cartTotal">
      <div>Total</div>
      <div id="totalPrice">
        {cart.reduce((total, item) => total + item.quantity * item.price, 0)}
      </div>
    </div>
  </div>
);

// Uncomment when ready to connect to redux store
const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(Cart);
