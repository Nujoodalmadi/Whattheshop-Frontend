import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import * as actionCreators from "../../store/actions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount = () => {
    this.props.checkForToken();
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          Login
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (userData, history) =>
    dispatch(actionCreators.login(userData, history)),

  checkForToken: history =>
    dispatch(actionCreators.checkForExpiredToken(history))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
