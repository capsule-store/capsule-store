import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../store';

const LineItem = ({ item, updateQuantity, removeLineItem }) => (
  <li className="lineItem">
    <div className="itemName">{item.name}</div>

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

    <div className="itemPrice">{item.price}</div>
    <div className="itemSubTotal">{item.quantity * item.price}</div>

    <button type="button" onClick={() => removeLineItem(item.id)}>
      Remove
    </button>
  </li>
);

const mapDispatchToProps = (dispatch) => ({
  updateQuantity: (id, quantity) => {
    dispatch(actions.updateLineItem(id, quantity));
  },
  removeLineItem: (id) => {
    dispatch(actions.removeLineItem(id));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(LineItem);
