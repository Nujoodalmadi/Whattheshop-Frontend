import React, { Component } from "react";
import * as actionCreators from "../../store/actions/index";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import img from "../../images/icons8-tea-100.png";

class profile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    const profile = this.props.profile;
    if (this.props.profile) {
      return (
        <div className="try">
          <div
            className="card mb-3"
            style={{ height: "290px", width: "400px" }}
          >
            <br />
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={img} className="tea" />
              </div>
              <div class="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    {profile.user.username}
                  </h5>
                  <div className="card-text text-center">
                    {profile.user.first_name} {profile.user.last_name}
                  </div>
                  <div className="card-text text-center">
                    {profile.user.email}
                  </div>
                  <div className="card-text text-center">{profile.city}</div>
                  <div className="card-text text-center">
                    {profile.district}
                  </div>
                  <div className="card-text text-center">
                    {profile.zip_code}
                  </div>
                  <br />
                  <div className="row">
                    <Link to="/update">
                      <button
                        className="btn btn-light "
                        style={{ color: "grey", margin: "10px" }}
                      >
                        Update
                      </button>
                    </Link>
                    <Link to="/profile/history">
                      <button
                        className="btn btn-light "
                        style={{ color: "grey", margin: "10px" }}
                        onClick={() =>
                          this.props.fetchOrdersHistory(this.props.user.user_id)
                        }
                      >
                        view history
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>no profile</div>;
    }
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  profile: state.profile.profile
});

const mapDispatchToProps = dispatch => ({
  fetchOrdersHistory: userID =>
    dispatch(actionCreators.fetchOrdersHistory(userID)),
  fetchProfile: () => dispatch(actionCreators.fetchProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(profile);
