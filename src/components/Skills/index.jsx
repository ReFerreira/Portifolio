import React from 'react';
import { FaListUl } from 'react-icons/fa';
import { SkillsConstant } from '../../constants';
import { Skills as SkillsContainers } from './styles';

const Skills = () => {
  return (
    <SkillsContainers>
    <strong>
      <FaListUl />
      Skills
    </strong>
    <ul>
      {SkillsConstant.map((skils) => (
        <li key={Math.random()}>{skils}</li>
      ))}
    </ul>
  </SkillsContainers>
  );
}

export default Skills;