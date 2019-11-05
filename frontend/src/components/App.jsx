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
import Logout from './Logout'
import Register from './Register';
import Brands from './Brands';
import Categories from './Categories';
/* App */
class _App extends Component {
  componentDidMount() {
    const { attemptSessionLogin, loadStoreData } = this.props;
    attemptSessionLogin().catch((ex) => console.log(ex));
    loadStoreData();
  }

  render() {
    let { loggedIn } = this.props;

    console.log(location.href);

    if (location.href.includes('?token=')) {
      const token = location.href.split('?token=')[1];
      loggedIn = (!!token)? true : loggedIn;
      
    return (
      <div>
        <h1>sv-starter-pack</h1>
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

const mapStateToProps = ({ auth }, {location}) => ({
  loggedIn: !!auth.id,
  auth,
  location,
});

const mapDispatchToProps = (dispatch) => ({
  attemptSessionLogin: () => dispatch(actions.attemptSessionLogin()),
  loadStoreData: () => {
    dispatch(actions.fetchProducts());
    dispatch(actions.fetchCategories());
    dispatch(actions.fetchBrands());
    dispatch(actions.fetchCart());
  },
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_App);

export default App;
