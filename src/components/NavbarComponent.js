import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="black" light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/Logging">Logging</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Analitik">Analitik</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Inventory">Daftar Inventory</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  <FontAwesomeIcon icon={faUser} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/Profil">Profil</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/logout">Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
