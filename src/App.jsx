import React from "react";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Banner from "./components/Banner";
import { Container, Content } from "./styles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { useState } from "react";
import ProfileModule from "./modules/ProfileModule";

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Banner toggleTheme={toggleTheme}/>
        <Content>
          <ProfileModule toggleTheme={toggleTheme} />
          <Routes />
        </Content>
        <GlobalStyle />
      </Container>
    </ThemeProvider>
  );
}

export default App;
