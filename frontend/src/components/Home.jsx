import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { actions } from '../store';

import Categories from './Categories';
import Products from './Products';


const Main = styled.div`
grid-area: 2/1/3/4;
justify-self: stretch;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 80px auto;
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
