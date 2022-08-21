import React from "react";
import ContactList from "../components/ContactList";
import Profile from "../components/Profile";
import SelectLanguage from "../components/SelectLanguage";
import Skills from "../components/Skills";
import ToggleTheme from "../components/ToggleTheme";
import { Content, PrefenciesContainer } from "./styles";

const ProfileModule = ({ toggleTheme }) => {
  
  return (
    <div
      className="container"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Content>
        <aside className="profile">
          <div>
            <Profile />
            <ContactList />
            <Skills />
          </div>
          <PrefenciesContainer>
            <SelectLanguage />
            <ToggleTheme toggleTheme={toggleTheme} />
          </PrefenciesContainer>
        </aside>
      </Content>
    </div>
  );
};

export default ProfileModule;
