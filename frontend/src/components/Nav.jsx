import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* Navigator */
const _Nav = ({loggedIn}) => {
    return (
        <div>
            { loggedIn && <NavLink to = '/' exact>Home</NavLink>}
            { loggedIn && <NavLink to = '/cart'>Cart</NavLink>}
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
