import React from 'react'
import { styled } from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import Comments from '../Components/Comments';
import Cards from '../Components/Cards';
const Container=styled.div`
display:flex;
gap:24px;
`

const Content=styled.div`
flex:5;`
const VideoWrapper=styled.div``
const  Title=styled.h1`
font-size:18px;
font-weight:400;
margin-top:15px;
color:${({theme})=>theme.text};
`;
const  Details=styled.div`
margin-top:-10px;
display:flex;
align-items:center;
justify-content:space-between;
`;
const Info = styled.span`
  .dot {
    font-size: 2.5em; /* Adjust the size as needed */
    margin: 0 0px; /* Add some spacing around the dot */
  }
 color:${({theme})=>theme.textSoft};
`;
const  Buttons=styled.div`
display:flex;
gap:20px;
color:${({theme})=>theme.text}; 
`;
const  Button=styled.div`
display:flex;
align-items:center;
gap: 5px;
cursor:pointer;
`;
const Hr=styled.hr`
margin:10px 0px;
border:0.5px solid ${({theme})=>theme.soft}
`
const Recommendation=styled.div`
flex:2;`
const Channel=styled.div`
display:flex;
justify-content:space-between;
margin-top:20px;
`


const ChannelInfo=styled.div`
display:flex;
align-items:center;
margin-left:10px;

`
const Avatar=styled.img`
width:2.5rem;
height:2.5rem;
border-radius:50%;
`
const ChannelDetail=styled.div`
display:flex;
flex-direction:column; 
color:${({theme})=>theme.text};`



const ChannelName=styled.span`
font-weight:500;`

const ChannelCounter=styled.span`
margin-top:5px;
margin-bottom:10px;
color:${({theme})=>theme.textSoft} ;
font-size:15px;

`

const Description=styled.p`
font-size:12px;`

const Subscribe=styled.button`
background-color:red;
font-weight:500;
color:white;
border:none;
border-radius:3px;
height:max-content;
padding:8px 20px;
cursor:pointer;`

const Video = () => {
  return (
    <Container>
    <Content> 
      <VideoWrapper>
  <iframe
  width="100%"
  height="450"
  src="https://www.youtube.com/embed/l1EssrLxt7E"
  title="Youtube Video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  >

  </iframe>
      </VideoWrapper>
      <Title>Test Video</Title>
      <Details>
        <Info>7,948,154 views <span className="dot">.</span> jun 22,2023</Info>
        <Buttons>
          <Button ><ThumbUpOutlinedIcon/>123</Button>
          <Button><ThumbDownOutlinedIcon /> Dislike</Button>
          <Button><ShareOutlinedIcon/> Share</Button>
          <Button><LibraryAddRoundedIcon/> Save</Button>
          
        </Buttons>
      </Details>
      <Hr/>
      <Channel>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLH-uhr77hgvb2BmVjxp6_wQ0LcZKvvVxvA&usqp=CAU"/>
      <ChannelInfo>
     
      <ChannelDetail>
      <ChannelName>Saleem tube</ChannelName>
      <ChannelCounter>200k</ChannelCounter>
      <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui illo molestiae doloribus excepturi recusandae porro. Et perferendis neque dolor? Mollitia, error quam debitis tempora dolore ex iure! Nesciunt quia consequatur error rem iusto cupiditate dicta officiis incidunt, earum in quas cum maiores ut repudiandae sed.</Description>
      </ChannelDetail>
       </ChannelInfo>
       <Subscribe>
       SUBSCRIBE
        </Subscribe>
      </Channel>
      <Hr/>
      <Comments/>
    </Content>
    <Recommendation>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
    </Recommendation>
    </Container>
  )
}

export default Video
