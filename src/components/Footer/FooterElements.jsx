import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
background-color: #101522;
`

export const FooterWrapper = styled.div`
padding:28px 48px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width:1100px;
margin: 0 auto;
`

export const FooterLinksContainer =  styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
@media screen and (max-width: 820px){
    padding-top:32px;
}
`

export const FooterLinkItems =  styled.div`
display:flex;
flex-direction:column;
width:160px;
margin:16px;
box-sizing:border-box;
color:#fff;

@media screen and (max-width: 420px){
    margin: 0px;
    padding:10px;
    width:100%;
}`

export const FooterLinkTitle =  styled.h1`
font-size: 0.9rem;
margin-bottom:16px;
`

export const FooterLink =  styled(Link)`
color:#fff;
text-decoration:none;
margin-bottom:0.5rem;
font-size:0.8rem;

&:hover{
    color: #01bf71;
    transition:0.3s ease-in-out;
}
`


export const SocialMedia =  styled(Link)`
width:100%;
`

export const SocialMediaWrap =  styled(Link)`
display:flex;
justify-content:space-between;
align-items:center;
padding:40px auto 0 auto;
@media screen and (max-width: 820px){
    flex-direction:column;
}`



export const SocialLogo =  styled(Link)`
color:"#fff";
justify-self:start;
cursor: pointer;;
text-decoration:none;
font-size:1.5rem;
margin-bottom:16px;
display: flex;
font-weight:bold;
align-items:center;
`


export const Web =  styled.small`
margin-bottom:16px;
color:#fff;
`


export const WebSiteRights =  styled.small`
margin-bottom:16px;
color:#fff;
text-decoration:none;
`

export const SocailIcons =  styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:240px;
`


export const SocialIconLink =  styled.a`
color:#fff;
font-size:1.5rem;
`