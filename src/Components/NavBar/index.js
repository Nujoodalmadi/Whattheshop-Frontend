import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import CategoryRow from "../Category/CategoryRow";

class index extends React.Component {
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
        <Navbar
          color="light"
          light
          expand="md"
          className="navbar navbar-default navbar-static-top"
        >
          <NavbarBrand
            href="/"
            style={{
              fontFamily: "arial",
              color: "rgb(89, 68, 51)",
              fontWeight: "bold"
            }}
          >
            Spill The Tea{" "}
            <i className="fas fa-leaf" style={{ color: "rgb(155, 166, 87)" }} />
          </NavbarBrand>

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
          </Collapse>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">
                  Cart{" "}
                  <i
                    className="fas fa-shopping-cart"
                    style={{ color: "rgb(155, 166, 87)" }}
                  />
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i
                    className="far fa-user"
                    style={{ color: "rgb(155, 166, 87)" }}
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>My Profile</DropdownItem>
                  <DropdownItem>My Orders</DropdownItem>

                  <DropdownItem>Log Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.products.categories
});
const mapDispatchToProps = dispatch => ({
  fetchCatogries: () => dispatch(actionCreators.fetchCatogries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
