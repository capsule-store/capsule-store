import React from 'react';
import { connect } from 'react-redux';

import LineItem from './LineItem';

const Cart = ({ lineItems }) => (
  <div>
    <h2>Review Cart</h2>
    <ul>
      {lineItems.map((item) => (
        <LineItem item={item} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ lineItems }) => ({
  lineItems,
});

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
