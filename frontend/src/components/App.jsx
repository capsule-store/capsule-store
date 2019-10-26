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
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import Brands from './Brands';
import Categories from './Categories';

class _App extends Component {
  componentDidUpdate() {
    const { loadCart, loggedIn } = this.props;

    if (loggedIn) {
      loadCart();
    }
  }

  componentDidMount() {
    const {
      loggedIn,
      attemptSessionLogin,
      loadStoreData,
      loadCart,
    } = this.props;

    attemptSessionLogin().catch((ex) => console.log(ex));
    loadStoreData();

    if (loggedIn) {
      loadCart();
    }
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>
          <Brands />
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
    dispatch(actions.fetchBrands());
  },
  loadCart: () => {
    dispatch(actions.fetchCart());
  },
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_App);

export default App;
