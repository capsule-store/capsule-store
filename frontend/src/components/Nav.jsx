import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ products, cart, user }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/user">User</Link>
  </nav>
);

const mapStateToProps = ({ products, cart, user }) => ({
  products,
  cart,
  user,
});

export default connect(mapStateToProps)(Nav);
