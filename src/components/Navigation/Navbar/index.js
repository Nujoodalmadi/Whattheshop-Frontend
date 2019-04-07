// React
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

// Redux
import { connect } from "react-redux";
// Action Functions
import * as actionCreators from "../../../store/actions";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null
    };
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

  handleLogout = async () => {
    await this.props.emptyCart();
    this.props.logout();
  };

  render() {
    const mapTotal = this.props.cart.map(item => item.quantity);
    const categoryRow = this.props.categories.map(category => (
      <Link
        className="dropdown-item"
        to={`/products/${category.title.replace(/\s/g, "").toLowerCase()}`}
        onClick={() => this.setState({ category: category.title })}
        key={category.id}
      >
        {category.title}
      </Link>
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
              <div className="dropdown ml-2">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "rgb(155, 166, 87)" }}
                >
                  {this.state.category
                    ? this.state.category
                    : "Choose a Category"}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    className="dropdown-item"
                    to={`/products`}
                    onClick={() => this.setState({ category: "All" })}
                  >
                    All
                  </Link>
                  {categoryRow}
                </div>
              </div>
            </Nav>
            <Nav className="navbar-nav ml-auto" navbar>
              <NavItem className="ml-auto p-2">
                <NavLink to="/cart">
                  <i
                    className="fas fa-shopping-cart p-2 mt-1"
                    style={{ color: "rgb(155, 166, 87)" }}
                  />
                  <text style={{ color: "rgb(205,92,92)" }}>
                    {mapTotal.reduce((accumulator, currentValue) => {
                      return accumulator + currentValue;
                    }, 0)}
                  </text>
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

                    <DropdownItem onClick={this.handleLogout}>
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
    products: state.products.products,
    categories: state.products.categories,
    cart: state.cartReducer.cart
  };
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout()),
  emptyCart: () => dispatch(actionCreators.emptyCart()),
  fetchCatogries: () => dispatch(actionCreators.fetchCatogries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
