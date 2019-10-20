import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

import Categories from './Categories';

/* Home */
const _Home = ({ auth, logout }) => {
  const { fullName } = auth;
  return (
    <div>
      <Categories />
      Home - Welcome
      {' '}
      {fullName}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = ({ dispatch }) => ({
  logout: () => dispatch(actions.logout()),
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Home);

export default Home;
