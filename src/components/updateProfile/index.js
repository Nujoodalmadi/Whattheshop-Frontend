// React
import React, { Component } from "react";
// Action Functions
import * as actionCreators from "../../store/actions";
// Redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class UpdateProfile extends Component {
  state = {
    user: { first_name: "", last_name: "", email: "" },
    city: "",
    district: "",
    zip_code: 0
  };
  componentDidMount() {
    // this.props.profile.user && this.props.fetchProfile();
    this.props.profile &&
      this.setState({
        user: {
          first_name: this.props.profile.user.first_name,
          last_name: this.props.profile.user.last_name,
          email: this.props.profile.user.email
        },
        city: this.props.profile.city,
        district: this.props.profile.district,
        zip_code: this.props.profile.zip_code
      });
  }

  componentDidUpdate(prevState) {
    if (this.state === prevState) {
      this.setState({
        user: {
          first_name: this.props.profile.user.first_name,
          last_name: this.props.profile.user.last_name,
          email: this.props.profile.user.email
        },
        city: this.props.profile.city,
        district: this.props.profile.district,
        zip_code: this.props.profile.zip_code
      });
    }
    this.props.profile.user && this.props.fetchProfile();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChangeuser = event => {
    let userState = this.state.user;
    this.setState({
      user: { ...userState, [event.target.name]: event.target.value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateProfile(this.state);
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
            <label>Frist Name</label>
            <input
              name="first_name"
              type="text"
              value={this.state.user.first_name}
              className="form-control"
              onChange={this.handleChangeuser}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              name="last_name"
              type="text"
              className="form-control"
              value={this.state.user.last_name}
              onChange={this.handleChangeuser}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              value={this.state.user.email}
              onChange={this.handleChangeuser}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              name="city"
              type="text"
              className="form-control"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>District</label>
            <input
              name="district"
              type="text"
              className="form-control"
              value={this.state.district}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Zip code</label>
            <input
              name="zip_code"
              type="number"
              className="form-control"
              value={this.state.zip_code}
              onChange={this.handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-light"
            style={{ color: "grey" }}
          >
            Update
          </button>

          <Link to="/profile">
            <button
              className="btn btn-light "
              style={{ color: "grey", margin: "10px" }}
            >
              back
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile.profile
});

const mapDispatchToProps = dispatch => ({
  updateProfile: new_profile =>
    dispatch(actionCreators.updateProfile(new_profile)),
  fetchProfile: () => dispatch(actionCreators.fetchProfile())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);
