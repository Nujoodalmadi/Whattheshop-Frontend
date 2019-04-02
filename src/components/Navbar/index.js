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

export default class index extends React.Component {
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
            Spill The Tea
          </NavbarBrand>
          <i className="fas fa-leaf" style={{ color: "rgb(155, 166, 87)" }} />
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
