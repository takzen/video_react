import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 1;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  color: white;
  font-size: 1.2rem;
`;

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem>Strona Główna</NavItem>
        <NavItem>O Nas</NavItem>
        <NavItem>Kontakt</NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
