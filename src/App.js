import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 4rem;
  z-index: 1;
`;

function App() {
  return (
    <AppContainer>
      <VideoBackground autoPlay loop muted>
        <source src="1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Navbar />
      <Header>Witamy na naszej stronie!</Header>
    </AppContainer>
  );
}

export default App;
