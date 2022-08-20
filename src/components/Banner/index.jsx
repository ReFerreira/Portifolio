/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import { Container, Content } from "./styles";
import ContactList from "../ContactList";
import Profile from "../Profile";
import ToggleTheme from "../ToggleTheme";

export default function Banner({ toggleTheme }) {
  return (
    <Container>
      <div className="profile-resposive">
        <Content>
          <aside className="profile">
            <Profile />
            <ContactList />
          </aside>
          <ToggleTheme toggleTheme={toggleTheme} />
        </Content>
      </div>
    </Container>
  );
}
