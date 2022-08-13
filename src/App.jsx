import React from "react";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import { Container, Content } from "./styles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Banner />
        <Content>
          <Profile toggleTheme={toggleTheme} />
          <Routes />
        </Content>
        <GlobalStyle />
      </Container>
    </ThemeProvider>
  );
}

export default App;
