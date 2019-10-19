import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* Navigator */
const _Nav = ({loggedIn}) => {
    return (
        <div>
            <NavLink to = '/' exact>Home</NavLink>
            <NavLink to = '/brand' >Brand</NavLink>
            <NavLink to = '/category'>Category</NavLink>
            <NavLink to = '/product'>Product</NavLink>
            { !loggedIn && <NavLink to = '/login'>Sign In</NavLink>}
            <NavLink to = '/cart'>Cart</NavLink>
        </div>
    )
}

const Nav = connect(
    ({ auth })=> {
      return {
        loggedIn: !!auth.id
      };
    }
)(_Nav);

export default Nav
