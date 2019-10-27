import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { actions } from '../store';

import Categories from './Categories';
import Products from './Products';


const Main = styled.div`
max-width: 1440px;
display: flex;
overflow-x: hidden;
`;

/* Home */
const _Home = ({ auth, logout }) => (
  <Main>
    <Categories />
    <Products />
  </Main>
);

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = (dispatch, { history }) => ({
  logout: () => dispatch(actions.logout(history)),
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Home);

export default Home;
