import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import Icon from './Icon';

/* Navigator */
const StyledNav = styled.div`
  grid-area: 1/1/2/4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 320px;
  flex-grow: auto;
  display: flex;
  justify-content: flex-start;
`;

const Right = styled.div`
  width: 320px;
  flex-grow: auto;
  flex-wrap:nowrap;
  justify-content: flex-end;
  display: flex;

`;

const Home = styled.h3`
  height: 1.5rem;
  margin: 0;
  flex-grow: 1;
  align-self: center;
  color: #000;
`;

const User = styled.div`
  margin: 0 2rem;
  color: #000;
  vertical-align: center;
  height: 1.5rem;
`;

// const Promo = styled.div`
//   font-size: 0.8rem;
//   font-weight: 400;
//   height: 1.5rem;
//   line-height: 1.5rem;
//   display: block;
//   margin: 0 2rem;
// `;

const Product = styled(Icon)`
  background-image: url(../assets/images/icon/menu.svg);
  background-repeat: no-repeat;
`;
const Search = styled(Icon)`
  background-image: url(../assets/images/icon/search.svg);
  background-repeat: no-repeat;
  margin: 0 2rem;
`;
const Cart = styled(Icon)`
  width: 4rem;
  display:flex;
`;

const CartIcon = styled(Icon)`
  width: 3rem;
  background-image: url(../assets/images/icon/cart.svg);
  background-repeat: no-repeat;
`;

const ItemCount = styled.h5`
  width: 2rem;
  height: 1.5rem;
  line-height: 1.5rem;
`;

const Btn = styled.p`
display: inline;
padding: 0 1rem;

`;

const Nav = ({ loggedIn, isAdmin, cart }) => {
  let itemCount = 0;
  if (cart) {
    itemCount = cart.reduce((t, item) => t + item.quantity, 0);
  }

  return (
    <StyledNav>
      <Left>
        <NavLink to="/products">
          <Product />
        </NavLink>
        <NavLink to="/search">
          <Search />
        </NavLink>
      </Left>

      <NavLink to="/" exact>
        <Home>Sillicon Valley Starter Pack</Home>
      </NavLink>

      <Right>
        <User>
          {isAdmin ? <NavLink to="/admin"><Btn>Admin</Btn></NavLink> : ''}
          {loggedIn ? '' : <NavLink to="/signup"><Btn>Sign Up</Btn></NavLink>}
          <NavLink to={loggedIn ? '/logout' : '/login'}>
            {loggedIn ? <Btn>Sign Out</Btn> : <Btn>Sign In</Btn>}
          </NavLink>
        </User>
        <NavLink to="/cart">
          <Cart>
            <CartIcon />
            <ItemCount>{itemCount}</ItemCount>
          </Cart>
        </NavLink>
      </Right>
    </StyledNav>
  );
};

const mapStateToProps = ({ auth, cart }) => ({
  loggedIn: !!auth.id,
  isAdmin: auth.isAdmin,
  cart,
});

const ConnectedNav = connect(mapStateToProps)(Nav);

export default ConnectedNav;
