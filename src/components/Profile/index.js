/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {MdLocationOn} from 'react-icons/md';
import {FaLinkedin, 
        FaGithub, 
        FaRegEnvelope, 
        FaPhone, 
        FaListUl, 
        FaUserGraduate
        } from 'react-icons/fa'
import { DiHtml5, DiReact, DiCss3, DiNodejsSmall, DiPython, DiMysql, 
        DiPostgresql} from 'react-icons/di'

import foto from '../../assets/images/profile.jpg'

import { Content, Perfil, List, Skills } from './styles';
 
export default function Profile() {
  return (
      <div className="container">
      <Content>
        <aside className="profile">
          <Perfil>
            <img className="avatar" src={foto} alt="Reinaldo Ferreira"/>
              <h1>Reinaldo Ferreira</h1>
              <span>Software Engineer</span>
              <p>ReactJs | NodeJs |</p>
              <p>React Native</p>
          </Perfil>

          <List>
            <li>
              <MdLocationOn/>
              São Paulo, Brazil
            </li>
            <li>
              <FaPhone/>
              +55 14 99900-2193
            </li>
            <li>
              <FaUserGraduate/>
              Information Systems
            </li>
            <li>
              <FaLinkedin/>
              <a href="https://www.linkedin.com/in/reinaldo-ferreira1/" target="_blank">
                Reinaldo Ferreira
              </a>
            </li>
            <li>
              <FaRegEnvelope />
              rgferreira90@gmail.com
            </li>
            <li>
              <FaGithub/>
              <a href="https://github.com/ReFerreira" target="_blank">
              Referreira
              </a>
            </li>
          </List>

          <Skills>
            <strong><FaListUl />Skills</strong>
            <ul>
              <li><DiReact/></li>
              <li><DiHtml5/></li>
              <li><DiCss3/></li>
              <li><DiNodejsSmall/></li>
              <li><DiPython/></li>
              <li><DiMysql/></li>
              <li><DiPostgresql/></li>
            </ul>
          </Skills>
        </aside>
      </Content>   
    </div>   
  );
}
