import React from 'react'
import styled from "styled-components";
import SaleemTube from  "../img/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperTwoToneIcon from '@mui/icons-material/NewspaperTwoTone';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link} from 'react-router-dom';
const Container=styled.div`
display: flex;
flex:1;
background-color:${({theme})=>theme.bgLighter};
height:100vh;
color:${({theme})=>theme.text};

font-size:14px;
position:sticky;
top:0;

`
const Wrapper=styled.div`
padding :0px 5px;


`
const Logo=styled.div`
display:flex;
align-items:center;
font-weight:bold;
margin-bottom:5px;

`
const Img=styled.img`
height:50px;
margin-right: -15px;
`
const Item=styled.div`
display:flex;
align-items:center;
padding:5.5px 20px;
cursor:pointer;
gap:5px;

&:hover{
  background-color:${({theme})=>theme.soft};
}

`
const Hr=styled.hr`
margin:5px 0px;
border:0.5px solid ${({theme})=>theme.soft};
`
const Login=styled.div`
`
const Button=styled.button`
padding: 5px 10px;
background-color:transparent;
border:2px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
margin-top:10px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`
const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
      
       <Wrapper>
       <Link to="/" style={{textDecoration:"none",color:'inherit'}}>
        <Logo>
            <Img src={SaleemTube}/>SaleemTube
            
        </Logo>
        </Link>
        <Item>
         <Link to="/" style={{textDecoration:"none",color:'inherit'}}>
          <HomeIcon/>
        
          Home
          </Link>
        </Item>
        <Item>
        <ExploreIcon/>
          explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
        Subcriptions
        </Item>
        <Hr/>
        <Item>
          <VideoLibraryOutlinedIcon/>
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon/>
          History
        </Item>
        <Hr/>
        
        <Login>
       
          Sign in to like videos,comment, and subscribe.<br/>
          <Link to="signin" style={{textDecoration:"none"}}>
          <Button><AccountCircleOutlinedIcon/>
            SIGN IN
          </Button>
          </Link>
        </Login>
        <Hr/>
        <Item>
          <LibraryMusicOutlinedIcon/>
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon/>
         Sports
        </Item>
        <Item>
          < MovieOutlinedIcon/>
          Movies
          </Item>
          <Item>
            <SportsEsportsOutlinedIcon/>
          Gaming
          </Item>
          <Item>
            <NewspaperTwoToneIcon/>
          News
          </Item>
          <Item>
            < LiveTvIcon/>
            Live
          </Item>
          <Hr/>
          <Item>
            < SettingsOutlinedIcon/>
            Setting
          </Item>
          <Item>
            <OutlinedFlagRoundedIcon/>
            report
          </Item>
          <Item>
            <HelpOutlineOutlinedIcon />
            help
          </Item>
          <Item onClick={()=>setDarkMode(!darkMode)}>
            <SettingsBrightnessOutlinedIcon/>
            {darkMode?"Light":"Dark"} Mode
          </Item>
        </Wrapper>
    </Container>
     
    
  )
}

export default Menu
