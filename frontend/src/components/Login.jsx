import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

/* Input Validation */
function validate(email, password) {
  const errors = [];
  if ( email.trim().length * password.trim().length === 0){
    errors.push("Please enter your email & password")
  }

  if (password.length < 6 ) {
    errors.push("Password should be at least 6 characters long");
  }

  return errors;
}

/* Login */
class _Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };
    this.onChange = this.onChange.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
  }

  attemptLogin(ev) {
    ev.preventDefault();

    const credentials = { ...this.state };
    const error = validate(credentials.email, credentials.password);

    if(error.length>0){
      this.setState({error});
      return;
    }

    delete credentials.error;
    this.props
      .attemptLogin(credentials)
      .catch((ex) => this.setState({ error: 'bad credentials' }));
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  render() {
    const { error, email, password } = this.state;
    const { onChange, attemptLogin } = this;
    return (
      <form>
        {error && error.map((_error, idx) => <div className="error" key= {idx} >{_error}</div> )}
        <div>
          <label>Email</label>
          <input name="email" onChange={onChange} required/>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={onChange}
            required
          />
        </div>
        <button onClick={attemptLogin}>Log in</button>
        <a href="/auth/google">Log in with Google</a>
        <div>
          <a href="#">Forgot password</a>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  attemptLogin: (username) => dispatch(actions.attemptLogin(username, history)),
});

const Login = connect(
  null,
  mapDispatchToProps,
)(_Login);

export default Login;
