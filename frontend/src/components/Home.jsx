import React from "react";
import { connect } from "react-redux";
import { actions } from "../store";

/* Home */
const _Home = ({ auth, logout }) => {
  const { fullName} = auth;

  return (
    <div>
      Home - Welcome {fullName}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const Home = connect(
  ({ auth }) => {
    return { auth };
  },
  dispatch => {
    return {
      logout: () => dispatch(actions.logout())
    };
  }
)(_Home);

export default Home;