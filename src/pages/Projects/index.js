/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Bar from '../../components/Bar';

import {DiCodeBadge} from 'react-icons/di';

import { Container, ProjectsList} from './styles';

import projects from '../../services/data';


export default function Projects() {
  return (
    <Container>
      <Bar /> 

      <ProjectsList>
        {projects.map(project =>(
          <li key={project.id}>
          <img src={project.img} alt={project.title}/>
          <strong>{project.title}</strong>
          <span>{project.description}</span>
          <a href={project.url} target="_blank">
            <div>
              <DiCodeBadge size={16} color="#FFF"/>
            </div>

            
            <span>CODE</span>
          </a>
        </li>
        ))}          
      </ProjectsList>
    </Container>
  );
}
  