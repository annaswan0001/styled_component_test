import React from "react";
import { SideBarContainer, CloseIcon,Icon,SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute } from 
"./SideBarElements";

export default function SideBar() {
  return (
    <>
      <SideBarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
              <SideBarLink to="about">About</SideBarLink>
              <SideBarLink to="discover">Discover</SideBarLink>
              <SideBarLink to="services">Services</SideBarLink>
              <SideBarLink to="sign up">Sign up</SideBarLink>
          </SideBarMenu>
          <SideBtnWrap>
              <SideBarRoute to="/sign-in">Sign in</SideBarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
}
