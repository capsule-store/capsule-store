import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../store';

const LineItem = ({
  products, item, updateQuantity, deleteLineItem,
}) => {
  const { name, price } = products.find(
    (product) => product.id === item.productId,
  );

  return (
    <li className="lineItem">
      <div className="itemName">{name}</div>

      <button
        type="button"
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
      >
        -
      </button>

      <div className="itemQuantity">{item.quantity}</div>

      <button
        type="button"
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
      >
        +
      </button>

      <div className="itemPrice">{price}</div>
      <div className="itemSubTotal">{item.quantity * price}</div>

      <button type="button" onClick={() => deleteLineItem(item.id)}>
        Remove
      </button>
    </li>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

const mapDispatchToProps = (dispatch) => ({
  updateQuantity: (id, quantity) => {
    dispatch(actions.updateLineItem(id, quantity));
  },
  deleteLineItem: (id) => {
    dispatch(actions.deleteLineItem(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LineItem);
