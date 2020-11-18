import React from "react";
import { Nav, NavbarContainer, NavLogo ,MobileIcon, NavItem, NavLink, NavMenu, NavBtnLink, NavBtn} from "./NavbarElements";
import {FaBars} from 'react-icons/fa'

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo> 
          <MobileIcon> 
            <FaBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLink to="about">About</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="discover">Discover</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="services">Services</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="sign up">Sign up</NavLink>
              </NavItem>
            
          </NavMenu>
          <NavBtn>
                 <NavBtnLink to="/sign-in">Sign in</NavBtnLink>
              </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}
