import styled, { ThemeProvider } from "styled-components";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { darkTheme,lightTheme } from "./Components/Utils/Theme";
import { useState } from "react";
import Home from "./Pages/Home"; 
import Video from "./Pages/Video";
import Signin from "./Pages/Signin";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";




const Container=styled.div `
display:flex;


`
const Main=styled.div`
flex:7;
background-color:${({theme})=>theme.bg}`;
const Wrapper=styled.div`
padding:22px 20px;
`;

function App() {
  const [darkMode,setDarkMode]=useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    
   <Container>
    <BrowserRouter>
 <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
 <Main>
 <Navbar/>
 <Wrapper>
  <Routes>
    <Route path="/">
<Route index element={<Home/>}/>
<Route path ="signin" element={<Signin/>}/>

<Route path="video">
<Route path=":id" element={<Video/>}/>
</Route>
    </Route>
  </Routes>
 </Wrapper>
 </Main>
 </BrowserRouter>
   </Container>
   </ThemeProvider>
   
        
  );
}

export default App;
