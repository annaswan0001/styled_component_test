import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 80px;
  margin-top:-80px;
  z-index: 10;
  font-size: 1rem;
  background-color: rgba(0,0,0,0.6);

  @media screen and (max-width: 960px) {
    transition: 08s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  text-decoration: none;
  justify-self: flex-start;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #ffff;
  font-weight: bold;
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    /* display: flex; */
    align-items:center;
    position: absolute;
    display:block;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: -22px;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
  padding: 0 1rem;
  color:#fff;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;


export const NavBtn = styled.nav`
  display:flex;
  align-items:center;

  @media screen and (max-width: 768){
      display:none
  }
`


export const NavBtnLink = styled(LinkR)`
    cursor: pointer;
    font-size: 1rem;
    white-space: nowrap;
    color: #010606;
    outline:none;
    text-decoration: none;
    border:none;
    border-radius: 50px;
    white-space:nowrap;
    color:#010606;
    background-color:#01bf71;
    padding:10px 22px;
    transition: all 0.2s ease-in-out;
     &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #fff;
        color: #010606;
     }
     @media screen and (max-width: 768px) {
    display: none;
  }
`