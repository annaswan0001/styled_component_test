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
  /* margin-top:-80px; */
  z-index: 10;
  font-size: 1rem;
  background-color: #000;

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
  color: red;
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
