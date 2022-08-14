/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaPhone,
  FaUserGraduate,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import {
  DiHtml5,
  DiReact,
  DiCss3,
  DiNodejsSmall,
  DiPython,
  DiMysql,
  DiPostgresql,
} from "react-icons/di";

export const Contact = [
  {
    description: "São Paulo, Brazil",
    icon: <MdLocationOn />,
  },
  {
    description: "+55 14 99900-2193",
    icon: <FaPhone />,
  },
  {
    description: "Information Systems",
    icon: <FaUserGraduate />,
  },
  {
    description: "Reinaldo Ferreira",
    icon: <FaLinkedin />,
    link: (
      <a href="https://www.linkedin.com/in/reinaldo-ferreira1/" target="_blank">
        Reinaldo Ferreira
      </a>
    ),
  },
  {
    description: "Referreira",
    icon: <FaGithub />,
    link: (
      <a href="https://github.com/ReFerreira" target="_blank">
        Referreira
      </a>
    ),
  },
  {
    description: "rgferreira90@gmail.com",
    icon: <FaRegEnvelope />,
  },
];

export const SkillsConstant = [
  <DiReact />,
  <DiHtml5 />,
  <DiCss3 />,
  <DiNodejsSmall />,
  <DiPython />,
  <DiMysql />,
  <DiPostgresql />,
];
