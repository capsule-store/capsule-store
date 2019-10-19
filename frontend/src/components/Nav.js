import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/* Navigator */
const _Nav = ({loggedIn}) => {
    return (
        <div>
            { loggedIn && <NavLink to = '/' exact>Home</NavLink>}
            { !loggedIn && <NavLink to = '/login'>Sign In</NavLink>}
            { !loggedIn && <NavLink to = '/register'>Sign Up</NavLink>}
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