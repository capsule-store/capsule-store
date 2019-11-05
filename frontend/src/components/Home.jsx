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
const Home_comp = ({ auth, logout, location }) => {
  // const currentCategory = (location.pathname).slice(1).replace('&', ' ').split(' ').filter((item) => item !== '')
  // .join('');
  const currentCategory = (location.pathname).slice(1);

  return (
    <Main>
      <Categories />
      <Products currentCategory={currentCategory} />
    </Main>
  );
};

const mapStateToProps = ({ auth }, { history }) => ({ auth, location: history.location });

const mapDispatchToProps = (dispatch, { history }) => ({
  logout: () => dispatch(actions.logout(history)),
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home_comp);

export default Home;
