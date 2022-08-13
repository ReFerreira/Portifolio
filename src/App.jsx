import React from "react";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import { Container, Content } from "./styles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Container>
        <Banner />
        <Content>
          <Profile />
          <Routes />
        </Content>
        <GlobalStyle />
      </Container>
    </ThemeProvider>
  );
}

export default App;
