// React
import React, { Component } from "react";
// Action Functions
import * as actionCreators from "../../store/actions";
// Redux
import { connect } from "react-redux";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.register(this.state, this.props.history);
  };

  render() {
    return (
      <div
        className="d-md-flex justify-content-center w-100 p-12  "
        style={{ height: "500px" }}
      >
        <form
          className="  align-self-baseline mt-5  "
          style={{ width: "500px" }}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Enter username"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Frist Name</label>
            <input
              name="first_name"
              type="text"
              className="form-control"
              placeholder="Enter You First Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              name="last_name"
              type="text"
              className="form-control"
              placeholder="Enter You Last Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="Enter You Email"
              onChange={this.handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-light"
            style={{ color: "grey" }}
          >
            Signup
          </button>
        </form>
      </div>
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
