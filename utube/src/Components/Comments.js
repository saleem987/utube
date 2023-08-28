
import React from 'react'
import { styled } from 'styled-components'
import Comment from '../Components/Comment';
const Container=styled.div``
const NewComment=styled.div`
display:flex;
align-items:center;
gap:10px`

const Avatar=styled.img`
width:36px;
height:36px;
border-radius:50%;`
const Input=styled.input`
border:none;
border-bottom: 1px solid ${({theme})=>theme.soft};
background-color:transparent;
outline: none;
padding:5px;
width:100%;

`

const Comments = () => {
  return (
    <Container>
      <NewComment>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLH-uhr77hgvb2BmVjxp6_wQ0LcZKvvVxvA&usqp=CAU"/>
      <Input placeholder="Add a comment..."/>
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments
