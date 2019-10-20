// Package imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';

// Local imports
import { actions } from '../store';
import { testLineItems } from '../testData';

// Components
import Home from './Home';
import Nav from './Nav';
import Products from './Products';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';

/* App */
class _App extends Component {
  componentDidMount() {
    const { attemptSessionLogin, loadStoreData } = this.props;
    attemptSessionLogin().catch((ex) => console.log(ex));
    loadStoreData();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        <h1>sv-starter-pack</h1>
        <HashRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route
              path="/cart"
              render={() => <Cart lineItems={testLineItems} />}
            />
            <Route path="/login" component={Login} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggedIn: !!auth.id,
  auth,
});

const mapDispatchToProps = (dispatch) => ({
  attemptSessionLogin: () => dispatch(actions.attemptSessionLogin()),
  loadStoreData: () => {
    // fetch all necessary store data (not related to user)
    dispatch(actions.fetchProducts());
    dispatch(actions.fetchCategories());
  },
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_App);

export default App;
