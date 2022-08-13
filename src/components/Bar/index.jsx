import React from 'react';
import {Link} from 'react-router-dom';

import { Nav } from './styles';

export default function Bar() {
  return (
      <Nav>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link> 
        <Link to="/experience">Experience</Link>
      </Nav>
  );
}
 