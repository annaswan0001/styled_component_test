import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLink,
  NavMenu,
  NavBtnLink,
  NavBtn,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

let menu = [
  { path: "about", text: "About" },
  { path: "discover", text: "Discover" },
  { path: "services", text: "Services" },
  { path: "sign-up", text: "Sign up" },
];

export default function Navbar({ toggle, isOpen }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {menu.map((el) => {
              return (
                <NavItem  key={el.path}>
                  <NavLink  to={el.path}>
                    {el.text}
                  </NavLink>
                </NavItem>
              );
            })}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}
