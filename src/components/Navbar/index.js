import React, {useState, useEffect}from "react";
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
import {animateScroll as scroll} from 'react-scroll'

let menu = [
  { path: "about", text: "About" },

  { path: "discover", text: "Discover" },
  { path: "services", text: "Services" },
  { path: "projects", text: "Projects" },

];



export default function Navbar({ toggle, isOpen }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = ()=>{
    if(window.scrollY >=80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav )
  }, [])


  const toggleHome = () =>{
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {menu.map((el) => {
              return (
                <NavItem  key={el.path}>
                  <NavLink activeClass="active" smooth={true} duration={500} spy={true} exact={true} offset={0} to={el.path}>
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
