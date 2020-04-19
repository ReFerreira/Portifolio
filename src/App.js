import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Banner from './components/Banner';
import Profile from './components/Profile';
import {Container, Content} from './styles';

function App() {
  return (
      <Container>
        <Banner />
        <Content>
          <Profile/>
          <Routes />
        </Content>
        <GlobalStyle />
      </Container>
  );
}

export default App;
