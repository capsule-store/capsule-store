import React from 'react';

const LineItem = ({ item }) => (
  <li className="lineItem">
    <div className="itemName">{item.name}</div>
    <div className="itemQuantity">{item.quantity}</div>
    <div className="itemPrice">{item.price}</div>
    <div className="itemSubTotal">{item.quantity * item.price}</div>
  </li>
);

export default LineItem;
