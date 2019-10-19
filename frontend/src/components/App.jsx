import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';
import { actions } from '../store';

import Nav from './Nav';
import Products from './Products';
import User from './User';
import Cart from './Cart';



class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
  export default App;


// class App extends Component {
//   render() {
//     return (
//       <h1>App</h1>
//       <HashRouter>
//         <Route component={Nav} />
//         <Switch>
//           <Route path="/" exact component={Products} />
//           <Route path="/user/:id?" component={User} />
//           <Route path="/cart/:id?" component={Cart} />
//           <Redirect to="/" />
//         </Switch>
//       </HashRouter>
//     );
//   }
// }

// export default App;
