// Package imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';

// Local imports
import { actions } from '../store';

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
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" render={() => <ProductDetail />} />
            <Route path="/cart" component={Cart} />
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
    dispatch(actions.fetchProducts());
    dispatch(actions.fetchCategories());

    // Only works if a userId is passed in manually to fetchCart()
    dispatch(actions.fetchCart());
  },
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_App);

export default App;
