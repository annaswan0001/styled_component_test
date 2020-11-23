import styled from "styled-components";

export const InfoContainer = styled.section`
   color: #fff;
   background: ${({lightBg})=> lightBg ? "#f9f9f9":"#010606"};
   @media screen and (max-width: 768px){
        padding: 100px 0
   }
`;
export const InfoWrapper = styled.div`
    display:grid;
    width:100%;
    max-width:1100px;
    justify-content:center;
    height: 860px;
    z-index: 1;
    margin: auto;
    padding: 0 24px;
    `;
export const InfoRow = styled.div`
    display: grid;
    align-items: center;
    grid-auto-columns:minmax(auto,1fr);
    grid-template-areas:${({imgStart})=>imgStart ? `"col2 col1"` : `"col1 col2"` };
    @media screen and (max-width: 768px){
    grid-template-areas:${({imgStart})=>imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
    }
`;
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top:0px;
padding-bottom:60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size:1rem;
  line-height:1;
  font-weight:700px;
  letter-spacing:1.4px;
  text-transform:uppercase;
  margin-bottom:16px;
`;
export const Heading = styled.h1`
    margin-bottom:24px;
    font-size:3rem;
    line-height:1.1;
    font-weight:600;
    color: ${({lightText})=> lightText? "#fff" : "#000" };
    @media screen and(max-width: 480px){
        font-size:2rem;
    }
`;

export const Subtitle = styled.p`
   font-size: 1.2rem;
   line-height: 1.4rem;
   max-width:440px;
   margin-bottom:35px;
   color: ${({darkText}) => darkText? "#000" : "#fff"};
`;


export const BtnWrap = styled.div`
display: flex;
justify-content:flex-start;
`;

export const ImgWrap = styled.div`
max-width:555px;
height:100%;
`;

export const Img = styled.img`
width:100%;
margin: 0 0 10px 0;
padding-right:0;
`;


