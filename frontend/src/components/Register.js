import React from "react";
import { connect } from "react-redux";
import { actions } from "../store";

/* Register */

/* Input Validation */
function validate(firstName, lastName, password, rePassword) {
  const errors = [];
  if ( firstName.trim().length * lastName.trim().length * streetAddress1.trim().length * city.trim().length === 0){
    errors.push("None of the fields should be empty.")
  }

  if ( password !== rePassword ) {
    errors.push("Password should match");
  }

  if (password.length < 6 || rePassword.length < 6) {
    errors.push("Password should be at least 6 characters long");
  }

  if(!ckbox_terms) {
    errors.push("You must agree to the terms.")
  }

  return errors;
}

/* User Register */
class _Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      error: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {

    const value = ev.target.value;

    this.setState({
      [ev.target.id]: value
    });
    
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.setState({error: ""});

    const {firstName, lastName, email, password, rePassword } = this.state;

    const error = validate(firstName, lastName, password, rePassword);

    if(error.length>0){
      this.setState({error});
      return;
    }

    const user = { firstName, lastName, email, password, role: 'customer'}
    this.props
      .register(user)
      .then(() => this.props.history.push("/login"))
      .catch(ex => {
        console.log(ex.response)
        // this.setState({ error: [ex.response.data.message]});
      });
  }

  render() {
    const {firstName,lastName, email, password, rePassword,error} = this.state;

    return (
      <div className="form-group">
        <form id="signup_form" onSubmit={this.handleSubmit}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
              placeholder="Enter First Name"
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={this.handleChange}
              placeholder="Enter Last Name"
              required
            />
          </div>
          <div>
            <label>Email address</label>
            <input
              type="email"
              id="email"
              onChange={ev => this.handleChange(ev)}
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div>
            <label>Password (Min. 6 characters)</label>
            <input
              type="password"
              id="password"
              onChange={ev => this.handleChange(ev)
              }
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              id="rePassword"
              onChange={ev => this.handleChange(ev)}
              placeholder="Re-Enter Your Password"
              required
            />
          </div>
          {error && error.map((_error, idx) => <div className="error" key= {idx} >{_error}</div> )}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: user => dispatch(actions.register(user))
  };
};

const Register = connect(
  null,
  mapDispatchToProps
)(_Register);

export default Register;