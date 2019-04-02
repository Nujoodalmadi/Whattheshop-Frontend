import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import * as actionCreators from "../../store/actions";
import { Row, Col } from "reactstrap";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount = () => {
    this.props.checkForToken();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
    this.setState({
      username: "",
      password: ""
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          <Row form>
            <Col>
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

              <button
                type="submit"
                className="btn btn-light"
                style={{ color: "grey" }}
              >
                Login
              </button>
            </Col>
          </Row>
        </form>
      </div>
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
