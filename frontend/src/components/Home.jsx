import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

import Categories from './Categories';

/* Home */
const _Home = ({ auth, logout }) => {
  return (
    <div>
      {
        (auth.id)? (<button onClick={logout}>Logout</button>) : ''
      }
      <Categories />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = (dispatch, {history}) => ({
  logout: () => dispatch(actions.logout(history)),
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Home);

export default Home;
