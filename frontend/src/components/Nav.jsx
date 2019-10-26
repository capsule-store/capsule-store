import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

/* Navigator */
const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const Left = styled.div`
  flex-grow: auto;
  display: flex;
  align-self: flex-start;
`;

const Right = styled.div`
  flex-grow: auto;
  display: flex;
  align-self: flex-end;
`;

const Home = styled.h3`
  display: inline-block;
  height: 1.5rem;
  margin: 0;
  flex-grow: 1;
  align-self: center;
  color: #000;
`;

const Icon = styled.div`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
`;

const User = styled.div`
  display: block;
  margin: 0 2rem;
  color: #000;
`;

const Promo = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  height: 1.5rem;
  line-height: 1.5rem;
  display: block;
  margin: 0 2rem;
`;

const Product = styled(Icon)`
  background-image: url(../assets/images/icon/menu.svg);
`;
const Search = styled(Icon)`
  background-image: url(../assets/images/icon/search.svg);
  margin: 0 2rem;
`;
const Cart = styled(Icon)`
  background-image: url(../assets/images/icon/cart.svg);
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const _Nav = ({ loggedIn }) => (
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
      {/* <Promo>FREE SHIPPING –– on all orders over $50*</Promo> */}
      <User>
        <NavLink to={loggedIn ? '/logout' : '/login'}>
          {loggedIn ? 'Sign out' : 'Sign in'}
        </NavLink>
      </User>
      <NavLink to="/cart">
        <Cart />
      </NavLink>
    </Right>
  </StyledNav>
);

const mapStateToProps = ({ auth }) => ({
  loggedIn: !!auth.id,
});

const Nav = connect(mapStateToProps)(_Nav);

export default Nav;
