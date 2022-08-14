import React from 'react';
import { FaListUl } from 'react-icons/fa';
import { SkillsConstant } from '../../constants';
import { Skills } from './styles';

const Skils = () => {
  return (
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
  );
}

export default Skils;