/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { MdLocationOn } from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaPhone,
  FaListUl,
  FaUserGraduate,
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

import { Content, Perfil, List, Skills, Text } from "./styles";
import ToggleTheme from "./ToggleTheme";

const ContactList = [
  {
    description: <Text>São Paulo, Brazil</Text>,
    icon: <MdLocationOn />,
  },
  {
    description: <Text>+55 14 99900-2193</Text>,
    icon: <FaPhone />,
  },
  {
    description: <Text>Information Systems</Text>,
    icon: <FaUserGraduate />,
  },
  {
    description: <Text>Reinaldo Ferreira</Text>,
    icon: <FaLinkedin />,
    link: (
      <a href="https://www.linkedin.com/in/reinaldo-ferreira1/" target="_blank">
        <Text>Reinaldo Ferreira</Text>
      </a>
    ),
  },
  {
    description: <Text>Referreira</Text>,
    icon: <FaGithub />,
    link: (
      <a href="https://github.com/ReFerreira" target="_blank">
        <Text>Referreira</Text>
      </a>
    ),
  },
  {
    description: <Text>rgferreira90@gmail.com</Text>,
    icon: <FaRegEnvelope />,
  },
];

const SkillsConstant = [
  <DiReact />,
  <DiHtml5 />,
  <DiCss3 />,
  <DiNodejsSmall />,
  <DiPython />,
  <DiMysql />,
  <DiPostgresql />,
];

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

          <List>
            {ContactList.map(({ description, icon, link }) => (
              <li key={Math.random()}>
                {icon}
                <span>{link ? link : description}</span>
              </li>
            ))}
          </List>

          <Skills>
            <strong>
              <FaListUl />
              Skills
            </strong>
            <ul>
              {SkillsConstant.map((skils) => (
                <li key={Math.random()}>{skils}</li>
              ))}
            </ul>
          </Skills>
          <ToggleTheme toggleTheme={toggleTheme} />
        </aside>
      </Content>
    </div>
  );
}
