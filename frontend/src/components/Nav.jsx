import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ products, categories, brands }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/brands">Brand</Link>
    <Link to="/products/:id?">Product</Link>
  </nav>
);

const mapStateToProps = ({ products, categories, brands }) => ({
  products,
  categories,
  brands,
});

export default connect(mapStateToProps)(Nav);
