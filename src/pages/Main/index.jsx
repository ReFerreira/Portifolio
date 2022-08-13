/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import Bar from '../../components/Bar';
import { FaFileDownload } from 'react-icons/fa';

import { Container, Content, Header, About } from './styles';
import facebook from '../../assets/images/facebook.jpg';
import profile from '../../assets/CV/Profile.pdf';
export default function Main() {
  return (
    <Container>
      <Bar />

      <Content>
        <Header>
          <aside>
           <h1>Reinaldo Ferreira</h1>
            <strong>Full-Stack Developer</strong>
            <p>I'm a full-stack developer. I create interfaces in HTML/CSS and 
              I code entirely in JS, on the client and server-side</p>
            <p>Do you want to know how I may help in your team or project? Check out my project 
              portfolio and online resume</p>
            <button type="button">
              <div>
                <FaFileDownload />
                <a href={profile} target="_blank">Resume</a>
              </div>
              <span>
                
              </span>
            </button>
          </aside>
        </Header>

          <About>
            <aside>
              <img src={facebook} alt="Facebook"/>
            </aside>
            <div className="about">
            <p>The fact that technology can change people's lives made me turn into 
              an I.T. enthusiastic. I may not know what technology will provide us 
              in the future, but I am sure that each day we will depend more on 
              that and I want to be part of this.</p>
            
            <p>At the end of 2017, while I was doing an exchange in Dublin and getting 
              to know various companies and IT professionals I found an area that made 
              my eyes sparkle. That was when I took the decision of diving once and 
              for all in the Software Development area and not only work with things 
              I didn't like.</p>

            <p>Since then there are more than 2 years of experience, developing systems 
              and web applications at an aviation industry and freelance projects. 
              Besides many hours of study and research</p>

            </div>

          </About>
      </Content>
    </Container>
  );
}
