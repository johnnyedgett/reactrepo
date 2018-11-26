import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

// Navbar Component
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(evt) {
    evt.preventDefault();
    this.props.onClickHandler(this.refs.searchBox.value);
  }
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
        <Navbar.Brand><a href="#"> Johnny Edgett </a></Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default NavBar