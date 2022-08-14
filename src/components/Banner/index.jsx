/* eslint-disable react/jsx-no-target-blank */
import React from "react";


import { Container, Content } from "./styles";
import Logo from "../../assets/images/banner.jpg";
import ContactList from "../ContactList";
import Skills from "../Skills";
import Profile from "../Profile";
import ToggleTheme from "../ToggleTheme";

export default function Banner({ toggleTheme }) {
  return (
    <Container>
      <div className="banner">
        <img src={Logo} alt="" />
      </div>
      <div className="profile-resposive">
        <Content>
          <aside className="profile">
            <Profile />
            <ContactList />
          </aside>

          <div className="details">
            <Skills />
            <ToggleTheme toggleTheme={toggleTheme} />
          </div>
        </Content>
      </div>
    </Container>
  );
}
