import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { actions } from '../store';

const Warning = styled.div`
color = red;
`;

const Button = styled.button`
  color: balck;
  width: 150px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: lightgrey;
  align-self: right;
  padding: 5px;
  margin: 5px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-even;
`;

/* Input Validation */
function validate(email, password) {
  const errors = [];
  if (email.trim().length * password.trim().length === 0) {
    errors.push('Please enter your email & password');
  }

  if (password.length < 6) {
    errors.push('Password should be at least 6 characters long');
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
      error: [],
    };
    this.onChange = this.onChange.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  attemptLogin(ev) {
    ev.preventDefault();
    this.setState({ error: [] });

    const credentials = { ...this.state };
    const error = validate(credentials.email, credentials.password);

    if (error.length > 0) {
      this.setState({ error });
      return;
    }

    delete credentials.error;
    this.props.attemptLogin(credentials).catch((ex) => {
      this.setState({ error: [ex.response.data.message] });
    });
  }

  render() {
    const { error, email, password } = this.state;
    const { onChange, attemptLogin } = this;
    return (
      <form>
        {error
          && error.map((_error, idx) => (
            <Warning className="error" key={idx}>
              {_error}
            </Warning>
          ))}
        <Input>
          <label>Email</label>
          <input name="email" onChange={onChange} required />
        </Input>
        <Input>
          <label>Password</label>
          <input type="password" name="password" onChange={onChange} required />
        </Input>
        <Button type="button" onClick={attemptLogin}>
          Log in
        </Button>
        <Input>
          <a href="/auth/google">Log in with Google</a>
        </Input>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  attemptLogin: (credentials) => dispatch(actions.attemptLogin(credentials, history)),
});

const Login = connect(
  null,
  mapDispatchToProps,
)(_Login);

export default Login;
