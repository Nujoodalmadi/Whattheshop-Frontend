import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import * as actionCreators from "../../store/actions";

class Register extends Component {
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
            <label>First name</label>
            <input
              name="first_name"
              type="text"
              className="form-control"
              placeholder="Enter your first name "
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              name="last_name"
              type="text"
              className="form-control"
              placeholder="Enter your last name "
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
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
