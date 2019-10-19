import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Register from './Register'
import Nav from './Nav'
import { actions } from './store';


/* App */
class _App extends Component{
    componentDidMount(){
      this.props.attemptSessionLogin()
        .catch(ex => console.log(ex));
    }
    render(){
      const { loggedIn } = this.props;
      return (
        <div>
          <h1>sv-starter-pack</h1>
          <HashRouter>
            <Nav />
            <Switch>
              <Route path='/register' component= { Register } exact/>
              {
                loggedIn && (<Route path='/' component= { Home } exact/>)
              }
              {
                !loggedIn && (<Route path='/login' component= { Login } exact/>)
              }
              {
                !loggedIn && <Redirect to='/login' />
              }
              {
                loggedIn && <Redirect to='/' />
              }
            </Switch>
          </HashRouter>
        </div>
      );
    }
  };
  
  const App = connect(
      ({ auth })=> {
        return {
          loggedIn: !!auth.id
        };
      },
      (dispatch)=> {
        return {
          attemptSessionLogin: ()=> dispatch(actions.attemptSessionLogin())
        };
      }
  )(_App);

  export default App