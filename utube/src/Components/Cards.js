import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Container=styled.div`
width:${(props)=>props.type!=="sm"&&"300px"};
margin-bottom:${(props)=>props.type==="sm"?"10px":"45px"};
cursor:pointer;
display:${(props)=>props.type==="sm"&&"flex"};
gap:10px;
`
const Image=styled.img`

width:100%;
height:${(props)=>props.type==="sm"?"120px":"202px"};
background-color:#999;
flex:1;
`
const Details=styled.div`
display:flex;
margin-top:${(props)=>props.type!=="sm"&&"16px"};
gap:0px;
flex:1;

`

const ChannelImage=styled.img`
width:40px;
height:40px;
border-radius:50%;
background-color:#999;
display:${(props)=>props.type==="sm"&&"none"};
`
const Text=styled.div`
margin-left:${(props)=>props.type!=="sm"&&"10px"};
`
const Title=styled.h1`
font-size:16px;
font-weight:500;
color:${({theme})=>theme.text};
`
const ChannleName=styled.h2`
font-size:14px;
color:${({theme})=>theme.textSoft};
margin:9px 0px;

`
const Info=styled.div`
font-size:14px;
font-weight:500;
color:${({theme})=>theme.textSoft};`
const Cards = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}> 
    <Container type={type}>
<Image  type={type} src="https://ccweb.imgix.net/https%3A%2F%2Fimg.youtube.com%2Fvi%2Fk3Vfj-e1Ma4%2Fhqdefault.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=355438c936ef3017decfc302c6165c20" />
<Details  type={type} >
  <ChannelImage  type={type} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLH-uhr77hgvb2BmVjxp6_wQ0LcZKvvVxvA&usqp=CAU"/>
  <Text>
    <Title>Test Video</Title>
    <ChannleName>Saleem tube</ChannleName>
    <Info>607,908 views . 1 day ago</Info>
  </Text>
</Details>
    </Container>
    </Link>
    
  )
}

export default Cards
