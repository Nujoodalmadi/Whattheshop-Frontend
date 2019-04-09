import React, { Component } from "react";
import * as actionCreators from "../../store/actions/index";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class index extends Component {
  render() {
    return (
      <div>
        <Link to="/profile/history">
          <button
            onClick={() =>
              this.props.fetchOrdersHistory(this.props.user.user_id)
            }
          >
            view history
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  fetchOrdersHistory: userID =>
    dispatch(actionCreators.fetchOrdersHistory(userID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);

//action that fetches and redirects..
