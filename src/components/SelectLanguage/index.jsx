import React from "react";

import { Container } from "./styles";

const SelectLanguage = () => {
  return (
    <Container>
      <select name="lng" id="lng">
        <option value="pt-Br">PT</option>
        <option value="es">ES</option>
        <option value="en-US">EN</option>
      </select>
    </Container>
  );
};

export default SelectLanguage;
