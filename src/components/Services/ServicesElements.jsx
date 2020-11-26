import styled from 'styled-components'


export const ServiceContainer = styled.section`
    display:flex;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    height:800px;
    background: #010606;
    @media screen and (max-width:768px){
      height:1110px
    }
    @media screen and (max-width:480px){
      height:1300px
    }
`

export const ServiceWrapper = styled.div`
    max-width:1100px;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:1rem;
    padding: 0 3rem;
    @media screen and (max-width:1400px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
`

export const ServiceCard = styled.div`
   max-height: 340px;
   display:flex;
   flex-direction:column;
   justify-content:flex-start;
   align-items:center;
   background:#fff;
   border-radius:10px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.2);
   padding:30px;
   transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        transform:scale(1.02)
    }

`

export const ServiceIcon = styled.img`
height:160px;
width:160px;
margin-bottom:10px;
`
export const ServiceH1 = styled.h1`
color:#fff;
font-size:2.5rem;
margin-bottom:64px;
@media screen and (max-width:480px){
   font-size: 2rem;
    }
`

export const ServiceH2 = styled.h2`
font-size:1rem;
margin-bottom:10px;
`
export const ServiceP = styled.p`
font-size:1rem;
text-align:center;
`
