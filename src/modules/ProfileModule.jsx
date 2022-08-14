import React from 'react';
import ContactList from '../components/ContactList';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import ToggleTheme from '../components/ToggleTheme';

import { Content } from "./styles";;

const ProfileModule = ({toggleTheme}) => {
  return (
    <div className="container">
      <Content>
        <aside className="profile">
          <Profile />
          <ContactList />
          <Skills />
          <ToggleTheme toggleTheme={toggleTheme} />
        </aside>
      </Content>
    </div>
  );
}

export default ProfileModule;