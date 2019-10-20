import React from 'react';

const LineItem = ({ item }) => (
  <li>
    <p>{item.name}</p>
    <p>{item.quantity}</p>
    <p>{item.price}</p>
  </li>
);

export default LineItem;
