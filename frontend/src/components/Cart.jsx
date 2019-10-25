import React from 'react';
import { connect } from 'react-redux';

import LineItem from './LineItem';

const Cart = ({ cart, products }) => (
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
        {cart.reduce((total, item) => {
          const { price } = products.find(
            (product) => product.id === item.productId,
          );
          return total + parseInt(item.quantity) * parseFloat(price);
        }, 0)}
      </div>
    </div>
  </div>
);

// Uncomment when ready to connect to redux store
const mapStateToProps = ({ cart, products }) => ({
  cart,
  products,
});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(Cart);
