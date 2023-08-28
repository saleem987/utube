import React from 'react'
import { styled } from 'styled-components'
const Container=styled.div`

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
color:${({theme})=>theme.text};

`
const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:20px 50px;
border:1px solid ${({theme})=>theme.soft};
background-color:${({theme})=>theme.bgLighter};
gap:10px;

`
const Title=styled.h1`
font-size:24px`

const SubTitle=styled.h2`
font-size:20px;
font-weight:300;`

const Input=styled.input`
border:2px solid ${({theme})=>theme.soft};
border-radius:3px;
padding:10px;
background-color:transparent;
width:100%;`

const Button=styled.button`
border-radius:3px;
border:none;
padding:10px 20px;
font-weight:500;
cursor:pointer;
background-color:${({theme})=>theme.soft};
color:${({theme})=>theme.textSoft};
  `
  
const More=styled.div`
display:flex;
margin-top:8px;
font-size:14px;
color:${({theme})=>theme.textSoft};`

const Links=styled.div`
margin-left:50px;`

const Link=styled.span`
margin-left:20px;`

const Signin = () => {
  return (
    <Container> <Wrapper>
      <Title>Sign in</Title>
      <SubTitle>to continue to SaleemTube</SubTitle>
      <Input placeholder="username"/>
      <Input type="password" placeholder="password"/>
      <Button>Sign in</Button>
      <Title>or</Title>
      <Input placeholder="username"/>
      <Input placeholder="email"/>
      <Input type="password" placeholder="  password"/>
      <Button>Sign up</Button> 
      </Wrapper>
      <More>
        ENGLISH(USA)
        <Links>
        <Link> Help </Link>
        <Link>Privacy</Link>
        <Link>Terms</Link>

        
        </Links>
        </More> 
      </Container>
    
   
  )
}

export default Signin
