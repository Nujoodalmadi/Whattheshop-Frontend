import React, { Component } from "react";
import { connect } from "react-redux";

class index extends Component {
  componentDidMount() {}
  render() {
    const profile = this.props.profile;
    // console.log("TCL: index -> render -> profile", profile);
    return (
      <div className="alert alert-light" role="alert">
        {profile.user.username}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.profile.profile
  };
};
export default connect(mapStateToProps)(index);
