import React, { Component } from "react";
import { DropdownItem } from "reactstrap";
class CategoryRow extends Component {
  render() {
    return <DropdownItem>{this.props.category.title}</DropdownItem>;
  }
}

export default CategoryRow;
