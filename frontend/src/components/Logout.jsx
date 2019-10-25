import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

/* Logout */
class _Logout extends Component {
  constructor(){
    super();
  }

  componentWillMount(){
    this.props.logout()
    this.props.history.push("/")
  }

  render(){
    return null;
  }

}

const mapStateToProps = ({ auth }, { history }) => ({ auth, history });

const mapDispatchToProps = (dispatch, {history}) => ({
  logout: () => dispatch(actions.logout(history)),
});

const Logout = connect(mapStateToProps, mapDispatchToProps)(_Logout);

export default Logout;
