import React from "react";

import foto from "../../assets/images/profile.jpg";

import { Content, Perfil } from "./styles";
import ToggleTheme from "./ToggleTheme";
import ContactList from "../ContactList";
import Skils from "../Skils";

export default function Profile({ toggleTheme }) {
  return (
    <div className="container">
      <Content>
        <aside className="profile">
          <Perfil>
            <img className="avatar" src={foto} alt="Reinaldo Ferreira" />
            <h1>Reinaldo Ferreira</h1>
            <span>Software Engineer</span>
            <p>Frontend | ReactJs</p>
          </Perfil>
          <ContactList />
          <Skils />
          <ToggleTheme toggleTheme={toggleTheme} />
        </aside>
      </Content>
    </div>
  );
}
