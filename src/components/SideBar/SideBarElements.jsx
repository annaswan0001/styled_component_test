import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
export const SideBarContainer = styled.aside`
  background: #0d0d0d;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999;
  height: 100%;
  width: 100%;
  /* display: grid; */
  display:flex;
  justify-content:center;
  align-items: center;
  transition: 0.3s ease-in-out;
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")}; */
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  background: transparent;
  top: 1.2rem;
  right:1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline:none;
`;

export const SideBarWrapper = styled.div`
background: transparent;
   color:#fff;
`

export const SideBarMenu = styled.ul`
/* display:flex;
flex-direction:column; */
 display:grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6, 80px);
 text-align: center;
 @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 65px);
  }
`


export const SideBarLink = styled(LinkS)`
cursor: pointer;
outline:none;
text-decoration:none;
display:flex;
justify-content:center;
align-items:center;
transition:0.2s ease-in-out;
font-size:2rem;
color: #fff;
margin-bottom: 50px;
&:last-child {
    margin-bottom: 150px;
}
  &:hover{
     color:#01bf71;
     transition:0.2s ease-in-out;
  }
`


export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`

export const SideBarRoute = styled(LinkR)`
    border-radius: 50px;
    white-space: nowrap;
    background:#01bf71;
    padding:16px 64px;
    font-size:1.5rem;
    outline:none;
    border:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#010606;
    cursor: pointer;
    &:hover{
     background:#fff;
     transition:0.2s ease-in-out;
     color: #010606;
  }

`