import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md"

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c0c0c;
  height: 800px;
  z-index: 1;
  position: relative;
  padding: 0 30px;

  :before{
      content:"";
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background: linear-gradient(180deg, rgba(0,0,0,0.2)  0%, rgba(0,0,0,0.6) 100%),
      linear-gradient(180deg, rgba(0,0,0,0.2)  0%, transparent 100%);
      z-index:2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px 24px;
  max-width: 1200px;
`;
export const HeroH1 = styled.h1`
  font-size: 48px;
  text-align: center;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  @media screen and(max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
margin-top:24px;
font-size:24px;
color:#fff;
max-width: 600px;
text-align:center;

@media screen and(max-width: 768px){
    font-size:20px;
}

@media screen and (max-width: 480px){
    font-size:18px;
}
`;

export const HeroBtnWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:24px;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left:8px;
font-size: 20px;
`


export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size: 20px;
`
