import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook  } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
//   FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMediaWrap,
  SocialMedia,
  SocialIconLink,
  WebSiteRights,
  SocialLogo,
  SocailIcons
} from "./FooterElements";
import {animateScroll as scroll} from 'react-scroll'
export default function Footer() {
    const toggleHome = () =>{
        scroll.scrollToTop();
      }
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinkItems>
            <FooterLinkTitle> About us </FooterLinkTitle>
            <FooterLink to="/sign-in">About us</FooterLink>
            <FooterLink to="/sign-in">How it works</FooterLink>
            <FooterLink to="/sign-in">TestEmotionals</FooterLink>
            <FooterLink to="/sign-in">Careers</FooterLink>
            <FooterLink to="/sign-in">Investors</FooterLink>
            <FooterLink to="/sign-in">Terms of service</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle> Contact us </FooterLinkTitle>
            <FooterLink to="/sign-in">About us</FooterLink>
            <FooterLink to="/sign-in">How it works</FooterLink>
            <FooterLink to="/sign-in">TestEmotionals</FooterLink>
            <FooterLink to="/sign-in">Careers</FooterLink>
            <FooterLink to="/sign-in">Investors</FooterLink>
            <FooterLink to="/sign-in">Terms of service</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle> Careers </FooterLinkTitle>
            <FooterLink to="/sign-in">About us</FooterLink>
            <FooterLink to="/sign-in">How it works</FooterLink>
            <FooterLink to="/sign-in">TestEmotionals</FooterLink>
            <FooterLink to="/sign-in">Careers</FooterLink>
            <FooterLink to="/sign-in">Investors</FooterLink>
            <FooterLink to="/sign-in">Terms of service</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle> Investors </FooterLinkTitle>
            <FooterLink to="/sign-in">About us</FooterLink>
            <FooterLink to="/sign-in">How it works</FooterLink>
            <FooterLink to="/sign-in">TestEmotionals</FooterLink>
            <FooterLink to="/sign-in">Careers</FooterLink>
            <FooterLink to="/sign-in">Investors</FooterLink>
            <FooterLink to="/sign-in">Terms of service</FooterLink>
          </FooterLinkItems>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome} to="/">dolla </SocialLogo>
            <WebSiteRights>
              All rights reserved @{new Date().getFullYear()}
            </WebSiteRights>
            <SocailIcons>
              
              <SocialIconLink href="/" target="_blank" arial-label="facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocailIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
}
