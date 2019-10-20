import React from 'react';
import { connect } from 'react-redux';

import LineItem from './LineItem';

const Cart = ({ lineItems }) => (
  <div>
    <h2>Review Cart</h2>
    <ul>
      {lineItems.map((item) => (
        <LineItem key={item.id} item={item} />
      ))}
    </ul>
    <div id="cartTotal">
      <div>Total</div>
      <div id="totalPrice">
        {lineItems.reduce((total, item) => total + item.price, 0)}
      </div>
    </div>
  </div>
);

export default Cart;

// Uncomment when ready to connect to redux store
// const mapStateToProps = ({ lineItems }) => ({
//   lineItems,
// });

// const mapDispatchToProps = () => {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Cart);
