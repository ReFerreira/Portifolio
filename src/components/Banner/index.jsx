/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {
  FaListUl,
} from "react-icons/fa";
import {
  DiHtml5,
  DiReact,
  DiCss3,
  DiNodejsSmall,
  DiPython,
  DiMysql,
  DiPostgresql,
} from "react-icons/di";

import foto from "../../assets/images/profile.jpg";

import { Container, Content, Perfil, Skills } from "./styles";
import Logo from "../../assets/images/banner.jpg";
import ContactList from "../ContactList";

export default function Banner() {
  return (
    <Container>
      <div className="banner">
        <img src={Logo} alt="" />
      </div>
      <div className="profile-resposive">
        <Content>
          <aside className="profile">
            <Perfil>
              <img className="avatar" src={foto} alt="Reinaldo Ferreira" />
              <h1>Reinaldo Ferreira</h1>
              <span>Full-Stack Developer</span>
              <p>ReactJs | NodeJs |</p>
              <p>React Native</p>

              <ContactList />
            </Perfil>

            <div className="details">
              <Skills>
                <strong>
                  <FaListUl />
                  Skills
                </strong>
                <ul>
                  <li>
                    <DiReact />
                  </li>
                  <li>
                    <DiHtml5 />
                  </li>
                  <li>
                    <DiCss3 />
                  </li>
                  <li>
                    <DiNodejsSmall />
                  </li>
                  <li>
                    <DiPython />
                  </li>
                  <li>
                    <DiMysql />
                  </li>
                  <li>
                    <DiPostgresql />
                  </li>
                </ul>
              </Skills>
            </div>
          </aside>
        </Content>
      </div>
    </Container>
  );
}
