import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container = styled.section`
min-height:692px;
position:fixed;
top:0px;
left:0px;
bottom:0px;
right:0px;
z-index:0;
overflow:hidden;
background:linear-gradient(
    108deg,
     rgba(1,147,86,1) 0%,
      rgba(10,201,122,1) 100%);
`
export const FormWrap = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
@media screen and (max-width: 400px ){
    height:80%;
}
`

export const Icon = styled(Link)`
margin-left:32px;
margin-top:32px;
text-decoration:none;
font-size:1.5rem;
color:#fff;
font-weight:700px;
@media screen and (max-width: 400px ){
margin-left:16px;
margin-top:8px;
}
`

export const FormContent = styled.div`
display:flex;
height:100%;
justify-content:center;
flex-direction:column;
@media screen and (max-width: 400px ){
padding:10px;
}
`

export const Form = styled.form`
background:#010101;
display:grid;
max-width:400px;
height:auto;
width:100%;
z-index:1;
margin: 0 auto;
padding: 80px 32px;
border-radius:4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
@media screen and (max-width: 400px ){
padding:32px 32px;
}
`

export const FormH1 = styled.div`
margin-bottom: 40px;
color:#fff;
font-size:1rem;
text-align:center;
font-weight:400px;
`


export const FormLabel = styled.label`
margin-bottom: 8px;
color: #fff;
font-size:0.9rem;
`


export const FormInput = styled.input`
margin-bottom: 32px;
padding:16px;
border:none;
border-radius:4px;

`

export const FormButton = styled.button`
background:#01bf71;
padding:16px;
border:none;
border-radius:4px;
color:#fff;
font-size:1.2rem;
cursor: pointer;
`


export const Text = styled.span`
text-align:center;
margin-top:24px;
color:#fff;
font-size:14px;
`