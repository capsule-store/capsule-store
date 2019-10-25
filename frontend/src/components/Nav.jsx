import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../store';

/* Navigator */
const _Nav = ({ loggedIn, auth }) => (
  <div>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/cart">Cart</NavLink>
    <NavLink to={(loggedIn)? "/logout" : "/login"}>{(loggedIn)? 'Sign out' : 'Sign in'}</NavLink>
  </div>
);

const mapStateToProps = ({ auth }) => ({
  loggedIn: !!auth.id,
});


const Nav = connect(mapStateToProps)(_Nav);

export default Nav;
