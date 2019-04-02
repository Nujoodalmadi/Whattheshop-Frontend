import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import * as actionCreators from "../../store/actions";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    this.props.register(this.state, this.props.history);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={this.changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={this.changeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  register: (userData, history) =>
    dispatch(actionCreators.signup(userData, history))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
