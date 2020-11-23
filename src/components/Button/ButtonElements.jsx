import styled from 'styled-components'
import {Link} from 'react-scroll'


export const Button = styled(Link)`
border-radius: 50px;
white-space:nowrap;
background: ${({primary})=>primary ? "#01bf71" : "#010606"};
padding: ${({big}) => big ? "14px 48px" : "12px 30px"};
font-size: ${({fontBig})=> fontBig ? "20px" : "16px" };
color: ${({dark})=> dark ? "#010606" : "#fff"};
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
outline:none;
border: none;
transition: all 0.2s ease-in-out;

&:hover{
    background: ${({primary})=>primary ? "#fff" : "#01bf71"};
    transition: all 0.2s ease-in-out;
}


`
