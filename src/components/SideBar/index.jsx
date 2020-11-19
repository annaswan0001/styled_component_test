import React from "react";
import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SideBarElements";

let menu = [
  { path: "about", text: "About" },
  { path: "discover", text: "Discover" },
  { path: "services", text: "Services" },
  { path: "sign-up", text: "Sign up" },
];

export default function SideBar({ toggle, isOpen }) {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            {menu.map((el) => {
              return (
                <SideBarLink onClick={toggle} key={el.path} to={el.path}>
                  {el.text}
                </SideBarLink>
              );
            })}
          </SideBarMenu>
          <SideBtnWrap>
            <SideBarRoute to="/sign-in">Sign in</SideBarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
}
