import React from "react";

import { Container } from "./styles";
import { useTranslation } from "react-i18next";

const SelectLanguage = () => {
  const { i18n } = useTranslation();

  const handleLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <Container>
      <select name="lng" id="lng" onChange={(e) => handleLanguage(e)}>
        <option value="pt">PT</option>
        <option value="en-US">EN</option>
      </select>
    </Container>
  );
};

export default SelectLanguage;
