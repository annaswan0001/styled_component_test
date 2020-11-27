import React from 'react'
          
import { FormButton, FormWrap,FormContent, FormInput, Container, Icon, Form,FormH1,FormLabel,Text } from './signInElements'

export default function SignIn() {
    return (
       <Container>
           <FormWrap>
               <Icon to="/">dolla</Icon>
               <FormContent>
                   <Form>
                       <FormH1>
                         Sign in to your account
                       </FormH1>
                       <FormLabel  htmlFor="email">Email</FormLabel>
                       <FormInput type="email" required/>
                       <FormLabel  htmlFor="password">Password</FormLabel>
                       <FormInput type="password" required/>
                       <FormButton>Submit</FormButton>
                       <Text>Forgot password</Text>
                   </Form>
               </FormContent>
     
           </FormWrap>
       </Container>
    )
}

