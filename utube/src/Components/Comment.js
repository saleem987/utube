import React from 'react'
import { styled } from 'styled-components'
const Container=styled.div`
display:flex;
gap:10px;
margin:30px 0px;
flex-direction:row;
`

const Avatar=styled.img`

width:2.5rem;
height:2rem;
object-fit:cover;
border-radius:50%;

`
const Detail=styled.div`
display:flex;
flex-direction:column;
gap:10px;
color:${({theme})=>theme.text};
`

const Name=styled.span`
font-size:14px;
font-weight:500;`

const Date=styled.span`
font-size:13px;
font-weight:400;
color:${({theme})=>theme.textSoft};
margin-left:5px;`

const Text=styled.span`
font-size:14px;`
const Comment = () => {
  return (
    <Container>
 <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD7sZ5jeTuzNMp3Z1GI0pBTmBuGPVMRS8Ww&usqp=CAU"/>
 <Detail>
  <Name>Muzamil khan jfnnfafn <Date>1 day ago</Date></Name>
<Text>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero excepturi numquam voluptatem, eos necessitatibus, minus corporis nulla qui totam quos praesentium eligendi quia!
</Text>
 </Detail>
    </Container>
  )
}

export default Comment
