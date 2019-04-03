import React, { Component } from "react";
import * as actionCreators from "../../store/actions/index";

import { Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";

class Index extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand
            href="/"
            style={{
              fontFamily: "arial",
              color: "rgb(89, 68, 51)",
              fontWeight: "bold"
            }}
          >

            Saudi Tea Shop

          </NavbarBrand>
          <i className="fas fa-leaf" style={{ color: "rgb(155, 166, 87)" }} />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-nav ml-auto" navbar>
              <NavItem className="ml-auto p-2">
                <NavLink to="/cart">
                  <i
                    className="fas fa-shopping-cart p-2 mt-1"
                    style={{ color: "rgb(155, 166, 87)" }}
                  />
                </NavLink>
              </NavItem>

              {this.props.user ? (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <i
                      className="far fa-user p-2 mt-1"
                      style={{ color: "rgb(155, 166, 87)" }}
                    />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link to="/profile">My Profile</Link>
                    </DropdownItem>
                    <DropdownItem>My Orders</DropdownItem>

                    <DropdownItem onClick={this.props.logout}>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <div className="d-flex flex-row">
                  <div className="p-2">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to="/register" className="nav-link">
                      Signup
                    </Link>
                  </div>
                </div>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
