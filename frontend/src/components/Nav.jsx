import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* Navigator */
const _Nav = ({ loggedIn }) => (
  <div>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/products">Products</NavLink>
    {!loggedIn && <NavLink to="/login">Sign In</NavLink>}
    <NavLink to="/cart">Cart</NavLink>
  </div>
);

const mapStateToProps = ({ auth }) => ({
  loggedIn: !!auth.id,
});

const Nav = connect(mapStateToProps)(_Nav);

export default Nav;
