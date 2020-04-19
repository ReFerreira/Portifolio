import React from 'react';

import Bar from '../../components/Bar';
import fatec from '../../assets/images/fatec.jpg'

import { Container, Content } from './styles';

export default function Projects() {
  return (
    <Container>
      <Bar />
      <Content>       
        <ul>
          <li>
            <div className="conteudo">
              <img src={fatec} alt="FATEC-BT"/>
              <div className="details">
                <strong>FACULDADE DE TECNOLOGIA SÃO PAULO (FATEC)</strong>
                <span>INFORMATION SYSTEMS</span>
              </div>
            </div>
            <span>
              2012 - 2017
            </span>
          </li>
          <li>
            <div className="conteudo">
              <img src="https://i0.wp.com/downloadcursos.top/wp-content/uploads/2020/02/ajtrsd.png?resize=598%2C500&ssl=1" alt="FATEC-BT"/>
              <div className="details">
                <strong>ROCKETSEAT</strong>
                <span>BOOTCAMP</span>
              </div>
            </div>
            <span>
              2019
            </span>
          </li>
        </ul>          
      </Content>          
    </Container>
  );
}
