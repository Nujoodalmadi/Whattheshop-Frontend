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
import CategoryRow from "../Category/CategoryRow";

class index extends Component {
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

  componentDidMount() {
    this.props.fetchCatogries();
  }
  render() {
    const categoryRow = this.props.categories.map(category => (
      <CategoryRow key={category.id} category={category} />
    ));

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <NavLink
              style={{
                fontFamily: "Helvetica Neue",
                color: "#778899",
                fontSize: "25px"
              }}
              to="/home"
            >
              Saudi Tea Shop
            </NavLink>
          </NavbarBrand>
          <i className="fas fa-leaf" style={{ color: "rgb(155, 166, 87)" }} />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="d-flex flex-row" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Categories
                </DropdownToggle>
                <DropdownMenu right>
                  {categoryRow}
                  <DropdownItem>My Orders</DropdownItem>

                  <DropdownItem>Log Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
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
    user: state.authReducer.user,
    categories: state.products.categories
  };
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout()),
  fetchCatogries: () => dispatch(actionCreators.fetchCatogries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
