// Package imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
 HashRouter, Route, Switch, Redirect 
} from 'react-router-dom';

// Local imports
import styled from 'styled-components';
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
import BrandDetail from './BrandDetail';
import Categories from './Categories';
import Admin from './Admin';
import CreateProduct from './CreateProduct';

const Main = styled.div`
  width: 100hv;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 3rem auto 480px;
  overflow-x: hidden;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  margin: 40px;
`;

class _App extends Component {
  componentDidUpdate() {
    const { loadCart, loggedIn, loadStoreData } = this.props;
    loadStoreData();
    loadCart(loggedIn);
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
    loadCart(loggedIn);
  }

  render() {
    return (
      <Main>
        <HashRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Register} />
            <Route path="/brands/:id" component={BrandDetail} />
            <Route exact path="/admin" component={Admin} />
            <Route path="/admin/create-product" component={CreateProduct} />
          </Switch>
          <Brands />
        </HashRouter>
      </Main>
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
  loadCart: (loggedIn) => {
    dispatch(actions.fetchCart(loggedIn));
  },
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_App);

export default App;
