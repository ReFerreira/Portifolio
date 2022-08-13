import React from 'react';

import Bar from '../../components/Bar';

import { Container, Content } from './styles';

export default function Projects() {
  return (
    <Container>
      <Bar />
      <Content>
          <img src="https://media-exp1.licdn.com/dms/image/C510BAQFxHGWL83TwOQ/company-logo_100_100/0?e=1595462400&v=beta&t=Qc3bkLGnvlOq2w6XDBpstKA9g-OYbRtF8o67MN9E0fY"
            alt="FATEC-BT"/>
          <div className="details">
            <h3>Web Developer</h3>
              <strong>Embraer - Full-time</strong>
              <span>Oct 2018 - Present 1 yr 7 mos</span>
              <span>Botucatu, Brazil</span>
              <article>
                <p>Responsible for the coding and find IT solution according to a company need:</p>
                <ul>
                <li>
                  - Develop solution in key tasks
                </li>
                <li>
                  - reducing runtime and higher reliability
                </li>
                </ul>
                <p>Key achievements:</p>
                <ul>
                <li>
                  - Hit 120% of the target in the first 2 quarters
                </li>
                <li>
                  - Awarded as one of the best ideas implemented in 2019
                </li>
              </ul>
              </article>
            </div>
      </Content>           
    </Container>
  );
}
